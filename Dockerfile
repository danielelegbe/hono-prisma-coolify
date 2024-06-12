# Use the official Node.js 20 image as the base image
FROM node:20-alpine AS base

# Use the base image to create a builder stage
FROM base AS builder

# Install libc6-compat for compatibility and pnpm for package management
RUN apk add --no-cache libc6-compat && \
    npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json, pnpm-lock.yaml, tsconfig.json, the src directory, and the Prisma schema to the working directory
COPY package.json pnpm-lock.yaml tsconfig.json prisma ./prisma/
COPY src ./src

# Install dependencies using pnpm, including Prisma CLI
RUN pnpm install --frozen-lockfile && \
    pnpm add @prisma/cli

# Generate Prisma client files
RUN npx prisma generate

# Build the application and prune dev dependencies
RUN pnpm run build && \
    pnpm prune --prod

# Create a new stage from the base image for running the application
FROM base AS runner

# Set the working directory inside the container
WORKDIR /app

# Create a non-root user with a specific UID and GID
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 hono

# Copy necessary files from the builder stage to the runner stage, including generated Prisma client
COPY --from=builder --chown=hono:nodejs /app/node_modules /app/node_modules
COPY --from=builder --chown=hono:nodejs /app/dist /app/dist
COPY --from=builder --chown=hono:nodejs /app/package.json /app/package.json
COPY --from=builder --chown=hono:nodejs /app/prisma /app/prisma

# Set the user to the non-root user created earlier
USER hono

# Expose port 3000
EXPOSE 3000

# Set the default command to run the application
CMD ["node", "/app/dist/index.js"]

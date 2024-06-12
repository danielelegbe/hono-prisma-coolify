import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { prisma } from "lib/db";
import { PostCreateInputSchema } from "lib/generated/zod";

export const postsApp = new Hono()
  .get("/", async (c) => {
    const posts = await prisma.post.findMany();
    return c.json(posts);
  })
  .post("/", zValidator("json", PostCreateInputSchema), async (c) => {
    const postBody = c.req.valid("json");

    const post = await prisma.post.create({
      data: postBody,
    });

    return c.json(post);
  });

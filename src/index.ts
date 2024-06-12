import { Hono } from "hono";
import { postsApp } from "routes/posts";
import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";

const api = new Hono().basePath("/api");

api.use(logger());

api.route("/posts", postsApp);

export default api;

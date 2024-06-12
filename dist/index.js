import { Hono } from "hono";
import { postsApp } from "routes/posts";
import { logger } from "hono/logger";
import { serve } from "@hono/node-server";
const api = new Hono().basePath("/api");
api.use(logger());
api.route("/posts", postsApp);
serve(api);
export default api;

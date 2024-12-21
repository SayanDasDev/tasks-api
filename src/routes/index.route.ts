import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/create-app";

const router = createRouter()
  .openapi(createRoute({
    tags: ["index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema("Welcome to the Tasks API!"),
        "Tasks API welcome message",
      ),
    },
  }), (c) => {
    return c.json({
      message: "Welcome to the Tasks API!",
    }, HttpStatusCodes.OK);
  });

export default router;

import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdUUIDParamsSchema } from "stoker/openapi/schemas";

import { insertTasksSchema, selectTasksSchema } from "@/db/schema";
import { notFoundSchema } from "@/lib/constants";

const tags = ["tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(selectTasksSchema),
      "List of tasks",
    ),
  },
});

export const getOne = createRoute({
  path: "/tasks/{id}",
  method: "get",
  tags,
  request: {
    params: IdUUIDParamsSchema,
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      selectTasksSchema,
      "Requested Task",
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "Task not found",
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdUUIDParamsSchema),
      "Invalid ID",
    ),
  },
});

export const create = createRoute({
  path: "/tasks",
  method: "post",
  tags,
  request: {
    body: jsonContentRequired(
      insertTasksSchema,
      "Task to create",
    ),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      selectTasksSchema,
      "Created task",
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(insertTasksSchema),
      "Validation error(s)",
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;

// schema.ts
import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

import { timestamps } from "./columns.helpers";

export const tasks = pgTable("tasks", {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  completed: boolean().notNull().default(false),
  ...timestamps,
});

export const selectTasksSchema = createSelectSchema(tasks);

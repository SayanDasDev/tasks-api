// schema.ts
import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { timestamps } from "./columns.helpers";

export const tasks = pgTable("tasks", {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  completed: boolean().notNull().default(false),
  ...timestamps,
});

export const selectTasksSchema = createSelectSchema(tasks);
export const insertTasksSchema = createInsertSchema(
  tasks,
  {
    title: schema => schema.min(1).max(500),
  },
).required({
  completed: true,
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const patchTaskSchema = insertTasksSchema.partial();

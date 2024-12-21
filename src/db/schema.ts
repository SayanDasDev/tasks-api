// schema.ts
import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

import { timestamps } from "./columns.helpers";

export const tasks = pgTable("tasks", {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  completed: boolean().default(false),
  ...timestamps,
});

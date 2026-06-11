import { snakeCase, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const widgets = snakeCase.table("widgets", {
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  displayName: text().notNull(),
  id: uuid().primaryKey().defaultRandom(),
});

export const schema = { widgets };

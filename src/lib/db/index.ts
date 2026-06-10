import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";

import { relations } from "@/lib/db/relations/auth";
import * as schema from "@/lib/db/schema";

const client = new SQL(process.env.DATABASE_URL!, {
  ssl: process.env.NODE_ENV !== "development",
});

export const db = drizzle({
  client,
  casing: "snake_case",
  schema,
  relations,
});

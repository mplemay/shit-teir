import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { getSslOption } from "@/lib/db/connection";
import { relations } from "@/lib/db/relations";
import { schema } from "@/lib/db/schema";

const connectionString = process.env.DATABASE_URL!;

const client = postgres(connectionString, {
  ssl: getSslOption(connectionString),
});

export const db = drizzle({ client, relations, schema });

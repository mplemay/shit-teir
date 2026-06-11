import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

import { getSslOption } from "@/lib/db/connection";

dotenv.config();

const url = process.env.DATABASE_URL_DIRECT ?? process.env.DATABASE_URL!;

export default defineConfig({
  dbCredentials: {
    ssl: getSslOption(url),
    url,
  },
  dialect: "postgresql",
  out: "./supabase/migrations",
  schema: "./src/lib/db/schema/index.ts",
  strict: true,
  verbose: true,
});

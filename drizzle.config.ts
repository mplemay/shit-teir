import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema/index.ts",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  casing: "snake_case",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    ssl: process.env.NODE_ENV !== "development",
  },
});

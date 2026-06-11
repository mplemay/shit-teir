import { defineRelations } from "drizzle-orm";

import { schema } from "@/lib/db/schema";

export const relations = defineRelations(schema);

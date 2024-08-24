import { serial, varchar, pgTable, text } from "drizzle-orm/pg-core";
export const AIOutput=pgTable('AIOutput',{
    id:serial('id').primaryKey(),
    formData: varchar('formData'),
    aiRespones:text('aiRespones'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy'),
    createdAt: varchar('createdAt')
})
import { sql } from "drizzle-orm";
import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { users } from "./auth-schema";

export const notes = mysqlTable("note", {
  id: int("id").primaryKey().autoincrement().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 500 }).notNull(),
  content: text("content").notNull(),
  createdAt: int("createdAt")
    .notNull()
    .default(sql`(unix_timestamp())`),
  userId: varchar("userID", { length: 255 }).references(() => users.id, {
    onDelete: "cascade",
  }),
});

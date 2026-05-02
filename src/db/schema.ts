import { serial, text, timestamp, unique } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'

export const mySchema = t.pgSchema("rent");

export const todos = mySchema.table('todos', {
  id: serial().primaryKey(),
  title: text().notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})


export const waitlist = mySchema.table(
  'waitlist',
  {
    id: serial().primaryKey(),
    email: text().notNull(),
    role: text().notNull().default('publisher'), // 'publisher' | 'sponsor'
    createdAt: timestamp('created_at').defaultNow(),
  },
  (t) => [unique('waitlist_email_unique').on(t.email)],
)

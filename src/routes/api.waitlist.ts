import { createFileRoute } from '@tanstack/react-router'
import { db } from '#/db'
import { waitlist } from '#/db/schema'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const Route = createFileRoute('/api/waitlist')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => null)

        if (!body) {
          return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
        }

        const schema = z.object({
          email: z.string().email('Please enter a valid email address'),
          role: z.enum(['publisher', 'sponsor']).default('publisher'),
        })

        const parsed = schema.safeParse(body)
        if (!parsed.success) {
          return Response.json(
            { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
            { status: 422 },
          )
        }

        const { email, role } = parsed.data

        // Check for duplicate
        const existing = await db
          .select({ id: waitlist.id })
          .from(waitlist)
          .where(eq(waitlist.email, email))
          .limit(1)

        if (existing.length > 0) {
          return Response.json(
            { error: "You're already on the waitlist!" },
            { status: 409 },
          )
        }

        await db.insert(waitlist).values({ email, role })

        return Response.json({ success: true })
      },
    },
  },
})

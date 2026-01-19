type RsvpPayload = {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
  phone?: unknown
  additionalGuests?: unknown
  dietaryNotes?: unknown
  joinPreWedding?: unknown
  message?: unknown
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function toOptionalTrimmedString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed.length ? trimmed : undefined
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as RsvpPayload

  if (!isNonEmptyString(body.firstName)) {
    throw createError({ statusCode: 400, statusMessage: 'First name is required.' })
  }

  if (!isNonEmptyString(body.lastName)) {
    throw createError({ statusCode: 400, statusMessage: 'Last name is required.' })
  }

  if (!isNonEmptyString(body.email) || !body.email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'A valid email is required.' })
  }

  const additionalGuests = Number(body.additionalGuests ?? 0)
  if (!Number.isFinite(additionalGuests) || additionalGuests < 0 || additionalGuests > 4) {
    throw createError({ statusCode: 400, statusMessage: 'Additional guests must be between 0 and 4.' })
  }

  if (typeof body.joinPreWedding !== 'boolean') {
    throw createError({ statusCode: 400, statusMessage: 'Please answer the Pre-Wedding Gathering question.' })
  }

  const payload = {
    firstName: body.firstName.trim(),
    lastName: body.lastName.trim(),
    email: body.email.trim(),
    phone: toOptionalTrimmedString(body.phone),
    additionalGuests,
    dietaryNotes: toOptionalTrimmedString(body.dietaryNotes),
    joinPreWedding: body.joinPreWedding,
    message: toOptionalTrimmedString(body.message)
  }

  console.log('[rsvp] received', payload)

  return { ok: true }
})

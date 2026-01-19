import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function toOptionalTrimmedString(value) {
  if (typeof value !== "string") return void 0;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : void 0;
}
const rsvp_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  if (!isNonEmptyString(body.firstName)) {
    throw createError({ statusCode: 400, statusMessage: "First name is required." });
  }
  if (!isNonEmptyString(body.lastName)) {
    throw createError({ statusCode: 400, statusMessage: "Last name is required." });
  }
  if (!isNonEmptyString(body.email) || !body.email.includes("@")) {
    throw createError({ statusCode: 400, statusMessage: "A valid email is required." });
  }
  const additionalGuests = Number((_a = body.additionalGuests) != null ? _a : 0);
  if (!Number.isFinite(additionalGuests) || additionalGuests < 0 || additionalGuests > 4) {
    throw createError({ statusCode: 400, statusMessage: "Additional guests must be between 0 and 4." });
  }
  if (typeof body.joinPreWedding !== "boolean") {
    throw createError({ statusCode: 400, statusMessage: "Please answer the Pre-Wedding Gathering question." });
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
  };
  console.log("[rsvp] received", payload);
  return { ok: true };
});

export { rsvp_post as default };
//# sourceMappingURL=rsvp.post.mjs.map

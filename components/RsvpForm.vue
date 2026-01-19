<script setup lang="ts">
import { computed, ref } from 'vue'

type RsvpPayload = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  additionalGuests: number
  dietaryNotes?: string
  joinPreWedding: boolean | null
  message?: string
}

const form = ref<RsvpPayload>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  additionalGuests: 0,
  dietaryNotes: '',
  joinPreWedding: null,
  message: ''
})

const submitting = ref(false)
const submitted = ref(false)
const errorMsg = ref<string | null>(null)

const canSubmit = computed(() => {
  const f = form.value
  return (
    f.firstName.trim().length > 0 &&
    f.lastName.trim().length > 0 &&
    f.email.trim().length > 0 &&
    f.joinPreWedding !== null &&
    !submitting.value
  )
})

async function submit() {
  errorMsg.value = null
  submitted.value = false

  if (!canSubmit.value) {
    errorMsg.value = 'Please fill in the required fields.'
    return
  }

  submitting.value = true
  try {
    await $fetch('/api/rsvp', {
      method: 'POST',
      body: {
        ...form.value,
        firstName: form.value.firstName.trim(),
        lastName: form.value.lastName.trim(),
        email: form.value.email.trim()
      }
    })

    submitted.value = true
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      additionalGuests: 0,
      dietaryNotes: '',
      joinPreWedding: null,
      message: ''
    }
  } catch (err: any) {
    errorMsg.value = err?.data?.statusMessage || err?.data?.message || err?.message || 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="form" @submit.prevent="submit">
    <div class="row">
      <div class="field">
        <label for="firstName">First Name *</label>
        <input id="firstName" v-model="form.firstName" class="input" autocomplete="given-name" />
      </div>

      <div class="field">
        <label for="lastName">Last Name *</label>
        <input id="lastName" v-model="form.lastName" class="input" autocomplete="family-name" />
      </div>
    </div>

    <div class="field">
      <label for="email">Email *</label>
      <input id="email" v-model="form.email" class="input" type="email" autocomplete="email" />
    </div>

    <div class="field">
      <label for="phone">Phone (optional)</label>
      <input id="phone" v-model="form.phone" class="input" type="tel" autocomplete="tel" />
    </div>

    <div class="field">
      <label for="additionalGuests">How many more guest will attend?</label>
      <select id="additionalGuests" v-model.number="form.additionalGuests" class="select">
        <option :value="0">0</option>
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>
      </select>
    </div>

    <div class="field">
      <label for="dietaryNotes">Do you have any allergies or dietary preferences we should be aware of?</label>
      <textarea id="dietaryNotes" v-model="form.dietaryNotes" class="textarea" />
    </div>

    <fieldset class="field">
      <legend>Will you be able to join us for the Pre-Wedding Gathering on September 26? *</legend>
      <div class="radios">
        <label class="radio">
          <input v-model="form.joinPreWedding" type="radio" :value="true" />
          <span>Yes. Count me in!</span>
        </label>
        <label class="radio">
          <input v-model="form.joinPreWedding" type="radio" :value="false" />
          <span>No. I will join the main celebration only.</span>
        </label>
      </div>
    </fieldset>

    <div class="field">
      <label for="message">Leave us a message or a wish for our big day!</label>
      <textarea id="message" v-model="form.message" class="textarea" />
    </div>

    <button class="btn" type="submit" :disabled="!canSubmit">
      <span v-if="submitting">Submitting…</span>
      <span v-else>Submit</span>
    </button>

    <p v-if="submitted" class="success">Thanks! We’ve received your RSVP.</p>
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    <p class="small">We’ll only use this info for wedding planning.</p>
  </form>
</template>

<style scoped>
.row{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.field{ display: grid; gap: 6px; }
fieldset{
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 12px;
  padding: 12px;
  background: rgba(255,255,255,.65);
}
legend{ font-weight: 700; font-size: 14px; padding: 0 6px; }
.radios{ display: grid; gap: 10px; margin-top: 8px; }
.radio{ display: grid; grid-template-columns: 18px 1fr; gap: 10px; align-items: start; }

.error{ color: #8b1d1d; margin: 0; }
.success{ color: #0b6b2a; margin: 0; }

button[disabled]{ opacity: .6; cursor: not-allowed; }

@media (max-width: 650px){
  .row{ grid-template-columns: 1fr; }
}
</style>

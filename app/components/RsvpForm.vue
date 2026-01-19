<script setup lang="ts">
import { computed, ref } from 'vue'

type RsvpPayload = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  additionalGuests: number | null
  dietaryNotes?: string
  joinPreWedding: boolean | null
  message?: string
}

const form = ref<RsvpPayload>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  additionalGuests: null,
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
    f.additionalGuests !== null &&
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
        additionalGuests: form.value.additionalGuests ?? 0,
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
      additionalGuests: null,
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
  <form class="framerForm" @submit.prevent="submit">
    <div class="nameRow">
      <label class="field">
        <div class="label">First Name</div>
        <div class="inputWrap textWrap">
          <input
            id="firstName"
            v-model="form.firstName"
            class="control"
            type="text"
            required
            autocomplete="given-name"
            placeholder="First Name"
          />
        </div>
      </label>

      <label class="field">
        <div class="label">Last Name</div>
        <div class="inputWrap textWrap">
          <input
            id="lastName"
            v-model="form.lastName"
            class="control"
            type="text"
            required
            autocomplete="family-name"
            placeholder="Last Name"
          />
        </div>
      </label>
    </div>

    <label class="field">
      <div class="label">Email</div>
      <div class="inputWrap textWrap">
        <input
          id="email"
          v-model="form.email"
          class="control"
          type="email"
          required
          autocomplete="email"
          placeholder="name@gmail.com"
        />
      </div>
    </label>

    <label class="field">
      <div class="label">How many more guest will attend?</div>
      <div class="inputWrap selectWrap">
        <select id="additionalGuests" v-model.number="form.additionalGuests" class="control" required>
          <option :value="null" disabled>Select…</option>
          <option :value="0">0</option>
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
          <option :value="4">4</option>
        </select>
      </div>
    </label>

    <label class="field">
      <div class="label">Do you have any allergies or dietary preferences we should be aware of?</div>
      <div class="inputWrap textWrap">
        <input
          id="dietaryNotes"
          v-model="form.dietaryNotes"
          class="control"
          type="text"
          autocomplete="off"
          placeholder="ex: vegetarian, vegan, gluten-free, etc."
        />
      </div>
    </label>

    <div class="radioGroup" role="group" aria-labelledby="preWeddingLegend">
      <div id="preWeddingLegend" class="label">
        Will you be able to join us for the Pre-Wedding Gathering on September 26?
      </div>
      <div class="radioStack">
        <label class="radioRow">
          <input v-model="form.joinPreWedding" class="boolean" type="radio" name="joinPreWedding" :value="true" required />
          <span class="radioText">Yes. Count me in!</span>
        </label>
        <label class="radioRow">
          <input v-model="form.joinPreWedding" class="boolean" type="radio" name="joinPreWedding" :value="false" required />
          <span class="radioText">No. I will join the main celebration only.</span>
        </label>
      </div>
    </div>

    <label class="field">
      <div class="label">Leave us a message or a wish for our big day!</div>
      <div class="inputWrap textWrap textareaWrap">
        <textarea id="message" v-model="form.message" class="control" placeholder="I would like to say..." />
      </div>
    </label>

    <button class="submit" type="submit" :disabled="!canSubmit">
      <span class="submitInner">
        <span class="submitText">{{ submitting ? 'Submitting…' : 'Submit' }}</span>
        <svg class="submitIcon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <path d="M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </button>

    <p v-if="submitted" class="notice success">Thanks! We’ve received your RSVP.</p>
    <p v-if="errorMsg" class="notice error">{{ errorMsg }}</p>
  </form>
</template>

<style scoped>
.framerForm{
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.nameRow{
  display: flex;
  gap: 10px;
  width: 100%;
}

.field{
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.label{
  font-family: "Funnel Sans", var(--sans);
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color: #050505;
}

.inputWrap{
  position: relative;
  width: 100%;
  background: transparent;
  overflow: hidden;
}

.inputWrap::after{
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-bottom: 1px solid #999;
}

.inputWrap:focus-within::after{
  border-bottom-color: #050505;
}

.control{
  width: 100%;
  padding: 12px 12px 12px 0;
  border: 0;
  background: transparent;
  color: #050505;
  font-family: "Fustat", var(--sans);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
}

.control::placeholder{
  color: #999;
}

.control:focus-visible{
  outline: none;
}

select.control{
  appearance: none;
  padding-right: 42px;
}

.selectWrap::before{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40px;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  opacity: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6 L8 10.5 L12.5 6' fill='none' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

select.control:required:invalid{
  color: #999;
}

select.control option{
  color: #000;
}

select.control option:disabled{
  color: #0006;
}

.textareaWrap .control{
  min-height: 100px;
  resize: vertical;
  white-space: break-spaces;
}

.radioGroup{
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radioStack{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.radioRow{
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.radioText{
  font-family: "Funnel Sans", var(--sans);
  font-size: 16px;
  line-height: 1.6;
  color: #050505;
}

.boolean{
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #999;
  border-radius: 8px;
  background: #f2f2f0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.boolean:checked{
  border-color: #050505;
  background: #fff;
  box-shadow: inset 0 0 0 5px #050505;
}

.boolean:focus-visible{
  outline: none;
}

.submit{
  width: 100%;
  height: 56px;
  border: 1px solid #050505;
  background: transparent;
  color: #050505;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
}

.submitInner{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 24px;
}

.submitText{
  font-family: "Funnel Sans", var(--sans);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.3;
}

.submitIcon{
  width: 24px;
  height: 24px;
}

.submit:disabled{
  opacity: 0.6;
  cursor: not-allowed;
}

.notice{
  margin: -16px 0 0;
  font-family: "Funnel Sans", var(--sans);
  font-size: 14px;
  line-height: 1.6;
}

.notice.error{ color: #8b1d1d; }
.notice.success{ color: #0b6b2a; }

@media (max-width: 1199.98px){
  .framerForm{ gap: 16px; }
  .nameRow{ flex-direction: column; gap: 16px; }
}
</style>

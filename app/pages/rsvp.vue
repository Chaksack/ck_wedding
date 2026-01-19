<script setup lang="ts">
useHead({
  title: 'RSVP — Noah & Sabrina'
})
</script>

<template>
  <div class="section">
    <div class="container">
      <div class="wrap">
        <div class="photo card">
          <img
            class="img"
            src="/images/rsvp.jpg"
            alt="A groom carries a bride across a sunny field."
            width="900"
            height="1200"
            loading="lazy"
          />
        </div>

        <div class="card panel">
          <div class="kicker">Book your spot. See you soon!</div>
          <h1 class="h2">Pre-Wedding Gathering</h1>
          <p class="copy">
            This is a laid-back opportunity for everyone to mingle and catch up before the main event. All guests
            who have arrived in Barcelona are welcome to join us and enjoy a charming evening in the city!
          </p>

          <RsvpForm />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}
.photo{ overflow: hidden; border-radius: 22px; }
.img{ display: block; width: 100%; height: auto; }
.panel{ padding: 22px; }
.copy{ margin: 0 0 18px; color: rgba(0,0,0,.75); }

@media (max-width: 950px){
  .wrap{ grid-template-columns: 1fr; }
}
</style>

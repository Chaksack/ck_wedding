<template>
  <section class="section">
    <div class="container">
      <div class="card wrap">
        <div>
          <div class="kicker">RSVP</div>
          <h2 class="h2">Your presence would mean the world to us</h2>
          <p class="copy">Kindly reply by <strong>JULY 15th, 2026</strong>.</p>
        </div>

        <NuxtLink class="btn" to="/rsvp">RSVP</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap{
  padding: 26px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 18px;
}
.copy{ margin: 0; color: rgba(0,0,0,.75); }
@media (max-width: 800px){
  .wrap{ grid-template-columns: 1fr; justify-items: start; }
}
</style>

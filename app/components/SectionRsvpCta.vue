<template>
  <section class="section">
    <div class="container">
      <div class="wrap">
        <h2 class="headline">
          Your presence would mean the world to<br />
          us on our big day.
        </h2>

        <p class="copy">Kindly reply by <span class="date">AUGUST 8th, 2026</span>.</p>

        <NuxtLink class="cta" to="/rsvp">
          <span>RSVP</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap{
  text-align: center;
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: 18px;
}

.headline{
  margin: 0;
  font-family: var(--serif);
  font-weight: 300;
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.copy{
  margin: 0;
  color: rgba(0,0,0,.75);
  letter-spacing: -0.01em;
}

.date{ font-weight: 700; letter-spacing: 0.04em; }

.cta{
  width: min(240px, 100%);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 0;
  border: 1px solid rgba(0,0,0,.35);
  background: transparent;
  color: var(--text);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cta:hover{ text-decoration: none; filter: brightness(0.98); }

.arrow{
  font-size: 18px;
  line-height: 1;
}

@media (max-width: 600px){
  .headline br{ display: none; }
}
</style>

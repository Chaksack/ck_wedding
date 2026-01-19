<script setup lang="ts">
const links = [
  { label: 'ABOUT', to: { path: '/', hash: '#about' } },
  { label: 'PROGRAM', to: { path: '/', hash: '#program' } },
  { label: 'FAQ', to: { path: '/', hash: '#faq' } },
  { label: 'RSVP', to: '/rsvp' }
]
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <div class="brand">
        <img class="logo" src="/images/ns-logo.png" alt="NS logo" width="72" height="72" />

        <div class="title">Chak &amp; Keziah</div>
        <p class="copy">
          We are so excited to celebrate our love with you! Now, we’re stepping into our next chapter, hand in
          hand, with hearts full of gratitude for the love that surrounds us.
        </p>
      </div>

      <nav class="nav" aria-label="Footer">
        <NuxtLink v-for="l in links" :key="l.label" class="navLink" :to="l.to">
          {{ l.label }}
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  padding: 72px 0;
  background: #050505;
  color: #ffffff;
}
.inner{
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}
.brand{
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.logo{
  width: 76px;
  height: 76px;
  object-fit: contain;
}
.title{
  font-family: var(--serif);
  font-size: 32px;
  letter-spacing: -0.02em;
}
.copy{
  margin: 0;
  max-width: 66ch;
  color: rgba(255,255,255,.70);
  line-height: 1.75;
  font-size: 18px;
}
.nav{
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: flex-end;
}
.navLink{
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(255,255,255,.88);
}
.navLink:hover{ text-decoration: none; opacity: 0.9; }

@media (max-width: 800px){
  .inner{ grid-template-columns: 1fr; }
  .nav{ align-items: flex-start; }
  .footer{ padding: 64px 0; }
  .title{ font-size: 28px; }
  .copy{ font-size: 16px; }
}
</style>

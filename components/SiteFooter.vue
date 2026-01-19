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
        <img class="logo" src="/images/ns-logo.png" alt="NS logo" width="44" height="44" />
        <div>
          <div class="title">Noah &amp; Sabrina</div>
          <div class="copy">
            We are so excited to celebrate our love with you! Now, we’re stepping into our next chapter, hand in
            hand, with hearts full of gratitude for the love that surrounds us.
          </div>
        </div>
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
  padding: 54px 0;
  border-top: 1px solid rgba(0,0,0,.08);
}
.inner{
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 22px;
  align-items: start;
}
.brand{
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: start;
}
.logo{ border-radius: 14px; }
.title{ font-weight: 800; }
.copy{ margin-top: 6px; color: rgba(0,0,0,.7); max-width: 62ch; }
.nav{
  display: flex;
  flex-wrap: wrap;
  gap: 12px 14px;
  justify-content: flex-end;
}
.navLink{
  font-size: 12px;
  letter-spacing: .18em;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(0,0,0,.72);
}
.navLink:hover{ text-decoration: underline; }

@media (max-width: 800px){
  .inner{ grid-template-columns: 1fr; }
  .nav{ justify-content: flex-start; }
}
</style>

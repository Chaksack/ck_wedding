<script setup lang="ts">
const links = [
  { label: 'ABOUT', to: { path: '/', hash: '#about' } },
  { label: 'PROGRAM', to: { path: '/', hash: '#program' } },
  { label: 'FAQ', to: { path: '/', hash: '#faq' } }
]
</script>

<template>
  <header class="header">
    <div class="container bar">
      <NuxtLink class="brand" to="/" aria-label="Home">
        <img class="logo" src="/images/ns-logo.png" alt="CK logo" width="34" height="34" />
        <span class="brandText">Chak &amp; Kez</span>
      </NuxtLink>

      <nav class="nav" aria-label="Primary">
        <NuxtLink v-for="l in links" :key="l.label" class="navLink" :to="l.to">
          {{ l.label }}
        </NuxtLink>
      </nav>

      <NuxtLink class="btn rsvp" to="/rsvp">
        RSVP
        <span class="arrow" aria-hidden="true">↗</span>
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.header{
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(222, 220, 215, .85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,.08);
}
.bar{
  height: 72px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
}
.brand{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.logo{
  border-radius: 10px;
}
.brandText{
  font-weight: 700;
  letter-spacing: -0.01em;
}
.nav{
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: center;
}
.navLink{
  font-size: 12px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(0,0,0,.72);
  text-decoration: none;
}
.navLink:hover{ text-decoration: underline; }

@media (max-width: 700px){
  .navLink{ display: none; }
  .nav{ justify-content: end; }
  .brandText{ display: none; }
}

.rsvp{
  border-radius: 0;
  padding: 10px 14px;
}
.arrow{ opacity: .9; }
</style>

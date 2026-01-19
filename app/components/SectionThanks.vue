<script setup lang="ts">
import { computed } from 'vue'

const images = [
  { src: '/images/hero.png', alt: 'Wedding photo' },
  { src: '/images/rsvp.jpg', alt: 'Wedding photo' },
  { src: '/images/hero.png', alt: 'Wedding photo' },
  { src: '/images/rsvp.jpg', alt: 'Wedding photo' }
]

const trackImages = computed(() => [...images, ...images])
</script>

<template>
  <section class="section thanks">
    <div class="container">
      <div class="content">
        <img class="monogram" src="/images/ns-logo.png" alt="NS monogram" loading="lazy" />

        <p class="message">
          We are thrilled to have you on our special day,<br />
          and we are honoured that you have travelled to be here with us.
        </p>

        <div class="signature">
          <div class="withLove">with love,</div>
          <div class="names">Chak &amp; Keziah</div>
        </div>
      </div>
    </div>

    <div class="gallery" aria-label="Gallery">
      <div class="viewport">
        <div class="track" role="list">
          <figure
            v-for="(img, idx) in trackImages"
            :key="`${img.src}-${idx}`"
            class="tile"
            role="listitem"
            :aria-hidden="idx >= images.length"
          >
            <img :src="img.src" :alt="idx < images.length ? img.alt : ''" loading="lazy" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.thanks{
  padding-top: 84px;
  padding-bottom: 0;
}

.content{
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  gap: 22px;
  justify-items: center;
}

.monogram{
  width: 120px;
  height: auto;
  opacity: 0.95;
}

.message{
  margin: 0;
  font-family: var(--sans);
  font-size: 16px;
  color: rgba(0,0,0,.78);
  letter-spacing: 0.01em;
  line-height: 1.75;
}

.signature{
  display: grid;
  gap: 6px;
  padding-top: 10px;
  padding-bottom: 48px;
}

.withLove{
  font-family: var(--serif);
  font-style: italic;
  color: rgba(0,0,0,.66);
}

.names{
  font-family: var(--serif);
  font-size: 26px;
  letter-spacing: -0.02em;
}

.gallery{
  width: 100%;
  padding: 0 20px 28px;
}

.viewport{
  max-width: 1320px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.track{
  display: flex;
  gap: 14px;
  width: max-content;
  animation: scroll 34s linear infinite;
  will-change: transform;
}

@keyframes scroll{
  from{ transform: translateX(0); }
  to{ transform: translateX(-50%); }
}

.tile{
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255,255,255,.35);
  border: 1px solid rgba(0,0,0,.10);
}

.tile img{
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px){
  .thanks{ padding-top: 64px; }
  .track{ animation-duration: 28s; }
  .tile img{ height: 220px; }
}

@media (max-width: 520px){
  .message{ font-size: 15px; }
  .names{ font-size: 22px; }
  .tile img{ height: 180px; }
}

@media (prefers-reduced-motion: reduce){
  .track{ animation: none; }
  .viewport{ -webkit-mask-image: none; mask-image: none; }
}
</style>

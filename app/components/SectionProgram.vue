<script setup lang="ts">
type ProgramItem = {
  title: string
  description: string
  date: string
  time: string
  location: string
  dressCode: string
  imageSrc: string
  imageAlt: string
}

const items: ProgramItem[] = [
  {
    title: 'Pre-Wedding Gathering',
    description:
      "Before the wedding begins, we would love to welcome our guests to a relaxed night together in the city. It is a wonderful chance to catch up, and enjoy Barcelona’s atmosphere.",
    date: 'Friday, September 26, 2026',
    time: '7:00 PM - 10:00 PM',
    location: 'Bar del Pla in El Born',
    dressCode: 'Smart Casual',
    imageSrc: '/images/rsvp.jpg',
    imageAlt: 'Outdoor dinner setting'
  },
  {
    title: 'Wedding Celebrations',
    description:
      'Our celebration takes place at Castell de Sant Marçal, a historic 11th-century castle with gardens, a lake, and architecture that blend grandeur with elegance.',
    date: 'Saturday, September 27, 2026',
    time: '4:00 PM (Ceremony start time)',
    location: 'Castell de Sant Marçal',
    dressCode: 'Semi-Formal / Cocktail Attire',
    imageSrc: '/images/hero.png',
    imageAlt: 'Wedding ceremony setting'
  }
]
</script>

<template>
  <section id="program" class="section">
    <div class="container">
      <div class="head">
        <h2 class="sectionTitle">Wedding Program</h2>
      </div>

      <div class="stack">
        <article
          v-for="(item, idx) in items"
          :key="item.title"
          class="programCard"
          :class="{ reverse: idx % 2 === 1 }"
        >
          <div class="panel">
            <h3 class="cardTitle">{{ item.title }}</h3>
            <p class="cardDesc">{{ item.description }}</p>

            <div class="divider" />

            <dl class="details">
              <div class="detailRow">
                <dt>Date</dt>
                <dd>{{ item.date }}</dd>
              </div>
              <div class="detailRow">
                <dt>Time</dt>
                <dd>{{ item.time }}</dd>
              </div>
              <div class="detailRow">
                <dt>Location</dt>
                <dd>{{ item.location }}</dd>
              </div>
              <div class="detailRow">
                <dt>Dress Code</dt>
                <dd>{{ item.dressCode }}</dd>
              </div>
            </dl>
          </div>

          <div class="media">
            <img
              class="photo"
              :src="item.imageSrc"
              :alt="item.imageAlt"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head{
  text-align: center;
  margin-bottom: 44px;
}

.sectionTitle{
  margin: 0;
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(34px, 4vw, 54px);
  letter-spacing: -0.02em;
}

.stack{
  display: grid;
  gap: 28px;
}

.programCard{
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  border-radius: 16px;
  overflow: hidden;
  background: var(--panel);
  border: 1px solid rgba(0,0,0,.08);
}

.panel{
  padding: 42px 44px;
}

.cardTitle{
  margin: 0 0 14px;
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(24px, 2.8vw, 34px);
  letter-spacing: -0.02em;
}

.cardDesc{
  margin: 0;
  max-width: 54ch;
  color: rgba(0,0,0,.72);
  line-height: 1.75;
}

.divider{
  margin: 28px 0 14px;
  height: 1px;
  background: rgba(0,0,0,.08);
}

.details{ margin: 0; }

.detailRow{
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 20px;
  padding: 22px 0;
  border-top: 1px solid rgba(0,0,0,.06);
}

.detailRow:first-child{ border-top: 0; }

.detailRow dt{
  color: rgba(0,0,0,.6);
}

.detailRow dd{
  margin: 0;
  text-align: right;
  font-family: var(--serif);
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.01em;
  color: rgba(0,0,0,.86);
}

.media{
  background: rgba(0,0,0,.06);
}

.photo{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  min-height: 420px;
}

.reverse .panel{ order: 2; }
.reverse .media{ order: 1; }

@media (max-width: 980px){
  .programCard{ grid-template-columns: 1fr; }
  .panel{ padding: 30px 22px; }
  .detailRow{ grid-template-columns: 110px 1fr; }
  .detailRow dd{ font-size: 18px; }
  .photo{ min-height: 300px; }
  .reverse .panel, .reverse .media{ order: initial; }
}
</style>

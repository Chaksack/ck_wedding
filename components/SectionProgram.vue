<script setup lang="ts">
type ProgramItem = {
  title: string
  description: string
  date: string
  time: string
  location: string
  dressCode: string
}

const items: ProgramItem[] = [
  {
    title: 'Pre-Wedding Gathering',
    description:
      "Before the wedding begins, we would love to welcome our guests to a relaxed night together in the city. It is a wonderful chance to catch up, and enjoy Barcelona’s atmosphere.",
    date: 'Friday, September 26, 2026',
    time: '7:00 PM - 10:00 PM',
    location: 'Bar del Pla in El Born',
    dressCode: 'Smart Casual'
  },
  {
    title: 'Wedding Celebrations',
    description:
      'Our celebration takes place at Castell de Sant Marçal, a historic 11th-century castle with gardens, a lake, and architecture that blend grandeur with elegance.',
    date: 'Saturday, September 27, 2026',
    time: '4:00 PM (Ceremony start time)',
    location: 'Castell de Sant Marçal',
    dressCode: 'Semi-Formal / Cocktail Attire'
  }
]
</script>

<template>
  <section id="program" class="section">
    <div class="container">
      <div class="head">
        <div class="kicker">PROGRAM</div>
        <h2 class="h2">Wedding Program</h2>
      </div>

      <div class="grid cards">
        <article v-for="item in items" :key="item.title" class="card item">
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.description }}</p>

          <hr class="sep" />

          <dl class="facts">
            <div class="row">
              <dt>Date</dt>
              <dd>{{ item.date }}</dd>
            </div>
            <div class="row">
              <dt>Time</dt>
              <dd>{{ item.time }}</dd>
            </div>
            <div class="row">
              <dt>Location</dt>
              <dd>{{ item.location }}</dd>
            </div>
            <div class="row">
              <dt>Dress Code</dt>
              <dd>{{ item.dressCode }}</dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head{ margin-bottom: 18px; }
.cards{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
.item{ padding: 22px; }
.title{ margin: 0 0 8px; font-size: 22px; letter-spacing: -0.01em; }
.desc{ margin: 0 0 18px; color: rgba(0,0,0,.75); }
.facts{ margin: 18px 0 0; display: grid; gap: 10px; }
.row{ display: grid; grid-template-columns: 90px 1fr; gap: 12px; }
.row dt{ font-weight: 700; color: rgba(0,0,0,.8); }
.row dd{ margin: 0; color: rgba(0,0,0,.72); }

@media (max-width: 900px){
  .cards{ grid-template-columns: 1fr; }
}
</style>

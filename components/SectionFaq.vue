<script setup lang="ts">
const items = [
  {
    q: 'Can we take photos during the wedding?',
    a: 'Yes, please capture the joy and share with our hashtag #NoahSabrinaBarcelona.'
  },
  {
    q: 'Can I bring my children to the wedding?',
    a: 'To ensure all guests can fully enjoy the celebration, the wedding ceremony and reception will be an adult-only event. Children are welcome to join us for the Farewell Brunch.'
  },
  {
    q: 'How can we honor you with a gift?',
    a: 'Your presence in Barcelona to celebrate with us is truly the greatest gift. If you would still like to honor us with a gift, we would greatly appreciate contributions to our honeymoon fund or donations to Doctors Without Borders, a charity close to our hearts.'
  }
]
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <div class="head">
        <div class="kicker">FAQ</div>
        <h2 class="h2">Everything you need to know</h2>
      </div>

      <div class="grid">
        <details v-for="item in items" :key="item.q" class="card item">
          <summary class="summary">
            <span>{{ item.q }}</span>
            <span class="chev" aria-hidden="true">▾</span>
          </summary>
          <div class="answer">
            {{ item.a }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head{ margin-bottom: 18px; }
.item{ padding: 0; overflow: hidden; }
.summary{
  list-style: none;
  cursor: pointer;
  padding: 18px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  font-weight: 700;
}
.summary::-webkit-details-marker{ display: none; }
.answer{
  padding: 0 18px 18px;
  color: rgba(0,0,0,.75);
}
details[open] .chev{ transform: rotate(180deg); }
.chev{ transition: transform .15s ease; opacity: .7; }
</style>

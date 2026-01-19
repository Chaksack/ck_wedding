<script setup lang="ts">
const items = [
  {
    q: 'Can we take photos during the wedding?',
    a: 'Yes—please feel free to take photos. We’d love it if you shared your favorites with us after the weekend.'
  },
  {
    q: 'Can I bring my children to the wedding?',
    a: 'To help everyone fully enjoy the celebration, the ceremony and reception will be adults-only. Children are welcome to join us for the Farewell Brunch.'
  },
  {
    q: 'How can we honor you with a gift?',
    a: 'Your presence is the greatest gift. If you’d still like to give something, a honeymoon contribution is sincerely appreciated.'
  },
  {
    q: 'What if I have dietary restrictions or allergies?',
    a: 'Please note any allergies or dietary restrictions in your RSVP. We will do our best to accommodate.'
  },
  {
    q: 'Do I need to bring a physical invitation?',
    a: 'No—your name will be on our guest list. If you have questions about your invite, reach out and we’ll confirm details.'
  },
  {
    q: 'Who should I reach out to if I need support?',
    a: 'Send us a note through the RSVP page and we’ll get back to you as soon as possible.'
  }
]
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <div class="head">
        <div class="kicker">FAQ</div>
        <h2 class="title">Everything you need to know</h2>
      </div>

      <div class="list">
        <details v-for="item in items" :key="item.q" class="item">
          <summary class="summary">
            <span class="question">{{ item.q }}</span>
            <span class="plus" aria-hidden="true" />
          </summary>
          <div class="answer">{{ item.a }}</div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head{
  text-align: center;
}

.title{
  margin: 0;
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(34px, 4vw, 54px);
  letter-spacing: -0.02em;
}

.list{
  max-width: 980px;
  margin: 44px auto 0;
  border-top: 1px solid rgba(0,0,0,.08);
}

.item{
  padding: 0;
  border-bottom: 1px solid rgba(0,0,0,.08);
}

.summary{
  list-style: none;
  cursor: pointer;
  padding: 26px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.summary::-webkit-details-marker{ display: none; }

.question{
  font-weight: 650;
  letter-spacing: -0.01em;
}

.plus{
  position: relative;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  opacity: 0.85;
}

.plus::before,
.plus::after{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  background: rgba(0,0,0,.7);
  transform: translate(-50%, -50%);
  transition: transform 160ms ease, opacity 160ms ease;
}

.plus::before{ width: 14px; height: 2px; }
.plus::after{ width: 2px; height: 14px; }

details[open] .plus::after{
  opacity: 0;
  transform: translate(-50%, -50%) scaleY(0.3);
}

.answer{
  padding: 0 0 22px;
  max-width: 820px;
  color: rgba(0,0,0,.75);
}

@media (max-width: 800px){
  .summary{ padding: 22px 0; }
}
</style>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="top">
        <p class="line left">We met by chance.</p>
        <p class="line center">We stayed by choice.</p>
        <p class="line right">We love for life.</p>
      </div>

      <div class="content">
        <div class="text">
          <p>
            Noah and Sabrina met on a spontaneous backpacking trip in Barcelona, and life’s been a joyful adventure
            ever since. From hunting down new foods and hiking trails, to getting delightfully lost in a tiny Gothic
            Quarter bookshop, we’ve always known we were a perfect match.
          </p>
          <p>
            Noah popped the question under the magical glow of Montjuïc’s fountain with a surprise picnic and
            serenade.
          </p>
          <p>
            Now, we’re excited to celebrate this new chapter with all of you!
          </p>
        </div>

        <figure class="media" aria-label="A photo of the couple">
          <img
            class="photo"
            src="/images/hero.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.top{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
  margin: 0 auto 52px;
}

.line{
  margin: 0;
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(22px, 2.8vw, 40px);
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.left{ text-align: left; }
.center{ text-align: center; }
.right{ text-align: right; }

.content{
  display: grid;
  grid-template-columns: 1fr 1.85fr;
  align-items: start;
  gap: 40px;
}

.text{
  max-width: 46ch;
  color: rgba(0,0,0,.78);
  font-size: 16px;
  line-height: 1.75;
}

.text p{ margin: 0 0 22px; }
.text p:last-child{ margin-bottom: 0; }

.media{
  margin: 0;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0,0,0,.06);
}

.photo{
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

@media (max-width: 900px){
  .content{ grid-template-columns: 1fr; }
  .text{ max-width: 62ch; }
  .top{ grid-template-columns: 1fr; gap: 10px; margin-bottom: 34px; }
  .left, .center, .right{ text-align: left; }
}
</style>

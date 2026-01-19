<template>
  <section class="hero">
    <div class="container">
      <div class="inner">
        <h1 class="title">NOAH &amp; SABRINA</h1>

        <div class="meta" aria-label="Location and date">
          <span class="metaText">BARCELONA</span>
          <span class="rule" aria-hidden="true" />
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z"
                fill="currentColor"
                opacity=".9"
              />
              <path
                d="M18 16.7H6c1.2-1.2 1.9-2.7 1.9-4.5V9.5a4.1 4.1 0 0 1 3.1-4V4.2a1 1 0 1 1 2 0v1.3a4.1 4.1 0 0 1 3.1 4v2.7c0 1.8.7 3.3 1.9 4.5Z"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="metaText">SATURDAY, SEP 27TH</span>
        </div>
      </div>
    </div>

    <div class="media">
      <img
        class="heroImg"
        src="/images/hero.png"
        alt="A bride and groom hold hands tenderly."
        width="1600"
        height="720"
        loading="eager"
      />
    </div>
  </section>
</template>

<style scoped>
.hero{
  padding-top: 86px;
}

.inner{
  padding: 60px 0 46px;
  text-align: center;
}

.title{
  margin: 0;
  font-family: var(--serif);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: .92;
  font-size: clamp(56px, 9.2vw, 150px);
}

.meta{
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: rgba(0,0,0,.72);
}

.metaText{
  font-size: 12px;
  letter-spacing: .18em;
  text-transform: uppercase;
  white-space: nowrap;
}

.rule{
  width: min(260px, 22vw);
  height: 1px;
  background: rgba(0,0,0,.35);
}

.icon{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(0,0,0,.65);
}

.media{
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.heroImg{
  display: block;
  width: 100%;
  height: clamp(320px, 52vh, 560px);
  object-fit: cover;
}

@media (max-width: 520px){
  .inner{ padding: 34px 0 28px; }
  .meta{ gap: 10px; }
  .rule{ width: 16vw; }
}
</style>

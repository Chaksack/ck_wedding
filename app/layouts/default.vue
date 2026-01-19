<template>
  <div class="layout">
    <SiteHeader />

    <main>
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.layout{
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
main{
  flex: 1;
}
</style>

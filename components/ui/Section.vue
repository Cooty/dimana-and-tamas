<template>
  <section class="section">
    <ui-wrapper>
      <slot />
    </ui-wrapper>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding-top: calc(var(--header-height) + 1svh);
}
</style>

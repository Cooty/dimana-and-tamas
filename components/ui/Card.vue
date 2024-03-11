<template>
  <article class="card">
    <slot />
  </article>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--middle-shadow);
  padding: var(--box-padding);
}
</style>

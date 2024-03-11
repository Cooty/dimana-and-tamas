<template>
  <div class="body-text">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.body-text {
  :deep(p) {
    line-height: 1.4;
  }

  :deep(p:not(:last-child)) {
    margin-bottom: 0.8rem;
  }
}
</style>

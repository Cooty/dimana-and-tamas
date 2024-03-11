<template>
  <div class="aspect-ratio-16-9">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.aspect-ratio-16-9 {
  padding-top: calc(9 / 16 * 100%);
  height: 0;
  overflow: hidden;
  position: relative;

  :deep(> *) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

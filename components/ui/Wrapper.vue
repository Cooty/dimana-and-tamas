<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="pcss" scoped>
.wrapper {
  position: relative;
  max-width: var(--container-width);
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
}
</style>

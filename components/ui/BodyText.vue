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

  :deep(ul:not(:last-child)) {
    margin-bottom: 1rem;
  }

  :deep(li:not(:last-child)) {
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  :deep(ul:not(.unstyled)) {
    margin-left: 2rem;
    list-style-type: disc;
  }
}
</style>

<template>
  <div class="body-text">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.body-text {
  :deep(p),
  :deep(li) {
    line-height: 1.4;
  }

  :deep(a) {
    word-wrap: break-word;
  }

  :deep(p:not(:last-child)) {
    margin-bottom: 0.8rem;
  }

  :deep(ul:not(:last-child)) {
    margin-bottom: 1rem;
  }

  :deep(li:not(:last-child)) {
    margin-bottom: 0.5rem;
  }

  :deep(ul:not(.unstyled)) {
    margin-left: 2rem;
    list-style-type: disc;
  }

  :deep(li > ul:not(.unstyled)) {
    list-style: circle;
    margin-top: 0.8rem;
  }

  :deep(h2) {
    font-family: var(--body-font);
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 0.2em;
  }

  :deep(h3) {
    font-family: var(--body-font);
    font-size: 1.6rem;
    line-height: 1.4;
    margin-bottom: 0.2em;
  }
}
</style>

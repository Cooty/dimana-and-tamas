<template>
  <h2 class="section__header">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
.section__header {
  font-size: 2.4rem;
  line-height: 1.4;
  margin-bottom: 0.2em;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 3.2rem;
    margin-bottom: 0.4em;
  }

  &:deep(> a) {
    color: var(--color-grey-0);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>

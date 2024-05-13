<template>
  <h3 class="sub-section__header"><slot /></h3>
</template>

<style lang="scss" scoped>
.sub-section__header {
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 0.2em;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 2.8rem;
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

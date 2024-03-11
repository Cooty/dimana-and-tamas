<template>
  <div class="pull-out-columns">
    <div class="pull-out-columns__first">
      <slot name="first" />
    </div>
    <div class="pull-out-columns__second">
      <slot name="second" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pull-out-columns {
  display: flex;
  flex-direction: column;
  gap: var(--gutter);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  &__first {
    @media screen and (min-width: 768px) {
      max-width: calc(50% - 8px);
      flex: 0 0 calc(50% - 8px);
      display: flex;
      align-items: center;
    }
  }

  &__second {
    @media screen and (min-width: 768px) {
      max-width: calc(50% - 8px);
      flex: 0 0 calc(50% - 8px);
    }

    :deep(> *) {
      @media screen and (min-width: 1024px) {
        transform: scale(1.2) translate3d(10px, -70px, 0);
        transform-origin: left top;
        box-shadow: var(--shadow-float);
        border-radius: var(--border-radius);
      }
    }
  }
}
</style>

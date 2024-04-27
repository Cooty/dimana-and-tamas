<template>
  <nav class="go-back">
    <ui-card>
      <nuxt-link :to="localePath('/when-in-bulgaria')" class="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
          />
        </svg>
        {{ $t('bulgaria.back-label') }}
      </nuxt-link>
    </ui-card>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.go-back {
  margin-top: 20px;
  position: sticky;
  top: 0;
  z-index: var(--z-middle);
}

.icon-container {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;

  > svg {
    margin-right: 8px;

    path {
      fill: currentColor;
    }
  }
}
</style>

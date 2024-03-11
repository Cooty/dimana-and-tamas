<template>
  <div class="sub-section">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sub-section {
  padding-top: calc(var(--gutter) * 3);
}
</style>

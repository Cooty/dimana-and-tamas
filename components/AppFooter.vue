<template>
  <footer id="footer">
    <picture>
      <source media="(min-width: 768px)" :srcset="islandBig" />
      <img :src="islandSmall" :alt="$t('name-of-the-island')" loading="lazy" />
    </picture>
  </footer>
</template>

<script setup>
import islandSmall from '../assets/images/island-small.png'
import islandBig from '../assets/images/island-big.png'
</script>

<style lang="scss" scoped>
picture > img {
  width: 100%;
  height: auto;
  max-width: 1352px;
  display: block;
  margin: 0 auto;
}
</style>

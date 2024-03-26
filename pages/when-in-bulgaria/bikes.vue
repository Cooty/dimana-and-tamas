<template>
  <div class="desktop-image-container">
    <ui-section>
      <ui-card>
        <ui-section-header>{{ $t('bikes.title') }}</ui-section-header>
        <bulgaria-bikes />
      </ui-card>
    </ui-section>
    <div class="mobile-image-container">
      <img :src="one" loading="lazy" alt="" />
      <img :src="two" loading="lazy" alt="" />
      <img :src="three" loading="lazy" alt="" />
      <img :src="four" loading="lazy" alt="" />
    </div>
  </div>
</template>

<script setup>
import one from '../../assets/images/bikes/1.jpg'
import two from '../../assets/images/bikes/2.jpg'
import three from '../../assets/images/bikes/3.jpg'
import four from '../../assets/images/bikes/4.jpg'
</script>

<style lang="scss" scoped>
.desktop-image-container {
  .mobile-image-container {
    img {
      @media screen and (min-width: 1440px) {
        max-width: 200px;
      }

      @media screen and (min-width: 1900px) {
        max-width: 220px;
      }

      &:nth-child(1) {
        @media screen and (min-width: 1200px) {
          top: -5vh;
          left: -10vw;
        }
      }

      &:nth-child(2) {
        @media screen and (min-width: 1200px) {
          top: -2vh;
          right: -13vw;
        }
      }

      &:nth-child(3) {
        @media screen and (min-width: 1200px) {
          bottom: -4vh;
          left: -10vw;
        }
      }

      &:nth-child(4) {
        @media screen and (min-width: 1200px) {
          bottom: -6vh;
          right: -8vw;
        }
      }
    }
  }
}
</style>

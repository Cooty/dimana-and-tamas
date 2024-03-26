<template>
  <div class="desktop-image-container">
    <ui-section>
      <ui-card>
        <ui-section-header>{{ $t('parking.title') }}</ui-section-header>
        <bulgaria-parking />
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
import one from '../../assets/images/parking/1.jpg'
import two from '../../assets/images/parking/2.jpg'
import three from '../../assets/images/parking/3.jpg'
import four from '../../assets/images/parking/4.jpg'
</script>

<style lang="scss" scoped>
.desktop-image-container {
  .mobile-image-container {
    img {
      @media screen and (min-width: 1440px) {
        max-width: 200px;
      }

      @media screen and (min-width: 1900px) {
        max-width: 300px;
      }

      &:nth-child(1) {
        @media screen and (min-width: 1200px) {
          top: 10vh;
          left: -12vw;
        }
      }

      &:nth-child(2) {
        @media screen and (min-width: 1200px) {
          top: 20vh;
          right: -13vw;
        }
      }

      &:nth-child(3) {
        @media screen and (min-width: 1200px) {
          bottom: 20vh;
          left: -12vw;
        }
      }

      &:nth-child(4) {
        @media screen and (min-width: 1200px) {
          bottom: 12vh;
          right: -12vw;
        }
      }
    }
  }
}
</style>

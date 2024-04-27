<template>
  <div class="desktop-image-container">
    <ui-section>
      <ui-card>
        <ui-section-header>{{ $t('arrival.title') }}</ui-section-header>
        <bulgaria-arrival />
      </ui-card>
      <bulgaria-go-back />
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
import one from '../../assets/images/arrival/1.jpg'
import two from '../../assets/images/arrival/2.jpg'
import three from '../../assets/images/arrival/3.jpg'
import four from '../../assets/images/arrival/4.jpg'
</script>

<style lang="scss" scoped>
.desktop-image-container {
  .mobile-image-container {
    img {
      @media screen and (min-width: 1440px) {
        max-width: 200px;
      }

      @media screen and (min-width: 1900px) {
        max-width: 240px;
      }

      &:nth-child(1) {
        @media screen and (min-width: 1200px) {
          top: 5vh;
          left: -15vw;
        }
      }

      &:nth-child(2) {
        @media screen and (min-width: 1200px) {
          top: -2vh;
          right: -9vw;
        }
      }

      &:nth-child(3) {
        @media screen and (min-width: 1200px) {
          bottom: 0;
          left: -13vw;
        }
      }

      &:nth-child(4) {
        @media screen and (min-width: 1200px) {
          bottom: 4vh;
          right: -13vw;
        }
      }
    }
  }
}
</style>

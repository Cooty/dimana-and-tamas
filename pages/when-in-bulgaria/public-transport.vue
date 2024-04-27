<template>
  <div class="desktop-image-container">
    <ui-section>
      <ui-card>
        <ui-section-header>{{
          $t('public-transport.title')
        }}</ui-section-header>
        <bulgaria-public-transport />
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
import one from '../../assets/images/public-transport/1.jpg'
import two from '../../assets/images/public-transport/2.jpg'
import three from '../../assets/images/public-transport/3.jpg'
import four from '../../assets/images/public-transport/4.jpg'
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
          top: -1vh;
          left: -10vw;
        }
      }

      &:nth-child(2) {
        @media screen and (min-width: 1200px) {
          top: 1vh;
          right: -11vw;
        }
      }

      &:nth-child(3) {
        @media screen and (min-width: 1200px) {
          bottom: -2vh;
          left: -10vw;
        }
      }

      &:nth-child(4) {
        @media screen and (min-width: 1200px) {
          bottom: 0vh;
          right: -8vw;
        }
      }
    }
  }
}
</style>

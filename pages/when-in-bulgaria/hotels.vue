<template>
  <div class="desktop-image-container">
    <ui-section>
      <ui-card>
        <ui-section-header>{{ $t('hotels.title') }}</ui-section-header>
        <bulgaria-hotels />
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
import one from '../../assets/images/hotels/1.jpg'
import two from '../../assets/images/hotels/2.jpg'
import three from '../../assets/images/hotels/3.jpg'
import four from '../../assets/images/hotels/4.jpg'
</script>

<style lang="scss" scoped>
.desktop-image-container {
  .mobile-image-container {
    img {
      &:nth-child(1) {
        @media screen and (min-width: 1200px) {
          top: 12vh;
          left: -19vw;
        }
      }

      &:nth-child(2) {
        @media screen and (min-width: 1200px) {
          top: 40vh;
          right: -18vw;
        }
      }

      &:nth-child(3) {
        @media screen and (min-width: 1200px) {
          bottom: 10vh;
          left: -20vw;
        }
      }

      &:nth-child(4) {
        @media screen and (min-width: 1200px) {
          bottom: 20vh;
          right: -17vw;
        }
      }
    }
  }
}
</style>

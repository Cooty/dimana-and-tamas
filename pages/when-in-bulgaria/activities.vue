<template>
  <div class="desktop-image-container">
    <ui-section>
      <ui-card>
        <ui-section-header>{{ $t('activities.title') }}</ui-section-header>
        <bulgaria-activities />
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
import one from '../../assets/images/activities/1.jpg'
import two from '../../assets/images/activities/2.jpg'
import three from '../../assets/images/activities/3.jpg'
import four from '../../assets/images/activities/4.jpg'
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
          top: 5vh;
          left: -15vw;
        }
      }

      &:nth-child(2) {
        @media screen and (min-width: 1200px) {
          top: 2vh;
          right: -13vw;
        }
      }

      &:nth-child(3) {
        @media screen and (min-width: 1200px) {
          bottom: 8vh;
          left: -14vw;
        }
      }

      &:nth-child(4) {
        @media screen and (min-width: 1200px) {
          bottom: 18vh;
          right: -13vw;
        }
      }
    }
  }
}
</style>

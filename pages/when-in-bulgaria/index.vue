<template>
  <div>
    <ui-section id="arrival">
      <ui-card>
        <ui-section-header>{{ $t('arrival.title') }}</ui-section-header>
        <bulgaria-arrival />
      </ui-card>
    </ui-section>

    <ui-section id="arrival-to-burgas">
      <ui-card>
        <ui-section-header>{{ $t('arriving-burgas.title') }}</ui-section-header>
        <bulgaria-arriving-to-burgas />
      </ui-card>
    </ui-section>

    <ui-section id="hotels">
      <ui-card>
        <ui-section-header>{{ $t('hotels.title') }}</ui-section-header>
        <bulgaria-hotels />
      </ui-card>
    </ui-section>

    <ui-section id="restaurants">
      <ui-card>
        <ui-section-header>{{ $t('restaurants.title') }}</ui-section-header>
        <bulgaria-restaurants />
      </ui-card>
    </ui-section>

    <ui-section id="activities">
      <ui-card>
        <ui-section-header>{{ $t('activities.title') }}</ui-section-header>
        <bulgaria-activities />
      </ui-card>
    </ui-section>

    <ui-section id="taxi">
      <ui-card>
        <ui-section-header>{{ $t('taxi.title') }}</ui-section-header>
        <bulgaria-taxi />
      </ui-card>
    </ui-section>

    <ui-section id="parking">
      <ui-card>
        <ui-section-header>{{ $t('parking.title') }}</ui-section-header>
        <bulgaria-parking />
      </ui-card>
    </ui-section>

    <ui-section id="public-transport">
      <ui-card>
        <ui-section-header>{{
          $t('public-transport.title')
        }}</ui-section-header>
        <bulgaria-public-transport />
      </ui-card>
    </ui-section>

    <ui-section id="bikes">
      <ui-card>
        <ui-section-header>{{ $t('bikes.title') }}</ui-section-header>
        <bulgaria-bikes />
      </ui-card>
    </ui-section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('nav.bulgaria'),
})
</script>

<style lang="scss" scoped></style>

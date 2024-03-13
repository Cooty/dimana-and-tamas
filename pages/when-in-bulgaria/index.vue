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
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('nav.bulgaria'),
})
</script>

<style lang="scss" scoped></style>

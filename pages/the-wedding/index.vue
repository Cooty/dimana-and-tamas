<template>
  <div>
    <ui-section id="venue">
      <ui-card>
        <ui-section-header>{{ $t('section.venue') }}</ui-section-header>
        <wedding-intro />
        <wedding-map />
      </ui-card>
    </ui-section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('nav.wedding'),
})
</script>

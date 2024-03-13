<template>
  <div>
    <ui-section id="venue">
      <ui-card>
        <ui-section-header>{{ $t('section.venue') }}</ui-section-header>
        <wedding-intro />
        <wedding-parking />
        <wedding-map />
      </ui-card>
    </ui-section>
    <ui-section id="program">
      <ui-card>
        <ui-section-header>{{ $t('section.programme') }}</ui-section-header>
        <wedding-programme />
      </ui-card>
    </ui-section>
    <ui-section id="dress-code">
      <ui-card>
        <ui-section-header>{{ $t('dress-code.title') }}</ui-section-header>
        <wedding-dress-code />
      </ui-card>
    </ui-section>
    <ui-section id="gift">
      <ui-card>
        <ui-section-header>{{ $t('gift.title') }}</ui-section-header>
        <wedding-gifts />
      </ui-card>
    </ui-section>
    <ui-section id="contact">
      <ui-card>
        <ui-section-header>{{ $t('contact.title') }}</ui-section-header>
        <wedding-contact />
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

<template>
  <ui-body-text>
    <content-doc :path="`${locale}/bulgaria/_hotels`" />
  </ui-body-text>
</template>

<script setup>
const { locale } = useI18n()
</script>

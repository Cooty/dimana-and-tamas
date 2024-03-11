<template>
  <div>
    <h1>{{ $t('dimana') }} & {{ $t('tamas') }}</h1>
    <div>Home Page</div>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('nav.bulgaria'),
})
</script>

<style lang="scss" scoped></style>

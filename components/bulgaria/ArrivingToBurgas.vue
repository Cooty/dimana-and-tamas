<template>
  <ui-body-text>
    <template v-if="locale === 'bg'">
      <i18n-t tag="p" keypath="arriving-burgas.text">
        <template #highlight1>
          <a href="mailto:wedding@dimanaandtamas.eu" target="_blank">{{
            $t('arriving-burgas.text-highlight-1')
          }}</a>
        </template>
      </i18n-t>
    </template>
    <template v-else>
      <i18n-t tag="p" keypath="arriving-burgas.text">
        <template #highlight1>
          <strong
            ><a href="https://burgas-airport.bg/" target="_blank">{{
              $t('arriving-burgas.text-highlight-1')
            }}</a></strong
          >
        </template>

        <template #highlight2>
          <a href="https://wizzair.com/" target="_blank">{{
            $t('arriving-burgas.text-highlight-2')
          }}</a>
        </template>

        <template #highlight3>
          <a href="https://www.ryanair.com/" target="_blank">{{
            $t('arriving-burgas.text-highlight-3')
          }}</a>
        </template>

        <template #highlight4>
          <a href="https://sundair.com/booking/#/" target="_blank">{{
            $t('arriving-burgas.text-highlight-4')
          }}</a>
        </template>
      </i18n-t>

      <i18n-t tag="p" keypath="arriving-burgas.text-2">
        <template #highlight1>
          <a href="#taxi">{{ $t('arriving-burgas.text-2-highlight-1') }}</a>
        </template>

        <template #highlight2>
          <a
            href="https://play.google.com/store/apps/details?id=com.modeshift.burgas&hl=en&gl=US&pli=1"
            target="_blank"
            >{{ $t('arriving-burgas.text-2-highlight-2') }}</a
          >
        </template>

        <template #highlight3>
          <a
            href="https://apps.apple.com/us/app/burgas/id1527094752"
            target="_blank"
            >{{ $t('arriving-burgas.text-2-highlight-3') }}</a
          >
        </template>
      </i18n-t>

      <i18n-t tag="p" keypath="arriving-burgas.text-3">
        <template #highlight1>
          <strong>{{ $t('arriving-burgas.text-3-highlight-1') }}</strong>
        </template>

        <template #highlight2>
          <a href="https://union-ivkoni.com/en" target="_blank">{{
            $t('arriving-burgas.text-3-highlight-2')
          }}</a>
        </template>

        <template #highlight3>
          <a href="https://www.bdz.bg/en" target="_blank">{{
            $t('arriving-burgas.text-3-highlight-3')
          }}</a>
        </template>
      </i18n-t>
    </template>
  </ui-body-text>
</template>

<script setup>
const { locale } = useI18n()
</script>

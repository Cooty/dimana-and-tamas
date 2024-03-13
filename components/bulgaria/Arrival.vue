<template>
  <ui-body-text>
    <i18n-t tag="p" keypath="arrival.text-1">
      <template #highlight1>
        <strong>{{ $t('arrival.text-highlight-1') }}</strong>
      </template>
      <template #highlight2>
        <strong>{{ $t('arrival.text-highlight-2') }}</strong>
      </template>
      <template #highlight3>
        <a :href="$t('venue.intro-2-link-url')" target="_blank">{{
          $t('arrival.text-highlight-3')
        }}</a>
      </template>
    </i18n-t>

    <i18n-t tag="p" keypath="arrival.text-2">
      <template #highlight1>
        <strong>{{ $t('arrival.text-2-highlight-1') }}</strong>
      </template>
      <template #highlight2>
        <strong>{{ $t('arrival.text-2-highlight-2') }}</strong>
      </template>
    </i18n-t>

    <i18n-t tag="p" keypath="arrival.text-3">
      <template #highlight1>
        <strong>{{ $t('arrival.text-3-highlight-1') }}</strong>
      </template>
    </i18n-t>
  </ui-body-text>
</template>

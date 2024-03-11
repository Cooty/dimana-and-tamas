<template>
  <ui-pull-out-columns>
    <template #first>
      <ui-body-text>
        <i18n-t tag="p" keypath="venue.intro-1">
          <template #island>
            <a
              :href="$t('venue.island-link')"
              target="_blank"
              rel="noopener noreferrer"
              >{{ $t('venue.intro-1-island-name') }}</a
            >
          </template>
        </i18n-t>
        <i18n-t tag="p" keypath="venue.intro-2">
          <template #link>
            <a
              :href="$t('venue.intro-2-link-url')"
              target="_blank"
              rel="noopener noreferrer"
              >{{ $t('venue.intro-2-link') }}</a
            >
          </template>
          <template #time><strong>17.00</strong></template>
        </i18n-t>
        <p>{{ $t('venue.intro-3') }}</p>
      </ui-body-text>
    </template>
    <template #second>
      <ui-aspect-ratio-box>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/4vOXtBuNcJ8?si=bpD_vJOd8NHw-sm_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ui-aspect-ratio-box>
    </template>
  </ui-pull-out-columns>
</template>

<script setup>
// import i18n from 'vue-18n'

// console.log(i18n)
</script>

<style lang="scss" scoped></style>

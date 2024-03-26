<template>
  <app-layout>
    <nuxt-page />
  </app-layout>
</template>

<script setup>
const { locale, t } = useI18n()

const defaultTitle = computed(() => t('page-title'))

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${defaultTitle.value}`
      : defaultTitle.value
  },
  htmlAttrs: () => ({
    lang: locale,
  }),
  meta: [
    { name: 'robots', content: 'noindex' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#a46091' },
  ],
})
</script>

<style>
@import '~/assets/styles/reset.css';
@import '~/assets/styles/tokens.css';
@import '~/assets/styles/global.css';

@font-face {
  font-family: 'Good Vibes';
  src: url('~/assets/fonts/goodvibescyr-webfont.woff2') format('woff2'),
    url('~/assets/fonts/goodvibescyr-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  color: var(--color-grey-0);
  background: var(--color-white) url('~/assets/images/so-white.png') repeat 0 0;
}

body,
.typo-body {
  font-optical-sizing: auto;
  font-style: normal;
  font-family: var(--body-font);
  font-weight: 300;
}

em,
.typo-italic {
  font-style: italic;
}

strong,
.typo-bold {
  font-weight: 500;
}

h1,
h2,
h3,
h4,
h5,
h6,
.typo-header-font {
  font-family: var(--body-font);
}

* {
  &,
  &:after,
  &:before {
    box-sizing: border-box;
  }
}
</style>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

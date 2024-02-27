<template>
  <div>
    <h1>{{ $t('dimana') }} & {{ $t('tamas') }}</h1>
    <form>
      <select v-model="locale" :value="locale">
        <option value="en">en</option>
        <option value="bg">bg</option>
        <option value="hu">hu</option>
      </select>
    </form>
  </div>
</template>

<script setup>
const { locale } = useI18n()
useHead({
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<style lang="pcss">
@import '~/assets/styles/reset.css';
@import '~/assets/styles/tokens.css';

@font-face {
    font-family: 'Good Vibes';
    src: url('~/assets/fonts/goodvibescyr-webfont.woff2') format('woff2'),
         url('~/assets/fonts/goodvibescyr-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  color: var(--color-grey-0);
  background: #fff url('~/assets/images/so-white.png') repeat 0 0;
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
  font-style: italic
}

strong,
.typo-bold {
  font-weight: 500
}

h1,
h2,
h3,
h4,
h5,
h6,
.typo-header-font {
  font-family: var(--header-font);
}
</style>

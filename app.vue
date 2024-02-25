<template>
  <div>
    <h1>Dimana & Tamás</h1>
    <h1>Димана & Тамаш</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, non
      voluptate blanditiis in nobis hic perferendis repudiandae pariatur eaque
      distinctio exercitationem quod quam odio perspiciatis! Adipisci, ipsum.
      Cum, praesentium sequi.
    </p>

    <p>
      Лорем ипсум долор сит амет, но тале агам ерипуит вих, те порро алияуид
      пер. Хабео санцтус сусципиантур ид меа, яуалисяуе делицатиссими ан вим,
      меи риденс неморе еффициенди ад. Иус латине епицуреи те, те про еррем
      татион дицерет. Яуи ут магна дебет мнесарчум.
    </p>
    <em>italic</em>
    <em>магна</em>
    <strong>bold</strong>
    <strong>дебет</strong>
  </div>
</template>

<script setup>
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

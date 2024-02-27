<template>
  <app-navigation />
  <main id="content">
    <slot />
  </main>
  <app-footer />
</template>

<script setup></script>

<style lang="scss">
// Sticky footer
body,
html,
#__nuxt {
  min-height: 100vh;
}

#__nuxt {
  display: flex;
  flex-direction: column;
}

#navigation,
#footer {
  flex-grow: 0;
}

#footer {
  padding-bottom: var(--header-height);

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
}

#content {
  flex: 1;

  @media (min-width: 1024px) {
    padding-top: var(--header-height);
  }
}
</style>

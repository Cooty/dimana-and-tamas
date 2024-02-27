<template>
  <header id="navigation" class="navigation">
    <wrapper>
      <nav>
        <nuxt-link to="/">RSVP</nuxt-link>
        <nuxt-link to="/the-wedding">The Wedding</nuxt-link>
        <nuxt-link to="/when-in-bulgaria">When in Bulgaria</nuxt-link>
      </nav>
    </wrapper>
  </header>
</template>

<style lang="scss" scoped>
.navigation {
  --border-value: 1px solid var(--color-grey-4);
  --border-radius-value: 20px;
  z-index: var(--z-top);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: var(--header-height);

  @media screen and (min-width: 1024px) {
    top: 0;
    bottom: auto;
  }

  > * {
    height: 100%;
    display: flex;
    align-items: center;
    background-color: var(--color-white);
    border-top: var(--border-value);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);

    @media (min-width: 861px) {
      border-top-right-radius: var(--border-radius-value);
      border-top-left-radius: var(--border-radius-value);
    }

    @media (min-width: 1024px) {
      border-top: 0;
      border-bottom: var(--border-value);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: var(--border-radius-value);
      border-bottom-left-radius: var(--border-radius-value);
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: calc(var(--gutter) / 2);

    a {
      color: var(--color-sea-blue-1);
    }
  }
}
</style>

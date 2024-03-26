<template>
  <header id="navigation" class="navigation">
    <ui-wrapper>
      <div class="navigation__scroller">
        <nav>
          <nuxt-link :to="localePath('/')" class="home-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                style="fill: currentColor"
                d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
              />
            </svg>
          </nuxt-link>
          <template v-if="locale === 'bg'">
            <nuxt-link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfb-jYlzkKuiRAxEyDT8L2ANqbM49wy_cv47VraYH0IrNbqSw/viewform?hl=bg"
              target="_blank"
            >
              {{ $t('nav.rsvp') }}
            </nuxt-link>
          </template>
          <template v-else-if="locale === 'hu'">
            <nuxt-link
              to="https://docs.google.com/forms/d/e/1FAIpQLSf8CBZgstvMmhzH-_CJTKbbzQjMn59XzG10snkBZjPKkfjW3A/viewform?hl=hu"
              target="_blank"
            >
              {{ $t('nav.rsvp') }}
            </nuxt-link>
          </template>
          <template v-else>
            <nuxt-link
              to="https://docs.google.com/forms/d/e/1FAIpQLScLdy8zXt0tps13JH4A3NvwgB2-BEW4fUdI24jS6CzMU4IMoQ/viewform?hl=en"
              target="_blank"
            >
              {{ $t('nav.rsvp') }}
            </nuxt-link>
          </template>
          <nuxt-link :to="localePath('/the-wedding')">{{
            $t('nav.wedding')
          }}</nuxt-link>
          <nuxt-link :to="localePath('/when-in-bulgaria')">{{
            $t('nav.bulgaria')
          }}</nuxt-link>
        </nav>
      </div>
    </ui-wrapper>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
.navigation {
  --border-value: 1px solid var(--color-grey-4);
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
    flex-wrap: nowrap;
    gap: 24px;
    align-items: center;
    background-color: var(--color-white);
    border-top: var(--border-value);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);

    @media (min-width: 861px) {
      border-top-right-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);
    }

    @media (min-width: 1024px) {
      border-top: 0;
      border-bottom: var(--border-value);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
  }

  &__scroller {
    flex: 1;
    display: flex;
    overflow-y: auto;

    @media (min-width: 600px) {
      justify-content: center;
    }

    mask-image: linear-gradient(90deg, black 90%, transparent 100%);
  }

  nav {
    display: flex;
    align-items: center;
    gap: var(--gutter);

    a {
      color: var(--color-sea-blue-0);
      font-weight: 500;
      text-decoration: none;
      transition: all ease-in-out 0.3s;
      white-space: nowrap;
      display: block;
      padding: 8px;
      border-radius: 4px;

      &:hover,
      &:focus {
        &:not(.router-link-active) {
          background: var(--color-grey-5);
        }
      }

      &.router-link-active {
        background-color: var(--color-sea-blue-0);
        color: var(--color-white);
      }
    }
  }
}
</style>

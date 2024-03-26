<template>
  <header class="hero">
    <div class="hero__content">
      <div class="hero__card">
        <h1>
          <span class="name">{{ $t('dimana') }}</span>
          <span class="and">{{ $t('and') }}</span>
          <span class="name">{{ $t('tamas') }}</span>
        </h1>
        <p>
          <strong>{{ $t('invite-you') }}</strong>
        </p>
        <time class="datetime">
          <span>{{ $t('date') }}</span>
          <span>{{ $t('time') }}</span>
        </time>
        <p class="venue">
          <nuxt-link :to="localePath('/the-wedding#venue')">{{
            $t('venue')
          }}</nuxt-link>
        </p>
      </div>
    </div>
    <div class="hero__bottom">
      <ui-button :to="formLink" target="_blank">
        {{ $t('cta.rsvp') }}
      </ui-button>
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const { locale } = useI18n()
const formLink = useFormLink(locale.value)
</script>

<style lang="scss" scoped>
.hero {
  min-height: calc(100svh - var(--header-height));
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url('~/assets/images/figs-top-left-small.png'),
    url('~/assets/images/figs-bottom-right-small.png');
  background-position: -14vw 0, right bottom;
  background-size: auto 80svh, auto 66svh;

  @media screen and (min-width: 1024px) {
    background-image: url('~/assets/images/figs-top-left-big.png'),
      url('~/assets/images/figs-bottom-right-big.png');
    background-position: -2vw 0, right bottom;
    background-size: auto 80svh, auto 70svh;
  }

  &__content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  &__bottom {
    padding-bottom: 6svh;
  }

  &__card {
    --info-font-size: 1.2rem;
    --info-line-height: 1.4;
    --info-v-gutter: 1.8svh;
    background-color: var(--color-white);
    width: 80%;
    max-width: 400px;
    padding: 5svh;
    border-radius: 4px;
    box-shadow: var(--shadow-float);

    .datetime {
      &,
      > * {
        display: block;
        text-align: center;
        line-height: var(--info-line-height);
      }
    }

    .datetime,
    .venue {
      margin-top: var(--info-v-gutter);
      font-size: var(--info-font-size);
      font-style: italic;
      font-weight: 300;
      text-align: center;
      line-height: var(--info-line-height);
    }

    h1 {
      width: 100%;
      font-size: 7svh;
      display: flex;
      gap: 0.2em;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      font-family: var(--header-font);

      > * {
        span {
          display: block;
        }
      }

      .and {
        font-size: 0.6em;
      }

      & + p {
        margin-top: 3svh;
      }
    }

    p {
      text-align: center;
      line-height: 1.4;
    }
  }
}
</style>

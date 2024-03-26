<template>
  <div class="background">
    <ui-wrapper>
      <!-- TODO: Try this! -->
      <!-- https://stackoverflow.com/questions/74637529/router-link-active-nuxt-3-vuejs-on-nested-routes-not-applying-to-parent -->
      <nav>
        <ul>
          <li v-for="slug in slugs" :key="slug">
            <nuxt-link-locale :to="`/when-in-bulgaria/${slug}`">
              <ui-card>
                <h2>{{ $t(`${slug}.title`) }}</h2>
                <div class="button-container">
                  <span class="button">{{ $t('learn-more') }} →</span>
                </div>
              </ui-card>
            </nuxt-link-locale>
          </li>
        </ul>
      </nav>
    </ui-wrapper>
  </div>
</template>

<script setup>
const { t } = useI18n()

const slugs = [
  'arrival',
  'arriving-to-burgas',
  'hotels',
  'restaurants',
  'activities',
  'taxi',
  'parking',
  'public-transport',
  'bikes',
]

useHead({
  title: t('nav.bulgaria'),
})
</script>

<style global lang="scss">
@import '~/assets/styles/image-containers.scss';
</style>

<style lang="scss" scoped>
.background {
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url('~/assets/images/figs-top-left-wedding.png'),
    url('~/assets/images/figs-bottom-right-wedding.png');
  background-position: 0 0, right 0;
  background-size: auto 40svh, auto 50svh;
  background-attachment: fixed;

  @media screen and (min-width: 1024px) {
    background-size: auto auto, auto auto;
    background-attachment: scroll;
  }
}

nav {
  padding-top: calc(var(--header-height) + 1svh);
}

.button-container {
  text-align: right;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--gutter);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: calc(var(--gutter) * 2);
  }

  li {
    > * {
      display: block;

      &,
      > * {
        height: 100%;
      }
    }

    > a {
      color: var(--color-grey-0);
      text-decoration: none;

      .button {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.1);
        font-size: 0.8rem;
        transition: all 0.3s ease-in-out;
      }

      > * {
        transition: all 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &:hover,
      &:focus {
        transform: translateY(-2px);

        .button {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }

    h2 {
      font-size: 1.4rem;
      line-height: 1.2;
      font-weight: 500;
      margin-bottom: 1.5em;

      @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
      }
    }
  }
}
</style>

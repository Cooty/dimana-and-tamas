<template>
  <header id="navigation" class="navigation">
    <ui-wrapper>
      <div class="navigation__language-selector">
        <label>
          <img :src="flag" />
          <span>{{ languageLabels[locale] }}</span>
          <select @change="switchLanguage">
            <option value="en" :selected="locale === 'en'">
              {{ languageLabels.en }}
            </option>
            <option value="hu" :selected="locale === 'hu'">
              {{ languageLabels.hu }}
            </option>
            <option value="bg" :selected="locale === 'bg'">
              {{ languageLabels.bg }}
            </option>
          </select>
        </label>
      </div>
      <div class="navigation__scroller">
        <nav>
          <nuxt-link :to="localePath('/registration')">{{
            $t('nav.rsvp')
          }}</nuxt-link>
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
import huFlag from '../assets/images/flags/hu.svg'
import enFlag from '../assets/images/flags/en.svg'
import bgFlag from '../assets/images/flags/bg.svg'

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const router = useRouter()

const flag = ref(enFlag)
function setFlag() {
  if (locale.value === 'hu') {
    flag.value = huFlag
  } else if (locale.value === 'bg') {
    flag.value = bgFlag
  } else if (locale.value === 'en') {
    flag.value = enFlag
  }
}

const languageLabels = {
  en: 'EN',
  bg: 'БГ',
  hu: 'HU',
}

onMounted(() => {
  setFlag()
})

function switchLanguage(e) {
  router.push(switchLocalePath(e.target.value)).then(() => {
    setFlag()
  })
}
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

  &__language-selector {
    flex-grow: 0;
    padding-right: 8px;
    border-right: 1px solid var(--color-grey-5);

    > label {
      position: relative;
      display: flex;
      gap: 4px;
      align-items: center;

      img {
        display: block;
        width: 24px;
        border-radius: 100%;
        border: 1px solid var(--color-grey-5);
      }

      span {
        font-size: 0.8rem;
        font-weight: 500;
      }

      select {
        appearance: none;
        border: none;
        background: none;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>

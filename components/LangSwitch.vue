<template>
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
</template>

<script setup>
import huFlag from '../assets/images/flags/hu.svg'
import enFlag from '../assets/images/flags/en.svg'
import bgFlag from '../assets/images/flags/bg.svg'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
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
  &__language-selector {
    position: absolute;
    z-index: var(--z-top);
    padding: 8px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: var(--color-white);
    box-shadow: var(--small-shadow);
    left: 0;
    top: 14px;

    @media screen and (min-width: 1024px) {
      position: fixed;
      top: 30svh;
    }

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

<template>
  <section id="form">
    <ui-wrapper>
      <div class="form">
        <iframe
          :src="`https://docs.google.com/forms/d/e/${formIds[locale]}/viewform?embedded=true&hl=${locale}`"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Loading…</iframe
        >
      </div>
    </ui-wrapper>
  </section>
</template>

<script setup>
const { locale } = useI18n()
const formIds = {
  en: '1FAIpQLScLdy8zXt0tps13JH4A3NvwgB2-BEW4fUdI24jS6CzMU4IMoQ',
  hu: '1FAIpQLSf8CBZgstvMmhzH-_CJTKbbzQjMn59XzG10snkBZjPKkfjW3A',
  bg: '1FAIpQLSfb-jYlzkKuiRAxEyDT8L2ANqbM49wy_cv47VraYH0IrNbqSw',
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1024px) {
    padding-top: var(--header-height);
  }

  > iframe {
    width: 100%;
    height: 100%;
  }
}
</style>

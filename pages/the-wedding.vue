<template>
  <div class="background">
    <ui-section id="venue">
      <ui-card>
        <wedding-intro />
        <wedding-parking />
        <wedding-map />
      </ui-card>
    </ui-section>
    <ui-section id="program">
      <ui-card>
        <ui-section-header>
          <a href="#program">{{ $t('section.programme') }}</a>
        </ui-section-header>
        <wedding-programme />
      </ui-card>
    </ui-section>
    <ui-section id="dress-code">
      <ui-card>
        <ui-section-header
          ><a href="#dress-code">{{ $t('dress-code.title') }}</a>
        </ui-section-header>
        <wedding-dress-code />
      </ui-card>
    </ui-section>
    <ui-section id="gift">
      <ui-card>
        <ui-section-header
          ><a href="#gift">{{ $t('gift.title') }}</a></ui-section-header
        >
        <wedding-gifts />
      </ui-card>
    </ui-section>
    <ui-section id="seating">
      <ui-card>
        <ui-section-header
          ><a href="#seating">{{ $t('seating.title') }}</a></ui-section-header
        >
        <wedding-seating />
      </ui-card>
    </ui-section>
    <ui-section id="contact">
      <ui-card>
        <ui-section-header
          ><a href="#contact">{{ $t('contact.title') }}</a></ui-section-header
        >
        <wedding-contact />
      </ui-card>
    </ui-section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('nav.wedding'),
})
</script>

<style lang="scss">
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
</style>

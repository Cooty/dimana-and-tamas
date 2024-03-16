<template>
  <ui-sub-section>
    <ui-sub-section-header id="parking">{{
      $t('parking-title')
    }}</ui-sub-section-header>
    <ui-body-text>
      <content-doc :path="`${$i18n.locale}/wedding/_parking`" />
    </ui-body-text>
  </ui-sub-section>
</template>

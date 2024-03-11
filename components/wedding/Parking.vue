<template>
  <ui-sub-section>
    <ui-sub-section-header>{{ $t('parking-title') }}</ui-sub-section-header>
    <ui-body-text>
      <i18n-t tag="p" keypath="parking-info-1">
        <template #parking1>
          <a
            href="https://maps.app.goo.gl/e8zex5bBRy9CWPMe7"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('parking-1-name') }}</a
          >
        </template>
        <template #parking2>
          <a
            href="https://maps.app.goo.gl/NYykeTB535yaSpm38"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('parking-2-name') }}</a
          >
        </template>
      </i18n-t>

      <i18n-t tag="p" keypath="parking-info-2">
        <template #parkingWebsite>
          <a
            href="https://www.transportburgas.bg/bg/%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%B2-%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%BD%D0%B8-%D0%B7%D0%BE%D0%BD%D0%B8-%D0%B3%D1%80%D0%B0%D0%B4-%D0%B1%D1%83%D1%80%D0%B3%D0%B0%D1%81"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('parking-website-link-label') }}</a
          >
        </template>
      </i18n-t>
    </ui-body-text>
  </ui-sub-section>
</template>

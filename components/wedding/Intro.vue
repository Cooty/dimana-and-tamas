<template>
  <ui-pull-out-columns>
    <template #first>
      <div id="venue">
        <ui-section-header
          ><a href="#venue">{{ $t('section.venue') }}</a></ui-section-header
        >
        <ui-body-text
          ><content-doc :path="`${$i18n.locale}/wedding/_intro`" />
        </ui-body-text>
      </div>
    </template>
    <template #second>
      <ui-aspect-ratio-box>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/4vOXtBuNcJ8?si=bpD_vJOd8NHw-sm_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ui-aspect-ratio-box>
    </template>
  </ui-pull-out-columns>
</template>

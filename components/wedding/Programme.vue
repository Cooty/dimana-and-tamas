<template>
  <ui-body-text>
    <ul class="unstyled">
      <i18n-t v-for="n in 7" tag="li" :keypath="`programme.point-${n}`" :key="n"
        ><template #time
          ><strong>{{ times[n - 1] }}</strong></template
        ></i18n-t
      >
    </ul>
  </ui-body-text>
</template>

<script setup>
const times = ['17.00', '18.00', '18.30', '20.00', '21.00', '23.30', '02.00']
</script>

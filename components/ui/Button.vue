<template>
  <a :href="props.to" class="button">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  to: String,
})

console.log('button props: ', props)
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  color: var(--color-white);
  transition: all ease-in-out 0.3s;
  border-radius: 0.6rem;
  padding: 1rem 2rem;
  font-weight: 500;
  background-color: var(--color-fig-purple);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>

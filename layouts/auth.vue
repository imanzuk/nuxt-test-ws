<template>
  <UContainer class="w-1/2 mt-20">
    <UCard>
      <slot />
      <hr>
      <footer>
        Nuxt.js test app
      </footer>
    </UCard>
  </UContainer>
</template>

<style>
hr {
  margin: 20px 0 20px 0;
}
</style>

<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useProductStore } from "~~/store/product"

const productStore = useProductStore()
await productStore.fetchAll()
console.debug('products loaded', productStore.productItems.length)
</script>

<style>
.product-footer {
  display: flex;
  padding-top: 10px;
}
.product-footer div {
  flex: 1;
}
.product-footer div:last-child {
  text-align: right;
}
</style>

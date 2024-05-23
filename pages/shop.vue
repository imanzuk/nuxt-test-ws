<template>
  <ProductList empty-message="Currently there are no products in the shop. Come back later." :items="productStore.sortItems">
    <template #footer="product">
      <div class="product-footer">
        <div>
          <UTooltip text="View product details">
            <UButton
              icon="i-heroicons-eye"
              size="sm"
              color="white"
              variant="solid"
              :to="`/product-${product.id}`"
            />
          </UTooltip>
        </div>
        <div>
          <UTooltip text="Add to cart">
            <UButton
              icon="i-heroicons-shopping-cart"
              size="sm"
              color="primary"
              variant="solid"
              @click="handleAddToCartClick(product)"
            />
          </UTooltip>
        </div>
      </div>
    </template>
  </ProductList>
</template>

<script setup lang="ts">
import { useCartStore } from "~~/store/cart"
import { useProductStore } from "~~/store/product"

const cartStore = useCartStore()
const productStore = useProductStore()
const toast = useToast()

const handleAddToCartClick = (product) => {
  if (cartStore.addItem(product)) {
    toast.add({ title: `"${product.name}" added to the cart.`, timeout: 3000 })
  } else {
    toast.add({ title: `"${product.name}" is already in the cart.`, timeout: 3000 })
  }
}
</script>

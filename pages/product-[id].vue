<template>
  <UContainer class="w-1/2">
    <UCard>
      <header>
        <div class="text-center">
          {{ product.name }}
          <div>
            <img :src="'https://picsum.photos/id/' + product.id + '/600/400'" alt="product">
          </div>
        </div>
      </header>
      <hr>
      <table style="width:98%;">
        <tbody>
          <tr>
            <td>Memory:</td>
            <td>{{ product.memory }}</td>
          </tr>
          <tr>
            <td>Color:</td>
            <td>{{ product.color }}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{{ product.price }} HUF</td>
          </tr>
        </tbody>
      </table>
      <hr>
      <footer>
        <div class="product-footer">
          <div>
            <UButton
              icon="i-heroicons-arrow-uturn-left"
              size="sm"
              color="white"
              variant="solid"
              to="/shop"
            >
              Back to the products
            </UButton>
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
      </footer>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { useProductStore } from "~~/store/product"
import { useCartStore } from "~/store/cart";

const route = useRoute()
const productId = route.params.id
const productStore = useProductStore()
const product = productStore.getById(parseInt(productId))
const cartStore = useCartStore()
const toast = useToast()

const handleAddToCartClick = (product) => {
  if (cartStore.addItem(product)) {
    toast.add({ title: `"${product.name}" added to the cart.`, timeout: 3000 })
  } else {
    toast.add({ title: `"${product.name}" is already in the cart.`, timeout: 3000 })
  }
}
</script>

<style scoped>
hr {
  margin: 10px 0 10px 0;
}
</style>

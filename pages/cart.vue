<template>
  <div>
    <ProductList empty-message="Your cart is empty." :items="cartStore.sortItems">
      <template #footer="product">
        <div class="product-footer">
          <UTooltip text="Remove from cart">
            <UButton
              icon="i-heroicons-trash"
              size="sm"
              color="primary"
              variant="solid"
              @click="handleDeleteClick(product)"
            />
          </UTooltip>
        </div>
      </template>
    </ProductList>
    <div v-if="cartStore.cartItems.length > 0">
      <UDivider class="mt-8 mb-8" />
      <div class="cart-actions">
        <UButton
          class="mr-4"
          icon="i-heroicons-trash"
          size="sm"
          color="primary"
          variant="solid"
          @click="handleEmptyCart()"
        >
          Empty cart
        </UButton>
        <UButton
          icon="i-heroicons-credit-card"
          size="sm"
          color="primary"
          variant="solid"
          @click="handleCheckout()"
        >
          Checkout
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~~/store/cart"

definePageMeta({
  middleware: [
    'auth',
  ],
});

const cartStore = useCartStore()
const toast = useToast()

const handleCheckout = () => {
  toast.add({ title: "Sorry, checkout not implemented yet.", timeout: 0 })
}

const handleDeleteClick = (product) => {
  cartStore.removeItem(product.id)
  toast.add({ title: `"${product.name}" removed from the cart`, timeout: 3000 })
}

const handleEmptyCart = () => {
  cartStore.emptyCart()
}
</script>

<style scoped>
.cart-actions {
  text-align: right;
}
.product-footer {
  padding-top: 10px;
  text-align: right;
}
</style>

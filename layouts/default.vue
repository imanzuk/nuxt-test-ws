<template>
  <div class="px-6 w-full mx-auto max-w-6xl sticky top-0 nav-container">
    <UHorizontalNavigation :links="links" />
  </div>
  <main>
    <div class="px-6 w-full mx-auto max-w-6xl">
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/cart";

const cartStore = useCartStore()
const toast = useToast()
const user = useSupabaseUser()

const linkEntriesLeft = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Shop',
  icon: 'i-heroicons-shopping-bag',
  to: '/shop'
}]
const linkEntriesRight = [{
  label: 'Cart',
  icon: 'i-heroicons-shopping-cart',
  to: '/cart',
}, {
  label: 'Login',
  icon: 'i-heroicons-user',
  click: () => {
    if (user && user.value) {
      console.debug('already logged in')
      return
    }
    navigateTo('login')
  }
}, {
  label: 'Logout',
  icon: 'i-heroicons-user',
  click: () => {
    if (!user || !user.value) {
      console.debug('already logged out')
      return
    }
    handleLogoutClick()
  }
}]
const links = [ linkEntriesLeft, linkEntriesRight ]

const handleLogoutClick = () => {
  toast.add({
    title: "Confirm logout.",
    actions: [{
      label: 'Cancel',
      click: () => {}, //NOP
    }, {
      label: 'Confirm',
      click: () => navigateTo('logout'),
    }]
  })
}
</script>

<style>
.nav-container {
  background-color: white;
  margin-bottom: 10px;
  padding-bottom: 10px;
  z-index: 999;
}
</style>

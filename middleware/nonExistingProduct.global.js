import {useProductStore} from "~/store/product";

export default defineNuxtRouteMiddleware((to) => {
  if (to.name !== 'product-id') {
    return
  }

  const productId = to.params.id
  const productStore = useProductStore()
  const product = productStore.getById(parseInt(productId))

  if (!product) {
    console.warn(`Product ${productId} not found.`)
    return navigateTo('/shop')
  }
})

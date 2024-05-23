export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([])

  const sortItems = computed(() =>
    [...cartItems.value].sort((a, b) => b.id - a.id)
  )

  const addItem = (item) => {
    const checkItems = cartItems.value.find((x) => x.id === item.id)
    if (!checkItems) {
      cartItems.value.push(item)
      return item
    }
    return null
  }

  const removeItem = (id) => {
    cartItems.value = cartItems.value.filter((x) => x.id !== id)
  }

  const emptyCart = () => {
    cartItems.value = []
  }

  return {
    cartItems,
    sortItems,
    addItem,
    removeItem,
    emptyCart,
  }
})

export const useProductStore = defineStore("product", () => {
  const productItems = ref([])

  const sortItems = computed(() =>
    [...productItems.value].sort((a, b) => b.id - a.id)
  )

  const fetchAll = async () => {
    const client = useSupabaseAuthClient()
    const { data } = await client.from('product').select('id, name, price, attributes->category, attributes->color, attributes->memory')
    productItems.value = data
  }

  const getById = (id) => {
    return productItems.value.find(x => x.id === id)
  }

  return {
    productItems,
    sortItems,
    fetchAll,
    getById,
  };
});

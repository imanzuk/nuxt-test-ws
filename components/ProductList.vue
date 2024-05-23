<template>
  <div class="product-list-container">
    <div v-if="props.items.length === 0">
      {{ props.emptyMessage }}
    </div>
    <UCard v-for="product in props.items" class="max-h-90">
      <header>
        <img :src="'https://picsum.photos/id/' + product.id + '/300/200'" alt="product">
        {{ product.name }}
      </header>
      <UDivider />
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
      <UDivider />
      <footer>
        <slot name="footer" v-bind="product"></slot>
      </footer>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  emptyMessage?: string
  items?: IProduct[]
}>()
</script>

<style scoped>
.product-list-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>

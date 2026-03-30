<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-black text-primary">Наша продукция</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <UCard v-for="product in products" :key="product.id">
        <template #header>
          <div class="h-40 -m-4 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
          </div>

          <p class="font-semibold">{{ product.name }}</p>
        </template>

        <p class="text-sm text-gray-500 mb-4">{{ product.description }}</p>

        <div class="flex items-center justify-between">
          <span class="font-bold text-primary">{{ product.price }} ₽</span>
          <UButton icon="i-heroicons-plus" label="В корзину" size="sm" @click="addToCart(product)" />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { addToCart } = useCart();

const products = [
  {
    id: 1,
    name: 'Перепела бройлерные',
    price: 300,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке',
    image: '/catalog/perepelka.jpg',
  },
  {
    id: 2,
    name: 'Цесарка',
    price: 1500,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке',
    image: '/catalog/cesarka.jpg',
  },
  {
    id: 3,
    name: 'Фазан вольерный',
    price: 1800,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке',
    image: '/catalog/fazan.jpg',
  },
];
</script>

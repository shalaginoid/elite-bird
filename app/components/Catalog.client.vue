<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-black text-primary">Наша продукция</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Motion
        v-for="(product, index) in products"
        :key="product.id"
        :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
        :transition="{
          duration: 0.6,
          delay: Number(index) * 0.1,
        }"
        :while-in-view="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
        :in-view-options="{ once: true }"
      >
        <UPageCard :title="product.name" orientation="vertical" reverse>
          <template #description>
            <div class="font-bold text-primary mb-2">{{ product.price }} ₽</div>
            <div class="mb-4">{{ product.description }}</div>
            <UButton icon="i-lucide-plus" label="В корзину" size="sm" @click="addToCart(product)" />
          </template>
          <img :src="config.app.baseURL + product.image" :alt="product.name" class="w-full" />
        </UPageCard>
      </Motion>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { addToCart } = useCart();

const config = useRuntimeConfig();

const products = [
  {
    id: 1,
    name: 'Перепела бройлерные',
    price: 300,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе от 5000р скидка 10%',
    image: '/catalog/perepelka.jpg',
  },
  {
    id: 2,
    name: 'Цесарка',
    price: 1500,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе от 5000р скидка 10%',
    image: '/catalog/cesarka.jpg',
  },
  {
    id: 3,
    name: 'Фазан вольерный',
    price: 1800,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе от 5000р скидка 10%',
    image: '/catalog/fazan.jpg',
  },
];
</script>

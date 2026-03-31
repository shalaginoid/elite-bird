<template>
  <div class="max-w-4xl mx-auto pb-12">
    <h2 class="text-4xl font-black text-primary text-center mb-12" id="catalog">Наша продукция</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Motion
        v-for="(product, index) in products"
        :key="product.id"
        :initial="{ opacity: 0, filter: 'blur(20px)' }"
        :transition="{
          duration: 0.6,
          delay: Number(index) * 0.1,
        }"
        :while-in-view="{ opacity: 1, filter: 'blur(0px)' }"
        :in-view-options="{ once: true }"
      >
        <UPageCard :title="product.name" orientation="vertical" reverse>
          <template #description>
            <div class="mb-4">{{ product.description }}</div>

            <ClientOnly>
              <div class="flex items-center justify-between mt-4 h-10">
                <span class="font-bold text-lg">{{ product.price }} ₽</span>

                <UButton
                  v-if="!getCartItem(product.id)"
                  icon="i-lucide-shopping-cart"
                  label="В корзину"
                  color="primary"
                  @click="addToCart(product)"
                />

                <UFieldGroup v-else size="sm" orientation="horizontal">
                  <UButton icon="i-lucide-minus" variant="soft" @click="updateQuantity(product.id, -1)" />

                  <UButton variant="soft" disabled class="min-w-10 font-bold text-primary flex justify-center">
                    {{ getCartItem(product.id).quantity }}
                  </UButton>

                  <UButton icon="i-lucide-plus" variant="soft" @click="updateQuantity(product.id, 1)" />
                </UFieldGroup>
              </div>
            </ClientOnly>
          </template>

          <NuxtImg
            width="640"
            height="640"
            class="rounded-lg aspect-square object-cover"
            v-bind="{ src: product.image, alt: product.name }"
          />
        </UPageCard>
      </Motion>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { cart, addToCart, updateQuantity } = useCart();

// Получаем объект товара из корзины, чтобы иметь доступ к его количеству
const getCartItem: any = (productId: number) => {
  return cart.value.find((item) => item.id === productId);
};

const products = [
  {
    id: 1,
    name: 'Перепела бройлерные',
    price: 300,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе на сумму от 5000 руб. - скидка 10%',
    image: '/catalog/perepelka.jpg',
  },
  {
    id: 2,
    name: 'Цесарка',
    price: 1500,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе на сумму от 5000 руб. - скидка 10%',
    image: '/catalog/cesarka.jpg',
  },
  {
    id: 3,
    name: 'Фазан вольерный',
    price: 1800,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе на сумму от 5000 руб. - скидка 10%',
    image: '/catalog/fazan.jpg',
  },
];
</script>

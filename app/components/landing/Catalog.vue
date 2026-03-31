<template>
  <UPageSection
    id="catalog"
    title="Наша продукция"
    description="Мясо доставляется сырым, охлажденным, в вакуумной упаковке"
  >
    <UBlogPosts>
      <UBlogPost v-for="(product, index) in products" :key="index" v-bind="product">
        <template #header>
          <NuxtImg
            width="640"
            height="640"
            class="rounded-lg aspect-square object-cover"
            v-bind="{ src: product.image, alt: product.name }"
          />
        </template>

        <template #title>
          {{ product.name }}
        </template>

        <template #footer>
          <div class="min-w-0 flex-1 flex flex-col p-4 pt-0 sm:pt-0 sm:p-6">
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
          </div>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UPageSection>

  <!-- <div class="max-w-4xl mx-auto pb-12">
    <h2 class="text-left text-xl sm:text-xl lg:text-4xl font-black text-primary" id="catalog">Наша продукция</h2>

    <UBlogPosts>
      <UBlogPost v-for="(product, index) in products" :key="index" v-bind="product">
        <template #header>
          <NuxtImg
            width="640"
            height="640"
            class="rounded-lg aspect-square object-cover"
            v-bind="{ src: product.image, alt: product.name }"
          />
        </template>

        <template #title>
          {{ product.name }}
        </template>

        <template #footer>
          <div class="min-w-0 flex-1 flex flex-col p-4 pt-0 sm:pt-0 sm:p-6">
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
          </div>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </div> -->
</template>

<script lang="ts" setup>
const { cart, addToCart, updateQuantity } = useCart();

const getCartItem: any = (productId: number) => {
  return cart.value.find((item) => item.id === productId);
};

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Перепела бройлерные',
    price: 300,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе на сумму от 5000 руб. - скидка 10%',
    image: '/catalog/perepelka.jpg',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Цесарка',
    price: 1500,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе на сумму от 5000 руб. - скидка 10%',
    image: '/catalog/cesarka.jpg',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Фазан вольерный',
    price: 1800,
    discountThreshold: 5000,
    discountRate: 0.1,
    description: 'Охлажденные, в вакуумной упаковке. При заказе на сумму от 5000 руб. - скидка 10%',
    image: '/catalog/fazan.jpg',
    quantity: 0,
  },
]);
</script>

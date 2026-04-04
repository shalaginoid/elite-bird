<template>
  <UModal title="Ваша корзина" description="Вы можете закрыть корзину и продолжить покупки">
    <ClientOnly>
      <div ref="cartIconRef">
        <UChip :text="totalItems" size="3xl" :show="totalItems > 0" inset>
          <UButton color="secondary" icon="i-lucide-shopping-cart" size="xl" class="rounded-full" />
        </UChip>
      </div>
    </ClientOnly>

    <template #body>
      <div v-if="cart.length === 0" class="text-center py-8 text-gray-500">
        <UEmpty
          variant="naked"
          icon="i-lucide-shopping-cart"
          title="Корзина пуста"
          description="Время что-нибудь купить"
        />
      </div>

      <div class="divide-default/50 divide-y">
        <div v-for="item in cart" :key="item.id" class="grid grid-cols-5 gap-4 py-4">
          <NuxtImg
            v-bind="{ src: item.image, alt: item.name }"
            width="640"
            height="640"
            class="rounded-lg aspect-square object-cover"
          />

          <div class="col-span-2 sm:col-span-3">
            <div>
              <p class="font-medium text-sm">{{ item.name }}</p>

              <div v-if="item.price * item.quantity >= item.discountThreshold" class="flex flex-col">
                <div class="flex items-center gap-2">
                  <span class="text-xs line-through text-gray-400">{{ item.price * item.quantity }} ₽</span>
                  <span class="text-sm font-bold text-green-600">{{ getItemSubtotal(item).toFixed(0) }} ₽</span>
                </div>

                <span class="text-[10px] text-green-500 font-medium">
                  Акция: -{{ item.discountRate * 100 }}% от {{ item.discountThreshold }} ₽
                </span>
              </div>

              <div v-else class="flex flex-col">
                <span class="text-sm font-bold">{{ item.price * item.quantity }} ₽</span>

                <span class="text-[10px] text-gray-400">
                  Скидка {{ item.discountRate * 100 }}% при заказе от {{ item.discountThreshold }} ₽
                </span>
              </div>
            </div>
          </div>

          <div class="sm:flex sm:justify-end">
            <div>
              <UFieldGroup size="sm" orientation="horizontal">
                <UButton icon="i-lucide-minus" variant="soft" @click="updateQuantity(item.id, -1)" />

                <UButton variant="soft" class="min-w-10 font-bold text-primary flex justify-center" disabled>
                  {{ item.quantity }}
                </UButton>

                <UButton icon="i-lucide-plus" variant="soft" @click="updateQuantity(item.id, 1)" />
              </UFieldGroup>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer v-if="cart.length > 0">
      <div class="space-y-4 w-full">
        <UAlert
          v-if="!isOrderValid"
          icon="i-lucide-info"
          color="neutral"
          variant="soft"
          title="Минимальный заказ"
          :description="`Добавьте товаров еще на ${amountToMinOrder} ₽, чтобы оформить заказ (минимум ${MIN_ORDER_SUM} ₽)`"
        />

        <div class="flex justify-between items-center font-bold w-full">
          <span>Итого:</span>
          <span class="text-primary">{{ totalPrice }} ₽</span>
        </div>

        <div class="flex gap-2">
          <UButton label="Очистить" color="neutral" variant="soft" icon="i-lucide-trash-2" @click="clearCart" />

          <UModal
            title="Оформление заказа"
            description="После оформления заказа мы свяжемся с Вами для уточнения деталей"
          >
            <UButton
              label="Оформить заказ"
              color="primary"
              block
              size="lg"
              :disabled="!isOrderValid"
              :icon="isOrderValid ? 'i-lucide-check' : 'i-lucide-lock'"
            />

            <template #body>
              <Order :cart="cart" :total="totalPrice" />
            </template>
          </UModal>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup>
const {
  cart,
  totalPrice,
  totalItems,
  updateQuantity,
  removeFromCart,
  clearCart,
  getItemSubtotal,
  amountToMinOrder,
  MIN_ORDER_SUM,
  isOrderValid,
} = useCart();

const cartIconRef = ref(null);

watch(totalPrice, () => {
  cartIconRef.value.classList.add('bounce-active');

  setTimeout(() => {
    cartIconRef.value.classList.remove('bounce-active');
  }, 500);
});
</script>

<style>
.bounce-active {
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>

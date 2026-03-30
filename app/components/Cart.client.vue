<template>
  <UModal title="Ваша корзина" description="Вы можете закрыть корзину и продолжить покупки">
    <UChip :text="totalItems" size="3xl" :show="totalItems > 0">
      <UButton icon="i-lucide-shopping-cart" :variant="totalItems === 0 ? 'ghost' : 'soft'" />
    </UChip>

    <template #body>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <div class="p-4 space-y-4">
          <div v-if="cart.length === 0" class="text-center py-8 text-gray-500">
            Корзина пуста. Время что-нибудь купить!
          </div>

          <div v-for="item in cart" :key="item.id" class="flex flex-col border-b border-gray-100 py-3">
            <UAvatar :src="item.image" :alt="item.name" size="lg" class="bg-gray-100" />

            <div class="flex items-center justify-between">
              <div class="flex-1">
                <p class="font-medium text-sm">{{ item.name }}</p>

                <!-- Проверка: применяется ли скидка именно к этому товару сейчас -->
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
                  <span class="text-sm font-bold text-primary">{{ item.price * item.quantity }} ₽</span>
                  <span class="text-[10px] text-gray-400">
                    Скидка {{ item.discountRate * 100 }}% при заказе от {{ item.discountThreshold }} ₽
                  </span>
                </div>
              </div>

              <!-- Кнопки управления +/- -->
              <UFieldGroup size="2xs">
                <UButton icon="i-lucide-minus" @click="updateQuantity(item.id, -1)" />
                <UButton disabled>{{ item.quantity }}</UButton>
                <UButton icon="i-lucide-plus" @click="updateQuantity(item.id, 1)" />
              </UFieldGroup>

              <UButton icon="i-lucide-trash-2" color="red" variant="ghost" size="xs" @click="removeFromCart(item.id)" />
            </div>
          </div>
        </div>

        <template #footer v-if="cart.length > 0">
          <div class="space-y-4">
            <!-- Инфо-блок о минимальном заказе -->
            <UAlert
              v-if="!isOrderValid"
              icon="i-lucide-info"
              color="orange"
              variant="soft"
              title="Минимальный заказ"
              :description="`Добавьте товаров еще на ${amountToMinOrder} ₽, чтобы оформить заказ (минимум ${MIN_ORDER_SUM} ₽)`"
            />

            <div class="flex justify-between items-center font-bold text-lg">
              <span>Итого:</span>
              <span class="text-primary">{{ totalPrice }} ₽</span>
            </div>

            <div class="flex gap-2">
              <UButton label="Очистить" color="neutral" variant="soft" icon="i-lucide-trash-2" @click="clearCart" />

              <UButton
                label="Оформить заказ"
                color="primary"
                block
                size="lg"
                :disabled="!isOrderValid"
                :icon="isOrderValid ? 'i-lucide-check' : 'i-lucide-lock'"
              />
            </div>
          </div>
        </template>
      </UCard>
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
</script>

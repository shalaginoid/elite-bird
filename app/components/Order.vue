<template>
  <UForm v-if="!isSuccess" :schema="orderSchema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Имя" name="fullname">
      <UInput v-model="state.fullname" class="w-full" />
    </UFormField>

    <UFormField label="Адрес доставки" name="address">
      <UInput v-model="state.address" class="w-full" />
    </UFormField>

    <UFormField label="E-mail" name="email">
      <UInput v-model="state.email" class="w-full" />
    </UFormField>

    <UFormField label="Телефон" name="phone">
      <UInput v-model="state.phone" class="w-full" v-maska="'+7 (###) ##-##-###'" />
    </UFormField>

    <UFormField label="Дата доставки" name="deliveryDate">
      <UInput v-model="state.deliveryDate" type="date" class="w-full" />
    </UFormField>

    <UButton type="submit" :loading="loading">Заказать</UButton>
  </UForm>

  <div v-else class="flex flex-col items-center gap-4">
    <UIcon name="line-md:email-check" class="size-20" />
    <div>Заказ оформлен</div>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import { vMaska } from 'maska/vue';

const props = defineProps<{
  cart: Product[];
  total: number;
}>();

const loading = ref(false);
const isSuccess = ref(false);

const state = reactive<Partial<OrderSchema>>({
  fullname: 'Константин',
  address: 'Савкова 29-330',
  email: 'shalaginoid@mail.ru',
  phone: '+7 (902) 87-98-691',
  deliveryDate: '2026-04-03',
  order: props.cart,
  total: props.total,
});

async function onSubmit(event: FormSubmitEvent<OrderSchema>) {
  try {
    loading.value = true;

    await $fetch('/api/order', {
      method: 'POST',
      body: event.data,
    });

    isSuccess.value = true;
  } catch (error: any) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>

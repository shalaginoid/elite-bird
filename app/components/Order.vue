<template>
  <UForm :schema="orderSchema" :state="state" class="space-y-4 w-md" @submit="onSubmit">
    <UFormField label="Имя" name="fullname">
      <UInput v-model="state.fullname" autofocus />
    </UFormField>

    <UFormField label="Адрес" name="address">
      <UInput v-model="state.address" />
    </UFormField>

    <UFormField label="Телефон" name="phone">
      <UInput v-model="state.phone" v-maska="'+7 (###) ##-##-###'" />
    </UFormField>

    <UFormField label="Дата доставки" name="deliveryDate">
      <UInput v-model="state.deliveryDate" />
    </UFormField>

    <UButton type="submit">Заказать</UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';

const state = reactive<Partial<OrderSchema>>({
  fullname: undefined,
  address: undefined,
  phone: undefined,
  deliveryDate: undefined,
});

async function onSubmit(event: FormSubmitEvent<OrderSchema>) {
  console.log(event.data);
}
</script>

<template>
  <UForm :schema="orderSchema" :state="state" class="space-y-4 w-md" @submit="onSubmit">
    <UFormField label="Имя" name="fullname">
      <UInput v-model="state.fullname" autofocus />
    </UFormField>

    <UFormField label="Адрес доставки" name="address">
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
import { vMaska } from 'maska/vue';

const props = defineProps<{
  cart: Product[];
}>();

const state = reactive<Partial<OrderSchema>>({
  fullname: 'Константин',
  address: 'Улица разбитых фонарей',
  phone: '+7 (902) 87-98-691',
  deliveryDate: '01.04.2026',
});

async function onSubmit(event: FormSubmitEvent<OrderSchema>) {
  try {
    const data = {
      service_id: 'default_service',
      template_id: 'template_lkfgscs',
      user_id: 'JeFr0rG57HuS0cXES',
      template_params: {
        name: 'Test',
        message: 'Test',
      },
    };

    // const response = await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   body: {
    //     service_id: 'default_service',
    //     template_id: 'template_lkfgscs',
    //     user_id: 'JeFr0rG57HuS0cXES',
    //     template_params: {
    //       from_name: 'Имя отправителя',
    //       message: 'Текст сообщения',
    //     },
    //   },
    // });

    // console.log(response);
  } catch (error: any) {
    console.log(error);
  }
}
</script>

<template>
  <UForm v-if="!isSuccess" :schema="orderSchema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Имя" name="fullname">
      <UInput v-model="state.fullname" class="w-full" />
    </UFormField>

    <UFormField label="Адрес доставки" name="address">
      <UInput v-model="state.address" class="w-full" />
    </UFormField>

    <UFormField label="Телефон" name="phone">
      <UInput v-model="state.phone" class="w-full" v-maska="'+7 (###) ##-##-###'" />
    </UFormField>

    <UFormField label="Дата доставки" name="deliveryDate">
      <UInput v-model="state.deliveryDate" type="date" class="w-full" />
    </UFormField>

    <UButton type="submit">Заказать</UButton>
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

const isSuccess = ref(false);

const state = reactive<Partial<OrderSchema>>({
  fullname: 'Константин',
  address: 'Улица разбитых фонарей',
  phone: '+7 (902) 87-98-691',
  deliveryDate: undefined,
});

async function onSubmit(event: FormSubmitEvent<OrderSchema>) {
  try {
    const data = event.data;

    const order = generateTable(
      props.cart.map(({ id, image, discountThreshold, discountRate, description, ...rest }) => rest),
    );

    console.log(order);

    // isSuccess.value = true;

    // const html = `
    //   Имя: ${event.data.fullname}\n
    //   Адрес: ${event.data.address}\n
    //   Телефон: ${event.data.phone}\n
    //   Дата доставки: ${event.data.deliveryDate}\n
    //   Заказ:\n
    //   ${order}
    // `;

    // const response = await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   body: {
    //     service_id: 'service_duwf2yl',
    //     template_id: 'template_lkfgscs',
    //     user_id: 'JeFr0rG57HuS0cXES',
    //     template_params: {
    //       message: order.toString(),
    //     },
    //   },
    // });

    // console.log(response);
  } catch (error: any) {
    console.log(error);
  }
}

function generateTable(data: any) {
  const table = document.createElement('table');
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  const keys = Object.keys(data[0]);

  keys.forEach((key) => {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });

  const tbody = table.createTBody();

  data.forEach((item: any) => {
    const row = tbody.insertRow();
    keys.forEach((key) => {
      const cell = row.insertCell();
      cell.textContent = item[key] ?? '';
    });
  });

  return table;
}
</script>

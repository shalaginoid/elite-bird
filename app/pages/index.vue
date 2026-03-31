<template>
  <UPage>
    <LandingHero />

    <Catalog />

    <pre>{{ users }}</pre>
  </UPage>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Перепела бройлерные, цесарка, фазан вольерный - купить в Екатеринбурге',
  description: 'Производим мясо элитной птицы и бесплатно доставляем по Екатеринбургу',
});

const users = ref(null);

onMounted(async () => {
  users.value = await $fetch('https://jsonplaceholder.typicode.com/users');
});
</script>

<template>
  <UPage>
    <LandingHero />

    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8',
      }"
    >
      <LandingAbout />

      <LandingWorkExperience />
    </UPageSection>

    <LandingCatalog />
  </UPage>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Перепела бройлерные, цесарка, фазан вольерный - купить в Екатеринбурге',
  description: 'Производим мясо элитной птицы и бесплатно доставляем по Екатеринбургу',
});
</script>

<template>
  <UPageSection title="Доставка и оплата">
    <Motion
      v-for="(item, index) in items"
      :key="index"
      :initial="{ opacity: 0, transform: 'translateY(20px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.4 + 0.2 * Number(index) }"
      :in-view-options="{ once: true }"
      class="text-muted flex items-center text-nowrap gap-2"
    >
      <UPageFeature v-bind="item" />
    </Motion>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui';

const items: PageFeatureProps[] = [
  {
    title: 'Доставка',
    description: 'Доставка осуществляется только по Екатеринбургу. Точная дата будет определена после обработки заказа',
    icon: 'i-lucide-map-pin',
  },
  {
    title: 'Оплата',
    description: 'Оплата осуществляется после получения заказа наличными или переводом на карту',
    icon: 'i-lucide-credit-card',
  },
];
</script>

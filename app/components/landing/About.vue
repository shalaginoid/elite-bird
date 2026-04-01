<template>
  <UPageSection title="О нас">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit corrupti minima quam error incidunt magni
      quibusdam! Nihil expedita rem sint ex consectetur modi voluptatem doloribus, consequatur unde error deleniti!
    </p>

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
    description: 'Собственное производство',
    icon: 'i-lucide-minus',
  },
  {
    description: 'Без ГМО, гормонов, антибиотиков и прочей химии',
    icon: 'i-lucide-minus',
  },
  {
    description: 'Собственное производство',
    icon: 'i-lucide-minus',
  },
];
</script>

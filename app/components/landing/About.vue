<template>
  <UPageSection
    title="О нас"
    description="Личное подсобное хозяйство располагается в 50 км. от Екатеринбурга в с. Большебрусянское"
  >
    <p>
      Мы выращиваем мясо птицы по принципам здорового фермерства. Наша цель — предоставить вам продукт, который будет не
      только вкусным, но и полезным для всей семьи.
    </p>

    <p>Чем отличается наше мясо:</p>

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
    title: 'Натуральный рост',
    description: 'Птица растёт без гормонов и стимуляторов, в естественных условиях.',
    icon: 'i-lucide-minus',
  },
  {
    title: 'Правильное питание',
    description:
      'В рационе — зерновые смеси, свежая зелень, овощи, минеральные добавки, без ГМО, гормонов, антибиотиков и прочей химии',
    icon: 'i-lucide-minus',
  },
  {
    title: 'Свободный выгул',
    description: 'Птицы имеют доступ к открытым площадкам, что улучшает качество мяса',
    icon: 'i-lucide-minus',
  },
];
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'max-w-xl mx-auto font-black text-primary ',
    }"
  >
    <template #headline></template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1,
        }"
      >
        <span class="uppercase">Мясо элитной птицы</span>
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3,
        }"
      >
        <span>
          Производим и бесплатно доставляем
          <br />
          по Екатеринбургу
        </span>
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5,
        }"
      >
        <div v-if="links" class="flex items-center gap-2">
          <UButton v-bind="links[0]" />
        </div>
      </Motion>
    </template>

    <UMarquee pause-on-hover class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]">
      <Motion
        v-for="(img, index) in images"
        :key="index"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: Number(index) * 0.1,
        }"
      >
        <NuxtImg
          width="234"
          height="234"
          class="rounded-lg aspect-square object-cover"
          :class="Number(index) % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        />
      </Motion>
    </UMarquee>
  </UPageHero>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const links = ref<ButtonProps[]>([
  {
    label: 'Продукция',
    color: 'primary',
    variant: 'outline',
    size: 'xl',
    class: 'rounded-full',
    icon: 'i-lucide-shopping-basket',
    onClick() {
      scrollToSection('catalog');
    },
  },
]);

const images: any = [
  {
    src: '/hero/random-1.avif',
    alt: 'Random Image 1',
  },
  {
    src: '/hero/random-2.avif',
    alt: 'Random Image 2',
  },
  {
    src: '/hero/random-3.avif',
    alt: 'Random Image 3',
  },
  {
    src: '/hero/random-4.avif',
    alt: 'Random Image 4',
  },
  {
    src: '/hero/random-5.avif',
    alt: 'Random Image 5',
  },
];
</script>

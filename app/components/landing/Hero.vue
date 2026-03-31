<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'max-w-xl mx-auto font-black text-primary ',
    }"
  >
    <template #headline>
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
        <div class="text-lg sm:text-xl/8 text-muted text-balance">Производим</div>
      </Motion>
    </template>

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
        <span class="lowercase">Мясо элитной птицы</span>
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
        и бесплатно доставляем по Екатеринбургу
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

          <!-- <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? 'Available for new projects' : 'Not available at the moment'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                ></span>

                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                ></span>
              </span>
            </template>
          </UButton> -->
        </div>
      </Motion>

      <!-- <div class="gap-x-4 inline-flex mt-4">
        <Motion
          v-for="(link, index) of footer?.links"
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
            delay: 0.5 + index * 0.1,
          }"
        >
          <UButton v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }" />
        </Motion>
      </div> -->
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
    color: 'secondary',
    size: 'xl',
    icon: 'i-lucide-arrow-down',
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

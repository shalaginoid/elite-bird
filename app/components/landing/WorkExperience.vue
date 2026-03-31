<template>
  <UPageSection title="Work Experience">
    <template #description>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod tenetur minus fugiat! Aut itaque
        dolore consequatur, nobis pariatur earum neque numquam fugit. Aspernatur, molestiae culpa? Cumque est delectus
        aspernatur.
      </p>

      <!-- <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * Number(index) }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>

          <USeparator />

          <ULink class="flex items-center gap-1" :to="experience.company.url" target="_blank">
            <span class="text-sm">
              {{ experience.position }}
            </span>

            <div class="inline-flex items-center gap-1" :style="{ color: experience.company.color }">
              <span class="font-medium">{{ experience.company.name }}</span>
              <UIcon :name="experience.company.logo" />
            </div>
          </ULink>
        </Motion>
      </div> -->
    </template>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt soluta ratione quos illum quod sapiente qui
      dolores, officiis ducimus animi dicta porro enim, doloribus officia sit consectetur quasi quibusdam?
    </p>
  </UPageSection>
</template>

<script setup lang="ts">
const items: any = [
  {
    position: 'Brand Designer at',
    date: '2020 - 2021',
    company: [{ name: 'Linear', logo: 'i-simple-icons-linear', url: 'https://linear.app', color: '#5E6AD2' }],
  },
  {
    position: 'Brand Designer at',
    date: '2020 - 2021',
    company: [{ name: 'Linear', logo: 'i-simple-icons-linear', url: 'https://linear.app', color: '#5E6AD2' }],
  },
  {
    position: 'Brand Designer at',
    date: '2020 - 2021',
    company: [{ name: 'Linear', logo: 'i-simple-icons-linear', url: 'https://linear.app', color: '#5E6AD2' }],
  },
];
</script>

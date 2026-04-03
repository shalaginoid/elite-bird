<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center space-y-4">
      <h1 class="text-secondary text-9xl font-black">{{ error.status }}</h1>

      <template v-if="error.status === 404">
        <h2>Страница не найдена</h2>
      </template>

      <template v-else>
        <pre>{{ error.message }}</pre>
      </template>

      <UButton label="На главную" to="/" variant="subtle" color="neutral" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();

onMounted(() => {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
});
</script>

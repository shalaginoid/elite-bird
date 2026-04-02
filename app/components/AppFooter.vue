<template>
  <UFooter class="z-10 bg-default" :ui="{ left: 'text-muted text-xs' }">
    <template #left>&copy; {{ new Date().getFullYear() }}</template>
    <template #right></template>
  </UFooter>
</template>

<script setup lang="ts"></script>

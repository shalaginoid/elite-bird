<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10 relative">
      <!-- <AppHeader :links="navLinks" /> -->

      <div class="flex justify-between absolute sm:left-12 left-6 sm:right-12 right-6 top-4 sm:top-8 z-10">
        <div class="text-primary font-black lowercase text-xl">Логотип</div>

        <Cart />
      </div>

      <slot></slot>

      <AppFooter />
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

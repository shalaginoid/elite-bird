<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10 relative">
      <!-- <AppHeader :links="navLinks" /> -->

      <!-- <div class="absolute top-8 left-8 sm:left-16">
        <span class="text-primary font-black lowercase text-xl">Логотип</span>
      </div> -->

      <div class="fixed inset-x-4 top-8 z-10">
        <UContainer class="mx-auto flex justify-end">
          <Cart class="sm:me-4" />
        </UContainer>
      </div>

      <slot></slot>

      <AppFooter />
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

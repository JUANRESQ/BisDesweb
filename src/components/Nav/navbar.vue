<script setup>
import NavMenu from "./navmenu.vue";
</script>

<template>
  <nav class="fixed w-full bg-white border-b border-b-primary shadow-sm z-50">
    <div class="flex items-center justify-between px-4 md:px-10 py-4">
      <RouterLink to="/" class="text-3xl font-bold font-title text-primary"
        >BUSID</RouterLink
      >
      <NavMenu />
    </div>
  </nav>
</template>

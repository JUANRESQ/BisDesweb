<script setup>
const menu = [
  { name: "Beranda", link: "/" },
  { name: "Kontak", link: "/kontak" },
];
</script>

<template>
  <footer class="border-t w-full border-t-primary py-12 shadow-2xl">
    <div
      class="container mx-auto px-4 flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-center"
    >
      <div class="logo flex flex-col md:flex-row items-center gap-4">
        <h1 class="text-3xl font-bold text-primary font-title">Bus</h1>
      </div>

      <nav class="w-full md:w-auto">
        <ul
          class="menu flex flex-col gap-2 font-medium text-md text-center mt-6 md:mt-0 md:text-right"
        >
          <h2 class="font-semibold font-title">NAVIGASI</h2>
          <RouterLink
            v-for="(item, index) in menu"
            :key="index"
            :to="item.link"
            class="text-gray hover:text-primary transition-colors duration-300"
            active-class="text-primary"
          >
            {{ item.name }}
          </RouterLink>
        </ul>
      </nav>
    </div>
    <div class="flex justify-center border-t border-t-gray w-4/5 mx-auto mt-8">
      <p class="text-center text-sm text-gray mt-4">
        &copy; Someone. All rights reserved.
      </p>
    </div>
  </footer>
</template>

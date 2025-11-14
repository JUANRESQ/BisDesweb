<script setup>
const menu = [
  { name: "Beranda", link: "/" },
  { name: "Kontak", link: "/kontak" },
];
</script>

<template>
  <nav>
    <ul class="menu flex items-center gap-8 font-medium text-lg">
      <RouterLink
        v-for="(item, index) in menu"
        :key="index"
        :to="item.link"
        class="relative pb-1.5 px-4 py-2 after:content-[''] after:absolute after:bottom-0 after:left-4 after:w-0 after:h-0.5 after:bg-primary hover:after:w-[calc(100%-2rem)] after:transition-all after:duration-300"
        active-class="text-primary "
      >
        {{ item.name }}
      </RouterLink>
    </ul>
  </nav>
</template>

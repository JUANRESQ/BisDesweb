<template>
  <footer class="px-10 py-16 bg-white border-t-4 border-purple-500 flex flex-col md:flex-row justify-between">

    <h1 class="text-4xl font-bold text-blue-600">Bisku</h1>

    <div class="flex gap-16 mt-10 md:mt-0">
      <div>
        <h4 class="font-bold text-blue-600 mb-2">NAVIGASI</h4>
        <ul class="text-gray-600">
          <li><router-link to="/" class="hover:text-blue-500">Home</router-link></li>
          <li><router-link to="/jadwal" class="hover:text-blue-500">Jadwal Bis</router-link></li>
          <li><router-link to="/tiket" class="hover:text-blue-500">Riwayat Pemesanan</router-link></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-blue-600 mb-2">SUPPORT</h4>
        <ul class="text-gray-600">
          <li><router-link to="/contact" class="hover:text-blue-500">Contact</router-link></li>
        </ul>
      </div>
    </div>

  </footer>
</template>

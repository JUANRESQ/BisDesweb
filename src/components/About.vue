<template>
  <section class="w-full bg-blue-400 py-20">
    <div class="w-full max-w-7xl mx-auto px-6">

      <!-- ATAS: GAMBAR + TEKS -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <!-- GAMBAR -->
        <div class="flex justify-center">
          <img
            src="/Terminal.jpg"
            alt="Bus About"
            class="w-full max-w-[440px] h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>

        <!-- TEKS -->
        <div>
          <p class="text-sm text-gray-700 mb-3">Tentang Kami</p>

          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            MENJALIN PERJALANAN NYAMAN <br />
            DALAM SETIAP <span class="text-blue-700">KILOMETER</span>
          </h2>

          <p class="text-gray-800 max-w-xl">
            Kami hadir untuk menciptakan suasana perjalanan yang aman, hangat,
            dan menyenangkan bagi setiap penumpang.
          </p>
        </div>
      </div>

      <!-- BAWAH: STATISTIK (SEMUA STATIS) -->
      <div
        class="mt-20 bg-blue-600 rounded-xl py-12 px-6
               grid grid-cols-1 md:grid-cols-3 text-center text-white shadow-2xl"
      >
        <!-- ARMADA -->
        <div class="md:border-r border-blue-400 py-6">
          <h3 class="text-4xl font-bold">50+</h3>
          <p class="font-semibold mt-1">Armada Bis</p>
          <p class="text-sm opacity-90">yang siap meluncur</p>
        </div>

        <!-- SUPIR -->
        <div class="md:border-r border-blue-400 py-6">
          <h3 class="text-4xl font-bold">55+</h3>
          <p class="font-semibold mt-1">Supir</p>
          <p class="text-sm opacity-90">Yang siap anda bawa kemana saja</p>
        </div>

        <!-- KOTA -->
        <div class="py-6">
          <h3 class="text-4xl font-bold">10</h3>
          <p class="font-semibold mt-1">Kota</p>
          <p class="text-sm opacity-90">Yang dapat dijangkau</p>
        </div>
      </div>

    </div>
  </section>
</template>

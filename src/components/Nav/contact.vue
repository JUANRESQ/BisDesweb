<script setup></script>

<template>
  <div class="bg-white p-8 rounded-xl shadow">
    <form class="mx-auto">
      <!-- IMput nama -->
      <div class="mb-5">
        <label for="nama" class="block mb-2 text-base font-medium text-black">
          Nama
        </label>
        <input
          type="text"
          id="nama"
          class="border border-gray-300 text-black text-xs md:text-sm rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary block w-full p-2.5 outline-none transition-all duration-200 ease-in-out"
          placeholder="Masukkan nama anda..."
          required
        />
      </div>

      <!-- Input email -->
      <div class="mb-5">
        <label for="email" class="block mb-2 text-base font-medium text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="border border-gray-300 text-black text-xs md:text-sm rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary block w-full p-2.5 outline-none transition-all duration-200 ease-in-out"
          placeholder="Masukkan email anda..."
          required
        />
      </div>

      <!-- Imput pesan -->
      <div class="mb-5">
        <label for="pesan" class="block mb-2 text-base font-medium text-black">
          Pesan
        </label>
        <textarea
          id="pesan"
          class="border border-gray-300 text-black text-xs md:text-sm rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary block w-full h-32 resize-none p-2.5 outline-none transition-all duration-200 ease-in-out"
          placeholder="Masukkan pesan, pertanyaan atau kritik anda..."
          required
        ></textarea>
      </div>
      <div class="flex w-full justify-center">
        <button
          class="cta cursor-pointer bg-primary text-white px-6 py-2.5 rounded-md hover:bg-[#d37014] transition-all duration-300"
        >
          Kirim
        </button>
      </div>
    </form>
  </div>
</template>

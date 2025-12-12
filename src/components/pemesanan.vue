<template>
  <section
    class="relative min-h-screen px-4 md:px-16 py-12 bg-gradient-to-r from-blue-200 to-blue-400"
  >
    <div class="mb-6 flex items-center gap-3">
      <router-link
        to="/jadwal"
        class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
      >
        ←
      </router-link>
      <p class="font-semibold">Form Pembelian</p>
    </div>

    <div class="bg-white rounded-xl shadow-xl p-6 md:p-10">
      <div class="text-center mb-8">
        <h2 class="font-semibold text-lg">Isi Data Pemesanan</h2>
        <p class="text-sm text-gray-600">
          Balikpapan – Banjarmasin <br />
          Jum'at, 24 Oktober 2025
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <input
            v-model="form.nama"
            type="text"
            placeholder="Nama Pemesan"
            class="w-full bg-gray-200 px-4 py-3 rounded-md outline-blue-500"
          />

          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full bg-gray-200 px-4 py-3 rounded-md outline-blue-500"
          />

          <input
            v-model="form.hp"
            type="text"
            placeholder="No.HP (08xxxxxxxx)"
            class="w-full bg-gray-200 px-4 py-3 rounded-md outline-blue-500"
          />
        </div>

        <div class="bg-gray-200 rounded-lg p-5">
          <h3 class="font-semibold mb-4">Konfirmasi Pemesanan</h3>

          <div class="flex justify-between text-sm mb-3">
            <span>Tiket Balikpapan - Banjarmasin</span>
            <span>1x</span>
          </div>

          <div class="flex justify-between text-sm mb-3">
            <span>Harga</span>
            <span>Rp. 300.000</span>
          </div>

          <hr class="my-3" />

          <div class="flex justify-between font-semibold mb-5">
            <span>Total</span>
            <span>Rp. 300.000</span>
          </div>

          <button
            type="button"
            @click="submitForm"
            class="relative z-10 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showNotif"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
    >
      <div class="bg-white rounded-xl p-8 text-center shadow-xl mx-4">
        <h3 class="text-2xl font-bold text-green-600 mb-3">
          ✅ Pesanan Berhasil
        </h3>

        <p class="text-gray-700 mb-6">
          Pesanan anda telah berhasil dibuat.
        </p>

        <button
          type="button"
          @click="closeNotif"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const showNotif = ref(false);

const form = reactive({
  nama: "",
  email: "",
  hp: "",
});

function submitForm() {
 
  if (!form.nama || !form.email || !form.hp) {
    alert("Semua data wajib diisi!");
    return;
  }

  
  showNotif.value = true;

 
  setTimeout(() => {
    showNotif.value = false;
  }, 3000);

  form.nama = "";
  form.email = "";
  form.hp = "";
}

function closeNotif() {
  showNotif.value = false;
}
</script>

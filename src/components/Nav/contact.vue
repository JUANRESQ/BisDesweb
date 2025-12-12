<template>
  <section class="px-6 md:px-16 py-20 relative">
    <div
      class="bg-blue-700 rounded-2xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row justify-between text-white">
      
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold mb-3">HUBUNGI KAMI</h2>
        <p class="text-gray-200 max-w-sm">
          Lebih dekat dengan kami, tanyakan rasa penasaranmu sekarang!
        </p>
      </div>
      <div
        class="bg-white text-gray-700 rounded-2xl p-8 md:w-[360px] w-full mt-10 md:mt-0 shadow-md">
        
        <label class="block font-semibold mb-1">Nama</label>
        <input
          v-model="form.nama"
          type="text"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 outline-blue-500"
          placeholder="Masukkan nama anda..."
        />

        <label class="block font-semibold mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 outline-blue-500"
          placeholder="Masukkan email anda..."
        />

        <label class="block font-semibold mb-1">Pesan</label>
        <textarea
          v-model="form.pesan"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 outline-blue-500 mb-4"
          placeholder="Masukkan pertanyaan, kritik dan saran..."
        ></textarea>

        <button
          type="button"
          @click="kirimPesan"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition font-semibold">
          Kirim Pesan ✈️
        </button>
      </div>
    </div>

    <div
      v-if="showNotif"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <div class="bg-white rounded-xl p-8 text-center shadow-xl mx-4">
        <h3 class="text-xl font-bold text-green-600 mb-3">
          ✅ Pesan Terkirim
        </h3>

        <p class="text-gray-700 mb-6">
          Pesan anda telah berhasil dikirim. Terima kasih telah menghubungi kami.
        </p>

        <button
          type="button"
          @click="closeNotif"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
  pesan: "",
});

function kirimPesan() {
  if (!form.nama || !form.email || !form.pesan) {
    alert("Semua field wajib diisi!");
    return;
  }

  showNotif.value = true;

  setTimeout(() => {
    showNotif.value = false;
  }, 3000);

  form.nama = "";
  form.email = "";
  form.pesan = "";
}

function closeNotif() {
  showNotif.value = false;
}
</script>

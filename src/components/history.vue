<template>
  <section
    class="min-h-screen px-4 md:px-16 py-12 bg-gradient-to-r from-blue-200 to-blue-400">
    <h1 class="text-3xl font-bold mb-8">Tiket Saya</h1>

    <div
      class="hidden md:grid grid-cols-5 gap-4 bg-blue-600 text-white px-6 py-3 rounded-t-lg font-semibold text-sm">
      <div>Kota asal</div>
      <div>Kota Tujuan</div>
      <div>Tanggal</div>
      <div>Jam</div>
      <div class="text-center">Action</div>
    </div>
    <div class="space-y-4 mt-4">
      <div
        v-for="(item, index) in tiketList"
        :key="index"
        class="bg-white rounded-xl shadow p-4 md:px-6 md:py-3" >
        <div class="hidden md:grid grid-cols-5 gap-4 items-center">
          <div>{{ item.asal }}</div>
          <div>{{ item.tujuan }}</div>
          <div>{{ item.tanggal }}</div>
          <div>{{ item.jam }}</div>

          <div class="text-center">
            <button
              @click="openDetail(item)"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" >
              Detail
            </button>
          </div>
        </div>

        <div class="md:hidden space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="font-semibold">Kota Asal</span>
            <span>{{ item.asal }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Kota Tujuan</span>
            <span>{{ item.tujuan }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Tanggal</span>
            <span>{{ item.tanggal }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Jam</span>
            <span>{{ item.jam }}</span>
          </div>

          <button
            @click="openDetail(item)"
            class="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg">
            Detail
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50" >
      <div
        class="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative mx-4">
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-gray-500 text-xl" >
          ✕
        </button>

        <h2 class="text-xl font-bold mb-4">Detail Tiket</h2>

        <div class="space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="font-semibold">Kota Asal</span>
            <span>{{ selected.asal }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Kota Tujuan</span>
            <span>{{ selected.tujuan }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Tanggal</span>
            <span>{{ selected.tanggal }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Jam</span>
            <span>{{ selected.jam }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Harga</span>
            <span class="font-bold text-blue-600">Rp. 300.000</span>
          </div>
        </div>

        <button
          @click="closeModal"
          class="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Tutup
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const tiketList = ref([
  {
    asal: "Balikpapan",
    tujuan: "Banjarmasin",
    tanggal: "24 Oktober 2025",
    jam: "13.00 Wita",
  },
  {
    asal: "Samarinda",
    tujuan: "Banjarmasin",
    tanggal: "26 Oktober 2025",
    jam: "10.00 Wita",
  },
  {
    asal: "Balikpapan",
    tujuan: "Samarinda",
    tanggal: "4 Oktober 2025",
    jam: "10.00 Wita",
  },
  {
    asal: "Samarinda",
    tujuan: "Balikpapan",
    tanggal: "24 Oktober 2025",
    jam: "13.00 Wita",
  },
]);

const showModal = ref(false);
const selected = ref({});

function openDetail(item) {
  selected.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

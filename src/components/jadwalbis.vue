<template>
  <section
    class="min-h-screen px-4 md:px-16 py-12 bg-gradient-to-r from-blue-200 to-blue-400">
    <h1 class="text-3xl font-bold mb-6">Pesan Disini</h1>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
      <input
        v-model="search.from"
        type="text"
        placeholder="Keberangkatan"
        class="w-full border rounded-lg px-4 py-2 outline-blue-500"
      />

      <input
        v-model="search.to"
        type="text"
        placeholder="Tujuan"
        class="w-full border rounded-lg px-4 py-2 outline-blue-500"
      />

      <input
        v-model="search.date"
        type="date"
        class="w-full border rounded-lg px-4 py-2 outline-blue-500"
      />

      <button
        @click="filterData"
        class="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
        Cari
      </button>
    </div>

    <div
      class="hidden md:grid grid-cols-6 gap-4 bg-blue-600 text-white px-6 py-3 rounded-t-lg font-semibold text-sm">
      <div>Asal</div>
      <div>Tujuan</div>
      <div>Rute</div>
      <div>Fasilitas</div>
      <div>Harga</div>
      <div class="text-center">Action</div>
    </div>

    <div class="space-y-4 mt-4">
      <div
        v-for="(item, index) in filteredSchedule"
        :key="index"
        class="bg-white rounded-xl shadow p-4 md:px-6 md:py-3">
        <!-- DESKTOP VIEW -->
        <div class="hidden md:grid grid-cols-6 gap-4 items-center">
          <div>
            <p class="font-semibold">{{ item.from }}</p>
            <p class="text-xs text-gray-500">{{ item.timeFrom }}</p>
          </div>

          <div>
            <p class="font-semibold">{{ item.to }}</p>
            <p class="text-xs text-gray-500">{{ item.timeTo }}</p>
          </div>

          <div class="text-sm">{{ item.route }}</div>
          <div class="text-sm">{{ item.fasilitas }}</div>
          <div class="font-bold text-blue-600">{{ item.harga }}</div>

          <div class="text-center">
            <button
              @click="beliTiket(item)"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" >
              Pesan Sekarang
            </button>
          </div>
        </div>

        <div class="md:hidden text-sm space-y-2">
          <div class="flex justify-between">
            <span class="font-semibold">Asal</span>
            <span>{{ item.from }} ({{ item.timeFrom }})</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Tujuan</span>
            <span>{{ item.to }} ({{ item.timeTo }})</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Rute</span>
            <span class="text-right">{{ item.route }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Fasilitas</span>
            <span>{{ item.fasilitas }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-semibold">Harga</span>
            <span class="font-bold text-blue-600">{{ item.harga }}</span>
          </div>

          <button
            @click="beliTiket(item)"
            class="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const search = ref({
  from: "",
  to: "",
  date: "",
});

const scheduleData = ref([
  {
    from: "Balikpapan",
    timeFrom: "13.00 Wita",
    to: "Banjarmasin",
    timeTo: "18.00 Wita",
    route: "Balikpapan – Barabai – Martapura – Banjarmasin",
    fasilitas: "AC TOILET",
    harga: "Rp 300.000",
  },
  {
    from: "Samarinda",
    timeFrom: "10.00 Wita",
    to: "Banjarmasin",
    timeTo: "15.30 Wita",
    route: "Samarinda – Balikpapan – Banjarmasin",
    fasilitas: "AC TOILET",
    harga: "Rp 280.000",
  },
  {
    from: "Samarinda",
    timeFrom: "10.00 Wita",
    to: "Balikpapan",
    timeTo: "15.30 Wita",
    route: "Samarinda – Balikpapan",
    fasilitas: "AC TOILET",
    harga: "Rp 180.000",
  },
  {
    from: "Balikpapan",
    timeFrom: "10.00 Wita",
    to: "Samarinda",
    timeTo: "15.30 Wita",
    route: "Balikpapan – Samarinda",
    fasilitas: "AC TOILET",
    harga: "Rp 180.000",
  },
]);

const filteredSchedule = ref([...scheduleData.value]);

function filterData() {
  filteredSchedule.value = scheduleData.value.filter((item) => {
    return (
      item.from.toLowerCase().includes(search.value.from.toLowerCase()) &&
      item.to.toLowerCase().includes(search.value.to.toLowerCase())
    );
  });
}

function beliTiket(item) {
  // Simpan sementara data tiket (opsional)
  localStorage.setItem("selectedTiket", JSON.stringify(item));

  // Redirect ke halaman pesan tiket
  router.push("/pesan");
}
</script>

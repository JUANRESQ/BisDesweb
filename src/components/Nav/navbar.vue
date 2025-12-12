<template>
  <nav class="flex justify-between items-center px-6 md:px-10 py-5 bg-transparent z-10">
    <h1 class="text-3xl font-bold text-blue-600">Bisku</h1>

    <ul class="hidden md:flex gap-8 text-sm text-gray-700">
      <li><router-link to="/" class="hover:text-blue-500">Home</router-link></li>
      <li><router-link to="/jadwal" class="hover:text-blue-500">Jadwal Bis</router-link></li>
      <li><router-link to="/tiket" class="hover:text-blue-500">Riwayat Pemesanan</router-link></li>
      <li><router-link to="/contact" class="hover:text-blue-500">Contact</router-link></li>
    </ul>

    <div class="hidden md:flex gap-3 items-center">
      <template v-if="!user">
        <router-link
          to="/register"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
        >
          Register
        </router-link>
        <router-link
          to="/login"
          class="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm"
        >
          Login
        </router-link>
      </template>

      <template v-else>
        <span class="text-sm font-semibold text-gray-700">
          Halo, {{ user.nama || user.email }}
        </span>

        <button
          @click="logout"
          class="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
        >
          Logout
        </button>
      </template>
    </div>

    <button
      @click="open = !open"
      class="md:hidden text-3xl text-blue-600">
      ☰
    </button>

    <div
      v-if="open"
      class="fixed top-[70px] left-0 w-full bg-white shadow-lg md:hidden z-50">
      <ul class="flex flex-col gap-4 p-6 text-gray-700 font-medium">
        <li><router-link @click="closeMenu" to="/">Home</router-link></li>
        <li><router-link @click="closeMenu" to="/jadwal">Jadwal Bis</router-link></li>
        <li><router-link @click="closeMenu" to="/tiket">Riwayat Pemesanan</router-link></li>
        <li><router-link @click="closeMenu" to="/contact">Contact</router-link></li>

        <hr />

        <template v-if="!user">
          <router-link
            @click="closeMenu"
            to="/register"
            class="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg">
            Register
          </router-link>

          <router-link
            @click="closeMenu"
            to="/login"
            class="w-full text-center px-4 py-2 bg-indigo-500 text-white rounded-lg">
            Login
          </router-link>
        </template>

        <template v-else>
          <p class="text-center font-semibold">
            Halo, {{ user.nama || user.email }}
          </p>

          <button
            @click="logout"
            class="w-full px-4 py-2 bg-red-500 text-white rounded-lg">
            Logout
          </button>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const open = ref(false);
const user = ref(null);

function closeMenu() {
  open.value = false;
}

function logout() {
  localStorage.removeItem("user");
  user.value = null;
  window.dispatchEvent(new Event("auth-changed"));
  closeMenu();
  router.push("/login");
}

function loadUser() {
  const savedUser = localStorage.getItem("user");
  user.value = savedUser ? JSON.parse(savedUser) : null;
}

onMounted(() => {
  loadUser();
  window.addEventListener("auth-changed", loadUser);
  window.addEventListener("storage", loadUser);
});

onBeforeUnmount(() => {
  window.removeEventListener("auth-changed", loadUser);
  window.removeEventListener("storage", loadUser);
});   
</script>

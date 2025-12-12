<template>
  <section
    class="min-h-screen flex items-center justify-center
           bg-gradient-to-r from-blue-200 to-blue-400 px-4"
  >
    <div class="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
      <h2 class="text-2xl font-bold text-center mb-6">Register</h2>

      <!-- NAMA -->
      <div class="mb-4">
        <input
          v-model="form.nama"
          type="text"
          placeholder="Nama Lengkap"
          class="w-full border px-4 py-3 rounded-lg outline-blue-500"
        />
        <p v-if="errors.nama" class="text-red-500 text-sm mt-1">
          {{ errors.nama }}
        </p>
      </div>

      <!-- EMAIL -->
      <div class="mb-4">
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full border px-4 py-3 rounded-lg outline-blue-500"
        />
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">
          {{ errors.email }}
        </p>
      </div>

      <!-- PASSWORD -->
      <div class="mb-4">
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          class="w-full border px-4 py-3 rounded-lg outline-blue-500"
        />
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">
          {{ errors.password }}
        </p>
      </div>

      <!-- KONFIRMASI PASSWORD -->
      <div class="mb-4">
        <input
          v-model="form.confirm"
          type="password"
          placeholder="Konfirmasi Password"
          class="w-full border px-4 py-3 rounded-lg outline-blue-500"
        />
        <p v-if="errors.confirm" class="text-red-500 text-sm mt-1">
          {{ errors.confirm }}
        </p>
      </div>

      <button
        @click="register"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-3 rounded-lg
               hover:bg-blue-700 transition disabled:opacity-50"
      >
        {{ loading ? "Mendaftar..." : "Register" }}
      </button>

      <p class="text-sm text-center mt-6">
        Sudah punya akun?
        <router-link to="/login" class="text-blue-600 font-semibold">
          Login
        </router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);

const form = reactive({
  nama: "",
  email: "",
  password: "",
  confirm: "",
});

const errors = reactive({
  nama: "",
  email: "",
  password: "",
  confirm: "",
});

function validate() {
  errors.nama = "";
  errors.email = "";
  errors.password = "";
  errors.confirm = "";

  let valid = true;

  if (!form.nama.trim()) {
    errors.nama = "Nama wajib diisi";
    valid = false;
  }

  if (!form.email.trim()) {
    errors.email = "Email wajib diisi";
    valid = false;
  }

  if (!form.password.trim()) {
    errors.password = "Password wajib diisi";
    valid = false;
  }

  if (form.password !== form.confirm) {
    errors.confirm = "Password tidak sama";
    valid = false;
  }

  return valid;
}

function register() {
  if (!validate()) return;

  loading.value = true;

  setTimeout(() => {
    loading.value = false;

    // Simpan user simulasi
    localStorage.setItem(
      "user",
      JSON.stringify({
        nama: form.nama,
        email: form.email,
      })
    );

    router.push("/login");
  }, 1200);
}
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 px-4"
  >
    <div class="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <div class="mb-4">
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full border px-4 py-3 rounded-lg outline-blue-500"/>
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">
          {{ errors.email }}
        </p>
      </div>

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

      <button
        @click="login"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {{ loading ? "Masuk..." : "Login" }}
      </button>

      <p class="text-sm text-center mt-6">
        Belum punya akun?
        <router-link to="/register" class="text-blue-600 font-semibold">
          Register
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
  email: "",
  password: "",
});

const errors = reactive({
  email: "",
  password: "",
});

function validate() {
  errors.email = "";
  errors.password = "";
  let valid = true;

  if (!form.email.trim()) {
    errors.email = "Email wajib diisi";
    valid = false;
  }

  if (!form.password.trim()) {
    errors.password = "Password wajib diisi";
    valid = false;
  }

  return valid;
}

function login() {
  if (!validate()) return;

  loading.value = true;

  setTimeout(() => {
    loading.value = false;

    // Simpan login simulasi
    localStorage.setItem("user", JSON.stringify({ email: form.email }));
    window.dispatchEvent(new Event("auth-changed"));


    router.push("/");
  }, 1000);
}
</script>

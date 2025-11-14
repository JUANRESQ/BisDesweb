<script setup></script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center">
    <div class="gambar relative">
      <div class="timpa absolute inset-0 bg-black/60">
        <div
          class="h-full flex flex-col items-center justify-center text-center text-white px-4"
        >
          <h1 class="text-5xl font-bold mb-4 font-title">
            Selamat Datang 
          </h1>
          <p class="text-lg mb-8">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. .
          </p>
          <RouterLink to="/kontak">
            <button
                class="cta cursor-pointer bg-primary text-white px-6 py-2.5 rounded-md hover:text-primary hover:bg-black">
              Hubungi Kami
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gambar {
  background-image: url("/asus.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}
</style>

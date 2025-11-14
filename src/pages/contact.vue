<script setup>
import HeaderContact from "../components/header.vue";
import ContactForm from "../components/Nav/contact.vue";
</script>

<template>
  <HeaderContact />
  <div class="py-12">
    <div
      class="bg-primary flex flex-col md:flex-row justify-between items-center gap-10 px-6 py-10 md:p-14 mx-10 md:mx-20 rounded-2xl shadow-xl"
    >
      <div class="caption max-w-2xl text-center md:text-left">
        <h1 class="font-title text-2xl md:text-4xl font-bold text-white mb-2">
          Hubungi Kami
        </h1>
        <p class="text-gray-200 text-sm md:text-base mb-6">
          Lebih dekat dengan kami, tanyakan rasa penasaranmu sekarang!
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.966165400165!2d-0.18042012415403216!3d51.53218040889368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aa33eb87a9b%3A0xe406bb492eaf555b!2sAbbey%20Road%20Studios!5e0!3m2!1sid!2sid!4v1763042517254!5m2!1sid!2sid"
          width="450"
          height="350"
          class="rounded-lg mb-4 md:mb-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="w-full max-w-xl">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

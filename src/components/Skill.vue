<template>
  <section class="px-10 py-20 text-center">

    <h2 class="text-3xl font-bold mb-14">KELEBIHAN SAYA</h2>
    <div  class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div v-for="(Skill, index) in SkillList":key="index" class="bg-blue-600 text-white p-8 rounded-lg shadow-md">
        <h3 class="font-bold text-lg mb-2">{{ Skill.Skill }}</h3>
        <p>{{ Skill.Deskripsi }}</p>
      </div>


    </div>

  </section>
</template>

<script  setup>
    import { ref } from "vue";

    const SkillList = ref([
        {
        Skill: "ngoding",
        Deskripsi: "saya bisa ngoding kali",
        },
        {
        Skill: "main ml",
        Deskripsi: "jago main ml",
        },
        {
        Skill: "menggunakan komputer",
        Deskripsi: "main komputer",
        }
    ])
    const selected = ref({});
</script>



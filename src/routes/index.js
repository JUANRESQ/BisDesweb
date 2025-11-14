import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";
import Contact from "../pages/contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/kontak",
      name: "kontak",
      component: Contact,
    },
  ],
});

export default router;
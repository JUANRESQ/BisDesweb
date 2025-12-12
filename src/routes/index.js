import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";
import Contact from "../pages/contact.vue";
import jadwal from "../pages/jadwal.vue";
import Tiket from "../pages/tiket.vue";
import Pesan from "../pages/pesan.vue";
import Login from "../pages/login.vue";
import Register from "../pages/register.vue";
import AboutMe from "../pages/AboutMe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Jadwal",
      name: "Jadwal",
      component: jadwal,
    },
    {
      path: "/tiket",
      name: "Tiket",
      component: Tiket,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/Pesan",
      name: "pesan",
      component: Pesan,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/AboutMe",
      name: "AboutMe",
      component: AboutMe,
    },
  ],
});

export default router;

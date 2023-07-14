import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SejarahDesa from "../views/SejarahDesa.vue";
import StruktuDesa from "../views/StrukturDesa.vue";
import ParawisataDesa from "../views/ParawisataDesa.vue";
import SungaiSuci from "../views/SungaiSuci.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/sejarahDesa",
    name: "sejarahDesa",
    component: SejarahDesa,
  },
  {
    path: "/strukturDesa",
    name: "strukturDesa",
    component: StruktuDesa,
  },
  {
    path: "/parawisataDesa",
    name: "parawisataDesa",
    component: ParawisataDesa,
  },
  {
    path: "/sungaiSuci",
    name: "sungaiSuci",
    component: SungaiSuci,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SejarahDesa from "../views/SejarahDesa.vue";
import StruktuDesa from "../views/StrukturDesa.vue";
import ParawisataDesa from "../views/ParawisataDesa.vue";
import SungaiSuci from "../views/SungaiSuci.vue";
import WahanaSurya from "../views/WahanaSurya.vue";
import DanauNibung from "../views/DanauNibung.vue";
import PetaLokasi from "../views/PetaLokasi.vue";
import DataWilayah from "../views/DataWilayah.vue";
import SaranaDesa from "../views/SaranaDesa.vue";
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
  {
    path: "/wahanaSurya",
    name: "wahanaSurya",
    component: WahanaSurya,
  },
  {
    path: "/danauNibung",
    name: "danauNibung",
    component: DanauNibung,
  },
  {
    path: "/petaLokasi",
    name: "petaLokasi",
    component: PetaLokasi,
  },
  {
    path: "/dataWilayah",
    name: "dataWilayah",
    component: DataWilayah,
  },
  {
    path: "/saranaDesa",
    name: "saranaDesa",
    component: SaranaDesa,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

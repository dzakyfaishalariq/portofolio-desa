import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Aos from "aos";
import "aos/dist/aos.css";
// boosterp
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "@/assets/css/mainweb.css";
// jquery
import jQuery from "jquery";
window.$ = jQuery;
Aos.init();
createApp(App).use(router).mount("#app");

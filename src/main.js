import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index.js";
import "vfonts/Lato.css";
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.mount("#app");

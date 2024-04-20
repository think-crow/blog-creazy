import { createApp } from "vue";
import naive from 'naive-ui'
import { createPinia } from 'pinia'

import App from "./App.vue";
import router from "./router/index.js";
import "vfonts/Lato.css";
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
// import axios from 'axios';
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import VueDOMPurifyHTML from "vue-dompurify-html";

const app = createApp(App);
app.use(VueDOMPurifyHTML);
app.use(naive);
app.use(createPinia())
app.use(router);
app.use(ElementPlus, {size: 'small', zIndex: 3000 });
app.mount("#app");

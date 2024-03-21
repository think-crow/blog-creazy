import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// element-ui


import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // 设置根路径
  plugins: [
    vue(),

    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),

    Components({
      resolvers: [NaiveUiResolver()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    
  ],
  server:{
    open:true,
    host:'127.0.0.1',
    port:3001
  },
  



  resolve: {
    alias: {
      "@": "/src", // 使用相对于根路径的路径设置别名
    },
  },
});

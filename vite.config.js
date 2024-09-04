import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// import vitePluginSass from 'vite-plugin-sass';

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// element-ui

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");
  // console.log(env.VITE_APP_TITLE);
  return {
    // vite 配置
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
    server: {
      open: true,
      host: "0.0.0.0",
      port: env.VITE_APP_PORT,
      proxy: {
        "/api": {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: true,
        },
        "/uploads": {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: true,
        },
      },
    },

    resolve: {
      alias: {
        "@": "/src", // 使用相对于根路径的路径设置别名
      },
    },

    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});

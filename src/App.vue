<template>
  <div id="app">
    <RouterView />
    <Loading />
  </div>
</template>

<script setup>
import Gsap from "@/components/Gsap.vue";
import Loading from "@/components/Loading.vue";
import lazyLoadImages from "@/libs/util.lazyLoad";
import { onMounted } from "vue";

onMounted(() => {
  // 懒加载图片
  lazyLoadImages();
});
</script>

<style>
@import url("@/assets/styles/global-styles.css");
@import url("@/assets/styles/normalize.css");
@import url("@/assets/styles/xyh_css/fonts.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

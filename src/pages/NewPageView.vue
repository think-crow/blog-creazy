<template>
  <Curtain />
  <div class="container">
    <HeavyCurtain />
  </div>
  <!-- <div class="container"></div> -->
</template>

<script setup>
import Curtain from "@/components/Curtain.vue";
import HeavyCurtain from "@/components/HeavyCurtain.vue";
import Gsap from "@/components/Gsap.vue";
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  /* border: 1px solid blue; */
}
</style>

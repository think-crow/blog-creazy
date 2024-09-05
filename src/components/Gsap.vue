<template>
  <div ref="rope" class="rope" @click="toggleAnimation">
    <div class="rope-handle"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { useRouter } from "vue-router";

const rope = ref(null);
const router = useRouter();

const toggleAnimation = () => {
  const tl = gsap.timeline();
  tl.to(rope.value, { y: -50, duration: 0.3 })
    .to(rope.value, { y: 0, duration: 0.4 })
    .then(() => {
      // 动画完成后跳转到根路由
      router.push("/");
    });
};

onMounted(() => {
  // 初始化动画
  gsap.set(rope.value, { y: 0 });
});
</script>

<style scoped>
.rope {
  width: 6px;
  height: 60px;
  cursor: pointer;
  position: relative;
  background: url("../assets/images/1.png") repeat-y;
  background-size: 100% auto;
  /* animation: sway 2s ease-in-out infinite alternate;
  transform-origin: top center; */
  /* border-radius: 5px; */
}

/* @keyframes sway {
  0% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(2deg);
  }
} */

.rope-handle {
  width: 100%;
  height: 10px;
  background-color: rgba(152, 103, 6, 0.722);
  position: absolute;
  bottom: 0;
}

/*Gsap 专业的动画库*/
</style>

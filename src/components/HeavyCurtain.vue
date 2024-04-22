<template>
  <div class="container">
    <div class="light">
      <div class="light1">
        <a @click="goToFramework(1)"> #1人物志</a>
        <a @click="goToFramework(2)"> #2文章</a>
      </div>
    </div>
    <div class="dark">
      <div class="dark1">
        <a @click="goToFramework(3)"> #3个人小屋</a>
        <a @click="goToFramework(4)"> #4未来</a>
      </div>
    </div>
  </div>
  1
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, defineProps } from "vue";

const router = useRouter();

const activeIndex = ref(0);

const setActive = (index) => {
  index = 0;
  activeIndex.value = index;
  localStorage.setItem("activeIndex", index.toString());
};

const goToFramework = (id) => {
  if (id === 1) router.push("/LifeStory");
  if (id === 2) router.push("/ShareEye");
  if (id === 3) {
    router.push("/LifeI");
    setActive();
  }
  if (id === 4) router.push("/DesignOurLife");
};

document.title = "十三分地";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

:root {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

@font-face {
  font-family: "fontHS";
  src: url("@/assets/fonts/SanJiXingShuJianTi-2.ttf");
}

/* .description {
  margin-top: 0;
} */

.zhuye {
  display: flex;
  position: relative;

  /* 页面全屏 */

  z-index: 2;
}
.container {
  background-image: url("@/assets/images/bg1.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-position: center; /* 图片居中显示 */
  /* border: 1px solid red; */
}

a {
  text-decoration: none;
  cursor: pointer; /* 添加光标样式为指针 */
  pointer-events: auto; /* 启用指针事件 */
  font-family: fontHS;
  border-bottom: 4px solid transparent; /* 初始时设置下边框透明 */
  transition: border-color 0.3s; /* 添加过渡效果 */
  border-radius: 0.2em;
  padding: 0.2em;
  display: block;

  font-size: calc(2.8 * var(--lem));
}

a:hover {
  border-bottom-color: #000000; /* 鼠标经过时显示下边框颜色 */
  color: rgba(255, 0, 0, 0.642);
}

.light,
.dark {
  width: 80%;
  height: 50%;
  /* border: 1px solid red; */
  /* text-align: center; */
  display: flex;
  align-items: center;

  flex-direction: column-reverse;
  /* flex-direction: row-reverse; */
}

.light {
  /* align-items: flex-end; */
  /* margin-bottom: 10%; */
}

.dark {
  /* float: right; */
  justify-content: start;
  margin-left: 20%;
}

.light1 {
  /* border: 1px solid red; */
  margin-bottom: 3em;
}

.dark1 {
  /* border: 1px solid red; */
  margin-top: 3em;
  /* color: #c20606f1; */
  color: #fff;
}

.dark1 a:hover {
  border-bottom-color: #fff; /* 鼠标经过时显示下边框颜色 */
  color: rgba(255, 0, 0, 0.642);
}
@media screen and (max-width: 768px) {
}
</style>

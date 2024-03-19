<template>
  <div class="poetry-img"></div>
  <div class="miaoshu">
    <h1>Poetry-铁血柔情</h1>
    <span></span>
  </div>
  <!-- <n-divider /> -->
  <div class="container">
    <div class="poetrys">
      <div class="poetry">
        <div class="poetry-text">
          <div>
            <h1>《蒹葭》</h1>

            <span>作者：无名氏</span>
          </div>
          <div id="haha">
            <p v-html="formattedPoetry"></p>
          </div>
        </div>
        <div class="anniu">
          <n-space>
            <n-button color="#d5d5d6"> 上一首 </n-button>
            <n-button color="#d5d5d6"> 下一首 </n-button>
          </n-space>
        </div>
      </div>

      <div class="poetrys-title">
        <n-scrollbar style="max-height: 100%" trigger="none">
          <n-list bordered clickable hoverable>
            <n-list-item v-for="student in students" :key="student.id"
              >{{ student.title }}<span>{{ student.name }}</span>
            </n-list-item>
          </n-list>
        </n-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const poetry = ref(
  `蒹葭苍苍，白露为霜。所谓伊人，在水一方。
溯洄从之，道阻且长。溯游从之，宛在水中央。
蒹葭萋萋，白露未晞。所谓伊人，在水之湄。
溯洄从之，道阻且跻。溯游从之，宛在水中坻。
蒹葭采采，白露未已。所谓伊人，在水之涘。
溯洄从之，道阻且右。溯游从之，宛在水中沚。`
);

const formattedPoetry = computed(() => {
  return poetry.value.replace(/\.\s+/g, ".<br>");
});

const students = [];

for (let i = 1; i < 20; i++) {
  const student = {
    id: i,
    title: `《蒹葭》${i}`,
    name: `无名氏${i}`,
  };
  students.push(student);
}
</script>

<style scoped>
.container {
  margin: 40px auto;
  max-width: 1000px;

  /* border: 1px solid red; */

  -webkit-font-smoothing: antialiased;
  --gqui-fs: 16px;
  --gqui-mb: 24px;
  --gqui-fs: 16px;
  color: var(--bc13);
  font-size: var(--gqui-fs);
  text-rendering: optimizeLegibility;
  position: relative;
}

@keyframes zoomInOut {
  0%,
  100% {
    transform: scale(1);
  } /* 初始状态和结束状态为正常大小 */
  50% {
    transform: scale(1.03);
  } /* 在动画的中间点将背景图片放大到1.2倍 */
}
/* .poetry-img {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0) 20%,
      rgb(24, 24, 28) 95%
    ),
    url("/public/1.png");

  width: 100%;
  height: 460px;
  background-size: cover;
  margin-bottom: 20px;
  margin-right: 0px;

  animation: zoomInOut 49s infinite;
  position: relative;
} */
/* 图片上描述 */
/* .miaoshu {
  position: absolute;
  top: 280px;
  left: 40px;
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
} */

/* 诗集样式 */
.poetrys {
  /* border: 1px solid rgb(181, 16, 38); */
  width: 100%;
  height: 618px;
  display: flex;
  box-shadow: 0 0 10px;
  margin-bottom: 8em;
}
.poetry {
  border-right: 2px solid rgb(167, 133, 137);
  flex-basis: 80%;
  width: 100%;
  position: relative;
}
.poetry-text {
  /* border: 1px solid rgb(181, 16, 38); */
  /* text-align: center; */
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}

.poetry-text h1 {
  letter-spacing: 3px;
  text-align: center;
  writing-mode: vertical-rl;
  font-family: "Courier New", Courier, monospace;
}

.poetry-text span {
  color: #acb3b9;
  position: relative;
  top: -15px;
  left: 80px;
  writing-mode: vertical-rl;
}

/* 诗集内容 */
#haha p {
  text-align: center;
}

#haha span {
  display: block;
  text-align: justify;
  text-indent: 0; /* 取消首字母缩进 */
}

.poetrys-title {
  /* border: 1px solid rgb(181, 16, 38); */
  flex-basis: 20%;
  height: 100%;
}
/* 上下页 */
.anniu {
  position: absolute;
  bottom: 10px;
  right: 20px;
}

/* 文本样式 */
p {
  white-space: pre-wrap;
  word-break: break-all;
  letter-spacing: 0.1em;
  line-height: 1.8em;
  margin-bottom: 30px;
}

h1 {
  margin-top: 30px;
}

.n-list-item {
  text-align: center;
  font-size: large;
}
.n-list-item span {
  font-size: small;
}
</style>
<style></style>

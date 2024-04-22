<template>
  <div class="container">
    <div class="xushu">
      <h1>拾忆</h1>
      <p>
        小时候的学校、家和村庄的样子只存在记忆中，五年一个变迁，在这里想要做个3D全景\来记录村庄面貌。
      </p>
      <p>是一 个人的记忆、也是一代人的记忆！</p>
    </div>
    <div class="haha">
      <iframe src="../../../public/xuanwo.html" class="iframe1"></iframe>
    </div>
  </div>
  <div class="zhaichao"><h1>上述来源：Ctrl+C+V大法！</h1></div>
</template>

<script setup>
document.title = "他的家乡 - 十三分地";
</script>

<style scoped>
.container {
  margin: 0 auto;
  position: relative;
  width: 100%;
}
.haha {
  width: 50%;
  margin: 0 auto;
}
.zhaichao {
  text-align: center;
  /* border: 1px solid red; */
}

.iframe1 {
  width: 100%;
  height: 40vw;
}

.xushu {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

@media screen and (max-width: 768px) {
  /* p {
    font-size: calc(0.5ss * var(--lem));
  } */
  h1 {
    font-size: calc(2.4 * var(--lem));
  }
  .xushu p {
    font-size: calc(1.1 * var(--lem));
    font-weight: bold;
  }

  .zhaichao h1 {
    font-size: calc(1.4 * var(--lem));
    /* border: 1px solid red; */
  }
  .haha {
    width: 76%;
    margin: 0 auto;
  }
  .iframe1 {
    width: 100%;
    height: 60vw;
  }
}
</style>

<template>
  <div class="container">
    <div class="gaozhi">
      <p>
        网络是个没有门的世界！ 加以门而限制的房子，有能力的人可以从窗户进来！<br /><br />所暂先不做这个功能！待技能增长之后再充分考虑制作这个页面
        <br /><br />
        忠告：只要联网，就没有秘密而言！
      </p>
    </div>
  </div>
</template>

<script setup>
document.title = "相簿 - 十三分地";
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  background-image: linear-gradient(
      90deg,
      rgba(196, 198, 198, 0.15) 10%,
      transparent 0
    ),
    linear-gradient(hsla(0, 0%, 80.4%, 0.15) 10%, transparent 0);
  background-size: 10px 10px;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid hsla(0, 0%, 91%, 0.15);
}

.gaozhi {
  font-family: miranafont, Hiragino Sans GB, STXihei, Microsoft YaHei, SimSun,
    sans-serif;
  margin: 0 auto;
  border: 1px solid rgba(255, 0, 0, 0.634);
  text-align: center;
  margin-top: 10%;
  font-size: 16px;
  width: 100%;
}
.gaozhi p {
  font-size: calc(1.2em + 1vw);
}

@media screen and (max-width: 768px) {
  .gaozhi p {
    font-size: calc(1.4 * var(--lem));
  }
}
</style>

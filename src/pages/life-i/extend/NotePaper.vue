<template>
  <div class="container">
    <h1>NotePage 便笺</h1>
    <n-card title="">
      <template #header-extra> <span> 2024年3月18日</span> </template>
      <div style="margin: 0 1em 1em 1em" class="paper-text">
        2024年3月18日
        <p>
          当你想要回家，却找不到回家的路 当你一路南下，却找不到一件差事
          你就决定去芝加哥 哭泣和祈祷都帮不了你
        </p>
      </div></n-card
    >
    <n-card title="">
      <template #header-extra> <span> 2024年3月18日</span> </template>
      <div style="margin: 0 1em 1em 1em" class="paper-text">
        2024年3月18日
        <p>
          当你想要回家，却找不到回家的路 当你一路南下，却找不到一件差事
          你就决定去芝加哥
          哭泣和祈祷都帮不了你,用马斯洛的话说就是要满足最高层次的需要 ——
          自我实现（Self-Realization），这个前提就是要认识自己，然后才能知道怎样自我实现。小时候吃鱼的小雪一般的心理学中所讲的
          "知、情、意" 也是把 "知"
          排在首位，只有充分的认知，才能有明确的方向，然后有所作为。用马斯洛的话说就是要满足最高层次的需要
          ——
          自我实现（Self-Realization），这个前提就是要认识自己，然后才能知道怎样自我实现。小时候吃鱼的小雪一般的心理学中所讲的
          "知、情、意" 也是把 "知"
          排在首位，只有充分的认知，才能有明确的方向，然后有所作为。
        </p>
      </div></n-card
    >
    <n-card title="">
      <template #header-extra> <span> 2024年3月18日</span> </template>
      <div style="margin: 0 1em 1em 1em" class="paper-text">
        2024年3月18日
        <p>
          用马斯洛的话说就是要满足最高层次的需要 ——
          自我实现（Self-Realization），这个前提就是要认识自己，然后才能知道怎样自我实现。小时候吃鱼的小雪一般的心理学中所讲的
          "知、情、意" 也是把 "知"
          排在首位，只有充分的认知，才能有明确的方向，然后有所作为。
        </p>
      </div></n-card
    >
  </div>
</template>

<script setup></script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  background-image: linear-gradient(
      90deg,
      rgba(196, 198, 198, 0.15) 10%,
      transparent 0
    ),
    linear-gradient(hsla(0, 0%, 80.4%, 0.15) 10%, transparent 0);
  background-size: 10px 10px;
  box-sizing: border-box;

  padding: 0 1em 2em 1em;

  border: 1px solid hsla(0, 0%, 91%, 0.15);
}

.paper-text {
  margin: auto;
  font-size: calc(0.2em + 1vw);
}
.n-card {
  margin-top: 1em;
}
</style>

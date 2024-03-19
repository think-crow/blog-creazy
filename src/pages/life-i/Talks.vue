<template>
  <n-card>
    <h1>huati</h1>
    <n-collapse>
      <template #header-extra>
        <n-icon></n-icon>
      </template>
      <template #arrow>
        <n-icon> </n-icon>
      </template>
      <n-collapse-item
        title="（一）乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->"
        name="1"
      >
        <template #header-extra> 2024年12月11日 </template>
        <div class="talk-text">
          <p>
            俄罗斯与乌克兰之间的军事冲突不断升级，牵动着世界各地的神经。这场危机不仅对欧洲安全格局产生深远影响，也加剧了国际社会的紧张氛围。
          </p>
        </div>
      </n-collapse-item>

      <n-collapse-item
        title="（一）乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->"
        name="4"
      >
        <template #header-extra> 2024年12月11日 </template>
        <div class="talk-text">
          <p>
            俄罗斯与乌克兰之间的军事冲突不断升级，牵动着世界各地的神经。这场危机不仅对欧洲安全格局产生深远影响，也加剧了国际社会的紧张氛围。
          </p>
        </div>
      </n-collapse-item>

      <n-collapse-item
        title="（一）乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->"
        name="2"
      >
        <template #header-extra> 2024年12月11日 </template>
        <div class="talk-text">
          <p>
            俄罗斯与乌克兰之间的军事冲突不断升级，牵动着世界各地的神经。这场危机不仅对欧洲安全格局产生深远影响，也加剧了国际社会的紧张氛围。
          </p>
        </div>
      </n-collapse-item>

      <n-collapse-item
        title="（一）乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->乌克兰危机升级-->"
        name="3"
      >
        <template #header-extra> 2024年12月11日 </template>
        <div class="talk-text">
          <p>
            俄罗斯与乌克兰之间的军事冲突不断升级，牵动着世界各地的神经。这场危机不仅对欧洲安全格局产生深远影响，也加剧了国际社会的紧张氛围。
          </p>
        </div>
      </n-collapse-item>
    </n-collapse>

    <n-space justify="center">
      <n-pagination v-model:page="page" :page-count="100" />
    </n-space>
  </n-card>
</template>

<script setup>
import { ref } from "vue";

const page = ref(2);
</script>

<style scoped>
.n-collapse-item {
  /* border-bottom: 1px solid red; */
  margin-top: 1em;
  padding: 1em;
  text-indent: 2em;
  /* font-size: 1.5rem; */
  letter-spacing: 0.07em;
}
::v-deep(.n-collapse-item__header-main) {
  font-size: 19px;
  /* border: 1px solid blue; */
}

.n-collapse .n-collapse-item:not(:first-child) {
  border-top: 1px solid rgb(124, 95, 95);
}

.n-collapse .n-collapse-item:last-child {
  border-bottom: 1px solid rgb(124, 95, 95);
}

.n-card {
  max-width: 1080px;
  margin: 0 auto;
  padding-bottom: 100px;
}
.talk-text {
  font-size: 1.2em;
  border-top: 1px solid #2d2d30;
}
p {
  white-space: pre-wrap;
  word-break: break-all;
  letter-spacing: 0.1em;
  line-height: 1.8em;
  /* margin-bottom: 30px; */
}

/* 分页 */

.n-pagination {
  margin-top: 4em;
}
</style>

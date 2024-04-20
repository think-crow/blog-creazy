<template>
  <div class="container">
    <h1>NotePage 便笺</h1>
    <n-card v-for="(item, index) in data.slice().reverse()" :key="index">
      <div class="paper-text">
        <div class="submitdate">{{ formatDate(item.submi_date) }}</div>
        <p
          v-html="item.content.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')"
        ></p></div
    ></n-card>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect, computed } from "vue";

import axios from "@/api/request.js";
// 节流  单位事件只执行一次
import { throttle } from "lodash-es";

const page = ref(1); //当前页
const limit = 27; //每次请求多少条---纪念自己的27岁
const total = ref(0); //总页数
const data = ref([]);
// 分类
const category = ref("all");

// 计算总页数
const totalPages = computed(() => {
  return total.value > 0 ? Math.ceil(total.value / limit) : 1; // 如果总页数小于等于0，则至少显示一页
});
// 监听当前页变化
watch(page, () => {
  postData();
});

const postData = async () => {
  const response = await axios
    .get(
      `/api/notepapers_data?page=${page.value}&limit=${limit}&category=${category.value}`
    )
    .then((res) => {
      total.value = res.data.total;
      if (page > total) page = 1;
      data.value = res.data.result;
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};
// 按键上下页
function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    // console.log("左方向键被按下");
    prevPage();
  } else if (event.key === "ArrowRight") {
    // console.log("右方向键被按下");
    nextPage();
  }
}
// 节流
const throttledHandleKeyDown = throttle(handleKeyDown, 0);
// 上一页到1时切换为最后一页
const prevPage = () => {
  page.value = page.value > 1 ? page.value - 1 : totalPages.value;
  postData();
};
// 下一页到最后时切换第1页
const nextPage = () => {
  page.value = page.value * limit < total.value ? page.value + 1 : 1;
  postData();
};

// 移除分类选择后radio的焦点
const handleClick = () => {
  const targetElement = document.querySelector(".mycontainer");
  if (targetElement) {
    targetElement.focus();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant", // 立即跳转，而非平滑滚动
    });
  }
};

const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}年${month}月${day}日  ${hours}:${minutes}`;
};

document.title = "便笺 - 十三分地";
onMounted(() => {
  postData();
});
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

/* 网格版心 */
.container {
  width: 100%;
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
  /* margin: auto; */
  margin: 0 1em 1em 1em;
  font-size: calc(0.8em + 0.3vw);
  /* color: red; */
}
.n-card {
  margin-top: 1em;
}
p {
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.05em;
  line-height: 1.8em;
  margin-bottom: var(--gqui-mb);
  text-align: justify;
}

.submitdate {
  color: rgba(169, 164, 157, 0.658);
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 0.5em 2em 0.5em;
  }
  .paper-text {
    /* margin: auto; */
    margin: 0 0.8em 0em 0.8em;
    font-size: calc(0.8em + 0.3vw);
    /* color: red; */
  }

  p {
    white-space: pre-wrap;
    word-break: break-word;
    letter-spacing: 0.04em;
    line-height: 1.6em;
    margin-bottom: 1em;
    text-align: justify;
    color: rgb(169, 164, 157);
  }
}
</style>

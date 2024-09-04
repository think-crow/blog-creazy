<template>
  <div class="container">
    <h1>NotePage 便笺</h1>
    <n-card v-for="(item, index) in data.slice()" :key="index">
      <div class="paper-text">
        <div class="submitdate">{{ formatDate(item.submi_date) }}</div>
        <p
          v-html="item.content.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')"
        ></p></div
    ></n-card>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import axios from "@/api/request.js";
import { throttle } from "lodash-es";

const page = ref(1); // 当前页
const limit = 27; // 每页限制数
const total = ref(0); // 总数据条数
const data = ref([]); // 数据列表
const category = ref("all"); // 分类

// 获取数据的函数
const fetchData = async () => {
  try {
    const response = await axios.get("/api/notepapers_data", {
      params: {
        page: page.value,
        limit: limit,
        category: category.value
      }
    });
    total.value = response.data.total;
    // data.value = response.data.result;
    data.value = [...data.value, ...response.data.result]; // 拼接新数据到数据列表
    page.value++; // 更新当前页
  } catch (error) {
    console.error("数据获取失败:", error);
    alert("数据获取失败，请检查控制台错误信息。");
  }
};


// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(total.value / limit);
});


// // 调整 handleScroll 函数以在接近页面底部时加载数据
// const handleScroll = throttle(() => {
//   // 计算触发加载数据的滚动位置
//   const bottomScrollTrigger = document.documentElement.scrollHeight - window.innerHeight - 200; // 根据需要调整 200 的值

//   // 检查用户是否接近页面底部
//   if (document.documentElement.scrollTop > bottomScrollTrigger && page.value <= totalPages.value) {
//     fetchData(); // 触发数据获取
//   }
// }, 500); // 将节流时间间隔设置为 500 毫秒

// 调整 handleScroll 函数以在接近页面底部时加载数据
const handleScroll = throttle(() => {
  // 计算触发加载数据的滚动位置
  const bottomScrollTrigger = document.documentElement.scrollHeight - window.innerHeight - 360; // 根据需要调整 200 的值

  // 检查用户是否接近页面底部
  if (document.documentElement.scrollTop > bottomScrollTrigger && page.value <= totalPages.value) {
    fetchData(); // 触发数据获取
  }
}, 500); // 将节流时间间隔设置为 500 毫秒

// 生命周期钩子
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  fetchData(); // 初始数据获取
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// 格式化日期函数
const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}年${month}月${day}日 ${hours}:${minutes}`;
};

// 设置页面标题
document.title = "便笺 - 十三分地";
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

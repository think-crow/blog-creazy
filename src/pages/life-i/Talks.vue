<template>
  <div class="container" tabindex="0" @keydown="throttledHandleKeyDown">
    <n-card>
      <h1 class="tou-title">话题-言论</h1>
      <n-collapse>
        <n-collapse-item
          :title="item.title"
          :name="item._id"
          v-for="(item, index) in data"
          :key="index"
        >
          <template #header-extra
            ><div class="talks-date">{{ formatDate(item.submi_date) }}</div>
          </template>
          <div class="talk-text">
            <p
              v-html="
                item.content.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')
              "
            ></p>
          </div>
        </n-collapse-item>
      </n-collapse>

      <n-space justify="center">
        <n-pagination v-model:page="page" :page-count="totalPages" />
      </n-space>
    </n-card>
    <div class="comment">
      <Giscus />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect, computed } from "vue";
import Giscus from "@/components/Giscus.vue";
import axios from "@/api/request.js";
// 节流  单位事件只执行一次
import { throttle } from "lodash-es";
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const page = ref(parseInt(route.query.page) || 1);
const limit = 27; //每次请求多少条---纪念自己的27岁
const total = ref(0); //总页数
const data = ref([]);
// 分类
const category = ref(route.query.category || 'all'); // 分类

// 计算总页数
const totalPages = computed(() => {
  return total.value > 0 ? Math.ceil(total.value / limit) : 1; // 如果总页数小于等于0，则至少显示一页
});
// 监听当前页变化
watch(page, () => {
  postData();
});


// 监听路由查询参数变化
watch(() => route.query.page, (newPage) => {
  const parsedPage = parseInt(newPage) || 1;
  if (page.value !== parsedPage) {
    page.value = parsedPage;
    postData();
  }
});


// 更新路由参数
const updateRoute = () => {
  // 只在有实际查询参数时才更新路由
  if (page.value !== 1 || category.value !== 'all') {
    const newQuery = { page: page.value, category: category.value };
    router.push({ query: newQuery });
  }
};

const postData = async () => {
  const response = await axios
    .get(
      `/api/topics_data?page=${page.value}&limit=${limit}&category=${category.value}`
    )
    .then((res) => {
      total.value = res.data.total;
      if (page > total) page = 1;
      data.value = res.data.result;
      updateRoute(); // 更新路由
      scrollToTop();
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

// 到页面顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};

document.title = "话题 - 十三分地";
onMounted(() => {
  postData();
});
</script>

<style scoped>
.container {
  outline: none; /* 焦点时不显示边框 */
  border: 1px solid #18181c;
}

.n-collapse-item {
  /* border-bottom: 1px solid red; */
  /* margin-top: 1em; */
  padding: 0.1em;
  /* text-indent: 2em; */
  letter-spacing: 0.07em;
}

.n-collapse-item:last-child {
  margin-top: 1em;
  padding-bottom: 1em;
}
::v-deep(.n-collapse-item__header-main) {
  font-size: 18px;

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
  margin: 1em auto;
  padding: 0 1em 86px 1em;
}
.talk-text {
  font-size: 1.2em;
  border-top: 1px solid #2d2d30;
  padding: 0 4em 0 3em;
}
p {
  white-space: pre-wrap;
  word-break: break-all;
  letter-spacing: 0.1em;
  line-height: 1.8em;
  color: hsla(38, 100%, 50%, 0.877);
  /* margin-bottom: 30px; */
  font-weight: 200;
}

/* 分页 */
.n-pagination {
  margin-top: 4em;
}

@media screen and (max-width: 762px) {
  /* 整条话题 */
  .n-collapse-item {
    /* border: 1px solid red; */
    /* margin-top: 1em; */
    padding: 0.1em;
    /* text-indent: 2em; */
    letter-spacing: 0.01em;
  }

  /* 标题 */
  ::v-deep(.n-collapse-item__header-main) {
    font-size: calc(1.25 * var(--lem));

    /* border: 1px solid blue; */
  }

  .n-collapse .n-collapse-item:not(:first-child) {
    border-top: 1px solid rgb(124, 95, 95);
  }

  .n-collapse .n-collapse-item:last-child {
    border-bottom: 1px solid rgb(124, 95, 95);
  }

  /* .n-collapse-item:last-child {
    margin-top: 1em;
    padding-bottom: 1em;
  } */

  .n-card {
    max-width: 1080px;
    margin: 1em auto;
    padding: 0 0.4em 20px 0.5em;
  }
  .talk-text {
    font-size: 1em;
    border-top: 1px solid #2d2d30;
    padding: 0;
  }
  p {
    white-space: pre-wrap;
    word-break: break-all;
    letter-spacing: 0.02em;
    line-height: 1.4em;
    color: hsla(38, 100%, 50%, 0.877);
    /* margin-bottom: 30px; */
    font-weight: 200;
  }

  /* 分页 */
  .n-pagination {
    margin-top: 4em;
  }
  .talks-date {
    display: none;
  }
  .tou-title {
    font-size: 1.6em;
  }
}
</style>

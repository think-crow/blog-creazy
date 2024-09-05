<script setup>
import { onMounted, ref, watchEffect, computed } from "vue";
import Giscus from "@/components/Giscus.vue";
import axios from "@/api/request.js";
// 节流  单位事件只执行一次
import { throttle } from "lodash-es";

const page = ref(1); //当前页
const limit = 8; //每次请求多少条
const total = ref(0); //总页数
const data = ref([]);
// 分类
const category = ref("all");

// 分类
const stopwatch = watchEffect(() => {
  if (category.value != "all") {
    postData();
  }
  // stopwatch();
});
// 分类
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
      `/api/poetry_data?page=${page.value}&limit=${limit}&category=${category.value}`
    )
    .then((res) => {
      total.value = res.data.total;
      if (page > total) page = 1;
      data.value = res.data.result;
    })
    .catch((err) => {
      // console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};

// 按键上下页
function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    prevPage();
  } else if (event.key === "ArrowRight") {
    nextPage();
  }
}
// 节流
const throttledHandleKeyDown = throttle(handleKeyDown, 0);
// 上一页到1时切换为最后一页
const prevPage = () => {
  page.value = page.value > 1 ? page.value - 1 : totalPages.value;
  postData();
  scrollToTop();
};
// 下一页到最后时切换第1页
const nextPage = () => {
  page.value = page.value * limit < total.value ? page.value + 1 : 1;
  postData();
  scrollToTop();
};
// 到页面顶部
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
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
document.title = "诗歌 - 十三分地";
onMounted(() => {
  postData();
});
</script>

<template>
  <div>
    <div class="container">
    <div class="tou">
      <h1 class="tou-title">Poetry-铁血柔情</h1>
      <n-radio-group v-model:value="category" name="radiogroup1" class="fenlei">
        <n-space>
          <n-radio value="poetrys_1" @click="handleClick">诗集 </n-radio>
          <n-radio value="songs_2" @click="handleClick">歌曲</n-radio>
        </n-space>
      </n-radio-group>
    </div>
    <div class="largelarge" tabindex="0" @keydown="throttledHandleKeyDown">
      <div class="mycontainer">
        
        <n-card v-for="(item, index) in data" :key="index">
          <div class="poetry-box-shang">
            <div class="poetry-title">
              <h1>{{ item.title }}</h1>
              <span>作者：{{ item.author }}</span>
            </div>
            <div class="poetry">
              <p
                v-dompurify-html="
                  item.content.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')
                "
              ></p>
            </div>
          </div>
          <div class="poetry-box-xia">
            <p
              v-dompurify-html="
                item.annotation.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')
              "
            ></p>
          </div>
        </n-card>
      </div>
    </div>

    <n-space justify="center">
      <n-pagination v-model:page="page" :page-count="totalPages" />
    </n-space>
  </div>
  <div class="comment">
    <Giscus />
  </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0 1em;
}
.tou {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  /* border: 1px solid red; */
  align-items: center;
  /* padding-right: 1em; */
}
.largelarge {
  border: 1px solid #18181c;
  outline: none; /* 焦点时不显示边框 */
  /* border: 1px solid red; */
  margin-bottom: 10%;
}

/* .mycontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}


.n-card {
  padding: 1em .5em .5em .5em;
  margin: 1em;
  box-shadow: 0 0 5px;
  flex-basis: 618px;
} */
.mycontainer {
  display: grid;
    grid-template-columns: repeat(auto-fill, minmax(618px, 1fr)); /* 自动填充列数，最小200px，自动扩展 */
    gap: 20px; /* 项目之间的间隙 */
    justify-items: center; /* 每个项目在网格单元格内居中对齐 */
    margin: 0 auto;
    padding: 10px;
    
      /* height: 100%; */
}


.n-card {
  padding: 1em .5em .5em .5em;
  box-shadow: 0 0 5px;
}

.n-card:nth-child(4n + 3),
.n-card:nth-child(4n + 4) {
  background-color: #28282c;
  /* font-size: 2em; */
  /* color: rgba(0, 255, 255, 0.671); */

}


/* 上半部分 */
.poetry-box-shang {
  display: flex;
  /* width: 100%; */
  min-height: 50%;
  /* border: 1px solid red; */
}

/* 上半左标题作者 */
.poetry-title {
  display: flex;
  border-right: 1px solid #28282c;
  flex-basis: 20%;
  width: 20%;
  justify-content: center;
  /* border: 1px solid red; */
}

.poetry-title h1 {
  writing-mode: vertical-rl;
  padding: 0;
  margin: 0;
  /* border: 1px solid red; */
  font-weight: 400;

  white-space: pre-wrap;
  word-break: break-all;
  letter-spacing: 0.1em;
}
.poetry-title span {
  padding: 8em 0 0em 1em;
  text-align: center;
  /* border: 1px solid red; */
  /* height: 50%; */
  font-size: 1em;
}
/* 诗 */
.poetry {
  display: flex;
  white-space: pre-wrap;
  /* border: 1px solid red; */
  flex-basis: 80%;
  margin-left: 2em;
  align-items: center;
  /* text-align: center; */
}

.poetry p {
  white-space: pre-wrap;
  word-break: break-all;
  letter-spacing: 0.08em;
  /* line-height: 1.4em; */
  color: #ffffffb0;
}

span,
p {
  /* border: 1px solid red; */
  padding: 1em;
}
p {
  /* white-space: normal;s */
  font-size: 1.1em;
}

span {
  /* text-align: ; */
  writing-mode: vertical-rl;
  color: #ffffffb0;
}

/* 诗集注释  释义*/
.poetry-box-xia {
  margin-top: 2em;
  border-top: 1px solid rgb(73, 69, 69);
}
.comment {
  margin-top: 5%;
}
@media screen and (max-width: 768px) {
  .container {
    padding: 0;
  }
  .mycontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    /* max-width: 1238px; */
    margin: 0;
  }
  .n-card {
    box-shadow: 0 0 5px;
    width: 98%;
    padding: 1em 0.5em 0.5em 0.5em;
    margin: .3em 0;
  }
  .n-card:nth-child(4n + 3),
  .n-card:nth-child(4n + 4) {
    background-color: #28282c;
    font-size: var(--r-font-xs);
  }

  .n-card:nth-child(4n + 3),
  .n-card:nth-child(4n + 4) {
    width: 98%;
  }

  /* 上半部分 */
  .poetry-box-shang {
    display: block;
    /* border: 1px solid red; */
  }

  /* 上半左标题作者 */
  .poetry-title {
    display: block;
    border: none;
    width: 100%;
    border-bottom: 1px solid #28282c;
    /* flex-basis: 11%; */
    /* width: 15%; */
    justify-content: center;
    text-align: center;
    /* border: 1px solid red; */
    padding-bottom: 1em;
  }

  .poetry-title h1 {
    writing-mode: horizontal-tb;
    padding: 0;
    margin: 0;
    /* border: 1px solid red; */
    font-weight: 400;
    font-size: 1.8em;
    white-space: pre-wrap;
    word-break: break-all;
    letter-spacing: 0.1em;

  }
  .poetry-title span {
    padding: 0em 0 0em 0em;
    font-size: 1em;
    color: var(--r-secondary-color);
    /* border: 1px solid red; */
    height: 20%;
    width: 90%;
    margin-top: 3em;
    /* text-align: center; */
  }
  /* 诗 */
  .poetry {
    white-space: pre-wrap;
    /* border: 1px solid red; */
    flex-basis: 89%;
    /* margin-left: 1em; */
    margin: auto 0em auto 1em;
  }

  .poetry p {
    white-space: pre-wrap;
    word-break: break-all;
    letter-spacing: 0.01em;
    /* line-height: 1.4em; */
    color: #ffffffb0;
    /* text-align: center; */
  }

  span,
  p {
    /* border: 1px solid red; */
    padding: 0em;
  }
  p {
    /* white-space: normal;s */
    font-size: 1em;
  }

  span {
    /* text-align: center; */
    writing-mode: horizontal-tb;
    color: #ffffffb0;
  }
  .tou-title {
    font-size: 1.6em;
  }
}
</style>

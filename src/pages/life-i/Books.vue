<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "axios";
// 节流  单位事件只执行一次
import { throttle } from "lodash-es";

const imageSrc = ref("");

const page = ref(1);
const limit = 1;
const total = ref(0);
const data = ref([]);

const category = ref("all");

// 分类
const stopwatch = watchEffect(() => {
  if (category.value != "all") {
    postData();
  }
});

// 存储请求回来的富文本内容
const richTextContent = ref("");

const postData = async () => {
  const response = await axios
    .get(
      `http://127.0.0.1:3000/api/bookmovies_data?page=${page.value}&limit=${limit}&category=${category.value}`
    )
    .then((res) => {
      total.value = res.data.total;
      if (page > total) page = 1;
      data.value = res.data.result[0];
      richTextContent.value = data.value.myreflections;

      imageSrc.value = `http://127.0.0.1:3000/${data.value.img_path}`;
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
// 上一页
const prevPage = () => {
  page.value = page.value > 1 ? page.value - 1 : total.value;
  postData();
};
// 下一页
const nextPage = () => {
  page.value = page.value * limit < total.value ? page.value + 1 : 1;
  postData();
};

// 移除分类选择后radio的焦点
const handleClick = () => {
  const targetElement = document.querySelector(".quan");
  if (targetElement) {
    targetElement.focus();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant", // 立即跳转，而非平滑滚动
    });
  }
};
// const handleClick = (event) => {
//   // 在点击事件处理函数中调用blur方法来移除焦点
//   event.target.blur();
// };

onMounted(() => {
  postData();
});
</script>

<template>
  <n-radio-group v-model:value="category" name="radiogroup1" class="fenlei">
    <n-space vertical>
      <!-- <n-button @click="dianji">点击</n-button> -->
      <n-radio value="books_1" @click="handleClick">书籍 </n-radio>
      <n-radio value="movies_2" @click="handleClick">电影</n-radio>
    </n-space>
  </n-radio-group>

  <div class="quan" tabindex="0" @keydown="throttledHandleKeyDown">
    <div class="container">
      <div class="books">
        <div class="book-title">
          <h1 style="margin-top: -20px">{{ data.title }}</h1>
        </div>
        <div class="book-show">
          <div class="book-image">
            <!-- <img src="../../assets/images/xiangshui.jpeg" alt="" /> -->
            <n-image width="300px" height="400px" :src="imageSrc" />
          </div>
          <div class="book-text">
            <p>{{ data.summary }}</p>
          </div>
        </div>
        <n-divider />
        <div v-html="richTextContent" class="book-think"></div>
      </div>
    </div>

    <div class="fanye">
      <n-button @click="prevPage" class="shang">上一章</n-button
      ><n-button @click="nextPage" class="xia">下一章 </n-button>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 这个很奇怪 不加边框左上角样式偏下 */
.quan {
  border: 1px solid #18181c;
  outline: none; /* 焦点时不显示边框 */
  /* pointer-events: none; */
}
.naive-radio:focus {
  outline: none;
}
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
.books {
  padding: 40px;
}
.book-title {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.book-show {
  display: flex;
  height: 400px;
}
.book-image {
  /* border: 1px solid rgb(251, 114, 1); */

  height: 400px;
  flex-basis: 460px;
  display: flex;
  justify-content: center;
}
.book-text {
  /* border: 1px solid rgb(181, 16, 38); */
  /* padding: 1em; */
  padding: 0 1em;
  height: 400px;
  flex-basis: 460px;
  display: flex;
  align-items: center;
}
.book-think {
  /* border: 1px solid rgb(176, 176, 194); */

  margin-top: 10px;
  padding: 1em;
}
.book-think p {
  padding: 1em 2em;
  text-indent: 2em;
}

/* 文章主体 */
p {
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.1em;
  line-height: 1.8em;
  margin-bottom: 30px;
  text-align: justify;
}

h1 {
  margin-top: 30px;
  font-family: "Courier New", Courier, monospace;
}

/* 分类按钮 */
.fenlei {
  /* border: 1px solid red; */
  float: left;
  padding-top: 1em;
}
.fenlei .n-radio {
  /* border: 1px solid red; */
  width: 5em;
  margin-left: 1em;
  /* margin-bottom: 0; */
}

.fanye {
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}

.fanye .n-button {
  padding: 1em 1.2em;
}

.shang {
  margin-left: 6em;
}
.xia {
  margin-right: 6em;
}
</style>

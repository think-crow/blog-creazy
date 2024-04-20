<template>
  <div class="shengzi"><Gsap /></div>
  <div class="en" tabindex="0" @keydown="handleKeyDown">
    <div class="container">
      <div class="crop-h"></div>
      <div class="crop-v"></div>
      <div class="crop-c"></div>
      <nav class="nav-top small">
        <!-- <div class="logo">
          <a href="#"
            ><img src="/src/assets/images/logo.png" alt="Haoshuang Ren"
          /></a>
        </div> -->
        <div class="menu">
          <span><a href="#"></a></span>
          <!-- <span><a href="#">个人日志</a></span> -->
          <router-link
            :to="{
              path: '/Shareeye',
            }"
            style="color: red"
            >点击返回</router-link
          >
          <!-- <span><a href="#">技术</a></span>
        <span><a href="#">优选文章</a></span> -->
        </div>
      </nav>
      <div class="article-meta">
        <h1 class="title">{{ data.title }}</h1>
        <h3 class="meta-line">
          <span>
            <span class="author">{{ data.author }}</span>
            <span class="date">{{ formatDate(data.submi_date) }}</span>
          </span>
          <span class="term"></span>
        </h3>
      </div>

      <div class="main" v-dompurify-html="data.content"></div>
      <nav class="post-nav fullwidth kai">
        <span class="nav-prev"
          >←
          <a href="#" @click="prevpage" v-if="prevArticle">{{
            prevArticle.title
          }}</a></span
        >
        <span class="nav-next"
          ><a href="#" @click="nextpage" v-if="nextArticle">{{
            nextArticle.title
          }}</a>
          →</span
        >
      </nav>

      <div class="comment">
        <Giscus
          repo="think-crow/blog-creazy_giscus"
          repo-id="R_kgDOLjB6mg"
          category="creazy_blog"
          category-id="DIC_kwDOLjB6ms4CemE6"
          mapping="title"
          strict="0"
          reactions-enabled="1"
          emit-metadata="1"
          input-position="bottom"
          theme="light"
          lang="zh-CN"
          loading="eager"
          crossorigin="anonymous"
          async
          :key="componentKey"
        />
      </div>
      <footer class="small"><hr /></footer>
    </div>
  </div>
</template>

<script setup>
import Giscus from "@giscus/vue";
import { ref, watchEffect } from "vue";
import axios from "@/api/request.js";
import { useRoute } from "vue-router";
const componentKey = ref(0);

const data_Html = ref("");
const route = useRoute();

const prevArticle = ref("");
const nextArticle = ref("");

const data = ref([]);

// 存储请求回来的富文本内容
watch(data, (newvalue) => {
  componentKey.value++;
});

const getData = async () => {
  const response = await axios
    .get(
      `/api/article_data?_id=${route.query._id}&category=${route.query.category}`
    )
    .then((res) => {
      data.value = res.data.result;
      prevArticle.value = res.data.prevArticle;
      nextArticle.value = res.data.nextArticle;
      document.title = `${data.value.title} - 十三分地`;

      // 更新页面 URL
      history.pushState(
        {},
        null,
        `?_id=${route.query._id}&category=${route.query.category}`
      );
      // console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};

function nextpage() {
  if (nextArticle.value != null) {
    route.query._id = nextArticle.value._id;
    getData();
    scrollToTop();
  }
}
function prevpage() {
  if (prevArticle.value != null) {
    route.query._id = prevArticle.value._id;
    getData();
    scrollToTop();
  }
}

// 到页面顶部
function scrollToTop() {
  window.scrollTo(0, 0);
}

// 按键上下页
function handleKeyDown(event) {
  // prevArticle.value = null;
  if (event.key === "ArrowLeft") {
    prevpage();
  } else if (event.key === "ArrowRight") {
    nextpage();
  }
}

const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
/* .padding-lr {
  padding: 0 2em;
} */
/* hr {
  border-style: dashed;
  color: var(--border-color);
  margin-bottom: 4em;
} */

/* ! */
.shengzi {
  position: absolute;
  right: 2em;
}

.comment {
  margin-top: 8%;
}
.container {
  max-width: var(--body-width);
  min-height: calc(100vh - 3em);
  /* background-color: var(--bg-body); */
  margin: auto;
  padding: 1em;
  line-height: 1.5;
  position: relative;
  display: flex;
  flex-direction: column;
  counter-reset: pageNumber;
  /* border: 1px solid red; */
  /* font-family: Palatino, palatino linotype, palatino lt std, latin modern roman,
    "source han serif cn", serif; */
}

/* ! */
.nav-top,
.single .meta-line,
.nav-bottom,
.post-nav {
  display: flex;
  justify-content: space-between;
}
.home + footer > .nav-bottom {
  display: block;
}
.nav-top {
  margin-bottom: 1em;
  border-bottom: 1px solid;
}
.logo {
  font-weight: bold;
  margin-top: 0.5rem;
}
.logo img {
  display: none;
  max-height: 4rem;
  position: absolute;
  top: 2em;
}

/* ! */
.menu {
  text-transform: uppercase;
}
.menu span {
  display: inline-block;
  margin: 0.5rem 0 0 0.5em;
}
.menu .active {
  border-bottom: 5px solid;
  margin-bottom: -5px;
}
.menu .optional {
  display: none;
}
footer {
  text-align: center;
  margin-top: 2rem;
}
.menu-bottom a + a::before {
  content: " · ";
}

/* code */
/* pre code {
  display: block;
  padding: 1em;
  overflow-x: auto;
}
pre code,
img[src$="#border"] {
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow);
}
pre code:not([class]) {
  background: none;
}
code {
  hyphens: none;
}
pre code,
pre code:hover {
  white-space: pre-wrap;
  word-break: break-all;
} */

/* misc elements */
.main {
  margin: 2em 0 2em 0;
}

.main,
.home {
  hyphens: auto;
  /* border: 1px solid blue; */
}
.main,
.home,
.terms {
  flex-grow: 1;
}

.main h2 {
  line-height: 1.25;
}
.main h1 {
  text-align: center;
  margin: 2em 0 1em;
}
a {
  text-decoration: none;
  /* border-bottom: 1px dashed; */
  color: initial;
}
.main a {
  padding: 0 0.6em 0 0.3em;
}
@media (hover: hover) and (pointer: fine) {
  :not(.logo) > a:hover {
    position: relative;
    inset: 1px 0 0 1px;
  }
}
nav a,
footer a,
.archive a,
sup a {
  border-bottom: none;
}
.anchor {
  display: none;
}
:hover > .anchor {
  display: inline;
}
.single .main h2 {
  border-bottom: 1px solid var(--border-color);
}
.single .main h3 {
  font-variant: small-caps;
  text-align: center;
}

/* 底部虚线 */
hr {
  border-style: dashed;
  color: var(--border-color);
}
img,
iframe,
video {
  max-width: 100%;
}

.post-nav {
  margin-top: 1rem;
}
.post-nav span {
  width: calc(50% - 1em);
}
.post-nav span + span {
  text-align: right;
}

/* 标题样式 */
.toc-line,
.subtitle,
.meta-line {
  font-weight: normal;
}
/* ! */
.author + .date::before {
  content: " / ";
}
.article-meta {
  font-family: Palatino, palatino linotype, palatino lt std, latin modern roman,
    "source han serif cn", serif;
  margin-bottom: 0em;
}
/* ! */
h1.title {
  margin: 1em 0 0.5em 0;
}
h1.title::before {
  content: "❧";
  font-style: normal;
  font-weight: normal;
  font-size: 6em;
  color: var(--border-color);
  opacity: 0.5;
  position: absolute;
  inset: -0.15em 0;
  z-index: -1;
}
/* ! */
.small,
.term,
.footnotes,
li li {
  font-size: 0.9em;
}
.footnotes > hr {
  max-width: 20em;
  margin-left: 0;
}

@media (min-width: 768px) {
  .container {
    padding: 3.5em 2.5em;
  }
  .main {
    margin: auto;
    width: 680px;
  }

  /* ! */

  .crop-h,
  .crop-v,
  .crop-c {
    position: absolute;
    z-index: -1;

    /* ====== */
  }
  .crop-h {
    inset: 2em 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
  .crop-v {
    inset: 0 2em;
    border-left: 1px solid;
    border-right: 1px solid;
  }
  .crop-c {
    inset: 1em;
    border: 1.5em solid var(--bg-body);
  }
  .menu {
    margin-left: 2em;
  }
  .menu span {
    margin-left: 1em;
  }
  h1.title::before {
    font-size: 6em;
    inset: 0;
  }
  .logo img,
  .menu .optional {
    display: inline-block;
  }
  .twocolumn {
    columns: 2;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    min-height: calc(100vh - 5em);
    margin: 2em auto;
    max-width: 960px;
  }
  .home {
    padding: 0 2em;
  }
  h1.title {
    margin-top: 2em;
  }
  h1.title::before {
    font-size: 9em;
    inset: -0.1em 0;
  }
  pre code {
    white-space: pre;
  }
  .crop-c {
    inset: 1em;
    border: 1.5em solid var(--bg-body);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-body: #dedad6;
    --bg-block: #d6d1cc;
    --border-color: #999;
    --box-shadow: 5px 5px 5px #ccc;
    --text-width: 620px;
  }
  html,
  img,
  video,
  iframe {
    filter: invert(1);
  }
}

/* =============================================== */
h1.title::before {
  content: "➶";
}
.main {
  line-height: 1.75;
}
.archive {
  max-width: none;
  width: 100%;
}

/* 页底部上下章标题 */
.main > ul > li > span:first-child,
.main > p > span:first-child,
.main > p .subtitle,
.hash-note,
.post-nav,
.stats {
  color: #666;
  font-size: 0.9em;
}

.en {
  border: 1px solid #fff;
  outline: none; /* 焦点时不显示边框 */
}

.en .main > p:first-of-type::first-line {
  font-variant: small-caps;
  letter-spacing: 0.05em;
  font-size: 1.1em;
}
.en .main > p:first-of-type::first-letter {
  font-size: 3em;
  padding: 0.1em 0.1em 0 0;
  float: left;
  line-height: 1em;
  font-family: cursive;
}
/* blockquote {
  margin: 1em 0;
  padding: 0 2em;
}
.single blockquote {
  background: none;
  border-left-width: 3px;
  padding: 0 2em;
} */
.home blockquote,
.cn blockquote:not(:hover) {
  border-left-color: transparent;
}
ol,
ul {
  padding: 0 0 0 20px;
}
ol ol {
  list-style: lower-roman;
}
code[class="fullwidth"] {
  background: none;
}
.comments {
  margin-top: 1em;
}
.cn del {
  background-color: #444;
}
.cn del:hover {
  background-color: inherit;
  text-decoration: inherit;
}
.hash-note,
.side {
  background: lightyellow;
}
.hash-note a {
  color: inherit;
}
/* 注释 */
span.hash-note::before {
  content: "　# ";
}
.hide-notes .hash-note,
.unlist {
  display: none !important;
}
.side {
  padding: 1em 2em;
}
.side > p:first-child {
  margin-top: 0;
}
.side > p:last-child {
  margin-bottom: 0;
}
.bg-number,
.bg-number {
  padding: 0.1em;
}

@media only screen and (min-width: 768px) {
  /* ! */
  .nav-next {
    border-right: 1px solid;
    padding-right: 1em;
  }
  .nav-prev {
    border-left: 1px solid;
    padding-left: 1em;
  }
}

@media print {
  del,
  footer,
  .nav-top,
  .comments {
    display: none;
  }
}

@media only screen and (min-width: 992px) {
  .has-sidenotes .main,
  .has-sidenotes .fullwidth {
    margin-left: 0;
  }
  .side-right {
    float: right;
    clear: right;
    background: none;
    padding: 0 0 1em 0;
    width: calc(var(--body-width) - var(--text-width) - 2.5rem * 2 - 2rem);
    margin-right: calc(var(--text-width) + 2.5rem * 2 - var(--body-width));
  }
  blockquote .side-right {
    margin-right: calc(
      var(--text-width) + 2.5rem * 2 - var(--body-width) - 2rem
    );
  }
}
</style>

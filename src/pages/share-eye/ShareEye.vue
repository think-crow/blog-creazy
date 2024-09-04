<template>
  <div>
    <div class="shengzi"><Gsap /></div>
    <div class="en">
      <div class="container">
        <div class="crop-h"></div>
        <div class="crop-v"></div>
        <div class="crop-c"></div>
        <nav class="nav-top small">
          <div class="menu">
            <span><a href="#">分类：</a></span>
            <span><a href="#" @click="fn_blog">个人日志</a></span>
            <span><a href="#" @click="fn_reference">技术</a></span>
            <span><a href="#" @click="fn_goodarticles">优选文章</a></span>
          </div>
        </nav>
        <h1 class="title">归档</h1>
        <div class="main archive" v-for="(yearData, yearIndex) in groupedData" :key="yearIndex">
            <h2>{{ yearData.year }}</h2>   
              <ul v-for="(monthData, monthIndex) in yearData.months" :key="monthIndex">
                 <!-- <h3>{{ monthData.month }}月</h3> -->
                <li v-for="(item, index) in monthData.articles" :key="index">
                  <span>{{ formatDate(item.submi_date) }}</span>
                  <router-link
                    :to="{
                      path: '/articlecontent',
                      query: {
                        _id: item._id,
                        category: category,
                      },
                    }"
                  >{{ item.title }}</router-link>
                </li>
              </ul>
       
        </div>

        <footer class="small">
          <hr />
          <span style="float: right; color: #acb3b9"
            >——— 页面样式来源：<a
              href="https://yihui.org/"
              style="text-decoration: none; color: #acb3b9"
              >谢益辉-https://yihui.org</a
            ></span
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "@/api/request.js";
import { RouterLink, RouterView } from "vue-router";
const data = ref([]);

const category = ref("all");

function fn_blog() {
  category.value = "blog_1";
}
function fn_reference() {
  category.value = "reference_2";
}
function fn_goodarticles() {
  category.value = "goodarticles_3";
}

const groupedData = ref([]);

const stopwatch = watchEffect(() => {
  if (category.value != "all") {
    postData();
  }
});

const postData = async () => {
  const response = await axios
    .get(`/api/article_data?category=${category.value}`)
    .then((res) => {
      const grouped = groupDataByYearAndMonth(res.data);
      groupedData.value = grouped;
    })
    .catch((err) => {
      console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};

const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year} ${month}/${day}`;
};

const groupDataByYearAndMonth = (articles) => {
  const grouped = [];
  articles.forEach((article) => {
    const date = new Date(parseInt(article.submi_date));
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    
    // Check if year exists in grouped array
    let yearIndex = grouped.findIndex((item) => item.year === year);
    if (yearIndex === -1) {
      grouped.push({ year: year, months: [] });
      yearIndex = grouped.length - 1;
    }
    
    // Check if month exists in year's months array
    let monthIndex = grouped[yearIndex].months.findIndex((item) => item.month === month);
    if (monthIndex === -1) {
      grouped[yearIndex].months.push({ month: month, articles: [] });
      monthIndex = grouped[yearIndex].months.length - 1;
    }
    
    grouped[yearIndex].months[monthIndex].articles.push(article);
  });
  
  return grouped;
};

document.title = "文章 - 十三分地";

onMounted(() => {
  postData();
});
</script>

<style scoped>
.shengzi {
  position: absolute;
  right: 2em;
  z-index: 999;
}

.padding-lr {
  padding: 0 2em;
}
hr {
  border-style: dashed;
  color: var(--border-color);
  /* margin-bottom: 4em; */
}

.en {
  border: 1px solid #fff;
  outline: none; /* 焦点时不显示边框 */
}

.container {
  max-width: var(--body-width);
  min-height: calc(100vh - 3em);
  /* background-color: var(--bg-body); */

  margin: 0;
  padding: 1em;
  line-height: 1.5;
  position: relative;
  display: flex;
  flex-direction: column;
  counter-reset: pageNumber;
  /* border: 1px solid red; */
}

/* header and footer areas */
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
.menu {
  text-transform: uppercase;
  /* border: 1px solid red; */
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
pre code {
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
}

/* misc elements */
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
/* 支持鼠标悬停和精确指针的设备，初logo之外的所有a链接向右下方偏移1px */
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
li {
  margin: 4px 0;
}
hr {
  border-style: dashed;
  color: var(--border-color);
}
img,
iframe,
video {
  max-width: 100%;
}
#TableOfContents {
  background-color: var(--bg-block);
  padding: 0.5em;
}
#TableOfContents > ul {
  margin: 0 auto;
}
#TableOfContents > ul > li > ul li {
  margin-right: 2em;
}
blockquote,
.toc-list,
.toc-list ul {
  border-left: 2px solid var(--border-color);
  padding-left: 1em;
}

/* ==== */

ol,
ul {
  padding: 0 0 0 20px;
}
ol ol {
  list-style: lower-roman;
}
.archive {
  max-width: none;
  width: 100%;
}
.archive > ul > li {
  list-style: none;
}
.archive > ul > li {
  display: inline-block;
  margin-right: 1em;
}
/* ==== */
.single blockquote {
  background: var(--bg-block);
  border-left-width: 5px;
  padding: 3px 1em 3px;
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
table {
  min-width: 50%;
  margin: auto;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}
table thead th {
  border-bottom: 1px solid var(--border-color);
}
th,
td {
  padding: 5px;
}
thead,
tfoot,
tr:nth-child(even),
code {
  background: var(--bg-block);
}

/* metadata */
.toc-line {
  display: flex;
  align-items: flex-end;
}
.dots {
  border-bottom: 2px dotted var(--border-color);
  margin: 0 0.5em 0.5em;
  min-width: 10rem;
  flex-grow: 1;
}
.page-num {
  counter-increment: pageNumber;
}
.page-num::before {
  content: counter(pageNumber);
}
.toc-list,
.toc-list ul {
  list-style: none;
  margin-left: 1em;
}
.toc-line,
.subtitle,
.meta-line {
  font-weight: normal;
}
.author + .date::before {
  content: " / ";
}

.toc-line > a {
  font-style: italic;
}
h1.title {
  margin: 1em 0;
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
.terms,
#TableOfContents > ul > li > ul {
  display: flex;
  flex-wrap: wrap;
}
.terms li,
.term {
  margin-left: 2em;
}
.term-cat + .term-tag::before {
  content: " · ";
}

@media (min-width: 768px) {
  .container {
    padding: 3.5em 2.5em;
  }
  .main {
    margin: auto;
    width: var(--text-width);
  }
  pre,
  table,
  .fullwidth {
    width: calc(min(100vw, var(--body-width)) - 5rem);
    margin-left: calc(50% + 2.5rem - min(100vw, var(--body-width)) / 2);
  }
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
/* 大于等于992px才生效 */
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
  }
  html,
  img,
  video,
  iframe {
    filter: invert(1);
  }
}
</style>

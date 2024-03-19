<template class="cn">
  <div class="container">
    <div class="crop-h"></div>
    <div class="crop-v"></div>
    <div class="crop-c"></div>
    <nav class="nav-top small">
      <div class="logo">
        <a href="#"><img src="#" alt="Haoshuang Ren" /></a>
      </div>
      <div class="menu">
        <span><a href="#">首页</a></span>
        <span><a href="#">首页</a></span>
        <span><a href="#">首页</a></span>
        <span><a href="#">首页</a></span>
      </div>
    </nav>
    <h1 class="title">share-eye归档</h1>
    <div class="main archive">
      <h2>2024</h2>
      <ul>
        <li>
          <span>2024-07-10</span>
          <a href="#">网站建设</a>
        </li>
        <li>
          <span>2024-07-10</span>
          <a href="#">网站建设</a>
        </li>
        <li>
          <span>2024-07-10</span>
          <a href="#">网站建设</a>
        </li>
      </ul>
    </div>
    <footer class="small"></footer>
  </div>
</template>

<script setup></script>

<style scoped>
/* @import "/src/assets/styles/xyh_css/style.css"; */
:root {
  --body-width: 992px;
  --text-width: 620px;
  --bg-body: white;
  --bg-block: #f9f9f9;
  --box-shadow: 5px 5px 5px #eee;
}
* {
  box-sizing: border-box;
}
.container {
  max-width: var(--body-width);
  min-height: calc(100vh - 3em);
  background-color: var(--bg-body);
  margin: auto;
  padding: 1em;
  line-height: 1.5;
  position: relative;
  display: flex;
  flex-direction: column;
  counter-reset: pageNumber;
}
</style>

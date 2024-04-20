<template>
  <div class="shengzi"><Gsap /></div>
  <div class="background">
    <div class="container">
      <div class="xushu">
        <h3>序言：</h3>
        <p>
          设计本页面的初想：通过这个页面可以看到我们每个人的人生各个阶段，各种经历，故事
          细想却又发现无从着手
          又想是否可以在这个页面增加登录功能，为每一个网友分配一个账号，自由控制属于他的经历故事经验及人生
          后续再想，登录不做也可：既然人物志，那么每个页面都要不一样，需要精心设计每一页内容！充分展示每个人的个性及生活！
          展示各种奇人、怪才、经历、见闻，及心得体会建议！
          为中国愤青点亮一盏光火
        </p>
        <p>
          再想，可向极简主义出发：只展示核心文字内容，去除装饰。下午在思考：既然给人们做人生参考，何不做一个问题模块：记录各个行业各个阶段遇到的问题，让最终的我们给出答案
        </p>
        <span>2024年04月09日</span>
      </div>
    </div>
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
      />
    </div>
  </div>

  <!-- <div class="comment">
    <Giscus />
  </div> -->
</template>

<script setup>
// import Giscus from "@/components/Giscus.vue";
import Giscus from "@giscus/vue";
document.title = "人物志 - 十三分地";
</script>

<style scoped>
.shengzi {
  position: absolute;
  right: 2em;
}
.comment {
  /* position: relative; */
  /* margin-top: 2em; */
  width: 80%;
  margin: 2em auto;
}
.background {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/images/rwz0.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed; /* 将背景图片固定在视口中 */
  /* background-color: #c01d1d; */
}

.container {
  width: 100%;
  height: 100%;
  background-attachment: fixed; /* 将背景图片固定在视口中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.xushu {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.04em;
  line-height: 1.6em;
  /* margin-bottom: var(--gqui-mb); */
  text-align: justify;
  font-size: calc(0.8 * var(--lem));
  text-indent: 2em;
  color: #363636;
  font-weight: 600;
  background-color: #ffffff6c;
  padding: 1em;
  box-shadow: 0 0 10px;
  border-radius: 0.5em;
}

.xushu {
  width: 50%;
  position: absolute;
  bottom: 25%;
  right: 10%;
}

@media screen and (max-width: 768px) {
  .comment {
    /* position: relative; */
    /* margin-top: 2em; */
    width: 96%;
    margin: 2em auto;
  }

  .background {
    width: 100%;
    height: 50vh;
  }

  .xushu {
    width: 50%;
    position: relative;
    bottom: 5%;
  }
}
</style>

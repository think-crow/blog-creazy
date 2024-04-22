<template>
  <!-- 头部 -->

  <div class="container">
    <div class="shengzi"><Gsap /></div>
    <div>
      <n-divider title-placement="right">
        <a href="#endpoint">回望过去</a></n-divider
      >
      <n-divider title-placement="centor">
        <a href="#future">设计人生</a></n-divider
      >
      <n-divider title-placement="left">
        <a href="#life">模拟未来</a></n-divider
      >
    </div>
    <div class="article-content">
      <div class="shuyan">
        <h4>序言：</h4>
        <p>
          <strong>初想</strong
          >：设计三个页面分别展示三种不同思维：模拟人生、设计未来、人生故事
          但在构思过程中-发现，人生故事和首页导航路由的人物志有所冲突，遂改为终之归途，又改为回望过去。
        </p>
        <p>
          1、<strong>关于模拟人生模块</strong>：自认为根据历史的生活状况、现有思维，及工作方式，和日常作息。完全可以模拟出我们一周后的大概生活！更甚者可以推测我们未来一年会在哪里（大致区域），以及以现有生活生活下去，我们最终会怎样，成为什么样的人！进而让我们有所思考反思，并规划出下一步方向
          <!-- <br />原来设想创建从出生1岁、4岁、8岁到20岁等等，提供点击选项，来模拟我们人生的每一步的选择，以至于不同的人生走向，像游戏一样
          但这需要大量分支数据，遂而后再从新构思 -->
        </p>
        <p>
          2、<strong>关于设计未来模块</strong>：本着只要按照特定的选择和生活方式学习下去，未来完全可以自我设计：我要成为什么样的人，做什么样的事情
        </p>
        <p>
          3、<strong>关于回望过去模块</strong>：最开始为最终都会走向坟墓，何不做我们没做过的事，去没去过的地方！亦或记录着我们是否按照上面的两种方式有所改变（这个模块有点犹豫不决，不清楚最终要不要展示这个功能）
        </p>
      </div>

      <h1 id="life">模拟未来</h1>
      <p>以我们现在的生活状态，完全可以模拟出我们未来会成为什么样的人！</p>
      <h1 id="future">设计人生</h1>
      <p>
        这里写大篇观点及需设计的功能：人生可以设计，人生可以规划，个人可以塑造！
      </p>
      <h1 id="endpoint">回望过去-时空坐标</h1>
      <p>
        这里写大篇观点及需设计的功能：（这里：背景20年初画的图片为背景：夜晚：点点光芒
        哨楼前一条路-通往平行空间的墓碑，两边树木阴影，左边隔离楼！） <br />
        时空坐标，可以标记历史 可以标记个人 （灵感来源于初中历史书）
      </p>
    </div>
    <div class="comment">
      <Giscus />
    </div>
    <!-- <CommonPage /> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// import CommonPage from "@/pages/design-our-life/CommonPage.vue";
import Giscus from "@/components/Giscus.vue";
document.title = "未来 - 十三分地";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.shengzi {
  position: absolute;
  right: 2em;
  z-index: 999;
}

.shuyan {
  /* border: 1px solid red; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1em;
  width: 70%;
  margin: 1em auto;
  font-size: 1.3em;
}
.container {
  box-sizing: border-box;
  background-color: #18181c;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  /* margin-bottom: 2em; */
  overflow: hidden;
}

h1 {
  font-weight: 600;
}
/* 导航栏前标 */

h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

p {
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.05em;
  line-height: 1.8em;
  margin-bottom: var(--gqui-mb);
  text-align: justify;
  font-size: calc(0.9 * var(--lem));
  text-indent: 2em;
}

a {
  text-decoration: none;
  font-size: calc(1.2 * var(--lem));
  border-bottom: 1px solid transparent;

  color: #ffffffdb;
}

a:hover {
  border-bottom: 1px solid red;
  /* color: #ffffffdb; */
}
/* 文章主体 */
.article-content {
  padding: 20px;
  background-color: #20211e;

  border-radius: 8px;
  margin: 2em auto;
  max-width: 1024px;
  color: #ffffffdb;
}
strong {
  position: relative;
  font-weight: bold;
  background: linear-gradient(
      rgba(174, 114, 35, 0.55),
      rgba(128, 147, 44, 0.85)
    )
    no-repeat left 100% / 100% 52%;
  font-style: normal;
}

.comment {
  width: 90%;
  margin: 1em auto;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 600;
    /* font-size: var(--r-font-md); */
  }
  /* 导航栏前标 */

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  /* 文章主体 */
  .article-content {
    padding: 1em;
    background-color: #20211e;

    border-radius: 8px;
    margin: 3em auto;
    max-width: 1024px;
    color: #ffffffdb;
  }
  .shuyan {
    /* border: 1px solid red; */
    padding: 0 em;
    width: 90%;
    margin: 1em auto;
    font-size: 1.3em;
  }
}
</style>

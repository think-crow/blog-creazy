<template>
  <div class="container">
    <div class="first-eyes">
      <div class="article">
        <h1 class="title">你好，表示热烈欢迎</h1>

        <div class="content">
          <p>
            本网站的初衷<br />
            一、为千千万万个向我一样迷茫、生活所迫的同龄人一个指引
            （是一个发言和寻找方法的地方）<br />
            二、展示自己个人成长的一个过程
            、想以此形成一个规模，每个人都有自己的专栏。
            通过一个网站展示我们的一生。同时也给大多数我们同以前的自己一个指引<br />
          </p>
        </div>
      </div>
      <div class="zhuangshi1"></div>
      <div class="zhuangshi2"></div>
    </div>
    <div class="zhuye">
      <div class="mokuai">
        <ul class="xuanxiang">
          <li class="items"><a @click="goToFramework(1)">#1人物志</a></li>
          <li class="items"><a @click="goToFramework(2)">#2文章记录分享</a></li>
          <li class="items"><a @click="goToFramework(3)">#3他的前半半生</a></li>
          <li class="items"><a @click="goToFramework(4)">#4模拟未来</a></li>
          <!-- <li class="items">
            <button @click="goToFramework(1)">#1故事</button>
          </li>
          <li class="items">
            <button @click="goToFramework(2)">#2文章分享记录</button>
          </li>
          <li class="items">
            <button @click="goToFramework(3)">#3他的前半半生</button>
          </li>
          <li class="items">
            <button @click="goToFramework(4)">#4模拟未来</button>
          
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToFramework = (id) => {
  if (id === 1) router.push("/LifeStory");
  if (id === 2) router.push("/ShareEye");
  if (id === 3) router.push("/LifeI");
  if (id === 4) router.push("/DesignOurLife");
};

// document.querySelector(".first-eyes").addEventListener("click", function () {
//   this.classList.add("clicked");
// });
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

:root {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

@font-face {
  font-family: "fontHS";
  src: url("@/assets/fonts/SanJiXingShuJianTi-2.ttf");
}

.article {
  /* float: left; */
  background-color: red;
}

.description {
  margin-top: 0;
}

/* 首页背景和文字样式 */
.first-eyes {
  /* 设置绝对定位，不占用文档流，以防翻转平移后不会遮挡下个页面，以至于点击不了 */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #121212;
  color: #fff;
  letter-spacing: 8px;
  font-weight: 700;
  text-align: center;
  animation: yincang 0.8s linear 1s 1 forwards;
  /* 装饰溢出隐藏 */
  overflow: hidden;
  /* display: none; */
}

.first-eyes h1 {
  /* 将元素从文档流中取出，并相对于其最近的非 static 定位祖先元素进行定位。 */
  position: absolute;
  /* 定义了元素距离其最近的非 static 定位祖先元素的上边缘的距离为其容器高度的40%。 */
  top: 40%;
  left: 50%;
  /* 将元素向左上方移动，使其在水平和垂直方向上都居中。translate() 函数的第一个参数
-50% 表示将元素向左移动其自身宽度的一半，第二个参数 -50% 表示将元素向上
移动其自身高度的一半。 */
  transform: translate(-50%, -50%);
}

.first-eyes p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 定义翻转动画 */
@keyframes yincang {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: translateY(-100%);
  }
}

/* .first-eyes.clicked {
  animation: none;
  transform: translateY(-100%);
} */

/* 首页左侧方框装饰 */
.zhuangshi1 {
  position: fixed;
  top: 30em;
  left: -100px;
  bottom: 0;
  content: "";
  width: 400px;
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  transform: rotate(20deg);
  /* background-color: red; */
}
/* 首页右侧方框装饰 */
.zhuangshi2 {
  position: fixed;
  top: -150px;
  right: -50px;
  bottom: 0;
  content: "";
  width: 400px;
  height: 600px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  -o-transform: rotate(-30deg);
  transform: rotate(-30deg);
  /* background-color: red; */
}

.zhuye {
  display: flex;
  position: absolute;

  /* 页面全屏 */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bg1.jpg");
}

.mokuai {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  width: 100%;
  font-size: 5em;
  line-height: 2em;
}

.xuanxiang {
  list-style: none;
}
.mokuai a {
  color: #fff;
  text-decoration: none;
  cursor: pointer; /* 添加光标样式为指针 */
  pointer-events: auto; /* 启用指针事件 */
  font-family: fontHS;
  border-bottom: 1px solid transparent; /* 初始时设置下边框透明 */
  transition: border-color 0.3s; /* 添加过渡效果 */
  border-radius: 0.2em;
}

.mokuai a:hover {
  border-bottom-color: #fff; /* 鼠标经过时显示下边框颜色 */
}
</style>

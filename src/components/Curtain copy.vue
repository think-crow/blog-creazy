<template>
  <div ref="container" @click="startAnimation">
    <div
      class="first-eyes"
      :class="{  'your-extra-class': isShown1 }"
    >
      <div class="article">
        <div class="preface">
          <h1 class="title">你好，表示热烈欢迎 !</h1>
          <h3>&&初衷</h3>
          <p class="myp">
            一、希望能为千千万万个向他一样迷茫、生活所迫的同龄人一个引领
            （是一个发言和寻找自己的地方）也希望能找到他的引领 !<br /><br />
          </p>
          <p class="myp">
            二、展示他成长的一个过程及所见所想
            、希望可以通过一个网站展示他或他们的一生，供同路人一个参考！像是传记、小屋、日记、随笔。
            <br />
            <br />
          </p>
          <p class="myp">建议：电脑 + 谷歌浏览器访问！</p>
          <p style="color: red; float: right" class="prompt">
            提示：点击显示菜单
          </p>
        </div>
      </div>
      <div class="zhuangshi1"></div>
      <div class="zhuangshi2"></div>
    </div>
  </div>
</template>

<!-- <script setup>
import { useRouter } from "vue-router";
import { ref, onBeforeUnmount  } from "vue";

const router = useRouter();
// const isShown = ref(false);
const container = ref(null);
const initialIsShown1 = localStorage.getItem('isShown1') ? JSON.parse(localStorage.getItem('isShown1')) : false;
const isShown1 = ref(initialIsShown1);

// 如果 localStorage 中没有 isShown1，则将其设置为 false
if (!localStorage.getItem('isShown1')) {
  localStorage.setItem('isShown1', JSON.stringify(false));
}

// 开始动画并更新 localStorage
function startAnimation() {
  isShown1.value = true;

  // 更新 localStorage 中的值为 true
  localStorage.setItem('isShown1', JSON.stringify(isShown1.value));
}
//window.onunload 事件会在页面或浏览器窗口被关闭时触发，包括刷新页面、点击链接跳转到其他页面以及关闭浏览器窗口等情况。使用该事件时，可以确保在用户离开页面时执行相应的清理操作。

//window.onbeforeunload 事件则会在用户尝试离开当前页面时触发，例如关闭浏览器窗口、刷新页面或者导航到其他网页时。这个事件通常用于提示用户是否确定要离开当前页面，因此在这个事件中执行的代码会在提示框弹出前执行，但并不会阻止页面的卸载过程。
// 使用 onBeforeUnmount 钩子，在页面即将销毁时执行清除操作
window.onbeforeunload = function() {
  localStorage.removeItem('isShown1');
}; -->
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

/* 首页背景和文字样式 */
.first-eyes {
  /* 设置绝对定位，不占用文档流，以防翻转平移后不会遮挡下个页面，以至于点击不了 */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #121212;
  color: #ffffffd8;

  /* 装饰溢出隐藏 */
  overflow: hidden;
  /* display: none; */
}

.your-extra-class {
  animation: yincang 0.2s ease-in 0s 1 forwards;
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

.first-eyes .myp {
  /* white-space: pre-wrap; */
  /* word-break: break-all; */
  letter-spacing: 0.1em;
  /* border: 1px solid red; */
  line-height: 1.6em;
  text-indent: 2em;
  font-size: 1.1em;
  font-weight: 100;
}

.article {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: red; */
  /* border: 1px solid red; */
  z-index: 9;
}
.preface {
  /* border: 1px solid red; */
  width: 70%;
  margin: 0 auto;
  margin-top: 10%;
}

.preface h1 {
  font-size: 1.8em;
}

.preface h1,
h3 {
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.9em;
}

.preface h3 {
  color: #f7f3f3a3;
  font-weight: 100;
}

@media screen and (max-width: 768px) {
  .first-eyes .myp {
    /* white-space: pre-wrap; */
    /* word-break: break-all; */
    letter-spacing: 0.1em;
    /* border: 1px solid red; */
    line-height: 1.6em;
    text-indent: 2em;
    font-size: 0.9em;
  }

  .article {
    /* position: absolute; */
    /* width: 100%;
    height: 100%; */
    /* background-color: red; */
    /* border: 1px solid red; */
    z-index: 1;
  }
  .preface {
    /* border: 1px solid red; */
    width: 86%;
    margin: 0 auto;
    margin-top: 6em;
  }

  .preface h1,
  h3 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.9em;
  }

  .preface h3 {
    color: #f7f3f3a3;
    font-weight: 100;
    font-size: 0.9em;
  }

  .prompt {
    margin-top: 10%;
    font-size: 0.88em;
  }
}

/* 首页左侧方框装饰 */
.zhuangshi1 {
  position: fixed;
  top: 30em;
  left: -100px;
  bottom: 0;
  content: "";
  width: 400px;
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.059);
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
  /* background-color: black; */
}

.hide {
  display: none;
}
</style>

<template>
  <div ref="container" @click="startAnimation">
    <div
      class="first-eyes"
      :class="{ hide: isShown, 'your-extra-class': isShown1 }"
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
            、最终达成以下效果:通过一个网站可以展示他或他们的一生,像是传记、小屋、日记\容纳所有:
            any! 所有被时光冲淡的回忆,在这个地方都不会忘记!
            <br />
            <br />
          </p>
          <p class="myp">
            备注：评论功能采用的是Github上的开源组件，因Github为国外网站，评论加载、账号注册会有些延迟，当你看到页面下面一片空白，那就是评论加载失败了。
          </p>
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

<script setup>
import { useRouter } from "vue-router";
import { ref, defineProps } from "vue";

const router = useRouter();
const isShown = ref(false);
const isShown1 = ref(false);
const container = ref(null);

function startAnimation() {
  isShown1.value = true;
}
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

<template>
  <div>
    <n-carousel show-arrow autoplay:false>
      <div>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <div class="carousel-text">
          <h1>只有疯狂到认为自己能改变世界的人，才能真正改变世界</h1>
          <h5>
            The people who are crazy enough to think they can change the world
            are the ones who do.——Apple’s “Think Different” commercial，1997
          </h5>
        </div>
      </div>
      <div>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <div class="carousel-text">
          <h1>一定要记住: 就算我们是平凡人，也可以活的很精彩！</h1>
          <h5>
            Be sure to remember Even if we are ordinary people, we can still
            live a wonderful life!
          </h5>
        </div>
      </div>
      <div>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
        <div class="carousel-text">
          <h1>良好的生活习惯是自信的来源！</h1>
          <h5>Good lifestyle habits are the source of confidence!</h5>
        </div>
      </div>
      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button type="button" class="custom-arrow--left" @click="prev">
            <n-icon><ArrowBack /></n-icon>
          </button>
          <button type="button" class="custom-arrow--right" @click="next">
            <n-icon><ArrowForward /></n-icon>
          </button>
        </div>
      </template>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
  </div>
  <div class="container">
    <p>
      关于他：27岁的年龄坎上，致力于有一个自己的网站，奈何所学知识有限，先行模仿，再行个性。见谅！
    </p>
    <h1>他是谁</h1>
    <p>
      他今年27岁，零09个月，又13天，毕业于诸葛故地，左道中人，梦想完成十之七八、人生大事只剩挣钱和结婚-加一个的话就是塑造，崇尚自由、疯狂的河南许昌人
    </p>
    <p>
      制作网站原因：四处奔波一个五年之后，在而立之年的这个节点上发现人生仍然碌碌无为，从而应景了一句话：年岁渐长，年岁渐长，
      而立之年，年至而立，不见长！他想以此经历，给千千万万个曾经自己一样的人一个引领，不至于局限于市井生活中、举步不前！<strong
        >希望能给你们有所帮助</strong
      >
      ！
    </p>

    <h1>短唠</h1>
    <p>
      思来想去，列举经历-太枯燥。直接写感想-太空浮；不想像传记那样-总记录着辉煌不显坎坷；另一个原因，他在想：未来的某一天，是否每个人都有自己的一个网站/或有这样一个平台，
      通过这个网站可以看到他的一生。在哪一个阶段，应该做那些事情，可以避免哪些情况，最优做法，等等...！
    </p>
    <!-- 突然发现很幼稚 -->
    <!-- <p>2011年/地点：河南许昌/椹涧一中/初三</p> 
         <div class="view">这个是一个折叠的地方，展示我们在这个阶段最应该做什么</div>
         <p>2012年/地点：河南许昌/椹涧一中/初三</p> 
         <div class="view">这个是一个折叠的地方，展示我们在这个阶段最应该做什么</div>
         <p>2013年/地点：河南许昌/县二高/高一</p> 
         <div class="view">这个是一个折叠的地方，展示我们在这个阶段最应该做什么</div>
         <p>2014年/地点：河南许昌/县二高/高二</p> 
         <div class="view">这个是一个折叠的地方，展示我们在这个阶段最应该做什么</div>
         <p>2015年/地点：河南许昌/县二高/高三</p> 
         <div class="view">这个是一个折叠的地方，展示我们在这个阶段最应该做什么</div> -->

    <!-- 建议框和侵染图片 -->
    <div class="cate">
      <div class="cateImg">
        <div class="catName">
          <ul class="post-categories">
            <li>
              <a href="#" rel="category">自由女神</a>
            </li>
          </ul>
        </div>
        <div class="cateImgCover"></div>
      </div>

      <div class="jianyi">
        <div class="jianyi-jianjie">
          <p>
            Google上搜了更多的个人博客之后！发现自己的行1为是多么幼稚！故-此征集广大建议！希望他以什么方式分享、分享什么或你们想知道什么-都可以在下面可提交！作者会每条认真查看
          </p>
        </div>
        <div class="jianyi-text">
          <n-space vertical>
            <n-input
              v-model:value="postDataInput"
              type="textarea"
              placeholder="Go-Go-Go!..."
              name="jianyi"
              maxlength="3000"
              show-count
              clearable
              minlength="10"
            />
          </n-space>
          <n-button @click="postData">
            <Icon size="28">
              <IosArrowRoundForward />
            </Icon>
            提交
          </n-button>
        </div>
      </div>
    </div>
    <h2>
      你好陌生人，承蒙遇见，三生有幸，祝你永远年轻，永远热泪盈眶，终身美丽。
    </h2>
    <span style="float: right; color: #acb3b9"
      >———— 相言于：<a
        href="https://gordonsky.cn/about"
        style="text-decoration: none; color: #acb3b9"
        >https://gordonsky.cn/about</a
      ></span
    >

    <h1 style="margin-top: 180px">联系他</h1>
    <p>
      天马行空的想法；疯狂的人；疯狂的事；无论想说什么都可以发邮箱：rhaoshuang@163.com
      欢迎！
    </p>
  </div>

  <div>
    <h1>评论</h1>
    <div style="width: 100%; height: 100px; border: 1px solid red">
      <p>功能待开发</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
// 轮播图箭头图标
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";

// import { NConfigProvider, NThemeEditor, darkTheme } from "naive-ui";

// 按钮图标        // 这个图标很影响加载速度
import { IosArrowRoundForward } from "@vicons/ionicons4";
import { Icon } from "@vicons/utils";
/**
 * @type {import('naive-ui').GlobalThemeOverrides}
 */

const value = ref(null);

const postDataInput = ref("");

const postData = async () => {
  const data = { jianyi: postDataInput.value };
  const response = await axios
    .post("http://127.0.0.1:3000/api/suggests", data)
    .then((res) => {
      console.log(postDataInput.value);
      alert("已提交成功！");
      postDataInput.value = "";
    })
    .catch((err) => {
      // console.error(err);
      alert("出现错误，麻烦小主留言告知！");
    });
};

// const postData = async () => {
//   const response = await axios
//     .get("http://127.0.0.1:3000/api/1234")
//     .then((res) => {
//       console.log(res.data);
//       alert("get 请求成功！返回数据：");
//     })
//     .catch((err) => {
//       console.error(err);
//       alert("get 请求失败，请查看控制台错误信息！");
//     });
// };
</script>

<style scoped>
.container {
  margin: 3rem auto;
  padding: 30px 50px 50px 50px;
  max-width: 850px;
  /* overflow: hidden; */
  background: #20211e;
  height: 100%;

  -webkit-font-smoothing: antialiased;
  --gqui-fs: 16px;
  --gqui-mb: 24px;
  --gqui-fs: 16px;
  color: var(--bc13);
  font-size: var(--gqui-fs);
  text-rendering: optimizeLegibility;
  position: relative;
  /* z-index: 0; */
}
@media screen and (max-width: 768px) {
  ::v-deep(.n-card__content) {
    padding: 24px 0;
  }

  .container {
    padding: 40px;
  }
}

/* 轮播图 */
.carousel-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  margin: 0;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
/* 轮播图文字 */
.carousel-text {
  position: absolute;
  bottom: 8%;
  left: 3%; /* 将文字水平居中 */
  /* transform: translateX(-50%); 水平居中文本 */

  color: #acb393; /* 设置文字颜色为白色 */
  padding: 10px; /* 设置内边距 */
  width: 70%;
}
.carousel-text h1 {
  color: #fff;
  font-size: calc(2.4 * var(--lem));
  font-weight: 600;
  /* text-indent: em; */
  margin-bottom: 0;
}
.carousel-text h5 {
  font-size: calc(0.85 * var(--lem));
  margin-top: 0.4rem;
  padding-left: 4px;
  display: flex;
  align-items: center;
  color: var(--bc10);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 300;
}

/* .carousel-text h2 {
  color: #fff;
  font-size: calc(27px + 0.6vw);
} */

/* 文章主体 */
p {
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.05em;
  line-height: 1.8em;
  margin-bottom: var(--gqui-mb);
  text-align: justify;
}

h1 {
  margin-top: 60px;
}

@media screen and (max-width: 768px) {
  p {
    white-space: pre-wrap;
    word-break: break-word;
    letter-spacing: 0.05em;
    line-height: 1.8em;
    margin-bottom: var(--gqui-mb);
    text-align: justify;

    /* border: 0; */
    /* font: inherit; */
    font-size: 100%;
    /* vertical-align: baseline; */
  }
  h1 {
    font-size: 1.8em;
    margin-top: var(--gqui-h2-pt);
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: var(--gqui-mb);
    color: var(--black);
    word-break: break-word;
  }
}

.container strong {
  position: relative;
  font-weight: bold;
  background: linear-gradient(
      rgba(174, 114, 35, 0.55),
      rgba(128, 147, 44, 0.85)
    )
    no-repeat left 100% / 100% 52%;
  font-style: normal;
}

.view {
  border: 1px solid rgb(196, 148, 148);
  margin-top: -20px;
}

/* 侵染图 */
.cate {
  width: 100%;
  height: 300px;
  position: relative;
  transition: 0.3s;
  /* min-width: 840px; */
}
.cateImg {
  width: 40%;
  height: 80%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  float: left;
  border-radius: 5px;
  position: relative;
  /* background-color: white; */
  fill: red;
  background-image: url("@/assets/images/bka.svg"),
    url("@/assets/images/ziyou.png");
}

.catName {
  width: auto;
  position: absolute;
  left: 0;
  top: -1%;
  background-image: url("@/assets/images/word.svg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 18px 30px 18px 30px;
  opacity: 0.95;
}
ul {
  list-style-type: disc;
}
.catName ul {
  padding: 0;
  margin: 0;
}
.catName ul li {
  list-style: none;
}

/* 用户代理样式表 */
li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
}

.cateImgCover {
  width: 4%;
  height: 100%;
  background-color: #f1f1f1;
  float: right;
  left: 2%;
}

/* a */

.jianyi {
  position: relative;
  left: 30px;
}
.n-button {
  float: right;
  margin-top: 0.9em;
}

.n-input {
  background-color: #373835;
}

@media screen and (max-width: 800px) {
  .cateImg {
    width: 100%;
    height: 56vw;
    display: inline-block;
    background-size: cover;
    position: relative;
    border-radius: 0;
  }
  .cate {
    width: 100%;
    height: 620px;
  }
  .jianyi {
    left: 0;
  }
}
</style>

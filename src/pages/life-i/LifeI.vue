<template>
  <div class="container">
    <div class="shengzi"><Gsap /></div>
    <!-- 导航栏 -->
    <nav class="navbar">
      <!-- 一个文字logo -->
      <title>MyLife</title>
      <a href="#" class="logo">MyLife</a>
      <!-- 菜单 -->
      <ul class="nav-links">
        <li>
          <router-link
            to="/lifei/aboutlifei"
            @click="setActive(0)"
            :class="{ active: activeIndex === 0 }"
            >关于他</router-link
          >
        </li>
        <li>
          <router-link
            to="/lifei/books"
            @click="setActive(1)"
            :class="{ active: activeIndex === 1 }"
            >书影</router-link
          >
        </li>
        <li>
          <router-link
            to="/lifei/poetry"
            @click="setActive(2)"
            :class="{ active: activeIndex === 2 }"
            >诗歌</router-link
          >
        </li>
        <li>
          <router-link
            to="/lifei/talks"
            @click="setActive(3)"
            :class="{ active: activeIndex === 3 }"
            >话题</router-link
          >
        </li>
        <!-- <div style="margin: 15px">
          <el-button @click="showClick">show</el-button>
        </div> -->
        <!-- 子菜单的多选项 -->
        <li>
          <el-dropdown ref="dropdown1">
            <span class="el-dropdown-link" trigger="contextmenu">
              <a
                href="#"
                :class="{
                  active:
                    activeIndex === 4 || activeIndex === 5 || activeIndex === 6,
                }"
                >扩展</a
              >
            </span>
            <template #dropdown>
              <el-dropdown-menu class="drop-menu">
                <router-link
                  to="/lifei/photoalbum"
                  @click="setActive(4)"
                  :class="{ active: activeIndex === 4 }"
                  >相簿</router-link
                >
                <router-link
                  to="/lifei/notepaper"
                  @click="setActive(5)"
                  :class="{ active: activeIndex === 5 }"
                  >便笺</router-link
                >
                <router-link
                  to="/lifei/discover"
                  @click="setActive(6)"
                  :class="{ active: activeIndex === 6 }"
                  >发现</router-link
                >

                <!-- <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item> -->
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li>
          <router-link
            to="/lifei/village"
            @click="setActive(7)"
            :class="{ active: activeIndex === 7 }"
            >他的家乡</router-link
          >
        </li>
      </ul>
      <!-- 汉堡包按钮 -->
      <div class="burger open" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </nav>
    <!-- 主页内容 -->
    <n-config-provider :theme="darkTheme">
      <div class="container">
        <n-card>
          <!-- 页面显示 -->

          <router-view></router-view>
          <!-- <n-divider /> -->
          <!-- 底部名言 -->
          <div class="mingyan">
            <div class="light-green">
              <p>
                深情似海，问相逢初度，是何年纪？依约而今还记取，不是前生夙世。放学花前，题诗石上，春水园亭里。逢君一笑，人间无此欢喜。
              </p>

              <p>
                无奈苍狗看云，红羊数劫，惘惘休提起。客气渐多真气少，汩没心灵何已。千古声名，百年担负，事事违初意。心头阁住，儿时那种情味。
              </p>
            </div>
          </div>

          <n-divider />

          <template #footer>
            <div class="footer-content">
              <div class="footer-section">
                <p>
                  域名信息:www.rwany.net <br />
                  版权所有 © 2024 十三分地
                </p>
              </div>
              <div class="footer-section">
                <p>
                  <a
                    href="https://beian.miit.gov.cn "
                    target="_blank"
                    class="ssfd"
                    >豫ICP备2024063533号</a
                  >
                </p>
              </div>
              <div class="footer-section">
                <div class="tubiao">
                  <p>
                    <img
                      src="../../../public/备案图标.png"
                      class="w-full"
                      style="width: 16px"
                    />
                    <a
                      href="https://beian.mps.gov.cn/#/query/webSearch?code=41100002000508"
                      rel="noreferrer"
                      target="_blank"
                      >豫公网安备41100002000508</a
                    >
                  </p>
                </div>
              </div>
              <div class="footer-section">
                <p>邮箱：rwany.net@gmail.com</p>
              </div>
            </div>
          </template>
        </n-card>
      </div>
    </n-config-provider>
    <!-- 返回顶部 -->
    <n-back-top :right="18" />
  </div>
</template>

<script setup>
import { ref } from "vue";
// 暗亮主题切换
import { darkTheme } from "naive-ui";
// import { ElConfigProvider, ElThemeEditor } from "element-plus";
// ,
// import { NConfigProvider, NThemeEditor } from "naive-ui";

const activeIndex = ref(parseInt(localStorage.getItem("activeIndex")) || 0);

const setActive = (index) => {
  activeIndex.value = index;
  localStorage.setItem("activeIndex", index.toString());
};
</script>

<style scoped>
.container {
  position: relative;
}

.shengzi {
  position: absolute;
  right: 2em;
  z-index: 100;
}

.n-divider {
  /* border: px solid red; */
  height: 0.005em;
  width: 95%;
  background-color: hsl(210, 8%, 70%);
  /* align-items: center; */
  margin-left: auto;
  margin-right: auto;
}

.n-card {
  border-radius: 0;
}
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #1f1f1f;
}

/* 导航栏------------ */
.navbar {
  /* 设置导航栏flex垂直居中 高 背景 阴影 内边距 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #1f1f1f;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  /* padding: 0 36px 0 50px; */
  padding: 0 3% 0 4%;
}

/* 标志样式 */
.logo {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

/* 导航链接样式 */
.nav-links {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.nav-links li {
  list-style: none;
}

.nav-links li:nth-last-child(2) {
  margin: auto;
}
/* 用了element-ui就影响布局 这里弄了半天 */
.nav-links li:nth-last-child(2) a {
  padding: 15.4px 10.4px;
}
.nav-links li:nth-last-child(2) a:hover {
  border: none;
}

.nav-links li a {
  display: block;
  font-size: 18px;
  color: #f2f2f2;
  text-decoration: none;
  padding: 10px 10px;
  /* border-radius: 5px; */
  transition: background-color 0.2s ease-in-out;
  border-bottom: 3px solid transparent;
  margin: 0 10px;
}

/* .nav-links li a:hover {
  border-bottom: 1px solid #f2f2f2;
} */

/* 汉堡菜单样式 */
.burger {
  display: none;
  cursor: pointer;
}

.burger .line {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
}
.open:hover {
  transition: transform 1s ease-in-out;
  transform: rotate(360deg);
}
/* =====container======== */
.container {
  /* margin-top: 10px; */
  padding: 0;
  margin: 0;

  /* border: 1px solid red; */
  min-height: 480px;
}
.n-card {
  position: relative;
}

/* 底部名言 */
.mingyan {
  font-family: palatino linotype, book antiqua, Palatino, FandolKai, serif;
}

.light-green {
  height: 140px;

  font-size: calc(8px + 1vw);
  color: var(--aphorisms-color);

  padding: 4em 2em 1.4em 2em;
  color: #938e8e;
}

::v-deep(.n-card__content) {
  padding: 0;
  /* padding-top: 0 !important; */
}
::v-deep(.n-card > .n-card__content:first-child) {
  padding-top: 0;
  /* padding-left: 1em; */
}

/* .n-card__content {
  padding: 0;
} */
/* 页脚信息 */
footer {
  background-color: #333;
  color: var(--main-title-color);
  padding: 20px;
  text-align: center;
}

.ssfd {
  text-decoration: none;
  color: #ffffffd1;
  font-weight: 100;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  /* border-top: 1px solid hsl(210, 8%, 70%); */
  /* margin-top: 3em; */
  margin-bottom: 4em;
  flex-wrap: wrap;
}

.footer-section {
  width: 220px;
}
.footer-section a {
  color: #d5d5d6;
  text-decoration: none;
  /* text-align: center; */
}
.footer-section a:hover {
  border-bottom: 1px dashed black;
  color: #f2f2f3;
}

.footer-section img {
  /* margin: 0; */
  margin-right: 4px;
  vertical-align: sub;
}
.tubiao p {
  float: left;
}
h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* element-ui下拉菜单 */
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

::v-deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
.el-dropdown-menu {
  background-color: #1f1f1f;
  padding: 2em 0.5em;
}

.el-dropdown-menu a {
  color: #fff;
  font-size: calc(0.9 * var(--lem));

  text-decoration: none;
  border-bottom: 1px solid transparent;

  padding: 0.5em 0.5em;
  margin: 0 0.5em;
  font-family: Arial, Helvetica, sans-serif;
}
.el-dropdown-menu a:hover {
  border-bottom: 1px solid #f2f2f2;
}

/* 导航栏跟踪下划线 */
.active {
  border-bottom: 1px solid #f2f2f2 !important;
}

p {
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.05em;
  line-height: 1.8em;
  margin-bottom: var(--gqui-mb);
  text-align: justify;
}

/* 响应式样式 */
@media screen and (max-width: 768px) {
  /* 导航栏------------ */
  .navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center; /* 垂直居中 */
    height: 4em;
    background-color: #1f1f1f; /* 添加背景颜色 */
    box-shadow: 0px 2px 5px rgb(6, 213, 116);
  }

  /* 标志样式 */
  .logo {
    display: none;
  }

  /* 导航链接样式 */
  .nav-links {
    display: flex;
    margin: 0;
    padding: 0; /* 添加 padding 以去除列表默认的内边距 */
    list-style: none; /* 去除列表样式 */
  }

  .nav-links li {
    padding: 0;
    display: flex;
    align-items: center; /* 垂直居中 */
  }

  /* 导航链接样式调整 */
  .nav-links li a {
    font-size: 1.1em;
    color: #ffffff;
    text-decoration: none;
    padding: 0.5em 0.5em; /* 调整链接内边距 */
    transition: background-color 0.2s ease-in-out;
    border-bottom: 1px solid transparent;
    margin: 0;
    /* border: 1px solid red; */
  }

  /* 调整倒数第二个导航链接样式 */
  .nav-links li:nth-last-child(2) a {
    /* border: none; 去除边框 */
  }

  .nav-links li a:hover {
    background-color: rgba(255, 255, 255, 0.1); /* 添加 hover 背景色 */
  }
  .burger {
    display: none;
  }

  /* ======================= */
  ::v-deep(.n-card__content) {
    padding: 12px 0;
  }

  .footer-content {
    flex-direction: row-reverse;
    display: flex;
  }

  .footer-section {
    /* border: 1px solid red; */
    flex-grow: 1;
  }

  .footer-section p {
    margin: 0;
    font-size: 0.8em;
  }

  h3 {
    margin-bottom: 0;
    margin-top: 1em;
    font-size: 1.2em;
    font-weight: 200;
  }
  /* 选中第一个 .footer-section 元素 */
  .footer-section:nth-child(1) {
    display: none;
  }

  /* 选中第四个 .footer-section 元素 */
  .footer-section:nth-child(4) {
    display: none;
  }

  .footer-section:nth-child(2) {
    /* display: none; */
    width: 40%;
  }

  .n-divider {
    margin-bottom: 0;
  }

  /* element-ui下拉菜单 */

  .el-dropdown-menu {
    background-color: #1f1f1f;
    padding: 1em 0.5em;
  }

  .el-dropdown-menu a {
    font-size: calc(1.1 * var(--lem));
    padding: 0.5em 0.3em;
  }
}
</style>

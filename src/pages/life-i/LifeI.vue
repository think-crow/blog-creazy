<template>
  <div>
    <!-- 导航栏 -->
    <nav class="navbar">
      <!-- 一个文字logo -->
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
              <el-dropdown-menu>
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
          <n-divider />
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
                <h3>域名信息</h3>
                <p>www.yourdomain.com</p>
              </div>
              <div class="footer-section">
                <h3>备案号</h3>
                <p>粤ICP备12345678号</p>
              </div>
              <div class="footer-section">
                <h3>法律及版权声明</h3>
                <p>版权所有 © 2024 您的公司名称</p>
                <p>未经许可，不得转载</p>
              </div>
              <div class="footer-section">
                <h3>联系方式</h3>
                <p>联系电话：010-12345678</p>
                <p>邮箱：info@yourdomain.com</p>
              </div>
            </div>
          </template>
        </n-card>
      </div>
    </n-config-provider>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 暗亮主题切换
import { NConfigProvider, NThemeEditor, darkTheme } from "naive-ui";

// 轮播图
// 调整主题变量

function toggleMenu() {
  // 可以在这里编写打开/关闭菜单的逻辑
}

const activeIndex = ref(null);

const setActive = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped>
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
  /* padding: 10px 20px; */
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
  border-bottom: 1px solid transparent;
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
/* 响应式样式 */
@media screen and (max-width: 768px) {
  .navbar {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .nav-links {
    width: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
  }
  .nav-links li a {
    color: #f2f2f2;
  }
  .nav-links li {
    margin: 10px 0;
  }

  .nav-links li a {
    padding: 10px;
    text-align: center;
  }

  .burger {
    display: block;
  }
}

/* =====container======== */
.container {
  /* margin-top: 10px; */
  padding: 0;
  margin: 0;
}
.n-card {
  /* margin-top: -6px; */

  /* padding: 0px; */
  /* box-sizing: border-box; */
  position: relative;
}

/* 底部名言 */
.mingyan {
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  font-family: palatino linotype, book antiqua, Palatino, FandolKai, serif;
}

.light-green {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 140px;

  font-size: calc(8px + 1vw);
  color: var(--aphorisms-color);
  /* font-weight: 600; */
  padding: 0.8em 2em;
  color: #938e8e;
  /* text-indent: 2em; */
}

@media screen and (max-width: 768px) {
  ::v-deep(.n-card__content) {
    padding: 24px 0;
  }
  .mingyan {
    display: none;
  }
}
::v-deep(.n-card__content) {
  padding: 0;
  /* padding-top: 0 !important; */
}
::v-deep(.n-card > .n-card__content:first-child) {
  padding-top: 0;
  /* padding-left: 1em; */
}

::v-deep(.n-card__content h1) {
  margin-left: 1em;
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

.footer-content {
  display: flex;
  justify-content: space-around;
}

.footer-section {
  width: 200px;
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
  font-size: calc(3px + 1vw);

  text-decoration: none;
  border-bottom: 1px solid transparent;
  /* border-radius: 5px; */
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
</style>

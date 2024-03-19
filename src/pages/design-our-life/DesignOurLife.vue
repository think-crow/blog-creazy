<template>
  <n-theme-editor>
    <!-- 这里放置您的应用程序内容 -->

    <n-config-provider :theme-overrides="themeOverrides" :theme="darkTheme">
      <!-- 头部 -->
      <div>
        <n-card>
          <n-tabs
            default-value="oasis"
            justify-content="end"
            type="line"
            size="large"
            class="custom-tabs"
            :bar-width="79"
          >
            <template #prefix>
              <div class="nav-prefix">Design-life</div>
            </template>
            <n-tab-pane name="oasis" tab="模拟未来"> <CommonPage /></n-tab-pane>
            <n-tab-pane name="the beatles" tab="设计人生"
              ><h1>
                其实每个人都一样，唯一是我们不同的是：思想和思维
                <br />
                假设思想可以复制、传承，我们是否保留不同派别的顶级维思：以供人们学习！
              </h1>
              <CommonPage />
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="百味历经"
              ><CommonPage />
            </n-tab-pane>
          </n-tabs>
          <!-- 底部名言 -->
          <n-grid cols="4" item-responsive>
            <n-grid-item span="0 400:1 600:2 800:3">
              <div class="light-green">
                <!-- 这里可以设计为服务器数据 每次请求都不一样！！！ -->
                这个世界就是一个草台班子！ 独一无二！
              </div>
            </n-grid-item>
            <n-grid-item>
              <div class="green">
                <div class="roy1"></div>
                <div class="roy2">
                  <div>爽</div>
                </div>
              </div>
            </n-grid-item>
          </n-grid>

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
          <template #action> #action </template>
        </n-card>
      </div>
    </n-config-provider>
  </n-theme-editor>
</template>

<script setup>
import { ref } from "vue";

import { NConfigProvider, NThemeEditor, darkTheme } from "naive-ui";

import CommonPage from "@/pages/design-our-life/CommonPage.vue";

/**
 * @type {import('naive-ui').GlobalThemeOverrides}
 */

const size = ref("medium");

const themeOverrides = {
  Tabs: {
    tabFontSizeLarge: "1.8em",
    tabPaddingLargeLine: "16px",
    // panePaddingLarge: "12px 0 0 12px",
  },
  Card: {
    paddingMedium: "0px 0px 0px 0px",
  },
  // ...
};

const components = {
  NThemeEditor,
};

const currentTheme = ref({
  // 初始主题配置
  // 例如：{ color: 'blue', size: 'small' }
  color: "blue",
  size: "small",
});
</script>

<style scoped>
/* 导航栏前标 */
.nav-prefix {
  font-size: 32px;
  font-weight: bold;
  color: var(--main-title-color);
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 28px;
}

.theme-override {
  --tabs-line-color: rgb(212, 1, 1); /* 设置线的颜色为红色 */
}

/* 如果需要调整线条的高度 */
/* .n-tab-pane {
  border-top: 3px solid rgb(35, 214, 118);
  margin: 10px;
} */

/* ::v-deep(.n-tabs-nav--line-type) {
  border: 3px solid rgb(253, 3, 3);
}

::v-deep(.n-tabs-nav--top) {
  border: 3px solid rgb(35, 214, 118);
} */
/* 标题下划线 */
::v-deep(.n-tabs-nav) {
  border-bottom: 3px solid rgb(128, 134, 131);
  padding-top: 12px;
}

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

/* 文章主体 */
.article-content {
  padding: 20px;
  background-color: #20211e;

  border-radius: 8px;
  margin: 0 auto;
  max-width: 1024px;
}

.header-section {
  margin-bottom: 20px;
}

.main-title {
  font-size: 36px;
  color: var(--main-title-color);
  margin-bottom: 10px;
}

.meta-info {
  font-size: 14px;
  color: #888;
}

.content-body {
  font-size: 18px;
  color: #d9dde0;
  letter-spacing: 0.05em;
  line-height: 1.8em;
}

.description {
  font-style: italic;
}

.sub-title {
  font-size: 24px;
  color: var(--main-title-color);
  margin-top: 30px;
}

.footer-section {
  margin-top: 40px;
}

.highlighted-article h4 {
  font-size: 20px;
  color: var(--main-title-color);
  margin-bottom: 10px;
}

.highlighted-article ul {
  list-style: disc;
  padding-left: 20px;
}

/* 底部名言 */
.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 50px;
  color: var(--aphorisms-color);
  font-weight: 600;
  padding: 60px;
}
.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  perspective: 800px; /* 设置透视效果 */
}

/* 页脚爽字logo */
.roy1 {
  border: 8px solid var(--aphorisms-logo-color);
  width: 240px;
  height: 200px;
  margin-top: 100px;
  transform: rotateY(-25deg);
}
@font-face {
  font-family: "fontHS";
  src: url("@/assets/fonts/SanJiXingShuJianTi-2.ttf");
}
.roy2 {
  width: 260px;
  height: 180px;
  position: absolute;
  margin-top: 96px;
  background-color: var(--body-background-color);
  font-size: 96px;
  line-height: 180px;
  text-align: center;
  color: var(--aphorisms-logo-color);
  font-family: "fontHS";
}
</style>

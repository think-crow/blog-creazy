<template>
  <n-space vertical>
    <n-tabs
      :key="type + placement"
      :type="type"
      animated
      :placement="placement"
      :style="
        placement === 'left' || placement === 'right'
          ? { height: '100%' }
          : undefined
      "
      size="large"
    >
      <!-- 工具收集---------------------------------------怕找不到 -->
      <n-tab-pane name="oasis" tab="工具收集"
        ><div class="container">
          <n-card title="软件">
            <template #header-extra>
              <n-input v-model:value="value" type="text" placeholder="搜索" />
              <n-button
                ><Icon size="24"><IosSearch /></Icon
              ></n-button>
            </template>
            <n-table :bordered="false" :single-line="false" size="large">
              <thead>
                <tr>
                  <th>排序</th>
                  <th>工具名字</th>
                  <th>描述</th>
                  <th>下载量</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button size="large">下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Typora破解版</td>
                  <td>
                    Typora 一款Markdown 编辑器和阅读器Typora 一款Markdown
                    编辑器和阅读器Typora 一款Markdown 编辑器和阅读器
                  </td>
                  <td>148</td>
                  <td><n-button>下载</n-button></td>
                </tr>
              </tbody>
            </n-table>
          </n-card>

          <div class="fenye">
            <n-pagination v-model:page="page" :page-count="100" />
          </div>
        </div>
      </n-tab-pane>
      <!-- 其它链接---------------------------------------怕找不到 -->
      <n-tab-pane name="the beatles" tab="其它链接">
        <div class="container">
          <n-card title="个人blog" class="tuijian-blog"
            ><ul>
              <li>
                <a href="https://gxzv.com/" target="_blank">甘小蔗</a>
                <p>：暗黑风格的网站，参考了他不少内容</p>
              </li>
              <li>
                <a href="https://yihui.org/">谢益辉</a>
                <p>：学历很高、网站界面舒适、很多文章挺有见解</p>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li></ul
          ></n-card>
          <n-card title="工具网站" class="card-margin">
            <div class="gongju-link-box">
              <h3>前端</h3>
              <n-table :bordered="true" :single-line="false">
                <tbody>
                  <tr>
                    <td>
                      <a href="">W3Cschool</a>
                      <p>：初学者指南</p>
                    </td>
                    <td>
                      <a href="">CSS</a>
                      <p>：这个还没有发现</p>
                    </td>
                    <td><a href="">JavaScript</a></td>
                    <td><a href="">Vue3</a></td>
                  </tr>
                </tbody>
              </n-table>
              <h3>图片</h3>
              <n-table :bordered="true" :single-line="false">
                <tbody>
                  <tr>
                    <td>
                      <a href="">W3Cschool</a>
                      <p>：初学者指南</p>
                    </td>
                    <td>CSS</td>
                    <td>JavaScript</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </n-table>
            </div>
          </n-card>
        </div>
      </n-tab-pane>
      <!-- 关于本站---------------------------------------怕找不到 -->
      <n-tab-pane name="jay chou" tab="关于本站">
        <div class="about-me">
          <h1>初衷</h1>
          <p>
            深情似海，问相逢初度②，是何年纪？依约而今还记取③，不是前生夙世④。放学花前，题诗石上，春水园亭里。逢君一笑，人间无此欢喜⑤。
            无奈苍狗看云⑥，红羊数劫⑦，惘惘休提起！客气渐多真气少⑧，汩没心灵何已⑨？千古声名，百年担负，事事违初意。心头阁住⑩，儿时那种情味。
          </p>
          <h1>规划</h1>
          <p>
            1、文章模块、模拟未来模块后续完善！个人空间划分出来！<br />
            2、待本博客成熟后、规划一套通用版本！包含：个性修改、完整部署视频、代码注释-看能否商用
          </p>
          <p></p>
          <h1>技术栈</h1>
          <p>
            前端：HTML、CSS、JS、Vue3、axios、Naive-ui、Element-ui!<br />
            后台：啊噢！后台还没写，不过会用到：node.js、Express、<br />
            向开源致敬！
          </p>
          <h1>关于作者</h1>
          <p>前序：所有书籍、和个性化网站都有神化效果！请以平常心浏览！</p>
          <h>他的想法：</h>
          <p>
            1、掌握入门编程语言很重要<br />
            2、英文很重要：它能赋予我们英文阅读和交流的能力！！！！！！这个为自己未来的一个目标（解释：有人说现在各种翻译工具软件代替了学习英语：这就好比你到哪里都要背个包，用的话还要打开，成年累月会耽误多长时间不可想象！原著的阅读能传达很多思想，翻译只是机器理解！这也是自己小时候的一个梦想，从高三把高中英语单词背了六遍开始！！）
          </p>
          <p><a href="">查看详细简历</a></p>
          <h1></h1></div
      ></n-tab-pane>
    </n-tabs>
  </n-space>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@vicons/utils";
import { IosSearch } from "@vicons/ionicons4";
// 标签页
const placement = ref(null);
const type = ref("bar");
// 输入框
const value = ref(null);
// 分页
const page = ref(2);

const handleResize = () => {
  if (window.matchMedia("(max-width: 564px)").matches) {
    placement.value = "top";
  } else {
    placement.value = "left";
  }
};

// 监听窗口尺寸变化
window.addEventListener("resize", handleResize);

// 监听窗口尺寸变化并设置 placement 值
watchEffect(() => {
  handleResize();
});

// 在组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* <!-- 工具收集---------------------------------------怕找不到 --> */
.container {
  margin: 0 1em;
  /* height: 100%; */
  /* font-size: ; */
}
.n-card {
  height: 100%;
  max-width: 99%;
}

.n-input {
  margin-right: 1em;
}
.n-button {
  min-width: calc(2em + 1vw);
}
.fenye {
  margin-top: 3em;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
}

/* transition: top .2s var(--n-bezier), max-height .2s var(--n-bezier), background-color .3s var(--n-bezier);
--n-bezier: cubic-bezier(.4, 0, .2, 1); */

/* <!-- 其他链接---------------------------------------怕找不到 --> */
a,
p {
  font-family: Palatino, palatino linotype, palatino lt std, latin modern roman,
    "source han serif cn", serif;
}

.card-padding {
  padding: 0 1em;
}
.card-margin {
  margin-top: 1em;
}

a {
  text-decoration: none;
  border-bottom: 1px dashed;
  color: #f1f1f1;
  font-size: calc(0.55rem + 0.7vw);
}
p {
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.05em;
  /* line-height: 1.8em; */
  /* margin-bottom: var(--gqui-mb); */
  text-align: justify;
  display: inline-block;
  font-size: calc(0.6em + 0.7vw);
}

.tuijian-blog ul {
  margin: 0 auto;
  /* border: 1px solid red; */
  width: 700px;
}

.tuijian-blog ul li {
  margin: 0.5em 0;
  /* border: 1px solid red; */
}

.gongju-link-box {
  margin: 0 3em;
  margin-bottom: 1.5em;
}
/* <!-- 关于本站---------------------------------------怕找不到 --> */
.about-me {
  padding: 1em 2em;
  width: 90%;
}

h1 {
  margin-top: 1.4em;
}

.about-me h1:first-child {
  margin-top: 0;
}
</style>

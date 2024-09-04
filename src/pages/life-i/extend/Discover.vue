<template>
  <n-space vertical>
    <n-tabs
      :key="type + placement"
      :type="type"
      animated
      :placement="placement"
      :style="
        placement === 'left' || placement === 'right'
          ? { height: '50%' }
          : undefined
      "
      :size="size"
    >
      <!-- 工具收集---------------------------------------怕找不到 -->
      <n-tab-pane name="oasis" tab="工具收集"
        ><div class="container">
          <n-card>
            <h2 class="font-title">软件</h2>
            <!-- <template #header-extra>
              <n-input
                v-model:value="value"
                type="text"
                placeholder="搜索功能暂未开发"
              />
              <n-button
                ><Icon size="24"><IosSearch /></Icon
              ></n-button>
            </template> -->
            <n-table :bordered="false" :single-line="false" :size="size">
              <thead>
                <tr>
                  <th class="r-default">排序</th>
                  <th>工具名字</th>
                  <th>描述</th>
                  <th >下载地址</th>
                </tr>
              </thead>
              <tbody>
                <!-- 这里处理不了获取数据的异步更新，暂时搁置 -->
                <tr v-for="(item, index) in data.tools" :key="index">
                  <td class="r-default">{{ index }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.description }}</td>

                  <td style="text-align: center;"><a :href="item.url" target="_blank">下载</a></td>
                </tr>
              </tbody>
            </n-table>
            <p style="padding: 1em">
              备注：上述所有软件都在Gitee上存储，此处仅保存为下载链接！
            </p>
          </n-card>

          <!-- <div class="fenye">
            <n-pagination v-model:page="page" :page-count="100" />
          </div> -->
        </div>
      </n-tab-pane>
      <!-- 其它链接---------------------------------------怕找不到 -->
      <n-tab-pane name="the beatles" tab="其它链接">
        <div class="container">
          <n-card class="tuijian-blog">
            <h2 class="font-title">个人站点推荐：</h2>
            <ul>
              <li v-for="(item, index) in data.bolg" :key="index">
                <p class="miaoshu">
                  <a :href="item.url" target="_blank">{{ item.name }}:</a>
                  {{ item.description }}
                </p>
              </li>
            </ul></n-card
          >
          <n-card class="card-margin">
            <h2 class="font-title">其他网站：</h2>
            <div class="gongju-link-box">
              <!-- <h3>前端</h3> -->
              <div class="outher-link">
                <a href="#">暂无</a><a href="#"></a><a href="#"></a>
              </div>
            </div>
          </n-card>
        </div>
      </n-tab-pane>
      <!-- <n-tab-pane name="jay chou" tab="关于本站"></n-tab-pane> -->
      <!-- 关于本站---------------------------------------怕找不到 -->
      <n-tab-pane name="jay chou" tab="关于本站" class="about-me-main">
        <div class="about-me">
          <h1>初衷</h1>
          <p>
            以此经历帮助更多曾经像自己一样的人！核心价值观：偏狂，正向，博纳，奋进，追寻！
          </p>
          <h1>规划</h1>
          <p>
            1、人物志、模拟未来模块后续完善！个人空间划分出来！<br />
            <!-- 2、待本博客成熟后、规划一套通用版本！包含：个性修改、完整部署视频、代码注释-看能否商用，（2属于个人规划！） -->
            2、收集建议、迭代2.0版本
          </p>

          <h1>技术栈</h1>
          <p>
            前端：HTML、CSS、JS、Vue3、Axios、Naive-ui、Element-ui、Giscus!<br />
            后台：Node.js、Express、Mongodb、Nginx、WangEditor<br />
            本站开发日志：<a
              href="https://www.rwany.net/uploads/Building-blog-logs.txt"
              target="_blank"
              >前端日志</a
            >、
            <a
              href="https://www.rwany.net/uploads/Building-server-logs.txt"
              target="_blank"
              >后端日志</a
            >
            <br />
            向老歪大哥、甘小蔗致谢！ <br />
            向开源致敬！
          </p>

          <h1>关于作者</h1>
          <p>
            <br />

            时而阳光、时而黑暗；踌躇满志与沮丧失落共存，犹豫不决又向往武断立行！
            自认不同又自认普通的一个人！
            
          </p>
          <p>
            <!-- <a href="#">简历：暂无</a> -->
          </p>
          <h1></h1>
          <p>终序：所有书籍、和个性化网站都有神化效果！请以平常心浏览！</p>
        </div>
        <div class="contact-me">
          <n-card
            ><h3>1、联系站主</h3>
            <p>邮箱：</p>
            <p>rhaoshuang@163.com</p>
            <p>GitHub：think-crow</p>
            <h3>2、博主微信：</h3>
            <p>微信：</p>
            <p>net-rwany</p>
            <h3>网站</h3>
            <p>版本:v1.0 日期:2024年4月19日</p>
            <!-- <div>
              <n-space vertical>
                <n-input type="textarea" placeholder="Go-Go!..." />
              </n-space>
              <n-button style="float: right; margin-top: 0.5em">
                提交
              </n-button>
            </div> -->
          </n-card>
        </div>
      </n-tab-pane>
    </n-tabs>
  </n-space>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { IosSearch } from "@vicons/ionicons4";
import { ref, onMounted, onUnmounted, watchEffect, toRefs } from "vue";
import axios from "axios";

const placement = ref(null); // 标签页
const size = ref("large"); // 标签页
const type = ref("bar");
const value = ref(null); // 输入框
const page = ref(2); // 分页

// watchEffect(() => {
//   console.log(data.value?.tools);
// });
const data = reactive({
  tools: [],
  bolg: [],
});
const postData = async () => {
  const response = await axios
    .get(`/api/links`)
    .then((res) => {
      const { tools, bolg } = res.data;
      // 更新 data 对象的属性值
      Object.assign(data, { tools, bolg });
      // console.log(data);
    })
    .catch((err) => {
      // console.error(err);
      alert("get 请求失败，请查看控制台错误信息！");
    });
};
// console.log(data.value);
onMounted(async () => {
  postData();
});

const handleResize = () => {
  if (window.matchMedia("(max-width: 564px)").matches) {
    placement.value = "top";
    size.value = "small";
    type.value = "card";
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
// 页面跟着滚轮

document.title = "发现 - 十三分地";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* <!-- 工具收集---------------------------------------怕找不到 --> */
.container {
  margin: 0 1em;
}
.n-card {
  height: 100%;
  /* max-width: 99%; */
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

/* <!-- 其他链接---------------------------------------怕找不到 --> */
.font-title {
  margin: 1em 0 0.4em 1em;
}
.miaoshu {
  /* border: 1px solid red; */
  /* letter-spacing: 0em; */
}

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
  /* border: 1px solid red; */
}

a:hover {
  position: relative;
  inset: 1px 0 0 1px;

  border-bottom: 1px dashed red;
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

.font-title > p {
  letter-spacing: 0em;
}
.tuijian-blog ul {
  /* margin: 0 auto; */
  /* border: 1px solid red; */
  display: flex;
  /* width: 700px; */
  /* justify-content: flex-start; */
  flex-wrap: wrap;
  padding: 0 2em 1em 2em;
  list-style: none;
}
.tuijian-blog ul li {
  margin: 0.5em 0;
  width: calc(50% - 1em);
  /* border: 1px solid red; */
}

/* 选中奇数位置的 li 元素 */
.tuijian-blog ul li:nth-child(odd) {
  align-self: flex-start; /* 奇数位置的 li 左边对齐为第一列 */
  border-top: 1px solid rgba(255, 0, 0, 0.422);
}

/* 选中偶数位置的 li 元素 */
.tuijian-blog ul li:nth-child(even) {
  margin-left: 2em; /* 设置偶数位置 li 左边距离第一列的距离 */
  border-top: 1px solid rgba(255, 0, 0, 0.403);
}

.gongju-link-box {
  margin: 0 3em;
  margin-bottom: 1.5em;
}
/* <!-- 关于本站---------------------------------------怕找不到 --> */
.about-me-main {
  display: flex;
}
.about-me {
  padding: 1em 2em;
  width: 70%;
  /* border: 1px solid red; */
}
.contact-me {
  width: 30%;
  /* height: 100%; */
  /* border: 1px solid red; */
  padding: 2em 1em 0em 1em;
}

.contact-me .n-card {
  height: 51%;

  padding: 0.5em 1.2em 0em 1.2em;
  box-shadow: 0 0 2px;
  /* border: 1px solid red; */
}
h1,
h3 {
  margin-top: 1.4em;
}

.about-me h1:first-child {
  margin-top: 0;
}

@media screen and (max-width: 768px) {
  /* <!-- 工具收集---------------------------------------怕找不到 --> */
  .container {
    margin: 0 0.8em;
  }
  .container .n-card {
    border: none;
    border-bottom: 1px solid rgba(165, 157, 157, 0.256);
  }
  .r-default {
    display: none;
  }
  .font-title {
    font-size: calc(1.6 * var(--lem));
    margin: 0.2em 0 0em 0.8em;
  }
  .n-table {
    font-size: calc(1 * var(--lem));
  }
  /* <!-- 其他链接---------------------------------------怕找不到 --> */
  .gongju-link-box {
    margin: 0 1em;
    margin-bottom: 1.5em;
  }

  .gongju-link-box h3 {
    display: none;
  }
  .card-margin {
    margin-top: 1em;
  }

  /* <!-- 关于本站---------------------------------------怕找不到 --> */
  .contact-me {
    display: none;
  }

  .about-me {
    padding: 1em 1.6em;
    width: 100%;
    /* border: 1px solid red; */
  }

  .about-me h1 {
    font-size: calc(2 * var(--lem));
  }
}

.outher-link a {
  margin-right: 1em;
}
</style>

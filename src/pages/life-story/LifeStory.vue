<template>
  <h1>
    设计本页面的初想：通过这个页面可以看到我们每个人的人生各个阶段，各种经历，故事
    细想却又发现无从着手
    又想是否可以在这个页面增加登录功能，为每一个网友分配一个账号，自由控制属于他的经历故事经验及人生
    后续再想，既然人物志，每个页面都要不一样，你们出内容样式，我帮忙精心设计每一页！充分展示每个人的个性及生活！
    展示各种奇人、怪才、经历、见闻，及心得体会建议！为中国愤青点亮一盏光火
  </h1>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button type="primary" color="black" class="borderless-btn">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item> <a href="#">hahha</a> </el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>
</template>

<script lang="ts" setup>
import "element-plus/es/components/message/style/css";
import { ElMessage } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert("button click");
};
</script>

<style scoped>
a {
  color: #fff;
  font-size: 27px;
  padding: 1em;
  text-decoration: none;
}
a:hover {
  border-bottom: 1px solid red;
}
.el-button {
  padding: 2em;
  font-size: 17px;
}
.el-dropdown-menu {
  background-color: black;
  color: #fff;

  padding: 12px;
}
.el-dropdown-item {
  font-size: 30px;
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>

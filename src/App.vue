<template>
  <div class="App">
    <!-- #region -->
    <!-- <post></post> -->
    <!-- <login></login> -->
    <!-- <Echarts></Echarts>
    你好啊
    <a href="">111111</a>
    <el-row>
      <el-button disabled>默认按钮</el-button>
    </el-row> -->
    <!-- #endregion -->

    <div class="active">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import login from "./Views/login";
// import post from "./Views/post";
import { setRootHtmlFontSize } from "./assets/setRootHtmlFontSize"; //响应式rem
// import Echarts from "./template/Echarts.vue";//图表
export default {
  name: "App",
  components: {
    // Echarts,
    // login,
    // post,
  },
  mounted() {
    setRootHtmlFontSize();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        setRootHtmlFontSize();
      });
    });
  },
};
</script>

<style>
/* 全局css样式 */
@import "./assets/css/comon.css";

.App {
  width: 100%;

  font-size: 0.2rem;
}
.active {
  width: 100%;
}
</style>
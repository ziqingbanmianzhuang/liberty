<template>
  <div>
    <!-- 头部区域 -->
    <header>
      <div class="text">
        <h4>THIS IS YOUR HISTORY OF ACCESS</h4>
        <div class="words">
          <span class="left"> L </span>
          <span> IBERTY </span>
          <span class="right">
            <h1>2022</h1>
          </span>
        </div>
        <br />
        <div style="color: aqua">
          <strong
            >__I wonder if there's anything you'd like.Take a look__</strong
          >
        </div>
      </div>
    </header>
    <!-- 头部区域 -->
    <div class="top">
      <h1>——————<strong>浏 览 历 史</strong>——————</h1>
    </div>
    <!-- 主体部分 -->
    <div class="main">
      <br />
      <!-- 选择区域 -->
      <div class="select">
        <el-row>
          <el-button type="primary" plain>删除所选</el-button>
          <el-button type="success" plain>全选</el-button>
          <el-button type="warning" plain>全部删除</el-button>
        </el-row>
      </div>
      <!-- 浏览区域 -->
      <div class="viewed">
        <span v-show="!list.length" class="noView">
          <el-empty description="空空如也"></el-empty>
          <h3>
            还没有任何浏览记录噢！<br />快去
            <router-link to="/parttime"> 兼职</router-link>
            看看吧
          </h3>
        </span>
        <el-collapse accordion>
          <ul class="viewList" v-show="list.length">
            <li class="view" v-for="(item, index) in list" :key="index">
              <!-- 头像 -->
              <el-collapse-item>
                <template slot="title">
                  <i class="iconfont icon-tuisongxiaoxi"></i
                  ><strong>{{ item.title }}</strong>
                  <span class="times">{{ item.time }}</span>
                  <span class="delet" @click="del(item.id)"
                    ><i class="el-icon-delete"></i
                  ></span>
                </template>
                <div class="view_top1">
                  <!-- 头像 -->
                  <div class="view_top">
                    <div>
                      <a href="#"><div class="touxiang"></div></a>
                    </div>
                    <div class="name">{{ item.username }}</div>
                  </div>
                  <div class="information">
                    <span>地区：{{ item.area }}</span>
                    <span>兼职类型：{{ item.type }}</span>
                    <span>热度：{{ item.hot }}</span>
                    <span>参加人数：{{ item.join }}</span>
                    <span>招聘状态：{{ item.stats }}</span>
                    <span>工资：{{ item.salary }}</span>
                    <span class="tail">交易类型：{{ item.trad }}</span>
                    &nbsp;&nbsp;
                  </div>
                </div>
                <div class="view_top2">
                  <div>发布详情：{{ item.information }} &nbsp;&nbsp;</div>
                  <div>
                    <a href="#"><el-tag>立即申请</el-tag></a>
                  </div>
                </div>
              </el-collapse-item>
            </li>
          </ul>
        </el-collapse>
      </div>
    </div>
    <!-- 底部区域 -->
    <footer>
      <div class="footer_top">
        <div class="footer_left">
          <h1>Warm-tip Cards</h1>
          <br />
          When you click the drop-down arrow<br />
          in the home page,the corresponding<br />
          post will be recorded in your<br />
          browsing history.If you do not want <br />
          it to exist in your browsing history.<br />
          please select clear record in the<br />
          "Browsing history" in "my"
          <br />
          <router-link class="normal" to="/home">回到首页</router-link>
          <br />
          It's all over the place.
        </div>

        <div class="footer_right">
          <div class="f1"></div>
          <div class="f2"></div>
        </div>
      </div>
      <br />
    </footer>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      activeName: ["1"],
      list: [
        {
          id: "001",
          title: "小程序ui设计",
          username: "张三",
          area: "成都",
          type: "ui设计",
          hot: "1200浏览量",
          join: "20人",
          stats: "2/20",
          salary: "$2000",
          trad: "入账",
          time: "2022-05-01 12:00",
          information: "啦啦啦",
        },
        {
          id: "002",
          title: "小程序ui设计",
          username: "张三",
          area: "成都",
          type: "ui设计",
          hot: "1200浏览量",
          join: "20人",
          stats: "2/20",
          salary: "$2000",
          trad: "入账",
          time: "2022-05-01 12:00",
          information:
            "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
        },
        {
          id: "003",
          title: "小程序ui设计",
          username: "张三",
          area: "成都",
          type: "ui设计",
          hot: "1200浏览量",
          join: "20人",
          stats: "2/20",
          salary: "$2000",
          trad: "入账",
          time: "2022-05-01 12:00",
          information:
            "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
        },
        {
          id: "004",
          title: "小程序ui设计",
          username: "张三",
          area: "成都",
          type: "ui设计",
          hot: "1200浏览量",
          join: "20人",
          stats: "2/20",
          salary: "$2000",
          trad: "入账",
          time: "2022-05-01 12:00",
          information:
            "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
        },
        {
          id: "005",
          title: "小程序ui设计",
          username: "张三",
          area: "成都",
          type: "ui设计",
          hot: "1200浏览量",
          join: "20人",
          stats: "2/20",
          salary: "$2000",
          trad: "入账",
          time: "2022-05-01 12:00",
          information:
            "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
        },
      ],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    del(id) {
      console.log(id);
      this.list = this.list.filter((item) => {
        return item.id != id;
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.normal {
  color: #fff;
  font-size: 1rem;
}
.footer_box {
  margin-bottom: 3rem;
}
header {
  position: relative;
  width: 100%;
  height: 20rem;
  background: url("../assets/imgs/home6.jpeg") no-repeat;
  background-size: cover;
}
header .text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 40%;
  height: 70%;
  margin: auto;
  text-align: center;
  /* background-color: goldenrod;  */
  color: white;
}
.words {
  display: flex;
  width: 100%;
  height: 40%;
  font-size: 5rem;
  font-style: italic;
  /* background-color: pink;   */
}

.left {
  color: aqua;
}
.right {
  width: 50%;
  /* margin-left: 20px; */
  /* margin-right: 10px; */
  color: gray;
  /* background-color: pink; */
}
.main {
  width: 100%;
  /* height: 60rem; */
  /* background-color:gray; */
}
.top {
  width: 100%;
  height: 6rem;
  text-align: center;
}
.select {
  width: 100%;
  height: 6rem;
  border-bottom: 3px solid white;
  /* background-color: #fff; */
}
.viewed {
  width: 100%;
}
.noView {
  width: 100%;
  text-align: center;
}
.view {
  display: inline-block;
  width: 100%;
  height: 8rem;
  font-size: 2rem;
  z-index: 1;
  /* background-color: #fff; */
}
.demo-type {
  margin: auto;
}
.con {
  display: inline-block;
  width: 60%;
  height: 100%;
  /* text-align: center; */
  /* background-color: pink; */
}
.icon-tuisongxiaoxi:before {
  font-size: 2rem;
  content: "\e672";
}
.el-collapse-item__header {
  /* height: 4rem; */
  font-size: 2rem;
}
.times {
  margin-left: 65%;
}
.delet {
  margin-left: 10px;
}
.el-button--danger {
  background-color: gray;
}
.view_top1 {
  width: 100%;
  text-align: left;
  position: relative;
}
.view_top2 {
  width: 100%;
  text-align: left;
  margin-top: 3rem;
}
.view_top {
  width: 10%;
  /* text-align: center; */
  /* background-color: pink; */
}
.touxiang {
  /* display: inline-block; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: pink;
}
.name {
  /* position: absolute;
  top: 26%;
  left: 5%; */
  /* display: inline-block; */
  width: 10rem;
  height: 40%;
  font-size: 2rem;
}
.information {
  position: absolute;
  top: -10%;
  left: 5%;
  width: 70%;
  height: 100%;
  /* background-color: pink; */
  font-size: 1.5rem;
}
.information span {
  margin-left: 5%;
  display: inline-block;
  width: 15%;
  /* background-color: pink; */
  margin-top: 2%;
  border-right: 2px solid black;
}
.information .tail {
  border-right: 2px solid #fff;
}
.view_top2 {
  font-size: 1.5rem;
  margin-left: 14rem;
}
.view_top2 div {
  width: 70%;
  text-align: center;
}
footer {
  width: 100%;
  height: 40rem;
  background: url("../assets/imgs/home9.webp") no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 1.5rem;
}
.footer_top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
}
.footer_left {
  /* background-color: pink; */
  width: 50%;
  height: 100%;
  font-size: 1.5rem;
  /* padding-top: 8rem; */
  margin-top: 10px;
  /* margin-left: 5rem; */
  text-align: center;
}
.footer_right {
  position: relative;
  width: 50%;
  height: 100%;
  /* background-color: blue; */
}
.f1 {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 40%;
  height: 75%;
  background-color: aqua;
  border-radius: 3rem;
  opacity: 0.5;
  z-index: 1;
}
.f2 {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 20%;
  height: 50%;
  background-color: aqua;
  border-radius: 3rem;
  opacity: 0.5;
  z-index: 2;
}
.icon-tubiao_tijiao:before {
  font-size: 2rem;
  content: "\e63b";
}
</style>
<template>
  <ul>
    <li v-for="(item, index) in postLists" :key="index">
      <div class="left">
        <div class="profile">
          <span class="iconfont icon-tubiao31"></span>
        </div>
        <div class="phone">{{ item.phone }}</div>
        <div class="join">
          <span class="iconfont icon-tubiao331"></span>
          参加人数：{{ item.joinpeople }}人
        </div>
      </div>
      <div class="right">
        <div class="titlenav">
          <span>{{ item.userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp; </span>
          <span> 标签分类：{{ item.tips }} &nbsp; &nbsp; |&nbsp; &nbsp; </span>
          <span>浏览量：{{ item.hot }}&nbsp; &nbsp; |&nbsp; &nbsp; </span>
          <span>发布时间：{{ item.postTime }}</span>
        </div>
        <div class="bodynav">
          <span
            >BasicInfo:&nbsp;&nbsp;交易类型:{{ item.payType }}&nbsp;&nbsp;
          </span>
          <span>工资:${{ item.taskPays }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <span
            >预期信誉：{{ item.ExpectedPrestige }}&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <span
            >预期经验:{{
              item.ExpectedExperience
            }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <span>工作时间:{{ item.workTime }}天</span>
        </div>
        <div class="text">Views Details&nbsp;&nbsp;-></div>
        <div class="resign">
          <span class="iconfont icon-xintubiao-"></span>
          招聘人数：{{ item.needNum }}
        </div>
        <div class="address">
          <span class="iconfont icon-daohangtubiao"></span>
          {{ item.workPlace }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "postList",
  data() {
    return {
      postLists: [
        {
          phone: "",
          joinpeople: "3",
          userName: "",
          tips: "ui设计",
          hot: "109",
          postTime: "2022-12-13 12:12:12",
          payType: "",
          taskpays: "",
          ExpectedPrestige: "",
          ExpectedExperience: "",
          workTime: 0,
          needNum: 20,
          workPlace: "",
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("https://4a8179z637.uicp.fun/user/getAllPost/0?UID=123128347239")
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
ul {
  scrollbar-width: none; /* firefox */

  -ms-overflow-style: none; /* IE 10+ */
}
li {
  height: 20rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
  border-left: 6px solid #cc9966;
  display: flex;
}
li .left {
  padding-top: 1rem;
  flex: 1;
  position: relative;
}
li .left .profile {
  height: 10rem;
}
li .left .profile .icon-tubiao31 {
  color: #fff;
  font-size: 10rem;
}
li .left .phone {
  color: #cc9966;
}
li .left .join {
  margin-top: 7rem;
  color: #fff;
}
li .left .join .iconfont {
  color: #ff6633;
}
li .right {
  text-align-last: left;
  position: relative;
  padding-top: 1rem;
  flex: 4;
}
li .right .titlenav {
  color: #fff;
  font-size: 0.8rem;
}
li .right .titlenav span:nth-child(1) {
  font-size: 2rem;
}
li .right .titlenav span:nth-child(4) {
  color: #cc9966;
}
li .right .bodynav {
  color: #fff;
  padding-top: 1rem;
  font-size: 0.8rem;
}
li .right .bodynav span:nth-child(5) {
  color: #993366;
}
li .right .text {
  color: #ffcc33;
  padding-top: 4.6rem;
  font-size: 1.6rem;
}
li .right .resign {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
}
li .right .resign .iconfont {
  color: #00cc00;
}
li .right .address {
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
}
li .right .address .iconfont {
  color: #66cccc;
}
</style>
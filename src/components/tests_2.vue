<template>
  <div>
    <div>
      <div class="head_box">
        <div class="hello">
          <div class="userimg"><img src="" alt="" /></div>
          <div class="username">你好,{{ userName }}</div>
        </div>
        <div class="address">--------------------{{ address }}</div>
        <div class="lastest_time">您上次登陆的时间为:{{ last_login_time }}</div>
        <div class="update_class">
          <router-link class="normal" to="/home">首页</router-link>
          &nbsp; &nbsp; >&nbsp;&nbsp;
          <a class="normal propt" url="#" @click="uesrMake">用户进阶</a>
          &nbsp; &nbsp; >&nbsp;&nbsp;
          <router-link class="normal" to="/userinfo">企业认证</router-link>
        </div>
      </div>
      <router-link to="viewshistory">历史记录</router-link>
      <div class="main_box">
        <ul>
          <li>
            <div class="left">个人简介</div>
            <div class="right">{{ user_brief }}</div>
          </li>
          <li>
            <div class="left">个人账户</div>
            <div class="right">
              <router-link class="right_" to="/userinfo">查看信息</router-link>
            </div>
          </li>
          <li>
            <div class="left">用户等级</div>
            <div class="right">
              <span class="grade">信誉等级：{{ prestige_grade }}</span>
              <span class="grade_show">({{ prestige_grade_show }})</span>
              <span class="grade">经验等级：{{ experience_grade }}</span>
              <span class="grade_show">({{ experience_grade_show }})</span>
            </div>
          </li>
          <li>
            <div class="left">浏览记录</div>
            <div class="right">
              <router-link class="right_" to="viewshistory"
                >访问历史</router-link
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="side_main_box">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item class="box_title" title="你发布的任务" name="1">
            <ul>
              <li>
                <div>
                  <div class="time">发布时间：{{ publishtime }}</div>
                  <div class="status">状态：{{ status }}</div>
                  <div class="info">兼职详情：{{ information }}</div>
                </div>
                <div>
                  <div class="lis">
                    <span>交易类型：{{ trade_type }}</span>
                    <span>预期信誉：{{ expected_prestige }}</span>
                    <span>预期经验：{{ expected_experience }}</span>
                    <span>工资：{{ wage }}</span>
                  </div>
                  <div class="people">
                    <span>参加人数：{{ joinpeople }}人</span
                    ><span
                      >聘用人数：{{ resignpeople }}/{{ totalpeople }}人</span
                    >
                  </div>
                  <div class="confirm">
                    <button>提前开始</button>
                    <button>招聘结束</button>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div class="time">发布时间：{{ publishtime }}</div>
                  <div class="status">状态：{{ status }}</div>
                  <div class="info">兼职详情：{{ information }}</div>
                </div>
                <div>
                  <div class="lis">
                    <span>交易类型：{{ trade_type }}</span>
                    <span>预期信誉：{{ expected_prestige }}</span>
                    <span>预期经验：{{ expected_experience }}</span>
                    <span>工资：{{ wage }}</span>
                  </div>
                  <div class="people">
                    <span>参加人数：{{ joinpeople }}人</span
                    ><span
                      >聘用人数：{{ resignpeople }}/{{ totalpeople }}人</span
                    >
                  </div>
                  <div class="confirm">
                    <button>提前开始</button>
                    <button>招聘结束</button>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div class="time">发布时间：{{ publishtime }}</div>
                  <div class="status">状态：{{ status }}</div>
                  <div class="info">兼职详情：{{ information }}</div>
                </div>
                <div>
                  <div class="lis">
                    <span>交易类型：{{ trade_type }}</span>
                    <span>预期信誉：{{ expected_prestige }}</span>
                    <span>预期经验：{{ expected_experience }}</span>
                    <span>工资：{{ wage }}</span>
                  </div>
                  <div class="people">
                    <span>参加人数：{{ joinpeople }}人</span
                    ><span
                      >聘用人数：{{ resignpeople }}/{{ totalpeople }}人</span
                    >
                  </div>
                  <div class="confirm">
                    <button>提前开始</button>
                    <button>招聘结束</button>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div class="time">发布时间：{{ publishtime }}</div>
                  <div class="status">状态：{{ status }}</div>
                  <div class="info">兼职详情：{{ information }}</div>
                </div>
                <div>
                  <div class="lis">
                    <span>交易类型：{{ trade_type }}</span>
                    <span>预期信誉：{{ expected_prestige }}</span>
                    <span>预期经验：{{ expected_experience }}</span>
                    <span>工资：{{ wage }}</span>
                  </div>
                  <div class="people">
                    <span>参加人数：{{ joinpeople }}人</span
                    ><span
                      >聘用人数：{{ resignpeople }}/{{ totalpeople }}人</span
                    >
                  </div>
                  <div class="confirm">
                    <button>提前开始</button>
                    <button>招聘结束</button>
                  </div>
                </div>
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item class="box_title" title="您完成的成就" name="2">
            <ul>
              <li>
                <div class="achieve_head">
                  <span> 完成时间：{{ making_time }}</span>
                  <span>评价:{{ evalution }}</span>
                </div>
                <div class="part_bref">
                  <span> 标签分类：{{ tag }} </span>
                  <span>|</span>
                  <span>兼职名称：{{ parttime_name }}</span>
                </div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="achieve_footer">
                  <span> 经验值:+{{ experience }}</span>
                  <span> 信誉值：+{{ prestige }}</span>
                  <span> 酬金：￥{{ wage }}</span>
                  <span> 交易方式：{{ trade_type }} </span>
                </div>
              </li>
              <li>
                <div class="achieve_head">
                  <span> 完成时间：{{ making_time }}</span>
                  <span>评价:{{ evalution }}</span>
                </div>
                <div class="part_bref">
                  <span> 标签分类：{{ tag }} </span>
                  <span>|</span>
                  <span>兼职名称：{{ parttime_name }}</span>
                </div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="achieve_footer">
                  <span> 经验值:+{{ experience }}</span>
                  <span> 信誉值：+{{ prestige }}</span>
                  <span> 酬金：￥{{ wage }}</span>
                  <span> 交易方式：{{ trade_type }} </span>
                </div>
              </li>
              <li>
                <div class="achieve_head">
                  <span> 完成时间：{{ making_time }}</span>
                  <span>评价:{{ evalution }}</span>
                </div>
                <div class="part_bref">
                  <span> 标签分类：{{ tag }} </span>
                  <span>|</span>
                  <span>兼职名称：{{ parttime_name }}</span>
                </div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="achieve_footer">
                  <span> 经验值:+{{ experience }}</span>
                  <span> 信誉值：+{{ prestige }}</span>
                  <span> 酬金：￥{{ wage }}</span>
                  <span> 交易方式：{{ trade_type }} </span>
                </div>
              </li>
              <li>
                <div class="achieve_head">
                  <span> 完成时间：{{ making_time }}</span>
                  <span>评价:{{ evalution }}</span>
                </div>
                <div class="part_bref">
                  <span> 标签分类：{{ tag }} </span>
                  <span>|</span>
                  <span>兼职名称：{{ parttime_name }}</span>
                </div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="achieve_footer">
                  <span> 经验值:+{{ experience }}</span>
                  <span> 信誉值：+{{ prestige }}</span>
                  <span> 酬金：￥{{ wage }}</span>
                  <span> 交易方式：{{ trade_type }} </span>
                </div>
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item class="box_title" title="待完成的任务" name="3">
            <ul>
              <li>
                <div class="waitingjob_head">
                  <span>开始时间：{{ begintime }}</span>
                  <span>截止时间：{{ endtime }}</span>
                </div>
                <div class="resign_info">
                  <span>招聘状态：{{ status }}</span>
                  <span>|</span>
                  <span> 工资：{{ wage }} </span>
                  <span> | </span>
                  <span> 交易类型：{{ trade_type }} </span>
                  <span> | </span>
                  <span> 标签分类：{{ tag }} </span>
                </div>
                <div class="part_name">兼职名称：{{ parttime_name }}</div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="to_link_publisher">联系雇主：{{ phone }}</div>
              </li>
              <li>
                <div class="waitingjob_head">
                  <span>开始时间：{{ begintime }}</span>
                  <span>截止时间：{{ endtime }}</span>
                </div>
                <div class="resign_info">
                  <span>招聘状态：{{ status }}</span>
                  <span>|</span>
                  <span> 工资：{{ wage }} </span>
                  <span> | </span>
                  <span> 交易类型：{{ trade_type }} </span>
                  <span> | </span>
                  <span> 标签分类：{{ tag }} </span>
                </div>
                <div class="part_name">兼职名称：{{ parttime_name }}</div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="to_link_publisher">联系雇主：{{ phone }}</div>
              </li>
              <li>
                <div class="waitingjob_head">
                  <span>开始时间：{{ begintime }}</span>
                  <span>截止时间：{{ endtime }}</span>
                </div>
                <div class="resign_info">
                  <span>招聘状态：{{ status }}</span>
                  <span>|</span>
                  <span> 工资：{{ wage }} </span>
                  <span> | </span>
                  <span> 交易类型：{{ trade_type }} </span>
                  <span> | </span>
                  <span> 标签分类：{{ tag }} </span>
                </div>
                <div class="part_name">兼职名称：{{ parttime_name }}</div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="to_link_publisher">联系雇主：{{ phone }}</div>
              </li>
              <li>
                <div class="waitingjob_head">
                  <span>开始时间：{{ begintime }}</span>
                  <span>截止时间：{{ endtime }}</span>
                </div>
                <div class="resign_info">
                  <span>招聘状态：{{ status }}</span>
                  <span>|</span>
                  <span> 工资：{{ wage }} </span>
                  <span> | </span>
                  <span> 交易类型：{{ trade_type }} </span>
                  <span> | </span>
                  <span> 标签分类：{{ tag }} </span>
                </div>
                <div class="part_name">兼职名称：{{ parttime_name }}</div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="to_link_publisher">联系雇主：{{ phone }}</div>
              </li>
              <li>
                <div class="waitingjob_head">
                  <span>开始时间：{{ begintime }}</span>
                  <span>截止时间：{{ endtime }}</span>
                </div>
                <div class="resign_info">
                  <span>招聘状态：{{ status }}</span>
                  <span>|</span>
                  <span> 工资：{{ wage }} </span>
                  <span> | </span>
                  <span> 交易类型：{{ trade_type }} </span>
                  <span> | </span>
                  <span> 标签分类：{{ tag }} </span>
                </div>
                <div class="part_name">兼职名称：{{ parttime_name }}</div>
                <div class="part_info">兼职详情：{{ information }}</div>
                <div class="to_link_publisher">联系雇主：{{ phone }}</div>
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item class="box_title" title="未通过的申请" name="4">
            <div>
              用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
            </div>
            <div>
              结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="propt-box">
      <input type="text" placeholder="用户名" v-model="allUser.uid" />
      <input type="text" placeholder="真名" v-model="allUser.relName" />
      <input type="text" placeholder="手机" v-model="allUser.phone" />
      <input type="text" placeholder="邮箱" v-model="allUser.email" />
      <input type="text" placeholder="密码" v-model="allUser.password" />
      <input type="text" placeholder="身份证后四位" v-model="allUser.idcar" />
      <button @click="send">确定</button>
    </div>
  </div>
</template>

<script>
import { postUserMake } from "../api/postUserMake";
export default {
  name: "uesrHome",
  data() {
    return {
      activeName: "1",
      userName: "半面妆",
      address: "成都",
      last_login_time: "2022-12-12 12:12:12",
      user_brief:
        "您还未编辑属于您的专属简介哦，请到'查看信息'模块编辑你的个人信息吧",
      prestige_grade: 100,
      experience_grade: 60,
      publishtime: "2022-12-12 12:12:12",
      status: "未完成",
      information: "xxxxxxxxxxxxxxxxxxxxxxx",
      trade_type: "入账",
      expected_prestige: 2,
      expected_experience: 3,
      wage: 1000,
      joinpeople: 30,
      resignpeople: 3,
      totalpeople: 10,
      making_time: "2022-22-22 12:12:12",
      evalution: "好评",
      tag: "ui设计",
      parttime_name: "策划编辑",
      experience: 10,
      prestige: 3,
      begintime: "2022-12-12 12:12:12",
      endtime: "2022-12-12-12 24:00:00",
      phone: "186082677787",
      allUser: {
        uid: "",
        password: "",
        email: "",
        phone: "",
        idcar: "",
        relName: "",
      },
    };
  },
  computed: {
    prestige_grade_show() {
      if (this.prestige_grade >= 100) {
        return "官网推荐";
      } else if (this.prestige_grade > 70) {
        return "持续信任";
      } else if (this.prestige_grade > 60) {
        return "安心交易";
      } else {
        return "可选交易";
      }
    },
    experience_grade_show() {
      if (this.experience_grade >= 100) {
        return "大咖";
      } else if (this.experience_grade > 70) {
        return "高手";
      } else if (this.experience_grade > 60) {
        return "熟手";
      } else {
        return "新秀";
      }
    },
  },
  methods: {
    uesrMake() {
      let propt_box = document.querySelector(".propt-box");
      let aa = document.querySelector(".propt");
      aa.addEventListener("click", function () {
        propt_box.style.display = "block";
      });
    },
    send() {
      postUserMake(this.allUser).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.head_box {
  padding-top: 2rem;
  height: 10rem;
  width: 100%;
  background-image: url("../assets/imgs/head.webp");
  background-size: 100% 100%;
  border-bottom: 4px solid #fff;
  position: relative;
}
.hello {
  display: flex;
  width: 25rem;
  height: 6rem;
  /* background-color: skyblue; */
  color: #000;
  font-size: 2rem;
}
.hello .userimg {
  flex: 3;
  background-color: skyblue;
  border-radius: 25px;
}
.hello .username {
  flex: 7;
  line-height: 6rem;
}
.address {
  position: absolute;
  top: 70%;
  left: 30%;
  color: cadetblue;
  font-size: 1.5rem;
}
.lastest_time {
  position: absolute;
  bottom: 10%;
  right: 0;
  color: chocolate;
}
.update_class {
  position: absolute;
  /* background-color: pink; */
  color: aqua;
  font-size: 1rem;
  top: 2rem;
  right: 2rem;
}
.normal {
  color: #000;
}
.main_box {
  width: 100%;
  margin-top: 3rem;
  padding-top: 1rem;
  height: 32.5rem;
  background-color: rgb(248, 250, 249);
}
.main_box ul {
  display: flex;
  width: 100%;
  height: 32.5rem;
  background-color: rgb(248, 250, 249);
  flex-direction: column;
}
.main_box ul li {
  flex: 1;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #fff;
  display: flex;
}
.main_box ul li .left {
  flex: 1;
  margin: auto 0;
}
.main_box ul li .right {
  flex: 7;
}
.left,
.right {
  color: rgb(135, 206, 235);
  font-weight: 600;
}
.left {
  font-size: 1rem;
}

.right {
  text-align-last: left;
  margin: auto 0;
}

.right .grade_show {
  padding: 0 3rem 0 1rem;
}
.right,
.right_ {
  color: cadetblue;
}
.side_main_box {
  width: 100%;
  color: #999999;
}
.box_title {
  margin-left: 4rem;
  text-align-last: left;
}
.box_title ul li {
  padding-bottom: 3rem;
  padding-top: 3rem;
  border-bottom: 1px solid #ccc;
}

.time {
  color: #999;
  font-size: 1rem;
}
.status {
  color: #cc0000;
}
.info {
  color: #999;
  font-size: 1.3rem;
  font-weight: 600;
}

.lis span {
  padding-right: 3rem;
  color: #cc0000;
  font-size: 1rem;
}
.people span {
  padding-top: 2rem;
  padding-right: 3rem;
  color: #999;
  font-size: 0.7rem;
}
.people {
  margin-top: 0.5rem;
}

.confirm button {
  text-align: center;
  margin-top: 0.5rem;
  margin-right: 3rem;
  width: 3.7rem;
  height: 2rem;
  background-color: #ccc;
  color: #fff;
  border-radius: 0.3rem;
}
.achieve_head span:nth-child(1) {
  padding-right: 3rem;
  font-size: 1rem;
  color: #ccc;
  font-weight: 600;
}
.achieve_head span:nth-child(2) {
  padding-right: 3rem;
  font-size: 1rem;
  color: #cc0000;
  font-weight: 600;
}
.part_bref span {
  padding-right: 1rem;
  color: #000;
  font-size: 1rem;
}
.part_info {
  font-size: 1rem;
  color: #999;
  font-weight: 600;
}
.achieve_footer span {
  padding-right: 3rem;
  font-size: 1rem;
}
.achieve_footer span:nth-child(1) {
  color: #006600;
}
.achieve_footer span:nth-child(2) {
  color: #cc6600;
}
.achieve_footer span:nth-child(3) {
  color: #ff0000;
}
.waitingjob_head span {
  padding-right: 3rem;
  font-size: 1rem;
}
.waitingjob_head span:nth-child(1) {
  color: #ccc;
}
.waitingjob_head span:nth-child(2) {
  color: #cc0000;
}
.resign_info span {
  padding-right: 3rem;
  font-size: 1rem;
}
.resign_info span:nth-child(odd) {
  color: #000;
}
.resign_info span:nth-child(even) {
  color: #cc0000;
}
.part_name {
  color: #999;
  font-size: 1rem;
  font-weight: 600;
}
.part_info {
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.to_link_publisher {
  color: #006600;
  font-size: 1rem;
}
.propt-box {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
  border: 1px solid #000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* display: none; */
}
.propt-box input {
  padding: 8px;
  border-bottom: 1px solid #000;
}
.propt:hover {
  cursor: pointer;
}
</style>
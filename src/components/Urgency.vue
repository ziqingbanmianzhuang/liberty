<template>
  <div class="container_box">
    <div class="nav">
      <router-link class="normal parttime" to="/equal">等价任务 </router-link>
      <router-link class="normal" to="/parttime">兼职任务 </router-link>
      <router-link class="normal" to="/resign">悬赏任务 </router-link>
      <router-link class="normal" to="/login">登录/注册 </router-link>
      <router-link class="normal" to="/userhome">我的主页 </router-link>
      <router-link to="/searchparttime" class="common">
        <input type="text" placeholder="搜索兼职页面"
      /></router-link>
    </div>
    <div class="block">
      <el-carousel height="48rem" :interval="4000">
        <el-carousel-item v-for="(item, index) in pictureList" :key="index">
          <img :src="item.url" alt="" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <span class="iconfont icon-bianjixiugai-copy">
      <h6>发布悬赏</h6>
    </span>
    <div class="box">
      <div class="left-area">
        <div class="header-box"></div>
        <div class="main-box">
          <span class="iconfont icon-tubiao06 little"></span>
          <span class="iconfont icon-tubiao32 little"></span>
          <span class="iconfont icon-xintubiao- little"></span>
          <span class="iconfont icon-tubiao_shouye little"></span>
          <span class="iconfont icon-tubiao28 little"></span>
          <span class="iconfont icon-jiajutubiao- little"></span>
          <span class="iconfont icon-chongwutubiao04 little"></span>
        </div>
        <div class="footer-box"></div>
      </div>
      <div class="mid-area">
        <div class="header-box">
          <span class="iconfont icon-yuntubiao little"></span>
          <span class="iconfont icon-yuntubiao big"></span>
        </div>
        <div class="main-box">
          <span>
            <div>
              <span class="first_icon">软件开发</span><span>网站开发</span>
            </div>
            <div><span>工具软件</span><span>游戏</span></div>
          </span>
          <span>
            <div><span class="first_icon">起名取名</span><span>策划</span></div>
            <div><span>创意祝福</span><span>写作</span></div>
          </span>
          <span>
            <div>
              <span class="first_icon">网络推广</span><span>营销策划</span>
            </div>
            <div><span>网站推广</span><span>电商运营</span></div>
          </span>
          <span>
            <div>
              <span class="first_icon">商标业务</span><span>公司财税</span>
            </div>
            <div><span>法律服务</span><span>广告会展</span></div>
          </span>
          <span>
            <div>
              <span class="first_icon">创意设计</span><span>工艺设计</span>
            </div>
            <div><span>电商设计</span><span>影视服务</span></div>
          </span>
          <span>
            <div>
              <span class="first_icon">家装设计</span><span>建筑设计</span>
            </div>
            <div><span>公装设计</span><span>定制家居</span></div>
          </span>
          <span>
            <div>
              <span class="first_icon">生活服务</span><span>外包接单</span>
            </div>
            <div><span>专业人才</span><span>翻译</span></div>
          </span>
        </div>
        <div class="footer-box">
          <h1>BROWSE BY CATAGORY</h1>
          <p>CHOOSE YOUR FAVOUR</p>
          <div></div>
          <span>SEARCHING</span>
          <h6>AT THE TOP</h6>
          <span class="iconfont icon-tubiao209"></span>
        </div>
      </div>
      <div class="main-area">
        <div class="header-box">
          <h1>Liberty Is Yours</h1>
          <span class="iconfont icon-fangfeitubiao"></span>
          <h6>Labor without creation is dulland labor</h6>
          <h4>without freedom is painful</h4>
        </div>
        <div class="main-box">
          <div class="scroll_area">
            <ul>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
              <li>
                <div class="left">
                  <div class="profile">
                    <span class="iconfont icon-tubiao31"></span>
                  </div>
                  <div class="phone">{{ phone }}</div>
                  <div class="join">
                    <span class="iconfont icon-tubiao331"></span>
                    参加人数：{{ joinpeople }}人
                  </div>
                </div>
                <div class="right">
                  <div class="titlenav">
                    <span
                      >{{ userName }}&nbsp;&nbsp;&nbsp; | &nbsp; &nbsp;
                    </span>
                    <span>
                      标签分类：{{ tips }} &nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span
                      >浏览量：{{ views }}&nbsp; &nbsp; |&nbsp; &nbsp;
                    </span>
                    <span>发布时间：{{ publishTime }}</span>
                  </div>
                  <div class="bodynav">
                    <span
                      >BasicInfo:&nbsp;&nbsp;交易类型:{{
                        tradeType
                      }}&nbsp;&nbsp;
                    </span>
                    <span>工资:${{ wage }}&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span
                      >预期信誉：{{
                        ExpectedPrestige
                      }}&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span
                      >预期经验:{{
                        ExpectedExperience
                      }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                    <span>工作时间:{{ workTime }}天</span>
                  </div>
                  <div class="text">Views Details&nbsp;&nbsp;-></div>
                  <div class="resign">
                    <span class="iconfont icon-xintubiao-"></span>
                    招聘人数：{{ resignpeople }}
                  </div>
                  <div class="address">
                    <span class="iconfont icon-daohangtubiao"></span>
                    {{ address }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-area">4</div>
    </div>
    <div class="end">
      <h3>关注我们</h3>
      <h6>客服电话:18638267599</h6>
      <h1>
        app开发者:&nbsp;xxxx&nbsp;&nbsp;|&nbsp;&nbsp;应用名称：&nbsp;axxxx&nbsp;&nbsp;|&nbsp;&nbsp;应用版本:1.0
      </h1>
      <h2>
        应用权限:&nbsp;查看权限&nbsp;&nbsp;|&nbsp;&nbsp;隐私政策&nbsp;axxxx&nbsp;&nbsp;|&nbsp;&nbsp;更新时间:&nbsp;2022.6.11
      </h2>
    </div>
  </div>
</template>

<script>
// import { login } from "../api/login";
// import { navScroll } from "../assets/navScroll";

export default {
  name: "partTime",
  data() {
    return {
      pictureList: [
        { url: require("@/assets/imgs/pink.jpg") },
        { url: require("@/assets/imgs/time.webp") },
        { url: require("@/assets/imgs/buildhome.webp") },
        { url: require("@/assets/imgs/room.jpg") },
        { url: require("@/assets/imgs/game.webp") },
      ],
      phone: "+18608267777",
      joinpeople: "3",
      userName: "半面妆",
      tips: "ui设计",
      views: "109",
      publishTime: "2022-12-13 12:12:12",
      tradeType: "入账",
      wage: "1000",
      ExpectedPrestige: "10",
      ExpectedExperience: "17",
      workTime: 10,
      resignpeople: 20,
      address: "成都",
    };
  },
  // mounted() {
  //   navScroll();
  //   console.log(11);
  //   window.addEventListener("scroll", () => {
  //     console.log(11);
  //     navScroll();
  //   });
  // },
  // destroyed() {
  //   window.removeEventLIstener("scroll", () => {
  //     console.log(11);
  //     navScroll();
  //   });
  // },
};
</script>

<style scoped>
.container_box {
  width: 100%;
  height: 70rem;
  /* background-image: url("../assets/imgs/parttimebgi.png"); */
  background-size: 100% 100%;
}
.nav {
  color: #ffffff;
  line-height: 3.4rem;
  height: 3.4rem;
  width: 70%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.nav .normal {
  font-size: 1rem;
  color: #ffffff;
  flex: 1;
}
.nav .common {
  font-size: 1rem;
  color: #ffffff;

  flex: 2;
}
.nav .common input {
  cursor: pointer;
}
.nav .parttime {
  color: #666666;
  background-color: #fff;
  border-radius: 10px;
}
input {
  margin: 0 auto;
  flex: 2;
  text-align: center;
  height: 70%;
  width: 100%;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  outline: none;
  border: none;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #f6f6f6;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #f6f6f6;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #f6f6f6;
}
.icon-bianjixiugai-copy {
  position: fixed;
  right: 0;
  top: 75%;
  transform: translateY(-50%);
  font-size: 10rem;
  z-index: 99;
  color: #f6f6f6;
}
.icon-bianjixiugai-copy h6 {
  font-size: 1rem;
  color: #f6f6f6;
}
.box {
  height: 120rem;
  background-color: rgb(6, 5, 5);
  width: 100%;
  display: flex;
}
.box .left-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #333;
}
.box .mid-area .icon-yuntubiao {
  font-size: 18rem;
  color: #ffcc33;
}
.box .mid-area .little {
  font-size: 5rem;
  color: #fff;
}
.box .mid-area {
  flex: 3;
  display: flex;
  flex-direction: column;
  background-image: url("../assets/imgs/blackimg.png");
}
.box .main-area {
  flex: 15;
}
.box .right-area {
  flex: 5;
}
.left-area .header-box {
  display: flex;
  flex: 2;
}
.left-area .main-box {
  display: flex;
  flex-direction: column;
  flex: 7;
}
.left-area .main-box .iconfont {
  flex: 1;
  color: #ffcc33;
  font-size: 3rem;
}
.left-area .main-box .iconfont:hover {
  color: #fff;
}
.left-area .footer-box {
  flex: 3;
}
.mid-area .footer-box {
  padding-top: 1rem;
  text-align: center;
  flex: 3;
  background-color: #fff;
  position: relative;
}
.mid-area .footer-box h1 {
  font-size: 3.6rem;
  padding-top: 5rem;
}
.mid-area .footer-box p {
  padding-top: 1rem;
  font-size: 1rem;
  padding-bottom: 7rem;
}
.mid-area .footer-box div {
  height: 0;
  width: 60%;
  border: 1px solid #ffcc33;
  margin: 0 auto;
  margin-bottom: 3rem;
}
.mid-area .footer-box span {
  color: #333;
  font-size: 1rem;
}
.mid-area .footer-box h6 {
  padding-top: 1rem;
  font-size: 1rem;
  color: #ffcc99;
}
.mid-area .footer-box .icon-tubiao209 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -10%;
  color: #ffcc33;
  font-size: 10rem;
}
.mid-area .header-box {
  display: flex;
  flex: 2;
  position: relative;
}

.mid-area .main-box {
  display: flex;
  flex-direction: column;
  flex: 7;
}
.mid-area .main-box > span {
  background-color: rgba(51, 51, 51, 0.6);
  display: block;
  width: 100%;
  flex: 1;
  margin-top: 2.6rem;
  color: #f6f6f6;
  text-align-last: left;
}
.mid-area .main-box > span div span {
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: inline-block;
}
.first_icon {
  color: #ffcc33;
}
.main-area {
  font-weight: 400;
  display: flex;
  flex-direction: column;
}
.main-area .header-box {
  flex: 2.6;
}
.main-area .header-box h1 {
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-size: 3rem;
  color: #ffffff;
  font-weight: 400;
}
.main-area .header-box .icon-fangfeitubiao {
  color: #ffcc33;
  padding-bottom: 1rem;
  font-size: 5rem;
}
.main-area .header-box h6 {
  font-size: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #ffffff;
  font-weight: 400;
}
.main-area .header-box h4 {
  font-size: 0.4rem;
  color: #ffcc33;
  font-weight: 400;
}
.main-area .main-box {
  flex: 10;
}
.main-area .main-box .scroll_area {
  overflow: hidden;
  display: block;
  height: 100%;
}
.main-area .main-box .scroll_area ul {
  overflow: auto;
  height: 100rem;
  overflow-x: hidden;
}
.main-area .main-box .scroll_area ul::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.main-area .main-box .scroll_area ul {
  scrollbar-width: none; /* firefox */

  -ms-overflow-style: none; /* IE 10+ */
}
.main-area .main-box .scroll_area ul li {
  height: 20rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
  border-left: 6px solid #cc9966;
  display: flex;
}
.main-area .main-box .scroll_area ul li .left {
  padding-top: 1rem;
  flex: 1;
  position: relative;
}
.main-area .main-box .scroll_area ul li .left .profile {
  height: 10rem;
}
.main-area .main-box .scroll_area ul li .left .profile .icon-tubiao31 {
  color: #fff;
  font-size: 10rem;
}
.main-area .main-box .scroll_area ul li .left .phone {
  color: #cc9966;
}
.main-area .main-box .scroll_area ul li .left .join {
  margin-top: 7rem;
  color: #fff;
}
.main-area .main-box .scroll_area ul li .left .join .iconfont {
  color: #ff6633;
}

.main-area .main-box .scroll_area ul li .right {
  text-align-last: left;
  position: relative;
  padding-top: 1rem;
  flex: 4;
}
.main-area .main-box .scroll_area ul li .right .titlenav {
  color: #fff;
  font-size: 0.8rem;
}
.main-area .main-box .scroll_area ul li .right .titlenav span:nth-child(1) {
  font-size: 2rem;
}
.main-area .main-box .scroll_area ul li .right .titlenav span:nth-child(4) {
  color: #cc9966;
}
.main-area .main-box .scroll_area ul li .right .bodynav {
  color: #fff;
  padding-top: 1rem;
  font-size: 0.8rem;
}
.main-area .main-box .scroll_area ul li .right .bodynav span:nth-child(5) {
  color: #993366;
}
.main-area .main-box .scroll_area ul li .right .text {
  color: #ffcc33;
  padding-top: 4.6rem;
  font-size: 1.6rem;
}
.main-area .main-box .scroll_area ul li .right .resign {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
}
.main-area .main-box .scroll_area ul li .right .resign .iconfont {
  color: #00cc00;
}
.main-area .main-box .scroll_area ul li .right .address {
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
}
.main-area .main-box .scroll_area ul li .right .address .iconfont {
  color: #66cccc;
}
.end {
  background-color: black;
  position: relative;
  height: 20rem;
}
.end h3 {
  font-size: 3rem;
  position: absolute;
  font-weight: normal;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
}
.end h6 {
  font-size: 1rem;
  position: absolute;
  font-weight: normal;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
}
.end h1 {
  position: absolute;
  font-weight: normal;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
}
.end h2 {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-weight: normal;
}
</style>
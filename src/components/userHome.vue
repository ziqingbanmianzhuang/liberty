<template>
  <div class="contain-box">
    <div class="header-bgi">
      <div class="a">
        <div class="b">
          <span>HELLO</span>
          <p>welcome back</p>
        </div>
        <div class="c"></div>
        <div class="d">
          <div class="userimg">
            <img src="../assets/imgs/male-avatar.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      <ul>
        <li><router-link class="normal" to="/home">HOME</router-link></li>
        <li>
          <router-link class="normal" to="/viewshistory"
            >HISTORYHISTORY</router-link
          >
        </li>
        <li>
          <div class="normal" @click="alertbox()">
            <router-link class="normal" to="userinfo">INFORMATION</router-link>
          </div>
        </li>
        <li class="portrait">
          <span> GRADE</span>
          <ul class="information">
            <li style="color: #b31240">用户等级:20</li>
            <li style="color: #b35812">信誉等级:官网推荐</li>
            <li style="color: #29b312">经验等级:新秀</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="side-main">
      <div class="shell">
        <div class="card">
          <h1><span class="word">UADV</span>进阶</h1>
        </div>
      </div>
      <div class="shell">
        <div class="card">
          <h1><span class="word">CERT</span>企业</h1>
        </div>
      </div>
    </div>
    <div class="lists">
      <div class="container">
        <div class="card">
          <h2>PUBLISED</h2>
          <div class="content">
            <h3>已发布的任务</h3>
            <p>您总共发布了xx件任务</p>
            <a href="#published">点击查看</a>
          </div>
        </div>
        <div class="card">
          <h2>WAITING</h2>
          <div class="content">
            <h3>待完成的任务</h3>
            <p>您总共尚有xx件任务待完成</p>
            <a href="#waiting">点击查看</a>
          </div>
        </div>
        <div class="card">
          <h2>DONE</h2>
          <div class="content">
            <h3>已完成的任务</h3>
            <p>您总共完成了xx件任务</p>
            <a href="#done">点击查看</a>
          </div>
        </div>
        <div class="card">
          <h2>APPLIED</h2>
          <div class="content">
            <h3>已申请的任务</h3>
            <p>您总共申请了xxx件任务</p>
            <a href="#applied">点击查看</a>
          </div>
        </div>
        <div class="card">
          <h2 style="color: #f55951">NOPASS</h2>
          <div class="content">
            <h3 style="color: #f55951">已拒绝的任务</h3>
            <p>您总共xxx件任务被拒绝·</p>
            <a href="#nopass">点击查看</a>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div id="published">
        <section>
          <h1 class="typetitle">已发布的任务</h1>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <h1>兼职名称</h1>
                  <h2>发布时间:2022-12-22 12:13:14</h2>
                  <div class="content">
                    <ul>
                      <li class="basicInfo">
                        <div class="first_line">
                          <span>发布状态:招聘ing</span>
                          <span>交易类型:入账</span>
                        </div>
                        <div class="second_line">
                          <span>预期信誉:200</span>
                          <span>预期经验:300</span>
                          <span>预期工资:3000</span>
                        </div>
                      </li>
                      <li class="people">
                        <span>参加人数:100</span>
                        <span>聘用人数:100</span>
                      </li>
                      <li class="confirm">
                        <button>提前开始</button>
                        <button>招聘结束</button>
                      </li>
                      <li class="moreInfo">
                        <div>兼职详情:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="waiting">
        <section>
          <h1 class="typetitle">待完成的任务</h1>

          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <h1>兼职名称</h1>
                  <h2>开始时间:2022-12-22 12:13:14</h2>
                  <h2>截至时间:2022-12-22 12:13:14</h2>
                  <div class="content">
                    <ul>
                      <li class="basicInfo">
                        <div class="first_line">
                          <span>招聘状态:招聘ing</span>
                          <span>交易类型:入账</span>
                        </div>
                        <div class="second_line">
                          <span>预期信誉:200</span>
                          <span>预期经验:300</span>
                          <span>预期工资:3000</span>
                        </div>
                      </li>
                      <li class="people">
                        <span>合作人数:100</span>
                        <span>标签分类:ui设计</span>
                      </li>
                      <li class="confirm">
                        <span>雇主电话:18608267592</span>
                      </li>
                      <li class="moreInfo">
                        <div>兼职详情:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="done">
        <section>
          <h1 class="typetitle">已完成的任务</h1>

          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <h1>兼职名称</h1>
                  <h2>完成时间:2022-12-22 12:13:14</h2>
                  <div class="content">
                    <ul>
                      <li class="basicInfo">
                        <div class="first_line">
                          <span>标签分类:ui设计</span>
                          <span>交易类型:入账</span>
                        </div>
                        <div class="second_line">
                          <span>信誉值+:200</span>
                          <span>经验值+:300</span>
                          <span>酬金:3000</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="applied">
        <section>
          <h1 class="typetitle">已申请的任务</h1>

          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <h1>兼职名称</h1>
                  <h2>发布时间:2022-12-22 12:13:14</h2>
                  <div class="content">
                    <ul>
                      <li class="basicInfo">
                        <div class="first_line">
                          <span>发布状态:招聘ing</span>
                          <span>交易类型:入账</span>
                        </div>
                        <div class="second_line">
                          <span>预期信誉:200</span>
                          <span>预期经验:300</span>
                          <span>预期工资:3000</span>
                        </div>
                      </li>
                      <li class="people">
                        <span>参加人数:100</span>
                        <span>聘用人数:100</span>
                      </li>

                      <li class="moreInfo">
                        <div>兼职详情:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="nopass">
        <section>
          <h1 class="typetitle">未通过的申请</h1>

          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <h1>兼职名称</h1>
                  <h2>发布时间:2022-12-22 12:13:14</h2>
                  <div class="content">
                    <ul>
                      <li class="basicInfo">
                        <div class="first_line">
                          <span>发布状态:招聘ing</span>
                          <span>交易类型:入账</span>
                        </div>
                        <div class="second_line">
                          <span>预期信誉:200</span>
                          <span>预期经验:300</span>
                          <span>预期工资:3000</span>
                        </div>
                      </li>
                      <li class="people">
                        <span>参加人数:100</span>
                        <span>聘用人数:100</span>
                      </li>

                      <li class="moreInfo">
                        <div>兼职详情:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="alert_box">
      <input type="text" placeholder="用户名" />
      <input type="text" placeholder="密码" />
      <input type="text" placeholder="生日" />
      <input type="text" placeholder="邮箱" />
      <input type="text" placeholder="性别" />
      <input type="text" placeholder="地址" />
      <input type="text" placeholder="接单状态？接单 or 空闲" />
      <input type="text" placeholder="预期薪资" />
      <input type="text" placeholder="国籍" />
      <input type="text" placeholder="希望兼职地址" />
      <input
        type="textarea"
        placeholder="大概写写您的自我工作简介叭,有利于更好接单哦"
      />
      <input type="text" placeholder="留一个你的社交账号叭" />
      <div>
        <span>接单状态</span
        ><el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div>
        <button
          style="
            background-color: #fff;
            height: 2rem;
            width: 4rem;
            color: #000;
            border-radius: 5px;
            margin-top: 1rem;
          "
        >
          提交
        </button>
      </div>

      <div class="x iconfont icon-guanbi"></div>
    </div>
  </div>
</template>

<script>
var Swiper = require("../../node_modules/swiper/swiper-bundle.min.js");
export default {
  name: "userhome",
  data() {
    return {
      value: true,
    };
  },
  components: {
    // Swiper,
    // SwiperSlide,
  },
  mounted() {
    new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
    this.alertbox();
  },
  methods: {
    alertbox() {
      console.log(11);
    },
  },
};
</script>

<style scoped>
@import "../../node_modules/swiper/swiper-bundle.min.css";

* {
  padding: 0;
  margin: 0;
}
.alert_box {
  width: 30rem;
  height: 28rem;
  background-color: #ccc;
  padding: 1rem;
  position: fixed;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 999;
  transition: 0.3s;
  opacity: 1;
  /* display: flex; */
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}
.x {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  width: 3px;
  height: 2px;
  color: red;
  font-weight: 700;
}
.alert_box input {
  width: 100%;
  height: 2rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.alert_box input:nth-child(1) {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.alert_box input:nth-child(12) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
section {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 232, 230);
  overflow: hidden;
  border-bottom: 2px solid #b36b6b;
}
section .typetitle {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(179, 107, 107);
  font-size: 2rem;
}
.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  filter: blur(4px);
  background-color: #edd2cb;
  border-radius: 10px;
}

.swiper-slide-active {
  filter: blur(0px);
  background-color: #f1e8e6;
}

.testimonialBox {
  position: relative;
  width: 100%;
  color: #999;
  text-align: center;
}
.testimonialBox h1 {
  margin-bottom: 2rem;
}
.testimonialBox h2 {
  font-size: 1rem;
  color: #f9b4ab;
}
.testimonialBox .basicInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  color: #95adbe;
  font-size: 1.1rem;
  padding-top: 1rem;
}
.testimonialBox .basicInfo > div {
  padding-bottom: 0.3rem;
}
.testimonialBox .basicInfo > div span {
  padding: 0 0.4rem;
}
.testimonialBox .people {
  border-top: 2px solid rgb(153, 153, 153);
  margin-top: 1rem;
  font-size: 1.1rem;
}
.testimonialBox .people span {
  padding: 0 0.3rem;
}
.testimonialBox .moreInfo div {
  background-color: rgb(241, 232, 230);
  width: 100%;
  height: 2rem;
  border-radius: 3px;
  font-size: 1.15rem;
  text-align-last: left;
}
.testimonialBox .confirm button {
  width: 20%;
  height: 2rem;
  background-color: #ff9999;
  color: #fff;
  border-radius: 4px;
  margin: 0.3rem 0.3rem;
}
.testimonialBox .confirm span {
  font-size: 0.3rem;
}
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: none;
}
.main {
  height: 400vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.main > div {
  padding-top: 3rem;
  width: 100vw;
  height: 100vh;
}
.main .swiper-slide {
  cursor: alias;
}
.lists {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1e8e6;
  width: 100%;
  position: relative;
}

.lists .container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
  color: #fff;
}
.lists a {
  color: #fff;
}
.lists .container .card {
  position: relative;
  width: 280px;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.lists .container .card .content {
  padding: 20px;
  text-align: center;
  transform: translateY(150px);
  opacity: 0;
  transition: 0.5s;
}

.lists .container .card:hover .content {
  transform: translateY(50px);
  opacity: 1;
}

.lists .container .card h2 {
  position: absolute;
  width: 100%;
  top: 20%;
  right: 50%;
  padding-bottom: 2rem;
  border-bottom: 3px solid #95adbe;
  transform: translateX(50%);
  font-size: 8em;
  pointer-events: none;
  color: #8892b3;
}

.lists .container .card:hover .content h3 {
  font-size: 1.8em;
  color: #b3a188;
  z-index: 1;
}

.lists .container .card:hover .content p {
  font-size: 1em;
  color: #b3a188;
  font-weight: 300;
}

.lists .container .card:hover .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background-color: #fff;
  color: #000;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
.shell {
  position: relative;
  perspective: 700px;
  transform-style: preserve-3d;
  margin: 0 5rem;
}
.shell .card {
  height: 260px;
  width: 460px;
  transform: translateX(10px) rotateY(25deg) rotateX(10deg);
  background-color: #ffe7c2;
  display: flex;
  align-items: center;
}
.shell h1 {
  font-size: 70px;
}
.shell .card .word {
  background-color: #b3a188;
  line-height: 1;
  color: #f1e8e6;
  padding: 0 10px;
  margin: 0 15px 0 30px;
  display: inline-flex;
}
.shell::before {
  content: "";
  height: 260px;
  width: 460px;
  position: absolute;
  margin-top: -9px;
  margin-left: -9px;
  border: 9px solid #8892b3;
  transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);
}
.shell:hover > div,
.shell:hover::before {
  transform: none;
}
.shell > div,
.shell::before {
  transition: 0.3s;
}
.contain-box {
  width: 100vw;
}
section {
  height: 80vh;
  font-size: 20px;
  color: blanchedalmond;
  position: absolute;
  transition: 1s;
}
.header-bgi {
  background: linear-gradient(-45deg, #c2c2ff, #8892b3, #f0f4ff, #ffe7c2);
  background-size: 1000% 1000%;
  animation: gradient 5s ease infinite;
  width: 100vw;
  height: 18rem;
  position: relative;
  display: flex;
  justify-content: center;
  /* background: linear-gradient(to left, rgb(238, 92, 92), rgb(154, 127, 250)); */
  z-index: -1;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.normal {
  text-decoration: none;
  color: #361d32;
}
.header-bgi .a {
  position: relative;
  width: 300px;
  height: 200px;
  top: 25px;
}

.header-bgi .b {
  position: absolute;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(11px);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.header-bgi .a span {
  font: 900 50px "";
  position: absolute;
  top: 10px;
  left: 20px;
  color: rgba(0, 0, 0, 0.5);
  text-shadow: 1px 1px 3px blur rgba(255, 255, 255, 0.7);
}

.header-bgi .a p {
  font: 900 25px "";
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #e07a5f;
  letter-spacing: 3px;
}

.header-bgi .c {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f1e8e6;
  position: absolute;
  top: 140px;
  left: -60px;
  z-index: -99;
}

.header-bgi .d {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -80px;
  left: 260px;
  z-index: -99;
}
.header-bgi .d .userimg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: #fff;
}
.header-bgi .d .userimg img {
  border-radius: 50%;
  width: 80%;
  height: 80%;
}
.title {
  height: 3rem;
  width: 100%;
}
.title > ul {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
}
.title > ul li {
  flex: 1;
  background-color: #f1e8e6;
  text-align: center;
  line-height: 3rem;
}
.title ul li:hover {
  background-color: #edd2cb;
}
.title .portrait {
  text-align: center;
  width: 25%;
  height: 3rem;
  /* line-height: 65px; */
  transition: 0.3s;
  cursor: pointer;
}
.title .information {
  width: 25vw;
  background-color: #e07a5f;
  transform: translate(0px, -200px);
  border-radius: 10px;
  padding: 20px 0;
  line-height: 0;
  height: 0;
  transition: 0.3s;
  opacity: 0;
}

.title .portrait:hover .information {
  opacity: 1;
  line-height: 65px;
  transform: translate(0px, -10px);
  height: auto;
}
.side-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 22.1rem);
  background-image: url("../assets/imgs/Silver.jpg");
  /* background-image: url("../assets/imgs/Ice.jpg"); */
}
</style>
<template>
  <div>
    <div class="nav">
      <div class="contain">
        <div>
          <router-link class="normal" to="/home">Home</router-link>
        </div>

        <div>
          <router-link class="normal" to="parttime">SideBr</router-link>
        </div>
        <div>
          <router-link class="normal" to="resign">Reward</router-link>
        </div>
        <div>
          <router-link class="normal" to="urgency">Urgency</router-link>
        </div>
        <div>
          <router-link class="normal" to="equal">Equal</router-link>
        </div>
      </div>
    </div>
    <div class="header">
      <h1>SHOP/VST PRODUCTS</h1>
      <h2>MAKING LIFE COLOFUL</h2>
    </div>
    <div class="contain-box">
      <div class="a">
        <div class="b"></div>
        <div class="c">
          <div class="d"><img src="../assets/imgs/1.jpg" alt="" /></div>
          <div class="d">
            <img src="../assets/imgs/2.jpg" alt="" />
          </div>
          <div class="d"><img src="../assets/imgs/3.jpg" alt="" /></div>
          <div class="d"><img src="../assets/imgs/4.jpg" alt="" /></div>
          <div class="d"><img src="../assets/imgs/5.jpg" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="bigtitle">
      <h1>
        <span>Do<a>n't</a></span>
        <span> <a>Wa</a>it </span>
      </h1>
    </div>
    <div class="main-box">
      <div class="sidenav">
        <div class="shell">
          <a href="#" class="box"
            ><i class="iconfont icon-tubiao_wuxing-"></i><span>list</span></a
          >

          <a href="#" class="box"
            ><i class="iconfont icon-biaodan"></i><span>code</span></a
          >
          <a href="#" class="box"
            ><i class="iconfont icon-bianjixiugai"></i><span>design</span></a
          >
          <a href="#" class="box"
            ><i class="iconfont icon-zhuye"></i><span>commerce</span></a
          >
          <a href="#" class="box"
            ><i class="iconfont icon-flower_circle"></i
            ><span>education</span></a
          >
          <a href="#" class="box"
            ><i class="iconfont icon-tubiao-1"></i><span>daily</span></a
          >
          <a href="#" class="box"
            ><i class="iconfont icon-tubiao_xiangji"></i><span>video</span></a
          >
          <a href="#" class="box"
            ><i class="iconfont icon-tubiaolunkuo-"></i><span>game</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { animitionSlideShow } from "../assets/animationSlideShow";
export default {
  name: "partTime",
  data() {
    return {};
  },
  mounted() {
    animitionSlideShow();
  },
  methods: {},
};
</script>

<style scoped>
* {
  text-align: center;
  padding: 0;
  margin: 0;
}
.main-box {
  height: 100vh;
  width: 100%;
  background-color: pink;
}
.main-box .shell {
  width: 100px;
  height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s;
  overflow: hidden;
}

.main-box .box {
  text-align-last: left;
  display: block;
  height: 15%;
  width: 85%;
  margin: 9px;
  border-radius: 5px;
  position: relative;
  transition: 0.3s;
  color: rgb(160, 160, 175);
}

.main-box .box i {
  margin: 0 auto;
  font-size: 30px;
  margin: 7px 0 0 13px;
}

.main-box .box:nth-child(1)::before,
.main-box .box:nth-child(5)::before {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgb(55, 65, 81);
  position: absolute;
  bottom: -10px;
}

.main-box .box span {
  margin: 0 auto;
  margin: 0 30px;
  font: 500 20px "";
  opacity: 0;
  transition: 0.1s;
}

.main-box .shell:hover {
  width: 270px;
}

.main-box .box:hover {
  background-color: rgb(55, 65, 81);
}

.main-box .shell:hover span {
  opacity: 1;
}

.main-box .box:hover {
  color: #fff;
}

.main-box .shell {
  background-color: rgb(243, 244, 246);
}

.main-box .shell .box:hover {
  background-color: rgb(209, 213, 219);
  color: rgb(241, 159, 159);
}

.main-box .shell .box {
  color: #000;
}

.bigtitle {
  margin: 3rem auto;
  width: 100%;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
.bigtitle h1 {
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 10em;
  transition: 0.5s;
  letter-spacing: 1rem;
}

.bigtitle h1 span {
  position: relative;
  text-transform: uppercase;
  display: block;
  transition: 0.5s;
}

/* 第三步：用两个伪元素实现红线效果 */
.bigtitle h1 span:nth-child(1)::before {
  content: "";
  position: absolute;
  top: calc(50% - 5px);
  right: 0;
  width: 50%;
  height: 10px;
  background: #f00;
  /* 下面两行代码规定了transform的起始方向和量 */
  transform-origin: right;
  transform: scale(0);
  transition: 0.5s;
  z-index: 1;
}

/* 为第一个伪元素添加hover效果 */
.bigtitle h1:hover span:nth-child(1)::before {
  transform: scaleX(1);
}

/* 接下来是第二个伪元素，和上面的几乎一样，只需要微调 */
.bigtitle h1 span:nth-child(2)::before {
  content: "";
  position: absolute;
  top: calc(50% - 5px);
  left: 0;
  width: 50%;
  height: 10px;
  background: #f00;
  /* 下面两行代码规定了transform的起始方向和量 */
  transform-origin: left;
  transform: scale(0);
  transition: 0.5s;
  z-index: 1;
}

/* 为第一个伪元素添加hover效果 */
.bigtitle h1:hover span:nth-child(2)::before {
  transform: scaleX(1);
}

/* 第四步：让两个hide标签在hover效果之后隐藏（透明度实现） */
.bigtitle h1 span a {
  transition: 0.5s;
  transition-delay: 0.3s;
}

.bigtitle h1:hover span a {
  transition-delay: 0.3s;
  color: #f00;
  opacity: 0;
}

/* 第五步：调整padding效果让整个效果更自然 */
.bigtitle h1:hover span:nth-child(1) a {
  padding-right: 30px;
}

.bigtitle h1:hover span:nth-child(2) a {
  padding-right: 30px;
}
.contain-box {
  background-color: rgba(206, 182, 182, 0.637);
  display: flex;
  height: calc(100vh - 10rem);
  justify-content: center;
  align-items: center;
}

.a {
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
}

.b {
  width: 60%;
  height: 500px;
  transition: 0.4s;
  background-size: cover;
}

.c {
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.d {
  position: relative;
  width: 200px;
  height: 90px;
  right: 0;
  transition: 0.5s;
  overflow: hidden;
}

.d img {
  position: absolute;
  width: 200px;
  transform: translate(0, -50px);
  transition: 0.5s;
  right: 0;
}

.d.dd {
  opacity: 0;
  right: 250px;
}

.d:hover img {
  opacity: 0;
  right: 250px;
}

.nav {
  text-align: center;
  width: 100%;
  height: 3rem;
  background-color: #fff;
}
.contain {
  margin: 0 auto;
  display: flex;
  height: 3rem;
  line-height: 3rem;
  width: 60%;
}
.nav div {
  flex: 1;
}
.nav div .normal:hover {
  background-color: #66cccc;
}
.nav div .normal {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 1rem;
}
.header {
  height: 7rem;
  width: 100%;
  background-color: black;
}
.header h1 {
  padding-top: 2rem;
  font-weight: 400;
  color: #fff;
  font-size: 2rem;
}
.header h2 {
  padding-top: 1rem;
  font-weight: 400;
  color: #66cccc;
  flex-shrink: 1rem;
}
</style>
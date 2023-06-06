<template>
  <div>
    <!-- 头部区域 -->
    <div class="nav shapedividers_com-8446"></div>
    <header>
      <div class="header_top">
        <i class="iconfont icon-yuntubiao"></i>
        <span
          ><router-link class="normal tips" to="/home"
            >Liberty</router-link
          ></span
        >
        <div
          style="
            width: 40rem;
            height: 10rem;
            position: absolute;
            top: 0px;
            right: 0px;
          "
        >
          <img style="width: 100%" src="../assets/imgs/astronot.gif" alt="" />
        </div>

        <div class="header_right">
          <span><router-link class="normal" to="/home">home</router-link></span>
          <span>
            <router-link class="normal" to="/register">login</router-link>
          </span>
          <span>  <router-link class="normal" to="/parttime">parttime</router-link></span>
          <span>  <router-link class="normal" to="/userhome">userhome</router-link></span>
          <span>  <router-link class="normal" to="/userinfo">userinfo</router-link></span>
          <span>  <router-link class="normal" to="/urgency">userinfo</router-link></span>
          
          <span>  <router-link class="normal" to="/searchparttime">/searchparttime</router-link></span>
        </div>
      </div>
      <!-- 中间区域 -->
      <div class="header_bottom">
        <span><strong>LIBERTY SOFTERWARE</strong></span>
        <h2 style="color: #264e70">
          让世界更<span style="color: #ff9900; font-size: 40px">精彩</span>
        </h2>
        <h5 style="color: white">关于更多SOFTERWARE</h5>
        <div class="about_work">
          <span>
            <i class="iconfont icon-jianzhi" style="color: #679186"></i>
            <h4>自由兼职平台</h4>
          </span>
          <span>
            <i class="iconfont icon-xuanshang1" style="color: #fdebd3">></i>
            <h4>自由悬赏平台</h4>
          </span>
          <span>
            <i class="iconfont icon-shuaxin" style="color: #dad873"></i>
            <h4>自由交易平台</h4>
          </span>
          <span>
            <i class="iconfont icon-car" style="color: #ed8a0a"></i>
            <h4>自由打车平台</h4>
          </span>
        </div>
        <router-view></router-view>
      </div>
    </header>
    <!-- 中间区域 -->
    <div class="buttom">
      <h2>制作精良，满足您的所有幻想</h2>
      <br />
      <h5 style="color: gray">功能自由和交易自由是liberty的两大特点</h5>
      <div class="tubiao">
        <span>
          <i class="iconfont icon-xiaolian"></i>
          <h4><strong>政客服务</strong></h4>
        </span>
        <span>
          <i class="iconfont icon-tubiao37"></i>
          <h4><strong>企业服务</strong></h4>
        </span>
      </div>
    </div>
    <div class="last">
      <br />
      <h2>平台四大优势</h2>
      <br />
      <h5 style="color: gray">无与伦比的自由是我们为您带来的一份承诺</h5>
      <div class="tubiaos">
        <span>
          <div class="box1"><i class="iconfont icon-jiaoyi"></i></div>
          <br />
          <h5>自由切换的身份</h5>
          <h5>我要找人才</h5>
          <h5>or</h5>
          <h5>我要找任务</h5>
        </span>
        <span>
          <div class="box1">
            <i class="iconfont icon-tubiao_liebiaopailie"></i>
          </div>
          <br />
          <h5>功能分类齐全</h5>
          <h5>兼职悬赏打车拉货</h5>
        </span>
        <span>
          <div class="box1"><i class="iconfont icon-tubiao-1"></i></div>
          <br />
          <h5>引入信誉系统</h5>
          <h5>可实现进阶解锁更多功能</h5>
        </span>
        <span>
          <div class="box1"><i class="iconfont icon-tubiao_dianzan"></i></div>
          <br />
          <h5>引入等价交易概念</h5>
          <h5>实现交易更加自由</h5>
        </span>
      </div>
    </div>
    <!-- 底部 -->
    <br />

    <span style="text-align: center"> <h2>LIBERTY 创建更好的兼职平台</h2></span
    ><br />
    <div class="footer">
      <span>
        <h3>关于我们</h3>
        <br />
        <h5>
          旨在开发满足用户兼职悬赏交易自由灵活的平台，不足之处，欢迎与我们联系
        </h5>
      </span>
      <span>
        <h3>使用流程</h3>
        <br />
        <h5>
          普通用户登录即可使用普通功能，得到一定信誉分并完善个人信息即可进阶为高阶用户，解锁更多功能
        </h5>
        <h5>企业用户完成企业认证并成功登录即可发布兼职任务</h5>
      </span>
      <span>
        <h3>常见问题</h3>
        <br />
        <h5>
          由于某些原因，本平台暂未提供第三方支付功能，需使用者与发布方自行接洽交易
        </h5>
      </span>
      <span class="less">
        <h3>联系我们</h3>
        <br />
        <i>18608267555</i><br />
        <!-- <i class="iconfont icon-youxiangtubiao">1721370022@qq.com</i> -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-align: center;
}
.nav {
  height: 10rem;
  width: 100%;
}
.shapedividers_com-8446 {
  overflow: hidden;
  position: relative;
}
.shapedividers_com-8446::before {
  content: "";
  font-family: "shape divider from ShapeDividers.com";
  position: absolute;
  z-index: 3;
  pointer-events: none;
  background-repeat: no-repeat;
  bottom: -0.1vw;
  left: -0.1vw;
  right: -0.1vw;
  top: -0.1vw;
  background-size: 100% 170px;
  background-position: 50% 100%;
  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z" fill="%23ffe3c8"/><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" opacity=".5" fill="%23ffe3c8"/><path d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z" opacity=".5" fill="%23ffe3c8"/></svg>');
}

@media (min-width: 2100px) {
  .shapedividers_com-8446::before {
    background-size: 100% calc(2vw + 170px);
  }
}

.normal {
  color: black;
  font-size: 14px;
}
header {
  width: 100%;
  height: 70frem;
  background-size: cover;
}
.header_top {
  position: relative;
  width: 100%;
  height: 21rem;
  /* background-color: pink; */
}
.header_top .tips {
  font-size: 3rem;
  position: absolute;
  top: 0;
  left: 3rem;
}
.header_top span {
  display: inline-block;
  width: 10rem;
  height: 100%;
  font-size: 3rem;
  text-align: center;
}
.header_right {
  width: 100%;
  height: 21rem;
  position: relative;
}
.header_right span {
  font-size: 2rem;
  /* background-color: #fff; */
}
.header_right span {
  margin-right: 3rem;
}
.header_right span .normal {
  position: relative;
  padding: 15px 40px;
  background-color: #f9b4ab;
  color: #555;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  transition: 0.5s;
  clip-path: polygon(91% 0%, 100% 50%, 93% 98%, 0% 100%, 7% 50%, 0% 0%);
}

.header_right span .normal:hover {
  color: #fdebd3;
  letter-spacing: 4px;
  clip-path: polygon(100% 0%, 94% 51%, 100% 100%, 8% 99%, 0% 50%, 7% 0%);
}
.header_bottom {
  width: 60%;
  height: 40rem;
  margin: auto;
  margin-top: 8rem;
  margin-bottom: 4rem;
  text-align: center;
  color: #664200;
}
.header_bottom h5 {
  margin-bottom: 5rem;
}
.header_bottom span {
  font-size: 30px;
  color: #664200;
}
.about_work {
  display: flex;
  width: 100%;
  height: 22rem;
  justify-content: space-between;
}
.about_work span {
  width: 20%;
  height: 100%;
}
.about_work span {
  animation: moveup 2s infinite;
}
@keyframes moveup {
  0%,
  100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
}
.buttom {
  width: 40%;
  height: 30rem;
  margin: auto;
  text-align: center;
  /* background-color: pink; */
}
.iconfont {
  color: #000;
}
.tubiao {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20rem;
  /* background-color: white; */
}
.tubiao span {
  width: 40%;
}
.last {
  width: 100%;
  height: 50rem;
  background: url("../assets/imgs/home7.jpeg") no-repeat;
  background-size: cover;
  /* background-color: pink; */
  text-align: center;
  color: black;
}
.tubiaos {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40rem;
  color: #fff;
}
.tubiaos span {
  width: 20%;
  height: 100%;
  margin-left: 10px;
  /* background-color: pink; */
}
.box1 {
  width: 40%;
  margin: auto;
  height: 25%;
  border-bottom: 4px solid #6bc8cd;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  height: 150px;
  background-image: url("../assets/imgs/Borealis.png");
  /* margin-top: 6rem; */
}
.footer span {
  width: 16%;
  height: 100%;
  text-align: center;
  margin-left: 8rem;
  color: #fff;
  /* background-color: pink; */
}

.footer .less {
  text-align: left;
}
.last .iconfont {
  color: #fff;
}
.icon-car:before {
  font-size: 9rem;
  content: "\e66b";
}
.icon-jianzhi:before {
  font-size: 9rem;
  content: "\e66f";
}
.icon-fangxinjiaoyi:before {
  font-size: 9rem;
  content: "\e6e8";
}
.icon-shuaxin:before {
  font-size: 9rem;
}
.icon-jiaoyi:before {
  font-size: 7rem;
  content: "\e674";
}
.icon-xuanshang1:before {
  font-size: 9rem;
  content: "\e677";
}

.icon-yuntubiao {
  font-size: 21rem;
  position: absolute;
  top: 0;
  left: 7rem;
  color: #0f4970;
}
.icon-youxiangtubiao:before {
  font-size: 4rem;
  content: "\e682";
}
.icon-tubiao37:before {
  font-size: 8rem;
  color: #6ccacc;
  content: "\e6a6";
}
.icon-tubiao_dianzan:before {
  font-size: 7rem;
  content: "\e611";
}
.icon-tubiao_liebiaopailie:before {
  font-size: 7rem;
  content: "\e616";
}
.icon-tubiao-1:before {
  font-size: 7rem;
  content: "\e650";
}
.icon-xiaolian:before {
  font-size: 8rem;
  color: #6ccacc;
  content: "\ec80";
}
.icon-tubiao_dianhua:before {
  font-size: 4rem;
  content: "\e65e";
}
</style>
<template>
  <div class="contain">
    <div class="login">
      <div class="main">
        <h1>Register Account</h1>
        <div class="link">
          <div class="left">
            <router-link class="toHome" to="/home">首页</router-link>
          </div>
          <div class="right">
            <span>已有账户？</span>
            <router-link class="toLogin" to="/register">登录</router-link>
          </div>
        </div>
        <div class="box">
          <div class="first">
            <div class="name">
              <div class="text">name:</div>
              <input
                type="text"
                placeholder="用户名"
                v-model="loginObj.userName"
              />
            </div>
            <div class="email">
              <div class="text">emaile:</div>
              <input
                type="text"
                placeholder="邮箱"
                v-model="loginObj.emaile"
                placeholder-class="center"
              />
            </div>
          </div>
          <div class="second">
            <div class="phone">
              <div class="text">phone:</div>
              <input
                type="number"
                placeholder="手机"
                v-model="loginObj.phone"
              />
            </div>
            <div class="password">
              <div class="text">password:</div>
              <input
                type="password"
                placeholder="6-16位字母、数字、字符组合"
                v-model="loginObj.password"
              />
            </div>
          </div>
          <div class="third">
            <div class="send">
              <button @click="getVerify">发送验证码</button>
            </div>
            <div class="inputvorify">
              <input
                type="text"
                placeholder="输入验证码"
                v-model="loginObj.verify"
              />
              <img
                class="showimg"
                id="validateCodeImage"
                alt="未加载请重试"
                style="width: 150px; height: 100px; background-color: red"
              />
            </div>
          </div>
          <div class="agree">
            <input type="checkbox" />
            <h6>遵守X协议</h6>
          </div>
          <button class="signup" @click="postInfo">SignUp</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../api/login";
// import $ from "jquery";
export default {
  name: "login",
  data() {
    return {
      loginObj: {
        userName: "",
        password: "",
        email: "",
        phone: "",
        verify: "",
      },
      codeURL: "",
    };
  },


  methods: {
    postInfo() {
      console.log("注册");
      login(this.loginObj).then((res) => {
        // sessionStorage.setItem("user", JSON.stringfy(res.data.result));
        console.log(res);
        // this.$router.push("/showhome");
      });
    },
    // randomString(e) {
    //   e = e || 32;
    //   var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    //     a = t.length,
    //     n = "";
    //   for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    //   return n;
    // },

    getVerify() {
      console.log(1);
      var show_img = document.querySelector(".showimg");
      show_img.style.display = "block";
      //页面刚加载的时候为其生成验证码
      // var $img = $("#validateCodeImage");
      // $img.prop("src", "https://4a8179z637.uicp.fun/randomCode?");

      //点击验证码图片的时候要能够切换验证码
      // $img.on("click", function () {
      //默认情况下，第一次访问验证码以后，浏览器会基于缓存机制将当前验证码访问路径对应的结果进行缓存
      //如果第二次使用相同的路径访问，则此时浏览器不会重新向服务端发送请求，而是直接从缓存中获取之前缓存的结果
      //这样就算修改了图片的src，图片也不会进行变化，此时需要通过一定的手段“欺骗”浏览器，在访问验证码对应的
      //Servlet的时候让浏览器觉得每次使用的访问路径是不一样的,一般可以在地址栏中带一个随机参数或时间戳
      //   $img.prop(
      //     "src",
      //     "https://4a8179z637.uicp.fun/randomCode?_r=" + new Date().getTime()
      //   );
      // });
      // this.$axios.get("https://4a8179z637.uicp.fun/randomCode").then((res) => {
      //   console.log(res.data);
      //   this.codeURL = res.data;
      // });
    },
  },
};
</script>

<style scoped>
.contain {
  width: 100%;
  background-color: rgb(196, 196, 196);
}
.login {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  text-align: center;
  transform: translate(-50%, -50%);
  background-image: url("../assets/imgs/sea.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.main {
  width: 40%;
  height: 40vw;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 3rem;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-clip-path: inset(10% 0% 2% 0% round 25% 0%);
  clip-path: inset(10% 0% 2% 0% round 25% 0%);
}
.login .main h1 {
  color: #fff;
  font-size: 2rem;
  letter-spacing: 3px;
  margin-top: 2rem;
}
.main .link {
  margin: 1rem 0;
  height: 10%;
  width: 100%;
  display: flex;
  color: #fff;
}
.main .link .left {
  margin-top: 1rem;
  flex: 1;
  text-align-last: left;
}
.main .link .right {
  margin-top: 1rem;
  flex: 1;
  text-align: right;
}
.toHome,
.toLogin {
  color: #fff;
}
.toHome:hover {
  color: brown;
}
.toLogin:hover {
  color: brown;
}
.box {
  margin: 0 2rem;
}
.box .text {
  color: #fff;
  font-size: 1rem;
}
.box .text {
  text-align-last: left;
}
.box .first {
  display: flex;
  text-align-last: left;
}
.box .first .name {
  flex: 1;
}
.box .first .name .text {
  color: black;
}

.box .first .email {
  flex: 1;
}

.box input {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  height: 1.8rem;
  width: 95%;
  text-align-last: left;
}
.box .first .email input::-ms-input-placeholder {
  color: #fff;
}

.box .first .email input::-webkit-input-placeholder {
  color: #fff;
}

input {
  position: relative;
}
input::-webkit-input-placeholder {
  position: absolute;
  font-weight: bold;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box .second .password input::-ms-input-placeholder {
  color: #999999;
}

.box .second .password input::-webkit-input-placeholder {
  color: #999;
}
.box .second {
  display: flex;
  text-align-last: left;
}
.box .second .phone {
  flex: 1;
}
.box .second .password {
  flex: 1;
}
.first,
.second,
.third {
  margin-bottom: 1rem;
}
.third {
  margin-top: 2rem;
  display: flex;
}
.third img {
  position: absolute;
  top: 1.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
.third .send {
  flex: 1;
  text-align: center;
}
.third .inputvorify {
  position: relative;
  flex: 1;
  text-align-last: left;
}
.third button {
  color: #fff;
  font-size: 1rem;
  height: 1.8rem;
  width: 6rem;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 3px;
}

.agree {
  margin-top: 3rem;
}
.agree input {
  width: 1rem;
  height: 1rem;
}
.agree h6 {
  color: #fff;
  font-weight: normal;
}

.signup {
  margin-top: 1rem;
  width: 4.6rem;
  height: 3rem;
  border-radius: 5px;
  background-color: #fff;
  color: black;
  font-size: 1rem;
}
.showimg {
  display: none;
}
</style>
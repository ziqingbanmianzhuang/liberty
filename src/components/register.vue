<template>
  <div class="contain">
    <div class="login">
      <div class="main">
        <h1>Login Account</h1>
        <div class="link">
          <div class="left">
            <router-link class="toHome" to="/home">首页</router-link>
          </div>
          <div class="right">
            <span>未注册？</span>
            <router-link class="toLogin" to="/login">注册</router-link>
          </div>
        </div>
        <div class="box">
          <div class="first">
            <div class="name">
              <div class="text">name:</div>
              <input type="text" placeholder="用户名" v-model="loginObj.uid" />
            </div>
            <div class="password">
              <div class="text">password:</div>
              <input
                type="password"
                placeholder="密码"
                v-model="loginObj.password"
              />
            </div>
          </div>
          <div class="second">
            <button class="goon" @click="postInfo">Go on</button>
          </div>
          <div class="third">
            <div class="forgot">忘记密码?&nbsp;&nbsp;&nbsp;</div>
            <div class="find">
              <a href="#">找回密码</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "../api/register";
export default {
  name: "register",
  data() {
    return {
      loginObj: {
        uid: "",
        password: "",
      },
    };
  },
  methods: {
    postInfo() {
      console.log("登录");
      register(this.loginObj).then((res) => {
        // sessionStorage.setItem("user", JSON.stringfy(res.data.result));
        // this.$router.push("/showhome");
        console.log(res);
      });
      console.log(this.loginObj);
    },
  },
};
</script>

<style scoped>
.contain {
  width: 100%;
  height: 47.4rem;
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
  height: 30vw;
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 15%,
    100% 80%,
    88% 100%,
    13% 100%,
    0% 80%,
    0% 12%
  );
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 15%,
    100% 80%,
    88% 100%,
    13% 100%,
    0% 80%,
    0% 12%
  );
}
.login .main h1 {
  color: #fff;
  font-size: 2rem;
  letter-spacing: 3px;
}
.main .link {
  margin: 1rem 0;
  height: 10%;
  width: 100%;
  display: flex;
  color: #fff;
}
.main .link .left {
  flex: 1;
  text-align-last: left;
}
.main .link .right {
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
.first {
  text-align-last: left;
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
}
.box .first .name {
  flex: 1;
}
.box .first .name .text {
  color: black;
}

.box .first .password {
  flex: 1;
}

.box input {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  height: 1.8rem;
  width: 95%;
  text-align-last: left;
}
.box .first .password input::-ms-input-placeholder {
  color: #fff;
}

.box .first .password input::-webkit-input-placeholder {
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

.second {
  margin: 3rem auto;
  width: 20%;
  height: 2.3rem;
  color: black;
  text-align: center;
}
.second button {
  background-color: #fff;
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
}
.first,
.second,
.third {
  margin-bottom: 1rem;
}
.third {
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  width: 60%;
  height: 3rem;
  font-size: 1rem;
  color: #fff;
}
.third .forgot {
  height: 100%;
  flex: 1;
  margin: auto;
  line-height: 100%;
  text-align-last: right;
}
.third .find {
  text-align-last: left;
  height: 100%;
  flex: 1;
  margin: auto;
  line-height: 100%;
}
.third .find a {
  color: #fff;
}
.third .find a:hover {
  color: #aeaeae;
}
</style>

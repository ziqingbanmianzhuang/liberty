<template>
  <div>
    <div class="post_box">
      <input type="text" v-model="userInfo.uid" placeholder="用户id" />
      <input type="text" v-model="userInfo.userName" placeholder="用户名" />
      <input type="text" v-model="userInfo.password" placeholder="密码" />
      <input type="text" v-model="userInfo.birthDay" placeholder="生日" />
      <input
        type="text"
        v-model="userInfo.socialAddress"
        placeholder="社交账号"
      />
      <input type="text" v-model="userInfo.location" placeholder="地址" />
      <input
        type="text"
        v-model="userInfo.partAddress"
        placeholder="希望兼职地址"
      />
      <input
        type="text"
        v-model="userInfo.partNature"
        placeholder="历史兼职性质"
      />
      <input
        type="text"
        v-model="userInfo.historyPartID"
        placeholder="历史兼职ID"
      />
      <input
        type="text"
        v-model="userInfo.attentionCompany"
        placeholder="关注的公司"
      />
      <input
        type="text"
        v-model="userInfo.partApplication"
        placeholder="申请兼职的帖子ID"
      />
      <input
        type="text"
        v-model="userInfo.evaluations"
        placeholder="所属的评价ID"
      />
      <input type="text" v-model="userInfo.OrderID" placeholder="订单的ID" />
      <input type="text" v-model="userInfo.email" placeholder="邮箱" />
      <input type="text" v-model="userInfo.sex" placeholder="性别" />
      <input
        type="text"
        v-model.number="userInfo.status"
        placeholder="接单状态"
      />
      <input
        type="text"
        v-model="userInfo.selfworkhistory"
        placeholder="自我工作简介"
      />
      <input type="text" v-model="userInfo.payhope" placeholder="预期薪资" />
      <input type="text" v-model="userInfo.station" placeholder="国籍" />
      <input type="text" v-model="userInfo.phone" />
      <button @click="postInfo">提交</button>
    </div>
    <div class="evaluations">
      <input
        type="text"
        v-model="evaluations.uid"
        placeholder="评价所属的用户ID"
      />
      <input
        type="textarea"
        v-model="evaluations.message"
        placeholder="评价的信息"
      />
      <input
        type="text"
        v-model="evaluations.euid"
        placeholder="发布评价的用户ID"
      />
      <input type="text" v-model="evaluations.postID" placeholder="帖子的ID" />
      <input type="text" v-model="evaluations.score" placeholder="评价的分数" />
      <button @click="eval">评价</button>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in postLists" :key="index"></li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="title" placeholder="根据标题模糊查询" />
      <button @click="getPostsByTitle">查询</button>
    </div>
    <div>
      <button @click="queryByViews">根据浏览量查询</button>
    </div>
    <div>
      <button @click="queryByStartTime">根据发布的开始时间查询</button>
    </div>

    <div>
      <input
        type="text"
        v-model.number="workTime"
        placeholder="根据工作时间查询"
      />
      <button @click="queryByWorkTime">根据工作时间查询</button>
    </div>
    <div>
      <input type="text" v-model="emergency" placeholder="根据紧急情况查询" />
      <button @click="queryByEmergency">根据紧急情况查询</button>
    </div>
    <div>
      <input type="text" v-model="workplace" placeholder="根据线下地点查询" />
      <button @click="queryByworkplace">根据发布的开始时间查询</button>
    </div>
    <div>
      <button @click="postFinish">更新帖子</button>
    </div>
    <div>
      <button @click="queryAttentionPostByID">
        根据用户查询该用用户关心的帖子
      </button>
    </div>
    <div>
      <input type="text" v-model="attentionPost.postID" placeholder="帖子ID" />
      <input
        type="text"
        v-model="attentionPost.attentionUID"
        placeholder="关注用户的UID"
      />
      <input
        type="text"
        v-model.number="attentionPost.attentionStatus"
        placeholder="关注状态"
      />
      <button @click="makeAttentionPost">获取标记感兴趣的帖子</button>
    </div>
    <div>
      <input type="text" v-model.number="postType" placeholder="帖子类型" />
      <button @click="queryByPostType">帖子类型</button>
    </div>
  </div>
</template>

<script>
import { postUserInfo } from "../api/postUserInfo";
import { postEval } from "../api/postEval";
import { queryGetDateFunc } from "../scripts/queryGetDateFunc";
import { postAttention } from "../api/postAttention";
// import { postByTitle } from "../api/postByTitle";

export default {
  data() {
    return {
      userInfo: {
        uid: "",
        userName: "",
        password: "",
        birthDay: "",
        socialAddress: "",
        location: "",
        partAddress: "",
        partNature: "",
        historyPartID: "",
        attentionCompany: "",
        evaluations: "",
        OrderID: "",
        email: "",
        sex: "",
        status: 0,
        selfworkhistory: "",
        payhope: "",
        station: "",
        phone: "",
      },
      evaluations: {
        uid: "",
        message: "",
        euid: "",
        postID: "",
        score: "",
      },
      attentionPost: {
        postID: "",
        attentionUID: "",
        attentionStatus: 0,
      },
      postLists: [],
      title: "",
      workTime: 0,
      emergency: "",
      workplace: "",
      postID: "158894542",
      postType: 0,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    postInfo() {
      postUserInfo(this.userInfo).then((res) => {
        console.log(res);
      });
    },
    eval() {
      postEval(this.evaluations).then((res) => {
        console.log(res);
      });
    },
    getPosts() {
      this.$axios
        .get("https://4a8179z637.uicp.fun/user/getAllPost/0?uid=123128347239")
        .then((res) => {
          console.log(res);
          this.postLists = res.data;
        });
    },
    getPostsByTitle() {
      // postByTitle(this.title).then((res) => {
      //   console.log(res);
      // });
      this.$axios
        .get(`https://4a8179z637.uicp.fun/post/title/0?title=${this.title}`)
        .then((res) => {
          console.log(res);
        });
    },
    queryByViews() {
      this.$axios
        .get("https://4a8179z637.uicp.fun/IndexPosts/0")
        .then((res) => {
          console.log(res);
        });
    },

    queryByStartTime() {
      this.$axios
        .get(
          `https://4a8179z637.uicp.fun/post/startworkTime/0?workTime=${queryGetDateFunc(
            new Date()
          )}`
        )
        .then((res) => {
          console.log(res);
        });
      console.log(queryGetDateFunc(new Date()));
    },
    queryByWorkTime() {
      this.$axios
        .get(
          `https://4a8179z637.uicp.fun/post/worktime/0?workTime=${this.workTime}`
        )
        .then((res) => {
          console.log(res);
        });
    },
    queryByEmergency() {
      this.$axios
        .get(
          `https://4a8179z637.uicp.fun/post/Emergency/0?Emergency=${this.emergency}`
        )
        .then((res) => {
          console.log(res);
        });
    },
    queryByworkplace() {
      this.$axios
        .get(
          `https://4a8179z637.uicp.fun/post/offline_workplace/0?workplace=${this.workplace}`
        )
        .then((res) => {
          console.log(res);
        });
    },
    postFinish() {
      this.$axios
        .get(`https://4a8179z637.uicp.fun/post/finish?postID=${this.postID}`)
        .then((res) => {
          console.log(res);
        });
    },
    queryAttentionPostByID() {
      this.$axios
        .get(
          `https://4a8179z637.uicp.fun/post/user/attention_Post/0?uid=${this.postID}`
        )
        .then((res) => {
          console.log(res);
        });
    },
    makeAttentionPost() {
      postAttention(this.attentionPost).then((res) => {
        console.log(res);
      });
    },
    queryByPostType() {
      this.$axios
        .get(
          `https://4a8179z637.uicp.fun/get/postByType/0?postType=${this.postType}`
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
</style>
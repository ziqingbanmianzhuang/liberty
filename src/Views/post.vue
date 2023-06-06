<template>
  <form
    action="http://www.zdhlxl.xyz/post/makePost"
    method="post"
    enctype="application/x-www-form-urlencoded"
  >
    <p>帖子信息</p>
    <input
      type="text"
      name="messages"
      placeholder="put messages"
      v-model="formObj.messages"
    />
    <p>帖子ID</p>
    <input
      type="text"
      name="postID"
      placeholder="put postID"
      v-model="formObj.postID"
    />
    <p>用户ID</p>
    <input
      type="text"
      name="userID"
      placeholder="put userID"
      v-model="formObj.uesrID"
    />
    <p>解决者ID</p>
    <input
      type="text"
      name="handlerID"
      placeholder="put handlerID"
      v-model="formObj.handlerID"
    />
    <p>有意向者ID</p>
    <input
      type="text"
      name="intentionID"
      placeholder="put intentionID"
      v-model="formObj.intentionID"
    />
    <button onclick="onSubmit()">提交</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formObj: {
        messages: "",
        postID: "",
        userID: "",
        handlerID: "",
        intentionID: "",
      },
    };
  },
  created() {
    let _this = this;
    window.onSubmit = _this.onSubmit;
  },

  methods: {
    onSubmit() {
      let formData = JSON.stringify(this.formObj);
      console.log(formData);
      this.$axios
        .post("http://www.zdhlxl.xyz/post/makePost", formData)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
</style>

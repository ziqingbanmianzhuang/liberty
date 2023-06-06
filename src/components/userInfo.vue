<template>
  <div>
    <div class="alert_box">
      <div>用户名:xxx</div>
      <div>密码:123456</div>
      <div>生日:2000-22-12</div>
      <div>邮箱:1721370034@请求.com</div>
      <div>性别:女</div>
      <div>地址:成都</div>
      <div>预期薪资:1000元一个月</div>
      <div>国籍:中国</div>
      <div>希望兼职地址:成都</div>
      <div>社交账号:1721370034@qq.com</div>
      <div>
        <span>接单状态</span
        ><el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style>
</style>
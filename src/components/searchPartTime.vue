<template>
  <div>
    <div class="nav">
      <div class="contain">
        <div>
          <router-link class="normal" to="\home">Home</router-link>
        </div>
        <div>
          <router-link class="normal" to="\login">Login</router-link>
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
    <div class="box">
      <div class="scroll">
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
            <div class="fix">
              <span class="iconfont icon-tubiao_biaoqian">申请</span>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
            <div class="fix">
              <span class="iconfont icon-tubiao_biaoqian">申请</span>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
            <div class="fix">
              <span class="iconfont icon-tubiao_biaoqian">申请</span>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
            <div class="fix">
              <span class="iconfont icon-tubiao_biaoqian">申请</span>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list">
          <div class="left">
            <h1>{{ userName }}</h1>
            <div class="img">
              <span class="iconfont icon-tubiao31"></span>
            </div>
            <div class="phone">{{ phone }}</div>
          </div>
          <div class="right">
            <h2>{{ partTimeTitle }}</h2>
            <div class="texts">
              <span class="text_left">标签分类:{{ postType }}</span>
              <span class="center">|</span>
              <span class="text_left">浏览量:{{ hot }}</span>
              <span class="center">|</span>
              <span class="text_left">发布地址:{{ workPlace }}</span>
              <span class="center">|</span>
              <span class="text_left">发布时间:{{ publishTime }}</span>
            </div>
            <div class="work_time">工作期限:{{ workTime }}天</div>
            <div class="basicInfo">
              <span>BasicInfo:</span>
              <span>|</span>
              <span>交易类型:{{ paytype }}</span>
              <span>|</span>
              <span>工资:${{ taskPays }}</span>
              <span>|</span>
              <span>预期信誉:{{ ExpectedPrestige }}</span>
              <span>|</span>
              <span>预期经验:{{ ExpectedExperience }}</span>
            </div>
            <div class="line">Why don't you join us?</div>
            <div class="information">
              <div class="detailInfo">
                {{ message }}
              </div>
              <div class="ico">
                <span class="iconfont"></span>
              </div>
            </div>
            <div class="footer">
              <div class="join">
                <div class="icon">
                  <span class="iconfont icon-tubiao-3"></span>
                  <span class="joinpeople">参加人数:{{ joinpeople }}</span>
                </div>
              </div>
              <div class="hire">
                <div class="icon">
                  <span class="iconfont icon-tubiao-08"></span>
                  <span class="hirepeople">招聘人数人数:{{ needNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="end">
      <img src="../assets/imgs/weneedyou.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "searchPartTime",
  data() {
    return {
      postType: 43,
      paytype: "入账",
      taskPays: 2000,
      workTime: 10,
      hot: 102,
      workPlace: "成都",
      publishTime: "2022-12-12 12:12:12",
      phone: "+18608267777",
      userName: "半面妆",
      ExpectedPrestige: "10",
      ExpectedExperience: "20",
      joinpeople: 100,
      needNum: 3,
      message: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      partTimeTitle: "兼职详情",
    };
  },
};
</script>

<style scoped>
* {
  text-align: center;
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
.box .scroll {
  height: 150rem;
  width: 100%;
}
.box .scroll::-webkit-scrolllbar {
  display: none;
}
.box {
  overflow: auto;
  height: 150rem;
}
.box .scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
}
.list {
  flex: 1;
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;
  display: flex;
}
.list .left {
  flex: 1;
  margin-right: 3rem;
}
.list:hover {
  background-color: #f2f2f2;
  color: black;
}
.list:hover .fix {
  display: block;
}
.list .right {
  flex: 8;
}
.list .left {
  top: 1rem;
  height: 100%;
  text-align: center;
}
.list .left h1 {
  padding-top: 1rem;
  font-size: 2rem;
}
.list .left .img {
  margin-top: 1rem;
  height: 65%;
  width: 60%;
  margin-bottom: 1rem;
}
.list .left .img .iconfont {
  font-size: 10rem;
  color: #999999;
}
.list .left .phone {
  color: #00ccff;
  font-size: 0.56rem;
}
.list .right {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #66cccc;
}
.list .right h2 {
  text-align-last: left;

  font-size: 2rem;
  color: #66cccc;
  margin-bottom: 1rem;
}
.list .texts {
  width: 100%;
  height: 2rem;
  color: #999999;
  font-size: 0.6rem;
  text-align-last: left;

  margin-bottom: 0.3rem;
  display: flex;
}
.list .texts span {
  padding-right: 1rem;
}

.list .work_time {
  text-align-last: left;

  font-size: 0.7rem;
  font-weight: 600;
  color: #666666;
  margin-bottom: 0.3rem;
}
.basicInfo {
  text-align-last: left;

  color: #999999;
  font-size: 0.6rem;
}
.line {
  text-align-last: left;

  color: #ccc;
  font-size: 2rem;
  margin-bottom: 0.6rem;
}
.information {
  text-align-last: left;

  color: black;
  font-size: 0.6rem;
  margin-bottom: 1rem;
}
.footer {
  text-align-last: left;

  font-weight: 600;
  color: #999;
  font-size: 0.4rem;
}
.basicInfo {
  margin-top: 1rem;
  width: 60%;
  height: 2rem;
  text-align-last: left;
}
.basicInfo span {
  padding-right: 1rem;
}
.footer .join {
  display: inline-block;
  padding-right: 9rem;
}
.footer .hire {
  display: inline-block;
}
.footer .join .icon .iconfont {
  color: #ff6633;
  font-size: 1.3rem;
}

.footer .hire .icon .iconfont {
  color: #66cccc;
  font-size: 1.3rem;
}
.right {
  position: relative;
}
.right .fix {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
}
.right .fix .iconfont {
  font-size: 1rem;
  color: #ffa033;
}
.right .fix .apply {
  font-size: 1rem;
  color: #666666;
}
.right .fix {
  display: none;
}
.end img {
  width: 100%;
  height: 30rem;
}
</style>
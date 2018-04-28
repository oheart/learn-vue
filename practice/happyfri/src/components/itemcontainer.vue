<template>
    <section>
        <header class="home-header clear">
            <div  class="header-page-tits">
                <h4 class="page-tit">
                    <span class="page-tit-txt"  v-if="fatherComponent == 'home'">第一周</span>
                    <span class="page-tit-txt"  v-if="fatherComponent == 'item'">题目一</span>
                </h4>
            </div>
        </header>
        <div class="home-slogan-box" v-if="fatherComponent == 'home'">
            <img src="../assets/images/home_slogan.png" class="home-slogan-img" />
            <router-link to="item">
                <img src="../assets/images/start_btn.png" class="start-btn" />
            </router-link>
        </div>
        <div class="queslist-box"  v-if="fatherComponent == 'item'">
            题目一
            <ul>
                <li class="ques-item">
                    <span class="ques-letter">A</span>
                    <span class="right-answer">正确答案aaa</span>
                </li>
                <li class="ques-item">
                    <span class="ques-letter">B</span>
                    <span class="right-answer">正确答案bbb</span>
                </li>
                <li class="ques-item">
                    <span class="ques-letter">C</span>
                    <span class="right-answer">正确答案ccc</span>
                </li>
                <li class="ques-item">
                    <span class="ques-letter">D</span>
                    <span class="right-answer">正确答案ddd</span>
                </li>
            </ul>
        </div>
    </section>
</template>


<script>
export default {
  name: "itemcontainer",
  data() {
    return {};
  },
  props: ["fatherComponent"],
  methods: {},
  created() {
    // 初始化
  }
};
</script>

<style lang="less">
.header-page-tits {
   float: right;
   margin-right: 12%;
   background: url('../assets/images/page_tit_bg.png');
   background-size: 100% 100%;
   width: 1.48rem;
   height: 2.96rem;
  .page-tit {
    position: relative;
    height: inherit;
        .page-tit-txt{
            font-size: .28rem;
            color: #a57c50;
            position: absolute;
            bottom: .45rem;
            left: .36rem;
        }
  }
}
.home-slogan-box{
    .home-slogan-img{
        width: 5.12rem;
        margin: 0 auto;
    }
    .start-btn{
        width: 1.73rem;
        height: .84rem;
        margin: .7rem auto 0;
    }
}
.queslist-box{
    width: 4.88rem;
    height: 3.79rem;
    margin: 0 auto;
    background: url('../assets/images/ques_bg.png');
    background-size: 100% 100%;
}

</style>
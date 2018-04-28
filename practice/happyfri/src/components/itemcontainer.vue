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
        <div  class="queslist-outer-wrapper" v-if="fatherComponent == 'item'">
          <div class="queslist-box">
              <h4 class="ques-item-tit">题目一</h4>
              <ul class="queslist-ul">
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
           <router-link to="item">
                <img src="../assets/images/next_ques_btn.png" class="next-ques-btn" />
            </router-link>
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
        margin: .8rem auto 0;
    }
}
.queslist-outer-wrapper{
    width: 4.88rem;
    height: 3.79rem;
    margin: 0 auto;
    background: url('../assets/images/ques_bg.png');
    background-size: 100% 100%;
    .queslist-box{
      width: 60%;
      margin: 0 auto 0;
      padding-top: 12%;
      .ques-item-tit{
        font-size: .26rem;
        color: #FFF;
      }
      .queslist-ul{
        color: #FFF;
        font-size: .2rem;
        .ques-item{
          margin-top: .1rem;
          .ques-letter{
            width:.3rem;
            height: .3rem;
            line-height: .3rem;
            display: inline-block;
            border: 1px solid #fff;
            border-radius: 50%;
            text-align: center;
          }
        }
      }
    }
    .next-ques-btn{
        width: 1.73rem;
        height: .84rem;
        margin: 1.4rem auto 0;
    }
}


</style>

<template>
    <section>
        <header class="home-header clear">
            <div  class="header-page-tits">
                <h4 class="page-tit">
                    <span class="page-tit-txt"  v-if="fatherComponent == 'home'">{{level}}</span>
                    <span class="page-tit-txt"  v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
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
              <h4 class="ques-item-tit">{{itemDetail[itemNum -1].topic_name}}</h4>
              <ul class="queslist-ul">
                  <li class="ques-item"
                        v-for="(item, index) in itemDetail[itemNum -1].topic_answer"
                        v-bind:key="item.topic_answer_id"
                        @click="choosed(index, item.topic_answer_id)"
                    >
                      <span class="ques-letter" v-bind:class="{'active-ques-letter': choosedNum == index}">{{chooseType(index)}}</span>
                      <span class="right-answer">{{item.answer_name}}</span>
                  </li>
                  <!-- <li class="ques-item">
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
                  </li> -->
              </ul>
          </div>
          <img src="../assets/images/next_ques_btn.png" class="next-ques-btn" @click="nextItem"
                v-if="itemNum < itemDetail.length"/>
           <img src="../assets/images/next_ques_btn.png" class="next-ques-btn" v-else  @click="submitAnswer"
                />
        </div>
    </section>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "itemcontainer",
  data() {
    return {
      itemId: null, // 题目ID，
      choosedNum: null, // 选中答案索引
      choosedId: null // 选中答案id
    };
  },
  props: ["fatherComponent"],
  computed: mapState([
    // 当映射的计算属性的名称与state的子节点相同时，也可以给mapState传一个字符串数组。'itemNum'相当于映射this.itemNum为store.state.itemNum,即 itemNum: state => state.itemNum
    "itemNum", // 第几题
    "level", // 第几周
    "itemDetail", // 题目详情
    "timer" // 计时器
  ]),
  methods: {
    setDefaultBodyBg: function() {
      return require("../assets/images/default_body_bg.jpg");
    },
    ...mapActions(["addNum", "initializeData"]),
    // 点击下一题
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        // 保存答案，题目索引加一，调到下一题
        this.addNum(this.chooseId);
      } else {
        alert("您还没有选择答案哦");
      }
    },
    // 索引0-3对应答案A-D
    chooseType: type => {
      switch (type) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    // 选中的答案信息
    choosed(type, id) {
      this.choosedNum = type;
      this.chooseId = id;
    },
    // 到达最后一题，交卷，清空定时器，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.chooseId);
        clearInterval(this.timer);
        this.$router.push("score");
      } else {
        alert("您还没有选择答案哦");
      }
    }
  },
  created() {
    // 初始化
    if (this.fatherComponent == "home" || this.fatherComponent == "item") {
      this.initializeData();
      document.body.style.backgroundImage = 'url(' + this.setDefaultBodyBg() + ')';
    }
  }
};
</script>

<style lang="less">
.header-page-tits {
  float: right;
  margin-right: 12%;
  background: url("../assets/images/page_tit_bg.png");
  background-size: 100% 100%;
  width: 1.48rem;
  height: 2.96rem;
  .page-tit {
    position: relative;
    height: inherit;
    .page-tit-txt {
      font-size: 0.28rem;
      color: #a57c50;
      position: absolute;
      bottom: 0.45rem;
      left: 0.36rem;
    }
  }
}
.home-slogan-box {
  .home-slogan-img {
    width: 5.12rem;
    margin: 0 auto;
  }
  .start-btn {
    width: 1.73rem;
    height: 0.84rem;
    margin: 0.8rem auto 0;
  }
}
.queslist-outer-wrapper {
  width: 4.88rem;
  height: 3.79rem;
  margin: 0 auto;
  background: url("../assets/images/ques_bg.png");
  background-size: 100% 100%;
  .queslist-box {
    width: 60%;
    margin: 0 auto 0;
    padding-top: 12%;
    .ques-item-tit {
      font-size: 0.26rem;
      color: #fff;
    }
    .queslist-ul {
      color: #fff;
      font-size: 0.2rem;
      .ques-item {
        margin-top: 4%;
        .ques-letter {
          width: 0.3rem;
          height: 0.3rem;
          line-height: 0.3rem;
          display: inline-block;
          border: 1px solid #fff;
          border-radius: 50%;
          text-align: center;
          margin-right: 0.1rem;
        }
        .active-ques-letter {
          background-color: #ffd400;
          color: #575757;
          border-color: #ffd400;
        }
      }
    }
  }
  .next-ques-btn {
    width: 1.73rem;
    height: 0.84rem;
    margin: 1.4rem auto 0;
  }
}
</style>

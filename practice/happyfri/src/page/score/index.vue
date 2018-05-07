<template>
    <div class="your-score-container">
        <div class="your-scores">
            <p class="your-socre-num">{{score}}分!</p>
            <p class="result-tips">{{scoreTips}}</p>
        </div>
        <div class="share-score">
            <img src="../../assets/images/share_img.png" class="share-img"
              @click="showCover" />
            <p class="share-tit">关注葡萄之家，获取答案。</p>
            <img src="../../assets/images/QRcode.png" class="QRcode-img" />
        </div>
        <div class="share_cover" v-if="showHide" @click="showCover">
            <img src="../../assets/images/share_friends_img.png" class="share-friends-img"/>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "score",
  data() {
    return {
      showHide: false, // 是否显示提示
      score: 0, // 分数
      scoreTips: "", // 分数提示
      rightAnswer: [2, 7, 12, 13, 18], // 正确答案
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ]
    };
  },
  computed: mapState(["answerid"]),
  created() {
    this.computedScore();
    this.getScoreTip();
    document.body.style.backgroundImage = "url(" + this.setScoreBodyBg() + ")";
  },
  methods: {
    // 设置分数页body的背景
    setScoreBodyBg: function() {
      return require("../../assets/images/score_body_bg.jpg");
    },
    // 计算分数
    computedScore() {
      this.answerid.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    // 根据分数显示提示
    getScoreTip: function() {
      if (this.score <= 20) {
        this.scoreTips = this.scoreTipsArr[0];
        return;
      }
      if (this.score <= 40) {
        this.scoreTips = this.scoreTipsArr[1];
        return;
      }
      if (this.score <= 60) {
        this.scoreTips = this.scoreTipsArr[2];
      }
      if (this.score <= 80) {
        this.scoreTips = this.scoreTipsArr[3];
      }
      if (this.score <= 100) {
        this.scoreTips = this.scoreTipsArr[4];
      }
    },
    // 是否显示分享提示
    showCover: function(){
      this.showHide = !this.showHide;
    }
  }
};
</script>

<style lang="less">
.your-score-container {
  .your-scores {
    width: 5rem;
    height: 4.7rem;
    background: url("../../assets/images/score_bg.png");
    background-size: 100% 100%;
    margin: 0.6rem auto 0;
    position: relative;
    font-size: 0.02rem;
    .your-socre-num {
      color: #a51d31;
      position: absolute;
      top: 2.5rem;
      font-size: 0.7rem;
      width: 100%;
      text-align: center;
    }
    .result-tips {
      color: #3e2415;
      position: absolute;
      bottom: 0.3rem;
      font-size: 0.3rem;
      width: 85%;
      text-align: center;
      left: 10%;
    }
  }
  .share-score {
    text-align: center;
    .share-img {
      width: 3rem;
      margin: 0.4rem auto 0;
    }
    .share-tit {
      color: #664718;
      margin: 0.8rem auto 0.2rem;
    }
    .QRcode-img {
      width: 3rem;
      margin: 0 auto;
    }
  }
  .share_cover {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    background: #000;
    background-size: 100% 100%;
    opacity: 0.85;
    z-index: 999;
    .share-friends-img {
      width: 82%;
      position: fixed;
      top: 0.3rem;
      z-index: 1000;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>

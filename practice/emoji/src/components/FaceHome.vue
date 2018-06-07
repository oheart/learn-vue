<template>
  <div class="face-home-container">
     <div class="category-part">
        <h4 class="mark-tit">分类>></h4>
        <ul class="category-list">
          <!-- <li class="category-item active-face-item cursor">全部</li>
          <li class="category-item cursor">猫</li>
          <li class="category-item cursor">猫1</li>
          <li class="category-item cursor">猫2</li>
          <li class="category-item cursor">猫3</li> -->
          <li class="category-item cursor">全部</li>
          <li 
              class="category-item cursor"
              v-for="(item, index) in uniqueCategory" 
              :key="item.fileName"
              @click="toggleTab(index)"  
              :class="{'active-face-item': currentIndex == index}"     
            >
            {{item}}
          </li>
        </ul>
     </div>
     <div class="tag-part">
       <h4 class="mark-tit">标签>></h4>
       <ul class="tag-list">
          <!-- <li class="tag-item cursor">全部</li>
          <li class="tag-item cursor">大佬</li>
          <li class="tag-item cursor">大佬</li>
          <li class="tag-item cursor">大佬</li>
          <li class="tag-item cursor">大佬</li> -->
          <li class="tag-item cursor">全部</li> 
         <li class="tag-item cursor" v-for="item in uniqueTags" :key="item.fileName">
           {{item}}
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
import Vue from "vue";

import face from "../api/face.json";
import Service from "../utils/service";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      faces: face,
      currentIndex: 0
    };
  },
  computed: {
    uniqueCategory: function() {
      var categories = this.faces.map(item => item.category);
      return Service.unique(categories);
    },
    uniqueTags: function() {
      var tags = this.faces.map(item => item.tag);
      return Service.unique(Service.flatten(tags));
    }
  },
  methods: {
    toggleTab(index) {
      this.currentIndex = index;
    }
  },
  created() {
    console.log("faces", this.faces);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.default-face-item() {
  display: inline-block;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  padding: 4px 16px;
  color: #666;
  background: #fff;
  margin: 0 10px 10px 0;
}
.active-face-item() {
  display: inline-block;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  color: rgba(255, 255, 255, 0.8);
  background-color: #009688;
  border-color: #009688;
  border-radius: 3px;
  padding: 4px 16px;
  margin: 0 10px 10px 0;
}
.mark-tit {
  margin-bottom: 5px;
}
.face-home-container {
  .category-part {
    .category-list {
      .category-item {
        .default-face-item;
        &:hover {
          .active-face-item;
        }
      }
      .active-face-item {
        .active-face-item;
      }
    }
    margin-bottom: 20px;
  }
  .tag-part {
    .tag-list {
      .tag-item {
        .default-face-item;
        &:hover {
          .active-face-item;
        }
      }
      .active-face-item {
        .active-face-item;
      }
    }
    margin-bottom: 20px;
  }
}
</style>

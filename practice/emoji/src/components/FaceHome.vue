<template>
  <div class="face-home-container">
     <!-- 分类 -->
     <div class="category-part">
        <h4 class="mark-tit">分类>></h4>
        <ul class="category-list">
          <!-- <li class="category-item active-face-item cursor">全部</li>
          <li class="category-item cursor">猫</li>
          <li class="category-item cursor">猫3</li> -->
          <li class="category-item cursor"
              :class="{'active-face-item': currentCategoryIndex == null}"
              @click="clickAllCategoryTab()"
            >全部</li>
          <li
              class="category-item cursor"
              v-for="(item, index) in uniqueCategory"
              :key="item.fileName"
              @click="toggleCategoryTab(index, item)"
              :class="{'active-face-item': currentCategoryIndex == index}"
            >
            {{item}}
          </li>
        </ul>
     </div>
     <!-- 标签 -->
     <div class="tag-part">
       <h4 class="mark-tit">标签>></h4>
       <ul class="tag-list">
          <!-- <li class="tag-item cursor">全部</li>
          <li class="tag-item cursor">大佬</li> -->
         <li class="tag-item cursor"
            :class="{'active-face-item': currentTabIndex == null}"
            @click="clickAllTagTab()"
            >全部</li>
         <li class="tag-item cursor"
              v-for="(item, index) in uniqueTags"
              :key="item.fileName"
              @click="toggleTagsTab(index, item)"
              :class="{'active-face-item': currentTabIndex == index}"
            >
           {{item}}
         </li>
       </ul>
     </div>
      <!-- 筛选结果 -->
      <div class="face-result-part">
        筛选结果：共 {{totalImgNum}} 张，共 {{totalPages}} 页，每页{{pageLimit}}条，当前第 {{currentPage}} 页。
      </div>
     <!-- 对应的表情图片列表 -->
     <div class="facelist-part">
       <div class="facelist-item"
          v-for="item in facesToShow"
          :key="item.fileName"
          >
          <img :src="'../static/' + item.fileName" class="face-img" />
          <h5 class="face-name">{{item.name}}</h5>
       </div>
     </div>
     <!-- 分页 -->
     <div class="page-part">
        <a class="cursor prev-page" @click="goPage(currentPage - 1)">&lt;&lt;上一页</a>
        <a class="cursor next-page" @click="goPage(currentPage + 1)">下一页&gt;&gt;</a>
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
      currentCategoryIndex: null,
      currentTabIndex: null,
      totalImgNum: 0,
      pageLimit: 10,
      facesToShow: face.slice(0,10),
      currentPage: 1,
      storeFacesForTag: ""
    };
  },
  computed: {
    uniqueCategory: function() {
      let categories = this.faces.map(item => item.category);
      return Service.unique(categories);
    },
    uniqueTags: function() {
      if (this.selCategory) {
        let filterCategories = this.faces.filter(
          item => item.category == this.selCategory
        );
        let tags = filterCategories.map(item => {
          return item.tag;
        });
        return Service.unique(Service.flatten(tags));
      } else {
        let tags = this.faces.map(item => {
          return item.tag;
        });
        return Service.unique(Service.flatten(tags));
      }
    },
    totalPages: function() {
      return Math.ceil(this.totalImgNum / this.pageLimit);
    },
    selCategory: function() {
      let categories = this.faces.map(item => item.category);
      let selCategory = this.uniqueCategory[this.currentCategoryIndex];
      return selCategory;
    },
    selTag: function() {
      let tags = this.faces.map(item => item.tag);
      let selTag = this.uniqueTags[this.currentTabIndex];
      return selTag;
    }
  },
  methods: {
    toggleCategoryTab(index, category) {
      // 切换分类时默认显示全部标签
      this.currentTabIndex = null;
      this.currentCategoryIndex = index;
      // 根据分类过滤要显示的分类
      if (category) {
        this.facesToShow = this.faces.filter(item => item.category == category).slice(0,10);
      }
      this.storeFacesForTag = this.facesToShow;
    },
    toggleTagsTab(index, tag) {
      this.currentTabIndex = index;
      // 根据分类过滤要显示的标签
      if (this.selCategory && tag) {
        this.facesToShow = this.storeFacesForTag.filter(
          item => item.tag.indexOf(tag) != -1
        );
      } else if (tag) {
        this.facesToShow = this.faces.filter(
          item => item.tag.indexOf(tag) != -1
        ).slice(0,10);
      }
    },
    clickAllCategoryTab() {
      // 切换分类时默认显示全部标签
      this.currentTabIndex = null;
      this.currentCategoryIndex = null;
      this.facesToShow = this.faces.filter(item => item.category).slice(0,10);
    },
    clickAllTagTab() {
      this.currentTabIndex = null;
      this.facesToShow = this.faces.filter(item => {
        if (this.selCategory) {
          return item.tag && item.category == this.selCategory;
        } else {
          return item.tag;
        }
      }).slice(0,10);
    },
    goPage(currentPage){
      console.log('currentPage', currentPage); 
      if(currentPage < 1){
        alert('最后了,没有上一页了o(╥﹏╥)o')
      }else if(currentPage > this.totalPages){
         alert('最后了,没有下一页o(╥﹏╥)o')
      }else{
        console.log('currentPage', currentPage);
        
      }
    }
  },
  created() {
    console.log("faces", this.faces);
    // 表情图片总张数
    this.totalImgNum = this.faces.length;
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
  .facelist-part {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    margin: 0 15%;
    .facelist-item {
      width: 20%;
      text-align: center;
      margin-bottom: 10px;
      .face-img {
        width: 70%;
      }
      .face-name {
        font-size: 18px;
      }
    }
  }
  .face-result-part {
    text-align: center;
    margin: 20px 0;
  }
  .page-part {
    text-align: center;
    .prev-page {
      margin-right: 20px;
    }
  }
}
</style>

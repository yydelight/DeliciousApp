<template>
  <div class="hello">
    <!-- 顶部固定导航 -->
    <mt-header fixed title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="search"></mt-button>        
      </router-link>
      <router-link to="/" slot="center">
        <mt-button>菜单</mt-button>        
      </router-link>
      <mt-button icon="plus" slot="right">发菜谱</mt-button>
    </mt-header>

    <!-- 固定在底部的选项卡 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="菜谱">
        <img slot="icon" src="../assets/menu-icon/tab_recipe_red.png">
        菜谱
      </mt-tab-item>
      <mt-tab-item id="话题">
        <img slot="icon" src="../assets/menu-icon/tab_topic_gray.png">
        话题
      </mt-tab-item>
      <mt-tab-item id="珍选">
        <img slot="icon" src="../assets/menu-icon/tab_select_grey.png">
        珍选
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/menu-icon/tab_user_gray.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

    <!-- 搜索栏 -->

    <!-- banner广告栏 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item> <img src="../assets/banner-img/1.jpg"> </mt-swipe-item>
      <mt-swipe-item> <img src="../assets/banner-img/2.jpg"> </mt-swipe-item>
      <mt-swipe-item> <img src="../assets/banner-img/3.jpg"> </mt-swipe-item>
      <mt-swipe-item> <img src="../assets/banner-img/4.jpg"> </mt-swipe-item>
      <mt-swipe-item> <img src="../assets/banner-img/5.jpg"> </mt-swipe-item>
    </mt-swipe>

    <!-- 菜单栏 -->
    <mt-tabbar v-model="menuSelected" class="yyMenu">
      <mt-tab-item id="专题">
        <img slot="icon" src="../assets/menu-icon/home_topic.png">
        专题
      </mt-tab-item>
      <mt-tab-item id="菜单">
        <img slot="icon" src="../assets/menu-icon/home_menu.png">
        菜单
      </mt-tab-item>
      <mt-tab-item id="视频">
        <img slot="icon" src="../assets/menu-icon/home_video.png">
        视频
      </mt-tab-item>
      <mt-tab-item id="活动">
        <img slot="icon" src="../assets/menu-icon/home_event.png">
        活动
      </mt-tab-item>
      <mt-tab-item id="福利社">
        <img slot="icon" src="../assets/menu-icon/home_welfare.png">
        福利社
      </mt-tab-item>
    </mt-tabbar>

    <!-- 流行与排行 -->
    <div class="popular">
      <!-- 标题 -->
      <div class="popular_title">
        <img src="../assets/menu-icon/title_icon.png">
        <span>流行与排行</span>
      </div>
      <!-- 主要内容 -->
      <mt-cell v-for="menu in popularMenu" :title=menu.title :label=menu.label class="popular_content" >
        <img slot="icon" src="../assets/banner-img/pf1.jpg" width="64" height="64">
      </mt-cell>
    </div>
       
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '菜谱',
      menuSelected:'',
      popularMenu:[{
        title:"爱吃[土豆]的都是胖天使？",
        label:"菜单|快来看看土豆还有哪些吃法",
        src:"../assets/banner-img/pf1.jpg"
      },{
        title:"[鸭血]的美味做法大全~",
        label:"菜单|保证好吃到停不下来！",
        src:"../assets/banner-img/pf2.jpg"
      },{
        title:"深夜食堂的主角-小龙虾",
        label:"专题|除了吃，你还了解多少？",
        src:"../assets/banner-img/pf2.jpg"
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  font-family: "微软雅黑";
}

body{
  margin: 8px 0;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


/*固定导航更换颜色*/
.mint-header{
  background-color: #FE5761;
}
.mint-header a{
  color:#fff;
}

/*改变底部tab被选中的状态*/
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
    color: #FE5761;
}

/*修改轮播的高度*/
.mint-swipe{
  height:164px;
}
.mint-swipe img{
  width: 100%;
  height: 100%;
}

/*菜单栏*/
.yyMenu{
  display: block;
  position: relative;
}
.yyMenu a{
  display: inline-block;
  margin: 1% 5%;
}

/*流行与排行*/
.popular{
  margin: 1%;
}
.popular_title{
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  vertical-align: top;
  margin-left: 5px;
}
.popular_title img{
  width: 14px;
  height: 14px;
}
/*流行与排行的主要内容*/
.popular_content .mint-cell-title {
    padding-top: 10px;
    overflow: hidden;
}
.popular_content .mint-cell-wrapper{
  padding: 0 0;
  margin-top: 1%;
  margin-bottom: 1%;
}
.popular_content .mint-cell-title img {
    vertical-align: middle;
    float: left;
    margin-left: 5px;
}
.popular_content .mint-cell-text {
    vertical-align: top;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    color: #000;
    width: 70%;
    text-align: left;
}
.popular_content .mint-cell-label {
    font-size: 12px;
    margin-top: 17px;
    margin-left: 10px;
    float: left;
}
</style>

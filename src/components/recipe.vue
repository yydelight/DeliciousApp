<template>
  <div class="recipe">
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
    <div class="recipeSort_content yyMenu">
      <mt-cell v-for="menu in menus" :title=menu.title>
        <img slot="icon" :src=menu.src width="24" height="24">
      </mt-cell>
    </div>  



    <!-- 流行与排行 -->
    <div class="popular">
      <!-- 标题 -->
      <div class="popular_title">
        <img src="../assets/menu-icon/title_icon.png">
        <span>流行与排行</span>
      </div>
      <!-- 主要内容 -->
      <mt-cell v-for="menu in popularMenu" :title=menu.title :label=menu.label class="popular_content" >
        <img slot="icon" :src=menu.src width="64" height="64">
      </mt-cell>
    </div>

    <!-- 菜谱分类精选 -->
    <div class="recipeSort">
      <!-- 标题 -->
      <div class="recipe_title">
        <img src="../assets/menu-icon/title_icon.png">
        <span>菜谱分类精选</span>
      </div>
      <!-- 主要内容 -->
      <div class="recipeSort_content">
        <mt-cell v-for="sort in recipeSorts" :title=sort.title :label=sort.label>
          <img slot="icon" :src=sort.src width="65" height="65">
        </mt-cell>
      </div>      
    </div>

    <!-- 多种分类 -->
    <div class="sorts">
      <mt-badge size="small" color="#fff">热菜</mt-badge>
      <mt-badge size="small" color="#fff">凉菜</mt-badge>
      <mt-badge size="small" color="#fff">汤羹</mt-badge>
      <mt-badge size="small" color="#fff">主食</mt-badge>
      <mt-badge size="small" color="#fff">小吃</mt-badge>
      <mt-badge size="small" color="#fff">川菜</mt-badge>
      <mt-badge size="small" color="#fff">夏季食谱</mt-badge>
      <mt-badge size="small" color="#fff">瘦身</mt-badge>
      <mt-badge size="small" color="#fff">快手菜</mt-badge>
    </div>

    <!-- 查看全部菜谱分类 -->
    <div class="allSorts">
      <mt-badge size="small" color="#fff">查看全部菜谱分类</mt-badge>      
    </div>

    <!-- 时令与热门食材 -->
    <div class="recipeSort hotMaterial">
      <!-- 标题 -->
      <div class="recipe_title">
        <img src="../assets/menu-icon/title_icon.png">
        <span>时令与热门食材</span>
      </div>
      <!-- 主要内容 -->
      <div class="recipeSort_content">
        <mt-cell v-for="meterial in materialSorts" :title=meterial.title>
          <img slot="icon" :src=meterial.src width="50" height="50">
        </mt-cell>
      </div>      
    </div>

    <!-- 查看全部食材 -->
    <div class="allSorts">
      <mt-badge size="small" color="#fff">查看全部食材</mt-badge>      
    </div>  

    <!-- 最新推荐的菜谱 -->
    <div class="recipeSort recoRecipe">
      <!-- 标题 -->
      <div class="recipe_title">
        <img src="../assets/menu-icon/title_icon.png">
        <span>最新推荐的菜谱</span>
      </div>
      <!-- 主要内容 -->
      <div class="recipeSort_content recoRecipe_content">
        <mt-cell v-for="recommend in newRecipeReco" :title=recommend.title :label=recommend.label>
          <img slot="icon" :src=recommend.src width="100%" height="100%">
        </mt-cell>
      </div>      
    </div>  
       
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui'
import topic from '../components/topic.vue'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

export default {
  name: 'hello',
  components: {
    topic
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuSelected:'',
      menus:[{
        title:"专题",
        src:require("../assets/menuImg/home_topic.png")
      },{
        title:"菜单",
        src:require("../assets/menuImg/home_menu.png")
      },{
        title:"视频",
        src:require("../assets/menuImg/home_video.png")
      },{
        title:"活动",
        src:require("../assets/menuImg/home_event.png")
      },{
        title:"福利社",
        src:require("../assets/menuImg/home_welfare.png")
      }],
      popularMenu:[{
        title:"爱吃[土豆]的都是胖天使？",
        label:"菜单|快来看看土豆还有哪些吃法",
        src:require("../assets/popularImg/pf1.jpg")
      },{
        title:"[鸭血]的美味做法大全~",
        label:"菜单|保证好吃到停不下来！",
        src:require("../assets/popularImg/pf2.jpg")
      },{
        title:"深夜食堂的主角-小龙虾",
        label:"专题|除了吃，你还了解多少？",
        src:require("../assets/popularImg/pf3.jpg")
      },{
        title:"盘点孕妇必吃的12种孕期事物",
        label:"知识|饮食与健康",
        src:require("../assets/popularImg/pf4.jpg")
      },{
        title:"人气菜肴",
        label:"超过50人收藏的菜谱都超赞( • ̀ω•́ )✧",
        src:require("../assets/popularImg/pf5.jpg")
      },{
        title:"一周热门",
        label:"近7天来最受欢迎的新菜谱，不容放过",
        src:require("../assets/popularImg/pf6.jpg")
      }
      ],
      recipeSorts:[{
        title:"家常菜",
        label:"人人都是美食家",
        src:require("../assets/recipeImg/rs1.jpg")
      },{
        title:"早餐",
        label:"一日之计在于晨",
        src:require("../assets/recipeImg/rs2.jpg")
      },{
        title:"烘焙",
        label:"分类很全 方子超多",
        src:require("../assets/recipeImg/rs3.jpg")
      },{
        title:"妈妈派",
        label:"孕妇 辅食 亲子菜",
        src:require("../assets/recipeImg/rs4.jpg")
      }],
      materialSorts:[{
        title:"薏米",
        src:require("../assets/materialImg/hm1.jpg")
      },{
        title:"木耳",
        src:require("../assets/materialImg/hm2.jpg")
      },{
        title:"冬瓜",
        src:require("../assets/materialImg/hm3.jpg")
      },{
        title:"玉米",
        src:require("../assets/materialImg/hm4.jpg")
      },{
        title:"小龙虾",
        src:require("../assets/materialImg/hm5.jpg")
      },{
        title:"鸡肉",
        src:require("../assets/materialImg/hm6.jpg")
      },{
        title:"青口贝",
        src:require("../assets/materialImg/hm7.jpg")
      },{
        title:"芋头",
        src:require("../assets/materialImg/hm8.jpg")
      },{
        title:"红薯",
        src:require("../assets/materialImg/hm9.jpg")
      },{
        title:"乌鸡",
        src:require("../assets/materialImg/hm10.jpg")
      },{
        title:"培根",
        src:require("../assets/materialImg/hm11.jpg")
      },{
        title:"全部食材",
        src:require("../assets/materialImg/more.jpg")
      }],
      newRecipeReco:[{
        title:"虎皮辣椒炒肥牛",
        label:"天国的女儿",
        src:require("../assets/recipeImg/nrr1.jpg")
      },{
        title:"挂糊花生米",
        label:"小玉厨房",
        src:require("../assets/recipeImg/nrr2.jpg")
      },{
        title:"茄汁肉酱披萨盒",
        label:"小妞_hebycE",
        src:require("../assets/recipeImg/nrr3.jpg")
      },{
        title:"茄汁牛肉酱拌面",
        label:"小妞_hebycE",
        src:require("../assets/recipeImg/nrr4.jpg")
      },{
        title:"红烧猪骨",
        label:"碗里姜膳",
        src:require("../assets/recipeImg/nrr5.jpg")
      },{
        title:"香煎杏鲍菇",
        label:"一米阳光612",
        src:require("../assets/recipeImg/nrr6.jpg")
      },{
        title:"干锅茶树菇",
        label:"食趣菜菜屋的屋",
        src:require("../assets/recipeImg/nrr7.jpg")
      },{
        title:"美味鲜虾肠粉",
        label:"雪峰儿",
        src:require("../assets/recipeImg/nrr8.jpg")
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


/*解决谷歌字体小于12px没效果*/
/*.small-font{    
  font-size:12px; 
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.90);
}*/
.recipe{
  margin-top: 60px;
}


/*固定导航更换颜色*/
.mint-header{
  background-color: #FE5761;
}
.mint-header a{
  color:#fff;
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
  margin-bottom: 15px;
}
.yyMenu .mint-cell-wrapper,.yyMenu .mint-cell:last-child{
  background-image: none !important;
}
.yyMenu a{
  width: 18% !important;
  margin: 0 3px;
}
.yyMenu .mint-cell-text{
  font-size: 12px !important;
  display: block;
  margin-top: 5px;
}

/*流行与排行*/
.popular,.recipeSort{
  margin: 1%;
}
.popular_title,.recipe_title{
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  margin-left: 5px;
}
.popular_title img,.recipe_title img{
  width: 14px;
  height: 14px;
}
.popular_title span,.recipe_title span{
  vertical-align: top;
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

/*菜谱精选分类*/
.recipeSort{
  margin-top: 6%;
}
.recipeSort .mint-cell-wrapper{
  background-image: none;
  /*text-align: left;*/
}
.recipeSort_content{
  margin-top: 2%;
}
.recipeSort_content a{
  display: inline-block;
  width: 25%;
  vertical-align: top;
}
.recipeSort .mint-cell-text{
  display: block;
  text-align: center;  
  font-size: 14px;
  /*-webkit-transform: scale(0.90);*/
  padding-top: 6%;
}
.recipeSort .mint-cell-label{
  font-size: 12px;
}
.recipeSort .mint-cell:last-child{
  background-image: none;
}
/*多种分类*/
.sort{
  margin: 15px 0px;
}
.sorts .mint-badge {
  color: #333;
  width: 23%;
  margin: 2%;
}
.sorts .mint-badge.is-size-small {
  border: 1px solid #bbb;
  border-radius: 12px;
  padding: 6px 7px;
  letter-spacing: 1px;
}
/*全部分类*/
.allSorts .mint-badge{
  color: #FE5761;
}
.allSorts .mint-badge.is-size-small {
  border: 1px solid #FE5761;
  padding: 5px 43px;
  margin: 3% 0;
  letter-spacing: 1px;
  border-radius: 24px;
}
.hotMaterial .mint-cell-wrapper{
  margin-bottom: 15px;
}
/*最新推荐的菜谱*/
.recoRecipe{

}
.recoRecipe_content a{
  width: 50%;
  margin-top: 10px;
}
</style>

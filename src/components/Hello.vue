<template>
  <div class="hello">
    <!-- 顶部固定导航 -->
<!--     <mt-header fixed title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="search"></mt-button>        
      </router-link>
      <router-link to="/" slot="center">
        <mt-button>菜单</mt-button>        
      </router-link>
      <mt-button icon="plus" slot="right">发菜谱</mt-button>
    </mt-header> -->

    <!-- 固定在底部的选项卡 -->
    <mt-tabbar fixed>
      <mt-tab-item id="菜谱" @click.native="showIcon(1)" @click.native.prevent="selected='菜谱'" :class="{ textRed: iconstate == 1 }">
        <img slot="icon" src="../assets/menu-icon/tab_recipe_gray.png">
        <img slot="icon" v-show="iconstate==1" class="hide_icon" src="../assets/menu-icon/tab_recipe_red.png">
        菜谱
      </mt-tab-item>
      <mt-tab-item id="话题" @click.native="showIcon(2)" @click.native.prevent="selected='话题'" :class="{ textRed: iconstate == 2 }">
        <img slot="icon" src="../assets/menu-icon/tab_topic_gray.png">
        <img slot="icon" v-show="iconstate==2" class="hide_icon" src="../assets/menu-icon/tab_topic_red.png">
        话题
      </mt-tab-item>
      <mt-tab-item id="珍选" @click.native="showIcon(3)" @click.native.prevent="selected='珍选'" :class="{ textRed: iconstate == 3 }" >
        <img slot="icon" src="../assets/menu-icon/tab_select_grey.png">
        <img slot="icon" v-show="iconstate==3" class="hide_icon" src="../assets/menu-icon/tab_select_red.png">
        珍选
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="showIcon(4)" @click.native.prevent="selected='我的'" :class="{ textRed: iconstate == 4 }">
        <img slot="icon" src="../assets/menu-icon/tab_user_gray.png">
        <img slot="icon" v-show="iconstate==4" class="hide_icon" src="../assets/menu-icon/tab_user_red.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

    <!-- 底部选项卡的tabcontainer -->
    <mt-tab-container class="page-tabbar-container" v-model="selected">  
      <mt-tab-container-item id="菜谱">  
        <recipe></recipe>
      </mt-tab-container-item>  
      <mt-tab-container-item id="话题">  
        <topic></topic>
      </mt-tab-container-item>  
      <mt-tab-container-item id="珍选">  
        <pick></pick>  
      </mt-tab-container-item>  
      <mt-tab-container-item id="我的">  
         <mine></mine>
      </mt-tab-container-item>  
    </mt-tab-container>   





       
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui'
import topic from '../components/topic.vue'
import recipe from '../components/recipe.vue'
import pick from '../components/pick.vue'
import mine from '../components/mine.vue'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

export default {
  name: 'hello',
  components: {
    topic,
    recipe,
    pick,
    mine
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '菜谱',
      iconstate: 1,
      menuSelected:'',
      popularMenu:[{
        title:"爱吃[土豆]的都是胖天使？",
        label:"菜单|快来看看土豆还有哪些吃法",
        src:"../static/image/popularImg/pf1.jpg"
      },{
        title:"[鸭血]的美味做法大全~",
        label:"菜单|保证好吃到停不下来！",
        src:"../static/image/popularImg/pf2.jpg"
      },{
        title:"深夜食堂的主角-小龙虾",
        label:"专题|除了吃，你还了解多少？",
        src:"../static/image/popularImg/pf3.jpg"
      },{
        title:"盘点孕妇必吃的12种孕期事物",
        label:"知识|饮食与健康",
        src:"../static/image/popularImg/pf4.jpg"
      },{
        title:"人气菜肴",
        label:"超过50人收藏的菜谱都超赞( • ̀ω•́ )✧",
        src:"../static/image/popularImg/pf5.jpg"
      },{
        title:"一周热门",
        label:"近7天来最受欢迎的新菜谱，不容放过",
        src:"../static/image/popularImg/pf6.jpg"
      }
      ],
      recipeSorts:[{
        title:"家常菜",
        label:"人人都是美食家",
        src:"../static/image/recipeImg/rs1.jpg"
      },{
        title:"早餐",
        label:"一日之计在于晨",
        src:"../static/image/recipeImg/rs2.jpg"
      },{
        title:"烘焙",
        label:"分类很全 方子超多",
        src:"../static/image/recipeImg/rs3.jpg"
      },{
        title:"妈妈派",
        label:"孕妇 辅食 亲子菜",
        src:"../static/image/recipeImg/rs4.jpg"
      }],
      materialSorts:[{
        title:"薏米",
        src:"../static/image/materialImg/hm1.jpg"
      },{
        title:"木耳",
        src:"../static/image/materialImg/hm2.jpg"
      },{
        title:"冬瓜",
        src:"../static/image/materialImg/hm3.jpg"
      },{
        title:"玉米",
        src:"../static/image/materialImg/hm4.jpg"
      },{
        title:"小龙虾",
        src:"../static/image/materialImg/hm5.jpg"
      },{
        title:"鸡肉",
        src:"../static/image/materialImg/hm6.jpg"
      },{
        title:"青口贝",
        src:"../static/image/materialImg/hm7.jpg"
      },{
        title:"芋头",
        src:"../static/image/materialImg/hm8.jpg"
      },{
        title:"红薯",
        src:"../static/image/materialImg/hm9.jpg"
      },{
        title:"乌鸡",
        src:"../static/image/materialImg/hm10.jpg"
      },{
        title:"培根",
        src:"../static/image/materialImg/hm11.jpg"
      },{
        title:"全部食材",
        src:"../static/image/materialImg/more.jpg"
      }],
      newRecipeReco:[{
        title:"虎皮辣椒炒肥牛",
        label:"天国的女儿",
        src:"../static/image/recipeImg/nrr1.jpg"
      },{
        title:"挂糊花生米",
        label:"小玉厨房",
        src:"../static/image/recipeImg/nrr2.jpg"
      },{
        title:"茄汁肉酱披萨盒",
        label:"小妞_hebycE",
        src:"../static/image/recipeImg/nrr3.jpg"
      },{
        title:"茄汁牛肉酱拌面",
        label:"小妞_hebycE",
        src:"../static/image/recipeImg/nrr4.jpg"
      },{
        title:"红烧猪骨",
        label:"碗里姜膳",
        src:"../static/image/recipeImg/nrr5.jpg"
      },{
        title:"香煎杏鲍菇",
        label:"一米阳光612",
        src:"../static/image/recipeImg/nrr6.jpg"
      },{
        title:"干锅茶树菇",
        label:"食趣菜菜屋的屋",
        src:"../static/image/recipeImg/nrr7.jpg"
      },{
        title:"美味鲜虾肠粉",
        label:"雪峰儿",
        src:"../static/image/recipeImg/nrr8.jpg"
      }]
    }
  },
  watch: {
      selected: function (val, oldVal) {
          // 这里就可以通过 val 的值变更来确定
          console.log(val)
      }
  },
  methods: {
      // 点击改变按钮状态从而改变class
      showIcon(index){
        this.iconstate = index;
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

/*解决谷歌字体小于12px没效果*/
/*.small-font{    
  font-size:12px; 
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.90);
}*/


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
.hide_icon{
  position: absolute;
  height: 24px;
  width: 24px;
  top: 7px;
}
.textRed{
  color: red;
}

</style>

<template>
	<div class="topic">
		<!-- 顶部固定导航 -->
		<mt-header fixed title="话题">
		  <router-link to="/" slot="left">
		    <mt-button icon="search"></mt-button>        
		  </router-link>
		  <router-link to="/" slot="center">
		    <mt-button>菜单</mt-button>        
		  </router-link>
		  <mt-button icon="plus" slot="right">发话题</mt-button>
		</mt-header>

		<!-- banner广告栏 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item> <img src="../assets/banner-img/1.jpg"> </mt-swipe-item>
		  <mt-swipe-item> <img src="../assets/banner-img/2.jpg"> </mt-swipe-item>
		  <mt-swipe-item> <img src="../assets/banner-img/3.jpg"> </mt-swipe-item>
		  <mt-swipe-item> <img src="../assets/banner-img/4.jpg"> </mt-swipe-item>
		  <mt-swipe-item> <img src="../assets/banner-img/5.jpg"> </mt-swipe-item>
		</mt-swipe>

		<!-- 菜单栏 -->
		<div class="recipeSort_content TopicMenu">
		  <mt-cell v-for="menu in menus" :title=menu.title>
		    <img slot="icon" :src=menu.src width="24" height="24">
		  </mt-cell>
		</div>

		<!-- 懒加载 美女接口 -->
		<div class="beautyApi">
			<ul>
			  <li v-for="beauty of cool">
			    <img v-lazy="beauty.url">
			  </li>
			</ul>
		</div>  

		<!-- <vueWaterfallEasy>222</vueWaterfallEasy> -->

	</div>
</template>

<script>
	import Vue from 'vue'
	import beauty from '../global/api'
	// import Waterfall from '../../lib/waterfall'
	// import WaterfallSlot from '../../lib/waterfall-slot'
	// import vueWaterfallEasy from 'vue-waterfall-easy.vue'

	export default {
		name: 'topic',
		// components:{
		// 	vueWaterfallEasy
		// },
		data () {
			return {
				cool:[],
				menus:[{
				  title:"美食随手拍",
				  src:require("../assets/menuImg/home_topic.png")
				},{
				  title:"厨艺交流",
				  src:require("../assets/menuImg/home_menu.png")
				},{
				  title:"烘焙圈",
				  src:require("../assets/menuImg/home_video.png")
				},{
				  title:"妈妈派",
				  src:require("../assets/menuImg/home_event.png")
				},{
				  title:"全部小组",
				  src:require("../assets/menuImg/home_welfare.png")
				}],

			}
		},
		props: {
		  page: {
		    type: Number,
		    default: 2
		  }
		},
		created () {
		  this.get()
		},
		watch: {
		  page (val) {
		    this.get()
		  }
		},
		methods: {
		  get () {
		    beauty.getBeauty({
		    	page: this.page,
		    	limit: this.limit,
		    }, (err, cool) => {
		      if (err) {
		        console.log(err)
		      } else {
		        cool.results.forEach((results) => {
		          const d = new Date(results.createdAt)
		          results.createdAt = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
		          // console.log(results)
		        })
		        this.cool = this.cool.concat(cool.results)
		        // console.log(this.cool)
		      }
		    })
			}
		}
	}

</script>

<style>
/*固定导航更换颜色*/
.topic .mint-header{
  background-color: #FE5761;
}
.topic .mint-header a{
  color:#fff;
}

/*修改轮播的高度*/
.topic .mint-swipe{
  height:164px;
  margin-top: 52px;
}
.topic .mint-swipe img{
  width: 100%;
  height: 100%;
}

/*菜单栏*/
.topic .TopicMenu{
  margin-bottom: 15px;
}
.topic .mint-cell-wrapper, .topic .mint-cell:last-child{
  background-image: none !important;
}
.topic .TopicMenu a{
  width: 18% !important;
  margin: 0 3px;
}
.topic .TopicMenu .mint-cell-text{
  font-size: 12px !important;
  display: block;
  margin-top: 5px;
}


.topic .beautyApi ul{
    -webkit-padding-start: 0px;
}
.topic .beautyApi ul li {
    width: 40%;
    padding: 5px;
    list-style: none;
    display: inline-block;
}
.topic .beautyApi{
	width: 100%;
}
.topic .beautyApi img{
	width: 100%;
	height: auto;
}

</style>
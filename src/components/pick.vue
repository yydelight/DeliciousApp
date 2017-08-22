<template>
	<div class="topic">
		<!-- 顶部固定导航 -->
		<mt-header fixed title="珍选">
		  <router-link to="/search" slot="left">
		    <mt-button icon="search"></mt-button>        
		  </router-link>
		  <mt-button icon="plus" slot="right">发商品</mt-button>
		</mt-header>

		<!-- 使用接口 -->
		<div v-for="his of longhistory" class="hisLike">
			<div v-html="his.content">				
			</div>
		</div>

		<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索" v-show="search==1">
		</mt-search>

	</div>
</template>


<script>
	import Vue from 'vue'
	// import '../../static/plugins/TouchSlide.1.1.js'
	import third from '../global/api'


	export default {
		name: 'pick',
		props: {
		  type: {
		    type: String
		  }
		},
		data () {
			return {
				longhistory:[],
				limit: 20,
				search:0,
				value:"",
				menus:[{
				  title:"美食随手拍",
				  src:"../static/image/menuImg/home_topic.png"
				},{
				  title:"厨艺交流",
				  src:"../static/image/menuImg/home_menu.png"
				},{
				  title:"烘焙圈",
				  src:"../static/image/menuImg/home_video.png"
				},{
				  title:"妈妈派",
				  src:"../static/image/menuImg/home_event.png"
				},{
				  title:"全部小组",
				  src:"../static/image/menuImg/home_welfare.png"
				}],
				news : [],
				error:''

			}
		},
		props: {
		  page: {
		    type: Number,
		    default: 1
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
		    third.getShow({
		    	page: this.page,
		    	limit: this.limit
		    }, (err, longhistory) => {
		      if (err) {
		        console.log(err)
		      } else {
		        longhistory.results.forEach((results) => {
		          const d = new Date(results.createdAt)
		          results.createdAt = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
		          // console.log(results)
		        })
		        this.longhistory = this.longhistory.concat(longhistory.results)
		      }
		    })
			},
			sss(){
				this.search = 1;
			}
		}
	}
	

</script>

<style>
/*固定导航更换颜色*/
.mint-header{
  background-color: #FE5761;
}
.mint-header a{
  color:#fff;
}

/*菜单栏*/
.TopicMenu{
  margin-bottom: 15px;
}
.TopicMenu .mint-cell-wrapper,.TopicMenu .mint-cell:last-child{
  background-image: none !important;
}
.TopicMenu a{
  width: 18% !important;
  margin: 0 3px;
}
.TopicMenu .mint-cell-text{
  font-size: 12px !important;
  display: block;
  margin-top: 5px;
}

/*美化接口显示*/
.hisLike{
  width: 100%;
}
.hisLike img{
  width: 100%;
}
a{
  text-decoration: none;
}
.day{
  padding: 50px 10px 20px 10px;
}
p{
	font-size: 0;
}   
h1{
	text-align: left;
	font-weight: 700;
	font-size: 16px;
	line-height 32px
	margin: 10px 0;
	overflow: hidden;
	word-wrap: break-word;
	white-space: normal !important;
}

h3{
	color: #000000;
	text-align: left;
	padding: 10px 0;
	font-size: 16px;
	font-weight: 700;  	
}

ul{
	color: #000000;
	text-align: left;
	font-size: 14px;
	font-weight: 400;  	
}

li{
	line-height: 20px;
	padding: 5px 0;
	border-bottom: none!important;
	margin: 0 0;
}

</style>
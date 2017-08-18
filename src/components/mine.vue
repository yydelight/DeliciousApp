<template>
	<div class="topic">
		<!-- 顶部固定导航 -->
		<mt-header fixed title="我的">
		  <mt-button slot="right" class="headerRight">
		  	<img class="setIcon" src="../assets/set.png">
		  	设置
		  </mt-button>
		</mt-header>

		<!-- 未登录的界面 -->
		<div class="Welcome">
			<div class="notLogin">
				<img class="welcomeIcon" src="../assets/menu-icon/mine_icon.png">
				<div class="eatFri">
					<span class="welJoin">欢迎加入</span>
					<span class="allEat">我所有的朋友都是吃货</span>
				</div>
				<div class="loginButton">
					<mt-button type="danger" size="small" class="login">登录</mt-button>
					<mt-button type="danger" size="small" class="register">注册</mt-button>
				</div>
			</div>
		</div>

		<!-- 我的菜单 -->
		<div class="mineMenu">
			<!-- 主要内容 -->
			<div class="recipeSort_content">
			  <mt-cell v-for="mms in mineMenus" :title=mms.title>
			    <img slot="icon" :src=mms.src width="20" height="20">
			  </mt-cell>
			</div> 
		</div>

		<div>
			<ol>
			  <li v-for="news of list">
			    <p class="title">{{ news.title }}</p>
			    <p class="date">{{ news.create_at }}</p>
			    <p class="author">By: {{ news.author.loginname }}</p>
			  </li>
			</ol>
		</div>

<!-- 		<div>
			<ol>
			  <li v-for="beauty of cool">
			    <img width="20" :src="beauty.url">
			    <p class="date">{{ beauty.desc }}</p>
			    <p class="author">By: {{ beauty.publishedAt }}</p>
			    <img :src="beauty.url">
			  </li>
			</ol>
		</div> -->


		



	</div>
</template>

<script>
	import Vue from 'vue'
	import news from '../global/api'
	import beauty from '../global/api'

	export default {
		name: 'mine',
		props: {
		  type: {
		    type: String
		  }
		},
		data () {
			return {
				list: [],
				limit: 10,
				cool:[],
				mineMenus:[{
					title:"我的原创",
					src:"../../static/image/menuImg/user_yuanchuang.png"
				},{
					title:"我的收藏",
					src:"../../static/image/menuImg/user_collect.png"
				},{
					title:"我的草稿",
					src:"../../static/image/menuImg/user_draft.png"
				},{
					title:"福利社",
					src:"../../static/image/menuImg/user_lucky.png"
				},{
					title:"我的任务",
					src:"../../static/image/menuImg/user_duty.png"
				},{
					title:"我的订单",
					src:"../../static/image/menuImg/user_order.png"
				},{
					title:"账号管理",
					src:"../../static/image/menuImg/user_collect.png"
				},{
					title:"消息中心",
					src:"../../static/image/menuImg/user_msg.png"
				},{
					title:"帮助与反馈",
					src:"../../static/image/menuImg/user_help.png"
				}]

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
		    news.getList({
		      page: this.page,
		      limit: this.limit
		    }, (err, list) => {
		      if (err) {
		        console.log(err)
		      } else {
		        list.data.forEach((data) => {
		          const d = new Date(data.create_at)
		          data.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
		          // console.log(data)
		        })
		        this.list = this.list.concat(list.data)
		      }
		    }),
		    beauty.getBeauty({
		    	page: this.page,
		    	limit: this.limit
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
.mint-header{
  background-color: #FE5761;
}
.mint-header a{
  color:#fff;
}

/*固定导航的右边图标*/
.headerRight .mint-button-text{
  font-size: 12px;
  margin-top: 15px;
  display: inline-block;
}
.headerRight .setIcon{
  position: absolute;
  top: 6px;
  right: 3px;
}

/*欢迎加入*/
.Welcome{
  background: rgba(223,223,223,0.3);
  padding: 10px;
}
.welcomeIcon{
  border-radius: 25px;
  float: left;
  width: 15%;
}
.eatFri{
  text-align: left;
  padding-left: 65px;
}
.welJoin{
  display: block;
  line-height: 31px;
  color: #111;
}
.allEat{
  display: block;
  font-size: 12px;
  color: #5e5e5c;
}
.loginButton{
  margin-top: 15px;
}
.loginButton .mint-button{
  width: 45%;
  letter-spacing: 5px;
  margin-right: 5px;
  margin-left: 5px;
}

/*我的菜单*/
.mineMenu .recipeSort_content{
  margin-top: 2%;
}
.mineMenu .recipeSort_content a{
  display: inline-block;
  width: 33%;
  vertical-align: top;
}
.mineMenu .mint-cell-wrapper{
  background-image: none;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 16px 0px;
}
.mineMenu .mint-cell-text {
    vertical-align: middle;
    display: block;
    font-size: 12px;
    margin-top: 5px;
}

/*尝试*/
ol {
  margin-left: -3.3rem;
  /*margin-left: 2rem;*/
  /*list-style: outside decimal;*/
}
li {
  line-height: 1.5;
  padding: 1rem;
  border-bottom: 1px solid #b6b6b6;
}
.title {
  font-weight: bold;
  font-size: 1.2rem;
}
.date {
  font-size: .8rem;
  color: #d6d6d6;
}

/*懒加载*/
.beautyApi{
	width: 100%;
}
.beautyApi img{
	width: 100%;
	height: auto;
}
.beautyApi ul li{
	width: 100%;
	padding: 0;
}
</style>
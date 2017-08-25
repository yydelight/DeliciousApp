<template>
	<div class="searchDiv">
		<!-- 顶部固定导航 -->
		<mt-header fixed :title="book.title">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>        
		  </router-link>
		  <router-link to="/" slot="center">
		    <mt-button>菜单</mt-button>        
		  </router-link>
		  <mt-button icon="plus" slot="right">换源</mt-button>
		</mt-header>

		<!-- 书本的详情 -->
		<div class="bookLog">
			<div class="bookWrap">
				<img class="bookImg" :src="book.cover">
				<div class="bookText">
					<span class="welJoin"> {{ book.title }} </span>
					<span class="welJoin"> {{ book.author }} </span>
					<span class="welJoin"> <span> {{ book.updated }} </span> <span style="border-left:1px solid #2c3e50;height:24px;padding-right:5px;"></span>  <span> {{ book.wordCount }}万 </span> <span style="border-left:1px solid #2c3e50;height:24px;padding-right:5px;"></span>  <span> {{ book.cat }} </span> </span>		
				</div>
				<!-- 按钮 -->
				<div class="bookRead">
					<mt-button type="danger" size="small" class="login">追更新</mt-button>
					<mt-button type="danger" size="small" class="register" @click="readBook">开始阅读</mt-button>
				</div>
				<!-- 追书人气 -->
				<div class="bookBase">
					<span class="bookSpan">
						<h6>追书人数</h6>
						<h6> {{ book.latelyFollower }} </h6>
					</span>
					<span class="bookSpan">
						<h6>读者留存率</h6>
						<h6> {{ book.retentionRatio }}% </h6>
					</span>
					<span class="bookSpan">
						<h6>更新字数/天</h6>
						<h6> {{ book.serializeWordCount }} </h6>
					</span>					
				</div>
				<!-- 相关标签 -->
				<div class="bookTag">
					<span class="tags" v-for="tag in book.tags">
						{{ tag }}
					</span>
				</div>
				<!-- 长介绍 -->
				<div class="longIntro">
					{{ book.longIntro }}
				</div>
			</div>
		</div>

 


		

	</div>
</template>

<script>
	import third from '../global/api'
	import Vue from 'vue'
	import vueResource from 'Vue-resource'
	import reqwest from 'reqwest'
	import moment from 'moment'
	moment.locale('zh-cn')  //显示为中文


	export default {
		name: 'Book',
		data () {
			return {
				staticPath: 'http://statics.zhuishushenqi.com',  //图片固定的开头地址
				book:[],
				title:''
			}
		},
		created() {
			

		},
		mounted(){
			this.getBook();
		},
		methods: {
			// 获取书本详情
			getBook(){				
			  	let loading = Vue.prototype.$loading({text:"玩命加载中..."}); //触发加载提示页面
				let link = 'http://35.189.165.140:3000/book/' + this.$route.params.bookId;
				console.log(this.$route.params.bookId)
				Vue.http.get(link).then((response) => {
					var bookDet = response.data;
				 	bookDet.cover = this.staticPath + bookDet.cover;  //更改图片地址
				 	bookDet.updated = moment(bookDet.updated).fromNow() //变为n天/年前
				 	bookDet.wordCount = parseInt(bookDet.wordCount / 10000, 10);
				 	if (bookDet.serializeWordCount < 0){
				 		bookDet.serializeWordCount = 0;
				 	}
				  	this.book = this.book.concat(bookDet) //拼接数组，把数据对象传给数组
				  	this.book = this.book[0];
				  	loading.close();   //加载结束，关闭加载提示页面
				});			  
			},
			readBook(){
				this.$router.push('/readBook/' + this.$route.params.bookId)
			}

		}
	}
	

</script>

<style scoped>
	#app{
		margin-top: 0 ;
	}
	body{
		margin: 8px 0;
		font-family: "微软雅黑"
	}

	/*固定导航更换颜色*/
	 .mint-header{
	  background-color: #FE5761;
	}
	 .mint-header a{
	  color:#fff;
	}

	/*书本详情*/
	.bookLog{
	  background: rgba(223,223,223,0.3);
	  padding: 15px;
	  margin-top: 40px;
	}
	.bookImg{
	  float: left;
	  width: 26%;
	}
	.bookText{
	  text-align: left;
	  padding: 10px 0 10px 115px;
	}
	.welJoin{
	  display: block;
	  line-height: 35px;
	  color: #111;
	}
	.allEat{
	  display: block;
	  font-size: 12px;
	  color: #5e5e5c;
	}
	.bookRead{
	  margin-top: 10px;
	  margin-bottom: 10px;
	}
	.bookRead .mint-button{
	  width: 45%;
	  letter-spacing: 5px;
	  margin-right: 5px;
	  margin-left: 5px;
	}

	/*追书神器*/
	.bookBase{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px solid #e4e4e4;
	}
	.bookSpan{
		float: left;
		width: 33.33%;
	}
	.bookSpan h6{
		-webkit-margin-before: 1em;
		-webkit-margin-after: 1em;
	}
	/*小说标签*/
	.bookTag{
		text-align: left;
		margin-top: 10px;
		padding-bottom: 10px; 
		border-bottom: 1px solid #e4e4e4;
		margin-bottom: 10px;
	}
	.bookTag .tags{
		background: green;
		color: #fff;
		padding: 5px 13px;
		margin: 5px;
		display: inline-block;
		font-size: 12px;
		border-radius: 2px;
	}
	.bookTag .tags:nth-child(1n) {
	    background: #deb887;
	}
	.bookTag .tags:nth-child(2n) {
	    background: #5f9ea0;
	}
	.bookTag .tags:nth-child(3n) {
	    background: coral;
	}
	.bookTag .tags:nth-child(4n) {
	    background: #6495ed;
	}
	/*长简介*/
	.longIntro{
		text-align: left;
		padding-top: 5px;
	}

</style>
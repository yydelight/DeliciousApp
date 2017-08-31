<template>
	<div class="searchDiv">
		<!-- 搜索框 -->
		<div class="searchInput">
			<el-input
			  placeholder="搜索书名或者作者名"
			  icon="search"
			  v-model="input2" id="inputValue"
			  @keyup.13.native="search1(input2)">
			</el-input>
		</div>

		<!-- 搜索热词 -->
		<div class="searchHot" v-show='this.songs.length==0'>
			<span v-for=" hw in hot " @click="search1(hw.word)">
				<mt-badge size="small" type="error"> {{ hw.word }} </mt-badge>
			</span>
			
		</div>


		<!-- 搜索结果列表 -->
		<div class="search-list">
			<ul class="search-list-warp">
				<li class="search-list-li" v-for="  sing  in songs" @click="lookStory(sing._id)" :key="sing._id">
					<img :src="sing.cover">
					<div class="search-text">
						<p class="title">  {{ sing.title }} </p>
						<p class="author"> <span> {{ sing.author }} </span> <span style="border-left:1px solid #2c3e50;height:24px;padding-right:5px;"></span>  <span> {{ sing.cat }} </span>  </p>		
						<p> {{ sing.shortIntro }} </p>	
						<p class="follow"> <span> {{ sing.latelyFollower }}万人气 </span> <span style="border-left:1px solid #2c3e50;height:24px;padding-right:5px;"></span>  <span> {{ sing.retentionRatio }}%读者留存 </span>  </p>							
					</div>
				</li>
			</ul>
		</div>
 


		

	</div>
</template>

<script>
	import searchApi from '../global/api'
	import third from '../global/api'
	import Vue from 'vue'
	import vueResource from 'Vue-resource'
	import reqwest from 'reqwest'
	import Store from '../store'

	import { Badge } from 'mint-ui';
	Vue.component(Badge.name, Badge);

	export default {
		name: 'topic',
		data () {
			return {
				value:'',
				input2:'',
				// songs:Store.fetch(), //页面刷新也不影响改变songs内容
				songs:[],
				hot:[],
				staticPath: 'http://statics.zhuishushenqi.com'  //图片固定的开头地址
			}
		},
		props: ['book'],
		created () {
		  this.gethw()
		},
		watch: {
		  songs: {
		  	handler: function(songs) {
		  		Store.save(songs)
		  	},
		  	deep:true
		  }
		},
		methods: {
		  search1 (want) {
		  	if(!this.input2){
		  		this.input2 = want;
		  	}
		  	this.songs=[];
		  	let loading = Vue.prototype.$loading({text:"玩命加载中..."}); //触发加载提示页面

			let link = 'http://35.189.165.140:3000/book/fuzzy-search?query= ' + want;
			Vue.http.get(link).then((response) => {
				var song = response.data;
				console.log(song)
			  	song.books.forEach((data) => {
			  		 data.cover = this.staticPath + data.cover;  //更改图片地址
			  		 data.latelyFollower =( data.latelyFollower/10000).toFixed(1); //取小数点后一位
			  	})
			  	this.songs = this.songs.concat(song.books) //拼接数组，把数据对象传给数组
			  	loading.close();   //加载结束，关闭加载提示页面				  
			});

		  },
		  gethw(){
		  	  this.hot=[];
			  reqwest({
			      url: 'http://35.189.165.140:3000/book/search-hotwords'
			  }, (hotword) => {
		      	hotword.searchHotWords.forEach((data) => {
		      		// console.log(data)
		      	})
		      	this.hot = this.hot.concat(hotword.searchHotWords) //拼接数组，把数据对象传给数组
		      	this.hot.length = 15;
		      
		    })
		  },
		  lookStory(id){
		  	this.$router.push('/book/' + id)
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
	.searchDiv{
		margin-top: 20px;
	}

	/*搜索框*/
	.searchInput{
		background-color: #FE5761;
	    padding: 6px 17px;
	    height: 40px;		
	}
	.searchInput .el-input__inner{
		border: 1px solid #FFF;
	}
	.searchInput .el-input__inner:focus {
	    border-color: #fff;
	}

	/*搜索结果列表*/
	.searchDiv .search-list{
		background: #f2f2f2;
		padding-top: 2%;
	}
	.searchDiv .search-list-warp{
		-webkit-padding-start: 0;
		overflow: hidden;
		margin: 0 10px;
	}
	.searchDiv .search-text{
		width: 100%;
		box-sizing:border-box; 
		font-size: 14px;
		padding-left: 27%;
		text-align: left;
	}
	.searchDiv .search-list img{
		width: 80px;
		height: 100px;
		float: left;
	}
	.searchDiv .search-text p{
		line-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
	}
	.searchDiv .search-text .title{
		color:#000;
		font-weight: bold;
	}
	.searchDiv .search-list-li{
		border-bottom: 1px solid #e6dbdb;
		height: 100px;
		padding: 5px 0;
		display: block;
	}
	.searchDiv .search-text .follow{
		color:#000;
	}

	/*搜索热词*/
	.searchHot{
		text-align: left;
	}
	.searchHot span{
		margin:10px 3px;
	}
	.searchHot span span{
		padding: 5px 16px;
    	border-radius: 16px;
	}

</style>
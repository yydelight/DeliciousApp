<template>
	<div class="Read">
		<div class="bookContent">
			<!-- <h6> {{ Bcontent.title }} </h6> -->
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
		name: 'Read',
		data () {
			return {
				staticPath: 'http://statics.zhuishushenqi.com',  //图片固定的开头地址
				story:[]
			}
		},
		created() {
			this.getBookChapter();
		},
		mounted(){
			this.getBookContent();
		},
		methods: {
			// 获取书本章节
			getBookChapter(){
				let link = 'http://35.189.165.140:3000/atoc/57444a64955e06d610a9d0c5?view=chapters';
				Vue.http.get(link).then((response) => {
					console.log(response.data)
				});
			},

			// 获取书本详情
			getBookContent(){				
			 //  	let loading = Vue.prototype.$loading({text:"玩命加载中..."}); //触发加载提示页面
			 //  	let url = 'http://vip.zhuishushenqi.com/chapter/';
				// let link = 'http://35.189.165.140:3000/getChapter?chapterUrl=' + url + this.$route.params.bookId +'?cv=1472090835159';
				// Vue.http.get(link).then((response) => {
				// 	var Bcontent = response.data;
				// 	console.log(Bcontent)
				//   	this.story = this.story.concat(Bcontent) //拼接数组，把数据对象传给数组
				//   	this.story = this.story[0];
				//   	loading.close();   //加载结束，关闭加载提示页面
				// });
				  
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
	
	.Read{
		background-color: #dad9d4;
	}


</style>
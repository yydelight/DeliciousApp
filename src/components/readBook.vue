<template>
	<div class="Read">
		<div class="bookContent">
			<span class="Aspan"> {{ story.title }} </span>
			<article class="Acontent" v-html="story.cpContent">  </article>
			<span class="Aspan timeSpan"> {{ timing }} </span>
		</div>
	
		<!-- 菜单头部和尾部 -->
		<div class="bookMenu">
			<div class="menuHead">
				
			</div>
			<div class="menuFoot">
				
			</div>		
		</div>

	</div>
</template>

<script>
	import third from '../global/api'
	import Vue from 'vue'
	import vueResource from 'Vue-resource'
	import reqwest from 'reqwest'
	import Store from '../store'
	import moment from 'moment'
	moment.locale('zh-cn')  //显示为中文


	export default {
		name: 'Read',
		data () {
			return {
				staticPath: 'http://statics.zhuishushenqi.com',  //图片固定的开头地址
				story:[],
				chaptersBook:[],
				Bcontent:[],
				timing:''
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
					// console.log(response.data.chapters)
					var chaptersBook = response.data.chapters.id
					Store.save(chaptersBook)
				});
			},
			// 获取书本详情
			getBookContent(){			
			  	let loading = Vue.prototype.$loading({text:"玩命加载中..."}); //触发加载提示页面
			  	let url = 'http://35.189.165.140:3000/getChapter?chapterUrl=http://vip.zhuishushenqi.com/chapter/';
				let link = url + '57444a68655db1e449c9bcb5?cv=1467884199072';
				Vue.http.get(link).then((response) => {
					var Bcontent = response.data;
					console.log(Bcontent.chapter)
					Bcontent.chapter.cpContent = Bcontent.chapter.cpContent.replace(/\n/g, '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'); //把文章内容的换行换成换行加空格，完成开头空两格的效果
				  	this.story = this.story.concat(Bcontent) //拼接数组，把数据对象传给数组
				  	this.story = this.story[0].chapter;
				  	this.timing = moment().format('HH:mm');
				  	console.log(this.timing)
				  	loading.close();   //加载结束，关闭加载提示页面
				});
				  
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

	/*书籍内容*/
	.Aspan{
		display: inherit;
		text-align: left;
		font-size: 12px;
		color: #2c3e00;
	}
	.Acontent{
		text-align: left;
		line-height: 25px;
		text-indent: 2em;
		height: 100%;
		overflow: hidden;
	}


</style>
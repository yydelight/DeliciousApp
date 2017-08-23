<template>
	<div class="searchDiv">
		<!-- 顶部固定导航 -->
		<mt-header fixed title="话题">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>        
		  </router-link>
		  <router-link to="/" slot="center">
		    <mt-button>菜单</mt-button>        
		  </router-link>
		  <mt-button icon="plus" slot="right">换源</mt-button>
		</mt-header>

 


		

	</div>
</template>

<script>
	import third from '../global/api'
	import Vue from 'vue'
	import vueResource from 'Vue-resource'
	import reqwest from 'reqwest'


	export default {
		name: 'Book',
		data () {
			return {
				staticPath: 'http://statics.zhuishushenqi.com'  //图片固定的开头地址
			}
		},
		created() {
			// console.log(Vue.$route.path);
		},
		

		methods: {

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


</style>
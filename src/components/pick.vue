<template>
	<div class="topic">
		<!-- 顶部固定导航 -->
		<mt-header fixed title="珍选">
		  <router-link to="/" slot="left">
		    <mt-button icon="search"></mt-button>        
		  </router-link>
		  <router-link to="/" slot="center">
		    <mt-button>菜单</mt-button>        
		  </router-link>
		  <mt-button icon="plus" slot="right">发商品</mt-button>
		</mt-header>

		<!-- 菜单栏 -->
		<div class="recipeSort_content TopicMenu">
		  <mt-cell v-for="menu in menus" :title=menu.title>
		    <img slot="icon" :src=menu.src width="24" height="24">
		  </mt-cell>
		</div>  

	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		name: 'topic',
		data () {
			return {
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

</style>
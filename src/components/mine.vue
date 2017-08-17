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
<!-- 			<div class="recipeSort_content">
			  <mt-cell v-for="mms in mineMenus" :title=mms.title>
			    <img slot="icon" :src=mms.src width="50" height="50">
			  </mt-cell>
			</div>  -->
		</div>


	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		name: 'topic',
		data () {
			return {
				mineMenus:[{
					title:"我的原创",
					src:"../assets/menu-icon/mine_icon.png"
				}]

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
.loginButton .mint-button{
  width: 40%;
  letter-spacing: 5px;
}

/*我的菜单*/
.recipeSort_content{
  margin-top: 2%;
}
.recipeSort_content a{
  display: inline-block;
  width: 25%;
  vertical-align: top;
}
</style>
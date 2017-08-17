<template>
	<div class="topic">
		<!-- 顶部固定导航 -->
		<mt-header fixed title="珍选">
		  <router-link to="/" slot="left">
		    <mt-button icon="search"></mt-button>        
		  </router-link>
		  <mt-button icon="plus" slot="right">发商品</mt-button>
		</mt-header>

		<!-- 今日推荐 -->
		<div class="Content">
			<div id="leftTabBox" class="tabBox">
				<div class="hd">
					<ul>
						<li><a href="#">财经</a></li>
						<li><a href="#">股票</a></li>
						<li><a href="#">商业</a></li>
					</ul>
				</div>
				<div class="bd">
						<ul>
							<li class="t">
								<div class="pic"><img src="images/wyNewPic.jpg" /></div>
								<div class="con">
									<a class="tit">[曝光台]景区票价被指假优惠</a>
									<p>峨眉山先涨35元再降20元;长假阶段前后而非当时优惠.</p>
								</div>
							</li>
							<li><a href="#">台官员:将驱离进入钓岛大陆船</a></li>
							<li><a href="#">陈云长子吁学江泽民思想方法</a></li>
							<li><a href="#">央视批抗日剧目:比着俗争着二</a></li>
							<li><a href="#">网友:离3次结3次可避税国五条</a></li>
							<li><a href="#">足疗女子自称东北人引发血案</a></li>
						</ul>
						<ul>
							<li><a href="#">官方明确感染H7N9高危人群</a></li>
							<li><a href="#">台官员:将驱离进入钓岛大陆船</a></li>
							<li><a href="#">陈云长子吁学江泽民思想方法</a></li>
							<li><a href="#">央视批抗日剧目:比着俗争着二</a></li>
							<li><a href="#">网友:离3次结3次可避税国五条</a></li>
							<li><a href="#">足疗女子自称东北人引发血案</a></li>
							<li><a href="#">男性神秘“根浴”会所被调查</a></li>
							<li><a href="#">女孩一年吃掉48公里长方便面</a></li>
						</ul>
						<ul>
							<li><a href="#">日:沈阳军区部队开赴中朝边境</a></li>
							<li><a href="#">印度核潜艇经我周边未被发现</a></li>
							<li><a href="#">中国航母战斗群重防空轻反潜</a></li>
							<li><a href="#">日本军车爆车胎造成一死一伤</a></li>
							<li><a href="#">韩媒称朝鲜导弹反复出仓回仓</a></li>
							<li><a href="#">美国空军因缺钱大量战机停飞</a></li>
							<li><a href="#">外媒:中国神盾舰多处落后日本</a></li>
							<li><a href="#">朝鲜东部海岸遍布导弹发射场</a></li>
						</ul>
				</div>
			</div>


		</div>

  

	</div>
</template>

<style type="text/css" scoped>
	/* css 重置 */
	body, p, input, h1, h2, h3, h4, h5, h6, ul, li, dl, dt, dd, form { margin: 0; padding: 0; list-style: none; vertical-align: middle; font-weight:normal; }
	img { border:0; margin: 0; padding: 0;   }
	body { color: #000; -webkit-user-select: none; -webkit-text-size-adjust: none; font:normal 16px/200% "微软雅黑", helvetica, arial; text-align:left;   }
	header, section, footer { display: block; margin: 0; padding: 0 }
	a{text-decoration:none;color:#000;}
	
	body{ background:#f4f4f4;  }
	/* 头部 */
	header{  background:#F5AB38; padding-bottom:10px; border-bottom:3px solid #CF7F21;  }
	header .logo{ padding:10px 0 5px 10px;  color:#fff;  font-style:italic; font-weight:bold; text-shadow:1px 1px 1px #965e18; font-size:12px; }
	header .logo a{ font-size:30px; line-height:30px; color:#fff;  }

	/* 尾部 */
	footer{ text-align:center; padding:10px 0; line-height:18px; font-size:14px; }

	/* 内容 */
	#content{ padding:10px 0; background:#fff;  }
	.path{ padding:0 0 5px 5px;   }

	/* 效果导航 */
	.effectNav{ margin-top:10px;  border-top:1px solid #666; background:#999; padding-bottom:10px;  }
	.effectNav h3{ padding:0 10px; background:#ddd; background:#333; color:#fff;  }
	.effectNav ul{ font-size:0;  }
	.effectNav li{ display:inline-block; font-size:12px; padding:0 10px; margin:10px 0 0 10px;  background:#cdcdcd;  }
	.effectNav li.new{ background:#fce8cd;  }


	/* 本例子css -------------------------------------- */
	.tabBox .hd{ height:40px; line-height:40px; padding:0 10px; font-size:20px; background:#F3F3F3; border-top:2px solid #CECECE;  }
	.tabBox .hd ul{ overflow:hidden;  }
	.tabBox .hd ul li{ float:left; margin:0 10px; color:#515151;  }
	.tabBox .hd ul .on{ border-bottom:2px solid #BA2636; color:#BA2636;  }
	.tabBox .hd ul .on a{ display:block; /* 修复Android 4.0.x 默认浏览器当前样色无效果bug */  }
	.tabBox .bd ul{ padding:10px 0 10px 10px;  }
	.tabBox .bd li{ height:33px; line-height:33px;   }
	.tabBox .bd a{ -webkit-tap-highlight-color:rgba(0,0,0,0); }  /* 去掉链接触摸高亮 */
	.tabBox .bd li a{ color:#555;  }
	.tabBox .bd .t{ height:85px; overflow:hidden;   }
	.tabBox .bd .t .pic{ width:130px; float:left;    }
	.tabBox .bd .t .con{ margin-left:130px; line-height:20px;   }
	.tabBox .bd .t .con p{ font-size:12px; color:#999;  }
</style>

<script>
	import Vue from 'vue'
	import '../../static/plugins/TouchSlide.1.1.js'
	// TouchSlide({ slideCell:"#leftTabBox" })

	export default {
		name: 'topic',
		slideCell:"#leftTabBox",
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
		},
		methods:{
			TouchSlide( slideCell ){
				console.log(slideCell)
			},
			
		},
		// mounted: function() {
  //           TouchSlide(slideCell);
  //       },
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
<template>
	<section id="sideBar" class="nav-list" :class="{'show':showMenu}">
		<!-- <userInfo></userInfo> -->
		<section class="list-ul">
			<router-link  class="item iconfont icon-quanbu" :to="{name:'list',query:{tab:'all'}}">全部</router-link>
			<router-link class="item iconfont icon-hao" :to="{name:'list',query:{tab:'good'}}">精华</router-link>
			<router-link class="item iconfont icon-fenxiang" :to="{name:'list',query:{tab:'share'}}">分享</router-link>
			<router-link class="item iconfont icon-wenda" :to="{name:'list',query:{tab:'ask'}}">问答</router-link>
			<router-link class="item iconfont icon-zhaopin" :to="{name:'list',query:{tab:'job'}}">招聘</router-link>
			<router-link class="item iconfont icon-xiaoxi" to="/message">消息</router-link>
			<router-link to="/about" class="item iconfont icon-about">关于</router-link>
		</section>
	</section>
</template>
<script>
	export default {
		replace: true,
		props:['showMenu','pageType','nickName','profileUrl'],
		components: {
			'userInfo': require('./user-info.vue')
		}
	}
</script>
<style lang='scss'>
	.nav-list {
		position:fixed;
		top:0;
		bottom:0;
		left:-200px;
		/*left:0px;*/
		width:200px;
		background-color: #fff;
		color:#313131;
		transition:all .3s ease;
		z-index:8;
		&.show{
			transform:translateX(200px);
		}
	}

	.list-ul{
		margin:0 24px;
		border-top:1px solid #d4d4d4;
		padding-top:9%;
		.item {
			display:block;
			font-size:14px;
			padding:9% 0;
			text-align:left;
			text-indent:1px;
			line-height:15px;
			color:#313131;
			font-weight:700;
			&:last-child {
				margin-bottom:50px;
			}
			&:before{
				color:#2c3e50;
			}
		}
		.line {
			border-top:1px solid #d4d4d4;
		}
	}

</style>
<template>
	<div>
		<div class="page-cover" v-if="show&&fixHead" @click="closeMenus"></div>
		<header id="hd" :class="{'show':show && fixHead,'fix-header':fixHead,'no-fix':!fixHead}">
			<div class="nv-toolbar">
				<div class="toolbar-nav" @click="openMenu" v-if="fixHead"></div>
				<span v-text="pageType"></span>
				<router-link to="/add">
					<i class="iconfont add-icon" v-if="needAdd" v-show="!messageCount || messageCount <= 0">&#xe60f;</i>
				</router-link>
			</div>
		</header>
		<nv-menu :show-menu="show" :page-type="pageType" :nick-name="nickname" :profile-url="profileimgurl" v-if="fixHead"></nv-menu>
	</div>
</template>
<script>
	// import $ from 'webpack-zepto'

	export default {
		replace:true,
		props: {
			pageType: String,
			fixHead: Boolean,
			messageCount : Number,
			needAdd : {
				type: Boolean,
				default:true
			}
		},
		data() {
			return {
				nickname :'',
				profileimgurl:'',
				show:false
			}
		},
		methods: {
			openMenu() {
				$('html,body,#page').addClass('scroll-hide');
				this.show = !this.show;
			},
			closeMenus() {
				this.show = !this.show;
				$('html,body,#page').removeClass('scroll-hide')
			}
		},
		components:{
			'nvMenu':require('./menu.vue')
		}
	}	
</script>
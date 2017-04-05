<template>
	<div>
		<div class="page-cover"></div>
		<header>
			<div class="toolbar">
				<div class="toolbar-nav"></div>
				<span></span>
			</div>
		</header>
		<nv-menu></nv-menu>
	</div>
</template>
<script>
	import $ from 'webpack-zepto'

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
			showMenus() {
				this.show = !this.show;
				$('html,body,#page').removeClass('scroll-hide')
			}
		},
		components:{
			'nvMenu':require('./menu.vue')
		}
	}	
</script>
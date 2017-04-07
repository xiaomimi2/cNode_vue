<template>
	<div>
		<my-header page-type="关于" :fix-head="true" :need-add="true"></my-header>
		<dl class="about-info">
			<dt>关于项目</dt>
			<dd>vue-router,vuex,vue三者的充分利用，其中还使用了Vue的插件。入门介绍</dd>
			<dt>vue 版本</dt>
			<dd>v2.0</dd>
		</dl>
	</div>
</template>
<script>
	import myHeader from '../components/myHeader.vue';
	export default {
		replace:true,
		components: {
			myHeader
		}
	}
</script>
<style lang='scss'>
	.about-info{
		margin-top:50px;
		padding:15px 30px;
		line-height:1.5;
		background: #fff;
		min-height:400px;
		dt{
			font-size:20px;
			font-weight:400;

		}
		dd{
			font-size:16px;
		}

	}
	
</style>
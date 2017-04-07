<template>
	<div>
		<my-header page-type="用户信息" :fix-head="true" :need-add="true" ></my-header>
		<section class="userinfo">
			<img :src="user.avatar_url" alt="" class="u-img">
			<span class="u-name" v-text="user.loginname"></span>
			<div class="u-bottom">
				<span class="u-time"></span>
				<span class="u-score">积分</span>
			</div>
		</section>	
	</div>
</template>
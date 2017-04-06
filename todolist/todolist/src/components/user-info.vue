<template>
	<div class="user-info">
		<ul class="login-no" v-if="!userInfo.loginname">
			<li class="login" @click="goEnter"><a href="">登录</a></li>
		</ul>
		<div class="login-yes" v-if="userInfo.loginname">
			<div class="avatar">
				<img :src="userInfo.avatar_url" alt="" v-if="userInfo.avatar_url">
			</div>
			<div class="info">
				<p  v-text="userInfo.loginname"></p>
			</div>
		</div>
	</div>
</template>
<script>
	
	export default {
		replace: true,
		method:{
			goEnter() {
				this.$router.push({
					name:'/login',
					query:{
						redirect: encodeURIcomponent(this.$route.path)
					}
				})
			}
		}
	}
</script>
<template>
	<div class="user-info">
		<!-- 未登录 -->
		<ul class="login-no" v-if="!userInfo.loginname">
			<li class="login" @click="goEnter"><a >登录</a></li>
		</ul>
		<!-- 已登录 -->
		<div class="login-yes" v-if="userInfo.loginname" @click="goUser">
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
	import { mapGetters } from 'vuex'
	export default {
		replace: true,
		computed:{
			...mapGetters({
				userInfo:'getUserInfo'
			})
		},
		methods:{
			goEnter() {
				this.$router.push({
					path:'/login',
					query:{
						redirect: encodeURIComponent(this.$route.path)
					}
				})
			},
			goUser() {
				this.$router.push({
					name:'user',
					params: {
						loginname:this.userInfo.loginname
					}
				})
			}
		}
	}
</script>
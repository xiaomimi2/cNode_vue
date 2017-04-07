<template>
	<div class="login-page">
		<my-header page-type="登录"></my-header>
		<section class="page-body">
			<div class="label">
				<input type="text" class="txt" placeholder="Access Token" v-model="token" maxlength="36">
			</div>
			<div class="label">
				<a @click="login" class="button">登录</a>
			</div>
		</section>
	</div>
</template>
<script>
	// import $ from 'webpack-zepto';
	import myHeader from '../components/myHeader.vue'

	export default{
		replace:true,
		data() {
			return {
				token:''
			}
		},
		methods:{
			login() {
				if(this.token===''){
					this.$alert('令牌格式错误,应该是36位UUID字符串');
					return false;
				}
				var that = this;
				$.ajax({
					type:'POST',
					url:'https://cnodejs.org/api/v1/accesstoken',
					data:{
						accesstoken:this.token
					},
					dataType:'json',
					success: (res) => {
						let user = {
							loginname: res.loginname,
							avatar_url:res.avatar_url,
							userId: res.id,
							token: this.token
						};
						window.sessionStorage.user = JSON.stringify(user);
						this.$store.dispatch('setUserInfo',user);
						let redirect = decodeURIComponent(this.$route.query.redirect || '/');
						console.log(redirect);
						that.$router.push({
							path:redirect
						})
					},
					error: (res) => {
						console.log(res);
						var error = JSON.parse(res.responseText);
						this.$alert(error.error_msg);
					}

				})
			}
		},
		components:{
			myHeader
		}
	}
</script>
<style lang='scss'>
	.page-body{
		padding:50px 15px;
		min-height:400px;
		background-color: #fff;
		.label{
			display:inline-block;
			width:100%;
			margin-top:15px;
			position:relative;
			left:0;
			top:0;
			.txt{
				padding:12px 0;
				border:none;
				border-bottom:1px solid #4fc08d;
				background-color: transparent;
				width:100%;
				font-size:14px;
				color:#313131;
			}
			.button{
				display:inline-block;
				width:100%;
				height:42px;
				line-height:42px;
				color:#fff;
				background-color:#4fc08d;
				border:none;
				border-bottom:2px solid #3aa373; 
				text-align:center;
				vertical-align:middle;
			}
		}
	}
</style>
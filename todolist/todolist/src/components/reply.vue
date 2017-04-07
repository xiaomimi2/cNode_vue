<template>
	<section class="reply">
		<textarea name="" id="content" cols="30" rows="8" :class="{'err':hasErr}" v-model="content" placeholder="回复支持markdown语法，请注意标记代码"></textarea>
		<a @click="addReply" class="button">确定</a>
	</section>
</template>

<script>
	const markdown = require('markdown').markdown;
	const utils = require('../lib/util.js');
	import { mapGetters } from 'vuex';
	export default {
		replace:true,
		props:['topic','topicId','replyId','replyTo','show'],
		data() {
			return {
				hasErr: false,
				content:'',
				author_txt:'<br/><br/><a class="form" href="https://github.com/shinygang/Vue-cnodejs">I‘m webapp-cnodejs-vue</a>'

			}
		},
		computed: {
			...mapGetters({
				userInfo:'getUserInfo'
			})
		},
		mounted () {
			if(this.replyTo){
				this.content = `@${this.replyTo}`;
			}
		},
		methods: {
			addReply() {
				if(!this.content){
					this.hasErr = true;
				}else {
					let  time = new Date();
					let linkUsers= utils.linkUsers(this.content);
					let htmlText = markdown.toHTML(linkUsers) + this.author.txt;
					let replyContent = $('<div class="markdown-text></div>"').append(htmlText)[0].outerHTML;
					let postData = {
						accesstoken : this.userInfo.token,
						content: this.content+this.author_txt
					};
					/*如果这个评论是对另一个评论的回复*/
					if(this.replyId) {
						postData.reply_id = this.replyId;
					}
					$.ajax({
						type:'POST',
						url:`https://cnodejs.org/api/v1/topic/${this.topicId}/replies`,
						dataType:'json',
						data:postData,
						success: (res) => {
							if(res.success){
								this.topic.replies.push({
									id:res.reply_id,
									author:{
										loginname:this.userInfo.loginname,
										avatar_url: this.userInfo.avatar_url
									},
									content:replyContent,
									ups:[],
									create_at:time
								})
							};
							this.content = '';
							if(this.show) {
								this.$emit('close');
							}
						},
						error: (res) => {
							 var error = JSON.parse(res.responseText);
                            this.$alert(error.error_msg);
                            return false;
						}
					})
				}
			}
		}
	}
</script>
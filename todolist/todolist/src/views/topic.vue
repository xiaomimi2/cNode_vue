<template>
<!-- "data": {
		"id": "5433d5e4e737cbe96dcef312",
		"author_id": "504c28a2e2b845157708cb61",
		"tab": "share",
		"content": "",
		"title": "一个面向 Node.js 初学者的系列课程：node-lessons",
		"last_reply_at": "2016-06-16T08:12:21.234Z",
		"good": true,
		"top": false,
		"reply_count": 85,
		"visit_count": 27457,
		"create_at": "2014-10-07T12:00:36.270Z",
		"author": {
			"loginname": "alsotang",
			"avatar_url": "https://avatars2.githubusercontent.com/u/1147375?v=3&s=120"
		},
		"replies": [{
			"id": "5433d866e737cbe96dcef313",
			"author": {
				"loginname": "leapon",
				"avatar_url": "https://avatars.githubusercontent.com/u/4295945?v=3&s=120"
			},
			"content": "<div class=\"markdown-text\"><p>我喜欢你的写作风格</p>\n</div>",
			"ups": ["5404a4120256839f712590f3", "50f3b267df9e9fcc58452224", "56ce9a441739f76e1a05d3e1", "5697a7c169d67aff5a8353db", "57bfb35b100afbbc0dcc53c4", "5822a40fb71596cc386783e8"],
			"create_at": "2014-10-07T12:11:18.981Z",
			"reply_id": null,
			"is_uped": false
		} -->
	<div>
		<my-header page-type="主题" :show-menu="showMenu" :need-add="true" :fix-head="true"></my-header>
		<div id="page" v-if="topic.title">
			<h2 class="topic-title" v-text="topic.title"></h2>
			<section class="author-info">
				<img :src="topic.author.avatar_url" alt="" class="avatar">
				<div class="col">
					<span>{{topic.author.loginname}}</span>
					<time>发布于:{{topic.create_at | getLastTimeStr(true)}} </time>
				</div>
				<div class="right">
					<span class="tag" :class="getTabInfo(topic.tab,topic.good,topic.top,true)" v-text="getTabInfo(topic.tab,topic.good,topic.top,false)"></span>
					<span class="name">{{topic.visit_count}}次浏览</span>
				</div>
			</section>
			<section class="markdown-body topic-content" v-html="topic.content"></section>
			<h3 class="topic-reply">
				<strong>{{topic.reply_count}}</strong>回复
			</h3>
			<section class="reply-list">
				<ul>
					<li v-for="item in topic.replies">
						<section class="user">
							<router-link :to="{name:'user',params:{loginname:item.author.loginname}}">
								<img :src="item.author.avatar_url" alt="" class="head">
							</router-link>
							<div class="info">
								<span class="cl">
									<span class="name" v-text="item.author.loginname"></span>发布于<span>{{item.create_at | getLastTimeStr(true)}}</span>
								</span>
								<span class="cr">
									<span class="iconfont icon" :class="{'uped':isUps(item.ups)}" @click="upReply(item)">&#xe608;</span>{{item.ups.length}}<span class="iconfont icon" @click="addReply(item.id)"> &#xe609;</span>
								</span>
							</div>
						</section>
						<div class="reply_content" v-html="item.content"></div>
					</li>
				</ul>
			</section>
		</div>
		<div class="noData" v-if="noData">
			<i class="iconfont icon-empty">&#xe60a;</i>该话题不存在
		</div>
	</div>
</template>

<script>
	import $ from 'webpack-zepto';
	import utils from '../lib/util.js';
	import myHeader from '../components/myHeader.vue';
	import { mapGetters } from "vuex";

	export default {
		data() {
			return {
				showMenu: false,
				topic: {},
				noData:false,
				topicId:'',
				curReplyId:''
			}
		},
		computed: {
			...mapGetters({
				userInfo: 'getUserInfo'
			})
		},
		created() {
			this.showMenu = false;
			this.topicId = this.$route.params.id;
			$.get('https://cnodejs.org/api/v1/topic/'+this.topicId,(d) => {
				if(d && d.data){
					this.topic = d.data;
				} else {
					this.noData = true;
				}
			})
		},
		methods : {
			getTabInfo(tab ,good = false, top, isClass) {
				return utils.getTabInfo(tab,good,top,isClass)
			},
			isUps(ups) {
				return $.inArray(this.userInfo.userId, ups) >= 0;
			},
			addReply(id) {
				this.curReplyId = id;
				if(!this.userInfo.userId){
					this.$router.push({
						name:'login',
						params: {
							redirect: encodeURIComponent(this.$route.path)
						}
					})
				}
			},
			upReply(item) {
				if(!this.userInfo.userId){
					this.$router.push({
						name:'login',
						params: {
							redirect: encodeURIComponent(this.$route.path)
						}
					})
				} else {
					$.ajax({
						type:'POST',
						url: 'https://cnodejs.org/api/v1/reply/'+item.id+'/ups',
						data: {
							accesstoken: this.userInfo.token
						},
						dataType:'json',
						success: (res) => {
							if(res.success){
								if(res.action === "down"){
									let index = $.inArray(this.userInfo.userId,item.ups);
									item.ups.splice(index,1);
								} else {
									item.ups.push(this.userInfo.userId);
								}
							}
						},
						error: (res) => {
							let error = JSON.parse(res.responseText);
							console.log(error)
						}
					})
				}
			}

		},
		components: {
			myHeader
		},
		filters:{
			getLastTimeStr(time,friendly) {
				return utils.getLastTimeStr(time,friendly);
			}
		}
	}
</script>
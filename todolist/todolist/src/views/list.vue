<template>
<div>
	<my-header></my-header>
	<section id="page">
		<ul class="posts-list">
			<li v-for="item in topics" :key="item.id">
				<router-link to="">
					<h3 v-text="item.title"></h3>
					<div class="content">
						<img :src="item.author.avatar_url" alt="" class="avatar">
						<div class="info">
							<p>
								<span class="name" >
								{{item.author.loginname}}</span>
								<span class="status">
									<b>{{item.reply_count}}</b>/{{item.visit_count}}
								</span>
							</p>
							<p>
								<time>{{ item.create_at | getLastTimeStr(true) }}</time>
								<time>{{ item.last_reply_at | getLastTimeStr(true) }}</time>
							</p>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</section>
	<to-top></to-top>
</div>
	
</template>
<script>
	import $ from "webpack-zepto"
	import utils from "../lib/util.js"
	import myHeader from "../components/myHeader.vue"
	import toTop from "../components/toTop.vue"

	export default {
	  filters : {
	  	getLastTimeStr(time,isFromNow){
	  	  return utils.getLastTimeStr(time,isFromNow)
	  	}
	  },
	  data() {
	  	return {
	  	  scroll: true,
	  	  topics: [],
	  	  index: {},
	  	  searchKey: {
	  	  	page: 1,
	  	  	limit: 20,
	  	  	tab: 'all',
	  	  	mdrender: true
	  	  },
	  	  searchDateStr:''
	  	}
	  },
	  components: {
        myHeader,
        toTop
	  },
	  mounted() {
	  	if(this.$route.query && this.$route.query.tab) {
	  	  this.searchKey.tab = this.$route.query.tab
	  	};
	  	if(window.sessionStorage.searchKey && window.sessionStorage.tab === this.serachKey.tab) {
	  		this.topics = JSON.parse(window.sessionStorage.topics);
	  		this.searchKey = JSON.parse(window.sessionStorage.searchKey);
	  		this.$nextTick(() => {$(window).scrollTop(window.sessionStorage.scrollTop)})
	  	} else {
	  		this.getTopics();
	  	}
	  },
	  methods: {
	  	// getTabInfo(tab,good,top,) {
	  	// 	return utils.getTabInfo
	  	// },
	  	getTopics() {
	  		let params = $.param(this.searchKey);
	  		$.get('https://cnodejs.org/api/v1/topics?' + params, (d) => {
	  			this.scroll = true;
	  			if( d && d.data){
	  				d.data.forEach(this.mergeTopics);
	  			}
	  		})
	  	},
	  	mergeTopics(topic) {
	  		if(typeof this.index[topic.id] === 'number') {
	  			const topicsIndex = this.index[topic.id];
	  			this.topics[topicsIndex] = topic;//这是更新数据
	  		} else {
	  			this.index[topic.id] = this.topics.length;//第一个是0
	  			this.topics.push(topic);//第一个是第一个topic
	  		}
	  	}
	  }
	}
</script>
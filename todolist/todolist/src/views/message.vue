<template>
	<div>
		<my-header page-type="消息" :fix-head="true" :show-menu="ShowMenu" :message-count="no_read_len" :need-add="true"></my-header>
		<div class="page">
			<ul class="tabs">
				<li class="item br">已读消息</li>
				<li class="item">未读消息<i class="iconfont read" v-show="no_read_len > 0">&#xe60c;</i></li>
			</ul>
			<div class="message markdown markdown-body" v-for="item in currentData">
				<section class="user">
					<img :src="item.author.avatar_url" alt="" class="head">
					<div class="info">
						<span class="cl">
							<span class="name">{{item.author.loginname}}</span>
							<span class="name" v-if="item.type==='at'">在回复中@了你</span>
							<span class="name" v-if="item.type==='reply'">恢复了您的话题</span>
						</span>
						<span class="cr">
							<span class="name" v-text="getLastTimeStr(item.reply.create_at, true)"></span>
						</span>
					</div>
				</section>
				<div class="reply_content" v-html="item.reply.content"></div>
				<router-link :to="{name:'topic',params:{id:item.topic.id}}">
					<div class="topic-title">话题:{{item.topic.title}}</div>
				</router-link>
			</div>
			<div class="noData" v-show="noData">
				<i class="iconfont icon-empty">&#xe60a;</i>暂无数据
			</div>
		</div>
	</div>
</template>
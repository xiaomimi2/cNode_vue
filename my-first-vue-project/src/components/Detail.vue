<template>
	<div class="ChaKan">						
	  				   <div class="list-title"> <!-- 数据表 表头 -->
		  				    <a id="back" onclick="history.back()"><img src="../images/btn_back.png" alt=""></a>
					   		<p id="headTitle" class="title-p" style="font-size:1.88rem;">
							   		
	   						</p>   		  		
					   		<p class="export-p">
					   			<img src="../images/btn_export.png" alt="">
					   		</p>
					   		<p class="prit-p" onclick="window.parent.printTable()">
					   			<img src="../images/btn_print.png" alt="">
					   		</p>
	   					</div>
	   					<div class="list-con">
							<table rules=rows frame=hsides>
								<thead>
									 <tr>
								    <th>编号</th>
								    <th>会议名称</th>
								    <th>会议模式</th>
								    <th>会议时间</th>
								    <th>发起人</th>
								    <th>发起人所在法院</th>
								    <th>所在部门</th>
								    <th>参与人</th>
								  </tr>
								</thead>
								<tbody>
									<!-- <tr class="number-tr">
								    <td>01</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01 13:40:43</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								  <tr class="number-tr">
								    <td>02</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								  <tr class="number-tr">
								    <td>03</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								   <tr class="number-tr">
								    <td>04</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>								  </tr>
								   <tr class="number-tr">
								    <td>05</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								   <tr class="number-tr">
								    <td>06</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								   <tr class="number-tr">
								    <td>07</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								  <tr class="number-tr">
								    <td>08</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								  <tr class="number-tr">
								    <td>09</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看</td>
								  </tr>
								  <tr class="number-tr">
								    <td>10</td>
								    <td>江苏高级人民法院</td>
								    <td>视频会商</td>
								    <td>2016-01-01</td>
								    <td>王大雷</td>
								    <td>江苏省高级人民法院</td>
								    <td>民一庭</td>
								    <td class="chakan-btn">查看
								    </td>
								  </tr>
                                   -->
								</tbody>														  
							</table>
	   					</div>	
					 <p id="page"> <!-- 分页 -->
		   		 		<span class="total-num">每页<span>&nbsp;</span>条记录</span>
		            	<input type="button" class="prev" value="">
		                <span class="num">
		                    <span class="current">1</span>
		                    <span style="padding:0 3px;">/</span>
		                    <span class="total"></span>
		                </span>
		                <input type="button" class="next" value="">
		  			</p>
		  			<div class="foot-text" style="padding-top:50px;">
				                	苏州云视信息技术支持
				    </div>
    </div>
</template>
<script>
	export default{
		
	}
</script>
<style>
	
.ChaKan{
	position: relative;
	/*border: 1px solid red;*/
	width: 1500px;
	background: #fff;
	padding-bottom:100px;
}
.list-title {
	height: 50px;
	font-size: 20px;
	line-height: 50px;
	border-bottom: 1px solid #ccc;
}
.list-title input{
	width: 100px;
	height: 32px;
	font-size: 16px;
	outline: none;
    border: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-align: center;
}
.list-title .totle{
	width: 40px;
}	


.list-title a img{/*gai*/
	width: 84px;
	height: 30px;
	margin-left: 70px;
	margin-top: 10px;
}
.list-title p{display: inline-block;}
.list-title .title-p{
	line-height: 60px;float: left;
	position: absolute;
	left: 200px;
}
.list-title .export-p,.list-title .prit-p{
	width: 84px;
	height: 30px;	
	margin: 10px 6px;
	cursor: pointer;
	float: right;
}
.list-title .export-p img,.list-title .prit-p img{
	width: 84px;
	height: 30px;
}
 


/*<!-- 左侧浮层窗 -->*/
/*.list-con{width:100%;border:1px solid blue;}*/
.list-con .left-pop{position: absolute; left: 0px;top:0px;z-index: 1;width: 40px;}
.list-con .left-pop li{width: 47px;height: 170px; background:url(../images/tab_v_x.png) no-repeat center;background-size: 100% 100%;z-index: -1;}
.list-con .left-pop li a{color: #4583D3;text-decoration: none;}
.list-con .left-pop .li_on{background:url(../images/tab_v_a.png) no-repeat;background-size: 100% 100%;z-index: 1;}
.list-con .left-pop .li_on a{color: #fff;}
.list-con .left-pop .TBli a{color:#777;}
.list-con .left-pop p{
	width: 48px;
	height: 77px;
	background: url(../images/tab_l.png) no-repeat center;	background-size: 100% 100%;
	position: relative;
	margin: 0px !important;
	cursor: pointer;
}
.list-con .left-pop .sho-hid{
	background: url(../images/tab_l_a.png) no-repeat center;	background-size: 100% 100%;
}
.list-con .left-pop li{
	list-style: none;
	font-size: 20px;
	font-weight: 800;	
	width: 17px;height: 120px;	
	padding:30px 20px 10px 10px;
	text-align: center;

}
.list-con .left-pop li a{
	display: block;
	width: 2.2rem;
	height:5rem;
}
.list-con .left-pop .TBli{
	position: relative;
	top:-28px;
}

/*gai*/
table {
	/*width: 90%;
	width: calc(90% - 50px);
    width: -moz-calc(90% - 50px);
    width: -webkit-calc(90% - 50px);*/
    position: relative;
    margin-left: 70px;
    margin-top: 6px;
    width: 900px;
    border: 1px solid #ccc;

}
table  tr{width: 100%;}
table  th{
	border: 1px solid #ccc;
	background:#4583D3;
	color: #fff;
	text-align:center;
	height: 40px;
	line-height: 40px;
	font-size: 18px;
}
table  tr td{
	border: 1px solid #ccc;
	text-align: center;
	font-size: 16px;	
	padding:10px 4px;
	max-width: 200px;

}
table  tr .chakan-btn{
	position: relative;
	width: 80px;
	cursor: pointer;
	/*background: #ccc;*/
} 
#table-pop{
	position: absolute;
	left: 90px;
	top:0px;
	width: 150px;
	padding:15px 10px;
	background: #4583D3;
	color: #fff;
	border-radius: 8px;
}
#table-pop span{
	display: inline-block;
	padding: 4px 6px;padding-left: 0px;
}



</style>
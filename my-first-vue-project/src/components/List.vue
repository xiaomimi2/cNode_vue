<template>
	<div class="Statis-list">
	  

	   <div class="list-title"> <!-- 数据表 表头 -->
	   		<p id="headTitle" class="title-p" style="font-size:1.5rem;text-align:center;width:900px">至时间全省所有地区共计开会场</p>   		
	   		<p class="export-p" >
	   			<img src="../images/btn_export.png" alt="">
	   		</p>
	   		<p class="prit-p" onclick="window.parent.printTable()">
	   			<img src="../images/btn_print.png" alt="">
	   		</p>	
	   </div>
	   <div class="list-con"> <!-- 表内容 -->
		   		<!-- 左侧浮层窗 -->
		   		<div class="left-pop" id="left-pop"><!-- 左侧开始 -->
		   			<p></p>
		   			<li class="li_on STli"><a href="javascript:void(0);">数据表</a></li>
	                <li class="TBli"><a href="javascript:void(0);" class="TB">图表</a></li>
		   		</div><!-- 左侧结束 -->

		   		<div class="right-con"> <!-- 右侧开始 -->

						<!-- 浮窗右侧内容 -->
					
				    <div class="active data"><!-- 默认数据表 -->
				    	<table rules=rows frame=hsides>
				    	   <thead>
				    	   		<tr>
				    	   		  <th>编号</th>
				    	   		  <th v-if="catgory2">法院名称</th>
				    	   		  <th v-else>地区</th>
				    	   		  <th>开会次数</th>
				    	   		  <th>操作</th>
				    	   		</tr>
				    	   </thead>
							<tbody>
							<tr  class="number-tr" v-for="(item,index) in resData" v-if="catgory2">
								<td>{{ index+1 }}</td>
							    <td>{{ item.fymc }}</td>
							    <td>{{ item.meetings.length }}</td>
							    <td><a href="javascript:;">
							    	<img src="../images/btn_detail.png" alt="" style="width:100px;height:30px;">
							    </a></td>
							</tr>
							<tr class="number-tr" v-for=" (son,index) in resData" v-if="catgory1">
								<td>{{ index+1 }}</td>
							    <td>{{ son.cityname }}</td>
							    <td>{{ son.count }}</td>
							    <td><a href="javascript:;">
							    	<img src="../images/btn_detail.png" alt="" style="width:100px;height:30px;">
							    </a></td>
							</tr>
							<!--  <tr class="number-tr">
							    <td>001</td>
							    <td>江苏高级人民法苏高级院</td>
							    <td>133</td>
							    <td><a href="../chakan/ChaKanTwo.html"  target="iframeRight"></a></td>
							  </tr>
							  <tr class="number-tr">
							    <td>001</td>
							    <td>江苏高级人民法苏高级院</td>
							    <td>133</td>
							    <td><a href="../chakan/ChaKanTwo.html"  target="iframeRight"></a></td>
							  </tr>
							  <tr class="number-tr">
							    <td>001</td>
							    <td>江苏高级人民法苏高级院</td>
							    <td>133</td>
							    <td><a href="../chakan/ChaKanTwo.html"  target="iframeRight"></a></td>
							  </tr>
							  <tr class="number-tr">
							    <td>001</td>
							    <td>江苏高级人民法苏高级院</td>
							    <td>133</td>
							    <td><a href="../chakan/ChaKanTwo.html"  target="iframeRight"></a></td>
							  </tr> -->
							</tbody> 
							 
							</table>





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
	

				    </div> <!-- 数据表内容结束 -->

					<!-- 图表 -->
					<!-- <div class="TuBiaoPar">
						<div class="TuBiao" id="TuBiao">
							<div class="TuBiao-tab"  >
								<span class="chartu zzt zzt-active "></span>
						   		<span class="chartu bt" ></span>
						   		<span class="chartu zxt" ></span>
						    </div>
						    <div class="tab-con">
						    	 <div id="echarts"></div>
						    	 <div id="echartsb"></div>
						    	 <div id="echartsc"></div>
						    </div>				    	  
				        </div>
				   </div> -->
		   		</div>	<!-- 	右侧结束 -->				  
	   </div> <!-- 表内容结束 -->


	  

	</div>

</template>
<script>
    import Bus from "../bus.js"


	export default{
		data:function(){
			return {
				resData:[],
				allCourt:[],
				catgory2:false
			}
		},
		created:function(){
			// console.log(location)
			// var arr=location.hash.substr(7).split("&");
			// var obj={};
			// for(var i=0;i<arr.length;i++){
			// 	var x=arr[i].split('=');
			// 	i<arr.length-2?obj[x[0]]=decodeURIComponent(x[1]):obj[x[0]]=x[1];
			// }
			// console.log(obj);
			// console.log(obj.court==="undefined")
			var vm=this;
			// this.$http.get('/list/court/api/organization/courts').then((response)=>{
			// 	console.log(response.body);
			// 	vm.allCourt=response.body.courts;			
			// },(response)=>{
			// 	console.log("所有法院资料预先获取失败")
			// })
			Bus.$on('getAllCourt',function(all){
				console.log("触发getAllCourt")
				vm.allCourt=all;
			})
			Bus.$on('turntolist',function(area,court,dept,beginTime,endTime){
			console.log(arguments);
			console.log(court===undefined)
			if(area==="全省"){
			switch(court){
				case undefined:
				vm.catgory2=false;
				console.log('到了')
				this.$http.get('/list/court/api/statistic/req/1/by/city?begintime='+beginTime+'&endtime='+endTime).then((response)=>{
					console.log(response.body.result);
					vm.resData=response.body.result;
					console.log(vm.resData[0].cityname)
					 
				},(response)=>{
					console.log("全省失败");
				});
				break;
				case "所有法院":
				vm.catgory2=true;
				this.$http.get('/list/court/api/statistic/req/2/by/court?begintime='+beginTime+'&endtime='+endTime).then((response)=>{
					console.log(response.body.result);
					vm.resData=response.body.result;
				},(response)=>{
					console.log("所有法院失败")	
				});
				break;
				case "所有中级法院":
				vm.catgory2=true;
				this.$http.get('/list/court/api/statistic/req/2/by/court?begintime='+beginTime+'&endtime='+endTime).then((response)=>{
					console.log(response.body.result);
					var arr=response.body.result;
					vm.resData=[];
					for(var i=0;i<arr.length;i++){
						if(arr[i].fymc.indexOf('中级')!==-1){
							vm.resData.push(arr[i]);	
						}}
				},(response)=>{
					console.log("所有中级失败")	
				});
				break;
				case'所有基层法院':
				vm.catgory2=true;
				this.$http.get('/list/court/api/statistic/req/2/by/court?begintime='+beginTime+'&endtime='+endTime).then((response)=>{
					console.log(response.body.result);
					var arr=response.body.result;
					vm.resData=[];
					for(var i=0;i<arr.length;i++){
						if(arr[i].fymc.indexOf('中级')===-1&&arr[i].fymc.indexOf('高级')===-1){
							vm.resData.push(arr[i]);
						}}
					},(response)=>{
						console.log("所有中级失败")	
					});
				break;

			}

			}else{
				if(court==="所有法院"){
					vm.catgory2=true;
					this.$http.get('/list/court/api/statistic/req/2/by/court?begintime='+beginTime+'&endtime='+endTime).then((response)=>{
					console.log(response.body.result);
					var arr=response.body.result;
					vm.resData=[];
					for(var i=0;i<arr.length;i++){
						for(var j=0;j<vm.allCourt.length;j++){
							if(vm.allCourt[j].cityname===area&&vm.allCourt[j].FJM===arr[i].fjm){
								vm.resData.push(arr[i])
							}
						}
					}
					},(response)=>{
						console.log("按地区的所有法院失败")	
					});
				}else if(dept==="所有部门"){
					console.log(vm.allCourt)
					for(var i=0;i<vm.allCourt.length;i++){
						if(court===vm.allCourt[i].FYMC){
							var fjm=vm.allCourt[i].FJM;
							break;
						}
					}
					this.$http.get('/list/court/api/statistic/req/6/by/court?begintime='+beginTime+'&endtime='+endTime+"&fjm="+fjm).then((response)=>{
					console.log(response.body.result);
					var arr=response.body.result;
					vm.resData=[];
					if(arr){
						for(var i=0;i<arr.length;i++){
							for(var j=0;j<vm.allCourt.length;j++){
								if(vm.allCourt[j].cityname===area&&vm.allCourt[j].FJM===arr[i].fjm){
									vm.resData.push(arr[i])
								}
							}
						}
					}
				
					},(response)=>{
						console.log("按地区的所有法院失败")	
					});
				}
			}
			})
			
		},
		computed:{
			catgory1:function(){
				return !this.catgory2
			}
		}

	}
</script>
<style>
    /*统计页面  分页*/
.Statis-list{width: 100%;background: #fff;position: relative;
height: 100%;
min-height: 700px;}


/*统计表 头部*/
.Statis-list .list-title {
	height: 60px;
	font-size: 22px;
	line-height: 60px;
	position: relative;
	border-bottom: 1px solid #ccc;
}
.Statis-list .list-title p{
	display: inline-block;
	height: 60px;
	line-height: 60px;

}
.list-title input{
	width: 100px;
	height: 32px;
	font-size: 1.8rem;
	outline: none;
    border: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-align: center;
}
.list-title .totle{
	width: 40px;
}	
/*gai*/
.Statis-list .list-title .title-p{
	position: absolute;
	left:74px;
}
.Statis-list .list-title .export-p,.Statis-list .list-title .prit-p{
	width: 100px;
	height: 36px;	
	float: right;
	margin: 10px 6px;
	cursor: pointer;
}
.list-title .export-p img,.list-title .prit-p img{
	width: 84px;
	height: 30px;
}

/*<!-- 左侧浮层窗 -->*/
.list-con .left-pop{position: absolute; left: 0px;top:0px;z-index: 1;width: 47px;}
.list-con .left-pop li{
	width: 17px;height: 120px; background:url(../images/tab_v_n.png) no-repeat;z-index: -1;
	background-size:100% 100%;list-style: none;
	font-size: 20px;
	font-weight: 800;	
	padding:30px 20px 10px 10px;
	text-align: center; }
.list-con .left-pop li a{color: #4583D3;text-decoration: none;}
.list-con .left-pop .li_on{background:url(../images/tab_v_a.png) no-repeat;z-index: 1;background-size:100% 100%;}
.list-con .left-pop .li_on a{color: #fff;}
.list-con .left-pop p{
	width: 48px;
	height: 77px;
	background: url(../images/tab_l.png) no-repeat;	
	position: relative;
	margin: 0px !important;
	cursor: pointer;
}
.list-con .left-pop .sho-hid{
	background: url(../images/tab_l_a.png) no-repeat;	
}
.list-con .left-pop .TBli{
	position: relative;
	top:-30px;
}


 


/*统计表内容*/

/*gai*/
.right-con {
	position: relative;
}
.right-con .data{
	/*border:1px solid red;*/
	padding-bottom: 100px;
	position: relative;
	width:90%;
	left:76px;
}
.right-con div{z-index: 1;}
/*gai*/
.right-con .active{
	z-index:1;opacity: 1;
	filter:alpha(opacity=100);
	-moz-opacity:1;
}


/*gai*/
table {
	width: 900px;
	/*width: calc(90% - 50px);
    width: -moz-calc(90% - 50px);
    width: -webkit-calc(90% - 50px);*/
  
    margin-top: 6px;
    border: 1px solid #ccc;
    z-index: 1;

}
table  tr{width: 100%;}
table  th{
	background:#4583D3;
	color: #fff;
	text-align:center;
	height: 40px;
	line-height: 40px;
	font-size: 18px;
	border:1px solid #ccc;

}

table  tr td{
	height: 35px;
	padding: 3px 4px 2px 4px;
	text-align: center;
	font-size: 16px;	
	max-width: 200px;
	border:1px solid #ccc;


}
table  tr td a img{
	width: 80px !important;
	height: 24px !important;
}
/*查看详情按钮*/
table  tr td:last-child a{
	position: relative;
	margin: 3px 0px 0px !important;
	display: inline-block;
	width: 100px;
	height: 30px;
	cursor: pointer;
}

/*图表  宽900 高度600  点击选项卡 数据表和图表通过z-index实现切换显示*/
.TuBiaoPar{hight:700px;width: 400px;background: #000;}
.TuBiao{
	width: 100%;
	height: 600px;
	background: #fff;
	position: absolute;
	top:0px;
	/*border:1px solid blue;*/
	/*display: none;*/
	
	opacity: 0.01;filter:alpha(opacity=1);-moz-opacity:0.01;


}
.TuBiao #echarts,.TuBiao #echartsb,.TuBiao #echartsc{
	height: 500px;
	width: 100%;
	background: #fff;
	position: absolute;
	left: 50px;
	top:50px;
}


 .TuBiao #echarts{
 	height: 500px;
 }
.TuBiao a{position: absolute;bottom: 40px;left: 400px;}
.TuBiao input{cursor: pointer;width: 80px;height: 32px;text-align:center;font-size: 16px;line-height: 32px;}
.chartu{float: left;margin-left: 80px;}

/*已选择的地区弹窗 */
	
#choosed-area{
	width: 600px;
	height: 500px;
	background:#fff;
	position: relative;
	border: 1px solid blue;
	z-index: 120;
	position: absolute;
	left: 100px;
	top:100px;
	display: none;
}
#choosed-area .choosed-zhezhao{ /*遮罩*/
 position: absolute;top:0px;left: 0px;bottom: 0;right: 0;background: #000;opacity: 0.3;filter:alpha(opacity=30);
display: none;z-index: 140;

}
#choosed-area h2{height: 80px;line-height: 80px;padding:0px 20px;font-size: 22px;}
#choosed-area .choose,#choosed-area .choosed{
	width:250px;
	height: 300px;
	/*background: yellow;*/
	display: inline-block;
	float: left;
	text-align: center;
}
#choosed-area h3{height: 30px;line-height: 30px;font-size: 20px;padding: 10px 0px;}
#choosed-area p{height: 26px;line-height: 26px;font-size: 18px;cursor: pointer;}
#choosed-area .choo-con{border: 1px solid #000;overflow-y:auto;max-height:240px;min-height: 240px;}
#choosed-area .add-area{display: inline-block;float: left;width: 60px;margin: 200px 12px;}
#choosed-area .choose .p-active{background: #000;color: #fff;}

/*删除按钮span*/
#choosed-area .choo-con span{display: inline-block; width: 20px;height: 26px;line-height: 26px;float: right;margin-right: 10px;}


/*确定按钮*/
#choosed-area .sure{position: absolute;bottom: 30px;left: 45%;width: 60px;}

 /*提示 请选择5个以内地区 提示框*/
#choosed-area .sure-pop{
	text-align: center;
	width: 240px;
	height: 130px;
	background:#fff;
	background: yellow;
	position: absolute;
	left: 35%;
	top:45%;
	z-index: 200;
	display: none;
}
#choosed-area .sure-pop strong{
	font-size: 20px;
	line-height: 100px;
	
}




/*分页*/
#page{
	position: absolute;
	bottom:0px;
	width: 900px;
	margin-left:310px;
	height: 50px;
	line-height: 50px;
	font-size: 18px;
	/*border: 1px solid blue;*/
	display:flex;     /*flex布局下的水平和垂直*/
}
#page .total-num{
	height: 50px;
	line-height: 50px;
	font-size: 16px;
}
#page .total-num span{
	display: inline-block;
	height: 50px;
	width: 20px;
	padding:0px 10px;
	line-height: 50px;
}

#page .prev{
	cursor: pointer;
	display: inline-block;
	width: 91px;
	height: 32px;
	background: url(../images/btn_pre.png) no-repeat center;
	background-size: 100%;
	position: relative;
	top:10px;
	margin-left: 15px;
	margin-right: 8px;
	outline: none;  
	border: none;
-webkit-tap-highlight-color: rgba(0,0,0,0); 
}
#page .prev-active{
	background: url(../images/btn_pre_a.png) no-repeat center;
	background-size: 100%;
}

#page .next{
	cursor: pointer;
	display: inline-block;
	width: 91px;
	height: 32px;
	background: url(../images/btn_next_a.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	top:10px;
	left:8px;
	outline: none;  
	border: none;
-webkit-tap-highlight-color: rgba(0,0,0,0); 
	/*opacity: 0;*/
}
#page .next-active{
	background: url(../images/btn_next.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	top:10px;
	left:8px;
}



/*公司*/
.foot-text{
	position: absolute;
	bottom: -60px;
	/*left: 50%;*/
	margin-left: 450px;
	font-size: 14px;
 	color: #ccc;
}


	.TuBiao-tab{
		padding-left: 70px;
	}
	.chartu{float: left;margin-left: 50px;width: 90px;height: 30px;
			cursor: pointer;
			outline: none;  
				border: none;
			-webkit-tap-highlight-color: rgba(0,0,0,0); 
	}
	.zzt{
		margin-top: 20px;
		background:url(../images/btn_zzt.png) no-repeat center center;
			background-size: 100% 100%;

	}
	.zzt-active{
		margin-top: 20px;
		background:url(../images/btn_zzt_a.png) no-repeat center center;
			background-size: 100% 100%;


	}
	.bt{
		margin-top: 20px;
		background:url(../images/btn_bt.png) no-repeat center center;
			background-size: 100% 100%;
	}

	.bt-active{
		margin-top: 20px;
		background:url(../images/btn_bt_a.png) no-repeat center center;
			background-size: 100% 100%;
	}
	.zxt{
		margin-top: 20px;
		background:url(../images/btn_zxt.png) no-repeat center center;
			background-size: 100% 100%;
	}
	.zxt-active{
		margin-top: 20px;
		background:url(../images/btn_zxt_a.png) no-repeat center center;
			background-size: 100% 100%;
	}
</style>
<template>
  <div class="ChoseTab">
	 <ul class="tab-title"> <!-- 选项卡 头标题 -->
            <li class="tab_on">会议统计</li>
            <li id="tab-search"><router-link to="/search" style="text-decoration:none;color:#4583D3">会议查询</router-link></li>
            <!-- <button style="float:right;">退出</button> -->
     </ul>
     <!-- ul class="tab-content"> -->   <!-- 选项卡 内容 -->
    <div class="on clearfloat count" style="width:100%"> <!-- 会议统计 -->
        <div class="fl item">
          <p class="tabp-title"><a href="javascript:void(0);">统计（全省）</a></p>
          <p class="sheng-pic">
            <a href="javascript:void(0);">
              <img src="../images/pic_province.png" alt="" >
            </a>
          </p> 
          <p><a href="javascript:void(0);" >所有地区</a></p>
          <p><a href="javascript:void(0);">所有法院</a></p>
          <p><a href="javascript:void(0);">中级法院</a></p>
          <p><a href="javascript:void(0);">基层法院</a></p>
        </div>
        <div class="fl item">
          <p class="tabp-title"><a href="javascript:void(0);" >统计（按地区）</a></p>
          <p class="area-pic">
            <a href="javascript:void(0);">
              <img src="../images/pic_area.png" alt="" >
            </a>
          </p> 
          <p><a href="javascript:void(0);" >所有法院</a></p>
          <p><a href="javascript:void(0);"></a></p>
          <p><a href="javascript:void(0);"></a></p>
          <p><a href="javascript:void(0);"></a></p>

        </div>
        <div class="fl item">
          <p class="tabp-title"><a href="javascript:void(0);">统计（单个法院）</a></p>
          <p class="court-pic">
            <a href="javascript:void(0);">
              <img src="../images/pic_court.png" alt="" >
            </a>
          </p> 
          <p><a href="javascript:void(0);" >所有部门</a></p>
          <p><a href="javascript:void(0);" >单个部门</a></p>
          <p><a href="javascript:void(0);"></a></p>
          <p><a href="javascript:void(0);"></a></p>
        </div>
    </div>
 </div>
</template>
<script>
	
</script>
<style>

	.ChoseTab{position: relative;background: #fff;width:100%;} /*选项卡相对定位*/
	.ChoseTab .tab-title{height: 40px;padding-left:20px;padding-top: 10px;
	  border-bottom: 2px solid #4583D3;}
	.ChoseTab .tab-title li{
	  padding-left: 30px;
	  font-size:18px;
	  display: inline-block;
	  width:130px;
	  height: 40px;
	  line-height: 40px;color: #4583D3;cursor: pointer;
	  background: url(../images/tab_n.png) no-repeat;
	  float: left;
	}
	.ChoseTab .tab-title .tab_on{
	  background: url(../images/tab_a.png) no-repeat;
	  background-size:100% 100%;
	  color:#fff;
	}
	/*Tab会议统计*/
	/*Tab会议统计*/
	.ChoseTab  {width: 100%;}
	/*.ChoseTab  li{display: none; padding:20px 0px;}*/
	
	.ChoseTab  .count{

	}
	.ChoseTab  .count div .sheng-pic{/*ie8*/
	  height: 280px;
	  display: block;
	  border-bottom: 1px solid #4583D3;
	}
	.ChoseTab  .count div .sheng-pic img{
	  display: inline-block;
	  width: 330px;
	  height: 280px;
	}
	.ChoseTab  .count div .area-pic{/*ie8*/
	  height: 280px;
	  display: block;
	  border-bottom: 1px solid #4583D3;
	}
	.ChoseTab  .count div .area-pic img{
	  display: inline-block;
	  width: 330px;
	  height: 280px;
	}
	.ChoseTab  .count div .court-pic{/*ie8*/
	  height: 280px;
	  display: block;
	  border-bottom: 1px solid #4583D3;
	}
	.ChoseTab  .count div .court-pic img{
	  display: inline-block;
	  width: 330px;
	  height: 280px;
	}/*ie8 end*/
	.ChoseTab  .count p{
	  font-size: 16px;
	  text-align: center;
	  border-top:1px solid #ccc;
	  border-top:1px solid rgba(0,0,0,0.1);
	}



	.ChoseTab  .on{display: block;}
	.ChoseTab .item{
	   float: left;
	   margin:0px 10px;
	   font-size: 16px;
	   line-height:46px;
	    border:1px solid #4583D3;
	    width: 330px;
	   /* width: calc((100% - 66px)/3);
	    width: -moz-calc((100% - 66px)/3);
	    width: -webkit-calc((100% - 66px)/3);
	    max-width: 350px;*/
	    height: 510px;
	   }
	.ChoseTab  div p {background: #fff;height: 45px;}
	.ChoseTab   div .tabp-title{background: #4583D3;}
	.ChoseTab   div .tabp-title a{color: #fff;}
	.ChoseTab   div p a{color: #000;}
	@media screen and (max-height:750px) { 
	    .ChoseTab  .count div p:nth-child(2){
	 /* height: 200px;
	  background: #fff;
	  border-bottom: 1px solid #4583D3;*/
	                                              }
	  .ChoseTab  div{
	 
	    /*min-height: 435px;*/
	   }


	  }   
</style>
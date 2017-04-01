<template>
	<div class="ChoseTab">
		 <ul class="tab-title"> 
            <li class="tab_on searchActive1"><router-link to="/" style="text-decoration:none;color:#4583D3">会议统计</router-link></li>
            <li id="tab-search" class="searchActive2">会议查询</li>
		  </ul>
	      <div class="search" id="tab_search">         
              <form action="#" class="clearfloat">
                  <div class="fl item">
                    <p>
                      <label for="zone" class="labelarea ">地区</label>
                      <select name="zone"  class="area">
                          <option>高院</option>
                          <option>南京</option>
                          <option>无锡</option>
                          <option>徐州</option>
                          <option>常州</option>
                          <option>苏州</option>
                          <option>南通</option>
                          <option>连云港</option>
                          <option>淮安</option>
                          <option>盐城</option>
                          <option>扬州</option>
                          <option>镇江</option>
                          <option>泰州</option>
                          <option>宿迁</option>
                      </select>
                    </p>
                     <p>
                      <label for="zone" class="labelow">法院</label>
                      <select class="court">
                          <option>江苏省高级人民法院</option>
                      </select>
                    </p>
                     <p>
                      <label for="zone" class="labelpart">部门</label>
                      <select class="depart">
                          <option>民一庭</option>
                      </select>
                    </p>
                  </div>
                  <div class="fl item">
                    <p class="identify">
                      <label for="">参与方式</label>
                      <input type="checkbox" name="checkbox"  class="join">&nbsp;:&nbsp;会议发起人 <br>
                      <input type="checkbox" name="checkbox"  class="join">&nbsp;:&nbsp;会议参与者
                    </p>
                    <p>
                      <label for="">参与人姓名</label>
                      <input type="text"   placeholder="请输入您的姓名" class="username">
                    </p>
                    
                  </div>
                  <div class="fl item">
                    <span class="ptime">时段</span>
                     <p style="margin:10px 0px 20px;padding-left:15px;">
                          <span class="FT">起始时间</span>
                          <input class="timeF" onclick="laydate()" id="start"><br>
                    </p>
                    <p style="padding-left:15px;">   
                          <span class="FT">截止时间</span>
                          <input  class="timeF" onclick="laydate()"  id="end"><br>                 
                    </p>               
                  </div> 
                  <span class="searbtn"></span>
              </form>             
          </div>
	  </div>
    
</template>
<script>
	
</script>
<style>
.ChoseTab .tab-title .searchActive1{
	/*background: url(../images/tab_a.png) no-repeat;*/
	 background: url(../images/tab_n.png) no-repeat;
	background-size:100% 100%;
	color:#fff;
}
.ChoseTab .tab-title li.searchActive2{
	 background: url(../images/tab_a.png) no-repeat;
	 color:#fff;
}


.ChoseTab .search .fl p{margin-bottom: 61px;padding:20px;}
.ChoseTab .search label{
  display:block;height: 24px;line-height: 24px;
  font-size: 18px;padding-left: 30px;
  color: #000;margin-bottom:15px;
  }
.ChoseTab .search input,.ChoseTab .search select{height: 32px;width: 80%;display: block;line-height: 32px;
  margin: 0 auto;}
.ChoseTab .search form .labelarea {background: url(../images/ico_place.png) no-repeat left;} 
.ChoseTab .search form .labelow {background: url(../images/ico_court.png) no-repeat left;} 
.ChoseTab .search form .labelpart {background: url(../images/ico_partment.png) no-repeat left;} 
.ChoseTab .search form .ptime {background: url(../images/ico_clock.png) no-repeat left;display:block;
  padding-left: 36px;font-size: 18px;line-height: 24px;} 
.right .ChoseTab .search div p {padding-bottom: 20px;}
.right .ChoseTab .search div p a{color: #fff;}
.ChoseTab .search .FT{font-size: 16px; margin-left: 22px;}
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
.join{
  width: 18px !important;height: 18px !important;display:inline-block !important;position: relative;
top:3px;}
.FT{display:block;}
.combo {
  position: relative;
  width: 70% !important;
  height: 30px !important;

 }
 .combo input{
  position: absolute;
  left: 0;
  height: 30px;
  width: 88% !important;
 }
 .combo-arrow{
  position: absolute;
  right: 0px;
  width: 12% !important;
 }

</style>
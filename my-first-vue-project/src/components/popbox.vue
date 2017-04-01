<template>
     <div >
        <div id="ZheZhao" style="z-index:1"></div>
        <div class="PopBox PopBox-two"> <!--第二个弹出框 -->
           <form action="#">
                  <div class="fl fir-div" style="height:340px;">
                    <p>
                      <label for="zone" class=" labelarea">地区</label>
                      <input type="text" :value="popMessage.area" class="input-gray area" readonly="readonly"  v-if="isMoreProv">
                      <select class="area" name="zone" v-else v-model="choosedArea" ref="area">
                          <option>高院</option>
                          <option>南京</option>
                          <option>无锡</option>
                          <option>徐州</option>
                          <option >常州</option>
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
                      <input type="text" :value="popMessage.court"  class="input-gray court" readonly="readonly" v-if="isMoreArea">
                      <select class="court" v-else v-model="choosedCourt" ref="court">
                          <option v-for="(crt,index) in popMessage.court">{{ crt.name }}</option>
                      </select>
                    </p>
                     <p>
                      <label for="zone" class="labelpart label-gray">部门</label>
                      <input type="text" :value="popMessage.dept" class="input-gray depart" readonly="readonly" v-if="isMoreDept" >                     
                      <select class="depart" v-else ref="dept" v-model="choosedDept">
                          <option v-for="dept in popMessage.dept">{{ dept.MC }}</option>
                      </select>
                      
                    </p>
                  </div>
                  <div class="fl" style="height:340px;">
                     <p class="time" style="margin:20px 0;">
                        <label class="labeltime" style="margin:0px;">时段</label>
                        <div style="margin:22px 0px 30px;padding-left:15px;">
                          <span class="pfromto" style="1px solid red;diaply:block;padding:20px 0px !important;height:60px;line-height:60px;text-algin:left">起始时间</span>
                          <input  class="timeF" style="width:200px;height:30px;"  type="date" v-model="beginTime"><br>
                        </div>
                        <div style="padding-left:15px;">   
                          <span class="pfromto" style="1px solid red;diaply:block;padding:20px 0px !important;height:60px;line-height:60px;text-align:left">截止时间</span>
                          <input  class="timeF" style="width:200px;height:30px;" type="date" v-model="endTime"><br>                 
                        </div>
                    </p>
                  </div>
                  <div class="btn-double">
                      <!-- 点击连接按钮 页面在右侧出现 -->
                          <p type="button" name="" class="CountStatis" @click="TurnToList()"></p>
                     
                     <p class="back" @click="cancelBtn"></p>
                </div>
              </form>
    </div>
   
     </div>
    
</template>

<script>
import Bus from '../bus.js'
export default {
  data:function(){
    return {
      choosedArea:'高院',
      choosedCourt:'江苏省高级人民法院',
      choosedDept:"党组(正副院长)",
      FJM:'A00',
      allCourt:[],
      beginTime:'',
      endTime:'',
    }
  },
  created:function(){
    this.$http.get('/list/court/api/organization/courts').then((response)=>{
      this.allCourt=response.body.courts;
    },(response)=>{
        console.log('请求失败');
    })
  },
  beforeUpdate:function(){
    
    console.log('changed');
  },
  props:['popMessage'],
  methods:{
     cancelBtn:function(){
      this.$emit('cancelBtn');
     },
      getCourt:function(){
      console.log(this.allCourt);
      var court=this.allCourt;
      var arr=[];
      for(var i=0;i<court;i++){
        if(this.choosedArea===court[i].cityname){
            arr.push({name:court[i].FYMC,FJM:court[i].FJM})
        }
      }
      this.$set(this.popMessage,this.popMessage.court,arr);
    },
    TurnToList:function(){
     
      var area=this.popMessage.area,
          court=this.popMessage.court,
          dept=this.popMessage.dept;
      
      if(this.$refs.area){
        area=this.$refs.area.value;
      }
      if(this.$refs.court){
        court=this.$refs.court.value
      }
       if(this.$refs.dept){
        dept=this.$refs.dept.value
      }
       console.log(area,court,dept)
      this.$emit('cancelBtn');
      // console.log(Bus);
      Bus.$emit('turntolist',area,court,dept,this.beginTime,this.endTime)
      Bus.$emit('getAllCourt',this.allCourt)
      location.hash="#/list";
    }

  },
  computed:{
     
    // depts:function(){
    //   this.$http.get('/list/court/api/organization/depts?FJM='+this.FJM).then((response)=>{
    //     console.log(response)
    //      return response.body.depts;
        
    //   },(response)=>{
    //     console.log(response)
    //   })
    // },
    isMoreProv:function(){
      console.log(this.popMessage)
      if(this.popMessage.area===''||typeof this.popMessage.court=='object'){
        return false;
      }else{
        return true;
      }
    },
    isMoreArea:function(){
      if( this.popMessage.court===''||typeof this.popMessage.court=='object'){
        return false;
      }else{
        return true;
      }
    },
    isMoreDept:function(){
      if(this.popMessage.dept===''||typeof this.popMessage.dept==='object'){
        return false;
      }else{
        return true;
      }
    }
  },
  watch:{
    choosedArea:function(curvalue,oldvalue){
      var arr=[];
      for(var i=0;i<this.allCourt.length;i++){
        if(this.allCourt[i].cityname===curvalue){
          arr.push({name:this.allCourt[i].FYMC,FJM:this.allCourt[i].FJM})
        }
      }
      if(this.popMessage.court!=="所有法院"){this.popMessage.court=arr};
      this.choosedCourt=arr[0]?arr[0].name:'';  
    },
    choosedCourt:function(cur,old){
       var FJM;
       for(var i=0;i<this.allCourt.length;i++){
        if(this.allCourt[i].FYMC===cur){
          FJM=this.allCourt[i].FJM;
          this.$http.get('/list/court/api/organization/depts?FJM='+FJM).then((response)=>{
          // console.log(response.body.depts);
           this.popMessage.dept=response.body.depts
           this.choosedDept=this.popMessage.dept?this.popMessage.dept[0].MC:'';
          },(response)=>{
            console.log('未找到部门');
            this.this.popMessage.dept=[];
          })
        }
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#ZheZhao{
  position: absolute;
  top:0px;
  left:0px;
  width: 100%;
  height: 100%;
  background: #000;
  float: left;
  z-index:2;
  filter:alpha(opacity:30); 
  opacity:0.3;  
  -moz-opacity:0.3;
  -khtml-opacity: 0.3;

}
 .PopBox{
  max-width: 606px;
  max-height: 650px;
  height: 600px;
  width: calc(60%);
  width: -moz-calc(60%);
  width: -webkit-calc(60%); 
  height: calc(70%);
  height: -moz-calc(70%);
  height: -webkit-calc(70%);
  max-height: 492px;
  background:#fff;
  display: block;
  z-index: 3;
  position: absolute;
  left: 50%;
  top:50%;
  margin-left: -300px;
  margin-top: -300px;
  border-radius: 15px;
  
  /*border: 1px solid red;*/
}
 .PopBox form .fl{
  display: inline-block;float:left; 
  max-width: 220px;
   width: 220px;
  /*height: 300px;*/
  height: 350px;
  width: calc((100% - 164px)/2);
  width: -moz-calc((100% - 164px)/2);
  width: -webkit-calc((100% - 164px)/2); 
  margin:30px 20px 0px 20px;
  border:1px solid #4583D3;
  padding:0px 20px;
  height: calc(80%);
  height: -moz-calc(80%);
  height: -webkit-calc(80%); 
 }

 .combo {
  border: 1px solid red;
  width: 100% !important;
 }
 .combo input{
  width: 88% !important;
 }
 .combo-arrow{
  width: 12% !important;
 }
 .pfromto{font-size: 16px;}
 .PopBox div p a{color: #fff;}
 .PopBox form .fl p{
  margin-top: 20px;
 
}
.PopBox  label{display:block;height: 24px;font-size: 18px;
  line-height: 24px;padding-left: 30px;color: #000;margin-bottom:15px;
  text-align:left;}
 .PopBox form input, .PopBox  select{height: 34px;width:100%;line-height: 34px; font-size: 16px; font-family: Microsoft YaHei;padding-left: 5px;}
 .PopBox form .input-gray{background: #EEE;}
 .PopBox form input{
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  padding-left: 5px;
  width: 96%;
}
 .PopBox form .labelarea {background: url(../images/ico_place.png) no-repeat left;
  background-size:24px 24px;} 
 .PopBox form .labelow {background: url(../images/ico_court.png) no-repeat left;} 
 .PopBox form .labelpart {background: url(../images/ico_partment.png) no-repeat left;} 
 .PopBox form .labeltime {background: url(../images/ico_clock.png) no-repeat left;} 
 .PopBox form .label-gray {color: #ccc;} 

  .PopBox-first  form .labelow {background: url(../images/ico_court_grey.png) no-repeat left;} 
  .PopBox-first  form .labelpart {background: url(../images/ico_partment_grey.png) no-repeat left;} 

 .PopBox-two form .labelpart {background: url(../images/ico_partment_grey.png) no-repeat left;} 
 .PopBox-three form .labelpart {background: url(../images/ico_partment_grey.png) no-repeat left;} 
 .PopBox-four form .labelpart {background: url(../images/ico_partment_grey.png) no-repeat left;} 
 .PopBox-five form .labelpart {background: url(../images/ico_partment_grey.png) no-repeat left;} 




/*两个按钮*/
.btn-double{
  position: absolute;
  bottom: 20px;
  height: 40px;
  width: 260px;
  left: 50%;
  margin-left: -130px;

}
 .CountStatis{
  width: 90px;
  height: 30px;
  /*position: absolute;bottom: 10px;*/
  position: absolute;
  left: 0;
  background: url(../images/btn_statistics.png) no-repeat center;
  background-size: 100% 100%;

}
 .back{
  height: 30px;
  /*position: absolute;bottom: 10px;*/
  width: 90px;
  position: absolute;
  right: 0px;
  cursor: pointer;
  background: url(../images/btn_cancel.png) no-repeat;
 background-size: 100% 100%;
}
 .backactive{
   background: url(../images/btn_cancel_a.png) no-repeat;
 background-size: 100% 100%;
}
</style>
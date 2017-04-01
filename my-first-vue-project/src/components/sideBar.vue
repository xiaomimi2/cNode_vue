<template>
  <div>
   <dl>
      <h3 class="count-h3"><img src="../images/ico_statistics.png">
        <a href="index1.html" target="_blank">会议统计</a>
      </h3>
      <dt @click="prov=!prov"><a href="javascript:void(0);">统计（全省)</a></dt>      
      <transition name="fade">
        <dd v-show="prov">
          <ul>
             <li v-for="item in allProvince" @click="showPopBox(item)" ><a href="javascript:;">{{ item.name }}</a></li>        
          </ul>
        </dd>
      </transition>
      <dt @click="area=!area"><a href="javascript:void(0);">统计（按地区）</a></dt>
      <transition name="fade">
        <dd v-show="area">
           <ul>
              <li><a href="javascript:void(0);" id="alllaw" @click="showPopBox(allArea)">{{allArea.name}}</a></li>
           </ul>
       </dd>
     </transition>
     <dt @click="dept=!dept"><a href="javascript:void(0);">统计（某个法院)</a></dt>
     <transition name="fade">
        <dd v-show="dept">
           <ul>
              <li v-for="dept in allDept " @click="showPopBox(dept)"><a href="javascript:;" >{{ dept.name }}</a></li>
           </ul>
        </dd>
    </transition>
    </dl>
     <pop-box class="mypopbox" :style="{width:width+'px',height:height+'px'}" v-show="showPop" :popMessage="popItemMessage" v-on:cancelBtn="hidePopbox"></pop-box> 
</div>
</template>

<script>
  import PopBox from './popbox.vue'
  export default {
    data:function(){
      return {
        prov:true,
        area:true,
        dept:true,
        showPop:false,
        popItemMessage:'',
        baseUrl:'http://58.211.191.41:8484',
        initialDept:[],
        allProvince:[
                      {name:'所有地区',area:'全省'},
                      {name:'所有法院',area:'全省',court:'所有法院'},
                      {name:'中级法院',area:'全省',court:'所有中级法院'},
                      {name:'基层法院',area:'全省',court:'所有基层法院'}
                    ],
        allArea:{name:'所有法院',area:'',court:'所有法院',dept:''},
        allDept:[
                  {name:'所有部门',area:[],court:[{name:'江苏省高级人民法院',FJM:'A00'}],dept:'所有部门'},
                  {name:'某个部门',area:[],court:[{name:'江苏省高级人民法院',FJM:'A00'}],dept:[]}
               ]
      }
    },
    created:function(){
       this.$http.get('/list/court/api/organization/depts?FJM=A00').then((response)=>{
            this.initialDept=response.body.depts;
        },(response)=>{
             console.log('请求失败');
        })
    },
    props:['parentMsg'],
    components:{ PopBox },
    computed:{
      width:function(){
        return document.body.clientWidth;
      },
      height:function(){
        return document.body.clientHeight||1000;
      },
      // initialCourt:function(){
      //   return ['江苏省高级人民法院'];
      // },
      // initialDepts:function(){
      //   this.$http.get('/list/court/api/organization/depts?FJM=A00').then((response)=>{
      //       return response.body.depts;
      //   },(response)=>{
      //        console.log('请求失败');
      //   })
      // }
    },
    methods:{
     showPopBox:function(item){
        this.showPop=true;
       if(typeof item.dept==='object'){

            item.dept=this.initialDept;
            this.popItemMessage=item;  
        }else{
           this.popItemMessage=item;  
           console.log(item);
        } 
     },
     hidePopbox:function(){
       this.showPop=false;
     }

  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active,.fade-leave-active{
    transition:all 0.5s;
  }
  .fade-enter,.fade-leave-active{

    opacity:0;
  }
  .mypopbox{
    position:absolute;
    z-index:2;
    top:0;
    left:0;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

/*li {
  display: inline-block;
  margin: 0 10px;
}
*/
a {
  color: #42b983;
  text-decoration: none;
}
h3, dt a, dd li a{
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  position: relative;
  left:0%;
  padding-left: 30px;
  cursor:pointer;
}

/* h3{
  height: 32px;
  font-size: 18px;
  line-height: 32px;
  color: #fff;
  font-weight:500;
  
  margin: 15px 0px;
  padding:0px !important;
  color: red;
 
}
*/

dt a{
  background: url(../images/angle_down.png) no-repeat left !important;
  background-size: 100% 100%;
}
dt .rig{
 background: url(../images/angle_right.png) no-repeat left !important;
 background-size: 100% 100%;
}

h3 a{color: #fff;}
.count-h3 img{
  width:18px ;
  height:18px;
  display: inline-block;
  float: left;
  padding-right:17px;
}
.count-h3 a{
  float:left;
}

dl dd ul li a{
  color: #fff;
  float:left;
}  


dt{position: relative;display: block;
 font-size: 18px;height:32px; line-height:32px;
 /*text-align:center;*/
 /*padding-left: 0.4rem;*/
}
dt a{
  background: #ccc;
  display: inline-block;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  position: relative;  
  color: #FFF; text-decoration:none; 
}   
dd {padding-bottom: 13px;padding-top: 10px;}
dd li{ line-height:30px;height: 30px;font-size: 18px;}
.active-li{width:99.5%; background: #4583D3;}
</style>
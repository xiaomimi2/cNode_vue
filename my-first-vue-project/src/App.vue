<template>
  <div id="app">
    <my-header></my-header>
    <div id="content">
        <div class="left" id="left"> 
            <my-sidebar></my-sidebar>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
    </div>
    
  </div>
</template>

<script>
import Store from './store'
import MyHeader from './components/header.vue'
import MySidebar from './components/sideBar.vue'
console.log(Store)
export default {
  data:function(){
    return {
     
  }
},
  components:{ MyHeader,MySidebar },
  methods:{
      
      }
}


</script>

<style>
body,p,ul,li,div,dt,dd,dl{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Microsoft yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;*/
  color: #2c3e50;
 /* margin-top: 60px;*/
}
#content {
width: 100%;
height:calc(100vh - 100px);
height:-moz-calc(100vh - 100px);
height:-webkit-calc(100vh - 100px);
min-height: 700px;
top:100px;
}
#content .left{
  z-index: -100;
  width: 15%;
  width: 240px;
  height: 100%;
  min-height: 800px;
  /*min-height: 100vh;*/
  float: left;
  background:url(images/bg_left.png) no-repeat center;
  background-size: 100% 100%;
}
#content .right{
    position: relative;
    width: auto;
    min-width: calc(100% - 300px);
    min-width: -moz-calc(100% - 300px);
    min-width: -webkit-calc(100% - 300px); 
    max-width: calc(100% - 200px);
    max-width: -moz-calc(100% - 200px);
    max-width: -webkit-calc(100% - 200px); 
    height: 100%;
    float: left;
    background-color: #ccc;
 }
</style>

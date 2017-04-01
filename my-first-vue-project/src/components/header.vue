<template>
  <div class="header">
    <div class="div-pic" >
      <img src="../images/ico_logo.png" class="pic-left fl" alt="">
      <img src="../images/title_02.png" class="pic-right fl pa" alt="">
    </div>
    <div class="home-out" >
      <span class="out"><a href="login.html">退&nbsp;出</a></span>
      <span class="line"></span>
      <span class="home"><a href="index1.html" target="_self">首&nbsp;页</a></span>
    </div>      
  </div>
 
</template>

<script>
export default {
  data:function(){
    return {
      msg: 'Welcome from component A'
    }
  },
  props:['parentMsg'],
  methods:{
    onClickMe:function(){
      // console.log(this.parentMsg)
      this.$dispatch('children-tell-me-something',this.msg)
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
body{
  
}
.header{
  background:url(../images/bg_top.png) no-repeat center;
 background-size: 100% 100%;
  width:auto;
  min-width: 1200px;
  height: 100px;
  max-height:100px;
}
.header p{
  /*padding-left: 80px;*/
  height: 100%;
  width: 100%;
  min-width: 1000px;
}
.header  span{display: inline-block;}
.header .div-pic{
  width:810px;
  height:100px;float:left;
  padding-left:30px;overflow:hidden;
  /*border-right: 1px solid red;*/

}
.header .pic-left,.header .pic-right{display: inline-block; height: 100px;}
.header .pic-left{
  float: left;
  width:64px;
  height: 70px;
  /*border:1px solid red;*/
  padding-top:20px;
 /* background: url(../images/ico_logo.png) no-repeat ;
  background-position: center;
*/
}
.header .pic-right{
  float: left;
  height: 68px;
  width:690px;
  padding-left: 30px;
 
  margin-top: 30px;
  /*border: 1px solid red;*/
}
.header .home-out{margin-right: 5%;}
.header .home-out .line{width: 2px;height: 26px;background-color: #fff;float: right;margin-right: 30px;  margin-top: 35px;}
.header .home-out .out,.header .home-out .home{
  width: 80px;
  height: 25px;
  /*border: 1px solid red;*/
  float: right;
   text-align: right;
   margin-right: 30px;
   margin-top: 2%;

}
.header .home-out .out a,.header .home-out .home a{
  /*font-size: 1.8rem;*/
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  line-height: 25px;

}
.header .home-out .out {
  background: url(../images/ico_logout.png) no-repeat left;
}
.header .home-out .home{
    background: url(../images/ico_home.png) no-repeat left;
    
}
</style>
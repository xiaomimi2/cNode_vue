<template>
	<div>
		<img src="../assets/images/index.png" height="700" width="1000" alt="" class="index">
	</div>
</template>
<script>
  
  require('../assets/scss/iconfont/iconfont.css');
  require('../assets/scss/github-markdown.css');
  require('../assets/scss/CV.scss'); 
  
  export default {
    mounted () {
      setTimeout(() => {
        this.$router.push({
          name: 'list'
        })
        console.log('index')
      }, 2000)
    }
}
</script>
<style lang='scss'>
  .index{
    width:100%;
    background-color: #fff;
    margin-top:40%;
  }
  
</style>
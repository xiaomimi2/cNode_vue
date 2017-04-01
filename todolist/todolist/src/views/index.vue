<template>
	<div>
		<img src="../assets/images/index.png" height="700" width="1000" alt="" class="index">
	</div>

</template>

<script>
  export default {
    mounted () {
      setTimeout(() => {
        this.$router.push({
          name: 'list'
        })
      }, 2000)
    }
}
</script>
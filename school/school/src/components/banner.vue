<template>
    <div class="banner">
        <div class="imgbox">
            <div id="infiniteScroll">
              <!-- Indicators -->
                <ol class="indicators">
                    <li  @click="mannualSlide" :class="{active: index===0}"></li>
                    <li  @click="mannualSlide" :class="{active: index===1}"></li>
                </ol>

                  <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox" ref="listbox">
                    <div class="item">
                        <img src="../assets/image/1.png" alt="banner1">
                    </div>
                    <div class="item">
                        <img src="../assets/image/banner2.png" alt="..." >
                    </div>
                </div>
            </div>
        </div> 
    </div>     
</template>
<script>
    export default {
        data () {
            return {
                index: 0,
                total: 2,
                timer: null
            }
        },
        mounted () {
            this.autoSlide()
        },
        methods: {
            switchSlide () {
                this.index++
                if (this.$refs.listbox) {
                    var slidemover = this.$refs.listbox
                    if (this.index >= this.total) {
                        this.index = 0
                    }
                    slidemover.style.transform = 'translate(' + (-this.index * 50) + '%, 0)'
                }
            },
            autoSlide () {
                var that = this
                this.timer = setInterval(function () {
                    that.switchSlide()
                }, 3000)
            },
            mannualSlide () {
                var that = this
                if (this.timer) {
                    clearInterval(that.timer)
                }
                this.switchSlide()
            }
        }

    }
</script>
<style lang="scss">
    .banner{
        width:100%;
        .imgbox{
            width:100%;
            overflow:hidden;
            position:relative;
            #infiniteScroll{
                .indicators{
                    list-style:none;
                    position:absolute;
                    bottom:30px;
                    left:50%;
                    transform:translate(-50%,0);
                    z-index:1;
                    li{
                        display:inline-block;
                        width:10px;
                        height:10px;
                        border-radius:5px;
                        background-color:rgba(255,255,255,.7);
                        &.active{
                            background-color:rgba(0,0,0,.5);
                        }
                    }
                }
            }
            .carousel-inner{
                width:200%;
                font-size:0px;
                transition:transform 1s ease;
                .item{
                   transition:left 1s ease;
                   display:inline-block;
                   font-size:0px;
                   width:50%;
                }
            }
        }
    }
</style>

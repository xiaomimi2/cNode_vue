<template>
    <div class="header">
        <router-link class="logo" to="/">云视网络教研管理平台</router-link>
        <div class="loginer">
            <router-link to="/login">注销</router-link>
            <a href="">金鑫</a>
            <span class="avatar"><img src="../assets/image/avatar1.png" height="79" width="88" alt=""></span>
        </div>
        <ul class="items">
          <li><router-link to="/mycourse">我的课堂</router-link><span class="babel">1</span></li>  
          <li><router-link to="/history">历史课堂</router-link><span class="babel">1</span></li>  
        </ul>
    </div>
</template>
<style lang="scss">
    .header{
        background-color: #fff;
        line-height:30px;
        height:30px;
        margin:40px auto;
        width:1200px;
        margin:auto;
        .logo{
            float:left;
            display: block;
            font-size : 26px;
            color:#333;
            background: url('../assets/image/yunshi-logo.png') 0 3px no-repeat;
            background-size:135px 32px;
            padding-left:152px;
            font-weight: bold;
        }
        .loginer{
            float:right;
            font-size:0px;
            router-link,a{
                display:inline-block;
                margin-right:9px;
                font-size:14px;
            }
            span.avatar{
                width:30px;
                height:30px;
                display: inline-block;
                border-radius:50%;
                overflow: hidden;
                vertical-align:middle;
                margin-top:-12px;
            }
            img{
                max-width:100%;
            }
        }
        .items {
            float:right;
            font-size:14px;
            font-weight:bold;
            padding:0;
            margin:0;
            li{
                list-style:none;
                display:inline-block;
                margin-right:28px;
                position: relative;
                router-link,a{
                    display: inline-block;
                    width:100%;
                    height:100%;
                    &:hover{
                        color: #2389cb;
                    }
                }
                .babel{
                    position: absolute;
                    display: inline-block;
                    width:18px;
                    height:18px;
                    border-radius: 50%;
                    line-height: 18px;
                    text-align: center;
                    background-color: #2389cb;
                    color:#fff;
                }
            }
        }

    }
</style>

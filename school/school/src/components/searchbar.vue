<template>
    <div class="wrap">
        <div class="searchBar">
            <div class="select">
                <div class="choosed">学校<i class="icon iconfont icon-triangle-copy"></i></div>
            </div>  
            <div class="control">
                <input type="text" placeholder="搜素学校">
            </div>
            <span class="btn-search icon iconfont icon-sousuo-sousuo"></span>
        </div>
    </div>
</template>
<style lang="scss">
    .wrap{
        width:1200px;
        margin:auto;
    }
    .searchBar{
        width:595px;
        height:38px;
        border:1px solid #2389cb;
        // border-bottom:1px solid #2389cb;
        color:#666;
        margin:auto;
        margin-bottom:13px;
        font-size:0px;
        .select{
            float:left;
            height:20px;
            width:40px;
            margin:9px 0;
            padding-left:11px;
            padding-right:10px;
            border-right: 2px solid #ccc;
            position: relative;
            line-height: 20px;
            font-size:14px;
            i.icon{
                font-size:12px;
            }
        }
        .control{
            float:left;
            height:20px;
            margin:9px 0;
            line-height: 20px;
            width:450px;
            input{
                border:none;
                position: relative;
                top:-1px;
                -webkit-appearance:none;
                appearance: none;
                padding-left:14px;
                width:436px;
                outline:none;
                font-size:14px;
                line-height: 20px;
            }
        }
        .btn,.btn-search{
            float:right;
            padding:9px 0;
            height:20px;
            background-color: #2389cb;
            color:#fff;
            width:68px;
            text-align: center;
            line-height: 20px;
            box-sizing:content-box;
        }
    }
</style>

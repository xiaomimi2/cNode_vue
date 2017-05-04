<template>
        <div class="wrap">
            <h1 v-if="subject">{{type}}<i class="icon iconfont icon-huanyipi">&nbsp;换一批</i></h1>
            <h1 v-if="!subject"><span>{{type}}</span> 
                <ul class="subject" >
                    <li v-for="item in subjects">{{item.class}}</li>
                </ul>
            </h1>
            <div class="content">
                <div class="coursevideo" v-if="!subject">
                    <img :src="courses.imgurl" alt="">
                </div>
                    <router-link class="course" v-for="child in newcourse" :to="getAdd(child.courseId)" key="child.courseId">
                        <div class="header">
                            <img :src="child.imgurl" alt="">
                        </div>
                        <div class="body">
                            <p>{{child.school}}</p>
                            <p><span class="subject">{{child.subject}}</span><span class="teacher">{{child.teacher}}</span></p>
                        </div>
                    </router-link>
                </div>
        </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        props: {
            subject: {
                type: Boolean,
                required: true
            },
            subjects: Array,
            type: String,
            courses: {
                type: [Object, Array],
                required: true
            }
        },
        computed: {
            newcourse () {
                return this.courses.data
                    ? this.courses.data
                    : this.courses
            }
        },
        methods: {
            getAdd: function (id) {
                return '/course/' + id
            }
        }
    }
</script>
<style lang="scss">
    h1{
        font-size:22px;
        color:#333;
        height:54px;
        line-height: 54px;
        margin-left:7px;
        margin-bottom:20px;
        border-bottom:1px solid #e0e0e0;
        position: relative;
        i{
            font-size:12px;
            float:right;
            font-weight: normal;
            cursor:pointer;
        }
        .subject{
            position: absolute;
            left:264px;
            bottom:0;
            font-size:12px;
            li{
                margin-right:58px;
                &:hover{
                    color:#188eee;
                    cursor:pointer;
                }
            }
        }
    }
</style>

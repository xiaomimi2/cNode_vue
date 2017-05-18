<template>
    <div class="container pr">
     <img src="../assets/image/downloadbg.jpg" alt="" id="container-pic">
        <div class="pic-title">
            云视网络教研管理平台
        </div>

        <div class="login-Pop">
         <div class="loginPop">
            <p>
                <label for="username">用户：</label>
                <select id="videouser" v-model="finialUser">
                  <option v-for="user in userList"  :value="user.realname" v-text="user.realname"></option>
                </select>
            </p>
            <p class="p-btn">
                <a id="enter" @click="userLogin()">进入测试会议室</a>
            </p>
         </div>
            
        </div>
        <div class="left fl pa" style="position:absolute">
            <div class="left-con">
                <div class="left-title">
                    <img src="../assets/image/pic_ys_title.png" id="left-pic" alt="">
                </div>
                <p class="p-where">地址：苏州工业园区东平街270号澳洋顺昌科技大厦2D</p>
                <p>电话：0512-65925680</p>
                <p>网址：www.yunshisz.com</p>
            </div>
        </div>
        <p id="text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;苏州云视是一家在视频通讯领域为客户提供全面产品和解决方案的高新技术企业。公司自主研发的高清视频会议系统，以卓越的品质，便捷的使用以及较低的成本，为广大客户提供高清视频协作所需的一切功能。
       </p>
    </div>
</template>
<script>
    require('../assets/sass/reset.css')
    require('../assets/sass/index1.scss')
    import util from '../libs/util.js'
    export default {
        data () {
            return {
                userList: [
                            {videouser: 'jyt004', videopwd: 'jyt004', roomid: '67', realname: '王老师', img: 'image/user1.jpg'},
                            {videouser: 'jyt002', videopwd: 'jyt002', roomid: '67', realname: '教研室', img: 'image/user2.jpg'},
                            {videouser: 'jyt003', videopwd: 'jyt003', roomid: '67', realname: '张老师', img: 'image/user3.jpg'},
                            {videouser: 'jyt001', videopwd: 'jyt001', roomid: '67', realname: '课堂', img: 'image/user4.jpg'}
                ],
                finialUser: null
            }
        },
        methods: {
            userLogin () {
                var index = util.getIndexOfArray('realname', this.finialUser, this.userList)
                util.storageToLocal.saveToLocal('user', this.userList[index])
                // this.$router.push({name: 'Home'})
            }
        }
    }
</script>


<template>
   
   
</template>
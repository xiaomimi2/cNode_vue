<template>
    <div>
        <my-header></my-header>
        <search-bar></search-bar>
        <my-banner></my-banner>
        <my-course :subject="simple" :subjects="subjects" type="最新点播" class="clearfix" :courses="canReplaceDataHot"></my-course>
       <!--  <my-course :subject="simple" :subjects="subjects" type="热门点播" class="clearfix"></my-course>
        <my-course :subject="!simple" :subjects="subjects" type="小学课堂" class="clearfix"></my-course>
        <my-course :subject="!simple" :subjects="subjects" type="初中课堂" class="clearfix"></my-course> -->
        <my-course :subject="!simple" :subjects="subjects" type="高中课堂" class="clearfix" :courses="canReplaceDataSchoolHigh"></my-course>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import myHeader from '../components/header.vue'
    import searchBar from '../components/searchbar.vue'
    import myCourse from '../components/fiveColumn.vue'
    import myBanner from '../components/banner.vue'
    import myFooter from '../components/footer.vue'
    require('../assets/sass/all.scss')
    export default {
        data () {
            return {
                simple: true,
                subjects: [{class: '语文'}, {class: '数学'}, {class: '英语'}, {class: '美术'}, {class: '音乐'}],
                canReplaceDataHot: [
                    {imgurl: '../static/image/poster-rec1.jpg', school: '北京市第二实验小学二年级', subject: '语文', teacher: 'z张老师', courseId: '1'},
                    {imgurl: '../static/image/poster-rec2.jpg', school: '上海市徐汇区逸夫小学', subject: '英语', teacher: '李老师', courseId: '2'},
                    {imgurl: '../static/image/poster-rec3.jpg', school: '广东省深圳市福田区小学五年级', subject: '思品', teacher: '郭老师', courseId: '3'},
                    {imgurl: '../static/image/poster-rec4.jpg', school: '上海市新世纪小学', subject: '综合', teacher: '小金', courseId: '4'},
                    {imgurl: '../static/image/poster-rec5.jpg', school: '上海市元培学校', subject: '综合', teacher: '封老师', courseId: '5'}],
                canReplaceDataSchoolHigh: {
                    imgurl: '../static/image/catgory.jpg',
                    data: [
                        {imgurl: '../static/image/poster-hot1.jpg', school: '默默学校五年级', subject: '语文', teacher: 'z张老师', courseId: '1'},
                        {imgurl: '../static/image/poster-hot2.jpg', school: '上海市徐汇区逸夫小学', subject: '英语', teacher: '李老师', courseId: '2'},
                        {imgurl: '../static/image/poster-hot3.jpg', school: '广东省深圳市福田区小学五年级', subject: '思品', teacher: '郭老师', courseId: '3'},
                        {imgurl: '../static/image/poster-hot4.jpg', school: '上海市新世纪小学', subject: '综合', teacher: '小金', courseId: '4'},
                        {imgurl: '../static/image/poster-hot5.jpg', school: '上海市元培学校', subject: '综合', teacher: '封老师', courseId: '5'},
                        {imgurl: '../static/image/poster-hot1.jpg', school: '默默学校五年级', subject: '语文', teacher: 'z张老师', courseId: '1'},
                        {imgurl: '../static/image/poster-hot2.jpg', school: '上海市徐汇区逸夫小学', subject: '英语', teacher: '李老师', courseId: '2'},
                        {imgurl: '../static/image/poster-hot3.jpg', school: '广东省深圳市福田区小学五年级', subject: '思品', teacher: '郭老师', courseId: '3'}
                    ]}
            }
        },
        components: {
            myHeader,
            searchBar,
            myCourse,
            myBanner,
            myFooter
        }
    }
</script>

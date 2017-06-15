<template>
    <div>
        <ProgressBar v-show="this.$store.getters.UI.showProgress"></ProgressBar>
        <IndexMenu v-show="this.$store.getters.UI.showIndexMenu"></IndexMenu>
        <TopBar v-show="this.$store.getters.UI.showTopBar"></TopBar>
        <BottomBar v-show="this.$store.getters.UI.showBottomBar"></BottomBar>
        <Paper v-show="this.$store.getters.UI.showPaper"></Paper>
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar.vue';
    import IndexMenu from './IndexMenu.vue';
    import TopBar from './TopBar.vue';
    import BottomBar from './BottomBar.vue';
    import Paper from './Paper.vue';

    export default {
        name: 'App',
        mounted: function () {
            let loadingMask = document.querySelector('.loading-mask');
            loadingMask.style.display = 'none';
            
            // 已登录状态
            
            // 服务器生成的静态资源：1.第一章内容；2.图书目录（包括是否可用）
            // 首先请求书签

            // 根据书签请求章节内容
            // 抹除静态资源，渲染请求的章节内容

            // 定位到书签处

        },
        components: {
            ProgressBar,
            IndexMenu,
            TopBar,
            BottomBar,
            Paper
        }
    }
</script>

<style lang='less'>
    @import "~includes/base.less";
    @import "~includes/variables.less";
    @import "~includes/header.less";
    @import "~includes/stars.less";
    @import "~includes/custom_scrollbar.less";
</style>
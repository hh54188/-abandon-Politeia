<template>
    <div>
        <ProgressBar v-show="this.$store.getters.UI.showProgress"></ProgressBar>
        <IndexMenu v-show="this.$store.getters.UI.showIndexMenu"></IndexMenu>
        <TopBar v-show="this.$store.getters.UI.showTopBar"></TopBar>
        <BottomBar v-show="this.$store.getters.UI.showBottomBar"></BottomBar>
        <Paper ref="paper" v-show="this.$store.getters.UI.showPaper"></Paper>
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
            // 服务器生成的静态资源：1.第一章内容；2.图书目录（包括是否可用）
            // 1. 未登录状态的话就不进行以下步骤，直接使用后端渲染的第一章内容
            // 2. 已登录状态：  
            this.$store.dispatch('requestHistory').then(() => {
                return this.$store.dispatch('requestContent');
            }).then(() => {
                
                // 移除加载遮罩
                let loadingMask = document.querySelector('.loading-mask');
                loadingMask.style.display = 'none';

                // 初始化手势操作
                let swipeGesture = new SwipeGesture({
                    element: document.querySelector('body'),
                    target: this.$refs.paper.$el,
                    disableTurnPrev: true
                });

                swipeGesture.onNextPageEvent(() => {
                    this.$store.dispatch('turnNextPage');
                });

                swipeGesture.onPrevPageEvent(() => {
                    this.$store.dispatch('turnPrevPage');
                });
            })

            


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
<template>
    <div>
        <Paper ref="paper" v-show="this.$store.getters.UI.showPaper"></Paper>
        <IndexMenu v-show="this.$store.getters.UI.showIndexMenu"></IndexMenu>
        <transition name="fade">
            <TopBar v-show="this.$store.getters.UI.showTopBar"></TopBar>
        </transition>
        <transition name="fade">
            <BottomBar v-show="this.$store.getters.UI.showBottomBar"></BottomBar>
        </transition>
        <transition name="fade">
            <ProgressBar v-show="this.$store.getters.UI.showProgressBar"></ProgressBar>
        </transition>
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
            // 绑定通用事件
            let body = document.querySelector('body');
            body.addEventListener('click', () => {
                return;
                // 如果“顶栏”和“低栏”同时显示的话，则进行隐藏并显示进度栏
                if (this.$store.getters.UI.showTopBar && this.$store.getters.UI.showBottomBar) {
                    this.$store.dispatch('updateViewVisible', {
                        viewName: 'TopBar',
                        visible: false 
                    });
                    this.$store.dispatch('updateViewVisible', {
                        viewName: 'BottomBar',
                        visible: false
                    });
                    this.$store.dispatch('updateViewVisible', {
                        viewName: 'ProgressBar',
                        visible: true
                    });
                // 如果“顶栏”和“低栏”同时没有显示的话，则同时显示，并且隐藏进度栏
                } else if (!this.$store.getters.UI.showTopBar && !this.$store.getters.UI.showBottomBar) {
                    this.$store.dispatch('updateViewVisible', {
                        viewName: 'TopBar',
                        visible: true 
                    });
                    this.$store.dispatch('updateViewVisible', {
                        viewName: 'BottomBar',
                        visible: true
                    });
                    this.$store.dispatch('updateViewVisible', {
                        viewName: 'ProgressBar',
                        visible: false
                    });
                }
            });


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

                // 翻下一页事件
                swipeGesture.onNextPageEvent(() => {
                    this.$store.dispatch('turnNextPage');
                    // 如果往下翻了一页，那么肯定就能往前翻页了
                    swipeGesture.enableTurnPrevPage();
                    // 如果当前页数是最后一页，则禁止往后翻页
                    if (this.$store.getters.data.currentPage === this.$store.getters.data.totalPage) {
                        swipeGesture.disableTurnNextPage();                        
                    }
                    // 记录阅读进度
                    this.$store.dispatch('requestProgress');
                });

                // 翻前一页事件
                swipeGesture.onPrevPageEvent(() => {
                    this.$store.dispatch('turnPrevPage');
                    // 如果往前翻阅了一页，那么肯定就能往后翻页了
                    swipeGesture.enableTurnNextPage();
                    // 如果当前页数是第一页，则禁止向前翻页
                    if (this.$store.getters.data.currentPage === 1) {
                        swipeGesture.disableTurnPrevPage();                                                
                    }                    
                    // 记录阅读进度
                    this.$store.dispatch('requestProgress');                    
                });

                // 记录每一个段落的位置
                let contentElements = Array.prototype.slice.call(this.$refs.paper.$el.querySelectorAll(':scope > *'));
                let element2PageMap = new Map();
                let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                
                // 需要延迟一段时间才能正确计算元素的偏移，没有道理
                // 算是 hack 吧
                setTimeout(() => {
                    contentElements.forEach((element, index) => {
                        let pageNum = Math.floor(element.offsetLeft / viewportWidth) + 1;
                        let id = element.id;
                        element2PageMap.set(id, pageNum);
                        if (index === contentElements.length - 1) {
                            this.$store.dispatch('updateTotalPage', pageNum);
                        }
                    });
                }, 1000 * 1);


                // 定位到书签处
            })
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

    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease-out;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-leave-to {
        opacity: 0;
    }
    
</style>
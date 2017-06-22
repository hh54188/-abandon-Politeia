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
            let loadingMask = document.querySelector('.loading-mask');
            loadingMask.style.display = 'none';

            // 服务器生成的静态资源：1.第一章内容；2.图书目录（包括是否可用）
            // 1. 未登录状态的话就不进行以下步骤，直接使用后端渲染的第一章内容
            // 2. 已登录状态：  

            // 首先请求用户的阅读历史
            fetch(new Request('/api/ebook/read_history_by_book', {
                'method': 'GET',
                'headers': new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })).then(function (response) {
                return response.json();
            }).then(function (result) {
                return new Promise(function (resolve, reject) {
                    // 根据章节信息请求章节内容
                    if (!result || !result.code || result.code !== 200) {
                        reject(result);
                        return;
                    }

                    // 拿到用户的阅读历史记录，包括：
                    // 1. 章节信息
                    // 2. 段落信息
                    let data = result.data;
                    resolve(data);
                });
            }).then(function resolve(data) {
                // 根据用户的阅读历史，请求章节内容
                fetch(new Request('/api/ebook/content', {
                    'method': 'GET',
                    'headers': new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded'                    
                    })
                })).then(function (response) {
                    return response.json();
                }).then(function (result) {
                    if (!result || !result.code || result.code !== 200) {
                        return;
                    }
                    let data = result.data;
                    let content = data.content;
                    // 抹除静态资源，渲染当前请求的章节内容
                    this.$refs.paper.$el.innerHTML = content;
                    // 计算每一个段落的 offset
                    // 定位到段落 ID 处

                    // 添加交互功能

                }.bind(this));
            }.bind(this), function reject() {

            });
            

            


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
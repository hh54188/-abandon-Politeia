<template>
    <div>
        <ProgressBar></ProgressBar>
        <IndexMenu></IndexMenu>
        <TopBar></TopBar>
        <BottomBar></BottomBar>
        <Paper></Paper>
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
    @import "~includes/load_button.less";
    @import "~includes/stars.less";
    @import "~includes/custom_scrollbar.less";
</style>
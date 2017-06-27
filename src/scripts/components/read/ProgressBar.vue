<template>
    <div class="progress-bar">
        <div class="progress-bar__fill" v-bind:style="{width: progress}"></div>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        computed: {
            progress () {
                return parseInt(this.$store.getters.data.currentPage /  this.$store.getters.data.totalPage * 100, 10)  + '%';
            } 
        }
    }
</script>

<style lang="less">
    @import "~includes/variables.less";

    .progress-bar {

        width: 100%;
        height: 5px;
        background: transparent;

        position: fixed;
        left: 0;
        bottom: 0;

        z-index: 3;

        &__fill {
            background: @commentColor;
            position: absolute;
            left: 0;
            height: 100%;
        }
    }
</style>
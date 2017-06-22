<template>
    <div class="progress-bar">
        <div class="progress-bar__fill" style="width:10%;"></div>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar'
    }
</script>

<style lang="less">
    @import "~includes/variables.less";

    .progress-bar {
        // display: none;

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
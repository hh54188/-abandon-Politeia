<template>
<div class="paper"></div>
</template>

<script>
export default {
    name: 'Paper'
}
</script>

<style lang="less">
@import "~includes/variables.less";

.paper {
    position: fixed;
    top: 0;
    left: 0;

    font-size: @normalFontSize;

    width: 100vw;
    height: 100vh;

    columns: auto 100vw;
    column-rule: 1px solid #eeeeee;
    column-gap: 0;

    box-sizing: border-box;

    z-index: 1;

    .image img {
        width: 100%;
    }
}
</style>
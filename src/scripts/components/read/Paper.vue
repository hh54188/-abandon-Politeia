<template>
<div class="paper">
    <div class="paper_content"></div>
</div>
</template>

<script>
export default {
    name: 'Paper'
}
</script>

<style lang="less">
.paper {
    display: none;

    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 1;
 
    &__content {
        // columns: auto 100vw;

        // width: 100%;
        // height: 100%;

        // position: absolute;
        // left: 0;
        // top: 0; 
    }
}
</style>
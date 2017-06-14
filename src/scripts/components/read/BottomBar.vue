<template>
    <div class="bottom-bar">
        <ul class="bottom-bar__btn-list">
            <li class="bottom-bar__btn-list__btn">
                <i class="bottom-bar__btn-list__btn__icon icon-menu"></i>
                <span class="bottom-bar__btn-list__btn__text">目录</span>
            </li>
            <li class="bottom-bar__btn-list__btn">
                <i class="bottom-bar__btn-list__btn__icon icon-font-size"></i>
                <span class="bottom-bar__btn-list__btn__text">字体</span>            
            </li>
            <li class="bottom-bar__btn-list__btn">
                <i class="bottom-bar__btn-list__btn__icon icon-sun"></i>
                <span class="bottom-bar__btn-list__btn__text">夜间</span>               
            </li>
            <li class="bottom-bar__btn-list__btn">
                <i class="bottom-bar__btn-list__btn__icon icon-bubble"></i>
                <span class="bottom-bar__btn-list__btn__text">评论</span>              
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name: 'BottomBar'
}
</script>

<style lang="less">

@import "~includes/variables.less";

.bottom-bar {
    // display: none;

    width: 100%;
    border-top: 1px solid @borderColor;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

    z-index: 2;

    position: fixed;
    left: 0;
    bottom: 0;

    background: #ffffff;

    &__btn-list {
        width: 100%;
        height: 100%;
        text-align: center;

        padding: 0.8rem 2rem;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;

        &__btn {
            display: inline-block;
            color: @subTextColor;

            &__icon {
                display: block;
                font-size: @iconFontSize;
                margin: 0 0 0.3rem;
            }
            &__text {
                font-size: @normalFontSize;
                text-align: center;
            }
        }
    }
}
</style>
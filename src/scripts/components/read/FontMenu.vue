<template>
    <div class="font-menu">
        <ul class="font-menu__list">
            <li class="font-menu__list__item font-menu__list__item--select ripple">
                <span>普通</span>
            </li>
            <li class="font-menu__list__item ripple">
                <span>大</span>
            </li>
            <li class="font-menu__list__item ripple">
                <span>加大</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FontMenu'
}
</script>

<style lang="less">
@import "~includes/base.less";
@import "~includes/variables.less";
@import "~includes/bottom_bar.less";

.font-menu {
    .bottom_bar_common;
    
    position: absolute;
    border-bottom: 1px solid @borderColor;

    top: 0;
    transform: translateY(-100%);

    &__list {
        &:after {
            .clear-float;
        }
        &__item {
            width: 33.3%;
            width: calc(100% / 3);
            
            font-size: @normalFontSize;
            color: @subTextColor;
            font-weight: bold;

            float: left;
            text-align: center;

            padding: 5px 0;
            border: 10px solid white;
            box-sizing: border-box;

            &--select {
                background: @importantColor;
                color: #ffffff;
            }
        }
    }
}
</style>
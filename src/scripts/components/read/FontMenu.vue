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

    &:before {
        content: '';
        
        position: absolute;
        left: 0;
        top: 0;
        
        transform: translateY(-50%);
        
        width: 100%;
        height: 1px;
        
        box-shadow: 0 0 10px black;
    }

    &__list {
        &:after {
            .clear-float;
        }
        &__item {
            background: white;

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
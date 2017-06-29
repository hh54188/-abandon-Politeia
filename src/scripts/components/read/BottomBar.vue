<template>
    <div class="bottom-bar">
        <ul class="bottom-bar__btn-list">
            <li class="bottom-bar__btn-list__btn ripple" @click="toggleIndexMenu">
                <i class="bottom-bar__btn-list__btn__icon icon-menu"></i>
                <span class="bottom-bar__btn-list__btn__text">目录</span>
            </li>
            <li class="bottom-bar__btn-list__btn ripple" @click="toggleFontMenu">
                <i class="bottom-bar__btn-list__btn__icon icon-font-size"></i>
                <span class="bottom-bar__btn-list__btn__text">字体</span>            
            </li>
            <li class="bottom-bar__btn-list__btn ripple" @click="toggleNightMode">
                <i class="bottom-bar__btn-list__btn__icon icon-sun"></i>
                <span class="bottom-bar__btn-list__btn__text">夜间</span>               
            </li>
            <li class="bottom-bar__btn-list__btn ripple">
                <a class="bottom-bar__btn-list__btn__link" href="http://baidu.com" target="_blank">
                    <i class="bottom-bar__btn-list__btn__icon icon-bubble"></i>
                    <span class="bottom-bar__btn-list__btn__text">评论</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BottomBar',
    methods: {
        toggleIndexMenu() {

        },
        toggleFontMenu() {
            console.log('toggle font menu');
        },
        toggleNightMode() {
            console.log('toggle night mode');
        }
    }
}
</script>

<style lang="less">

@import "~includes/base.less";
@import "~includes/variables.less";
@import "~includes/bottom_bar.less";

.bottom-bar {
    .bottom_bar_common;

    &__btn-list {
        &:after {
            .clear-float;
        }
        width: 100%;
        height: 100%;
        text-align: center;

        box-sizing: border-box;

        &__btn {
            display: block;
            padding: 0.8rem 0;

            /* 为什么不使用flex，因为要实现 ripple 效果 */
            width: 25%;
            width: calc(100% / 4);
            
            float: left;
            color: @subTextColor;

            &__link {
                color: @subTextColor;
            }

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
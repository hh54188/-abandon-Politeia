<template>
<div class="top-bar">
    <a class="top-bar__back" href="javascript:alert(1);">返回</a>
    <a class="top-bar__buy" href="javascript:alert(1);">
        <i class="top-bar__buy__icon icon-cart"></i>
        <span class="top-bar__buy__text">购买</span>
    </a>
    <a class="top-bar__bookmark" href="javascript:alert(1);">
        <i class="top-bar__bookmark__icon icon-bookmark"></i>
    </a>
</div>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>

<style lang="less">

@import "~includes/variables.less";
@import "~includes/load_button.less";

.top-bar {
    // display: none;

    padding: 1rem 0;    
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid @borderColor;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

    z-index: 2;

    position: fixed;
    left: 0;
    top: 0;

    background: #ffffff;
    text-align: center;

    &__buy {
        display: inline-block;
        padding: 0.5rem 4rem;
        border-radius: 1rem;
        background: @importantColor;
        color: #FFFFFF;            

        &__icon {
            font-size: @normalFontSize;
        }
        &__text {
            font-size: @normalFontSize;
            margin-left: 0.5rem;          
        }
    }

    &__back {
        font-size: @normalFontSize;

        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
    } 

    &__bookmark {

        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);        

        &__icon {
            font-size: @iconFontSize;
            color: @subTextColor;            
        }
    }
}
</style>
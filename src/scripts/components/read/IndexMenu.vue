<template>
    <div class="index-menu">
        <div class="tab-header">
            <ul class="tab-header__list">
                <li data-content="index" class="tab-header__list__item tab-header__list__item--focus">
                    <span>目录</span>
                </li>
                <li data-content="bookmark" class="tab-header__list__item"
                    ><span>书签</span>
                </li>
            </ul>
        </div>
        
        <div id="tab-index" class="tab-content tab-content--focus">
            <div class="catalogue-container">
                <div class="catalogue">
                    <ul class="catalogue__list">
                        <li class="catalogue__list__item catalogue__list__item--main">
                            <span class="catalogue__list__item__text">新版序</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main">
                            <span class="catalogue__list__item__text">我与武侠小说（代序）</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub">
                            <span class="catalogue__list__item__text">第一章 千古文人侠客梦</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub">
                            <span class="catalogue__list__item__text">第二章 唐宋豪侠小说</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub">
                            <span class="catalogue__list__item__text">第三章 清代侠义小说</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">第四章 20世纪武侠小说</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">第五章 仗剑行侠</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">第六章 快意仇</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">第七章 笑傲江湖</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">第八章 浪迹天涯</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--sub catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">第九章 作为一种小说类型的武侠小说</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">附录一 武侠小说与中国文化</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">附录二 类型等级与武侠小说</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">附录三 武侠小说中的“剑”</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">附录四 超越雅俗——金庸的成功及武侠小说的出路</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">附录五 走出“话本正脉”</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">附录六 小说家的历史意识与技术能力</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">附录七 又见金庸——答《南方周末》记者问</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main catalogue__list__item--disabled">
                            <span class="catalogue__list__item__text">主要参考书目</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main">
                            <span>索引</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main">
                            <span>初版后记</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main">
                            <span>我与武侠小说研究——新世界出版社“典藏版”后记</span>
                        </li>
                        <li class="catalogue__list__item catalogue__list__item--main">
                            <span>百花文艺版后记</span>
                        </li>           
                    </ul>
                </div>
            </div>    
        </div>

        <div id="tab-bookmark" class="tab-content">
            <div class="catalogue">
                <ul class="catalogue__list">
                    <li class="catalogue__list__item catalogue__list__item--main">
                        <span class="catalogue__list__item__text">书签内容 1</span>
                    </li>
                    <li class="catalogue__list__item catalogue__list__item--main">
                        <span class="catalogue__list__item__text">书签内容 2</span>
                    </li>
                    <li class="catalogue__list__item catalogue__list__item--main">
                        <span class="catalogue__list__item__text">书签内容 3</span>
                    </li>
                    <li class="catalogue__list__item catalogue__list__item--main">
                        <span class="catalogue__list__item__text">书签内容 4</span>
                    </li>           
                </ul>
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexMenu'
    }
</script>

<style lang="less">

    @import "~includes/base.less";
    @import "~includes/variables.less";
    @import "~includes/catalogue.less";
    @import "~includes/tab.less";
    @import "~includes/custom_scrollbar.less";


    .index-menu {
        // display: none;
        
        padding: 0 @pagePadding;
        box-sizing: border-box;

        background: #FFFFFF;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

        width: 80%;
        width: 80vw;

        height: 100%;

        position: fixed;
        left: 0;
        top: 0;

        z-index: 2;
        
        overflow-y: scroll;
        overflow-x: hidden;
} 
</style>
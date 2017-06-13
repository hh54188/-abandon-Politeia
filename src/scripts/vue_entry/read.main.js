import Vue from 'vue';
import App from 'components/read/App.vue';
import Store from 'stores/read.js';

new Vue({
    el: '#app',
    Store,
    render: (createElement) => {
        createElement(App);
    }
})
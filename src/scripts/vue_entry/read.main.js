import Vue from 'vue';
import App from 'components/read/App.vue';
import store from 'stores/ReadStore.js';

new Vue({
    el: '#app',
    store,
    render: createElement => createElement(App),
})
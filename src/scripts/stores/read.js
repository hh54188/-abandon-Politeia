import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        UI: {
            showTopBar: true,
            showBottomBar: true,

            showIndexMenu: false,
            
            showPaper: true,
            showProgress: false
        },
        data: {
            content: '',

        }
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    },
    getters: {
        UI: state => state.UI,
        data: state => state.data
    }
})
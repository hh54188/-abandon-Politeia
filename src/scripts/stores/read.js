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
            showProgressBar: false
        },
        data: {
            content: '',
            currentPage: 1,
            totalPage: 100,
            historyData: '',
        }
    },
    mutations: {
        setHistoryData(state, data) {
            state.data.historyData = data;
        },
        setContentData(state, content) {
            state.data.content = content;
        },
        setPage(state, page) {
            state.data.currentPage = page;
        },
        setViewVisible(state, payload) {
            let viewName = payload.viewName;
            let visible = payload.visible;
            state.UI['show' + viewName] = visible;
        }
    },
    actions: {
        updateViewVisible({commit}, payload) {
            commit('setViewVisible', payload);
        },
        turnNextPage({commit, dispatch, state}) {
            commit('setPage', state.data.currentPage + 1);
        },
        turnPrevPage({commit, dispatch, state}) {
            commit('setPage', state.data.currentPage - 1);
        },
        requestProgress() {
            return fetch(new Request('/api/ebook/save_progress', {
                'method': 'GET',
                'headers': new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            }))
        },
        requestHistory({commit, dispatch}) {
            return fetch(new Request('/api/ebook/read_history_by_book', {
                'method': 'GET',
                'headers': new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })).then(function (response) {
                return response.json();
            }).then(function resolve(result) {
                return new Promise(function (resolve, reject) {
                    // 根据章节信息请求章节内容
                    if (!result || !result.code || result.code !== 200) {
                        reject(result);
                        return;
                    }
                    // 拿到用户的阅读历史记录，包括：
                    // 1. 章节信息
                    // 2. 段落信息
                    let data = result.data;
                    commit('setHistoryData', data);
                    resolve(data);
                });
            })
        },
        requestContent({commit, dispatch}) {
            return fetch(new Request('/api/ebook/content', {
                'method': 'GET',
                'headers': new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'                    
                })
            })).then(function (response) {
                return response.json();
            }).then(function (result) {
                return new Promise(function (resolve, reject) {
                    if (!result || !result.code || result.code !== 200) {
                        reject(result);                        
                        return;
                    }
                    let data = result.data;
                    let content = data.content;
                    // 取得章节内容
                    commit('setContentData', content);
                    resolve(content);
                });
            });
        }
    },
    modules: {

    },
    getters: {
        UI: state => state.UI,
        data: state => state.data
    }
})
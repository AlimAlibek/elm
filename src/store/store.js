import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        token: localStorage.getItem('token') || '',
        modal: {},
    },
    mutations: {
        updateModalVisible(state, name){
            this.state.modal[name] = !this.state.modal[name];
        }
    },
    actions: {
        renderModal(ctx, name){
            ctx.commit('updateModalVisible', name);
        },
    },
    getters: {},
    modules: {}
});

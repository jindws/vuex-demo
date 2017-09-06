import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

import Index from '../pages/Index'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Index
        }
    ]
});

// vuex
const store = new Vuex.Store({
    state: {
        list:[]
    },
    mutations: {
        addList(state,item){
            state.list.push(item)
        },
        removeList(state,index){
            state.list = state.list.filter((itm,ind)=>ind!==index)
        }
    },
    getters: {
        list: state => state.list,
    }
});

new Vue({
  router,
  store
}).$mount('#app')

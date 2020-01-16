import Vue from 'vue'
import hello from './components/HelloWorld.vue'
import random from './components/randomComponent'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const routes = [
    {
        path: '/', component: hello,
    }, 
    {
        path: '/page', component: random
    }
]

const router = new vueRouter({
    routes
})

export default router
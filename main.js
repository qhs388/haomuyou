import Vue from 'vue'
import App from './App'
import dict from '@/api/dict.js'
Vue.config.productionTip = false

App.mpType = 'app'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"

Vue.component('mescroll-body', MescrollBody)
Vue.prototype.$dict = dict
import uView from "uview-ui";
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()

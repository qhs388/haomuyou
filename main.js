import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
Vue.component('mescroll-body', MescrollBody)

import uView from "uview-ui";
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()

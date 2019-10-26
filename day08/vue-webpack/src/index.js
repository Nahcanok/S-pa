import Vue from 'vue/dist/vue'
import 'weui'
import './styles/styles.css'


import './components/header/header1'
import './components/search/search1'
import './components/panel/panel1'
import './components/tabbar/tabbar1'

import './pages/contact/contact'
import './pages/main/main'
import './pages/wechat/wechat'
import './pages/recover/recover'
import './pages/mine/mine'


new Vue({
    el:'#vvue',
    template:`
        <div>
            <v-main></v-main>
            <v-tabbar></v-tabbar>
        </div>
    `
})
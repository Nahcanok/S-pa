import Vue from 'vue/dist/vue'
import template from './tabbar1.html'
import icon from '../../images/icon_tabbar.png'

const tab = new Vue({
    el:"#tabbar",
    data:{
        icon,
        tabbar:[{
            title:'微信',
            url:'/wechat',
            badge:8,
            dot:false
        },{
            title: '通讯录',
            url: '/contact',
            badge: 0,
            dot: false
        }, {
            title: '发现',
            url: '/recover',
            badge: 0,
            dot: true
        }, {
            title: '我',
            url: '/mine',
            badge: 0,
            dot: false
        }],
        //点击效果
        Hlset:0
    },
    template,
    methods: {
        Hl(index){
            this.Hlset = index
        }
    },
})
export default tab
import Vue from 'vue/dist/vue'
export default new Vue({
    el:'#header',
    data:{
        title:"Node新闻"
    },
    template:`<header>{{title}}</header>`
})
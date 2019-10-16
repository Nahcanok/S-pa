import Vue from 'vue/dist/vue'
import template from './search1.html'
import txt from './search1.txt'
const search = new Vue({
    el:'#search',
    data:{
        isFocus:false,
        searchText:'',
        title:txt,
        cancel:'取消'
    },
    template,
    methods: {
        toggleFocus(){
            this.isFocus = !this.isFocus
        },
        clear(){
            this.searchText=''
        }
    },
})
export default search
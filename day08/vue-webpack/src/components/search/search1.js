import Vue from 'vue/dist/vue'
import template from './search1.html'
import txt from './search1.txt'
import observer from '../../../tools/tools'

const search = Vue.component('v-search1', {
    data() {
        return {
            isFocus: false,
            searchText: '',
            title: txt,
            cancel: '取消'
        }
    },
    template,
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
        },
        clear() {
            this.searchText = ''
        }
    },
    watch: {
        //监听搜索框内值的变化
        searchText() {
            observer.emit('setSeatchText', this.searchText)
        }
    }
})
export default search
import Vue from 'vue/dist/vue'

export default Vue.component('v-header',{
    data() {
        return {
            title:'Node'
        }
    },
    template:'<header>{{title}}</header>'
})
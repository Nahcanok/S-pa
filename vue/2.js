import Vue from 'vue/dist/vue'
var SS =  new Vue({
    el:"#bg",
    data:{
        S:false
    },
    methods:{
        toggle(){
            this.S=!this.S
        }
    }
})
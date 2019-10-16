import Vue from 'vue/dist/vue'
console.log(Vue);
const SS =  new Vue({
    el:"#bg",
    data:{
        S:false,
        S2:false,
    },
    methods:{
        toggle(){
            this.S=!this.S
            this.S2=true
        },
        toggle1(){
            this.S2=!this.S2
            this.S=!this.S
        },
    }
})
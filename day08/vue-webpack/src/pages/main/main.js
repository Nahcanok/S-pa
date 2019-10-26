import Vue from 'vue/dist/vue'
import tools from '../../../tools/tools'

export default Vue.component('v-main',{
    data(){
        return {
            tabbar:'v-wechat'
        }
    },
    template:`<div>
    <keep-alive>
    <component :is="tabbar"></component>
    </keep-alive>
    </div>`,
    mounted(){
        tools.on('setTabbar',(index)=>{
            switch(index){
                case 0:
                    this.tabbar = "v-wechat";
                    break;
                case 1:
                    this.tabbar = "v-contact";
                    break;
                case 2:
                    this.tabbar = "v-recover";
                    break;
                case 3:
                    this.tabbar = "v-mine";
                    break;
            }
            console.log(index);
            
        })
    }
})
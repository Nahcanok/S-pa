import Vue from 'vue/dist/vue'
import template from './panel1.html'
import axios from 'axios'
const vm =new Vue({
    el :"#panel",
    data :{
        news:[],
        page:1
    },
    template,
    methods: {
        getNews(){
            let list =this
            axios.get('https://cnodejs.org/api/v1/topics',{
                params:{
                    page:this.page++,//更新页数
                    tab:'good',//数据的分类
                    limit:15,//每页多少条数据
                    mdrender:false

                }
            }).then((data)=>{
                list.news=[...list.news,...data.data.data]//结构新添加的数据拼接在一起再给回原来的数组
                console.log(data);
            })
        }
    }
})
vm.getNews()
export default vm
import Vue from 'vue/dist/vue'
import template from './panel1.html'
import axios from 'axios'
import observer from '../../../tools/tools'
export default Vue.component('v-panel1', {
    data() {
        return {
            news: [],
            page: 1,
            searchText: ''
        }

    },
    template,
    methods: {
        getNews() {
            let list = this
            axios.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page: this.page++, //更新页数
                    tab: 'good', //数据的分类
                    limit: 15, //每页多少条数据
                    mdrender: false

                }
            }).then((data) => {
                list.news = [...list.news, ...data.data.data] //结构新添加的数据拼接在一起再给回原来的数组
                console.log(data);
            })
        }
    },
    computed: {
        newsComputed() {
            console.log(this.searchText);
            if (this.searchText) {
                //如果searchText有值执行下面的判断
                return this.news.filter((item) => {
                    //根据searcText的值过滤数据
                    if (item.title.indexOf(this.searchText) != -1) {
                        return item
                    }
                })
            } else {
                //没有就返回一开始的数据
                return this.news
            }
        }
    },
    mounted(){
        console.log(observer);
        observer.on('setSeatchText', (searchText) => {
            this.searchText = searchText
        })
        this.getNews()
    },
})
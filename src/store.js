import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        backBtnVisible:false,
        picList:[
            {
                src:'/img/aeui2.3ffb4059.jpg',
                content:'这是第一张图片'
            },
            {
                src:'/img/Db1.a1fd25e5.png',
                content:'这是第二张图片'
            }
        ],
        article:[
            {
                id:0,
                title:'这里是标题一',
                pic:'/img/Db1.a1fd25e5.png',
                content:'这是第一篇文章的内容',
                router:''
            },
            {
                id:1,
                title:'这里是标题二',
                pic:'/img/aeui2.3ffb4059.jpg',
                content:'这是第二篇文章的内容',
                router:''
            },
            {
                id:2,
                title:'这里是标题三',
                pic:'/img/jill.f02319f1.png',
                content:'这是第三篇文章的内容',
                router:''
            }
        ]
    },
    mutations:{
        showBackBtn(state,getBool){
            state.backBtnVisible=getBool
        }
    },
    actions:{}
})
<template>
  <div class="home">
    <div class="transparent br">
      <uiTop></uiTop>
      <div class="content br">
        <contentBox v-for="(art,i) in article" :key="i" :postArt='art'>
          {{art.title}}
        </contentBox>
        <showPic v-for="(src,index) in picList" :key="index+src" :postSrc='src'></showPic>
      </div>
    </div>
  </div>
</template>

<script>
import contentBox from '../components/contentBox.vue'
import uiTop from '../components/uiTop.vue'
import showPic from '../components/showPic.vue'

export default {
  name: 'Home',
  components:{
    contentBox,
    uiTop,
    showPic
  },
  data(){
    return{
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
          title:'这里是标题一',
          pic:'/img/Db1.a1fd25e5.png',
          content:'这是第一篇文章的内容',
          router:''
        },
        {
          title:'这里是标题二',
          pic:'/img/aeui2.3ffb4059.jpg',
          content:'这是第二篇文章的内容',
          router:''
        },
        {
          title:'这里是标题三',
          pic:'/img/jill.f02319f1.png',
          content:'这是第三篇文章的内容',
          router:''
        }
      ]
    }
  }
}
</script>
<style scoped>
.br{
    border-radius: 1vw;
}
.home{
  width: 100%;
  padding: 2vh 0;
  background-image: url('../assets/aeui1+2.png');
  background-size: 120%;
  background-position-x: -10vw;
  background-position-y: -10vh;
}
.transparent{
  width: 90vw;
  margin-left: 5vw;
  background-color: rgba(16,18,27,40%);
  backdrop-filter: blur(20px);
}
.content{
  width: 100%;
  height: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  backdrop-filter: blur(20px);
  background-color: rgba(16,18,27,40%);
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}
::-webkit-scrollbar{
  display: none !important;
}
</style>
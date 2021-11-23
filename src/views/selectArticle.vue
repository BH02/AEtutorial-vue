<template>
  <div class="home">
    <div class="transparent br">
      <uiTop></uiTop>
      <div class="content br">
        <contentBox v-for="(art,i) in $store.state.article" :key="i" :postArt='art'>
          {{art.title}}
        </contentBox>
        <showPic v-for="(src,index) in $store.state.picList" :key="index+src" :postSrc='src'></showPic>
      </div>
    </div>
    <div class="visiblePic">
      <img src="../assets/aeui2.jpg" alt="">
      <img src="../assets/aeui1.jpg" alt="">
    </div>
  </div>
</template>

<script>
import contentBox from '../components/contentBox.vue'
import uiTop from '../components/uiTop.vue'
import showPic from '../components/showPic.vue'

export default {
  name: 'selectArticle',
  components:{
    contentBox,
    uiTop,
    showPic
  },
  data(){
    return{

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
.visiblePic{
  display: none;
}
</style>
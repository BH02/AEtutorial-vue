<template>
  <div class="home">
    <div class="transparent br">
      <uiTop></uiTop>
      <uiSec msg='视频知识'></uiSec>
      <div class="content br">
        <contentBox v-for="(getId,i) in artId" :key="i+996" :postId='getId'></contentBox>
        <showPic v-for="(getId,index) in picId" :key="index" :postId='getId'></showPic>
      </div>
    </div>
  </div>
</template>

<script>
import contentBox from '../components/contentBox.vue'
import uiTop from '../components/uiTop.vue'
import showPic from '../components/showPic.vue'
import uiSec from '../components/uiSec.vue'

export default {
  name: 'testPage',
  components:{
    contentBox,
    uiTop,
    showPic,
    uiSec
  },
  data(){
    return{
      artId:[3,5,6],
      picId:[]
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
  background-repeat: repeat;
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
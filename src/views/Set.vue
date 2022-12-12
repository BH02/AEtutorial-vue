<template>
  <div class="home">
    <div class="transparent br" v-if="this.$store.state.permission">
      <uiTop></uiTop>
      <uiSec msg='管理后台'></uiSec>
      <div class="content br">
        <Admin></Admin>
      </div>
    </div>
    <div class="transparent br" v-if="!this.$store.state.permission">
      <uiTop></uiTop>
      <uiSec msg='用户设置'></uiSec>
      <div class="content br">
        <setUser></setUser>
      </div>
    </div>
  </div>
</template>

<script>
import uiTop from '../components/uiTop.vue'
import uiSec from '../components/uiSec.vue'
import Admin from '../components/Admin.vue'
import setUser from '../components/setUser.vue'

export default {
  name: 'testPage',
  components:{
    uiTop,
    uiSec,
    Admin,
    setUser
  },
  data(){
    return{
    }
  },
  created(){
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
  min-height: 800px;
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
.big{
    font-size: 200px;
    color: white;
}
</style>
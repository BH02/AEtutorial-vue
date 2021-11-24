<template>
  <div class="about">
    <div class="transparent br">
      <uiTop></uiTop>
      <div class="content br">
        <articleBox></articleBox>
        <div class="pic">
          <img :src="art.pic" class="pic">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uiTop from '../components/uiTop.vue'
import articleBox from '../components/articleBox.vue'

export default {
  name:'About',
  components:{
    uiTop,
    articleBox,
  },
  data(){
    return{
      art:{},
    }
  },
  mounted(){
    this.art=this.$store.state.article[this.$route.query.articleId]
  },
}
</script>

<style scoped>
.br{
    border-radius: 1vw;
}
.about{
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
  justify-content: left;
  align-content: flex-start;
}
.pic{
  width: 90%;
  border-radius: 2vw;
  margin: 20px auto;
  text-align: left;
}
.pic>img{
  width: 60%;
}
::-webkit-scrollbar{
  display: none !important;
}
</style>

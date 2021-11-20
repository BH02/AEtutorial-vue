<template>
  <div class="home">
    <div class="transparent br">
      <div class="top br">
        <searchBar></searchBar>
      </div>
      <div class="content br">
        <contentBox></contentBox>
        <contentBox></contentBox>
        <contentBox></contentBox>
        <contentBox></contentBox>
      </div>
    </div>
  </div>
</template>

<script>
import contentBox from '../components/contentBox.vue'
import searchBar from '../components/searchBar.vue'
export default {
  name: 'Home',
  components:{
    contentBox,
    searchBar
  }
}
</script>
<style scoped>
.br{
    border-radius: 1vw;
}
.home{
  width: 100%;
  /* margin: 0 auto; */
  padding: 2vh 0;
  background-image: url('../assets/aeui1+2.png');
  background-size: 120%;
  background-position-x: -10vw;
  background-position-y: -10vh;
  /* min-width: 1000px; */
}
.transparent{
  width: 90vw;
  margin-left: 5vw;
  background-color: rgba(0, 0, 0, 20%);
  backdrop-filter: blur(20px);
}
.top{
  width: 100%;
  height: 7vh;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 20%);
  display: flex;
  justify-content: start;
  align-items: center;
}
.content{
  width: 100%;
  height: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 20%);
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
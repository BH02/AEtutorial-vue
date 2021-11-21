<template>
    <div class="box">
        <div class="title">{{this.art.title}}</div>
        <div class="words">{{this.art.content}}</div>
    </div>    
</template>

<script>
import bus from '../router/bus'

export default {
    name:'articleBox',
    inject: ['thisApp'],
    data(){
        return{
            art:{},
        }
    },    
    mounted(){
        console.log(this.thisApp);
        bus.$on('postArticle',(res)=>{
            this.art=res
        })
    },
}
</script>

<style scoped>
.words{
    width: 90%;
    height: 60%;
    margin: 20px auto;
    text-align: left;
    text-indent: 2em;
    color: #faf9fbcb;
}
.title{
  width: 70%;
  height: 40px;
  font-size: 2rem;
  margin: 2vh auto;
  text-align: center;
  color: #faf9fb;
}
</style>
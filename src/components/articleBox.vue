<template>
    <div class="box">
        <div class="title">{{art.title}}</div>
        <div class="words" v-html="art.newContent"></div>
    </div>    
</template>

<script>

export default {
    name:'articleBox',
    data(){
        return{
            art:{},
        }
    },
    created(){
        this.$store.commit('showBackBtn',true)
    },
    mounted(){
        this.art=this.$store.state.article[this.$route.query.articleId]
        this.art.newContent=this.art.content.replace(/\n/g, '<br>')
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
    border-radius: 1vw;
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
    padding: 1vw;
    line-height: 4vh;
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
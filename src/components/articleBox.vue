<template>
    <div class="box">
        <div class="title">{{art.title}}</div>
        <div class="words">{{art.content}}</div>
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
<template>
    <div class="">
        文章设置
        <div class="data">
            <div v-for="(article,index) in articleList" :key="index">
                {{article.title}}
            </div>
        </div>
        <div class="changePage">
            第
            <span @click="reduce" class="btn">-</span>
            <input type="text" class="pageNum btn" v-model="page">
            <span @click="add" class="btn">+</span>
            页
        </div>
    </div>
</template>

<script>
export default {
    naem:'setArt',
    data(){
        return{
            page:1,
            articleList:{}
        }
    },
    created(){
        this.getArtPage()
    },
    methods:{
        add(){
            this.page+=1
        },
        reduce(){
            this.page-=1
        },
        getArtPage(){
            this.$axios.get("http://localhost:8081/art/page?pageNum="+this.page+"&pageSize=5").then(res=>{
                this.articleList=res.data
                console.log(this.articleList);
            })
        }
    }
}
</script>

<style scoped>
div{
    color: #fff8;
}
.changePage{
    width: 100%;
    height: 30px;
    line-height: 30px;
}
.btn{
    width: 5vw;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
input{
    width: 70%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0%);
    outline: none;
    border: 0;
    font-size: 30px;
    color: #f9fafb; 
}
</style>
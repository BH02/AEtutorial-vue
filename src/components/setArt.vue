<template>
    <div class="">
        <div class="data">
            <div class="singleArt overEcli top">
                <div class="id">ID</div>
                <div class="title">标题</div>
                <div class="content">内容</div>
                <div class="apiBtn">操作</div>
            </div>
            <div v-for="(article,index) in articleList" :key="index">
                <div class="singleArt">
                    <div class="id">{{article.id}}</div>
                    <div class="title overEcli">{{article.title}}</div>
                    <div class="content overEcli">{{article.content}}</div>
                    <div class="apiBtn">
                        <div class="edit" @click="editArt(article.id)">编辑</div>
                        <div class="del" @click="delArt(article.id)">删除</div>
                    </div>
                </div>
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
            if(this.page<=1){
                this.page=1
            }else{
                this.page-=1
            }
        },
        getArtPage(){
            this.$axios.get("http://localhost:8081/art/page?pageNum="+this.page+"&pageSize=10").then(res=>{
                this.articleList=res.data

                if(res.data==0){
                    this.page-=1
                }
            })
        },
        delArt(id){
            this.$axios.delete("http://localhost:8081/art/del/"+id)
            this.getArtPage()
        },
        editArt(id){
            console.log(id);
        }
    },
    watch:{
        page(){
            this.getArtPage()
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
    margin: 10px 0;
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
.overEcli{
  overflow:hidden; /*超出部分隐藏*/
  white-space:nowrap; /*让文本强制在一行不换行*/
  text-overflow:ellipsis;/*显示省略号来代表被修剪的文本*/
}
.singleArt{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(255, 255, 255, 20%);
}
.top{
    border-top: 1px solid rgba(255, 255, 255, 20%);
}
.singleArt>div{
    border-right: 1px solid rgba(255, 255, 255, 20%);
}
.singleArt:last-child{
    border-right: 0px;
}
.id{
    width: 5vw;
}
.title{
    width: 17vw;
}
.content{
    width: 58vw;
}
.apiBtn{
    width: 10vw;
    display: flex;
    flex-direction: row;
    line-height: 4vh;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.edit{
    font-size: 2vh;
    margin-right: 1vw;
    cursor: pointer;
}
.del{
    color: red;
    font-size: 2vh;
    cursor: pointer;
}
span{
    cursor: pointer;
}
</style>
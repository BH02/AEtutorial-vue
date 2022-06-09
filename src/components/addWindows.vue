<template>
    <div class="editWindow br">
        <span class="close" @click="close">x</span>

        <div class="title br">
            <span>标题：</span><input type="text" class="br" placeholder="输入标题" v-model="json.title">
        </div>
        <div class="content br">
            <span>内容：</span><textarea class="br" placeholder="输入内容" v-model="json.content"></textarea>
        </div>
        <div class="submitBtn br" @click="submitArt">提  交</div>
    </div>
</template>

<script>
export default {
    name:'addWindow',
    data(){
        return{
            json:{
                id:"",
                title:"",
                pic:"",
                content:"",
                router:""
            }
        }
    },
    methods:{
        close(){
            this.$store.state.showAdd=false
        },
        submitArt(){
            this.$axios.post("http://localhost:8081/art/add",this.json).then(()=>{
                this.$store.state.showAdd=false
                location.reload()
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
.editWindow{
    width: 50vw;
    height: 50vh;
    background-color: rgba(146,151,179,97%);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 0, 0, 20%);
    transition: .3s linear;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.br{
  border-radius: 1vw;
}

.close{
    width: 20px;
    height: 18px;
    position: absolute;
    top: 1%;
    right: 2%;
}

.close:hover{
    cursor: pointer;
}
.title,.content{
    width: 90%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 10%;
    left: 5%;
    border: 1px solid rgba(0, 0, 0, 20%);
}
.content{
    top: 20%;
    height: 65%;
}

input,textarea{
    margin: 0;

    width: 70%;
    height: 35px;
    line-height: 30px;
    background-color: rgba(146,151,179,0%);
    /* backdrop-filter: blur(20px); */
    color: white;
    text-align: center;

    border: none;
	outline: none;
    /* border: 1px solid rgba(0, 0, 0, 20%); */
    vertical-align: top;
    font-size: 2vh;
    font-family: none;
}
textarea{
    height: 95%;
    margin-top: 5px;
}
.submitBtn{
    width: 90%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    bottom: 5%;
    left: 5%;
    border: 1px solid rgba(0, 0, 0, 20%);
    cursor: pointer;
    transition: .3s linear;
}
.submitBtn:hover{
    background-color: rgba(255,255,255,10%);
}
</style>
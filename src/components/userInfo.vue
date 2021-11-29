<template>
    <div class="userInfo">
        <span>3</span>
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell" @click="showMsg">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path>
        </svg>
        <svg viewBox="0 0 512 512" fill="currentColor">
            <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z"></path>
        </svg>
        <img src="../assets/jill.png">
        <div class="showMsg" v-if="$store.state.showMsg">
            <div class="msg" v-for="(getMsg,i) in Msgs" :key="i">
                <img :src="getMsg.pic" alt="" class="msgPic">
                <div class="text">{{getMsg.user}}:{{getMsg.msg}} </div>
            </div>
        </div>
    </div>
</template>
<script>

export default ({
    name:'userInfo',
    data(){
        return{
            Msgs:[
                {
                    user:'Jill',
                    pic:'./img/jill.f02319f1.png',
                    msg:'调制饮料，改变生活。'
                },
                {
                    user:'Jill',
                    pic:'./img/jill.f02319f1.png',
                    msg:'我不知道，我从来没想过这个问题。'
                },
                {
                    user:'Jill',
                    pic:'./img/jill.f02319f1.png',
                    msg:'今天Boss发了奖金。'
                }
            ]
        }
    },
    methods:{
        showMsg(){
            this.$store.commit('showMsg',!this.$store.state.showMsg)
        }
    }
})
</script>

<style scoped>
.userInfo{
    width: 20%;
    height: auto;
    border-radius: 1vw;
    display: flex;
    align-items: center;
    position: relative;
    transition: .1s linear;
}
svg{
    width: 30px;
    color: white;
    margin: 0 10px;
    min-width: 30px;
}
span{
    width: 20px;
    height: 20px;
    background-color: rgb(95, 95, 255);
    color: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: 20px;
    min-width: 40px;
}
.showMsg{
    width: 200px;
    background-color: rgba(38,41,51);
    border: 2px solid rgba(255, 255, 255, 20%);
    border-radius: 1vw;
    position: absolute;
    top: 50px;
    left: -75px;
    z-index: 999;
    backdrop-filter: blur(20px);
}
.msg{
    width: 90%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 20%);
    margin: 5px auto;
    color: white;
    text-align: left;
    display: flex;
}
.msgPic{
    margin: 0 !important;
}
.text{
    width: 95%;
    overflow:hidden; /*超出部分隐藏*/
    white-space:nowrap; /*让文本强制在一行不换行*/
    text-overflow:ellipsis;/*显示省略号来代表被修剪的文本*/
    font-size: 12px;
}
@media screen and (max-width:600px) {
    .userInfo{
        display: none;
    }
}
</style>
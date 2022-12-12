<template>
    <div class="box">
        <div class="unLogin" v-if="!this.$store.state.localLogin">尚未登录</div>

        <div class="Logined" v-if="this.$store.state.localLogin">
            <div class="acc">
                <span>帐号:</span>
                <div class="account">{{this.userInfo.account}}</div>
            </div>
            <div class="nick">
                <span>昵称:</span>
                <div class="nickname">{{this.userInfo.nickname}}</div>
                <div class="change">修改</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo:{}
        }
    },
    created(){
        if (this.$store.state.localLogin) {

            this.$axios.get("/api/user/searchAcc/"+localStorage.getItem("LoginAcc")).then(res=>{
                this.userInfo = res.data[0]
            })
        }
    }
}
</script>

<style scoped>
.box{
    height: 800px;
    color: #fff8;
}

.Logined{
    display: flex;
    flex-direction: column;
    padding: 10vh 10vw;
}
.acc,.nick{
    width: 50%;
    margin: 15px;
    display: flex;
    flex-direction: row;
}
.acc>span,.nick>span{
    line-height: 35px;
    margin-right: 20px;
}
.account,.nickname,.change{
    width: 150px;
    height: 35px;
    line-height: 35px;
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
    border-radius: 5px;
    color: white;
    text-align: center;
}
.change{
    width: 50px;
    margin-left: 20px;
    line-height: 35px;
    cursor: pointer;
}
</style>
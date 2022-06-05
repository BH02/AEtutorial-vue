<template>
    <div class="login br" v-if="this.$store.state.showLogin">
        <span class="close" @click="switchShow">X</span>
        <div class="account br">
            <span>帐号：</span><input type="text" class="br" placeholder="输入账号" v-model="regAccount">
        </div>
        <div class="password br">
            <span>密码：</span><input type="password" class="br" placeholder="输入密码">
        </div>
        <div class="switchBtn br" @click="switchB">切换</div>
        <div class="loginBtn br" v-if="isLogin">登录</div>
        <div class="registerBtn br" v-if="!isLogin" @click="reg">注册</div>
        <div class="welcome">Welcome!</div>
        <div class="toast" v-show="toastShow">
            {{toastText}}
        </div>
    </div>
</template>

<script>
export default {
    name:'',
    data(){
        return{
            isLogin:false,
            regAccount:'',
            toastText:'',
            toastShow: false,
            alreadyAcc:true,
            info:{
                id: '',
                account: "",
                password: "",
                nickname: "",
                permission: ""
            }
        }
    },
    methods:{
        switchB(){
            this.isLogin=!this.isLogin
        },
        switchShow(){
            this.$store.state.showLogin=!this.$store.state.showLogin
        },
        reg(){
            console.log("当前帐号=>"+this.regAccount)

            if(this.regAccount==''){

                this.toast('输入账号为空')

            }else if(this.regAccount!=''){

                this.$axios.get("http://localhost:8081/user/searchAcc/"+this.regAccount).then(res=>{
                    console.log("haveAcc=>"+res);
                    if(res.data.length==0){
                        this.alreadyAcc=false;
                    }else{
                        this.alreadyAcc=true;
                    }
                    console.log("alreadyAcc==>"+this.alreadyAcc);
                }).catch(err=>{
                    console.log("查找错误："+err)
                    this.toast('查找错误')
                }) 

                if (this.alreadyAcc) {

                    this.toast('账号已存在')

                }else{
                    this.info.account=this.regAccount
                    let json=JSON.stringify(this.info)
                    this.$axios.post("http://localhost:8081/user/add",json).then(res=>{
                        console.log("成功注册=>"+res.data)
                        this.toast('成功注册')
                    }).catch(err=>{
                        console.log("注册错误："+err)
                        this.toast('注册错误')
                    }) 
                }
            }      
        },
        toast (e) {
            let self = this
            self.toastText = e
            self.toastShow = true
            setTimeout(function(){
                self.toastShow = false
            }, 1500)
        },
    },
}
</script>

<style scoped>
.br{
  border-radius: 1vw;
}

.login{
    width: 44%;
    height: 300px;
    margin: 20px; 
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
    transition: .3s linear;
    padding: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    color: white;
    min-width: 400px;
}

.account{
    width: 50%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 20%;
    left: 40%;
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
}

.password{
    width: 50%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 40%;
    left: 40%;
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
}

input{
    width: 70%;
    height: 35px;
    line-height: 30px;
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
    color: white;
    text-align: center;
}

input:focus{
    outline: none;
}

span:hover{
    cursor: default;
}

.close{
    width: 20px;
    height: 18px;
    position: absolute;
    top: 3%;
    right: 2%;
}

.close:hover{
    cursor: pointer;
}

.registerBtn,.loginBtn{
    width: 35%;
    height: 13%;
    line-height: 40px;
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
    position: absolute;
    top: 70%;
    left: 55%;
    user-select:none;/*清除双击选中文本*/
}
.registerBtn:hover5,.loginBtn:hover{
    cursor: default;
}
.switchBtn{
    width: 10%;
    height: 13%;
    line-height: 40px;
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
    position: absolute;
    top: 70%;
    left: 40%;
    user-select:none;/*清除双击选中文本*/
}
.switchBtn:hover{
    cursor: default;
}

.welcome{
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translate(0,-50%);
}

.toast{
    position: fixed;
    z-index: 2000;
    left: 50%;
    top:45%;
    transition:all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
       -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
         -o-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color:#FFF;
    background: rgba(17, 17, 17, 0.7);
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    max-width: 150px;
  }
</style>
<template>
    <div class="userInfo">
        <!-- <span>3</span> -->
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell" @click="showMsg">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path>
        </svg>
        <router-link to="/Set">
            <svg width="1218.000000pt" height="1280.000000pt" viewBox="0 0 1218.000000 1280.000000" v-if="this.$store.state.permission">
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#ffffff" stroke="none">
                    <path d="M9020 12775 c-955 -264 -1655 -1028 -1820 -1986 -55 -312 -39 -713
                    40 -1017 l19 -77 -31 -45 c-155 -221 -602 -750 -998 -1180 -462 -503 -1444
                    -1500 -1945 -1976 -674 -639 -1234 -1137 -1647 -1462 l-117 -92 -91 0 c-172 0
                    -423 -39 -625 -97 -738 -212 -1344 -758 -1624 -1461 -76 -191 -126 -379 -162
                    -617 -17 -105 -17 -484 -1 -605 49 -363 169 -710 352 -1010 60 -98 85 -128
                    119 -141 34 -13 83 5 103 39 9 15 144 377 298 803 155 425 300 812 322 859 52
                    109 166 227 273 282 138 72 306 97 447 67 70 -15 1213 -431 1303 -474 178 -86
                    319 -268 355 -456 15 -80 11 -226 -9 -299 -9 -36 -153 -438 -320 -895 -317
                    -867 -315 -862 -275 -907 37 -39 79 -35 293 33 824 263 1455 935 1665 1774 68
                    271 91 556 66 817 -23 240 -84 502 -165 703 l-44 109 87 101 c915 1062 2329
                    2494 3307 3351 450 393 811 678 1108 873 l97 64 258 2 c280 1 379 12 597 65
                    460 111 852 329 1186 660 399 396 628 858 720 1455 17 105 17 484 1 605 -39
                    290 -118 554 -241 805 -64 130 -150 276 -184 314 -53 57 -123 47 -156 -22 -11
                    -23 -146 -388 -301 -812 -154 -423 -296 -804 -317 -845 -48 -99 -167 -220
                    -268 -272 -138 -72 -306 -97 -447 -67 -70 15 -1213 431 -1303 474 -140 68
                    -255 189 -315 332 -38 91 -50 153 -50 259 0 118 10 153 132 489 60 165 200
                    547 310 849 219 604 218 598 155 636 -40 25 -51 24 -157 -5z"/>
                </g>
            </svg>
            <svg width="1218.000000pt" height="1280.000000pt" viewBox="0 0 1218.000000 1280.000000" v-if="!this.$store.state.permission">
                <g transform="translate(0.000000,1248.000000) scale(0.100000,-0.100000)"
                fill="#ffffff" stroke="none">
                <path d="M6005 12474 c-22 -2 -89 -9 -149 -14 -542 -53 -1087 -253 -1556 -571
                -1089 -738 -1659 -2029 -1470 -3331 117 -802 507 -1518 1129 -2075 454 -406
                1057 -697 1666 -802 220 -39 317 -46 595 -46 278 0 375 7 595 46 1218 211
                2250 1096 2647 2269 353 1043 189 2180 -442 3075 -568 804 -1437 1318 -2425
                1435 -92 11 -518 21 -590 14z"/>
                <path d="M8585 5886 c-478 -363 -1085 -626 -1687 -730 -247 -43 -348 -51 -678
                -51 -319 0 -364 3 -612 41 -586 88 -1171 326 -1668 676 l-114 81 -106 -17
                c-58 -10 -181 -38 -275 -61 -807 -204 -1528 -616 -2120 -1210 -726 -728 -1170
                -1655 -1297 -2704 -29 -238 -32 -741 -5 -930 53 -378 142 -589 320 -758 171
                -163 421 -234 772 -220 269 11 533 55 1230 208 817 179 1195 244 1690 291 205
                19 4525 19 4730 0 495 -47 873 -112 1690 -291 697 -153 961 -197 1230 -208
                254 -10 438 21 605 103 172 84 315 254 390 463 74 203 108 420 117 736 34
                1230 -451 2439 -1332 3320 -707 707 -1608 1156 -2597 1294 -206 29 -201 30
                -283 -33z"/>
        </g>
</svg>
        </router-link>
        <!-- <img src="../assets/jill.png" @click="showLogin"> -->
        <div class="touxiang" @click="showLogin">{{this.loginId}}</div>
        <div class="showMsg" v-if="$store.state.showMsg">
            <div class="msg" v-for="(getMsg,i) in Msgs" :key="i">
                <img :src="getMsg.pic" alt="" class="msgPic">
                <div class="text">{{getMsg.user}}:{{getMsg.msg}} </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            ],
            loginId:'请登录'
        }
    },
    created(){
        if (localStorage.getItem("LoginAcc")==null) {
                this.$store.state.localLogin=false
            }else{
                this.$store.state.localLogin=true
                this.loginId=localStorage.getItem('LoginAcc')
            }
            
        this.$store.state.permission=localStorage.getItem('accountPer')
        // console.log(localStorage.getItem('LoginAcc'));
    },
    mounted(){
        this.$axios.get("/api/user/searchAcc/"+localStorage.getItem('LoginAcc')).then(res=>{
            // console.log(res.data[0]);
            if (res.data[0].permission=='admin') {
                this.$store.state.permission=true
            } else {
                this.$store.state.permission=false
            }
        }).catch(err=>{
            console.log(err);
            this.$store.state.permission=false
        })
        // console.log(this.permission);
    },
    methods:{
        showMsg(){

            this.$store.commit('showMsg',!this.$store.state.showMsg)

        },
        showLogin(){

            if (localStorage.getItem("LoginAcc")==null) {
                this.$store.state.localLogin=false
            }else{
                this.$store.state.localLogin=true
            } 


            // console.log(this.$store.localLogin);
            this.$store.state.showLogin=true
        }
    }
}
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
img,.touxiang{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: 20px;
    min-width: 40px;
    line-height: 40px;
    text-align: center;
    overflow:hidden; /*超出部分隐藏*/
    white-space:nowrap; /*让文本强制在一行不换行*/
    text-overflow:none;/*显示省略号来代表被修剪的文本*/
    color: rgba(255, 255, 255, 20%);

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
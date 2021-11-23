<template>
  <div id="app">
    <header>
        <div class="box">
            <div class="icon">
                <img src="./assets/Db1.png" alt="AE icon">
                <!-- <span>After effcts</span> -->
            </div>
            <Slide right>
                <router-link to="/home">
                    <span>首页</span>
                </router-link>
                <router-link to="/selectArticle">
                    <span>About</span>
                </router-link>
                <router-link to="/">
                    <span>预留位置</span>
                </router-link>
                <router-link to="/">
                    <span>预留位置</span>
                </router-link>
                <router-link to="/">
                    <span>预留位置</span>
                </router-link>
            </Slide>
            <div class="navBar">
                <ul>
                    <router-link to="/home">首页</router-link>
                    <router-link to="/selectArticle">教程</router-link>
                    <router-link to="/">预留位置</router-link>
                    <router-link to="/">预留位置</router-link>
                    <router-link to="/">预留位置</router-link>
                </ul>
            </div>
        </div>
    </header>
    <div class="blo"></div>
    <router-view/>
    
    <footer>
        <div class="box">           
            <span>Copyright © 2021 </span><a href="https://github.com/BH02">BH02</a>
        </div>
    </footer>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
import Vue from 'vue'

Vue.prototype.eventBus = new Vue();
export default {
    data(){
        return{
        }
    },
    components: {
        Slide // Register your component
    },
}

</script>


<style>
*{
    padding: 0;
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
    width: 100vw;
    height: 80px;
    margin-bottom: 8px;
    box-shadow: 0px 0px 20px -10px black;
    position: fixed;
    z-index: 999;
    background-color: rgb(21,36,60);
}
header>.box{
    height: 80px;
}
.blo{
    width: 100vw;
    height: 80px;
}
footer{
    width: 100vw;
    height: 150px;
    background-color: rgb(35,35,35);
    border-top: 2px solid rgb(187,187,187);
}
.box{
    width: 90vw;
    height: 100%;
    margin: 0 auto;
}
footer>.box{
    text-align: center;
    line-height: 150px;
    color: gray;
}
footer>.box>a{
    text-decoration: none;
    color: gray;
}
.navBar{
    float: right;
    margin-right: 7%;
}
.navBar>ul>a{
    width: auto;
    height: 80px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    line-height: 80px;
    margin: 0 10px;
    color: rgb(91,97,120);
    box-sizing: border-box;
}
.navBar>ul>a:hover{
    border-bottom: 3px solid rgb(91,97,120);
}
.router-link-exact-active{
    border-bottom: 3px solid rgb(91,97,120);
}
.icon{
    width: 20%;
    height: 80px;
    line-height: 80px;
    float: left;
    display: flex;
    justify-content: center;
}
.icon>span{
    font-size: 25px;
}
.icon>img{
    margin: 10px 20px;
}
.bm-burger-button{
    display: none;
    right: 5vw !important;
    top: 30px !important;
}
.bm-item-list>a>span{
    min-width: 100px !important;
}
@media screen and (max-width:600px) {
    .navBar{
        display: none;
    }
    .bm-burger-button{
        display: block;
    }
}
</style>

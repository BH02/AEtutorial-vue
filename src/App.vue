<template>
  <div id="app">
    <header>
        <div class="box">
            <div class="icon">
                <img src="./assets/Db1.png" alt="AE icon">
                <!-- <span>After effcts</span> -->
            </div>
            <Slide right>
                <router-link to="/">
                    <span>首页</span>
                </router-link>
                <router-link to="/selectArticle">
                    <span>AE起步</span>
                </router-link>
                <router-link to="/videoKnows">
                    <span>认识视频</span>
                </router-link>
                <router-link to="/aeInterface">
                    <span>AE界面</span>
                </router-link>
                <router-link to="/mainInterface">
                    <span>主要面板</span>
                </router-link>
                <router-link to="/Keyframe">
                    <span>关键帧</span>
                </router-link>
                <router-link to="/effect">
                    <span>效果</span>
                </router-link>
                <router-link to="/Advanced">
                    <span>进阶</span>
                </router-link>
                <router-link to="/Render">
                    <span>渲染</span>
                </router-link>
                <router-link to="/testPage">
                    <span>测试页面</span>
                </router-link>
            </Slide>
            <div class="navBar">
                <ul>
                    <router-link to="/">首页</router-link>
                    <router-link to="/selectArticle">AE起步</router-link>
                    <router-link to="/videoKnows">认识视频</router-link>
                    <router-link to="/aeInterface">AE界面</router-link>
                    <router-link to="/mainInterface">主要面板</router-link>
                    <router-link to="/Keyframe">关键帧</router-link>
                    <router-link to="/effect">效果</router-link>
                    <router-link to="/Advanced">进阶</router-link>
                    <router-link to="/Render">渲染</router-link>
                    <router-link to="/testPage">测试页面</router-link>
                </ul>
            </div>
        </div>
    </header>
    <div class="blo"></div>
    <router-view/>
    <login></login>
    <footer>
        <div class="box">           
            <span>Copyright © 2021 </span><a href="https://github.com/BH02">BH02</a>
        </div>
    </footer>
    <!-- 非常笨比的图片加载 -->
    <div class="visiblePic">
      <img src="./assets/aeui2.jpg" alt="">
      <img src="./assets/aeui1.jpg" alt="">
      <img src="./assets/aeui3.png" alt="">
      <img src="./assets/frame.png" alt="">
      <img src="./assets/frame2.png" alt="">
      <img src="./assets/keyframe.png" alt="">
      <img src="./assets/fps.png" alt="">
      <img src="./assets/format.png" alt="">
      <img src="./assets/Bitrate.png" alt="">
      <img src="./assets/FF150.png" alt="">
      <img src="./assets/aeWindow.png" alt="">
      <img src="./assets/aenav.png" alt="">
      <img src="./assets/projectPanel.png" alt="">
      <img src="./assets/layersPanel.png" alt="">
      <img src="./assets/layerBasic.png" alt="">
      <img src="./assets/trigger.gif" alt="">
      <img src="./assets/ringRotation.gif" alt="">
      <img src="./assets/textTool.png" alt="">
      <img src="./assets/textTool2.png" alt="">
      <img src="./assets/effect1.png" alt="">
      <img src="./assets/mask1.png" alt="">
      <img src="./assets/mask3.png" alt="">
      <img src="./assets/mask2.png" alt="">
      <img src="./assets/fs.png" alt="">
      <img src="./assets/fs.gif" alt="">
      <img src="./assets/expression1.png" alt="">
      <img src="./assets/wiggle1.png" alt="">
      <img src="./assets/keylight1.png" alt="">
      <img src="./assets/output.png" alt="">
      <img src="./assets/output2.png" alt="">
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
import Vue from 'vue'
import login from './components/login.vue'

Vue.prototype.eventBus = new Vue();
export default {
    data(){
        return{
        }
    },
    components: {
        Slide,
        login
    }
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
.visiblePic{
  display: none;
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
@media screen and (max-width:900px) {
    .navBar{
        display: none;
    }
    .bm-burger-button{
        display: block;
    }
}
</style>

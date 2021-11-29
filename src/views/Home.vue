<template>
    <div class="home">
        <swiper class="topPic"></swiper>
        <div class="main">
            <div class="content">
                <div class="images" v-viewer>
                    <img src="../assets/aeui4.png" class="br">
                </div>
                <div class="words">
                    After Effects是Adobe公司出的一款影视后期处理软件（adobe相信大家很熟悉，PS AI都是他公司出的，配合AE可以得到很好的效果），适用于从事设计和视频特技的机构，包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。要想熟练的使用After Effects软件进行后期制作的话不能盲目的急于求成，必须先了解一下软件的操作界面，窗口布局等。只有对其操作界面上有了宏观的认识，才能在工作中游刃有余。
                </div>
            </div>
            <div class="content">
                <div class="words">
                    After Effects软件可以帮助高效、准确的创建大量引人注目的动态图形和令人印象深刻的视觉效果。通过紧密集成和高灵活度的二维和三维合成，以及数百个预设效果和动画。Adobe为您的电影、视频作品添加了全新的效果。
                </div>
                <div class="images" v-viewer>
                    <img src="../assets/loop3.png" class="br">
                </div>
            </div>
            <div class="content">
                <div class="images" v-viewer>
                    <img src="../assets/slide_1.gif" class="br">
                </div>
                <div class="words">
                    After Effects使用数百个插件来增强图像效果和动画控制。它可以与其他Adobe软件和三维软件相结合
                </div>
            </div>
            <div class="content">
                <div class="words">
                    本教程试着向从未接触过AE的人介绍AE，有很多不够详细的地方，可以在github上给本项目留言，我一定会加以改进。
                    <a href="https://github.com/BH02/AEtutorial-vue">项目地址→</a>
                </div>
                <div class="images" v-viewer>
                    <img src="../assets/github.png" class="br">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from '../components/swiper.vue'
export default {
    name:'home',
    components:{
        swiper
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
/* .topPic{
    width: 100vw;
} */
.home{
    width: 100vw;
    margin: 0 auto;
    background-image: url('../assets/bg2.png');  
    background-repeat: repeat;
    background-size: 120%;
    background-position-x: -10vw;
    background-position-y: -10vh;
    overflow: hidden;
}
.main{
    width: 90vw;
    margin: 0 auto;
}
.content{
    width: 60vw;
    display: flex;
    justify-content: center;
    margin: 40px auto;
    box-shadow: 5px 5px 10px 5px #0005;
    border-radius: 1vw;
    min-width: 763px;
    background-color: rgb(21,36,60);
}
.words{
    width: 40vw;
    text-indent: 2em;
    padding: 1vw;
    text-align: left;
    overflow:hidden; /*超出部分隐藏*/
    text-overflow:ellipsis;/*显示省略号来代表被修剪的文本*/
    min-width: 447px;
    color: rgb(91,97,120);
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.words>a{
    text-decoration: none;
    color: rgb(91,97,120);

}
.images{
    width: 60%;
    height: 100%;
    border-radius: 1vw;
}
.br{
    width: 100%;
    border-radius: 1vw;
}
</style>
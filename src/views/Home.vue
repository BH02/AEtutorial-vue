<template>
    <div class="home">
        <div class="topPic"></div>
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
                    第二段介绍
                </div>
                <div class="images" v-viewer>
                    <img src="../assets/aeui4.png" class="br">
                </div>
            </div>
            <div class="content">
                <div class="images" v-viewer>
                    <img src="../assets/aeui4.png" class="br">
                </div>
                <div class="words">
                    第三段介绍
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.home{
    width: 100vw;
    margin: 0 auto;
    padding: 40px 0;
    background-image: url('../assets/aeui1+2.png');  
    background-repeat: repeat;
    background-size: 120%;
    background-position-x: -10vw;
    background-position-y: -10vh;
}
.main{
    width: 90vw;
    margin: 0 auto;
}
.content{
    width: 60vw;
    display: flex;
    justify-content: center;
    margin: 0px auto;
    box-shadow: 5px 5px 10px 5px #0005;
    border-radius: 1vw;
    min-width: 763px;
    background-color: rgb(21,36,60);
}
.content:nth-child(2){
    margin: 40px auto;
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
}
.images{
    width: 41%;
    height: 100%;
    border-radius: 1vw;
}
.br{
    width: 100%;
    border-radius: 1vw;
}
</style>
<template>
  <div id="app">
    <header>
        <div class="box">
            <div class="icon">
                <img src="./assets/Db1.png" alt="AE icon">
                <!-- <span>After effcts</span> -->
            </div>
            <div class="navBar">
                <ul>
                    <router-link to="/">首页</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/">预留位置</router-link>
                    <router-link to="/">预留位置</router-link>
                    <router-link to="/">预留位置</router-link>
                </ul>
            </div>
        </div>
    </header>

    <router-view/>
    
    <footer>
        <div class="box">           
            <span>Copyright © 2021 </span><a href="https://github.com/BH02">BH02</a>
        </div>
    </footer>
  </div>
</template>

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
    margin-bottom: 70px;
    box-shadow: 0px 0px 20px -10px black;

}
header>.box{
    height: 80px;
}
main{
    width: 90vw;
    margin: 0 auto;
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
    color: rgb(136,136,136);
    box-sizing: border-box;
}
.navBar>ul>a:hover{
    border-bottom: 3px solid rgb(136,136,136);
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
</style>

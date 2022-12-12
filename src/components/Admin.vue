<template>
    <div class="bigbox">
        <div class="box">
            <router-link to="/Set/setArt" class="url">
                <span>文章</span>
            </router-link>
            <router-link to="/Set/setUserAd" class="url">
                <span>用户</span>
            </router-link>
            <router-link to="/Set/setPic" class="url">
                <span>图片</span>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.url{
    text-decoration: none;
    color: #fff8;
    margin: 0 5vw;
}
.bigbox{
    width: 100%;
    font-size: 3vh;
}
.box{
    width: 100%;
    height: 70px;
    border-radius: 1vw;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 20%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    color: #fff8;
}
</style>
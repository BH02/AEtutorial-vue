<template>
    <div class="top">
        <searchBar></searchBar>
        <userInfo></userInfo>
    </div>
</template>
<script>
import searchBar from '../components/searchBar.vue'
import userInfo from '../components/userInfo.vue'
export default ({
    name:'uiTop',
    components:{
        searchBar,
        userInfo
    }
})
</script>

<style scoped>
.top{
    width: 100%;
    height: 7vh;
    border-radius: 1vw;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 20%);
    display: flex;
    justify-content: start;
    align-items: center;
}
</style>
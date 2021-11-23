<template>
    <div class="top">
        <backBtn v-if="$store.state.backBtnVisible"></backBtn>
        <searchBar v-if="!$store.state.backBtnVisible"></searchBar>
        <userInfo class="info"></userInfo>
    </div>
</template>
<script>
import backBtn from '../components/backBtn.vue'
import searchBar from '../components/searchBar.vue'
import userInfo from '../components/userInfo.vue'
export default ({
    name:'uiTop',
    components:{
        searchBar,
        userInfo,
        backBtn
    },
    created(){
        this.$store.commit('showBackBtn',false)
    }
})
</script>

<style scoped>
.top{
    width: 100%;
    height: 70px;
    border-radius: 1vw;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 20%);
    display: flex;
    justify-content: start;
    align-items: center;
}
.info{
    position: absolute;
    right: 0;
}
@media screen and (max-width:1150px) {
    .info{
        right: 100px;
    }
}
</style>
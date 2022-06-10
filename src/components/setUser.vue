<template>
    <div class="">
        用户设置
    </div>
</template>

<script>
export default {
    created(){
        this.$axios.get("/api/user/search/0").then(res=>{
            console.log(res.data);
        })
    }
}
</script>

<style scoped>
div{
    color: #fff8;
}
</style>
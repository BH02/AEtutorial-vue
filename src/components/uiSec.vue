<template>
    <div class="box">
        {{msg}}
    </div>
</template>

<script>
export default {
    name:'uiSec',
    props:[
        'msg'
    ]
}
</script>

<style scoped>
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
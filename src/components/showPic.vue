<template>
    <div class="box br">
        <div class="images" v-viewer>
            <img v-for="src in images" :key="src" :src="src" class="br">
        </div>
        <div class="content">{{postSrc.content}}</div>
    </div>
</template>

<script>
// import bus from '../router/bus'
export default ({
    name:'showPic',
    data () {
        return {
            images: []
        };
    },
    props :[ 
        'postSrc'
    ],
    mounted(){
        this.images = [this.postSrc.src]
        // bus.$on('picList',()=>{

        // })
    }
})
</script>

<style scoped>
.br{
    border-radius: 1vw;
}
.box{
    width: 44%;
    margin: 20px; 
    background-color: rgba(146,151,179,13%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 20%);
    transition: .2s linear;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    width: 95%;
}
.content{
    width: 95%;
    text-align: right;
    text-indent: 2em;
    margin: 10px;
    color: white;
}
</style>
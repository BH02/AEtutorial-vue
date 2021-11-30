<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="pic in picList" :key="pic.id">
        <img :src="pic.url">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop:true,
        autoplay:3000,
      },
      picList:[
        {
          id:'00',
          url:require('../assets/slide_1.gif')
        },
        {
          id:'01',
          url:require('../assets/loop2.png')
        },
        {
          id:'02',
          url:require('../assets/loop3.png')
        },
        {
          id:'03',
          url:require('../assets/slide_10.gif')
        },
        {
          id:'04',
          url:require('../assets/slide_7.gif')
        },
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style scoped>
.swiper-container{
    width: 80%;
    height: 40vh;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 1vw;
}
.swiper-slide{
    width: 100%;
}
.swiper-slide>img{
    width: 100%;
}
</style>
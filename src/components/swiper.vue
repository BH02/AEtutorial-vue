<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
        <img src="../assets/slide_1.gif" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/loop2.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/loop3.png" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/slide_10.gif" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/slide_7.gif" alt="">
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
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
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
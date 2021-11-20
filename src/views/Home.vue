<template>
  <div class="home">
    home
    <HelloWorld msg='innerMsg'/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
    }
  },
  methods:{

  }
}
</script>

<template>
  <div class="conBox br">
    <div class="red br"></div>
    <div class="tittle br">这里是标题</div>
    <div class="words">文章内容</div>
    <div class="btn">详情</div>
  </div>
</template>

<script>
export default {
  name: 'contentBox',
}
</script>

<style scoped>
.br{
  border-radius: 1vw;
}
.conBox{
  width: 44%;
  height: 500px;
  margin: 20px; 
  background-color: rgba(255, 255, 255, 10%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 20%);
  transition: .2s linear;
  padding: 10px;
}
.conBox:hover{
    background-color: rgba(0, 0, 0, 20%);
    border: 1px solid rgba(0, 0, 0, 10%);
}
.red{
  width: 80px;
  height: 80px;
  background-color: red;
  display: inline-block;
  margin-right: 10px;
}
.tittle{
  width: 70%;
  height: 40px;
  display: inline-block;
  font-size: 2rem;
  color: white;
}
.words{
  width: 90%;
  height: 60%;
  margin: 20px auto;
  text-align: left;
  text-indent: 2em;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 50%);
}
.btn{
  width: 80px;
  height: 40px;
  border-radius: 23px;
  border: 2px solid rgb(95, 95, 255);
  line-height: 40px;
  color: white;
  font-size: 20px;
  float: right;
  margin-right: 25px;
  transition: .2s linear;
}
.btn:hover{
  background-color: rgb(95, 95, 255);
}
@media screen and (max-width:1150px) {
  .conBox{
    width: 90%;
  }
}
</style>

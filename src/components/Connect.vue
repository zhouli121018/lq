<template>
  <div id="connect">
      <div>
          <img class="img-responsive" src="../assets/img/contact.jpg" alt="联系我们">
      </div>
      <!-- <map-component></map-component> -->
      <div class="text-center map-box">
          <img src="../assets/img/map.png" alt="位置" class="img-responsive">
      </div>
  </div>
</template>
<script>
export default {
  data:function(){
      return {
          msg:"联系我们"
      }
  },
  mounted:function(){
      
  }
  
}
</script>
<style>
    .map-box{
        display:flex;
        justify-content: center;
        padding-top:5%;
    }
</style>
<template>
  <div>
      <div id="product-banner">
          <img class="img-responsive" src="../assets/img/product01.jpg" alt="松原麻将">
      </div>
      <div class="item-box">
          <div v-for="(item,index) in items" :key="index">
            <img class="img-responsive" :src="item.img" :alt="item.alt" >
            <!-- <transition name="move"> -->
            <div class="ab">
            </div>
            <!-- </transition> -->
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data:function(){
      return {
          items:[
              {img:require('../assets/img/item1.png'),alt:'乐战圈',code:'sy.png',top:0},
              {img:require('../assets/img/item2.png'),alt:'乐战圈',code:'sy.png',top:0},
              {img:require('../assets/img/item3.png'),alt:'乐战圈',code:'sy.png',top:0},
              {img:require('../assets/img/item4.png'),alt:'乐战圈',code:'sy.png',top:0},
              ]
      }
  }
}
</script>
<style>
    #product-banner{
        padding-bottom:5% ;
    }
</style>
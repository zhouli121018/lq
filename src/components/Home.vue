<template>
  <div>
      <div class="banner">
          <img class="img-responsive" src="../assets/img/banner.png" alt="longqingyouxi">
      </div>
      <h1 class="text-center">爱游戏 爱生活 爱快乐</h1>
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
              {img:require('../assets/img/item1.png'),alt:'乐战圈',code:'sy.png'},
              {img:require('../assets/img/item2.png'),alt:'松原麻将',code:'sy.png'},
              {img:require('../assets/img/item3.png'),alt:'上林牌苑',code:'sy.png'},
              {img:require('../assets/img/item4.png'),alt:'桔子棋牌',code:'sy.png'}
              ]
      }
  }
}
</script>
<style>
    h1{
        padding:5% 0;
        font-weight: 300;
    }
</style>
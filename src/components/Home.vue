<template>
  <div>
      <div class="banner">
          <img class="img-responsive" src="../assets/img/banner.jpg" alt="longqingyouxi">
      </div>
      <h1 class="text-center">爱游戏 爱生活 爱快乐</h1>
      <div class="item-box">
          <div v-for="(item,index) in items" :key="index">
            <img class="img-responsive" :src="item.img" :alt="item.alt" >
            <!-- <transition name="move"> -->
            <div class="ab" :bg="item.code" :class="{active:item.isActive}" @click="changeActive(item)">
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
              {img:require('../assets/img/item1.png'),alt:'乐战圈',code:'sl',isActive:false},
              {img:require('../assets/img/item2.png'),alt:'松原麻将',code:'sy',isActive:false},
              {img:require('../assets/img/item3.png'),alt:'上林牌苑',code:'sl',isActive:false},
              {img:require('../assets/img/item4.png'),alt:'桔子棋牌',code:'jz',isActive:false},
              {img:require('../assets/img/item5.png'),alt:'建平麻将',code:'jp',isActive:false}
              ]
      }
  },
  methods:{
      changeActive:function(item){
          item.isActive=!item.isActive;
      }
  }
}
</script>
<style>
    h1.text-center{
        padding:5% 0;
        font-weight: 300;
    }
</style>
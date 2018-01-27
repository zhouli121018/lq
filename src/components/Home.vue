<template>
  <div>
      <div class="banner">
          <img class="img-responsive" src="../assets/img/banner.png" alt="longqingyouxi">
      </div>
      <h1 class="text-center">爱游戏 爱生活 爱快乐</h1>
      <div class="item-box">
          <div v-for="(item,index) in items" :key="index">
            <img class="img-responsive" :src="item.img" :alt="item.alt" >
            <transition name="move">
            <div class="ab" :class="{up:item.top==1}"  @mouseenter="slideUp(item)" @mouseleave="slideDown(item)">
            </div>
            </transition>
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
  },
  methods:{
      slideUp:function(o){
          o.top=1;
      },
      slideDown:function(o){
          o.top=0;
      }
  }
}
</script>
<style>
    h1{
        padding:5% 0;
        font-weight: 300;
    }
    .item-box{
        display:flex;
        border:1px solid #f00;
        padding:0 5%;
        justify-content: center;
        align-items: center;
    }
    .item-box div{
        /* width:25%; */
        margin-right:.4%;
        position: relative;
        overflow: hidden;
    }
    .item-box div:after{
        content:"";
        display:block;
        clear: both;
    }
    .item-box div p{
        position: relative;
        /* position: absolute; */
        top:0;
    }
    .item-box .ab{
        position: absolute;
        height:100%;
        width:100%;
        transition: all 3s line;
        background:rgba(0, 0, 0, .5) url('../assets/img/sy.png');
        background-size:100% 100%; 
        top:85%;
    }
    .item-box .ab.up{
        top:0;
    }
</style>
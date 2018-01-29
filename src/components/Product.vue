<template>
  <div>
      <div id="product-banner">
             <div>
                 <img class="img-responsive" v-for="(i,index) in imgs" :key="index" :src="i.imgSrc" :class="{active:activeId==index}" alt="...">
             </div>
      </div>
      <br>
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
              ],
              imgs:[
                  {imgSrc:require('../assets/img/banner01.jpg')},
                  {imgSrc:require('../assets/img/banner02.jpg')},
                  {imgSrc:require('../assets/img/banner03.jpg')}
              ],
              activeId:0,
      }
  },
  methods:{
      showPreview:function($index,imgs,swiperObj){

      }
  },
  mounted:function(){
      var sel=this;
      setInterval(function(){
          sel.activeId++;
          if(sel.activeId==3){
              sel.activeId=0;
          }
      },2500)
  }
}
</script>
<style>
    #product-banner img{
        display:none;
        transition: all 1s ease-in;
    }
  #product-banner img.active{
      display:block;
      transition: all 1s ease-in;
  }
</style>
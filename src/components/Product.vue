<template>
  <div>
      <div id="product-banner">
             <div :style="{height:(bannerHeight+40) +'px'}">
                 <img class="img-responsive" v-for="(i,index) in imgs" :key="index" :src="i.imgSrc" :class="{active:activeId==index}" alt="..." @mouseenter="stopCarousel" @mouseleave="startCarousel">

                <ul>
                    <li v-for="(i,index) in imgs" :key="index" :class="{active:activeId==index}" @click="changeActiveId(index)">{{index+1}}</li>
                </ul> 
             </div>
      </div>
      <br>
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
              ],
              imgs:[
                  {imgSrc:require('../assets/img/banner01.jpg')},
                  {imgSrc:require('../assets/img/banner02.jpg')},
                  {imgSrc:require('../assets/img/banner03.jpg')}
              ],
              activeId:0,
              timer:null,
              bannerHeight: document.body.clientWidth*540/1920
      }
  },
  methods:{
      changeActiveId:function(index){
          this.activeId=index;
          clearInterval(this.timer);
          this.timer=null;
          this.timer=setInterval(this.carousel,3000);
      },
      stopCarousel:function(){
        //   console.log(this.timer)
          clearInterval(this.timer);
          this.timer=null;
      },
      carousel:function(){
          this.activeId++;
          if(this.activeId==3){
              this.activeId=0;
          }
      },
      startCarousel:function(){
          this.timer=setInterval(this.carousel,3000);
      },
      changeActive:function(item){
          item.isActive=!item.isActive;
      
      }
  },
  mounted:function(){
        this.startCarousel();
  }
}
</script>
<style>
#product-banner>div{
    width:100%;
    overflow: hidden;
    position: relative;
    margin-bottom:4em;
}
#product-banner img{
    transition: all .5s ease-in;
    float: left;
    position: absolute;
    z-index: 10;
    opacity: 0;
}
#product-banner img.active{
   z-index: 100; 
   opacity: 1;
}
#product-banner>div ul{
    position: absolute;
    bottom:0;
    display:flex;
    justify-content: center;
    width:100%;
    z-index:150;
}
#product-banner>div ul li{
    padding:.2em .6em;
    border-radius: 50%;
    margin-right:.4em;
    border:1px solid #aaa;
    cursor: pointer;
}
#product-banner>div ul li.active{
    background: #0d8ce8;
    color:#fff;
}
</style>
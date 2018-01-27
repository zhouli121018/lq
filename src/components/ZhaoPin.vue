<template>
  <div id="joinus">
    <div>
        <img src="../assets/img/joinus.jpg" class="img-responsive" alt="加入我们">
    </div>  
    <div class="joinus-box">
        <ul>
            <li v-for="(tem,index) in taps" :class="{active:selected==index}" :key="index"
             @click="changeSelected(index)">{{tem.content}}</li>
        </ul>
        <div class="joinus-item">
            <div id="hot">
                热点岗位
            </div>
            <div id="market">
                市场类
            </div>
            <div id="dev">
                研发类
            </div>
            <div id="fun">
                职能类
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
      return {
          taps:[
              { content:"热点岗位",isActive:1},
              {content:"市场类",isActive:0},
              {content:"研发类",isActive:0},
              {content:"职能类",isActive:0}
          ],
          selected:0
      }
  },
  methods:{
      changeSelected:function(tem){
          console.log(tem);
        this.selected=tem;
        console.log(this.selected)
      }
  }
}
</script>
<style>
    .joinus-box{
        padding:5% 20%;
    }
    .joinus-box>ul{
        display:flex;
        border:1px solid #e0e0e0;
        align-items: center;
        border-right:none;
    }
    .joinus-box>ul>li{
        border-right:1px solid #e0e0e0;
        width:25%;
        padding:3% 4%;
        text-align: center;
        font-size:1.2em;
    }
    .joinus-box>ul>li.active{
        background: #0d8ce8;
        color:#fff;
    }
</style>
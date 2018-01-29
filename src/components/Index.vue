<template>
  <div>
      <div id="header">
            <div class="img-box">
                <img class="img-responsive" src="../assets/img/logo.png" alt="longqingyouxi">
            </div>
            
            <ul>
                <li v-for="(l,index) in tabs" :key="index" @click="changeSelected(index)" :class="{active:selected==index}">
                    <router-link :to="l.link"  >{{l.content}}</router-link> 
                </li>
            </ul>
      </div>
      <div id="content">
          <router-view></router-view>
      </div>
      
      <div id="footer">
          <p>深圳前海珑擎网络科技有限公司</p>
          <p>深圳市龙岗区坂田街道杨美路20号魅园207</p>
          <p>粤ICP备17047030号</p>
          <p>热线电话：075589373390</p>
          <p>本公司游戏产品适合18岁以上成年人使用 <span class="red">（家长监护）</span> </p>
      </div>
  </div>
</template>
<script>

import store from '../store'
export default {
  data:function(){
      return {
          tabs:[
              {content:'首  页',link:'/home'},
              {content:'关于我们',link:'/about'},
              {content:'新闻中心',link:'/news'},
              {content:'产品中心',link:'/product'},
              {content:'招贤纳士',link:'/zhaoPin'},
              {content:'联系我们',link:'/connect'}],
          selected:0,
      }
  },
  methods:{
      changeSelected:function(index){
          this.selected=index;
        //   console.log(this.selected);
      }
  },
  mounted:function(){
      store.state.currentTabIdx=='connect'?this.selected=5:(store.state.currentTabIdx=='about'?this.selected=1:(store.state.currentTabIdx=='news'?this.selected=2:(store.state.currentTabIdx=='prosuct'?this.selected=3:(
          store.state.currentTabIdx=='zhaoPin'?this.selected=4:this.selected=0
      ))))
  }
}
</script>
<style>

    #header{
        padding:10px 0;
        text-align:center;
        display:flex;
        padding:2% 20%;
    }
    #header ul{
        display:flex;
        flex-grow:1;
        justify-content: space-around;
        align-items: center;
    }
    .img-box{
        width:25%;
    }
    #header ul>li{
        /* padding:5px; */
        /* font-weight: bold; */
    }
    #footer{
        text-align:center;
        padding:5%;
    }
    .red{
        color:red;
        font-weight:600;
    }
    #content{
        min-height:500px;
    }
    #header a{
        color:#000;
        font-size:1.1em;
        display: inline-block;
        width:100%;
        height:100%;
        padding:5px;
        text-decoration: none;
        border-bottom:2px solid transparent;
    }
    #header li.active a{
        color:#1DC1EB;
        border-bottom:2px solid #1dc1eb;
    }
    #header li a:hover{
        /* color:#1DC1EB; */
        border-bottom:2px solid #1dc1eb;
    }
</style>
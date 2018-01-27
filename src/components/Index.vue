<template>
  <div>
      <div id="header">
            <div class="img-box">
                <img class="img-responsive" src="../assets/img/logo.png" alt="longqingyouxi">
            </div>
            
            <ul>
                <li v-for="(l,index) in tabs" :key="index">
                    <router-link :to="l.link">{{l.content}}</router-link> 
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
export default {
  data:function(){
      return {
          tabs:[
              {content:'首页',link:'/home'},
              {content:'关于我们',link:'/about'},
              {content:'新闻中心',link:'/news'},
              {content:'产品中心',link:'/product'},
              {content:'招贤纳士',link:'/zhaoPin'},
              {content:'联系我们',link:'/connect'}]
      }
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
        padding:5px;
        /* font-weight: bold; */
    }
    #footer{
        text-align:center;
    }
    .red{
        color:red;
        font-weight:500;
    }
    #content{
        border:1px solid #000;
        /* width:100%; */
        min-height:500px;
    }
</style>
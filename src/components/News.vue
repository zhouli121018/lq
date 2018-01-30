<template>
  <div id="news">
      <div>
          <img class="img-responsive" src="../assets/img/news.jpg" alt="新闻">
      </div>
      <h4>新闻动态</h4>
      <div class="news-item">
          
      </div>
  </div>
</template>
<script>
export default {
  data:function(){
      return {
          msg:"新闻中心"
      }
  }
}
</script>
<style>
    #news h4{
        padding:1% 2% ;
        margin:5% 0;
        font-weight: 800;
        color:#0C76EA;
        border-top:2px dotted #0C76EA;
        border-bottom:2px dotted #0C76EA;
    }
    .news-item{
        padding:0 2%;
    }
    .news-item > p{
        font-size: 1.2em;
        line-height: 2.5;
    }
</style>
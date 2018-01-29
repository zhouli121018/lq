<template>
  <div id="joinus">
    <div>
        <img src="../assets/img/joinus.png" class="img-responsive" alt="加入我们">
    </div>  
    <div class="joinus-box">
        <ul>
            <li v-for="(tem,index) in taps" :class="{active:selected==index}" :key="index"
             @click="changeSelected(index)">{{tem.content}}</li>
        </ul>
        <div class="joinus-item">
            <div id="hot" v-if="this.selected==0">
                <h4>管理培训生</h4>
                <p>岗位要求:</p>
                <p>1、2016-2018年毕业生，全日制本科（毕业2年之内，或985、211学院毕业者优选）；</p>
                <p>2、学习能力强，创新意识强，综合素质良好；</p>
                <p>3、爱游戏，思维活跃，富有创意</p>
                <p>4、勤奋刻苦，适应公司轮岗安排及系统学习</p>
                <p>薪酬待遇：在行业水平之上，具备竞争力</p>
                <p>工作地点：深圳</p>
            </div>
            <div id="market" v-if="this.selected==1">
                <h4>地推专员</h4>
                <p>岗位要求:</p>
                <p>1、有APP推广、销售营销背景工作经验者优先，市场营销类相关专业优先；</p>
                <p>2、性格开朗，思维活跃，诚信正直，充满激情，善于沟通，抗压性强；</p>
                <p>3、熟悉并热爱移动互联网行业，了解手机游戏、APP的基本知识；</p>
                <p>4、有较强的语言表达能力、沟通能力及协调能力，善于观察，有独立分析、思考和解决问题的能力，执行力强；</p>
                <p>5、能适应出差。</p>
                <p>晋升空间：</p>
                <p>运营管理方向：地推专员—地推组长—区域经理—大区经理—地推总监</p>
                <p>业务精英方向：地推专员—中级销售精英—高级销售精英</p>
                <p>工作地点：深圳</p>
            </div>
            <div id="dev" v-if="this.selected==2">
                <h4>2D动画（cocos引擎）</h4>
                <p>岗位要求:</p>
                <p>1、负责棋牌手游角色的动画，UI上按钮特效，牌局中出现的炸弹，文字提示等特效设计制作，并能独立导入cocos引擎。</p>
                <p>2、熟悉Cocos动画的制作，并掌握CocosStudio/flash/spine等编辑器的使用；</p>
                <p>3、有完整的项目经验（2个以上）；</p>
                <p>4、会使用粒子编辑器，并将之转入COCOS项目中；</p>
                <p>5、能够以少量的资源换取炫丽的视觉表现；</p>
                <p>工作地点：深圳</p>
                <hr>
                <h4>资深原画师</h4>
                <p>岗位要求:</p>
                <p>1、负责棋牌项目的角色、场景设计，风格偏时尚日韩写实；</p>
                <p>2、负责项目美术宣传插图绘画；</p>
                <p>3、保证角色的精美度，实用性，有较强的细节表现能力；</p>
                <p>4、按时按质量完成工作，能不断优化工作流程与提升品质；熟悉目前棋牌手游的角色、场景设计风格；</p>
                <p>5、具有5年游戏或动漫相关行业原画设计经验；至少3年以上游戏原画设计经验；</p>
                <p>6、良好的团队合作，沟通能力好，责任心强，有场景经验优先；</p>
                <p>工作地点：深圳</p>
            </div>
            <div id="fun" v-if="this.selected==3">
                <h4>在线推广专员</h4>
                <p>岗位要求:</p>
                <p>1、普通话标准流利，有较强的语言表达和沟通能力；</p>
                <p>2、工作认真负责，头脑清晰，思维敏捷，有良好的服务意识；</p>
                <p>3、性格活泼，服从管理，团队意识强！</p>
                <p>4、 能适应轮班工作制。</p>
                <p>工作地点：深圳</p>
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
        this.selected=tem;
      }
  }
}
</script>
<style>
    /* .joinus-box{
        padding:5% 35%;
    } */
    .joinus-box>ul{
        width:30%;
        margin:4.5em auto;
        display:flex;
        border:1px solid #e0e0e0;
        align-items: center;
        border-right:none;
    }
    .joinus-box>ul>li{
        border-right:1px solid #e0e0e0;
        width:25%;
        padding:3%;
        text-align: center;
        font-size:1.2em;
    }
    .joinus-box>ul>li.active{
        background: #0d8ce8;
        color:#fff;
    }
    .joinus-item>div{
        width:50%;
        margin:0 auto;
        min-height:400px;
        background:#E6F3FD;
        padding:4em;
    }
    .joinus-item>div h4{
        font-weight: bold;
        padding-bottom:2em;
    }
    .joinus-item>div p{
        font-size:1.1em;
        line-height: 3;
    }
    hr{
        border-top:1px solid #9A9A9A;
    }
</style>
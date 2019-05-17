<template>
  <div>
    <!-- ball -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-if="judge" ref="ball"></div>
    </transition>

    <!-- banner-->
    <div class="mui-card">
      <div class="mui-card-content">
        <swiper :banner="goodsInfo" :judge="false"></swiper>
      </div>
    </div>

    <!--购物车-->
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>

      <div class="mui-card-content">
        <span>市场价：￥<del>{{info.market_price}}</del></span>
        <span>销售价：￥<span>{{info.sell_price}}</span></span>
        <div>
          <span>购买数量：</span><el-input-number v-model="num"  :min="1" :max="info.stock_quantity" size="small"></el-input-number>
        </div>
        <mt-button type="primary">立即购买</mt-button>
        <mt-button type="danger" @click="ballJudge">加入购物车</mt-button>
      </div>
    </div>

    <!--商品参数-->
    <div class="mui-card">
      <div class="mui-card-header">商品的详情</div>

      <div class="mui-card-content">
        <p>商品货号：{{info.goods_no}}</p>
        <p>库存情况：{{info.stock_quantity}}</p>
        <p>上架时间：{{info.add_time|timeFileter}}</p>
      </div>
      <div class="mui-card-footer">
        <mt-button size="large" plain type="primary" @click="getDesc">图文介绍</mt-button>
        <mt-button size="large" plain type="danger" @click="getComment">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subComponent/swiper.vue";

export default {
  props: [],
  data() {
    return {
      goodsInfo: [],
      info:{},
      id: this.$route.params.id,
      num:1,
      judge:false
    };
  },
  computed: {},
  created() {
    this.getGoodsInfo();
    this.getInfo();
  },
  mounted() {},
  watch: {},
  methods: {
    getGoodsInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(result => {
          result.data.message.forEach(element => {
            element.img = element.src;
          });
          this.goodsInfo = result.data.message;
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    getInfo(){
      this.$http.get("http://www.liulongbin.top:3005/api/goods/getinfo/"+this.id).then((result) => {
        this.info = result.data.message[0]
      }).catch((err) => {
        console.log(err.message)
      });
    },
    getDesc(){
      this.$router.push({path:"/home/goodsDesc/"+this.id})
    },
    getComment(){
      this.$router.push({path:"/home/goodsComment/"+this.id})
    },
    beforeEnter(el){
      el.style.transform = "translate(0,0)"
    },
    enter(el,done){
      el.offsetWidth
      var ballDist = this.$refs.ball.getBoundingClientRect()// getBoundingClientRect获取元素四边距离顶部和左边的距离
      var badgeDist = document.getElementById("badge").getBoundingClientRect()
      var x = badgeDist.left - ballDist.left
      var y = badgeDist.top - ballDist.top
      el.style.transform = "translate("+ x +"px,"+ y +"px)"
      el.style.transition = "all 1s cubic-bezier(1,-0.13,.97,.55)"
      done()
    },
    afterEnter(el){
      this.judge = !this.judge
    },
    ballJudge(){
      this.judge = !this.judge

      var goodsData = {//定义一个对象，把要共享的数据传递给vuex
        id:this.id,
        count:this.num,
        price:this.info.sell_price,
        zt:true
      }

      this.$store.commit("addCar",goodsData)
    }
  },
  components: {
    swiper
  }
};
</script>

<style scoped>
.mui-card-footer{
  display: block;
}
.mui-card-footer button{
  margin-bottom: 10px;
}
.ball{
  background-color: red;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  top: 331px;
  left: 138px;
  
}
</style>

<template>
  <div>
    <div class="mui-card goodsList" v-for="(item,index) in shopList" :key="item.id">
      <div class="mui-card-content">
        <el-switch v-model="$store.state.car[index].zt" active-color="#13ce66" inactive-color="#ff4949" @change="vualueChange"></el-switch>
        <img :src="item.thumb_path" alt="">
        <div>
          <h6>{{item.title}}</h6>
          <div>
            <span>￥{{item.sell_price}}</span>
            <el-input-number v-model="$store.state.car[index].count"  :min="1" :max="10" size="small" @change="vualueChange"></el-input-number>
            <a href="#" @click.prevent="remove(item.id,index)">删除</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card total">
      <div class="mui-card-content">
        <div>
          <p>总计（不含运费）</p>
          <p>已勾选<span>{{$store.getters.getShopNumbner}}</span>件,总价：<span>￥{{$store.getters.getShopMoney}}</span></p>
        </div>
        <mt-button type="danger">去结算</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopList:[]
    };
  },
  created() {
    this.getShopList()
  },
  methods: {
    getShopList(){
      var car =[]

      this.$store.state.car.forEach(element => {
        car.push(element.id)
      });

      if(car.length<=0){
        return false
      }

      this.$http.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/"+car.join(",")).then((result) => {
        this.shopList = result.data.message
      }).catch((err) => {
        console.log(err.message)
      });
    },
    vualueChange(){
      this.$store.commit("upShop")
    },
    remove(id,i){
      this.$store.commit("removeShop",id)
      this.shopList.splice(i,1)
    }
  },
};
</script>

<style scoped>
.goodsList .mui-card-content{
  display: flex;
  align-items: center;
}
.goodsList .mui-card-content img{
  width: 50px;
  height: auto;
}
.total .mui-card-content{
  display: flex;
  justify-content: space-around;
}
.total .mui-card-content div p span{
  color: red;
}
</style>

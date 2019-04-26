<template>
  <div class="list">
    <div v-for=" item in list" :key="item.id" @click="goLink(item.id)">
      <img :src="item.img_url">
      <h3>{{item.title}}</h3>
      <div class="info">
        <span class="new">￥{{item.sell_price}}</span>
        <span class="old">￥{{item.market_price}}</span>
        <div>
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多````</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index:1,
      list: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList: function() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getgoods?pageindex=" + this.index)
        .then(result => {
          this.list = this.list.concat(result.data.message);
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    getMore:function(){
      this.index++
      this.getGoodsList()
    },
    goLink(id){
      this.$router.push({path:"/home/goodsInfo/"+id})
    }
  }
};
</script>

<style scoped>
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
  }
  .list>div{
    width: 48%;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .list>div img{
    width: 100%;
  }
  .list>div h3{
    font-size: 16px;
  }
  .list>div .info .new{
    color: red;
    font-size: 14px;
  }
  .list>div .info .old{
    font-size: 12px;
    text-decoration: line-through;
    padding-left: 10px;
  }
  .list>div .info>div{
    display: flex;
    justify-content: space-between;
  }
</style>

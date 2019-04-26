<template>
  <div>
    <!-- banner -->
    <swiper :banner="runBoList" :judge="true"></swiper>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻列表</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/imgList">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">图片列表</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品列表</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from "../subComponent/swiper.vue"

export default {
  data() {
    return {
      runBoList: []
    };
  },
  created() {
    this.getRunBo();
  },
  methods: {
    getRunBo: function() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(responen => {
          this.runBoList = responen.data.message;
        })
        .catch(err => {
          Attr("请求出错了"+err.message);
        });
    }
  },
  components:{
    swiper
  }
};
</script>

<style scoped>

</style>

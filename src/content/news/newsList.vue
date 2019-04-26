<template>
  <div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="emit in newsList" :key="emit.id">
        <router-link :to="'/home/newsInfo/'+emit.id">
            <img class="mui-media-object mui-pull-left" :src="emit.img_url">
            <div class="mui-media-body">
                <h5>{{emit.title}}</h5>
                <p class='mui-ellipsis'>
                  <span>时间:{{emit.add_time|timeFileter}}</span>
                  <span>点击:{{emit.click}}次</span>
                </p>
            </div>
        </router-link>
    </li>
</ul>
  </div>
</template>

<script>
export default {
    data() {
      return {
        newsList:[]
      }
    },
    created() {
      this.getNewsList()
    },
    methods: {
      getNewsList:function(){
        this.$http.get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(result => {
          this.newsList = result.data.message
          //console.log(result.data.message)
        }).catch(err => {
          console.log(err.message)
        });
      }
    },
    filters:{
     
    }
}
</script>

<style scoped>
    .mui-ellipsis{
      display: flex;
      justify-content: space-between;
      color: aqua;
    }
</style>

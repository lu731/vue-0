<template>
  <div>
    <div class="top">
      <h3>{{content.title}}</h3>
      <span>时间：{{content.add_time|timeFileter}}</span>
      <span>点击：{{content.click}}次</span>
    </div>
    <hr>

    <vue-preview :slides="list" class="preview"></vue-preview>

    <div class="content" v-html="content.content">

    </div>
    <comment :id="id"></comment>
  </div>
</template>

<script>
import comment from '../subComponent/comment.vue'
export default {
  data() {
    return {
      id:this.$route.params.id,
      content:[],
      list:[]
    }
  },
  created() {
    this.getImgInfo()
    this.getImg()
  },
  methods: {
    getImgInfo:function(){
      this.$http.get("http://www.liulongbin.top:3005/api/getimageinfo/"+this.id).then((result) => {
        this.content = result.data.message[0]
      }).catch((err) => {
        console.log(err.message)
      });
    },
    getImg:function(){  
      this.$http.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id).then((result) => {
        result.data.message.forEach(element => {
          element.msrc = element.src
          element.w=600
          element.h=600
        });
        this.list = result.data.message
        
      }).catch((err) => {
        console.log(err.message)
      });
    }
  },
  components:{
    comment
  }
}
</script>

<style scoped>
  
</style>

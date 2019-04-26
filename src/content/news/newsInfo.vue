<template>
    <div class="newsInfo">
      <div class="list">
        <p>{{newsInfo.title}}</p>
        <div>
          <span>发表时间：{{newsInfo.add_time|timeFileter}}</span>
          <span>点击：{{newsInfo.click}}次</span>
        </div>
      </div>
      <div class="content" v-html="newsInfo.content">

      </div>
      <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import comment from '../subComponent/comment.vue'

export default {
    data() {
      return {
        id:this.$route.params.id,
        newsInfo:[]
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      getInfo:function(){
        this.$http.get("http://www.liulongbin.top:3005/api/getnew/"+this.id).then((result) => {
          this.newsInfo = result.data.message[0]
          //console.log(result.data.message[0].add_time.split("T"))
        }).catch((err) => {
          console.log(err.message+"-------------")
        });
      }
    },
    components:{
      "comment-box":comment
    }
}
</script>

<style>
  .newsInfo {
    padding: 0 5px;
  }
  .newsInfo .list{
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .newsInfo .list p{
    color: red;
    text-align: center;
  }
   .newsInfo .list div{
     display: flex;
     justify-content: space-between;
   }
</style>

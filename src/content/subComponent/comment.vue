<template>
  <div class="comment">
    <h3>热门评论</h3>
    <hr>
    <textarea name="" id="" cols="30" rows="10" maxlength="120" placeholder="最大120给字" v-model="message"></textarea>
    <mt-button type="primary" size="large" @click="submission">提交评论</mt-button>
    <ul>
      <li v-for="(imet,i) in comments" :key="i">
        <span>{{i+1}}楼:&nbsp;&nbsp;用户:{{imet.user_name}}&nbsp;&nbsp;时间:{{imet.add_time|timeFileter}}</span>
        <p>{{imet.content==="undefined"?"该用户是么也没有评论":imet.content}}</p>
      </li>
    </ul>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多````</mt-button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        comments:[],
        page:1,
        message:""
      }
    },created() {
      this.getComments()
    },
    methods: {
      getComments:function(){
        this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+"?pageindex="+this.page).then((result) => {
          this.comments = this.comments.concat(result.data.message)
          //console.log(result.data.message)
        }).catch((err) => {
          console.log(err.message)
        });
      },
      getMore:function(){
        this.page++
        this.getComments()
      },
      submission:function(){
        if(this.message.trim().length==0){
           alert("不能为空")
           return false
        }
        this.$http.post("http://www.liulongbin.top:3005/api/postcomment/"+this.id,{
          content:this.message
        }).then((result) => {
          var data = {
            add_time:new Date(),
            content:this.message,
            user_name:"匿名用户"
          }
          this.comments.unshift(data)
          data = ""
        }).catch((err) => {
          console.log(err.message)
        });
      }

      
    },
    props:["id"]
}
</script>

<style scoped>

</style>

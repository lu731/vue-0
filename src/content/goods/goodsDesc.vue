<template>
    <div>
      <h3>{{desc.title}}</h3>
      <hr>
      <div v-html="desc.content" class="content">

      </div>
    </div>
</template>

<script>
export default {
    props: [

    ],
    data() {
        return {
          id:this.$route.params.id,
          desc:{}
        };
    },
    computed: {

    },
    created() {
      this.getDesc()
    },
    mounted() {

    },
    watch: {

    },
    methods: {
      getDesc(){
        this.$http.get("http://www.liulongbin.top:3005/api/goods/getdesc/"+this.id).then((result) => {
          this.desc = result.data.message[0]
        }).catch((err) => {
          console.log(err.message)
        });
      }
    },
    components: {

    },
};
</script>

<style >
.content tr{
  display: block;
}
.content tr td{
  display: block;
}
.content  img{
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>

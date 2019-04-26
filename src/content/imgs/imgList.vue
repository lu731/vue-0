<template>
  <div>
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
        <div class="mui-scroll" @touchstart="start" @touchmove="move" @touchend="end">
          <a :class="['mui-control-item',itme.id==0?'mui-active':'']" href="#"  v-for="itme in imgList"  :key="itme.id"  @click.prevent="getImg(itme.id),hover($event)" >{{itme.title}}</a>
        </div>
      </div>
    </div>
    <ul>
      <router-link v-for="item in img" :key="item.id" :to="'/home/imgInfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div>
          <p>{{item.title}}</p>
          <p v-html="item.zhaiyao"></p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      Move: 0,
      End: 0,
      imgList: [],
      img: []
    };
  },
  created() {
    this.getImgList();
    this.getImg(0);
  },
  methods: {
    start: function(e) {
      this.Move = parseInt(e.changedTouches[0].pageX);
      //console.log(e.changedTouches[0].pageX)
    },
    move: function(e) {
      var move = parseInt(e.changedTouches[0].pageX);
      move = move - this.Move;
      move = this.End + move;
      e.path[1].style.transform = "translateX(" + move + "px)";
      this.End = move;
      this.Move = parseInt(e.changedTouches[0].pageX);
      //console.log(this.End)
    },
    end: function(e) {
      var num = parseInt(
        ((e.path[1].style.transform || "").split("(")[1] || "").split("px")[0]
      );
      var width = e.path[1].offsetWidth - document.body.offsetWidth;
      if (num > 0) {
        e.path[1].style.transform = "translateX(0px)";
      }
      if (num < -width) {
        e.path[1].style.transform = "translateX(" + -width + "px)";
      }
      //console.log(width+""+num)
    },
    hover: function(e) {
      var array = e.path[1].childNodes;
      array.forEach(element => {
        element.classList.remove("mui-active");
      });
      e.path[0].classList.add("mui-active");
    },
    getImgList: function() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          this.imgList = result.data.message;
          //console.log(result.data.message)
          this.imgList.unshift({ title: "全部", id: 0 });
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    getImg: function(id) {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimages/" + id)
        .then(result => {
          this.img = result.data.message;
          //console.log(result.data.message[0].title + "----" + id);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }
};
</script>

<style scoped>

img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul{
  padding: 0;
}
li{
  list-style: none;
  width: 100%;
  position: relative;
}
li img{
  width: 100%;
}
li div{
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
}
</style>

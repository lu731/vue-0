import Vue from "vue"

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import {Button,Header,Swipe, SwipeItem,Lazyload } from "mint-ui"
Vue.component(Button.name,Button);
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload);

import {InputNumber,Switch} from 'element-ui'
Vue.use(InputNumber);
Vue.use(Switch);

import Vuepreview from 'vue-preview'
Vue.use(Vuepreview)
import  "../css/preview.css"

import moment from 'moment'
Vue.filter("timeFileter",function(value){
  // var rq = (value||"").split("T")
  // var sj = (rq[1]||"").split(".")[0]
  // var time =rq[0] + " " + sj
  return moment(value).format('YYYY MM DD');
})

import "../bli/css/mui.min.css"

console.log("ok")

import APP from "../APP.vue"

import router from "./router.js"

var car = JSON.parse(localStorage.getItem("car")||"[]")
const store = new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
    addCar(state,obj){
      var flag = false//判断是否添加过商品的标记

      state.car.some((item)=>{//查找 car 中是否添加过该商品
        if(item.id==obj.id){ //添加过该商品的话只改变该商品的数量
          item.count+=parseInt(obj.count)
          flag = true
          return true
        }
      })

      if(!flag){//没有添加该商品则添加该商品
        state.car.push(obj)
      }

      localStorage.setItem("car",JSON.stringify(state.car))//把数据存储到本地的 localStorage 中 实现页面刷新数据还在
    },
    upShop(state){
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    removeShop(state,id){
      state.car.forEach((item,index)=>{
        if(item.id==id){
          state.car.splice(index,1)
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      var c = 0
      state.car.forEach((item)=>{
        c +=item.count
      })
      return c
    },
    getShopNumbner(state){
      var number = 0
      state.car.forEach(element => {
        if(element.zt){
          number+=element.count
        }
      });
      return number
    },
    getShopMoney(state){
      var money = 0
      state.car.forEach(element => {
        if (element.zt) {
          money+=(element.count*element.price)
        }
      });
      return money
    }
  }
})


var ve = new Vue({
  el: "#dv",
  data:{
    msl:"123"
  },
  render:function(createElements){//在webpack中可以用render把自定义组件覆盖到原有vue实例上
    return createElements(APP)
  },
  router,
  store
})

//webpack中使用vue
//安装vue包 npm i vue -S
//由于在webpack中推荐使用.vue文件 自定义组件，所以需要安装 能解析这种文件的loader npm i vue-loader vue-template-complier-D
//在main.js中导入vue模块  import Vue from 'vue'
//定义自定义组件并且在main中引入
//并在vue实力中用render 返回自定义组件
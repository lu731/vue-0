import VueRouter from 'vue-router'

import home from '../content/tabbar/home.vue'
import member from '../content/tabbar/member.vue'
import soppcart from '../content/tabbar/soppcart.vue'
import search from '../content/tabbar/search.vue'
import newsList from '../content/news/newsList.vue'
import newsInfo from '../content/news/newsInfo.vue'
import imgList from '../content/imgs/imgList.vue'
import imgInfo from '../content/imgs/imgInfo.vue'
import goodsList from '../content/goods/goodsList.vue'
import goodsInfo from '../content/goods/goodsInfo.vue'
import goodsDesc from '../content/goods/goodsDesc.vue'
import goodsComment from '../content/goods/goodsComment.vue'

var router = new VueRouter({
  routes:[
    {path:"/",redirect:{path:"/home"}},
    {path:"/home",component:home},
    {path:"/member",component:member},
    {path:"/soppcart",component:soppcart},
    {path:"/search",component:search},
    {path:"/home/newsList",component:newsList},
    {path:"/home/newsInfo/:id",component:newsInfo},
    {path:"/home/imgList",component:imgList},
    {path:"/home/imgInfo/:id",component:imgInfo},
    {path:"/home/goodsList",component:goodsList},
    {path:"/home/goodsInfo/:id",component:goodsInfo},
    {path:"/home/goodsDesc/:id",component:goodsDesc},
    {path:"/home/goodsComment/:id",component:goodsComment},
  ],
  linkActiveClass:'mui-active'
})

export default router
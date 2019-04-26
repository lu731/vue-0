<template>
  <div class="APP-Content">
    <mt-header fixed title="VUE-项目">
			<span slot="left" @click="goBack" v-if="flag">
    		<mt-button icon="back">返回</mt-button>
  		</span>
		</mt-header>
    
		<transition>
			<router-view></router-view>
		</transition>
    
    
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email">
        </span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/soppcart">
				<span class="mui-icon mui-icon-contact">
					 <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
			dy:"APP",
			flag:false
    }
	},
	created() {
		if(this.$route.path==="/home"||this.$route.path==="/member"||this.$route.path==="/soppcart"||this.$route.path==="/search"){
				this.flag = false
			}else{
				this.flag = true
			}
	},
	methods: {
		goBack(){
			this.$router.go(-1)
		}
	},
	watch: {
		"$route.path":function(newlavue){

			if(newlavue==="/home"||newlavue==="/member"||newlavue==="/soppcart"||newlavue==="/search"){
				this.flag = false
			}else{
				this.flag = true
			}
		}
	},
}
</script>

<style scoped>
	.APP-Content{
		padding-top: 40px;
		padding-bottom: 60px;
		overflow-x: hidden;
	}
	.mint-header{
		z-index: 999;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
		
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,.v-leave-active{
		transition: all 1s ease;
	}
</style>

<!-- 
可以同时用export 和 export default 向外暴露数据
export default 一个模板只能使用一次
export 使用时接收的名称必须与自定义的名称相同  如果想不同用as定义别名
例： export var id = '123'  外部需要用 import {id as ID} from '路径'
-->
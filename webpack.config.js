const path = require('path')

const webpack = require("webpack")

module.exports = {
  entry:path.join(__dirname,"./src/js/main.js"),//入口 表示webpack要打包的文件
  output:{//出口  表示webpack打包号的文件
    path:path.join(__dirname,"./dist"),//出口文件的genml
    filename:"bundle.js"//出口文件名
  },
  devServer:{//配置webpakc-dev-server的参数
    open:true,//自动打开浏览器
    port:"8080",//指定端口
    contentBase:"./src",//指定托管的根目录
    hot:true,//启动热更新
    host:"192.168.0.103"//指定主机运行的ip
  },
  plugins:[//配置插件的节点
    new webpack.HotModuleReplacementPlugin()//new 一个热更新的启动节点
  ],
  module:{//用于配置所以第三方模块 加载器
    rules:[//所以的第三方模块的 匹配规则
      //loader 的处理顺序是从右往左
      {test:/\.css$/,use:['style-loader','css-loader']},//配置css文件的第三方loader
      
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=50000&name=[name].[ext]'},//配置图片文件的第三方loader
      //loader?以后的为传递的参数  limeit表示如果图片大小超过给定的值就以base64编码格式编码 name=[name].[ext]表示文件路径与名称不转码
    
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的loader

      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//处理ES6高级语法的转换
      //关于babel
      //先按照两套包  npm i babel-core babel-loader@7 babel-plugin-transform-runtime -D（语法的转换器包）       npm i babel-preset-env babel-preset-stage-0 -D（语法的对应关系包）   
      //在根目录下新建.babelec文件
      //配置babelrc文件
      // {
      //   "presets": ["env","stage-0"],
      //   "plugins": ["transform-runtime"]
      // }

      {test:/\.vue$/,use:'vue-loader'}//处理vue文件的loader配置
    ]
  },
  resolve:{
    alias:{//修改Vue 被导入时候的包的路径
      "vue$":"vue/dist/vue.js"
    }
  }
}
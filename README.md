# 项目文档

# vue-preview 缩略图插件  
  地址：https://github.com/LS1231/vue-preview

#  使用手机进行调试
1. 使手机和电脑处于同一WiFi环境下
2. cmd 输入指令 ifconfig  获取WiFi的ip
3. 在webpack.config.js中的 devServer 中添加 host 属性 值为 获取的ip
4. 完成手机调试的配置后可以在手机进行调试

#  git的基本使用
1. git init 把当前文件夹变为一个git仓库
2. git add . 把文件添加到仓库
3. git commit -m "***" 把文件提交到仓库。并有提交说明 -m 后的字符串为提交的说明
4. git status 查看当前仓库的状态
5. git remote add origin src 把当前本地仓库与远程仓库关联 src为远程仓库的地址
6. git push -u origin master 把当前本地仓库同步到远程仓库
7. 补充：
   1. 添加公共密匙：[参考链接](https://blog.csdn.net/feiwutudou/article/details/80578432)
   2. git push错误failed to push some refs to的解决：[参考链接](https://blog.csdn.net/MBuger/article/details/70197532)
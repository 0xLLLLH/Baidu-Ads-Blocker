# Baidu-Ads-Blocker

一个简单的Chrome插件，用于移除百度相关页面上推广和广告。

暂未上架商店，可直接通过源码安装

Chrome设置->更多工具->拓展程序->加载已解压的拓展程序 选择下载解压之后的插件文件夹
如果没看到“加载已解压的拓展程序”选项，请先勾选开发者模式

# 待实现

- [ ] 添加选项控制是否显示搜索结果页右侧栏

- [ ] 去除贴吧广告

- [ ] 去除百度知道广告

- [ ] 自动更新屏蔽列表

# Change Log

* v0.3: 添加选项控制是否显示搜索结果页右侧栏,切换开关样式参考[此处](http://blog.csdn.net/html5_/article/details/47723165)
* v0.2: 使用MutationObserver()实现，参考[shieldBaiduPromotion](https://github.com/qishibo/shieldBaiduPromotion)
* v0.1: 实现基本功能，可屏蔽搜索结果页推广
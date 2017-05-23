# WEB DEMO - alpha (HTML5-VUE版本) 源码导读 - 登堂入市
## 概述
该部分主要向开发者介绍h5 demo的主要页面结构和主要数据层交互，使得开发者可以高度定制h5 demo的UI及交互。如果开发者在阅读本章时有一些配置上的困难，可以回过头去阅读[牛刀小试](./h5-demo-guide-1.md)

## 页面逻辑结构
- h5 demo的所有交互页面均放在src/pages文件夹下
- components文件夹则是一些可复用组件的集合，诸如表情控件、聊天记录组件、导航条、加载框等。
- 本demo在UI交互上大量使用了vux封装了的组件库，参考[vux教程](https://vux.li/#/)。用户也可以根据自己的需求对此进行重新封装或者重写，以满足自身业务需求。

## vue开发相关
- 整个h5 demo所使用的vue框架，在程序编写及数据展示上面，相比于React、Angular2等mvvm框架，会显得更贴近于传统前端的开发习惯。
  - 每一个.vue文件由template、script、style三部分组成，script是必须的，template可以塞入script标签内，也可以独立(本h5 demo都是独立展示的)，style可不展示。是不是特别像一个标准的html结构呢？
  - vue的核心思想即数据驱动，可以把computed、data的数据直接塞入模板中，而不需要像传统前端编程中，需要通过取节点-塞数据完成（框架帮你完成啦~）。
  - 相比于Angular/React的数据流绑定，借助vuex的vue显得更加灵活。通过全局注册vuex插件，任何组件都可以通过this.$store.state共享全局数据，也可以通过this.$store.dispatch申请提交数据请求。而不必困扰于多级组件的数据交互问题。
  - vue的交互方式。参见[vue事件处理](https://cn.vuejs.org/v2/guide/events.html)
  - vue的生命周期。参见[vue生命周期](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)
  - 页面交互都是业务逻辑，就不一一赘述。需要了解h5 demo数据层的可以移步[出神入化](./h5-demo-guide-3.md)
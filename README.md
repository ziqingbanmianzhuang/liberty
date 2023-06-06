# vue_text

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




#### ref属性
1.被用来给元素或了组件注册引用信息(id的替代者）
2.应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象(vc).使用方式:
3.使用方式:打标识:<h1 ref="xxx" >.....</h1>或<School ref="xxx"></Schoo1>获取:this.$refs.xXX2.

#### 配置项props:
<Demo name="xxx"/>
功能:让组件接收外部传过来的数据(1).传递数据
(2).接收数据:
第一种方式（只按收):props: [ " name "]
第二种方式(限制类型）:props:{name : Number}
第三种方式(限制类型、限制必要性、指定默认值):props:{name:i,type:String,/类型required:true,/必要性default:'老王"/默认值}
}
备注: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
若业务需求确实需要修改。那么请复制props的内容到data中一份，然后去修改data中的数据。

#### mixin(m入)
功能:可以把多个组件共用的配置提取成一个混入对象使用方式:
第一步定义混合，例如:{data(){.,methods:f..}
第二步使用混入，例如:(1).全局混入:部Vue.mixin(xxx)(2).居混入: mixins: [ "xxx"]
#### “#插件
功能:用于增强Vue
本质:包含instal1方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的据。
定义插件:
对织install = function (vue,options){
1/ 1.添加全局过滤器
vue.filter(.. . .)
112。添加全局指令vue.directive(... .)
113。配置全局混入(合)Vue.mixin(....)
1/4．添加实例方法
Vue.prototype.$myMethod = function o {.….}Vue.prototype.$myProperty = xXXx
}
使用插件:Vue.use(

##### 1.
组件化编码流程:(1).拆分静态组件:组件要按照功能点拆分，命名不要与html元素冲突。(2).实现动态组件:考虑好数据的存放位否，数据是一个组件在用，还是一些组件在用:
 1).—个组件在用:放在组件自身即可。2).一些组件在用:放在他们共同的父组件上(状态提升)。(3).实现交互:从绑定事件开始。
2.props适用于;(1).父组件==→>子组件通信(2).子组件==>父组件通信（要求父先给子一个函数)
3.使用v-mode时要切记: v-model绑定的值不能是props传过来的值，因为props是不可以修改的!
4.props传过来的若是对象类型的值，修改对象中的属性时ue不会报错，但不推荐这样做。

#### 
webstorage
1.存储内容大小一般支长MB左右(不同浏览器可能还不一样)2浏览嚣端通过 Window.sessionStorage和 Window.localStorage属性来实现本地存储机制。3.相关API:1. xexecxcxxStorage.setItem( " key " , "value" 》;该方法接受一个链和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。2.xxxxStorage-getItem( " person";该方法接受一个键名作为参数。返回健名对应的值。3.施水x×Storage -remaveItem( " key ");该方法接受一个键名作为参数。并把该键名从存储中删除。4.X文文文Storage.clear()该方法会清空存储中的所有数据。1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。2.LocalStorage存储的内容，需要手动消除才会消失。3. xxxxxStorage.getItem(xox)如果xxx对应的value获取不到，那么getltem的返回值是null。4. SON.parse(null)的结果依然是null。

#### 


组件的自定义事件 1.一种组件间通信的方式,适用于:子组件=s>父组件⒉使用场景:A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件〈事件的回调在A中)。3.绑定白定义事件:1.第一种方式，在父组件中:<Demoatguigu="test"/>或<Demo v-on:atguigu="test"/>2.第二种方式，在父组件中:
<Demo ref="demo" />mounted(ithis.$refs . xcx . $on( " atguigu" ,this.test)}3.若想让自定义事件只能触发一次，可以使用once修饰符，或Sonce方法。4.触发白定义事件:this.$emit ( " atguigu " ,数》5.解绑白定义事件 this.$off( " atguigu "》6.组件上也可以绑定原生DOM事件，需要使用native修饰符。7.注意:通过 this.$ref s.x. son("atguigu' ,回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题!|

#### 
全局事件总线(GlobalEventBus) 1.—种组件间通信的方式,适用于任意组件间通信 2.安装全局事件总线;new Vue(ibeforeCreate(){vue.prototype.$bus = this / /安装全局事件总线，$bus就是当前应用的vm),全局事件总线(GlobalEventBus)
1.—种组件间通信的方式,适用于任意组件间通信
2.安装全局事件总线;
new Vue(i
-- - ..-
beforeCreate(){
vue.prototype.$bus = this / /安装全局事件总线，$bus就是当前应用的vm
),
3.使用事件总线;
1.接收数据:A组件想接收数据，则在A组件中给$bus绑定白定义事件，事件的回调留在A组件自身。
methods(
demo(data)[.....-]
心英"。
}
.--·--
mounted( {
this-$bus. $on( " xce×e”, this.demo)}
2.提供数据: this.$bus.emit( " xocoor",数据)
4.最好在beforeDestroy钩子中,用$off去解绑当前组件所用到的事件。|
####

消息订阅与发布(pubsub)
1.—种组件间通信的方式，适用于任意组件间通信。
2.使用步骤:
1.安装pubsub: npm i pubsub-js
2.引入:import pubsub from "pubsub-js"
3.接收数据;A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。
methods(i
demo(data)i......]
mounted({
this-pid = pubsub.subscribe( " xoox " ,this. dema)1/订阿消剑
I
4.提供数据:pubsub .publish ( " xxcx",数据)
5.最好在beforeDestroy钩子中，用PubSub.unsubscribe(pid)去取消订阅。
#### 
1.语法:this.$nextTick(回调函数）2.作用:在下一次DOM更新结束后执行其指定的回调。3.什么时候用;当改变数据后，要基于更新后的新DOM进行某些操作时要在nextTick所指定的回调函数中执行。

#####
在vue.config.js中添加如下配五:devServer :{proxy : "http: //localhost:5000"}1.优点:配置简单，请求资源时直接发给前端(8080)即可。2.缺点:不能配五多个代理，不能灵活的控制请求是否走代理。3.工作方式:若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源)
module . exports = {devServer: proxy:i市api1": {//匹配所有以" / api"开头的请求路径target: "http: f /localhost : seee" ,i/代理目标的基础踏径ehangeorigin; true,pathRewcrite: i"o/ api1": ""}],' / api2 " : {//L配所有以 "/ api"开头的请求路径changeOrigin设置为true时，用务器收到的请求头中的host为: localhost ; 508echangeOrigin设置为false时，服务器收到的请求头中的host为: localhost:8080changeDrigin默认值为true
####
插槽
1.作用:让父组件可以向子组件指定位置插入htm结构，也是一种组件间通信的方式适用于父组件=z=>子组件。2.分类:默认插槽、具名插槽、作用域插樯
3.使用方式;
1.默认插槽:
父组件中:
<category>
<div>html结构1</div>c/Category>
了组件中,
<template>
<div>
<I--定义插槽-->
<slot>韬措默认内容...</slot></div>
<./template>
2.具名插槽:
父组件中:
cCategory>
<template slot="center">
<div>html结构1</div>/template>
<template v-slot:footer>
<div>html结构2</div></template>
/ Category>
3.作用域插槽:1.理解:数据在组件的自身.但根据数据生成的结构需要组件的使用者来决定。(games数据在Category组件中， 但使用数据所遍历出来的结构由App组件决定)2.具体编码:父组件中:<Category><template scope="scopeData",生成的是u1列表2
####

vue-router的理解vue的一个插件库，专门用来实现SPA应用
-6.1.2对SPA应用的理解1.单页Web应用(single page web application,SPA)。2.整个应用只有一个完整的页面。3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新。4.数据需要通过ajax请求获取。
1.什么是路由?1.—个路由就是组映射关系(key - value)2. key为路径, value可能是function或component2路由分刻1.后端路由:2)工作过程:服务器接收到一个请求时,根据请求路径找到配的函数来处理请求,返回响应数据。2.前端路由:1)理解:value是component，用于展示页面内容。2)工作过程:当浏览器的路径改变时。对应的组件就会显示。


####
几个注意点
1.路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹。2.通过切换，"隐藏"了的路由组件，默认是被销毁掉的，需要的时候再去挂载。3.每个组件都有自己的 $route属性，里面存储着自己的路由信息。4.整个应用只有一个router，可以通过组件的 $router属性获取到。

####
8.<router-link>的replace属性
1.作用:控制路由跳转时操作浏览器历史记录的模式
⒉浏览器的历史记录有两种写入方式:分别为push和replace ， push是追加历史记录，(replace是替换当前记录I路由跳转时候默认为 push3.如何开启replace模式:<router-link replace ..... . . >Nevs</router-1ink>

####
11.两个新的生命周期钩子1.作用;路由组件所独有的两个钩子，用于捕获路由组件的激活状态。2具体名字:1. activated路由组件被激活时触发。2. deactivated路由组件失活时触发。
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-friend-friend"],{"17c6":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4b177650]{padding-bottom:%?140?%}',""])},4759:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{handleFocus:function(t){uni.navigateTo({url:"friendcfy?t="+t})},handleBad:function(){uni.navigateTo({url:"friendbad"})},handleFriendList:function(){uni.navigateTo({url:"../msg/timeflow"})}}};n.default=e},"57e2":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("cu-custom",{attrs:{isBack:!1,hasBorder:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("好友列表")])],2),i("v-uni-view",{staticClass:"flex solid-bottom padding justify-around bg-white"},[i("v-uni-view",{staticClass:"padding-sm margin-xs flex flex-direction text-center",on:{click:function(n){n=t.$handleEvent(n),t.handleFocus(0)}}},[t._v("43"),i("v-uni-text",{staticClass:"color-gray margin-top-xs"},[t._v("互相关注")])],1),i("v-uni-view",{staticClass:"padding-sm margin-xs flex flex-direction text-center",on:{click:function(n){n=t.$handleEvent(n),t.handleFocus(1)}}},[t._v("10"),i("v-uni-text",{staticClass:"color-gray margin-top-xs"},[t._v("我的关注")])],1),i("v-uni-view",{staticClass:"padding-sm margin-xs flex flex-direction text-center",on:{click:function(n){n=t.$handleEvent(n),t.handleFocus(2)}}},[t._v("6"),i("v-uni-text",{staticClass:"color-gray margin-top-xs"},[t._v("关注我的人")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu-avatar margin-top"},[i("v-uni-view",{staticClass:"cu-item",on:{click:function(n){n=t.$handleEvent(n),t.handleFriendList(n)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("张三丰")])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("张无忌")])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("张翠山")])],1)],1)],1),i("cu-tab",{attrs:{activeIndex:"2"}})],1)},a=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a})},"5e91":function(t,n,i){"use strict";i.r(n);var e=i("4759"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,function(){return e[t]})}(s);n["default"]=a.a},"703f":function(t,n,i){"use strict";var e=i("cdc1"),a=i.n(e);a.a},"93a8":function(t,n,i){"use strict";i.r(n);var e=i("57e2"),a=i("5e91");for(var s in a)"default"!==s&&function(t){i.d(n,t,function(){return a[t]})}(s);i("703f");var c=i("2877"),u=Object(c["a"])(a["default"],e["a"],e["b"],!1,null,"4b177650",null);n["default"]=u.exports},cdc1:function(t,n,i){var e=i("17c6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("8eb9efce",e,!0,{sourceMap:!1,shadowMode:!1})}}]);
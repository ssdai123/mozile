(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-homedetail"],{"190b":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("3b8d")),a=n(i("62d2")),o={data:function(){return{baseurl:"",isShow:!1,nav2Show:!1,detail:{},jxuser:{},isJoin:!1,joinlist:[]}},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(e){var i,n,r,o,s,c,u,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),this.baseurl=this.global.baseUrl,i=e.id,t.next=5,a.default.generalGET(this.global.baseUrl+"selectJxActDetail?jxactid="+i);case 5:if(n=t.sent,console.log(n),r=n.data.JxAct,r.baomingstartime=this.GetTime(r.baomingstartime),r.baomingendtime=this.GetTime(r.baomingendtime),r.pic1=JSON.parse(r.pic1),this.detail=r,o=n.data.jxuser,this.jxuser=o,s=n.data.JxActParticipate,c=null!=this.userinfo?this.userinfo.phone:"",u=s.length,u>0)for(this.joinlist=s,l=0;l<u;l++)s[l].jxmember.phone==c&&(this.isJoin=!0);case 18:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),methods:{joinEdu:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(this.token),!this.token){t.next=9;break}return t.next=4,a.default.generalGET(this.global.baseUrl+"/canyujiaoyu",{id:e},{token:this.token});case 4:i=t.sent,console.log(i),"OK"==i.data.code&&(this.isJoin=!0,uni.showToast({title:"参与成功"}),console.log(this.userinfo),this.joinlist.push({jxmember:this.userinfo})),t.next=10;break;case 9:uni.showToast({title:"请登录后再参与"});case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),coverHide:function(){this.isShow=!1},navShowFn:function(){this.nav2Show=!0},navHideFn:function(){this.nav2Show=!1},handleJoinList:function(t){uni.navigateTo({url:"joinlist?id="+t})}}};e.default=o},"27c5":function(t,e,i){"use strict";i.r(e);var n=i("190b"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},"2d04":function(t,e,i){var n=i("776c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("9e0c79e4",n,!0,{sourceMap:!1,shadowMode:!1})},"3b8d":function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return o});var n=i("795b"),r=i.n(n);function a(t,e,i,n,a,o,s){try{var c=t[o](s),u=c.value}catch(l){return void i(l)}c.done?e(u):r.a.resolve(u).then(n,a)}function o(t){return function(){var e=this,i=arguments;return new r.a(function(n,r){var o=t.apply(e,i);function s(t){a(o,n,r,s,c,"next",t)}function c(t){a(o,n,r,s,c,"throw",t)}s(void 0)})}}},4548:function(t,e,i){"use strict";i.r(e);var n=i("9da8"),r=i("27c5");for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);i("c6a1");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"34f7f077",null);e["default"]=s.exports},"62d2":function(t,e,i){"use strict";var n=i("288e"),r=n(i("795b"));function a(t,e,i){return console.log(e,i),new r.default(function(n,r){uni.request({url:t+"verifyCode",method:"GET",data:{phone:e,phoneCode:i},success:function(t){console.log(t);"OK"==t.data&&n(!0),"codeErr"!=t.data&&""!=t.data||r(new Error("false"))}})}).catch(function(t){return!1})}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"GET";return new r.default(function(r,a){uni.request({url:t,method:n,data:e,header:i,success:function(t){"OK"==t.data||"OK"==t.data.code?r(t):a(t)}})}).catch(function(t){return t})}function s(t){var e=uni.getStorageSync(t);return e?JSON.parse(e):null}t.exports={checkPhoneCode:a,generalGET:o,handleToken:s}},"776c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-ellipsis[data-v-34f7f077]{display:-webkit-box;overflow:hidden;white-space:nowrap!important;-o-text-overflow:ellipsis;text-overflow:ellipsis;word-wrap:break-word;-webkit-line-clamp:1;-webkit-box-orient:vertical}.my-ellipsis-2[data-v-34f7f077]{display:-webkit-box;overflow:hidden;white-space:normal!important;-o-text-overflow:ellipsis;text-overflow:ellipsis;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.nav-right-drop[data-v-34f7f077]{top:12%}.flow-slide[data-v-34f7f077]{margin-top:%?-160?%}.flow-slide uni-swiper[data-v-34f7f077],.flow-slide uni-swiper-item[data-v-34f7f077]{height:%?500?%}.flow-slide uni-swiper-item uni-image[data-v-34f7f077],.flow-slide uni-swiper uni-image[data-v-34f7f077]{width:100%;height:%?500?%}.cu-btn.has-line[data-v-34f7f077]{width:%?170?%;right:%?90?%;font-size:%?24?%;position:relative}.cu-btn.has-line .btn-line[data-v-34f7f077]{width:%?40?%;height:%?10?%;position:absolute;top:%?8?%;left:%?16?%}.user-info[data-v-34f7f077]{background:#fff;padding:%?10?% 0;position:relative;border-top-left-radius:%?30?%;border-top-right-radius:%?30?%;margin-top:%?-30?%;overflow:hidden}.user-info .cu-avatar.lg[data-v-34f7f077]{height:%?120?%;width:%?120?%}.user-info .cu-list.menu-avatar>.cu-item[data-v-34f7f077]:after{height:0;border-bottom:none}.user-info .cu-list.menu-avatar>.cu-item[data-v-34f7f077]{height:%?130?%}.user-info .cu-list.menu-avatar>.cu-item .content[data-v-34f7f077]{left:%?30?%;top:%?20?%}.user-info .focus[data-v-34f7f077]{color:#db2d4e;border:%?1?% solid #db2d4e;width:%?168?%;height:%?48?%;border-radius:%?30?%;text-align:center}.user-info .focus .iconfont[data-v-34f7f077]{margin-right:%?10?%}.user-info .cradit[data-v-34f7f077]{background:#2ddbc4;color:#fff;width:%?170?%;height:%?48?%;font-size:%?26?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:%?6?%;position:absolute;top:%?50?%;right:%?30?%}.user-info .cradit uni-image[data-v-34f7f077]{width:%?26?%;height:%?26?%}.cu-card[data-v-34f7f077]{margin-top:%?20?%}.cu-card .justify-around .iconfont[data-v-34f7f077]{margin-right:%?10?%}.cu-avatar-group[data-v-34f7f077]{direction:ltr}',""])},"96cf":function(t,e){!function(e){"use strict";var i,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=y;var f="suspendedStart",v="suspendedYield",h="executing",d="completed",g={},p={};p[o]=function(){return this};var w=Object.getPrototypeOf,m=w&&w(w(J([])));m&&m!==n&&r.call(m,o)&&(p=m);var x=k.prototype=C.prototype=Object.create(p);_.prototype=x.constructor=k,k.constructor=_,k[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,i,n){var r=new j(y(t,e,i,n));return l.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},E(x),x[c]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},l.values=J,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=i),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),T(i),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;T(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:J(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=i),g}}}function y(t,e,i,n){var r=e&&e.prototype instanceof C?e:C,a=Object.create(r.prototype),o=new G(n||[]);return a._invoke=L(t,i,o),a}function b(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(n){return{type:"throw",arg:n}}}function C(){}function _(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(i,n,a,o){var s=b(t[i],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(u).then(function(t){c.value=t,a(c)},function(t){return e("throw",t,a,o)})}o(s.arg)}var i;function n(t,n){function r(){return new Promise(function(i,r){e(t,n,i,r)})}return i=i?i.then(r,r):r()}this._invoke=n}function L(t,e,i){var n=f;return function(r,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===r)throw a;return F()}i.method=r,i.arg=a;while(1){var o=i.delegate;if(o){var s=O(o,i);if(s){if(s===g)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===f)throw n=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=h;var c=b(t,e,i);if("normal"===c.type){if(n=i.done?d:v,c.arg===g)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=d,i.method="throw",i.arg=c.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=b(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function J(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=i,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9da8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{bgColor:"bg-opacity text-white",hasBorder:!1}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[i("v-uni-view",{staticClass:"nav-icon-cont"},[i("i",{staticClass:"iconfont icon-fenxiang"})])],1),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticClass:"nav-icon-cont margin-right",on:{click:function(e){e=t.$handleEvent(e),t.navShowFn(e)}}},[i("i",{staticClass:"iconfont icon-iconqita"})])],1)],2)],1),t.nav2Show?i("v-uni-view",{staticClass:"cover",on:{click:function(e){e=t.$handleEvent(e),t.navHideFn(e)}}},[i("v-uni-view",{staticClass:"nav-right-drop color-333"},[i("v-uni-view",{staticClass:"cu-list menu radius"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content color-333 flex"},[i("i",{staticClass:"iconfont icon-jinggao color-green margin-right-xs"}),t._v("投诉")])],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content flex"},[i("i",{staticClass:"iconfont icon-chahao color-green margin-right-xs"}),t._v("不感兴趣")])],1)],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"flow-slide"},[i("v-uni-swiper",{attrs:{"indicator-dots":!0}},t._l(t.detail.pic1,function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:t.baseurl+e,mode:""}})],1)],1)}),1)],1),i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"cu-list menu-avatar"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"my-ellipsis"},[t._v(t._s(t.detail.name))]),i("v-uni-view",{staticClass:"flex align-end"},[i("v-uni-text",{staticClass:"color-yellow text-lg margin-right-xs"},[t._v("￥"+t._s(t.detail.baomingfei))]),i("v-uni-text",{staticClass:"color-gray text-xs margin-top-xs"},[t._v("元/位")])],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn round bg-green shadow has-line flex",attrs:{disabled:t.isJoin},on:{click:function(e){e=t.$handleEvent(e),t.joinEdu(t.detail.id)}}},[i("v-uni-image",{staticClass:"btn-line",attrs:{src:"../../static/img/icon/btn_line.png",mode:""}}),t._v(t._s(t.isJoin?"已参与":"立即参与"))],1)],1)],1)],1)],1),t.isShow?i("v-uni-view",{staticClass:"cover",on:{click:function(e){e=t.$handleEvent(e),t.coverHide(e)}}},[i("v-uni-view",{staticClass:"cover-cont",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"flex flex-direction align-center padding"},[i("v-uni-text",{staticClass:"text-sm color-gray"},[t._v("需支付报名费")]),i("v-uni-text",{staticClass:"text-lg margin-top-sm"},[t._v("¥48")])],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("支付方式")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"iconfont icon-zhifubao1 margin-right-xs"}),i("v-uni-text",{staticClass:"text-gray"},[t._v("支付宝")])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("优惠券")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("暂无可用抵用券")])],1)],1)],1),i("v-uni-view",{staticClass:"padding-left-xl padding-right-xl"},[i("v-uni-button",{staticClass:"cu-btn block bg-green margin round lg"},[t._v("立即支付")])],1),i("v-uni-view",{staticClass:"agree padding-bottom flex center"},[i("i",{staticClass:"iconfont icon-duihao color-green margin-right-xs"}),i("v-uni-text",{staticClass:"color-gray"},[t._v("是否同意")]),i("v-uni-text",{staticClass:"color-green"},[t._v("《活动某某协议》")])],1),i("v-uni-view",{staticClass:"line"},[i("v-uni-text",{staticClass:"iconfont icon-chahao",on:{click:function(e){e=t.$handleEvent(e),t.coverHide(e)}}})],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"cu-list menu margin-top-sm"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"iconfont icon-riqi fs-32 margin-right-xs"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("开始时间："+t._s(t.detail.baomingstartime))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"iconfont icon-riqi fs-32 margin-right-xs"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("结束时间："+t._s(t.detail.baomingendtime))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"iconfont icon-dizhi fs-32 margin-right-xs"}),i("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.detail.diyu)+" "+t._s(t.detail.address))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"iconfont icon-renwu fs-32 margin-right-xs"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("教育发起人："+t._s(t.jxuser.nickname))])],1)],1),i("v-uni-view",{staticClass:"cu-item  margin-top-sm"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"iconfont icon-hongqi fs-32 margin-right-xs"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("参与人(")]),i("v-uni-text",{staticClass:"color-green"},[t._v(t._s(t.joinlist.length))]),i("v-uni-text",{staticClass:"text-grey"},[t._v("/"+t._s(t.detail.baomingminimum)+"人)")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"flex align-center color-gray",on:{click:function(e){e=t.$handleEvent(e),t.handleJoinList(t.detail.id)}}},[t._v("更多"),i("v-uni-text",{staticClass:"iconfont icon-shuangjiantou-right fs-32"})],1)],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"cu-avatar-group"},t._l(t.joinlist,function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-avatar round",style:"background-image:url("+t.baseurl+e.jxmember.touxiang+");"})}),1)],1)],1)],1)],1)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},c6a1:function(t,e,i){"use strict";var n=i("2d04"),r=i.n(n);r.a}}]);
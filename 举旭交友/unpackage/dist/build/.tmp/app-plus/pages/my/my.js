(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"3ca2":function(n,t,e){"use strict";(function(n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a")),o=r(e("62d2"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,a,i,o,r){try{var u=n[o](r),c=u.value}catch(f){return void e(f)}u.done?t(c):Promise.resolve(c).then(a,i)}function c(n){return function(){var t=this,e=arguments;return new Promise(function(a,i){var o=n.apply(t,e);function r(n){u(o,a,i,r,c,"next",n)}function c(n){u(o,a,i,r,c,"throw",n)}r(void 0)})}}var f={data:function(){return{uinfo:{touxiang:"../../static/img/im/face/face_4.jpg",nickname:"尚未登录",xinyong:0,balance:0},myListUrl:["/pages/my/mygrowth","/pages/my/myedu","/pages/my/myInfomation","/pages/my/myprefer","/pages/my/myshare","/pages/my/coupon/mycoupon","/pages/my/mydeclear","/pages/my/setting/setting"]}},onShow:function(){var t=c(i.default.mark(function t(){var e,a;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.token){t.next=6;break}return t.next=3,o.default.generalGET(this.global.baseUrl+"ByUserIdGetMember",{},{token:this.token});case 3:e=t.sent,console.log(n(e," at pages/my/my.vue:130")),"OK"==e.data.code&&(a=e.data.jxMember,a.touxiang=this.global.baseUrl+a.touxiang,this.uinfo=a);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{login:function(){this.userinfo||wx.navigateTo({url:"../login/login"})},handleMyList:function(n){var t=this.myListUrl[n];if(n<6&&!this.token){a.showToast({title:"请您登录后再操作"});setTimeout(function(){a.navigateTo({url:"../login/login"})},1e3);return!1}a.navigateTo({url:t})},handleCradit:function(){a.navigateTo({url:"mycradit"})},handleEarn:function(){a.navigateTo({url:"myearn"})},handleCertify:function(){a.navigateTo({url:"../pub/certificate"})},handleMypub:function(){a.navigateTo({url:"./mypub/mypub"})}}};t.default=f}).call(this,e("0de9")["default"],e("6e42")["default"])},"5c8b":function(n,t,e){"use strict";e.r(t);var a=e("f1ea"),i=e("f1bf");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("a7f9");var r=e("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},a7f9:function(n,t,e){"use strict";var a=e("d667"),i=e.n(a);i.a},d667:function(n,t,e){},f1bf:function(n,t,e){"use strict";e.r(t);var a=e("3ca2"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},f1ea:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})}},[["2e48","common/runtime","common/vendor"]]]);
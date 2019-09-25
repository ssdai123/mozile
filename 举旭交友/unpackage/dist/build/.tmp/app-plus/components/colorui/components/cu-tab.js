(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/colorui/components/cu-tab"],{"4ddc":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"cu-tab",data:function(){return{tabUrl:["/pages/home/home","/pages/friend/friend","/pages/pub/pub","/pages/msg/msg","/pages/my/my"]}},props:{activeIndex:{type:String,default:"0"}},computed:{nameArr:function(){for(var t=[],n=1;n<5;n++)n==this.activeIndex?t.push("../../static/img/icon/icon_tab".concat(n,"_active.png")):t.push("../../static/img/icon/icon_tab".concat(n,".png"));return t}},methods:{handleJump:function(n){var e=this.tabUrl[n];2==n?t.navigateTo({url:e}):t.redirectTo({url:e})}}};n.default=e}).call(this,e("6e42")["default"])},"71c9":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return c})},"8aec":function(t,n,e){"use strict";e.r(n);var a=e("71c9"),c=e("f968");for(var u in c)"default"!==u&&function(t){e.d(n,t,function(){return c[t]})}(u);var r=e("2877"),o=Object(r["a"])(c["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},f968:function(t,n,e){"use strict";e.r(n);var a=e("4ddc"),c=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/colorui/components/cu-tab-create-component',
    {
        'components/colorui/components/cu-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("8aec"))
        })
    },
    [['components/colorui/components/cu-tab-create-component']]
]);                

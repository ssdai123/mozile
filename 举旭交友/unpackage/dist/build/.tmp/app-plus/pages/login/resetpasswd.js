(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/resetpasswd"],{"0af3":function(e,t,n){"use strict";n.r(t);var o=n("c711"),r=n("222b");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("ac8f");var a=n("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"222b":function(e,t,n){"use strict";n.r(t);var o=n("2359"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},2359:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a")),i=(a(n("ad5e")),a(n("62d2")));a(n("66fd"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o,r,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(o,r)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function a(e){s(i,o,r,a,u,"next",e)}function u(e){s(i,o,r,a,u,"throw",e)}a(void 0)})}}var c={data:function(){return{phoneNumber:"",code:"",passwd:"",passwd1:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},checkCode:function(){var t=u(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e(123," at pages/login/resetpasswd.vue:83")),t.next=3,i.default.checkPhoneCode(this.global.baseUrl,this.phoneNumber,this.code);case 3:n=t.sent,n||wx.showToast({title:"验证码错误",icon:"none"});case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getCode:function(){var t=this;if(o.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return o.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",o.request({url:this.global.baseUrl+"mobile/getCode",method:"get",data:{phone:this.phoneNumber,type:"reset_pwd"},success:function(n){console.log(e(n," at pages/login/resetpasswd.vue:121")),"OK"==n.data&&t.setTimer()}})}},setTimer:function(){var e=this,t=5;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeBtnColor="#ffffff",e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},doReg:function(){var t=u(r.default.mark(function t(){var n=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(o.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)){t.next=4;break}return o.showToast({title:"请填写正确手机号码",icon:"none"}),t.abrupt("return",!1);case 4:if(""!=this.code){t.next=7;break}return o.showToast({title:"请输入验证码",icon:"none"}),t.abrupt("return",!1);case 7:if(""!=this.passwd){t.next=10;break}return o.showToast({title:"请输入密码",icon:"none"}),t.abrupt("return",!1);case 10:if(""!=this.passwd1){t.next=13;break}return o.showToast({title:"请输入确认密码",icon:"none"}),t.abrupt("return",!1);case 13:if(this.passwd===this.passwd1){t.next=16;break}return o.showToast({title:"两次密码不一致",icon:"none"}),t.abrupt("return",!1);case 16:o.showLoading({title:"提交中..."}),o.request({url:this.global.baseUrl+"doChongZhiPwd",method:"GET",data:{phone:this.phoneNumber,phoneCode:this.code,password:this.passwd},success:function(t){console.log(e(t," at pages/login/resetpasswd.vue:187"));var o="";"OK"==t.data&&(o="密码修改成功",setTimeout(function(){n.toLogin()},200)),"keyErr"==t.data&&(o="手机号错误或已被注册"),wx.showToast({title:o,icon:"none"}),wx.hideLoading()}});case 18:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),toLogin:function(){o.hideKeyboard(),o.redirectTo({url:"login"}),o.navigateBack()}}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},ac8f:function(e,t,n){"use strict";var o=n("d4a3"),r=n.n(o);r.a},c711:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},d4a3:function(e,t,n){}},[["f291","common/runtime","common/vendor"]]]);
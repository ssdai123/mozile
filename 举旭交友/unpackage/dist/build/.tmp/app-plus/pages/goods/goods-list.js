(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods-list"],{"39fb":function(o,t,i){"use strict";i.r(t);var e=i("8b58"),s=i.n(e);for(var n in e)"default"!==n&&function(o){i.d(t,o,function(){return e[o]})}(n);t["default"]=s.a},"666d":function(o,t,i){"use strict";var e=function(){var o=this,t=o.$createElement;o._self._c},s=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return s})},"894f":function(o,t,i){"use strict";i.r(t);var e=i("666d"),s=i("39fb");for(var n in s)"default"!==n&&function(o){i.d(t,o,function(){return s[o]})}(n);i("9118");var d=i("2877"),r=Object(d["a"])(s["default"],e["a"],e["b"],!1,null,null,null);t["default"]=r.exports},"8b58":function(o,t,i){"use strict";(function(o,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{goodsList:[{goods_id:0,img:"../../static/img/goods/p1.png",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:1,img:"../../static/img/goods/p2.png",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:2,img:"../../static/img/goods/p3.png",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:3,img:"../../static/img/goods/p4.png",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:4,img:"../../static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:5,img:"../../static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:6,img:"../../static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:7,img:"../../static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:8,img:"../../static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"},{goods_id:9,img:"../../static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"}],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng"}},onLoad:function(t){console.log(o(t.cid," at pages/goods/goods-list.vue:61")),i.setNavigationBarTitle({title:t.name})},onPageScroll:function(o){o.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var o=this;setTimeout(function(){o.reload(),i.stopPullDownRefresh()},1e3)},onReachBottom:function(){i.showToast({title:"触发上拉加载"});var o=this.goodsList.length;if(o>=40)return this.loadingText="到底了",!1;this.loadingText="正在加载...";for(var t=this.goodsList[o-1].goods_id,e=1;e<=10;e++){var s=t+e,n={goods_id:s,img:"../../static/img/goods/p"+(s%10==0?10:s%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"};this.goodsList.push(n)}},methods:{reload:function(){console.log(o("reload"," at pages/goods/goods-list.vue:112"));this.goodsList=[];for(var t=0,i=1;i<=10;i++){var e=t+i,s={goods_id:e,img:"../../static/img/goods/p"+(e%10==0?10:e%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"杭州市",slogan:"￥45元/人"};this.goodsList.push(s)}},toGoods:function(o){i.showToast({title:"商品"+o.goods_id,icon:"none"}),i.navigateTo({url:"../goods/goods"})},select:function(o){var t=this.orderbyList[o].text+"排序 ";if(this.orderbyList[o].orderbyicon){var e=0==this.orderbyList[o].orderby?"升序":"降序";this.orderbyList[o].selected&&(e=0==this.orderbyList[o].orderby?"降序":"升序",this.orderbyList[o].orderby=0==this.orderbyList[o].orderby?1:0),t+=e}this.orderbyList[o].selected=!0;for(var s=this.orderbyList.length,n=0;n<s;n++)n!=o&&(this.orderbyList[n].selected=!1);i.showToast({title:t,icon:"none"})}}};t.default=e}).call(this,i("0de9")["default"],i("6e42")["default"])},9118:function(o,t,i){"use strict";var e=i("bdc1"),s=i.n(e);s.a},bdc1:function(o,t,i){}},[["0283","common/runtime","common/vendor"]]]);
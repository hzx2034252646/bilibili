webpackJsonp([4],{"26dS":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("4YfN"),n=i.n(a),d=i("Cz8s"),s=i("GQjG"),p=i("9rMa"),y={data:function(){return{tid:0,sub_tid:0,visible:!1,type:[],type_all:s.a}},computed:{type_active:function(){var t=this;return this.type_all.find(function(e){return e.tid===t.tid})}},created:function(){this.type=this.type_all.slice(0,5)},methods:n()({},Object(p.c)(["SET_TID"]),{switchType:function(t){var e=this,i=t.target;if(!i.className){this.tid=Number(i.getAttribute("data-tid")),this.SET_TID(this.tid),this.sub_tid=this.tid,this.visible&&(this.visible=!1);var a=this.type_all.findIndex(function(t){return t.tid===e.tid}),n=this.type_all.length;this.type=a<5?this.type_all.slice(0,5):a>n-3?this.type_all.slice(n-5):this.type_all.slice(a-2,a+3)}},switchSubType:function(t){var e=t.target;this.sub_tid=Number(e.getAttribute("data-tid"))}})},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("ul",{staticClass:"nav-list",on:{click:function(e){t.switchType(e)}}},[t._l(t.type,function(e,a){return i("li",{key:a,class:["nav-item",{"nav-active":e.tid==t.tid}]},[i("span",{attrs:{"data-tid":e.tid}},[t._v(t._s(e.typename))])])}),t._v(" "),i("li",{staticClass:"arrow-down",on:{click:function(e){t.visible=!0}}},[i("span",{staticClass:"arrow-down-icon"})])],2),t._v(" "),i("ul",{class:["nav-list",t.visible?"slide-down":"slide-up"],on:{click:function(e){t.switchType(e)}}},[t._l(t.type_all,function(e,a){return i("li",{key:a,class:["nav-item",{"nav-active":e.tid==t.tid}]},[i("span",{attrs:{"data-tid":e.tid}},[t._v(t._s(e.typename))])])}),t._v(" "),i("li",{staticClass:"arrow-up",on:{click:function(e){t.visible=!1}}},[i("span",{staticClass:"arrow-up-icon"})])],2),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.type_active.sub.length>0,expression:"type_active.sub.length > 0"}],staticClass:"nav-sub-list",on:{click:function(e){t.switchSubType(e)}}},t._l(t.type_active.sub,function(e,a){return i("li",{key:a,class:["nav-sub-item",{"sub-active":e.tid==t.sub_tid}],attrs:{"data-tid":e.tid}},[t._v("\n      "+t._s(e.typename)+"\n    ")])}))])},staticRenderFns:[]};var c=i("vSla")(y,m,!1,function(t){i("T2TM")},"data-v-958031d8",null).exports,l={props:["data"],computed:n()({},Object(p.d)(["tid"])),methods:{play:function(t){this.$router.push({name:"video",params:{aid:t}})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-wrapper",style:{"margin-top":0==t.tid?"1.8rem":"2.4rem"}},t._l(t.data,function(e,a){return i("div",{key:a,staticClass:"list-item",on:{click:function(i){t.play(e.aid)}}},[i("div",{staticClass:"list-cover"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.pic+"@320w_200h.webp",expression:"item.pic + '@320w_200h.webp'"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"list-text"},[t._v("\n      "+t._s(e.title)+"\n    ")])])}))},staticRenderFns:[]};var u=i("vSla")(l,r,!1,function(t){i("d3J2")},"data-v-c1053866",null).exports,o={components:{Header:d.a,Nav:c,List:u},data:function(){return{data:[]}},created:function(){var t=this;this.SET_TID(0),this.$http.get("/",{params:{get:"recommend"}}).then(function(e){t.data=e.data.list})},methods:n()({},Object(p.c)(["SET_TID"]))},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("Header"),this._v(" "),e("Nav"),this._v(" "),e("List",{attrs:{data:this.data}})],1)},staticRenderFns:[]},_=i("vSla")(o,v,!1,null,null,null);e.default=_.exports},GQjG:function(t,e,i){"use strict";e.a=[{tid:0,typename:"首页",sub:[]},{tid:1,typename:"动画",sub:[{tid:1,typename:"推荐"},{tid:24,typename:"MAD·AMV"},{tid:25,typename:"MMD·3D"},{tid:47,typename:"短片·手书·配音"},{tid:27,typename:"综合"}]},{tid:13,typename:"番剧",sub:[{tid:13,typename:"推荐"},{tid:33,typename:"连载动画"},{tid:32,typename:"完结动画"},{tid:51,typename:"资讯"},{tid:152,typename:"官方延伸"}]},{tid:167,typename:"国创",sub:[{tid:167,typename:"推荐"},{tid:153,typename:"国产动画"},{tid:168,typename:"国产原创相关"},{tid:169,typename:"布袋戏"},{tid:170,typename:"资讯"}]},{tid:3,typename:"音乐",sub:[{tid:3,typename:"推荐"},{tid:28,typename:"原创音乐"},{tid:31,typename:"翻唱"},{tid:30,typename:"VOCALOID·UTAU"},{tid:59,typename:"演奏"},{tid:29,typename:"三次元音乐"},{tid:54,typename:"OP/ED/OST"},{tid:130,typename:"音乐选集"}]},{tid:129,typename:"舞蹈",sub:[{tid:129,typename:"推荐"},{tid:20,typename:"宅舞"},{tid:154,typename:"三次元舞蹈"},{tid:156,typename:"舞蹈教程"}]},{tid:36,typename:"科技",sub:[{tid:36,typename:"推荐"},{tid:124,typename:"趣味科普人文"},{tid:122,typename:"野生技术协会"},{tid:39,typename:"演讲•公开课"},{tid:96,typename:"星海"},{tid:95,typename:"数码"},{tid:98,typename:"机械"},{tid:176,typename:"汽车"}]},{tid:4,typename:"游戏",sub:[{tid:4,typename:"推荐"},{tid:17,typename:"单机游戏"},{tid:171,typename:"电子竞技"},{tid:172,typename:"手机游戏"},{tid:65,typename:"网络游戏"},{tid:173,typename:"桌游棋牌"},{tid:121,typename:"GMV"},{tid:136,typename:"音游"},{tid:19,typename:"Mugen"}]},{tid:5,typename:"娱乐",sub:[{tid:5,typename:"推荐"},{tid:71,typename:"综艺"},{tid:137,typename:"明星"},{tid:131,typename:"Korea相关"}]},{tid:119,typename:"鬼畜",sub:[{tid:119,typename:"推荐"},{tid:22,typename:"鬼畜调教"},{tid:26,typename:"音MAD"},{tid:126,typename:"人力VOCALOID"},{tid:127,typename:"教程演示"}]},{tid:23,typename:"电影",sub:[{tid:23,typename:"推荐"},{tid:147,typename:"华语电影"},{tid:145,typename:"欧美电影"},{tid:146,typename:"日本电影"},{tid:83,typename:"其他国家"}]},{tid:11,typename:"电视剧",sub:[{tid:11,typename:"推荐"},{tid:185,typename:"国产剧"},{tid:187,typename:"海外剧"}]},{tid:177,typename:"纪录片",sub:[{tid:177,typename:"推荐"},{tid:37,typename:"人文·历史"},{tid:178,typename:"科学·探索·自然"},{tid:179,typename:"军事"},{tid:180,typename:"社会·美食·旅行"}]},{tid:181,typename:"影视",sub:[{tid:181,typename:"推荐"},{tid:182,typename:"影视杂谈"},{tid:183,typename:"影视剪辑"},{tid:184,typename:"预告·资讯"},{tid:86,typename:"特摄"}]},{tid:155,typename:"时尚",sub:[{tid:155,typename:"推荐"},{tid:157,typename:"美妆"},{tid:158,typename:"服饰"},{tid:164,typename:"健身"},{tid:159,typename:"资讯"}]},{tid:160,typename:"生活",sub:[{tid:160,typename:"推荐"},{tid:138,typename:"搞笑"},{tid:21,typename:"日常"},{tid:76,typename:"美食圈"},{tid:75,typename:"动物圈"},{tid:161,typename:"手工"},{tid:162,typename:"绘画"},{tid:163,typename:"运动"},{tid:174,typename:"其他"}]},{tid:165,typename:"广告",sub:[]}]},T2TM:function(t,e){},d3J2:function(t,e){}});
//# sourceMappingURL=4.87e510e1fecc739dfa99.js.map
webpackJsonp([1],{"0xDb":function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"a",function(){return s});var i=function(t){var e=Math.floor(t/3600),a=Math.floor(t/60)%60,i=t%60,s=e<10?"0"+e+":":e+":";return s+=a<10?"0"+a+":":a+":",s+=i<10?"0"+i:i},s=function(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+(e.getMonth()+1+"-")+e.getDate()}},"5wjd":function(t,e){},"6HO4":function(t,e){},Ddjf:function(t,e){},GQjG:function(t,e,a){"use strict";e.a=[{tid:0,typename:"首页",sub:[]},{tid:1,typename:"动画",sub:[{tid:1,typename:"推荐"},{tid:24,typename:"MAD·AMV"},{tid:25,typename:"MMD·3D"},{tid:47,typename:"短片·手书·配音"},{tid:27,typename:"综合"}]},{tid:13,typename:"番剧",sub:[{tid:13,typename:"推荐"},{tid:33,typename:"连载动画"},{tid:32,typename:"完结动画"},{tid:51,typename:"资讯"},{tid:152,typename:"官方延伸"}]},{tid:167,typename:"国创",sub:[{tid:167,typename:"推荐"},{tid:153,typename:"国产动画"},{tid:168,typename:"国产原创相关"},{tid:169,typename:"布袋戏"},{tid:170,typename:"资讯"}]},{tid:3,typename:"音乐",sub:[{tid:3,typename:"推荐"},{tid:28,typename:"原创音乐"},{tid:31,typename:"翻唱"},{tid:30,typename:"VOCALOID·UTAU"},{tid:59,typename:"演奏"},{tid:29,typename:"三次元音乐"},{tid:54,typename:"OP/ED/OST"},{tid:130,typename:"音乐选集"}]},{tid:129,typename:"舞蹈",sub:[{tid:129,typename:"推荐"},{tid:20,typename:"宅舞"},{tid:154,typename:"三次元舞蹈"},{tid:156,typename:"舞蹈教程"}]},{tid:36,typename:"科技",sub:[{tid:36,typename:"推荐"},{tid:124,typename:"趣味科普人文"},{tid:122,typename:"野生技术协会"},{tid:39,typename:"演讲•公开课"},{tid:96,typename:"星海"},{tid:95,typename:"数码"},{tid:98,typename:"机械"},{tid:176,typename:"汽车"}]},{tid:4,typename:"游戏",sub:[{tid:4,typename:"推荐"},{tid:17,typename:"单机游戏"},{tid:171,typename:"电子竞技"},{tid:172,typename:"手机游戏"},{tid:65,typename:"网络游戏"},{tid:173,typename:"桌游棋牌"},{tid:121,typename:"GMV"},{tid:136,typename:"音游"},{tid:19,typename:"Mugen"}]},{tid:5,typename:"娱乐",sub:[{tid:5,typename:"推荐"},{tid:71,typename:"综艺"},{tid:137,typename:"明星"},{tid:131,typename:"Korea相关"}]},{tid:119,typename:"鬼畜",sub:[{tid:119,typename:"推荐"},{tid:22,typename:"鬼畜调教"},{tid:26,typename:"音MAD"},{tid:126,typename:"人力VOCALOID"},{tid:127,typename:"教程演示"}]},{tid:23,typename:"电影",sub:[{tid:23,typename:"推荐"},{tid:147,typename:"华语电影"},{tid:145,typename:"欧美电影"},{tid:146,typename:"日本电影"},{tid:83,typename:"其他国家"}]},{tid:11,typename:"电视剧",sub:[{tid:11,typename:"推荐"},{tid:185,typename:"国产剧"},{tid:187,typename:"海外剧"}]},{tid:177,typename:"纪录片",sub:[{tid:177,typename:"推荐"},{tid:37,typename:"人文·历史"},{tid:178,typename:"科学·探索·自然"},{tid:179,typename:"军事"},{tid:180,typename:"社会·美食·旅行"}]},{tid:181,typename:"影视",sub:[{tid:181,typename:"推荐"},{tid:182,typename:"影视杂谈"},{tid:183,typename:"影视剪辑"},{tid:184,typename:"预告·资讯"},{tid:86,typename:"特摄"}]},{tid:155,typename:"时尚",sub:[{tid:155,typename:"推荐"},{tid:157,typename:"美妆"},{tid:158,typename:"服饰"},{tid:164,typename:"健身"},{tid:159,typename:"资讯"}]},{tid:160,typename:"生活",sub:[{tid:160,typename:"推荐"},{tid:138,typename:"搞笑"},{tid:21,typename:"日常"},{tid:76,typename:"美食圈"},{tid:75,typename:"动物圈"},{tid:161,typename:"手工"},{tid:162,typename:"绘画"},{tid:163,typename:"运动"},{tid:174,typename:"其他"}]},{tid:165,typename:"广告",sub:[]}]},Khve:function(t,e){},c5pP:function(t,e,a){"use strict";var i={props:["data"],data:function(){return{scrollTop:0}},filters:{count_filter:function(t){return t>=1e4?(t/1e4).toFixed(1)+"万":t}},methods:{play:function(t){this.$router.push({name:"video",params:{aid:t}})}},activated:function(){var t=document.getElementById("search");t&&(t.scrollTop=this.scrollTop)},mounted:function(){var t=this,e=document.getElementById("search");e&&e.addEventListener("scroll",function(){t.scrollTop=this.scrollTop})}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.data&&t.data.length>0,expression:"data && data.length>0"}],staticClass:"search-list"},t._l(t.data,function(e,i){return a("div",{key:i,staticClass:"search-list-item",on:{click:function(a){t.play(e.param)}}},[a("div",{staticClass:"cover"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover||e.pic+"@200w_125h.webp",expression:"item.cover || item.pic + '@200w_125h.webp'"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"user"},[a("span",{staticClass:"icon"}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(e.author||e.owner.name))])]),t._v(" "),a("div",{staticClass:"count"},[a("div",{staticClass:"play"},[a("span",{staticClass:"icon"}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t._f("count_filter")(e.play||e.stat.view)))])]),t._v(" "),a("div",{staticClass:"comment"},[a("span",{staticClass:"icon"}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t._f("count_filter")(e.danmaku||e.stat&&e.stat.danmaku||0)))])])])])])}))},staticRenderFns:[]};var n=a("vSla")(i,s,!1,function(t){a("5wjd")},"data-v-38677b66",null);e.a=n.exports},"pn/O":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("4YfN"),s=a.n(i),n=a("Cz8s"),d=a("9rMa"),p=a("0xDb"),r={data:function(){return{visible:!0}},computed:s()({},Object(d.d)(["video","part"]),{videoUrl:function(){return"https://jx.99yyw.com/99/?url=https://www.bilibili.com/video/av"+this.video.aid+"?p="+this.part}}),filters:{pic_filter:function(t){return t?t+"@400w_300h.webp":""},time_filter:function(t){return t?Object(p.b)(t):"00:00:00"}},methods:s()({},Object(d.b)(["SET_PLAY_HISTORY"]),{play:function(){this.visible=!1,this.SET_PLAY_HISTORY(this.video)}}),watch:{$route:function(){this.visible=!0}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player"},[t.visible?a("div",{staticClass:"player-cover"},[a("img",{attrs:{src:t._f("pic_filter")(t.video.pic),alt:""}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.video.aid,expression:"video.aid"}],staticClass:"player-top"},[t._v("\n      av"+t._s(t.video.aid)+"\n    ")]),t._v(" "),a("div",{staticClass:"time"},[t._v(t._s(t._f("time_filter")(t.video.duration)))]),t._v(" "),a("div",{staticClass:"play-icon",on:{click:t.play}})]):a("embed",{attrs:{src:t.videoUrl,allowfullscreen:"true",type:"video/mp4",width:"100%",height:"100%"}})])},staticRenderFns:[]};var o=a("vSla")(r,c,!1,function(t){a("Ddjf")},"data-v-4db6ec73",null).exports,l=a("GQjG"),v={data:function(){return{visible:!1,popupVisible:!1}},computed:s()({},Object(d.d)(["video","part"]),{desc:function(){return this.video.desc?this.video.desc.replace(/\n/g,"<br>"):""}}),filters:{count_filter:function(t){return t>=1e4?(t/1e4).toFixed(1)+"万":t},date_filter:function(t){return t?Object(p.a)(t):""},type_filter:function(t){return(l.a.find(function(e){return e.sub.findIndex(function(e){return e.tid===t})>-1})||{}).typename}},methods:s()({},Object(d.c)(["SET_PART"]),{play:function(t){if(this.SET_PART(t),this.popupVisible){this.popupVisible=!1;var e=this.$refs["part-list"].getElementsByClassName("part-list-item");this.$refs["part-list"].scrollLeft=e[t-1].offsetLeft-e[0].offsetLeft}}})},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.video.aid,expression:"video.aid"}],staticClass:"video_detail"},[a("div",{staticClass:"title"},[a("p",[t._v(t._s(t.video.title))]),t._v(" "),a("div",{staticClass:"icon"},[a("span",{class:["arrow",{rotate:t.visible}],on:{click:function(e){t.visible=!t.visible}}})])]),t._v(" "),a("div",{staticClass:"info"},[a("span",[t._v(t._s(t.video.owner?t.video.owner.name:""))]),t._v(" "),a("span",[t._v(t._s(t._f("count_filter")(t.video.stat?t.video.stat.view:0))+"次观看")]),t._v(" "),a("span",[t._v(t._s(t._f("count_filter")(t.video.stat?t.video.stat.danmaku:0))+"弹幕")]),t._v(" "),a("span",[t._v(t._s(t._f("date_filter")(t.video.pubdate)))])]),t._v(" "),a("div",{staticClass:"desc",style:{"max-height":t.visible?"10rem":"0"}},[t._m(0),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.desc)}}),t._v(" "),a("div",{staticClass:"nav"},[a("span",{staticClass:"nav-item"},[t._v("主页")]),t._v(" "),a("span",{staticClass:"nav-item"},[t._v(t._s(t._f("type_filter")(t.video.tid)))]),t._v(" "),a("span",{staticClass:"nav-item"},[t._v(t._s(t.video.tname))]),t._v(" "),a("span",[t._v("av"+t._s(t.video.aid))])]),t._v(" "),a("div",{staticClass:"tag-list"},t._l(t.video.tag,function(e,i){return a("span",{key:i,staticClass:"tag-item"},[t._v("\n        "+t._s(e.tag_name)+"\n      ")])}))]),t._v(" "),t.video.videos>1?a("div",{staticClass:"part-list-wrapper"},[a("div",{ref:"part-list",staticClass:"part-list"},t._l(t.video.pages,function(e,i){return a("div",{key:i,class:["part-list-item",{"part-active":e.page==t.part}],on:{click:function(a){t.play(e.page)}}},[a("p",[t._v(t._s(e.part))])])})),t._v(" "),a("div",{staticClass:"icon",on:{click:function(e){t.popupVisible=!0}}},[a("span",{staticClass:"arrow"})])]):t._e(),t._v(" "),t.video.videos>1?a("div",{directives:[{name:"show",rawName:"v-show",value:t.popupVisible,expression:"popupVisible"}],staticClass:"part-popup-wrapper",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.popupVisible=!1}}},[a("div",{staticClass:"part-popup"},[a("div",{staticClass:"top"},[a("span",[t._v("分集 ("+t._s(t.video.videos)+")")]),t._v(" "),a("span",{staticClass:"close-icon",on:{click:function(e){t.popupVisible=!1}}})]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"part-list"},t._l(t.video.pages,function(e,i){return a("div",{key:i,class:["part-list-item",{"part-active":e.page==t.part}],on:{click:function(a){t.play(e.page)}}},[a("p",[t._v(t._s(e.part))])])}))])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip"},[e("span",{staticClass:"forbid-icon"}),this._v(" "),e("span",[this._v("未经作者授权禁止转载")])])}]};var u=a("vSla")(v,m,!1,function(t){a("Khve")},"data-v-a7464958",null).exports,_=a("c5pP"),y={props:["data"],filters:{date_filter:function(t){return t?Object(p.a)(t):""}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data.replies?a("div",{staticClass:"comment"},[a("div",{staticClass:"top"},[a("span",[t._v("评论（"+t._s(t.data.page.count)+"）")])]),t._v(" "),a("div",{staticClass:"comment-list"},t._l(t.data.replies,function(e,i){return a("div",{key:i,staticClass:"comment-list-item"},[a("div",{staticClass:"avatar"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.member.avatar+"@60w_60h.webp",expression:"item.member.avatar+'@60w_60h.webp'"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"wrapper"},[a("p",{staticClass:"user"},[t._v(t._s(e.member.uname))]),t._v(" "),a("span",{staticClass:"date"},[t._v(t._s(t._f("date_filter")(e.ctime)))]),t._v(" "),a("p",{staticClass:"content"},[t._v("\n          "+t._s(e.content.message)+"\n        ")])])])}))]):t._e()},staticRenderFns:[]};var h=a("vSla")(y,f,!1,function(t){a("6HO4")},"data-v-4e727720",null).exports,b={name:"video_player",components:{Header:n.a,VideoPlayer:o,VideoDetail:u,searchList:_.a,VideoComment:h},computed:s()({},Object(d.d)(["video","comment"])),mounted:function(){this.loadData()},methods:s()({},Object(d.c)(["SET_VIDEO","SET_PART","SET_COMMENT"]),{loadData:function(){var t=this;this.SET_VIDEO({}),this.SET_COMMENT({}),this.SET_PART(1),this.$http.get("/",{params:{get:"playurl",aid:this.$route.params.aid}}).then(function(e){t.SET_VIDEO(e.data.data),t.$http.get("/",{params:{get:"comments",aid:t.$route.params.aid,sort:2}}).then(function(e){t.SET_COMMENT(e.data.data)})})}}),watch:{$route:"loadData"}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"video"}},[e("Header"),this._v(" "),e("video-player"),this._v(" "),e("video-detail"),this._v(" "),e("search-list",{attrs:{data:this.video.relates}}),this._v(" "),e("video-comment",{attrs:{data:this.comment}})],1)},staticRenderFns:[]},w=a("vSla")(b,C,!1,null,null,null);e.default=w.exports}});
//# sourceMappingURL=1.b380762d5413ba04218d.js.map
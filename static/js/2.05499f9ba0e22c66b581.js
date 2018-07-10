webpackJsonp([2],{"2QH8":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("4YfN"),i=s.n(a),c=s("9rMa"),n={computed:i()({},Object(c.d)(["search"])),methods:i()({},Object(c.c)(["SET_SEARCH_RESULT","SET_SEARCH_INPUT","SET_SEARCH_VISIBLE"]),Object(c.b)(["SEARCH","GET_SEARCH_DATA"]),{back:function(){this.$router.isBack=!0,this.$router.go(-1)},clear:function(){this.SET_SEARCH_INPUT(""),this.SET_SEARCH_RESULT([]),this.SET_SEARCH_VISIBLE(!0)},keyup:function(t){!this.search.input&&this.clear(),this.search.input&&13===t.which&&(this.$refs["search-input"].blur(),this.SEARCH(this.search.input))}}),mounted:function(){var t=this;document.getElementById("search").addEventListener("scroll",function(){this.scrollTop+this.offsetHeight>=this.scrollHeight&&t.search.input&&t.GET_SEARCH_DATA({keyword:t.search.keyword,page:++t.search.page})})}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"search-input"},[s("span",{staticClass:"search-icon"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search.input,expression:"search.input",modifiers:{trim:!0}}],ref:"search-input",attrs:{type:"text",placeholder:"搜索视频、番剧、UP主或AV号"},domProps:{value:t.search.input},on:{keyup:function(e){t.keyup(e)},input:function(e){e.target.composing||t.$set(t.search,"input",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!!t.search.input,expression:"!!search.input"}],staticClass:"search-close",on:{click:t.clear}})]),t._v(" "),s("span",{staticClass:"cancel-btn",on:{click:t.back}},[t._v("取消")])])},staticRenderFns:[]};var o=s("vSla")(n,r,!1,function(t){s("poQe")},"data-v-404ed93c",null).exports,l={data:function(){return{data:[]}},computed:i()({},Object(c.d)(["search"])),mounted:function(){var t=this;this.$http.get("/",{params:{get:"search",type:"hot",limit:10}}).then(function(e){t.data=e.data.data.list})},methods:i()({},Object(c.b)(["SEARCH"]))},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.search.visible?s("div",{staticClass:"search-hot"},[s("p",[t._v("大家都在搜")]),t._v(" "),s("div",{staticClass:"search-hot-list"},t._l(t.data,function(e,a){return s("span",{key:a,staticClass:"search-hot-item",on:{click:function(s){t.SEARCH(e.keyword)}}},[t._v("\n      "+t._s(e.keyword)+"\n    ")])}))]):t._e()},staticRenderFns:[]};var u=s("vSla")(l,h,!1,function(t){s("IiL8")},"data-v-40896b32",null).exports,d=s("c5pP"),v={computed:i()({},Object(c.d)(["search"])),methods:i()({},Object(c.c)(["SET_SEARCH_HISTORY"]),Object(c.b)(["SEARCH"]),{clearHistory:function(){localStorage.removeItem("search"),this.SET_SEARCH_HISTORY([])}}),mounted:function(){this.SET_SEARCH_HISTORY(JSON.parse(localStorage.getItem("search"))||[])}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.search.visible?s("div",{directives:[{name:"show",rawName:"v-show",value:t.search.history.length>0,expression:"search.history.length>0"}],staticClass:"search-history"},[s("p",[t._v("历史搜索")]),t._v(" "),t._l(t.search.history,function(e,a){return s("div",{key:a,staticClass:"search-history-item",on:{click:function(s){t.SEARCH(e)}}},[s("span",{staticClass:"clock-icon"}),t._v(" "),s("span",[t._v(t._s(e))])])}),t._v(" "),s("p",{staticClass:"clearHistory",on:{click:t.clearHistory}},[t._v("清除历史纪录")])],2):t._e()},staticRenderFns:[]};var _=s("vSla")(v,p,!1,function(t){s("SWND")},"data-v-04fd1a30",null).exports,f={components:{searchInput:o,searchHot:u,searchList:d.a,searchHistory:_},computed:i()({},Object(c.d)(["search"]))},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"search"}},[e("search-input"),this._v(" "),e("search-hot"),this._v(" "),e("search-list",{attrs:{data:this.search.result}}),this._v(" "),e("search-history")],1)},staticRenderFns:[]},C=s("vSla")(f,m,!1,null,null,null);e.default=C.exports},"5wjd":function(t,e){},IiL8:function(t,e){},SWND:function(t,e){},c5pP:function(t,e,s){"use strict";var a={props:["data"],data:function(){return{scrollTop:0}},filters:{count_filter:function(t){return t>=1e4?(t/1e4).toFixed(1)+"万":t}},methods:{play:function(t){this.$router.push({name:"video",params:{aid:t}})}},activated:function(){var t=document.getElementById("search");t&&(t.scrollTop=this.scrollTop)},mounted:function(){var t=this,e=document.getElementById("search");e&&e.addEventListener("scroll",function(){t.scrollTop=this.scrollTop})}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.data&&t.data.length>0,expression:"data && data.length>0"}],staticClass:"search-list"},t._l(t.data,function(e,a){return s("div",{key:a,staticClass:"search-list-item",on:{click:function(s){t.play(e.param)}}},[s("div",{staticClass:"cover"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover||e.pic+"@200w_125h.webp",expression:"item.cover || item.pic + '@200w_125h.webp'"}],attrs:{alt:""}})]),t._v(" "),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"user"},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(e.author||e.owner.name))])]),t._v(" "),s("div",{staticClass:"count"},[s("div",{staticClass:"play"},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t._f("count_filter")(e.play||e.stat.view)))])]),t._v(" "),s("div",{staticClass:"comment"},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t._f("count_filter")(e.danmaku||e.stat&&e.stat.danmaku||0)))])])])])])}))},staticRenderFns:[]};var c=s("vSla")(a,i,!1,function(t){s("5wjd")},"data-v-38677b66",null);e.a=c.exports},poQe:function(t,e){}});
//# sourceMappingURL=2.05499f9ba0e22c66b581.js.map
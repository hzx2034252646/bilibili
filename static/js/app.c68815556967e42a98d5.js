webpackJsonp([6],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("MVMM"),i={data:function(){return{transition:"slide-left"}},methods:{switchSize:function(){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;document.documentElement.style.fontSize=t/7.5+"px"}},mounted:function(){var t=this;this.switchSize(),window.onresize=this.switchSize,window.addEventListener("popstate",function(){t.$router.isBack=!0})},watch:{$route:function(t,e){var n=this.$router.isBack;this.transition=n?"slide-right":"slide-left",this.$router.isBack=!1}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:this.transition}},[e("keep-alive",{attrs:{exclude:"video_player"}},[e("router-view",{staticClass:"page"})],1)],1)],1)},staticRenderFns:[]};var o=n("vSla")(i,r,!1,function(t){n("SPAl")},"data-v-445bf94f",null).exports,s=n("zO6J"),c=[{path:"/",name:"home",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("26dS")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/search",name:"search",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("2QH8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/video/:aid",name:"video",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("pn/O")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/space",name:"space",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("vUfp")];t.apply(null,e)}.bind(this)).catch(n.oe)}}];a.a.use(s.a);var u=new s.a({routes:c}),l=n("3cXf"),p=n.n(l),h=n("9rMa");a.a.use(h.a);var d={GET_SEARCH_DATA:function(t,e){var n=t.state,i=e.keyword,r=e.page;a.a.http.get("/",{params:{get:"search",keyword:i,page:r}}).then(function(t){var e=n.search.result;(t.data.data.items.archive||[]).forEach(function(t){e.push(t)}),n.search.result=e})},SET_SEARCH_HISTORY:function(t,e){var n=t.state,a=[];localStorage.getItem("search")&&(a=JSON.parse(localStorage.getItem("search")));var i=a.findIndex(function(t){return t===e});i>-1&&a.splice(i,1),6===a.length&&a.pop(),a.unshift(e),n.search.history=a,localStorage.setItem("search",p()(a))},SET_PLAY_HISTORY:function(t,e){var n=t.state,a=[];localStorage.getItem("play_history")&&(a=JSON.parse(localStorage.getItem("play_history")));var i=a.findIndex(function(t){return t.aid===e.aid});i>-1&&a.splice(i,1),a.unshift({aid:e.aid,title:e.title,pic:e.pic,time:(new Date).getTime()}),n.play_history=a,localStorage.setItem("play_history",p()(a))},SEARCH:function(t,e){var n=t.state,a=t.dispatch;n.search.page=1,n.search.result=[],n.search.input=e,n.search.keyword=e,n.search.visible=!1,a("SET_SEARCH_HISTORY",e),a("GET_SEARCH_DATA",{keyword:e,page:1})}},f=new h.a.Store({state:{tid:0,search:{result:[],history:[],page:1,keyword:"",input:"",visible:!0},video:{},comment:{},part:1,play_history:[]},mutations:{SET_TID:function(t,e){t.tid=e},SET_SEARCH_RESULT:function(t,e){t.search.result=e},SET_SEARCH_INPUT:function(t,e){t.search.input=e},SET_VIDEO:function(t,e){t.video=e},SET_SEARCH_VISIBLE:function(t,e){t.search.visible=e},SET_SEARCH_HISTORY:function(t,e){t.search.history=e},SET_PLAY_HISTORY:function(t,e){t.play_history=e},SET_PART:function(t,e){t.part=e},SET_COMMENT:function(t,e){t.comment=e}},actions:d}),S=n("aozt"),m={ROOT:"https://api.imjad.cn/bilibili/v2/"},v=n.n(S).a.create({baseURL:m.ROOT}),_={install:function(){a.a.http=v,a.a.prototype.$http=v}},E=n("zdS3"),y=n.n(E);n("yKcf");a.a.use(_),a.a.use(y.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:u,store:f,components:{App:o},template:"<App/>"})},SPAl:function(t,e){},yKcf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c68815556967e42a98d5.js.map
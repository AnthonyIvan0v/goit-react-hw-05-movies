"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{733:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(791),u=n(87),o=n(689),l=n(207),p="movie-details-page_button__bOgoc",d="movie-details-page_wrapperMainInfo__JOBXk",v="movie-details-page_wrapperTextContent__PecEk",f=n(184),h=function(){var e,t=(0,s.useState)(),n=(0,a.Z)(t,2),c=n[0],h=n[1],x=(0,o.UO)().id,m=(0,o.s0)(),g=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/";return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Pg)(x);case 3:t=e.sent,h(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.responce,console.log(n.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{className:p,onClick:function(){return m(g)},children:"Go back"}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(null===c||void 0===c?void 0:c.poster_path)||0,alt:null===c||void 0===c?void 0:c.title}),(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("h2",{children:(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.original_title)||(null===c||void 0===c?void 0:c.name)}),(0,f.jsxs)("p",{children:["Release data : ",null===c||void 0===c?void 0:c.release_date]}),(0,f.jsxs)("p",{children:["Vote average : ",null===c||void 0===c?void 0:c.vote_average]}),(0,f.jsx)("p",{children:"Overview : "}),(0,f.jsx)("p",{children:null===c||void 0===c?void 0:c.overview}),(0,f.jsxs)("p",{children:["Genres :",(null===c||void 0===c?void 0:c.genres)&&(null===c||void 0===c?void 0:c.genres.map((function(e){var t=e.id,n=e.name;return(0,f.jsxs)("span",{children:[" ",n,", "]},t)})))]})]})]}),(0,f.jsxs)("ul",{children:[(0,f.jsx)(u.rU,{to:"cast",state:{from:g},children:(0,f.jsx)("p",{children:"Cast"})}),(0,f.jsx)(u.rU,{to:"reviews",state:{from:g},children:(0,f.jsx)("p",{children:"Reviews"})}),(0,f.jsx)(o.j3,{context:x})]})]})}},207:function(e,t,n){n.d(t,{Hg:function(){return o},Pg:function(){return l},tx:function(){return v},z1:function(){return d},zv:function(){return p}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="b936dbeb2c24233fe8478f46d56a734f",u=i.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{key:s}}),o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/all/week?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=733.15bb2c64.chunk.js.map
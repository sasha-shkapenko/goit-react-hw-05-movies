"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{7135:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(885),a=n(2791),s=n(501),c=n(6871),i=n(4390),u=n(3626),o="MovieDetails_linkBack__CKjEq",l="MovieDetails_wrap__84S6L",p="MovieDetails_img__uOAom",v="MovieDetails_text__RHcc4",f="MovieDetails_link__U+v+7",d="MovieDetails_aditionalInfo__9lA2q",h="MovieDetails_item__mbUY+",m=n(184),_=function(){var e,t,n=(0,c.UO)().movieId,_=(0,a.useState)(null),x=(0,r.Z)(_,2),g=x[0],w=x[1],j=(0,c.TH)();if((0,a.useEffect)((function(){(0,i.t2)(n).then(w)}),[n]),!g)return null;var k=null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",b=g.original_title,y=g.vote_average,N=g.overview,U=g.genres;return(0,m.jsxs)("main",{children:[(0,m.jsx)(s.rU,{to:k,className:o,children:"Go back"}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("img",{src:g?"https://image.tmdb.org/t/p/w300/".concat(g.poster_path):u,className:p,alt:""}),g&&(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:b}),(0,m.jsxs)("p",{className:v,children:["User score: ",y]}),(0,m.jsx)("h2",{children:" Overview"}),(0,m.jsx)("p",{className:v,children:N}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("p",{className:v,children:U.map((function(e){return e.name})).join(", ")})]})]}),(0,m.jsxs)("ul",{className:d,children:[(0,m.jsx)("li",{className:h,children:(0,m.jsx)(s.rU,{to:"cast",state:{from:k},className:f,children:"Cast"})}),(0,m.jsx)("li",{className:h,children:(0,m.jsx)(s.rU,{to:"reviews",state:{from:k},className:f,children:"Reviews"})})]}),(0,m.jsx)(a.Suspense,{children:(0,m.jsx)(c.j3,{})})]})}},4390:function(e,t,n){n.d(t,{Hg:function(){return o},IQ:function(){return p},Jh:function(){return v},gy:function(){return f},t2:function(){return l}});var r=n(5861),a=n(7757),s=n.n(a),c=n(4569),i=n.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var u="f8a2c74c619ae47b0575baa7c8b50025",o=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/all/week?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3626:function(e,t,n){e.exports=n.p+"static/media/user-icon-placeholder-1.d821428d0d6c3020eb37.png"}}]);
//# sourceMappingURL=135.0728e723.chunk.js.map
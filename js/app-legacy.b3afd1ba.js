(function(){"use strict";var e={3697:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main",[n("BoolHeader"),n("BoolMain")],1)])},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"col-12"},[e._m(0),n("BoolSearch")],1)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"logoHeader"},[r("img",{attrs:{src:n(5080),alt:"logo"}})])}],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"search-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.data.inputSearch,expression:"data.inputSearch"}],attrs:{type:"text",id:"searchMovie",placeholder:"Cerca un film o una serie TV"},domProps:{value:e.data.inputSearch},on:{keyup:e.setSearch,input:function(t){t.target.composing||e.$set(e.data,"inputSearch",t.target.value)}}})])},c=[],u=r.Z.observable({baseURI:"https://api.themoviedb.org/3",apiKey:"22a5e9294f2ce2781f4a9ec0b6aed5d1",lg:"it-IT",adult:!1,movie:"/search/movie",tv:"/search/tv",inputSearch:"",moviesFilm:[],seriesTv:[],trending:{moviesWeek:[],seriesWeek:[]}}),p=u,v=(n(1539),n(3210),n(9669)),d=n.n(v),m=[{endpoint:"/trending/tv/week",type:"tv",contents:"seriesWeek"},{endpoint:"/trending/movie/week",type:"movie",contents:"moviesWeek"}];function f(){m.forEach((function(e){d().get("".concat(p.baseURI)+e.endpoint,{params:{api_key:p.apiKey,language:p.lg}}).then((function(t){p.trending[e.contents]=t.data.results})).catch((function(e){console.warn(e.response)}))}))}function g(e){var t=p.inputSearch.trim();""!=t?d().get("".concat(p.baseURI)+e,{params:{api_key:p.apiKey,language:p.lg,query:p.inputSearch,include_adult:p.adult}}).then((function(t){e===p.movie?p.moviesFilm=t.data.results:p.seriesTv=t.data.results})).catch((function(e){console.warn(e.response)})):(p.moviesFilm=[],p.seriesTv=[])}var h={name:"BoolSearch",data:function(){return{data:p}},methods:{setSearch:function(){g(p.movie),g(p.tv)}}},_=h,y=n(1001),w=(0,y.Z)(_,l,c,!1,null,"1f780e07",null),b=w.exports,C={name:"BoolHeader",components:{BoolSearch:b}},x=C,k=(0,y.Z)(x,o,s,!1,null,"1c85f538",null),S=k.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[!e.data.inputSearch.length>0?n("div",[n("CardWrapper",{attrs:{title:"I film del momento",selectArray:e.data.trending.moviesWeek}}),n("CardWrapper",{attrs:{title:"Le serie TV del momento",selectArray:e.data.trending.seriesWeek}})],1):e.data.moviesFilm.length>0?n("div",[n("h1",[e._v("Risultati della ricerca")]),n("CardWrapper",{attrs:{title:"Film",selectArray:e.data.moviesFilm}}),n("CardWrapper",{attrs:{title:"Serie Tv",selectArray:e.data.seriesTv}})],1):n("div",{staticClass:"no__results"},[n("p",[e._v('Nessun risultato per la ricerca di "'+e._s(e.data.inputSearch)+'".')]),n("p",[e._v("Suggerimenti:")]),e._m(0)])])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v(" Prova con parole chiave diverse ")]),n("li",[e._v(" Cerchi un film o un programma TV? ")]),n("li",[e._v(" Prova ad usare il titolo di un film o programma TV ")])])}],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.selectArray.length>0,expression:"selectArray.length > 0 "}],staticClass:"category__section"},[n("h2",{staticClass:"category__title"},[e._v(e._s(e.title))]),n("div",{staticClass:"cards__wrapper"},e._l(e.selectArray,(function(e){return n("CardItem",{key:e.id,attrs:{element:e}})})),1)])])},B=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card__item",style:{backgroundImage:"url("+e.getPoster+")"}},[n("div",{staticClass:"card__overlay"},[n("h3",[e._v(e._s(e.title))]),n("p",[e._v(e._s(e.originalTitle))]),n("figure",{staticClass:"movie__flag"},[n("img",{attrs:{src:e.flags[e.element.original_language]}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.element.vote_average>0,expression:"element.vote_average > 0"}],staticClass:"star__vote"},[n("span",{staticClass:"section__title"},[e._v("Voto: ")]),e._l(5,(function(t){return n("i",{key:t,staticClass:"fa-star",class:t<=e.vote?"fa gold":"far gray"})}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.element.overview,expression:"element.overview !== ''"}],staticClass:"section__overview"},[n("span",{staticClass:"section__title"},[e._v("Overview: ")]),n("p",{staticClass:"overview__description"},[e._v(e._s(e.element.overview))])])])])},j=[],A=(n(8309),{name:"CardItem",props:{element:{type:Object,required:!0}},data:function(){return{data:p,imgBaseURI:"https://image.tmdb.org/t/p/",imgWidth:"w342",flags:{de:n(8165),en:n(3024),es:n(4695),fr:n(8823),it:n(1955),ja:n(5365)}}},computed:{title:function(){return void 0!==this.element.name?this.element.name:this.element.title},originalTitle:function(){return void 0!==this.element.original_name?this.element.original_name:this.element.original_title},getPoster:function(){var e=this.element.poster_path;return null!==e?this.imgBaseURI+this.imgWidth+e:n(1729)},vote:function(){return Math.ceil(this.element.vote_average/2)}}}),E=A,$=(0,y.Z)(E,I,j,!1,null,"c658c9c2",null),Z=$.exports,F={name:"CardWrapper",props:{title:String,selectArray:{type:Array,required:!0}},components:{CardItem:Z},data:function(){return{data:p}}},P=F,M=(0,y.Z)(P,O,B,!1,null,"078ea823",null),R=M.exports,N={name:"BoolMain",components:{CardWrapper:R},data:function(){return{data:p}},created:function(){f()}},U=N,V=(0,y.Z)(U,T,W,!1,null,"ba2d7464",null),H=V.exports,q={name:"App",components:{BoolHeader:S,BoolMain:H}},K=q,L=(0,y.Z)(K,a,i,!1,null,null,null),z=L.exports;r.Z.config.productionTip=!1,new r.Z({render:function(e){return e(z)}}).$mount("#app")},8165:function(e,t,n){e.exports=n.p+"img/de.772b99ae.png"},3024:function(e,t,n){e.exports=n.p+"img/en.811fddb3.png"},4695:function(e,t,n){e.exports=n.p+"img/es.53da2005.png"},8823:function(e,t,n){e.exports=n.p+"img/fr.bc1f9371.png"},1955:function(e,t,n){e.exports=n.p+"img/it.5aca43e2.png"},5365:function(e,t,n){e.exports=n.p+"img/ja.a9830ed2.png"},5080:function(e,t,n){e.exports=n.p+"img/logo.d63ab845.png"},1729:function(e,t,n){e.exports=n.p+"img/notFind.330c704d.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/vue-boolflix/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkvue_boolflix"]=self["webpackChunkvue_boolflix"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3697)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.b3afd1ba.js.map
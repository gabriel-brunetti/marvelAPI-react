(this["webpackJsonpluizalabs-teste"]=this["webpackJsonpluizalabs-teste"]||[]).push([[0],{34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(20),n=a.n(s),i=a(14),o=a(2),l=(a(41),a.p+"static/media/logo.66aae771.svg"),j=(a(42),a(10)),d=a.n(j),b=a(3),u=a(12),m=a(7),h=a(13),O=a.n(h),f=a(35),p=a.n(f),v="20bc8b92eb4880e8ae798fb21fa0536c",x=Number(new Date),g={ts:x,apikey:v,hash:p()(x+"4ded17b1608ac3446de7b25806309710d73284b7"+v)},N=a(37),y=(a(64),function(e,t){if("REMOVE_FAVORITE"===t.type)return e=Object(b.a)(Object(b.a)({},e),{},{favorites:e.favorites.filter((function(e){return e.id!==t.payload})),amount:e.amount--});if("ADD_FAVORITE"===t.type){var a=t.payload.id;return!e.favorites.find((function(e){return e.id===a}))&&e.favorites.length<5?e=Object(b.a)(Object(b.a)({},e),{},{favorites:[].concat(Object(N.a)(e.favorites),[t.payload]),amount:e.amount++}):console.log("her\xf3i j\xe1 favoritado e/ou limite de 5 favoritos, n\xfamero de her\xf3is favoritados: ".concat(e.favorites.length)),e}return e}),F=a(0),w=r.a.createContext(),E=function(e){var t=e.children,a=Object(c.useState)(!1),r=Object(m.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(""),o=Object(m.a)(i,2),l=o[0],j=o[1],h=Object(c.useState)([]),f=Object(m.a)(h,2),p=f[0],v=f[1],x=Object(c.useState)(!0),N=Object(m.a)(x,2),E=N[0],k=N[1],S=Object(c.useState)(!1),_=Object(m.a)(S,2),R=_[0],A=_[1],D=Object(c.useReducer)(y,{loading:!1,favorites:[],amount:0}),I=Object(m.a)(D,2),T=I[0],C=I[1],B=Object(c.useCallback)(Object(u.a)(d.a.mark((function e(){var t,a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)({},l?Object(b.a)({nameStartsWith:l},g):Object(b.a)({},g)),t=Object(b.a)({},E?Object(b.a)({},t):Object(b.a)({orderBy:"-name"},t)),n(!0),e.prev=3,e.next=6,O.a.get("https://gateway.marvel.com/v1/public/characters",{params:t});case 6:a=e.sent,(c=a.data.data.results)?(r=c.map((function(e){var t=e.name,a=e.thumbnail,c=e.id,r=e.resourceURI;return{id:c,name:t,image:"".concat(a.path,"/standard_fantastic.").concat(a.extension),resourceURI:r}})),v(r)):v([]),n(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),n(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])}))),[l,E]);return Object(c.useEffect)((function(){B()}),[l,B]),Object(F.jsx)(w.Provider,{value:Object(b.a)(Object(b.a)({loading:s,heroes:p,setSearchTerm:j,searchTerm:l,setAlphabeticOrder:k,alphabeticOrder:E},T),{},{removeFavorite:function(e){e.stopPropagation(),e.preventDefault();var t=Number(e.target.id);C({type:"REMOVE_FAVORITE",payload:t})},addFavorite:function(e){e.stopPropagation(),e.preventDefault();var t=e.target.name,a=Number(e.target.id),c=document.getElementById("".concat(a,"portrait")).src;C({type:"ADD_FAVORITE",payload:{name:t,id:a,image:c}})},setOnlyFavorites:A,onlyFavorites:R}),children:t})},k=function(){return Object(c.useContext)(w)},S=a.p+"static/media/ic_busca_menor.7d4fff01.svg";function _(){var e=k(),t=e.setSearchTerm,a=e.searchTerm,c=r.a.useRef("");return r.a.useEffect((function(){c.current.focus()}),[]),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"search-container",children:[Object(F.jsx)("img",{src:S,alt:"\xedcone de busca"}),Object(F.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"search-form",children:Object(F.jsx)("input",{type:"text",placeholder:"Procure por her\xf3is",name:"name",id:"name",ref:c,onChange:function(){t(c.current.value)},value:a})})]})})}var R=a.p+"static/media/ic_heroi.401cb5f1.svg",A=a.p+"static/media/favorito_01.4032fb6a.svg",D=a.p+"static/media/favorito_02.d84c4d2f.svg",I=function(){var e=k(),t=e.alphabeticOrder,a=e.setAlphabeticOrder,c=e.heroes,r=e.setOnlyFavorites,s=e.onlyFavorites;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("section",{className:"header",children:[Object(F.jsx)("img",{src:l,alt:"Marvel search heros"}),Object(F.jsx)("h3",{children:"Explore o Universo"}),Object(F.jsx)("p",{children:"Mergulhe no dom\xednio deslumbrante de todos os personagens cl\xe1ssicos que voc\xea ama - e aqueles que voc\xea descobrir\xe1 em breve!"}),Object(F.jsx)(_,{})]}),Object(F.jsxs)("div",{className:"params-wrapper",children:[Object(F.jsx)("span",{children:"Encontrados ".concat(c.length," her\xf3is")}),Object(F.jsxs)("div",{className:"params-order",children:[Object(F.jsx)("img",{src:R,alt:"\xedcone her\xf3i",className:"hero-icon"}),Object(F.jsx)("span",{children:" Ordernar por nome - A/Z"}),Object(F.jsxs)("label",{htmlFor:"orderByName",className:"order-label switch",children:[Object(F.jsx)("input",{type:"checkbox",name:"orderByName",id:"orderByName",className:"order-input",onChange:function(e){!0===t?(e.checked=!0,a(!1)):!1===t&&(e.checked=!1,a(!0))}}),Object(F.jsx)("span",{className:"slider round"})]}),Object(F.jsx)("img",{src:s?A:D,alt:"\xedcone favorito",className:"fav-icon",onClick:function(e){!1===s?r(!0):!0===s&&r(!1)}}),Object(F.jsx)("span",{className:"fav-label",children:"Somente favoritos"})]})]})]})},T=(a(67),a(68),function(e){var t=e.id,a=e.name,c=e.image,r=k(),s=r.removeFavorite,n=r.addFavorite,o=r.favorites;return Object(F.jsx)(i.b,{to:"/hero/".concat(t),children:Object(F.jsxs)("article",{className:"hero-container",children:[Object(F.jsx)("img",{src:c,alt:a,id:"".concat(t,"portrait")}),Object(F.jsxs)("div",{className:"info-wrapper",children:[Object(F.jsx)("span",{children:a}),Object(F.jsx)("img",{src:o.find((function(e){return e.id===t}))?A:D,alt:o.find((function(e){return e.id===t}))?"icone favorito":"\xedcone n\xe3o-favorito",className:"favorite-icon",id:t,name:a,onClick:o.find((function(e){return e.id===t}))?s:n})]})]})})}),C=(a(74),function(){return Object(F.jsx)("div",{className:"loader"})});function B(){var e=k(),t=e.heroes,a=e.loading,r=e.favorites,s=e.onlyFavorites;return Object(c.useEffect)((function(){}),[r]),a?Object(F.jsx)(C,{}):t.length<1?Object(F.jsx)("h2",{className:"section-title",children:"nenhum her\xf3i foi encontrado"}):Object(F.jsx)("main",{className:"heroes-container",children:s?Object(F.jsx)(F.Fragment,{children:r.map((function(e){return Object(F.jsx)(T,Object(b.a)({},e),e.id)}))}):Object(F.jsx)(F.Fragment,{children:t.map((function(e){return Object(F.jsx)(T,Object(b.a)({},e),e.id)}))})})}var V=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{}),Object(F.jsx)(B,{}),Object(F.jsx)("div",{className:"footer"})]})},q=(a(75),a.p+"static/media/ic_quadrinhos.7e8c3213.svg"),M=a.p+"static/media/ic_trailer.a3eecf66.svg",P=a.p+"static/media/avaliacao_on.b50ecbbf.svg";a(76);function U(e){var t=e.url,a=Object(c.useState)([]),s=Object(m.a)(a,2),n=s[0],i=s[1],o=Object(c.useState)([]),l=Object(m.a)(o,2),j=l[0],h=l[1];return r.a.useEffect((function(){var e=Object(b.a)({orderBy:"onsaleDate"},g);function a(){return(a=Object(u.a)(d.a.mark((function a(){var c,r,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.get(t,{params:e});case 3:c=a.sent,(r=c.data.data.results)?(s=r.map((function(e){var t=e.id,a=e.title,c=e.thumbnail;return{id:t,title:a,image:"".concat(c.path,"/portrait_xlarge.").concat(c.extension)}})),i(s),h(!1)):(i(null),h(!1)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0),h(!1);case 12:h(!1);case 13:case"end":return a.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}h(!0),function(){a.apply(this,arguments)}()}),[t]),j?Object(F.jsx)(C,{}):Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"last-releases",children:[Object(F.jsx)("h4",{children:"\xdaltimos lan\xe7amentos"}),Object(F.jsx)("div",{className:"comics-grid",children:n.slice(0,10).map((function(e){return Object(F.jsxs)("article",{className:"comics",children:[Object(F.jsx)("img",{src:e.image,alt:e.title,className:"comic-cover"}),Object(F.jsx)("span",{children:e.title})]},e.id)}))})]})})}var z=a.p+"static/media/logo_menor.55b92de4.svg";function H(){var e=k(),t=e.setSearchTerm,a=e.removeFavorite,c=e.addFavorite,s=e.favorites,n=Object(o.f)().id,l=r.a.useState(!1),j=Object(m.a)(l,2),b=j[0],h=j[1],f=r.a.useState(null),p=Object(m.a)(f,2),v=p[0],x=p[1];if(r.a.useEffect((function(){t("");var e="https://gateway.marvel.com/v1/public/characters/".concat(n);function a(){return(a=Object(u.a)(d.a.mark((function t(){var a,c,r,s,n,i,o,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get(e,{params:g});case 3:a=t.sent,(c=a.data.data.results)?(r=c[0],s=r.name,n=r.description,i=r.thumbnail,o=r.comics,l={name:s,description:n,image:"".concat(i.path,"/standard_fantastic.").concat(i.extension),comics:o},x(l)):x(null),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:h(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}h(!0),function(){a.apply(this,arguments)}()}),[t,n]),b)return Object(F.jsx)(C,{});if(v){var N=v.name,y=v.description,w=v.image,E=v.comics;return Object(F.jsxs)("div",{className:"singleHero-container",children:[Object(F.jsxs)("header",{className:"singleHero-header",children:[Object(F.jsx)(i.b,{to:"/",children:Object(F.jsx)("img",{src:z,alt:"",className:"logo-menor"})}),Object(F.jsx)(_,{})]}),Object(F.jsxs)("section",{className:"hero-section",children:[Object(F.jsxs)("div",{className:"hero-info-wrapper",children:[Object(F.jsxs)("div",{className:"info-title",children:[Object(F.jsx)("h3",{children:N}),Object(F.jsx)("img",{src:s.find((function(e){return e.id===Number(n)}))?A:D,alt:s.find((function(e){return e.id===Number(n)}))?"icone favorito":"\xedcone n\xe3o-favorito",className:"favorite-icon",id:n,name:N,onClick:s.find((function(e){return e.id===Number(n)}))?a:c})]}),Object(F.jsxs)("div",{className:"info",children:[Object(F.jsx)("p",{className:"hero-description",children:y}),Object(F.jsxs)("div",{className:"data-wrapper",children:[Object(F.jsxs)("div",{className:"comics-movies",children:[Object(F.jsxs)("div",{className:"comics-wrapper",children:[Object(F.jsx)("span",{children:"Quadrinhos"}),Object(F.jsxs)("div",{className:"comics-data",children:[Object(F.jsx)("img",{src:q,alt:""}),Object(F.jsx)("span",{children:E.available})]})]}),Object(F.jsxs)("div",{className:"movies-wrapper",children:[Object(F.jsx)("span",{children:"Filmes"}),Object(F.jsxs)("div",{className:"movies-data",children:[Object(F.jsx)("img",{src:M,alt:""}),Object(F.jsx)("span",{children:"3"})]})]})]}),Object(F.jsxs)("div",{className:"rating-wrapper",children:[Object(F.jsx)("span",{children:"Rating:"}),Object(F.jsx)("img",{src:P,alt:""})]}),Object(F.jsx)("span",{className:"last-comics",children:"\xdaltimo quadrinho:"})]})]})]}),Object(F.jsx)("div",{className:"portrait-wrapper",children:Object(F.jsx)("img",{src:w,alt:N,className:"hero-portrait",id:"".concat(n,"portrait")})}),Object(F.jsx)(U,{url:E.collectionURI})]})]})}return Object(F.jsx)("h2",{className:"section-title",children:"N\xe3o h\xe1 her\xf3i para exibir"})}function J(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(H,{})})}a(34);var Q=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(i.a,{basename:"/luizalabs-teste",children:Object(F.jsxs)(o.c,{children:[Object(F.jsx)(o.a,{exact:!0,path:"/",children:Object(F.jsx)(V,{})}),Object(F.jsx)(o.a,{path:"/hero/:id",children:Object(F.jsx)(J,{})})]})})})};n.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(E,{children:Object(F.jsx)(Q,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.df744f24.chunk.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario","chunk-515a8379"],{"0095":function(t,n,a){"use strict";a("95c5")},"13aa":function(t,n,a){"use strict";a.r(n);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?a("div",{staticClass:"banner-interno__titulo__icono me-3"},[a("i",{class:t.icono})]):t._e(),a("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},o=[],i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},e=i,s=(a("0095"),a("2877")),c=Object(s["a"])(e,r,o,!1,null,null,null);n["default"]=c.exports},"159b":function(t,n,a){var r=a("da84"),o=a("fdbc"),i=a("17c2"),e=a("9112");for(var s in o){var c=r[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{e(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,n,a){"use strict";var r=a("b727").forEach,o=a("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"17e1":function(t,n,a){"use strict";a("572e")},"4e82":function(t,n,a){"use strict";var r=a("23e7"),o=a("1c0b"),i=a("7b0b"),e=a("d039"),s=a("a640"),c=[],u=c.sort,l=e((function(){c.sort(void 0)})),f=e((function(){c.sort(null)})),d=s("sort"),m=l||!f||!d;r({target:"Array",proto:!0,forced:m},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},"572e":function(t,n,a){},"69a7":function(t,n,a){"use strict";a.r(n);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"curso-main-container glosario"},[a("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return a("div",{key:"letra-"+n.letra,staticClass:"glosario__letra-item mb-2"},[a("div",{staticClass:"glosario__letra-item__letra me-4"},[a("div",{staticClass:"glosario__letra-item__letra__icono"},[a("span",[t._v(t._s(n.letra))])])]),a("div",{staticClass:"glosario__letra-item__texto"},t._l(n.terminos,(function(n){return a("p",{staticClass:"mb-3"},[t._m(0,!0),a("strong",{domProps:{innerHTML:t._s(n.terminoHtml||n.termino)}}),a("strong",[t._v(": ")]),a("span",{domProps:{innerHTML:t._s(n.significado)}})])})),0)])})),0)],1)},o=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("strong",[a("i",{staticClass:"lista-ul__vineta"})])}],i=a("2909"),e=(a("159b"),a("fb6a"),a("4e82"),a("b64b"),a("d81d"),a("7db0"),a("13aa")),s=a("ecc5"),c={name:"Glosario",components:{BannerInterno:e["default"]},mixins:[s["a"]],computed:{glosarioData:function(){return this.$config.glosario},orderedData:function(){var t=this,n=Object(i["a"])(this.glosarioData);n.forEach((function(t){t.significado=t.significado.charAt(0).toLowerCase()+t.significado.slice(1)}));var a=Object(i["a"])(n).reduce((function(n,a){var r=t.quitarAcentos(a.termino.toLowerCase())[0];return n[r]?n[r].terminos.push(a):n[r]={letra:r,terminos:[a]},n}),{}),r=Object.keys(a).sort(),o=[];return r.forEach((function(n){var r=a[n],i=r.terminos;if(i.length>1){var e=[],s=r.terminos.map((function(t){return t.termino})).sort((function(n,a){var r=t.quitarAcentos(n).toLowerCase(),o=t.quitarAcentos(a).toLowerCase();return r<o?-1:o<r?1:0}));s.forEach((function(t){e.push(i.find((function(n){return n.termino===t})))})),i=e}o.push({letra:r.letra.toUpperCase(),terminos:i})})),o}}},u=c,l=(a("17e1"),a("2877")),f=Object(l["a"])(u,r,o,!1,null,null,null);n["default"]=f.exports},"95c5":function(t,n,a){},b64b:function(t,n,a){var r=a("23e7"),o=a("7b0b"),i=a("df75"),e=a("d039"),s=e((function(){i(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return i(o(t))}})},ecc5:function(t,n,a){"use strict";n["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const t=this.menuData.find(t=>"introduccion"===t.nombreRuta),n=this.menuData.find(t=>"tema1"===t.nombreRuta);return t||n}},methods:{quitarAcentos(t){const n=t.replace(/<\/?[^>]+(>|$)/g,""),a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return n.split("").map(t=>a[t]||t).join("").toString()}}}}}]);
//# sourceMappingURL=glosario.d82b8e99.js.map
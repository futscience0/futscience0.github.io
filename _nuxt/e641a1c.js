(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5],{375:function(t,e,n){"use strict";n.r(e);var r={name:"BtnCadastro",props:{button_text:{type:String,required:!0}}},o=n(18),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("NuxtLink",{staticClass:"button mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg text-gray-900 z-30",staticStyle:{"background-color":"#ffc722"},attrs:{to:"/login"}},[t._v("\n"+t._s(t.button_text)+"\n")])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";e.a={props:{name:{type:String,required:!0},price:{type:String,required:!0},limited:{type:Boolean,default:!0},list:{type:Array,required:!0}},computed:{pricePer:function(){return this.limited?"/ por usuário":"/ por usuário (mensal)"}}}},515:function(t,e,n){"use strict";n.r(e);n(31);var r=n(376),o=n(375),l={name:"Price",mixins:[r.a],components:{btnCadastro:o.default}},d=n(18),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4 z-10"},[e("div",{staticClass:"flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"},[e("div",{staticClass:"p-8 text-3xl font-bold text-center border-b-4"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),e("ul",{staticClass:"w-full text-center text-sm"},t._l(t.list,(function(n,r){return e("li",{key:r,staticClass:"border-b py-4"},[t._v("\n        "+t._s(n)+"\n      ")])})),0)]),t._v(" "),e("div",{staticClass:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"},[e("div",{staticClass:"w-full pt-6 text-3xl text-gray-600 font-bold text-center"},[t._v("\n      "+t._s(t.price)+"\n      "),e("span",{staticClass:"text-base"},[t._v(t._s(t.pricePer))])]),t._v(" "),e("div",{staticClass:"flex items-center justify-center"},[e("btnCadastro",{attrs:{button_text:"Criar conta"}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);
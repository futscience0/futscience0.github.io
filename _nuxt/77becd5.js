(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{528:function(t,e,n){"use strict";n.r(e);n(227);var l={name:"TeaserColumn",props:{rows:{type:Number,required:!0,validator:function(t){return t>=1&&t<=6}},action:{type:String,default:""}},computed:{classList:function(){return"md:w-1/".concat(this.rows)},renderAction:function(){return""!==this.action}},methods:{onClick:function(){this.$emit("clicked")}}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full p-6 flex flex-col flex-grow flex-shrink",class:t.classList},[e("div",{staticClass:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"},[e("a",{staticClass:"flex flex-wrap no-underline hover:no-underline",attrs:{href:"#"}},[e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[t._t("overline")],2),t._v(" "),e("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6"},[t._t("headline")],2),t._v(" "),e("p",{staticClass:"text-gray-800 text-base px-6 mb-5"},[t._t("content")],2)])]),t._v(" "),t.renderAction?e("div",{staticClass:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"},[e("div",{staticClass:"flex items-center justify-end"},[e("button",{staticClass:"mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v("\n        "+t._s(t.action)+"\n      ")])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);
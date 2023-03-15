(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{138:function(t,e,n){"use strict";n.r(e);var l={name:"TheHeader",components:{logo:n(139).default},data:function(){return{scrollY:0,isOpen:!1}},computed:{isSticky:function(){return this.scrollY>10},headerClassList:function(){return this.isSticky?"bg-white shadow":""},navActionClassList:function(){return this.isSticky?"text-white":"bg-white text-gray-900"},navContentClassList:function(){var t=(this.isSticky,"bg-gray-100");return this.isOpen||(t+=" hidden"),t}},methods:{onClick:function(){this.isOpen=!1},onScroll:function(){this.scrollY=window.scrollY},onToggleClick:function(){this.isOpen=!this.isOpen}},mounted:function(){this.scrollY=window.scrollY,document.addEventListener("click",this.onClick),document.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){document.removeEventListener("click",this.onClick,!0),document.removeEventListener("scroll",this.onScroll,!0)}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"fixed w-full z-40 top-0",class:t.headerClassList,staticStyle:{"background-color":"#ffc722"}},[e("div",{staticClass:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"},[e("div",{staticClass:"pl-4 flex items-center"},[e("logo",{attrs:{isStickable:!0,isSticky:t.isSticky}})],1),t._v(" "),e("div",{staticClass:"block lg:hidden pr-4"},[e("button",{staticClass:"flex items-center p-1 text-gray-900 hover:text-gray-900",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onToggleClick.apply(null,arguments)}}},[e("svg",{staticClass:"fill-current h-6 w-6",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("title",[t._v("Menu")]),t._v(" "),e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),t._v(" "),e("div",{staticClass:"w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20",class:t.navContentClassList})]),t._v(" "),e("hr",{staticClass:"border-b border-gray-100 opacity-25 my-0 py-0"})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(139).default})},139:function(t,e,n){"use strict";n.r(e);var l={name:"Logo",props:{isStickable:{type:Boolean,default:!1},isSticky:{type:Boolean,default:!1}},computed:{classList:function(){var t="";return this.isStickable?(this.isSticky,t="text-gray-900"):t="text-gray-900",t}}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("NuxtLink",{staticClass:"no-underline hover:no-underline font-bold text-2xl lg:text-4xl",class:t.classList,staticStyle:{"font-family":"Oswald, Impact, 'Franklin Gothic Bold', sans-serif"},attrs:{to:"/"}},[t._v("\nFUT"),e("span",{staticClass:"text-white"},[t._v("SCIENCE")])])}),[],!1,null,null,null);e.default=component.exports},140:function(t,e,n){"use strict";n.r(e);var l={name:"TheFooter",components:{logo2:n(141).default}},o=n(18),component=Object(o.a)(l,(function(){var t=this._self._c;return t("footer",{staticClass:"bg-white"},[t("div",{staticClass:"container mx-auto px-8"},[t("div",{staticClass:"w-full flex flex-col md:flex-row py-6"},[t("div",{staticClass:"flex-1 mb-6"},[t("logo2")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo2:n(141).default})},141:function(t,e,n){"use strict";n.r(e);var l={name:"Logo2"},o=n(18),component=Object(o.a)(l,(function(){return(0,this._self._c)("NuxtLink",{staticClass:"no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-900",staticStyle:{"font-family":"Oswald, Impact, 'Franklin Gothic Bold', sans-serif"},attrs:{to:"/"}},[this._v("\nFUTSCIENCE")])}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(110).default)("164fd53c",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";var l=n(138),o=n(140),r={components:{"the-header":l.default,"the-footer":o.default}},c=(n(299),n(18)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"leading-normal tracking-normal text-white gradient"},[e("the-header"),t._v(" "),e("nuxt"),t._v(" "),e("the-footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheHeader:n(138).default,TheFooter:n(140).default})},229:function(t,e,n){n(230),t.exports=n(231)},299:function(t,e,n){"use strict";n(201)},300:function(t,e,n){var l=n(109)((function(i){return i[1]}));l.push([t.i,'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;font-family:"Work Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px}.gradient{background:linear-gradient(90deg,#fff,#ffc722)}',""]),l.locals={},t.exports=l},301:function(t,e){}},[[229,26,2,27]]]);
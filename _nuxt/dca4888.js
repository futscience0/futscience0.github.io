(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{521:function(t,j,e){var map={"./af":377,"./af.js":377,"./ar":378,"./ar-dz":379,"./ar-dz.js":379,"./ar-kw":380,"./ar-kw.js":380,"./ar-ly":381,"./ar-ly.js":381,"./ar-ma":382,"./ar-ma.js":382,"./ar-sa":383,"./ar-sa.js":383,"./ar-tn":384,"./ar-tn.js":384,"./ar.js":378,"./az":385,"./az.js":385,"./be":386,"./be.js":386,"./bg":387,"./bg.js":387,"./bm":388,"./bm.js":388,"./bn":389,"./bn-bd":390,"./bn-bd.js":390,"./bn.js":389,"./bo":391,"./bo.js":391,"./br":392,"./br.js":392,"./bs":393,"./bs.js":393,"./ca":394,"./ca.js":394,"./cs":395,"./cs.js":395,"./cv":396,"./cv.js":396,"./cy":397,"./cy.js":397,"./da":398,"./da.js":398,"./de":399,"./de-at":400,"./de-at.js":400,"./de-ch":401,"./de-ch.js":401,"./de.js":399,"./dv":402,"./dv.js":402,"./el":403,"./el.js":403,"./en-au":404,"./en-au.js":404,"./en-ca":405,"./en-ca.js":405,"./en-gb":406,"./en-gb.js":406,"./en-ie":407,"./en-ie.js":407,"./en-il":408,"./en-il.js":408,"./en-in":409,"./en-in.js":409,"./en-nz":410,"./en-nz.js":410,"./en-sg":411,"./en-sg.js":411,"./eo":412,"./eo.js":412,"./es":413,"./es-do":414,"./es-do.js":414,"./es-mx":415,"./es-mx.js":415,"./es-us":416,"./es-us.js":416,"./es.js":413,"./et":417,"./et.js":417,"./eu":418,"./eu.js":418,"./fa":419,"./fa.js":419,"./fi":420,"./fi.js":420,"./fil":421,"./fil.js":421,"./fo":422,"./fo.js":422,"./fr":423,"./fr-ca":424,"./fr-ca.js":424,"./fr-ch":425,"./fr-ch.js":425,"./fr.js":423,"./fy":426,"./fy.js":426,"./ga":427,"./ga.js":427,"./gd":428,"./gd.js":428,"./gl":429,"./gl.js":429,"./gom-deva":430,"./gom-deva.js":430,"./gom-latn":431,"./gom-latn.js":431,"./gu":432,"./gu.js":432,"./he":433,"./he.js":433,"./hi":434,"./hi.js":434,"./hr":435,"./hr.js":435,"./hu":436,"./hu.js":436,"./hy-am":437,"./hy-am.js":437,"./id":438,"./id.js":438,"./is":439,"./is.js":439,"./it":440,"./it-ch":441,"./it-ch.js":441,"./it.js":440,"./ja":442,"./ja.js":442,"./jv":443,"./jv.js":443,"./ka":444,"./ka.js":444,"./kk":445,"./kk.js":445,"./km":446,"./km.js":446,"./kn":447,"./kn.js":447,"./ko":448,"./ko.js":448,"./ku":449,"./ku.js":449,"./ky":450,"./ky.js":450,"./lb":451,"./lb.js":451,"./lo":452,"./lo.js":452,"./lt":453,"./lt.js":453,"./lv":454,"./lv.js":454,"./me":455,"./me.js":455,"./mi":456,"./mi.js":456,"./mk":457,"./mk.js":457,"./ml":458,"./ml.js":458,"./mn":459,"./mn.js":459,"./mr":460,"./mr.js":460,"./ms":461,"./ms-my":462,"./ms-my.js":462,"./ms.js":461,"./mt":463,"./mt.js":463,"./my":464,"./my.js":464,"./nb":465,"./nb.js":465,"./ne":466,"./ne.js":466,"./nl":467,"./nl-be":468,"./nl-be.js":468,"./nl.js":467,"./nn":469,"./nn.js":469,"./oc-lnc":470,"./oc-lnc.js":470,"./pa-in":471,"./pa-in.js":471,"./pl":472,"./pl.js":472,"./pt":473,"./pt-br":474,"./pt-br.js":474,"./pt.js":473,"./ro":475,"./ro.js":475,"./ru":476,"./ru.js":476,"./sd":477,"./sd.js":477,"./se":478,"./se.js":478,"./si":479,"./si.js":479,"./sk":480,"./sk.js":480,"./sl":481,"./sl.js":481,"./sq":482,"./sq.js":482,"./sr":483,"./sr-cyrl":484,"./sr-cyrl.js":484,"./sr.js":483,"./ss":485,"./ss.js":485,"./sv":486,"./sv.js":486,"./sw":487,"./sw.js":487,"./ta":488,"./ta.js":488,"./te":489,"./te.js":489,"./tet":490,"./tet.js":490,"./tg":491,"./tg.js":491,"./th":492,"./th.js":492,"./tk":493,"./tk.js":493,"./tl-ph":494,"./tl-ph.js":494,"./tlh":495,"./tlh.js":495,"./tr":496,"./tr.js":496,"./tzl":497,"./tzl.js":497,"./tzm":498,"./tzm-latn":499,"./tzm-latn.js":499,"./tzm.js":498,"./ug-cn":500,"./ug-cn.js":500,"./uk":501,"./uk.js":501,"./ur":502,"./ur.js":502,"./uz":503,"./uz-latn":504,"./uz-latn.js":504,"./uz.js":503,"./vi":505,"./vi.js":505,"./x-pseudo":506,"./x-pseudo.js":506,"./yo":507,"./yo.js":507,"./zh-cn":508,"./zh-cn.js":508,"./zh-hk":509,"./zh-hk.js":509,"./zh-mo":510,"./zh-mo.js":510,"./zh-tw":511,"./zh-tw.js":511};function n(t){var j=r(t);return e(j)}function r(t){if(!e.o(map,t)){var j=new Error("Cannot find module '"+t+"'");throw j.code="MODULE_NOT_FOUND",j}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=521},522:function(t,j,e){"use strict";(function(t){var n=e(374);j.a={data:function(){return{api_url:t.env.strapiBaseUri,moment:n}},props:{pieces:Array}}}).call(this,e(116))},536:function(t,j,e){"use strict";e.r(j);var n=e(522).a,r=e(18),component=Object(r.a)(n,(function(){var t=this,j=t._self._c;return j("div",{staticClass:"text-gray-800",attrs:{id:"news_pieces"}},[j("main",{staticClass:"max-w-5xl mx-auto pb-10 pt-10"},[j("div",{staticClass:"flex flex-wrap overflow-hidden"},[j("ul",{staticClass:"w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-5/6"},t._l(t.pieces,(function(e){return j("li",{key:e.id,staticClass:"mr-2 md:mr-4 ml-2"},[j("div",{staticClass:"pb-10"},[j("h2",{staticClass:"text-gray-900 text-3xl my-5"},[j("NuxtLink",{attrs:{to:"/noticias/"+e.slug}},[t._v(t._s(e.title))])],1),t._v(" "),j("span",{staticClass:"text-xs text-gray-800 block mb-5"},[t._v(t._s(t.moment(e.published_at).format("DD-MMM-YYYY")))]),t._v(" "),j("p",{staticClass:"text-gray-900 tracking-wider leading-loose"},[t._v(t._s(e.teaser))]),t._v(" "),j("NuxtLink",{staticClass:"inline-block pt-5 font-bold text-sm tracking-wider;",attrs:{to:"/noticias/"+e.slug}},[t._v("Continuar lendo ...")])],1)])})),0)])])])}),[],!1,null,null,null);j.default=component.exports}}]);
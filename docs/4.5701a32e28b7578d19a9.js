(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Z8Ze:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return m});var r=n("LoAr"),o=(n("vA/A"),n("WT9V")),l=n("wEfT"),i=n("FOLC"),u=n("iwai"),a=n("SeAg"),s=n("GiBk"),c=r.Oa({encapsulation:2,styles:[],data:{}});function p(t){return r.kb(0,[(t()(),r.Qa(0,0,null,null,2,"div",[["class","sb-icon"]],null,null,null,null,null)),(t()(),r.Qa(1,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,u.b,u.a)),r.Pa(2,573440,null,0,i.a,[a.c],{iconProp:[0,"iconProp"]},null)],function(t,e){var n=e.component;t(e,2,0,n.icon||n.ref.prop.icon)},function(t,e){t(e,1,0,r.ab(e,2).renderedIconHTML)})}function f(t){return r.kb(0,[(t()(),r.Qa(0,0,null,null,1,"div",[["class","sb-text"]],null,null,null,null,null)),(t()(),r.ib(1,null,[" "," "]))],null,function(t,e){var n=e.component;t(e,1,0,n.text||n.ref.prop.text)})}function b(t){return r.kb(0,[(t()(),r.Qa(0,0,null,null,3,"div",[["class","sb-count"]],null,null,null,null,null)),(t()(),r.Qa(1,0,null,null,2,"span",[],null,null,null,null,null)),(t()(),r.ib(2,null,["",""])),r.eb(3,1)],null,function(t,e){var n=e.component;t(e,2,0,r.jb(e,2,0,t(e,3,0,r.ab(e.parent,0),n.shareCount)))})}function m(t){return r.kb(2,[r.cb(0,l.d,[]),r.gb(402653184,1,{ref:0}),(t()(),r.Qa(2,0,null,null,9,"button",[["class","sb-wrapper"]],[[2,"sb-show-icon",null],[2,"sb-show-text",null],[2,"sb-show-count",null],[4,"fontSize","px"]],[[null,"opened"],[null,"closed"],[null,"count"],[null,"click"]],function(t,e,n){var o=!0,l=t.component;return"click"===e&&(o=!1!==r.ab(t,3).onClick()&&o),"opened"===e&&(o=!1!==l.opened.emit(n)&&o),"closed"===e&&(o=!1!==l.closed.emit(n)&&o),"count"===e&&(o=!1!==l.onCount(n)&&o),o},null,null)),r.Pa(3,540672,[[1,4]],0,l.b,[l.c,s.c,r.D,r.h,r.k,r.A],{shareButton:[0,"shareButton"],getCount:[1,"getCount"],autoSetMeta:[2,"autoSetMeta"],url:[3,"url"],title:[4,"title"],description:[5,"description"],image:[6,"image"],tags:[7,"tags"]},{count:"count",opened:"opened",closed:"closed"}),(t()(),r.Qa(4,0,null,null,7,"div",[["class","sb-inner"]],null,null,null,null,null)),(t()(),r.Qa(5,0,null,null,4,"div",[["class","sb-content"]],null,null,null,null,null)),(t()(),r.Ha(16777216,null,null,1,null,p)),r.Pa(7,16384,null,0,o.l,[r.P,r.M],{ngIf:[0,"ngIf"]},null),(t()(),r.Ha(16777216,null,null,1,null,f)),r.Pa(9,16384,null,0,o.l,[r.P,r.M],{ngIf:[0,"ngIf"]},null),(t()(),r.Ha(16777216,null,null,1,null,b)),r.Pa(11,16384,null,0,o.l,[r.P,r.M],{ngIf:[0,"ngIf"]},null)],function(t,e){var n=e.component;t(e,3,0,n.button,n.showCount,n.autoSetMeta,n.url,n.title,n.description,n.image,n.tags),t(e,7,0,n.showIcon&&n.ref.prop),t(e,9,0,n.showText&&n.ref.prop),t(e,11,0,n.showCount&&n.shareCount)},function(t,e){var n=e.component;t(e,2,0,n.showIcon,n.showText,n.showCount&&n.shareCount,14*(1+n.size/20))})}},oMug:function(t,e,n){"use strict";n.d(e,"a",function(){return f}),n.d(e,"b",function(){return d});var r=n("LoAr"),o=n("6yYy"),l=n("WT9V"),i=n("wEfT"),u=n("FOLC"),a=n("vA/A"),s=n("Z8Ze"),c=n("iwai"),p=n("SeAg"),f=r.Oa({encapsulation:2,styles:[],data:{}});function b(t){return r.kb(0,[(t()(),r.Qa(0,0,null,null,1,"share-button",[],[[8,"className",0]],[[null,"opened"],[null,"closed"],[null,"count"]],function(t,e,n){var r=!0,o=t.component;return"opened"===e&&(r=!1!==o.opened.emit(n)&&r),"closed"===e&&(r=!1!==o.closed.emit(n)&&r),"count"===e&&(r=!1!==o.count.emit(n)&&r),r},s.b,s.a)),r.Pa(1,49152,null,0,a.a,[i.c],{createButton:[0,"createButton"],setUrl:[1,"setUrl"],title:[2,"title"],description:[3,"description"],image:[4,"image"],tags:[5,"tags"],autoSetMeta:[6,"autoSetMeta"],showIcon:[7,"showIcon"],showText:[8,"showText"],showCount:[9,"showCount"],size:[10,"size"],theme:[11,"theme"]},{count:"count",opened:"opened",closed:"closed"})],function(t,e){var n=e.component;t(e,1,1,[e.context.$implicit,n.url,n.title,n.description,n.image,n.tags,n.autoSetMeta,n.showIcon,n.showText,n.showCount,n.size,n.theme])},function(t,e){t(e,0,0,r.ab(e,1).buttonClass)})}function m(t){return r.kb(0,[(t()(),r.Qa(0,0,null,null,1,"expand-button",[],null,[[null,"toggle"]],function(t,e,n){var r=!0;return"toggle"===e&&(r=!1!==t.component.updateState({expanded:n})&&r),r},g,v)),r.Pa(1,49152,null,0,o.d,[r.k],{moreIcon:[0,"moreIcon"],lessIcon:[1,"lessIcon"],expanded:[2,"expanded"],size:[3,"size"]},{toggle:"toggle"})],function(t,e){t(e,1,0,e.parent.context.$implicit.moreIcon,e.parent.context.$implicit.lessIcon,e.parent.context.$implicit.expanded,14*(1+e.component.size/20))},null)}function h(t){return r.kb(0,[(t()(),r.Qa(0,0,null,null,5,"div",[],[[8,"className",0]],null,null,null,null)),(t()(),r.Ha(16777216,null,null,1,null,b)),r.Pa(2,802816,null,0,l.k,[r.P,r.M,r.r],{ngForOf:[0,"ngForOf"]},null),(t()(),r.Qa(3,0,null,null,2,"div",[],[[8,"className",0]],null,null,null,null)),(t()(),r.Ha(16777216,null,null,1,null,m)),r.Pa(5,16384,null,0,l.l,[r.P,r.M],{ngIf:[0,"ngIf"]},null)],function(t,e){t(e,2,0,e.context.$implicit.selectedButtons),t(e,5,0,e.context.$implicit.shownCount<e.context.$implicit.userButtons.length)},function(t,e){var n=e.component;t(e,0,0,r.Sa(1,"sb-group sb-",n.theme,"")),t(e,3,0,r.Sa(1,"sb-button sb-",n.theme,""))})}function d(t){return r.kb(2,[(t()(),r.Ha(16777216,null,null,2,null,h)),r.Pa(1,16384,null,0,l.l,[r.P,r.M],{ngIf:[0,"ngIf"]},null),r.cb(131072,l.b,[r.h])],function(t,e){var n=e.component;t(e,1,0,r.jb(e,1,0,r.ab(e,2).transform(n.state$)))},null)}var v=r.Oa({encapsulation:2,styles:[],data:{}});function g(t){return r.kb(2,[(t()(),r.Qa(0,0,null,null,5,"button",[["class","sb-wrapper sb-expand sb-show-icon"]],[[4,"fontSize","px"]],[[null,"click"]],function(t,e,n){var r=!0,o=t.component;return"click"===e&&(r=!1!==o.toggle.emit(!o.expanded)&&r),r},null,null)),(t()(),r.Qa(1,0,null,null,4,"div",[["class","sb-inner"]],null,null,null,null,null)),(t()(),r.Qa(2,0,null,null,3,"div",[["class","sb-content"]],null,null,null,null,null)),(t()(),r.Qa(3,0,null,null,2,"div",[["class","sb-icon"]],null,null,null,null,null)),(t()(),r.Qa(4,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),r.Pa(5,573440,null,0,u.a,[p.c],{iconProp:[0,"iconProp"]},null)],function(t,e){var n=e.component;t(e,5,0,n.expanded?n.lessIcon:n.moreIcon)},function(t,e){t(e,0,0,e.component.size),t(e,4,0,r.ab(e,5).renderedIconHTML)})}},rKmM:function(t,e,n){"use strict";var r=n("LoAr"),o=n("WT9V"),l=n("JpoA"),i=n("D57K"),u=n("snle"),a=n("sna8"),s=n("leiK"),c=n("Lh+r");function p(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(1===t.length){if(!Object(u.a)(t[0]))return t[0];t=t[0]}return Object(a.a)(t,void 0).lift(new f)}var f=function(){function t(){}return t.prototype.call=function(t,e){return e.subscribe(new b(t))},t}(),b=function(t){function e(e){var n=t.call(this,e)||this;return n.hasFirst=!1,n.observables=[],n.subscriptions=[],n}return i.b(e,t),e.prototype._next=function(t){this.observables.push(t)},e.prototype._complete=function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{for(var n=0;n<e&&!this.hasFirst;n++){var r=t[n],o=Object(c.a)(this,r,r,n);this.subscriptions&&this.subscriptions.push(o),this.add(o)}this.observables=null}},e.prototype.notifyNext=function(t,e,n,r,o){if(!this.hasFirst){this.hasFirst=!0;for(var l=0;l<this.subscriptions.length;l++)if(l!==n){var i=this.subscriptions[l];i.unsubscribe(),this.remove(i)}this.subscriptions=null}this.destination.next(e)},e}(s.a),m=n("iUUs"),h=n("pN2L"),d=n("Zl8a"),v=n("2Mvu"),g=n("4HYP"),O=n("Jg5f");n.d(e,"a",function(){return S});var y=new r.p("localStoragePrefix",{providedIn:"root",factory:function(){return""}}),w=function(){function t(t){void 0===t&&(t=null),this.prefix=t,this.dbName="ngStorage",this.objectStoreName="localStorage",this.keyPath="key",this.dataPath="value",t&&(this.dbName=t+"_"+this.dbName),t&&(this.dbName=t+"_"+this.dbName),this.database=new d.a,this.connect()}return t.prototype.getItem=function(t){var e=this;return this.transaction().pipe(Object(O.a)(function(e){return e.get(t)}),Object(g.a)(function(t){return p(Object(m.a)(t,"success").pipe(Object(O.a)(function(t){return t.target.result}),Object(O.a)(function(t){return t&&e.dataPath in t?t[e.dataPath]:null})),e.toErrorObservable(t,"getter")).pipe(Object(v.a)())}),Object(v.a)())},t.prototype.setItem=function(t,e){var n=this;return null==e?Object(h.a)(!0):this.getItem(t).pipe(Object(O.a)(function(t){return null==t?"add":"put"}),Object(g.a)(function(r){return n.transaction("readwrite").pipe(Object(g.a)(function(o){var l,i,u;switch(r){case"add":l=o.add(((i={})[n.dataPath]=e,i),t);break;case"put":default:l=o.put(((u={})[n.dataPath]=e,u),t)}return p(n.toSuccessObservable(l),n.toErrorObservable(l,"setter")).pipe(Object(v.a)())}))}),Object(v.a)())},t.prototype.removeItem=function(t){var e=this;return this.getItem(t).pipe(Object(g.a)(function(n){return null!=n?e.transaction("readwrite").pipe(Object(g.a)(function(n){var r=n.delete(t);return p(e.toSuccessObservable(r),e.toErrorObservable(r,"remover")).pipe(Object(v.a)())})):Object(h.a)(!0)}),Object(v.a)())},t.prototype.clear=function(){var t=this;return this.transaction("readwrite").pipe(Object(g.a)(function(e){var n=e.clear();return p(t.toSuccessObservable(n),t.toErrorObservable(n,"clearer")).pipe(Object(v.a)())}),Object(v.a)())},t.prototype.connect=function(){var t=this,e=indexedDB.open(this.dbName);Object(m.a)(e,"upgradeneeded").pipe(Object(v.a)()).subscribe(function(e){var n=e.target.result;n.objectStoreNames.contains(t.objectStoreName)||n.createObjectStore(t.objectStoreName)}),p(Object(m.a)(e,"success"),this.toErrorObservable(e,"connection")).pipe(Object(v.a)()).subscribe(function(e){t.database.next(e.target.result)},function(e){t.database.error(e)})},t.prototype.transaction=function(t){var e=this;return void 0===t&&(t="readonly"),this.database.pipe(Object(O.a)(function(n){return n.transaction([e.objectStoreName],t).objectStore(e.objectStoreName)}))},t.prototype.toSuccessObservable=function(t){return Object(m.a)(t,"success").pipe(Object(O.a)(function(){return!0}))},t.prototype.toErrorObservable=function(t,e){return void 0===e&&(e=""),Object(m.a)(t,"error").pipe(Object(g.a)(function(n){return Object(l.a)(new Error("IndexedDB "+e+" issue : "+t.error.message+"."))}))},t.ngInjectableDef=Object(r.T)({factory:function(){return new t(Object(r.X)(y,8))},token:t,providedIn:"root"}),t}(),I=function(){function t(t){void 0===t&&(t=null),this.userPrefix=t,this.prefix="",t&&(this.prefix=t+"_")}return t.prototype.getItem=function(t){var e=localStorage.getItem(""+this.prefix+t),n=null;if(null!=e)try{n=JSON.parse(e)}catch(t){return Object(l.a)(new Error("Invalid data in localStorage."))}return Object(h.a)(n)},t.prototype.setItem=function(t,e){return localStorage.setItem(""+this.prefix+t,JSON.stringify(e)),Object(h.a)(!0)},t.prototype.removeItem=function(t){return localStorage.removeItem(""+this.prefix+t),Object(h.a)(!0)},t.prototype.clear=function(){return localStorage.clear(),Object(h.a)(!0)},t.ngInjectableDef=Object(r.T)({factory:function(){return new t(Object(r.X)(y,8))},token:t,providedIn:"root"}),t}(),j=function(){function t(){this.localStorage=new Map}return t.prototype.getItem=function(t){var e=this.localStorage.get(t);return Object(h.a)(void 0!==e?e:null)},t.prototype.setItem=function(t,e){return this.localStorage.set(t,e),Object(h.a)(!0)},t.prototype.removeItem=function(t){return this.localStorage.delete(t),Object(h.a)(!0)},t.prototype.clear=function(){return this.localStorage.clear(),Object(h.a)(!0)},t.ngInjectableDef=Object(r.T)({factory:function(){return new t},token:t,providedIn:"root"}),t}(),x=function(){function t(){}return t.ngInjectableDef=Object(r.T)({factory:function(){return t=Object(r.X)(r.A),e=Object(r.X)(y,8),Object(o.v)(t)&&"indexedDB"in window&&void 0!==indexedDB&&null!==indexedDB?new w(e):Object(o.v)(t)&&"localStorage"in window&&void 0!==localStorage&&null!==localStorage?new I(e):new j;var t,e},token:t,providedIn:"root"}),t}(),P=function(){function t(){}return t.prototype.validate=function(t,e){if(!((e.hasOwnProperty("const")&&void 0!==e.const||e.hasOwnProperty("enum")&&null!=e.enum||e.hasOwnProperty("type")&&null!=e.type)&&"array"!==e.type&&"object"!==e.type||e.hasOwnProperty("properties")&&null!=e.properties||e.hasOwnProperty("items")&&null!=e.items))throw new Error("Each value must have a 'type' or 'properties' or 'items' or 'const' or 'enum', to enforce strict types.");return!(e.hasOwnProperty("const")&&void 0!==e.const&&t!==e.const||!this.validateEnum(t,e)||!this.validateType(t,e)||!this.validateItems(t,e)||!this.validateProperties(t,e)||!this.validateRequired(t,e))},t.prototype.isObjectNotNull=function(t){return null!==t&&"object"==typeof t},t.prototype.validateProperties=function(t,e){if(!e.hasOwnProperty("properties")||null==e.properties)return!0;if(!this.isObjectNotNull(t))return!1;if(Object.keys(e.properties).length!==Object.keys(t).length)return!1;for(var n in e.properties)if(e.properties.hasOwnProperty(n)&&t.hasOwnProperty(n)&&!this.validate(t[n],e.properties[n]))return!1;return!0},t.prototype.validateRequired=function(t,e){if(!e.hasOwnProperty("required")||null==e.required)return!0;if(!this.isObjectNotNull(t))return!1;for(var n=0,r=e.required;n<r.length;n++){var o=r[n];if(!e.properties||!e.properties.hasOwnProperty(o))throw new Error("'required' properties must be described in 'properties' too.");if(!t.hasOwnProperty(o))return!1}return!0},t.prototype.validateEnum=function(t,e){return!e.hasOwnProperty("enum")||null==e.enum||-1!==e.enum.indexOf(t)},t.prototype.validateType=function(t,e){if(!e.hasOwnProperty("type")||null==e.type)return!0;switch(e.type){case"null":return null===t;case"string":return this.validateString(t,e);case"number":case"integer":return this.validateNumber(t,e);case"boolean":return"boolean"==typeof t;case"object":return"object"==typeof t;case"array":return Array.isArray(t)}},t.prototype.validateItems=function(t,e){if(!e.hasOwnProperty("items")||null==e.items)return!0;if(!Array.isArray(t))return!1;if(e.hasOwnProperty("maxItems")&&null!=e.maxItems){if(!Number.isInteger(e.maxItems)||e.maxItems<0)throw new Error("'maxItems' must be a non-negative integer.");if(t.length>e.maxItems)return!1}if(e.hasOwnProperty("minItems")&&null!=e.minItems){if(!Number.isInteger(e.minItems)||e.minItems<0)throw new Error("'minItems' must be a non-negative integer.");if(t.length<e.minItems)return!1}if(e.hasOwnProperty("uniqueItems")&&null!=e.uniqueItems&&e.uniqueItems){var n=new Set(t);if(t.length!==n.size)return!1}if(Array.isArray(e.items))return this.validateItemsList(t,e);for(var r=0,o=t;r<o.length;r++)if(!this.validate(o[r],e.items))return!1;return!0},t.prototype.validateItemsList=function(t,e){var n=e.items;if(t.length!==n.length)return!1;for(var r=0;r<n.length;r+=1)if(!this.validate(t[r],n[r]))return!1;return!0},t.prototype.validateString=function(t,e){if("string"!=typeof t)return!1;if(e.hasOwnProperty("maxLength")&&null!=e.maxLength){if(!Number.isInteger(e.maxLength)||e.maxLength<0)throw new Error("'maxLength' must be a non-negative integer.");if(t.length>e.maxLength)return!1}if(e.hasOwnProperty("minLength")&&null!=e.minLength){if(!Number.isInteger(e.minLength)||e.minLength<0)throw new Error("'minLength' must be a non-negative integer.");if(t.length<e.minLength)return!1}return!(e.hasOwnProperty("pattern")&&null!=e.pattern&&!new RegExp(e.pattern).test(t))},t.prototype.validateNumber=function(t,e){if("number"!=typeof t)return!1;if("integer"===e.type&&!Number.isInteger(t))return!1;if(e.hasOwnProperty("multipleOf")&&null!=e.multipleOf){if(e.multipleOf<=0)throw new Error("'multipleOf' must be a number strictly greater than 0.");if(!Number.isInteger(t/e.multipleOf))return!1}return!(e.hasOwnProperty("maximum")&&null!=e.maximum&&t>e.maximum||e.hasOwnProperty("exclusiveMaximum")&&null!=e.exclusiveMaximum&&t>=e.exclusiveMaximum||e.hasOwnProperty("minimum")&&null!=e.minimum&&t<e.minimum||e.hasOwnProperty("exclusiveMinimum")&&null!=e.exclusiveMinimum&&t<=e.exclusiveMinimum)},t.ngInjectableDef=Object(r.T)({factory:function(){return new t},token:t,providedIn:"root"}),t}(),S=function(){function t(t,e){this.database=t,this.jsonValidator=e,this.getItemOptionsDefault={schema:null}}return t.prototype.getItem=function(t,e){var n=this;return void 0===e&&(e=this.getItemOptionsDefault),this.database.getItem(t).pipe(Object(g.a)(function(t){if(e.schema&&null!==t){var r=!0;try{r=n.jsonValidator.validate(t,e.schema)}catch(t){return Object(l.a)(t)}if(!r)return Object(l.a)(new Error("JSON invalid"))}return Object(h.a)(t)}))},t.prototype.setItem=function(t,e){return this.database.setItem(t,e)},t.prototype.removeItem=function(t){return this.database.removeItem(t)},t.prototype.clear=function(){return this.database.clear()},t.prototype.setItemSubscribe=function(t,e){this.setItem(t,e).subscribe(function(){},function(){})},t.prototype.removeItemSubscribe=function(t){this.removeItem(t).subscribe(function(){},function(){})},t.prototype.clearSubscribe=function(){this.clear().subscribe(function(){},function(){})},t.ngInjectableDef=Object(r.T)({factory:function(){return new t(Object(r.X)(x),Object(r.X)(P))},token:t,providedIn:"root"}),t}()}}]);
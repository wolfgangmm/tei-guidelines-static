/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,s=null,i=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,i),t=s}},s=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],a=document.createTreeWalker(t.content,133,null,!1);let h=0,u=-1,p=0;const{strings:m,values:{length:f}}=e;for(;p<f;){const e=a.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)l(t[e].name,o)&&i++;for(;i-- >0;){const t=m[p],s=d.exec(t)[2],i=s.toLowerCase()+o,n=e.getAttribute(i);e.removeAttribute(i);const a=n.split(r);this.parts.push({type:"attribute",index:u,name:s,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,n=t.split(r),a=n.length-1;for(let t=0;t<a;t++){let s,r=n[t];if(""===r)s=c();else{const e=d.exec(r);null!==e&&l(e[2],o)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-o.length)+e[3]),s=document.createTextNode(r)}i.insertBefore(s,e),this.parts.push({type:"node",index:++u})}""===n[a]?(i.insertBefore(c(),e),s.push(e)):e.data=n[a],p+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==h||(u++,t.insertBefore(c(),e)),h=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(s.push(e),u--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const l=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},h=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,u=133;function p(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,u,null,!1);let r=f(i),o=i[r],a=-1,l=0;const h=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(h.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,r=f(i,r),o=i[r]}h.forEach(e=>e.parentNode.removeChild(e))}const m=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,u,null,!1);for(;s.nextNode();)t++;return t},f=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(h(t))return s}return-1};function _(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const r=document.createTreeWalker(i,u,null,!1);let o=f(n),a=0,l=-1;for(;r.nextNode();){l++;for(r.currentNode===s&&(a=m(t),s.parentNode.insertBefore(t,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=f(n,o);return}o=f(n,o)}}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=new WeakMap,y=e=>(...t)=>{const s=e(...t);return g.set(s,!0),s},b=e=>"function"==typeof e&&g.has(e),S={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=n.nextNode();for(;o<i.length;)if(r=i[o],h(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(s.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=s.pop(),l=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const P=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),C=` ${i} `;class x{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let r=0;r<e;r++){const e=this.strings[r],a=e.lastIndexOf("\x3c!--");s=(a>-1||s)&&-1===e.indexOf("--\x3e",a+1);const l=d.exec(e);t+=null===l?e+(s?C:n):e.substr(0,l.index)+l[1]+l[2]+o+l[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==P&&(t=P.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class N{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new A(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=s[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!E(e))return e}let i="";for(let n=0;n<t;n++){i+=e[n];const t=s[n];if(void 0!==t){const e=t.value;if(T(e)||!E(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===S||T(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=S,e(this)}this.value!==S&&this.committer.commit()}}class V{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=S,e(this)}const e=this.__pendingValue;e!==S&&(T(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===w?(this.value=w,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const s=new v(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)s=t[i],void 0===s&&(s=new V(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class U{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue===S)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=S}}class O extends N{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new R(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class R extends A{}let k=!1;(()=>{try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue===S)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=L(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=S}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const L=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function j(e){let t=q.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},q.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(i);return s=t.keyString.get(n),void 0===s&&(s=new a(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const q=new Map,I=new WeakMap,F=(e,t,i)=>{let n=I.get(t);void 0===n&&(s(t,t.firstChild),I.set(t,n=new V(Object.assign({templateFactory:j},i))),n.appendInto(t)),n.setValue(e),n.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class B{handleAttributeExpressions(e,t,s,i){const n=t[0];if("."===n){return new O(e,t.slice(1),s).parts}if("@"===n)return[new M(e,t.slice(1),i.eventContext)];if("?"===n)return[new U(e,t.slice(1),s)];return new N(e,t,s).parts}handleTextExpression(e){return new V(e)}}const H=new B;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const $=(e,...t)=>new x(e,t,"html",H)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,z=(e,t)=>`${e}--${t}`;let W=!0;void 0===window.ShadyCSS?W=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);const D=e=>t=>{const s=z(t.type,e);let n=q.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},q.set(s,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const o=t.strings.join(i);if(r=n.keyString.get(o),void 0===r){const s=t.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(s,e),r=new a(t,s),n.keyString.set(o,r)}return n.stringsArray.set(t.strings,r),r},J=["html","svg"],Z=e=>{J.forEach(t=>{const s=q.get(z(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),p(e,s)})})},G=new Set,K=(e,t,s)=>{G.add(e);const i=s?s.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}Z(e);const a=i.content;s?_(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(s,e)}},Q=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=I.has(t),o=W&&11===t.nodeType&&!!t.host,a=o&&!G.has(n),l=a?document.createDocumentFragment():t;if(F(e,l,Object.assign({templateFactory:D(n)},i)),a){const e=I.get(l);I.delete(l);const i=e.value instanceof v?e.value.template:void 0;K(n,l,i),s(t,t.firstChild),t.appendChild(l),I.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};window.JSCompiler_renameProperty=(e,t)=>e;const X={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),ee={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y},te=1,se=4,ie=8,ne=16,re="finalized";class oe extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=ee){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdateInternal(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ee}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(re)||e.finalize(),this[re]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=Y){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||X,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||X.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=ee){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|ie,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~ie}}_attributeToProperty(e,t){if(this._updateState&ie)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=this._updateState|ne,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ne}}requestUpdateInternal(e,t,s){let i=!0;if(void 0!==e){const n=this.constructor;s=s||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||this._updateState&ne||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|se;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&se}get hasUpdated(){return this._updateState&te}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(this._updateState&te||(this._updateState=this._updateState|te,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~se}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}oe[re]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ae=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol();class he{constructor(e,t){if(t!==le)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ae?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ce=e=>new he(String(e),le),de=e=>{if(e instanceof he)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},ue=(e,...t)=>{const s=t.reduce((t,s,i)=>t+de(s)+e[i+1],e[0]);return new he(s,le)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const pe={};class me extends oe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!ae){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return ce(t)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ae?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==pe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return pe}}function fe(e){const t=document.querySelector("script[src*=pb-components]");return t?new URL(e,t.src).href:new URL(e,window.location.href).href}function _e(e,t){var s,i,n;for(e=(e+"").split("."),t=(t+"").split("."),n=Math.max(e.length,t.length),s=0;s<n;s++)if(void 0===e[s]&&(e[s]="0"),void 0===t[s]&&(t[s]="0"),0!==(i=parseInt(e[s],10)-parseInt(t[s],10)))return i<0?-1:1;return 0}function ge(e,t){return _e(e,t)>=0}me.finalized=!0,me.render=Q,me.shadowRootOptions={mode:"open"},window.TeiPublisher||(window.TeiPublisher={},TeiPublisher.url=new URL(window.location.href));const ye=new Set,be=new Map;function Se(){be.clear()}const we=e=>class t extends e{static get properties(){return{subscribe:{type:String},subscribeConfig:{type:Object,attribute:"subscribe-config"},emit:{type:String},emitConfig:{type:Object,attribute:"emit-config"},waitFor:{type:String,attribute:"wait-for"},_isReady:{type:Boolean},disabled:{type:Boolean,reflect:!0},_endpoint:{type:String},_apiVersion:{type:String}}}constructor(){super(),this._isReady=!1,this.disabled=!1,this._subscriptions=new Map}connectedCallback(){super.connectedCallback(),t.waitOnce("pb-page-ready",e=>{this._endpoint=e.endpoint,this._apiVersion=e.apiVersion})}disconnectedCallback(){super.disconnectedCallback(),this._subscriptions.forEach((e,t)=>{e.forEach(e=>{document.removeEventListener(t,e)})})}command(e,t){"disable"===e&&(this.disabled=t)}wait(e){if(this.waitFor){const t=Array.from(document.querySelectorAll(this.waitFor)).filter(e=>this.emitsOnSameChannel(e)),s=t.length;if(0===s)return e();let i=0;t.forEach(t=>{if(t._isReady)i++,s===i&&e();else{const n=t.addEventListener("pb-ready",r=>{r.detail.source!=this&&(i++,s===i&&(t.removeEventListener("pb-ready",n),e()))})}})}else e()}waitForChannel(e){if(this.subscribeConfig)for(const t in this.subscribeConfig)this.subscribeConfig[t].forEach(s=>{if("pb-ready"===s&&ye.has(t))return e()});else if(this.subscribe&&ye.has(this.subscribe)||!this.subscribe&&ye.has("__default__"))return e();const t=this.subscribeTo("pb-ready",s=>{s.detail._source!=this&&(t.forEach(e=>document.removeEventListener("pb-ready",e)),e())})}static waitOnce(e,t){be.has(e)?t(be.get(e)):document.addEventListener(e,s=>{be.set(e,s.detail),t(s.detail)},{once:!0})}signalReady(e="pb-ready",t){this._isReady=!0,be.set(e,t),this.dispatchEvent(new CustomEvent(e,{detail:{data:t,source:this}})),this.emitTo(e,t)}getSubscribedChannels(){const e=[];return this.subscribeConfig?Object.keys(this.subscribeConfig).forEach(t=>{e.push(t)}):this.subscribe&&e.push(this.subscribe),e}emitsOnSameChannel(e){const s=this.getSubscribedChannels(),i=t.getEmittedChannels(e);return 0===s.length&&0===i.length||s.some(e=>i.includes(e))}static getEmittedChannels(e){const t=[],s=e.getAttribute("emit-config");if(s){const e=JSON.parse(s);Object.keys(e).forEach(e=>{t.push(e)})}else{const s=e.getAttribute("emit");s&&t.push(s)}return t}subscribeTo(e,t,s){let i;const n=s||this.getSubscribedChannels();if(0===n.length){const s=e=>{e.detail&&e.detail.key||t(e)};document.addEventListener(e,s),i=[s]}else i=n.map(s=>{const i=e=>{e.detail&&e.detail.key&&e.detail.key===s&&t(e)};return document.addEventListener(e,i),i});return this._subscriptions.set(e,i),i}emitTo(e,s,i){const n=i||t.getEmittedChannels(this);if(0==n.length){"pb-ready"===e&&ye.add("__default__"),s=s?Object.assign({_source:this},s):{_source:this};const t=new CustomEvent(e,{detail:s,composed:!0,bubbles:!0});this.dispatchEvent(t)}else n.forEach(t=>{const i={key:t,_source:this};if(s)for(const e in s)s.hasOwnProperty(e)&&(i[e]=s[e]);"pb-ready"===e&&ye.add(t);const n=new CustomEvent(e,{detail:i,composed:!0,bubbles:!0});this.dispatchEvent(n)})}getDocument(){if(this.src){const e=document.getElementById(this.src);if(e)return e}return null}getParameter(e,t){const s=TeiPublisher.url.searchParams&&TeiPublisher.url.searchParams.getAll(e);return s&&1==s.length?s[0]:s&&s.length>1?s:t}getParameterValues(e){return TeiPublisher.url.searchParams.getAll(e)}setParameter(e,t){void 0===t?TeiPublisher.url.searchParams.delete(e):Array.isArray(t)?(TeiPublisher.url.searchParams.delete(e),t.forEach((function(t){TeiPublisher.url.searchParams.append(e,t)}))):TeiPublisher.url.searchParams.set(e,t)}setParameters(e){TeiPublisher.url.search="";for(let t in e)e.hasOwnProperty(t)&&this.setParameter(t,e[t])}getParameters(){const e={};for(let t of TeiPublisher.url.searchParams.keys())e[t]=this.getParameter(t);return e}getParametersMatching(e){const t={};for(let s of TeiPublisher.url.searchParams.entries())if(e.test(s[0])){const e=t[s[0]];e?e.push(s[1]):t[s[0]]=[s[1]]}return t}clearParametersMatching(e){for(let t of TeiPublisher.url.searchParams.entries())e.test(t[0])&&TeiPublisher.url.searchParams.delete(t[0])}setPath(e){const t=document.querySelector("pb-page");if(t){const s=t.appRoot;this.getUrl().pathname=s+"/"+e}}getUrl(){return TeiPublisher.url}pushHistory(e,t){history.pushState(t,e,TeiPublisher.url.toString())}getEndpoint(){return this._endpoint}toAbsoluteURL(e,t){if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e))return e;const s=t||this.getEndpoint();let i;return i="."===s?new URL(window.location.href):"about:"===window.location.protocol?document.baseURI:new URL(s+"/",`${window.location.protocol}//${window.location.host}`),new URL(e,i).href}minApiVersion(e){return _e(this._apiVersion,e)>=0}lessThanApiVersion(e){return _e(this._apiVersion,e)<0}compareApiVersion(e){return _e(this._apiVersion,e)}};export{A,me as L,V as N,_e as a,Se as b,ue as c,y as d,c as e,t as f,s as g,$ as h,T as i,ge as m,we as p,fe as r};
var lt=":";function ut(e,n){for(let o=1,r=1;o<e.length;o++,r++)if(n[r]==="\\")r++;else if(e[o]===lt)return o;throw new Error(`Unterminated $localize metadata block in "${n}".`)}var be=function(e,...n){if(be.translate){let r=be.translate(e,n);e=r[0],n=r[1]}let o=We(e[0],e.raw[0]);for(let r=1;r<e.length;r++)o+=n[r-1]+We(e[r],e.raw[r]);return o},ft=":";function We(e,n){return n.charAt(0)===ft?e.substring(ut(e,n)+1):e}globalThis.$localize=be;(function(e){let n=e.performance;function o(A){n&&n.mark&&n.mark(A)}function r(A,d){n&&n.measure&&n.measure(A,d)}o("Zone");let i=e.__Zone_symbol_prefix||"__zone_symbol__";function l(A){return i+A}let m=e[l("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(m||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone}let T=(()=>{let d=class d{static assertZonePatched(){if(e.Promise!==se.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=d.current;for(;t.parent;)t=t.parent;return t}static get current(){return z.zone}static get currentTask(){return re}static __load_patch(t,_,P=!1){if(se.hasOwnProperty(t)){if(!P&&m)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){let L="Zone:"+t;o(L),se[t]=_(e,d,X),r(L,L)}}get parent(){return this._parent}get name(){return this._name}constructor(t,_){this._parent=t,this._name=_?_.name||"unnamed":"<root>",this._properties=_&&_.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,_)}get(t){let _=this.getZoneWith(t);if(_)return _._properties[t]}getZoneWith(t){let _=this;for(;_;){if(_._properties.hasOwnProperty(t))return _;_=_._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,_){if(typeof t!="function")throw new Error("Expecting function got: "+t);let P=this._zoneDelegate.intercept(this,t,_),L=this;return function(){return L.runGuarded(P,this,arguments,_)}}run(t,_,P,L){z={parent:z,zone:this};try{return this._zoneDelegate.invoke(this,t,_,P,L)}finally{z=z.parent}}runGuarded(t,_=null,P,L){z={parent:z,zone:this};try{try{return this._zoneDelegate.invoke(this,t,_,P,L)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{z=z.parent}}runTask(t,_,P){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(t.state===H&&(t.type===Q||t.type===w))return;let L=t.state!=g;L&&t._transitionTo(g,j),t.runCount++;let a=re;re=t,z={parent:z,zone:this};try{t.type==w&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,_,P)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{t.state!==H&&t.state!==h&&(t.type==Q||t.data&&t.data.isPeriodic?L&&t._transitionTo(j,g):(t.runCount=0,this._updateTaskCount(t,-1),L&&t._transitionTo(H,g,H))),z=z.parent,re=a}}scheduleTask(t){if(t.zone&&t.zone!==this){let P=this;for(;P;){if(P===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);P=P.parent}}t._transitionTo(q,H);let _=[];t._zoneDelegates=_,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(P){throw t._transitionTo(h,q,H),this._zoneDelegate.handleError(this,P),P}return t._zoneDelegates===_&&this._updateTaskCount(t,1),t.state==q&&t._transitionTo(j,q),t}scheduleMicroTask(t,_,P,L){return this.scheduleTask(new p(Z,t,_,P,L,void 0))}scheduleMacroTask(t,_,P,L,a){return this.scheduleTask(new p(w,t,_,P,L,a))}scheduleEventTask(t,_,P,L,a){return this.scheduleTask(new p(Q,t,_,P,L,a))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(!(t.state!==j&&t.state!==g)){t._transitionTo(B,j,g);try{this._zoneDelegate.cancelTask(this,t)}catch(_){throw t._transitionTo(h,B),this._zoneDelegate.handleError(this,_),_}return this._updateTaskCount(t,-1),t._transitionTo(H,B),t.runCount=0,t}}_updateTaskCount(t,_){let P=t._zoneDelegates;_==-1&&(t._zoneDelegates=null);for(let L=0;L<P.length;L++)P[L]._updateTaskCount(t.type,_)}};d.__symbol__=l;let A=d;return A})(),b={name:"",onHasTask:(A,d,c,t)=>A.hasTask(c,t),onScheduleTask:(A,d,c,t)=>A.scheduleTask(c,t),onInvokeTask:(A,d,c,t,_,P)=>A.invokeTask(c,t,_,P),onCancelTask:(A,d,c,t)=>A.cancelTask(c,t)};class v{constructor(d,c,t){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=d,this._parentDelegate=c,this._forkZS=t&&(t&&t.onFork?t:c._forkZS),this._forkDlgt=t&&(t.onFork?c:c._forkDlgt),this._forkCurrZone=t&&(t.onFork?this.zone:c._forkCurrZone),this._interceptZS=t&&(t.onIntercept?t:c._interceptZS),this._interceptDlgt=t&&(t.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=t&&(t.onIntercept?this.zone:c._interceptCurrZone),this._invokeZS=t&&(t.onInvoke?t:c._invokeZS),this._invokeDlgt=t&&(t.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=t&&(t.onInvoke?this.zone:c._invokeCurrZone),this._handleErrorZS=t&&(t.onHandleError?t:c._handleErrorZS),this._handleErrorDlgt=t&&(t.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=t&&(t.onHandleError?this.zone:c._handleErrorCurrZone),this._scheduleTaskZS=t&&(t.onScheduleTask?t:c._scheduleTaskZS),this._scheduleTaskDlgt=t&&(t.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=t&&(t.onScheduleTask?this.zone:c._scheduleTaskCurrZone),this._invokeTaskZS=t&&(t.onInvokeTask?t:c._invokeTaskZS),this._invokeTaskDlgt=t&&(t.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=t&&(t.onInvokeTask?this.zone:c._invokeTaskCurrZone),this._cancelTaskZS=t&&(t.onCancelTask?t:c._cancelTaskZS),this._cancelTaskDlgt=t&&(t.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=t&&(t.onCancelTask?this.zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let _=t&&t.onHasTask,P=c&&c._hasTaskZS;(_||P)&&(this._hasTaskZS=_?t:b,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=d,t.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this.zone),t.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this.zone),t.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this.zone))}fork(d,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,c):new T(d,c)}intercept(d,c,t){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,c,t):c}invoke(d,c,t,_,P){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,c,t,_,P):c.apply(t,_)}handleError(d,c){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,c):!0}scheduleTask(d,c){let t=c;if(this._scheduleTaskZS)this._hasTaskZS&&t._zoneDelegates.push(this._hasTaskDlgtOwner),t=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,c),t||(t=c);else if(c.scheduleFn)c.scheduleFn(c);else if(c.type==Z)N(c);else throw new Error("Task is missing scheduleFn.");return t}invokeTask(d,c,t,_){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,c,t,_):c.callback.apply(t,_)}cancelTask(d,c){let t;if(this._cancelTaskZS)t=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");t=c.cancelFn(c)}return t}hasTask(d,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,c)}catch(t){this.handleError(d,t)}}_updateTaskCount(d,c){let t=this._taskCounts,_=t[d],P=t[d]=_+c;if(P<0)throw new Error("More tasks executed then were scheduled.");if(_==0||P==0){let L={microTask:t.microTask>0,macroTask:t.macroTask>0,eventTask:t.eventTask>0,change:d};this.hasTask(this.zone,L)}}}class p{constructor(d,c,t,_,P,L){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=c,this.data=_,this.scheduleFn=P,this.cancelFn=L,!t)throw new Error("callback is not defined");this.callback=t;let a=this;d===Q&&_&&_.useG?this.invoke=p.invokeTask:this.invoke=function(){return p.invokeTask.call(e,a,this,arguments)}}static invokeTask(d,c,t){d||(d=this),te++;try{return d.runCount++,d.zone.runTask(d,c,t)}finally{te==1&&E(),te--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(H,q)}_transitionTo(d,c,t){if(this._state===c||this._state===t)this._state=d,d==H&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${c}'${t?" or '"+t+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let M=l("setTimeout"),C=l("Promise"),D=l("then"),V=[],x=!1,J;function W(A){if(J||e[C]&&(J=e[C].resolve(0)),J){let d=J[D];d||(d=J.then),d.call(J,A)}else e[M](A,0)}function N(A){te===0&&V.length===0&&W(E),A&&V.push(A)}function E(){if(!x){for(x=!0;V.length;){let A=V;V=[];for(let d=0;d<A.length;d++){let c=A[d];try{c.zone.runTask(c,null,null)}catch(t){X.onUnhandledError(t)}}}X.microtaskDrainDone(),x=!1}}let K={name:"NO ZONE"},H="notScheduled",q="scheduling",j="scheduled",g="running",B="canceling",h="unknown",Z="microTask",w="macroTask",Q="eventTask",se={},X={symbol:l,currentZoneFrame:()=>z,onUnhandledError:F,microtaskDrainDone:F,scheduleMicroTask:N,showUncaughtError:()=>!T[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:F,patchMethod:()=>F,bindArguments:()=>[],patchThen:()=>F,patchMacroTask:()=>F,patchEventPrototype:()=>F,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>F,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>F,wrapWithCurrentZone:()=>F,filterProperties:()=>[],attachOriginToPatched:()=>F,_redefineProperty:()=>F,patchCallbacks:()=>F,nativeScheduleMicroTask:W},z={parent:null,zone:new T(null,null)},re=null,te=0;function F(){}return r("Zone","Zone"),e.Zone=T})(globalThis);var pe=Object.getOwnPropertyDescriptor,Me=Object.defineProperty,Le=Object.getPrototypeOf,ht=Object.create,dt=Array.prototype.slice,Ae="addEventListener",je="removeEventListener",Oe=Zone.__symbol__(Ae),Ce=Zone.__symbol__(je),ce="true",ae="false",ye=Zone.__symbol__("");function xe(e,n){return Zone.current.wrap(e,n)}function $e(e,n,o,r,i){return Zone.current.scheduleMacroTask(e,n,o,r,i)}var $=Zone.__symbol__,Re=typeof window<"u",Ee=Re?window:void 0,Y=Re&&Ee||globalThis,_t="removeAttribute";function He(e,n){for(let o=e.length-1;o>=0;o--)typeof e[o]=="function"&&(e[o]=xe(e[o],n+"_"+o));return e}function Tt(e,n){let o=e.constructor.name;for(let r=0;r<n.length;r++){let i=n[r],l=e[i];if(l){let m=pe(e,i);if(!Je(m))continue;e[i]=(T=>{let b=function(){return T.apply(this,He(arguments,o+"."+i))};return le(b,T),b})(l)}}}function Je(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var Qe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ne=!("nw"in Y)&&typeof Y.process<"u"&&{}.toString.call(Y.process)==="[object process]",Be=!Ne&&!Qe&&!!(Re&&Ee.HTMLElement),et=typeof Y.process<"u"&&{}.toString.call(Y.process)==="[object process]"&&!Qe&&!!(Re&&Ee.HTMLElement),Pe={},qe=function(e){if(e=e||Y.event,!e)return;let n=Pe[e.type];n||(n=Pe[e.type]=$("ON_PROPERTY"+e.type));let o=this||e.target||Y,r=o[n],i;if(Be&&o===Ee&&e.type==="error"){let l=e;i=r&&r.call(this,l.message,l.filename,l.lineno,l.colno,l.error),i===!0&&e.preventDefault()}else i=r&&r.apply(this,arguments),i!=null&&!i&&e.preventDefault();return i};function Xe(e,n,o){let r=pe(e,n);if(!r&&o&&pe(o,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;let i=$("on"+n+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete r.writable,delete r.value;let l=r.get,m=r.set,T=n.slice(2),b=Pe[T];b||(b=Pe[T]=$("ON_PROPERTY"+T)),r.set=function(v){let p=this;if(!p&&e===Y&&(p=Y),!p)return;typeof p[b]=="function"&&p.removeEventListener(T,qe),m&&m.call(p,null),p[b]=v,typeof v=="function"&&p.addEventListener(T,qe,!1)},r.get=function(){let v=this;if(!v&&e===Y&&(v=Y),!v)return null;let p=v[b];if(p)return p;if(l){let M=l.call(this);if(M)return r.set.call(this,M),typeof v[_t]=="function"&&v.removeAttribute(n),M}return null},Me(e,n,r),e[i]=!0}function tt(e,n,o){if(n)for(let r=0;r<n.length;r++)Xe(e,"on"+n[r],o);else{let r=[];for(let i in e)i.slice(0,2)=="on"&&r.push(i);for(let i=0;i<r.length;i++)Xe(e,r[i],o)}}var oe=$("originalInstance");function ke(e){let n=Y[e];if(!n)return;Y[$(e)]=n,Y[e]=function(){let i=He(arguments,e);switch(i.length){case 0:this[oe]=new n;break;case 1:this[oe]=new n(i[0]);break;case 2:this[oe]=new n(i[0],i[1]);break;case 3:this[oe]=new n(i[0],i[1],i[2]);break;case 4:this[oe]=new n(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},le(Y[e],n);let o=new n(function(){}),r;for(r in o)e==="XMLHttpRequest"&&r==="responseBlob"||function(i){typeof o[i]=="function"?Y[e].prototype[i]=function(){return this[oe][i].apply(this[oe],arguments)}:Me(Y[e].prototype,i,{set:function(l){typeof l=="function"?(this[oe][i]=xe(l,e+"."+i),le(this[oe][i],l)):this[oe][i]=l},get:function(){return this[oe][i]}})}(r);for(r in n)r!=="prototype"&&n.hasOwnProperty(r)&&(Y[e][r]=n[r])}function ue(e,n,o){let r=e;for(;r&&!r.hasOwnProperty(n);)r=Le(r);!r&&e[n]&&(r=e);let i=$(n),l=null;if(r&&(!(l=r[i])||!r.hasOwnProperty(i))){l=r[i]=r[n];let m=r&&pe(r,n);if(Je(m)){let T=o(l,i,n);r[n]=function(){return T(this,arguments)},le(r[n],l)}}return l}function Et(e,n,o){let r=null;function i(l){let m=l.data;return m.args[m.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(m.target,m.args),l}r=ue(e,n,l=>function(m,T){let b=o(m,T);return b.cbIdx>=0&&typeof T[b.cbIdx]=="function"?$e(b.name,T[b.cbIdx],b,i):l.apply(m,T)})}function le(e,n){e[$("OriginalDelegate")]=n}var Ye=!1,De=!1;function gt(){try{let e=Ee.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function mt(){if(Ye)return De;Ye=!0;try{let e=Ee.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(De=!0)}catch{}return De}Zone.__load_patch("ZoneAwarePromise",(e,n,o)=>{let r=Object.getOwnPropertyDescriptor,i=Object.defineProperty;function l(a){if(a&&a.toString===Object.prototype.toString){let u=a.constructor&&a.constructor.name;return(u||"")+": "+JSON.stringify(a)}return a?a.toString():Object.prototype.toString.call(a)}let m=o.symbol,T=[],b=e[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,v=m("Promise"),p=m("then"),M="__creationTrace__";o.onUnhandledError=a=>{if(o.showUncaughtError()){let u=a&&a.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",a.zone.name,"; Task:",a.task&&a.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(a)}},o.microtaskDrainDone=()=>{for(;T.length;){let a=T.shift();try{a.zone.runGuarded(()=>{throw a.throwOriginal?a.rejection:a})}catch(u){D(u)}}};let C=m("unhandledPromiseRejectionHandler");function D(a){o.onUnhandledError(a);try{let u=n[C];typeof u=="function"&&u.call(this,a)}catch{}}function V(a){return a&&a.then}function x(a){return a}function J(a){return c.reject(a)}let W=m("state"),N=m("value"),E=m("finally"),K=m("parentPromiseValue"),H=m("parentPromiseState"),q="Promise.then",j=null,g=!0,B=!1,h=0;function Z(a,u){return s=>{try{X(a,u,s)}catch(f){X(a,!1,f)}}}let w=function(){let a=!1;return function(s){return function(){a||(a=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",se=m("currentTaskTrace");function X(a,u,s){let f=w();if(a===s)throw new TypeError(Q);if(a[W]===j){let k=null;try{(typeof s=="object"||typeof s=="function")&&(k=s&&s.then)}catch(R){return f(()=>{X(a,!1,R)})(),a}if(u!==B&&s instanceof c&&s.hasOwnProperty(W)&&s.hasOwnProperty(N)&&s[W]!==j)re(s),X(a,s[W],s[N]);else if(u!==B&&typeof k=="function")try{k.call(s,f(Z(a,u)),f(Z(a,!1)))}catch(R){f(()=>{X(a,!1,R)})()}else{a[W]=u;let R=a[N];if(a[N]=s,a[E]===E&&u===g&&(a[W]=a[H],a[N]=a[K]),u===B&&s instanceof Error){let y=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];y&&i(s,se,{configurable:!0,enumerable:!1,writable:!0,value:y})}for(let y=0;y<R.length;)te(a,R[y++],R[y++],R[y++],R[y++]);if(R.length==0&&u==B){a[W]=h;let y=s;try{throw new Error("Uncaught (in promise): "+l(s)+(s&&s.stack?`
`+s.stack:""))}catch(I){y=I}b&&(y.throwOriginal=!0),y.rejection=s,y.promise=a,y.zone=n.current,y.task=n.currentTask,T.push(y),o.scheduleMicroTask()}}}return a}let z=m("rejectionHandledHandler");function re(a){if(a[W]===h){try{let u=n[z];u&&typeof u=="function"&&u.call(this,{rejection:a[N],promise:a})}catch{}a[W]=B;for(let u=0;u<T.length;u++)a===T[u].promise&&T.splice(u,1)}}function te(a,u,s,f,k){re(a);let R=a[W],y=R?typeof f=="function"?f:x:typeof k=="function"?k:J;u.scheduleMicroTask(q,()=>{try{let I=a[N],S=!!s&&E===s[E];S&&(s[K]=I,s[H]=R);let O=u.run(y,void 0,S&&y!==J&&y!==x?[]:[I]);X(s,!0,O)}catch(I){X(s,!1,I)}},s)}let F="function ZoneAwarePromise() { [native code] }",A=function(){},d=e.AggregateError;class c{static toString(){return F}static resolve(u){return u instanceof c?u:X(new this(null),g,u)}static reject(u){return X(new this(null),B,u)}static withResolvers(){let u={};return u.promise=new c((s,f)=>{u.resolve=s,u.reject=f}),u}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new d([],"All promises were rejected"));let s=[],f=0;try{for(let y of u)f++,s.push(c.resolve(y))}catch{return Promise.reject(new d([],"All promises were rejected"))}if(f===0)return Promise.reject(new d([],"All promises were rejected"));let k=!1,R=[];return new c((y,I)=>{for(let S=0;S<s.length;S++)s[S].then(O=>{k||(k=!0,y(O))},O=>{R.push(O),f--,f===0&&(k=!0,I(new d(R,"All promises were rejected")))})})}static race(u){let s,f,k=new this((I,S)=>{s=I,f=S});function R(I){s(I)}function y(I){f(I)}for(let I of u)V(I)||(I=this.resolve(I)),I.then(R,y);return k}static all(u){return c.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof c?this:c).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,k,R=new this((O,U)=>{f=O,k=U}),y=2,I=0,S=[];for(let O of u){V(O)||(O=this.resolve(O));let U=I;try{O.then(G=>{S[U]=s?s.thenCallback(G):G,y--,y===0&&f(S)},G=>{s?(S[U]=s.errorCallback(G),y--,y===0&&f(S)):k(G)})}catch(G){k(G)}y++,I++}return y-=2,y===0&&f(S),R}constructor(u){let s=this;if(!(s instanceof c))throw new Error("Must be an instanceof Promise.");s[W]=j,s[N]=[];try{let f=w();u&&u(f(Z(s,g)),f(Z(s,B)))}catch(f){X(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return c}then(u,s){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||c);let k=new f(A),R=n.current;return this[W]==j?this[N].push(R,k,u,s):te(this,R,k,u,s),k}catch(u){return this.then(null,u)}finally(u){let s=this.constructor?.[Symbol.species];(!s||typeof s!="function")&&(s=c);let f=new s(A);f[E]=E;let k=n.current;return this[W]==j?this[N].push(k,f,u,u):te(this,k,f,u,u),f}}c.resolve=c.resolve,c.reject=c.reject,c.race=c.race,c.all=c.all;let t=e[v]=e.Promise;e.Promise=c;let _=m("thenPatched");function P(a){let u=a.prototype,s=r(u,"then");if(s&&(s.writable===!1||!s.configurable))return;let f=u.then;u[p]=f,a.prototype.then=function(k,R){return new c((I,S)=>{f.call(this,I,S)}).then(k,R)},a[_]=!0}o.patchThen=P;function L(a){return function(u,s){let f=a.apply(u,s);if(f instanceof c)return f;let k=f.constructor;return k[_]||P(k),f}}return t&&(P(t),ue(e,"fetch",a=>L(a))),Promise[n.__symbol__("uncaughtPromiseErrors")]=T,c});Zone.__load_patch("toString",e=>{let n=Function.prototype.toString,o=$("OriginalDelegate"),r=$("Promise"),i=$("Error"),l=function(){if(typeof this=="function"){let v=this[o];if(v)return typeof v=="function"?n.call(v):Object.prototype.toString.call(v);if(this===Promise){let p=e[r];if(p)return n.call(p)}if(this===Error){let p=e[i];if(p)return n.call(p)}}return n.call(this)};l[o]=n,Function.prototype.toString=l;let m=Object.prototype.toString,T="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?T:m.call(this)}});var _e=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{_e=!1}var pt={useG:!0},ne={},nt={},rt=new RegExp("^"+ye+"(\\w+)(true|false)$"),ot=$("propagationStopped");function st(e,n){let o=(n?n(e):e)+ae,r=(n?n(e):e)+ce,i=ye+o,l=ye+r;ne[e]={},ne[e][ae]=i,ne[e][ce]=l}function yt(e,n,o,r){let i=r&&r.add||Ae,l=r&&r.rm||je,m=r&&r.listeners||"eventListeners",T=r&&r.rmAll||"removeAllListeners",b=$(i),v="."+i+":",p="prependListener",M="."+p+":",C=function(N,E,K){if(N.isRemoved)return;let H=N.callback;typeof H=="object"&&H.handleEvent&&(N.callback=g=>H.handleEvent(g),N.originalDelegate=H);let q;try{N.invoke(N,E,[K])}catch(g){q=g}let j=N.options;if(j&&typeof j=="object"&&j.once){let g=N.originalDelegate?N.originalDelegate:N.callback;E[l].call(E,K.type,g,j)}return q};function D(N,E,K){if(E=E||e.event,!E)return;let H=N||E.target||e,q=H[ne[E.type][K?ce:ae]];if(q){let j=[];if(q.length===1){let g=C(q[0],H,E);g&&j.push(g)}else{let g=q.slice();for(let B=0;B<g.length&&!(E&&E[ot]===!0);B++){let h=C(g[B],H,E);h&&j.push(h)}}if(j.length===1)throw j[0];for(let g=0;g<j.length;g++){let B=j[g];n.nativeScheduleMicroTask(()=>{throw B})}}}let V=function(N){return D(this,N,!1)},x=function(N){return D(this,N,!0)};function J(N,E){if(!N)return!1;let K=!0;E&&E.useG!==void 0&&(K=E.useG);let H=E&&E.vh,q=!0;E&&E.chkDup!==void 0&&(q=E.chkDup);let j=!1;E&&E.rt!==void 0&&(j=E.rt);let g=N;for(;g&&!g.hasOwnProperty(i);)g=Le(g);if(!g&&N[i]&&(g=N),!g||g[b])return!1;let B=E&&E.eventNameToString,h={},Z=g[b]=g[i],w=g[$(l)]=g[l],Q=g[$(m)]=g[m],se=g[$(T)]=g[T],X;E&&E.prepend&&(X=g[$(E.prepend)]=g[E.prepend]);function z(s,f){return!_e&&typeof s=="object"&&s?!!s.capture:!_e||!f?s:typeof s=="boolean"?{capture:s,passive:!0}:s?typeof s=="object"&&s.passive!==!1?{...s,passive:!0}:s:{passive:!0}}let re=function(s){if(!h.isExisting)return Z.call(h.target,h.eventName,h.capture?x:V,h.options)},te=function(s){if(!s.isRemoved){let f=ne[s.eventName],k;f&&(k=f[s.capture?ce:ae]);let R=k&&s.target[k];if(R){for(let y=0;y<R.length;y++)if(R[y]===s){R.splice(y,1),s.isRemoved=!0,R.length===0&&(s.allRemoved=!0,s.target[k]=null);break}}}if(s.allRemoved)return w.call(s.target,s.eventName,s.capture?x:V,s.options)},F=function(s){return Z.call(h.target,h.eventName,s.invoke,h.options)},A=function(s){return X.call(h.target,h.eventName,s.invoke,h.options)},d=function(s){return w.call(s.target,s.eventName,s.invoke,s.options)},c=K?re:F,t=K?te:d,_=function(s,f){let k=typeof f;return k==="function"&&s.callback===f||k==="object"&&s.originalDelegate===f},P=E&&E.diff?E.diff:_,L=Zone[$("UNPATCHED_EVENTS")],a=e[$("PASSIVE_EVENTS")],u=function(s,f,k,R,y=!1,I=!1){return function(){let S=this||e,O=arguments[0];E&&E.transferEventName&&(O=E.transferEventName(O));let U=arguments[1];if(!U)return s.apply(this,arguments);if(Ne&&O==="uncaughtException")return s.apply(this,arguments);let G=!1;if(typeof U!="function"){if(!U.handleEvent)return s.apply(this,arguments);G=!0}if(H&&!H(s,U,S,arguments))return;let fe=_e&&!!a&&a.indexOf(O)!==-1,ee=z(arguments[2],fe),ge=ee&&typeof ee=="object"&&ee.signal&&typeof ee.signal=="object"?ee.signal:void 0;if(ge?.aborted)return;if(L){for(let he=0;he<L.length;he++)if(O===L[he])return fe?s.call(S,O,U,ee):s.apply(this,arguments)}let Ie=ee?typeof ee=="boolean"?!0:ee.capture:!1,Ue=ee&&typeof ee=="object"?ee.once:!1,at=Zone.current,Se=ne[O];Se||(st(O,B),Se=ne[O]);let Ge=Se[Ie?ce:ae],de=S[Ge],Ve=!1;if(de){if(Ve=!0,q){for(let he=0;he<de.length;he++)if(P(de[he],U))return}}else de=S[Ge]=[];let ve,ze=S.constructor.name,Fe=nt[ze];Fe&&(ve=Fe[O]),ve||(ve=ze+f+(B?B(O):O)),h.options=ee,Ue&&(h.options.once=!1),h.target=S,h.capture=Ie,h.eventName=O,h.isExisting=Ve;let me=K?pt:void 0;me&&(me.taskData=h),ge&&(h.options.signal=void 0);let ie=at.scheduleEventTask(ve,U,me,k,R);if(ge&&(h.options.signal=ge,s.call(ge,"abort",()=>{ie.zone.cancelTask(ie)},{once:!0})),h.target=null,me&&(me.taskData=null),Ue&&(ee.once=!0),!_e&&typeof ie.options=="boolean"||(ie.options=ee),ie.target=S,ie.capture=Ie,ie.eventName=O,G&&(ie.originalDelegate=U),I?de.unshift(ie):de.push(ie),y)return S}};return g[i]=u(Z,v,c,t,j),X&&(g[p]=u(X,M,A,t,j,!0)),g[l]=function(){let s=this||e,f=arguments[0];E&&E.transferEventName&&(f=E.transferEventName(f));let k=arguments[2],R=k?typeof k=="boolean"?!0:k.capture:!1,y=arguments[1];if(!y)return w.apply(this,arguments);if(H&&!H(w,y,s,arguments))return;let I=ne[f],S;I&&(S=I[R?ce:ae]);let O=S&&s[S];if(O)for(let U=0;U<O.length;U++){let G=O[U];if(P(G,y)){if(O.splice(U,1),G.isRemoved=!0,O.length===0&&(G.allRemoved=!0,s[S]=null,typeof f=="string")){let fe=ye+"ON_PROPERTY"+f;s[fe]=null}return G.zone.cancelTask(G),j?s:void 0}}return w.apply(this,arguments)},g[m]=function(){let s=this||e,f=arguments[0];E&&E.transferEventName&&(f=E.transferEventName(f));let k=[],R=it(s,B?B(f):f);for(let y=0;y<R.length;y++){let I=R[y],S=I.originalDelegate?I.originalDelegate:I.callback;k.push(S)}return k},g[T]=function(){let s=this||e,f=arguments[0];if(f){E&&E.transferEventName&&(f=E.transferEventName(f));let k=ne[f];if(k){let R=k[ae],y=k[ce],I=s[R],S=s[y];if(I){let O=I.slice();for(let U=0;U<O.length;U++){let G=O[U],fe=G.originalDelegate?G.originalDelegate:G.callback;this[l].call(this,f,fe,G.options)}}if(S){let O=S.slice();for(let U=0;U<O.length;U++){let G=O[U],fe=G.originalDelegate?G.originalDelegate:G.callback;this[l].call(this,f,fe,G.options)}}}}else{let k=Object.keys(s);for(let R=0;R<k.length;R++){let y=k[R],I=rt.exec(y),S=I&&I[1];S&&S!=="removeListener"&&this[T].call(this,S)}this[T].call(this,"removeListener")}if(j)return this},le(g[i],Z),le(g[l],w),se&&le(g[T],se),Q&&le(g[m],Q),!0}let W=[];for(let N=0;N<o.length;N++)W[N]=J(o[N],r);return W}function it(e,n){if(!n){let l=[];for(let m in e){let T=rt.exec(m),b=T&&T[1];if(b&&(!n||b===n)){let v=e[m];if(v)for(let p=0;p<v.length;p++)l.push(v[p])}}return l}let o=ne[n];o||(st(n),o=ne[n]);let r=e[o[ae]],i=e[o[ce]];return r?i?r.concat(i):r.slice():i?i.slice():[]}function kt(e,n){let o=e.Event;o&&o.prototype&&n.patchMethod(o.prototype,"stopImmediatePropagation",r=>function(i,l){i[ot]=!0,r&&r.apply(i,l)})}function vt(e,n,o,r,i){let l=Zone.__symbol__(r);if(n[l])return;let m=n[l]=n[r];n[r]=function(T,b,v){return b&&b.prototype&&i.forEach(function(p){let M=`${o}.${r}::`+p,C=b.prototype;try{if(C.hasOwnProperty(p)){let D=e.ObjectGetOwnPropertyDescriptor(C,p);D&&D.value?(D.value=e.wrapWithCurrentZone(D.value,M),e._redefineProperty(b.prototype,p,D)):C[p]&&(C[p]=e.wrapWithCurrentZone(C[p],M))}else C[p]&&(C[p]=e.wrapWithCurrentZone(C[p],M))}catch{}}),m.call(n,T,b,v)},e.attachOriginToPatched(n[r],m)}function ct(e,n,o){if(!o||o.length===0)return n;let r=o.filter(l=>l.target===e);if(!r||r.length===0)return n;let i=r[0].ignoreProperties;return n.filter(l=>i.indexOf(l)===-1)}function Ke(e,n,o,r){if(!e)return;let i=ct(e,n,o);tt(e,i,r)}function Ze(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function bt(e,n){if(Ne&&!et||Zone[e.symbol("patchEvents")])return;let o=n.__Zone_ignore_on_properties,r=[];if(Be){let i=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=gt()?[{target:i,ignoreProperties:["error"]}]:[];Ke(i,Ze(i),o&&o.concat(l),Le(i))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<r.length;i++){let l=n[r[i]];l&&l.prototype&&Ke(l.prototype,Ze(l.prototype),o)}}Zone.__load_patch("util",(e,n,o)=>{let r=Ze(e);o.patchOnProperties=tt,o.patchMethod=ue,o.bindArguments=He,o.patchMacroTask=Et;let i=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[i]=e[l]),e[i]&&(n[i]=n[l]=e[i]),o.patchEventPrototype=kt,o.patchEventTarget=yt,o.isIEOrEdge=mt,o.ObjectDefineProperty=Me,o.ObjectGetOwnPropertyDescriptor=pe,o.ObjectCreate=ht,o.ArraySlice=dt,o.patchClass=ke,o.wrapWithCurrentZone=xe,o.filterProperties=ct,o.attachOriginToPatched=le,o._redefineProperty=Object.defineProperty,o.patchCallbacks=vt,o.getGlobalObjects=()=>({globalSources:nt,zoneSymbolEventNames:ne,eventNames:r,isBrowser:Be,isMix:et,isNode:Ne,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ye,ADD_EVENT_LISTENER_STR:Ae,REMOVE_EVENT_LISTENER_STR:je})});function wt(e,n){n.patchMethod(e,"queueMicrotask",o=>function(r,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}var we=$("zoneTask");function Te(e,n,o,r){let i=null,l=null;n+=r,o+=r;let m={};function T(v){let p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=i.apply(e,p.args),v}function b(v){return l.call(e,v.data.handleId)}i=ue(e,n,v=>function(p,M){if(typeof M[0]=="function"){let C={isPeriodic:r==="Interval",delay:r==="Timeout"||r==="Interval"?M[1]||0:void 0,args:M},D=M[0];M[0]=function(){try{return D.apply(this,arguments)}finally{C.isPeriodic||(typeof C.handleId=="number"?delete m[C.handleId]:C.handleId&&(C.handleId[we]=null))}};let V=$e(n,M[0],C,T,b);if(!V)return V;let x=V.data.handleId;return typeof x=="number"?m[x]=V:x&&(x[we]=V),x&&x.ref&&x.unref&&typeof x.ref=="function"&&typeof x.unref=="function"&&(V.ref=x.ref.bind(x),V.unref=x.unref.bind(x)),typeof x=="number"||x?x:V}else return v.apply(e,M)}),l=ue(e,o,v=>function(p,M){let C=M[0],D;typeof C=="number"?D=m[C]:(D=C&&C[we],D||(D=C)),D&&typeof D.type=="string"?D.state!=="notScheduled"&&(D.cancelFn&&D.data.isPeriodic||D.runCount===0)&&(typeof C=="number"?delete m[C]:C&&(C[we]=null),D.zone.cancelTask(D)):v.apply(e,M)})}function Pt(e,n){let{isBrowser:o,isMix:r}=n.getGlobalObjects();if(!o&&!r||!e.customElements||!("customElements"in e))return;let i=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];n.patchCallbacks(n,e.customElements,"customElements","define",i)}function Rt(e,n){if(Zone[n.symbol("patchEventTarget")])return;let{eventNames:o,zoneSymbolEventNames:r,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:m}=n.getGlobalObjects();for(let b=0;b<o.length;b++){let v=o[b],p=v+l,M=v+i,C=m+p,D=m+M;r[v]={},r[v][l]=C,r[v][i]=D}let T=e.EventTarget;if(!(!T||!T.prototype))return n.patchEventTarget(e,n,[T&&T.prototype]),!0}function Nt(e,n){n.patchEventPrototype(e,n)}Zone.__load_patch("legacy",e=>{let n=e[Zone.__symbol__("legacyPatch")];n&&n()});Zone.__load_patch("timers",e=>{let n="set",o="clear";Te(e,n,o,"Timeout"),Te(e,n,o,"Interval"),Te(e,n,o,"Immediate")});Zone.__load_patch("requestAnimationFrame",e=>{Te(e,"request","cancel","AnimationFrame"),Te(e,"mozRequest","mozCancel","AnimationFrame"),Te(e,"webkitRequest","webkitCancel","AnimationFrame")});Zone.__load_patch("blocking",(e,n)=>{let o=["alert","prompt","confirm"];for(let r=0;r<o.length;r++){let i=o[r];ue(e,i,(l,m,T)=>function(b,v){return n.current.run(l,e,v,T)})}});Zone.__load_patch("EventTarget",(e,n,o)=>{Nt(e,o),Rt(e,o);let r=e.XMLHttpRequestEventTarget;r&&r.prototype&&o.patchEventTarget(e,o,[r.prototype])});Zone.__load_patch("MutationObserver",(e,n,o)=>{ke("MutationObserver"),ke("WebKitMutationObserver")});Zone.__load_patch("IntersectionObserver",(e,n,o)=>{ke("IntersectionObserver")});Zone.__load_patch("FileReader",(e,n,o)=>{ke("FileReader")});Zone.__load_patch("on_property",(e,n,o)=>{bt(o,e)});Zone.__load_patch("customElements",(e,n,o)=>{Pt(e,o)});Zone.__load_patch("XHR",(e,n)=>{b(e);let o=$("xhrTask"),r=$("xhrSync"),i=$("xhrListener"),l=$("xhrScheduled"),m=$("xhrURL"),T=$("xhrErrorBeforeScheduled");function b(v){let p=v.XMLHttpRequest;if(!p)return;let M=p.prototype;function C(h){return h[o]}let D=M[Oe],V=M[Ce];if(!D){let h=v.XMLHttpRequestEventTarget;if(h){let Z=h.prototype;D=Z[Oe],V=Z[Ce]}}let x="readystatechange",J="scheduled";function W(h){let Z=h.data,w=Z.target;w[l]=!1,w[T]=!1;let Q=w[i];D||(D=w[Oe],V=w[Ce]),Q&&V.call(w,x,Q);let se=w[i]=()=>{if(w.readyState===w.DONE)if(!Z.aborted&&w[l]&&h.state===J){let z=w[n.__symbol__("loadfalse")];if(w.status!==0&&z&&z.length>0){let re=h.invoke;h.invoke=function(){let te=w[n.__symbol__("loadfalse")];for(let F=0;F<te.length;F++)te[F]===h&&te.splice(F,1);!Z.aborted&&h.state===J&&re.call(h)},z.push(h)}else h.invoke()}else!Z.aborted&&w[l]===!1&&(w[T]=!0)};return D.call(w,x,se),w[o]||(w[o]=h),g.apply(w,Z.args),w[l]=!0,h}function N(){}function E(h){let Z=h.data;return Z.aborted=!0,B.apply(Z.target,Z.args)}let K=ue(M,"open",()=>function(h,Z){return h[r]=Z[2]==!1,h[m]=Z[1],K.apply(h,Z)}),H="XMLHttpRequest.send",q=$("fetchTaskAborting"),j=$("fetchTaskScheduling"),g=ue(M,"send",()=>function(h,Z){if(n.current[j]===!0||h[r])return g.apply(h,Z);{let w={target:h,url:h[m],isPeriodic:!1,args:Z,aborted:!1},Q=$e(H,N,w,W,E);h&&h[T]===!0&&!w.aborted&&Q.state===J&&Q.invoke()}}),B=ue(M,"abort",()=>function(h,Z){let w=C(h);if(w&&typeof w.type=="string"){if(w.cancelFn==null||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(n.current[q]===!0)return B.apply(h,Z)})}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&Tt(e.navigator.geolocation,["getCurrentPosition","watchPosition"])});Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function o(r){return function(i){it(e,r).forEach(m=>{let T=e.PromiseRejectionEvent;if(T){let b=new T(r,{promise:i.promise,reason:i.rejection});m.invoke(b)}})}}e.PromiseRejectionEvent&&(n[$("unhandledPromiseRejectionHandler")]=o("unhandledrejection"),n[$("rejectionHandledHandler")]=o("rejectionhandled"))});Zone.__load_patch("queueMicrotask",(e,n,o)=>{wt(e,o)});
/*! Bundled license information:

@angular/localize/fesm2022/localize.mjs:
  (**
   * @license Angular v17.0.9
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/localize/fesm2022/init.mjs:
  (**
   * @license Angular v17.0.9
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

zone.js/fesm2015/zone.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/

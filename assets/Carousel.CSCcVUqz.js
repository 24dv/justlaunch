import{c as me,j as v,a as H,A as Kt,u as ge}from"./index.BQGyVRBY.js";import{r as L}from"./vendor.CuVfoR2-.js";import{B as Qt}from"./button.Dk_ASQmK.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=me("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);function he(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ut(t){return he(t)||Array.isArray(t)}function xe(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function It(t,e){const n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(e.breakpoints||{}));return c!==s?!1:n.every(r=>{const l=t[r],a=e[r];return typeof l=="function"?`${l}`==`${a}`:!Ut(l)||!Ut(a)?l===a:It(l,a)})}function Gt(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function be(t,e){if(t.length!==e.length)return!1;const n=Gt(t),o=Gt(e);return n.every((c,s)=>{const r=o[s];return It(c,r)})}function At(t){return typeof t=="number"}function Lt(t){return typeof t=="string"}function yt(t){return typeof t=="boolean"}function qt(t){return Object.prototype.toString.call(t)==="[object Object]"}function T(t){return Math.abs(t)}function Pt(t){return Math.sign(t)}function dt(t,e){return T(t-e)}function ye(t,e){if(t===0||e===0||T(t)<=T(e))return 0;const n=dt(T(t),T(e));return T(n/t)}function pt(t){return mt(t).map(Number)}function V(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Tt(t,e){return e===ht(t)}function $t(t,e=0){return Array.from(Array(t),(n,o)=>e+o)}function mt(t){return Object.keys(t)}function Xt(t,e){return[t,e].reduce((n,o)=>(mt(o).forEach(c=>{const s=n[c],r=o[c],l=qt(s)&&qt(r);n[c]=l?Xt(s,r):r}),n),{})}function Dt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function Se(t,e){const n={start:o,center:c,end:s};function o(){return 0}function c(a){return s(a)/2}function s(a){return e-a}function r(a,i){return Lt(t)?n[t](a):t(e,a,i)}return{measure:r}}function gt(){let t=[];function e(c,s,r,l={passive:!0}){let a;if("addEventListener"in c)c.addEventListener(s,r,l),a=()=>c.removeEventListener(s,r,l);else{const i=c;i.addListener(r),a=()=>i.removeListener(r)}return t.push(a),o}function n(){t=t.filter(c=>c())}const o={add:e,clear:n};return o}function ve(t,e,n,o){const c=gt(),s=1e3/60;let r=null,l=0,a=0;function i(){c.add(t,"visibilitychange",()=>{t.hidden&&u()})}function x(){y(),c.clear()}function d(h){if(!a)return;r||(r=h);const f=h-r;for(r=h,l+=f;l>=s;)n(s),l-=s;const m=l/s;o(m),a&&e.requestAnimationFrame(d)}function g(){a||(a=e.requestAnimationFrame(d))}function y(){e.cancelAnimationFrame(a),r=null,l=0,a=0}function u(){r=null,l=0}return{init:i,destroy:x,start:g,stop:y,update:()=>n(s),render:o}}function Ce(t,e){const n=e==="rtl",o=t==="y",c=o?"y":"x",s=o?"x":"y",r=!o&&n?-1:1,l=x(),a=d();function i(u){const{height:p,width:h}=u;return o?p:h}function x(){return o?"top":n?"right":"left"}function d(){return o?"bottom":n?"left":"right"}function g(u){return u*r}return{scroll:c,cross:s,startEdge:l,endEdge:a,measureSize:i,direction:g}}function ot(t=0,e=0){const n=T(t-e);function o(i){return i<t}function c(i){return i>e}function s(i){return o(i)||c(i)}function r(i){return s(i)?o(i)?t:e:i}function l(i){return n?i-n*Math.ceil((i-e)/n):i}return{length:n,max:e,min:t,constrain:r,reachedAny:s,reachedMax:c,reachedMin:o,removeOffset:l}}function Yt(t,e,n){const{constrain:o}=ot(0,t),c=t+1;let s=r(e);function r(g){return n?T((c+g)%c):o(g)}function l(){return s}function a(g){return s=r(g),d}function i(g){return x().set(l()+g)}function x(){return Yt(t,l(),n)}const d={get:l,set:a,add:i,clone:x};return d}function Ne(t,e,n,o,c,s,r,l,a,i,x,d,g,y,u,p,h,f,m){const{cross:S,direction:j}=t,A=["INPUT","SELECT","TEXTAREA"],D={passive:!1},C=gt(),N=gt(),w=ot(50,225).constrain(y.measure(20)),M={mouse:300,touch:400},E={mouse:500,touch:600},R=u?43:25;let U=!1,G=0,q=0,nt=!1,Z=!1,Q=!1,J=!1;function ct(b){if(!m)return;function I(k){(yt(m)||m(b,k))&&lt(k)}const O=e;C.add(O,"dragstart",k=>k.preventDefault(),D).add(O,"touchmove",()=>{},D).add(O,"touchend",()=>{}).add(O,"touchstart",I).add(O,"mousedown",I).add(O,"touchcancel",F).add(O,"contextmenu",F).add(O,"click",Y,!0)}function $(){C.clear(),N.clear()}function st(){const b=J?n:e;N.add(b,"touchmove",z,D).add(b,"touchend",F).add(b,"mousemove",z,D).add(b,"mouseup",F)}function it(b){const I=b.nodeName||"";return A.includes(I)}function X(){return(u?E:M)[J?"mouse":"touch"]}function at(b,I){const O=d.add(Pt(b)*-1),k=x.byDistance(b,!u).distance;return u||T(b)<w?k:h&&I?k*.5:x.byIndex(O.get(),0).distance}function lt(b){const I=Dt(b,o);J=I,Q=u&&I&&!b.buttons&&U,U=dt(c.get(),r.get())>=2,!(I&&b.button!==0)&&(it(b.target)||(nt=!0,s.pointerDown(b),i.useFriction(0).useDuration(0),c.set(r),st(),G=s.readPoint(b),q=s.readPoint(b,S),g.emit("pointerDown")))}function z(b){if(!Dt(b,o)&&b.touches.length>=2)return F(b);const O=s.readPoint(b),k=s.readPoint(b,S),K=dt(O,G),_=dt(k,q);if(!Z&&!J&&(!b.cancelable||(Z=K>_,!Z)))return F(b);const W=s.pointerMove(b);K>p&&(Q=!0),i.useFriction(.3).useDuration(.75),l.start(),c.add(j(W)),b.preventDefault()}function F(b){const O=x.byDistance(0,!1).index!==d.get(),k=s.pointerUp(b)*X(),K=at(j(k),O),_=ye(k,K),W=R-10*_,tt=f+_/50;Z=!1,nt=!1,N.clear(),i.useDuration(W).useFriction(tt),a.distance(K,!u),J=!1,g.emit("pointerUp")}function Y(b){Q&&(b.stopPropagation(),b.preventDefault(),Q=!1)}function B(){return nt}return{init:ct,destroy:$,pointerDown:B}}function we(t,e){let o,c;function s(d){return d.timeStamp}function r(d,g){const u=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Dt(d,e)?d:d.touches[0])[u]}function l(d){return o=d,c=d,r(d)}function a(d){const g=r(d)-r(c),y=s(d)-s(o)>170;return c=d,y&&(o=d),g}function i(d){if(!o||!c)return 0;const g=r(c)-r(o),y=s(d)-s(o),u=s(d)-s(c)>170,p=g/y;return y&&!u&&T(p)>.1?p:0}return{pointerDown:l,pointerMove:a,pointerUp:i,readPoint:r}}function Ee(){function t(n){const{offsetTop:o,offsetLeft:c,offsetWidth:s,offsetHeight:r}=n;return{top:o,right:c+s,bottom:o+r,left:c,width:s,height:r}}return{measure:t}}function je(t){function e(o){return t*(o/100)}return{measure:e}}function Le(t,e,n,o,c,s,r){const l=[t].concat(o);let a,i,x=[],d=!1;function g(h){return c.measureSize(r.measure(h))}function y(h){if(!s)return;i=g(t),x=o.map(g);function f(m){for(const S of m){if(d)return;const j=S.target===t,A=o.indexOf(S.target),D=j?i:x[A],C=g(j?t:o[A]);if(T(C-D)>=.5){h.reInit(),e.emit("resize");break}}}a=new ResizeObserver(m=>{(yt(s)||s(h,m))&&f(m)}),n.requestAnimationFrame(()=>{l.forEach(m=>a.observe(m))})}function u(){d=!0,a&&a.disconnect()}return{init:y,destroy:u}}function De(t,e,n,o,c,s){let r=0,l=0,a=c,i=s,x=t.get(),d=0;function g(D){const C=D/1e3,N=a*C,w=o.get()-t.get(),M=!a;let E=0;return M?(r=0,n.set(o),t.set(o),E=w):(n.set(t),r+=w/N,r*=i,x+=r,t.add(r*C),E=x-d),l=Pt(E),d=x,A}function y(){const D=o.get()-e.get();return T(D)<.001}function u(){return a}function p(){return l}function h(){return r}function f(){return S(c)}function m(){return j(s)}function S(D){return a=D,A}function j(D){return i=D,A}const A={direction:p,duration:u,velocity:h,seek:g,settled:y,useBaseFriction:m,useBaseDuration:f,useFriction:j,useDuration:S};return A}function Ie(t,e,n,o,c){const s=c.measure(10),r=c.measure(50),l=ot(.1,.99);let a=!1;function i(){return!(a||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function x(y){if(!i())return;const u=t.reachedMin(e.get())?"min":"max",p=T(t[u]-e.get()),h=n.get()-e.get(),f=l.constrain(p/r);n.subtract(h*f),!y&&T(h)<s&&(n.set(t.constrain(n.get())),o.useDuration(25).useBaseFriction())}function d(y){a=!y}return{shouldConstrain:i,constrain:x,toggleActive:d}}function Ae(t,e,n,o,c){const s=ot(-e+t,0),r=d(),l=x(),a=g();function i(u,p){return dt(u,p)<1}function x(){const u=r[0],p=V(r),h=r.lastIndexOf(u),f=r.indexOf(p)+1;return ot(h,f)}function d(){return n.map((u,p)=>{const{min:h,max:f}=s,m=s.constrain(u),S=!p,j=Tt(n,p);return S?f:j||i(h,m)?h:i(f,m)?f:m}).map(u=>parseFloat(u.toFixed(3)))}function g(){if(e<=t+c)return[s.max];if(o==="keepSnaps")return r;const{min:u,max:p}=l;return r.slice(u,p)}return{snapsContained:a,scrollContainLimit:l}}function Pe(t,e,n){const o=e[0],c=n?o-t:V(e);return{limit:ot(c,o)}}function Te(t,e,n,o){const s=e.min+.1,r=e.max+.1,{reachedMin:l,reachedMax:a}=ot(s,r);function i(g){return g===1?a(n.get()):g===-1?l(n.get()):!1}function x(g){if(!i(g))return;const y=t*(g*-1);o.forEach(u=>u.add(y))}return{loop:x}}function Me(t){const{max:e,length:n}=t;function o(s){const r=s-e;return n?r/-n:0}return{get:o}}function Oe(t,e,n,o,c){const{startEdge:s,endEdge:r}=t,{groupSlides:l}=c,a=d().map(e.measure),i=g(),x=y();function d(){return l(o).map(p=>V(p)[r]-p[0][s]).map(T)}function g(){return o.map(p=>n[s]-p[s]).map(p=>-T(p))}function y(){return l(i).map(p=>p[0]).map((p,h)=>p+a[h])}return{snaps:i,snapsAligned:x}}function Fe(t,e,n,o,c,s){const{groupSlides:r}=c,{min:l,max:a}=o,i=x();function x(){const g=r(s),y=!t||e==="keepSnaps";return n.length===1?[s]:y?g:g.slice(l,a).map((u,p,h)=>{const f=!p,m=Tt(h,p);if(f){const S=V(h[0])+1;return $t(S)}if(m){const S=ht(s)-V(h)[0]+1;return $t(S,V(h)[0])}return u})}return{slideRegistry:i}}function ke(t,e,n,o,c){const{reachedAny:s,removeOffset:r,constrain:l}=o;function a(u){return u.concat().sort((p,h)=>T(p)-T(h))[0]}function i(u){const p=t?r(u):l(u),h=e.map((m,S)=>({diff:x(m-p,0),index:S})).sort((m,S)=>T(m.diff)-T(S.diff)),{index:f}=h[0];return{index:f,distance:p}}function x(u,p){const h=[u,u+n,u-n];if(!t)return u;if(!p)return a(h);const f=h.filter(m=>Pt(m)===p);return f.length?a(f):V(h)-n}function d(u,p){const h=e[u]-c.get(),f=x(h,p);return{index:u,distance:f}}function g(u,p){const h=c.get()+u,{index:f,distance:m}=i(h),S=!t&&s(h);if(!p||S)return{index:f,distance:u};const j=e[f]-m,A=u+x(j,0);return{index:f,distance:A}}return{byDistance:g,byIndex:d,shortcut:x}}function Re(t,e,n,o,c,s,r){function l(d){const g=d.distance,y=d.index!==e.get();s.add(g),g&&(o.duration()?t.start():(t.update(),t.render(1),t.update())),y&&(n.set(e.get()),e.set(d.index),r.emit("select"))}function a(d,g){const y=c.byDistance(d,g);l(y)}function i(d,g){const y=e.clone().set(d),u=c.byIndex(y.get(),g);l(u)}return{distance:a,index:i}}function ze(t,e,n,o,c,s,r,l){const a={passive:!0,capture:!0};let i=0;function x(y){if(!l)return;function u(p){if(new Date().getTime()-i>10)return;r.emit("slideFocusStart"),t.scrollLeft=0;const m=n.findIndex(S=>S.includes(p));At(m)&&(c.useDuration(0),o.index(m,0),r.emit("slideFocus"))}s.add(document,"keydown",d,!1),e.forEach((p,h)=>{s.add(p,"focus",f=>{(yt(l)||l(y,f))&&u(h)},a)})}function d(y){y.code==="Tab"&&(i=new Date().getTime())}return{init:x}}function ft(t){let e=t;function n(){return e}function o(a){e=r(a)}function c(a){e+=r(a)}function s(a){e-=r(a)}function r(a){return At(a)?a:a.get()}return{get:n,set:o,add:c,subtract:s}}function _t(t,e){const n=t.scroll==="x"?s:r,o=e.style;let c=!1;function s(d){return`translate3d(${d}px,0px,0px)`}function r(d){return`translate3d(0px,${d}px,0px)`}function l(d){c||(o.transform=n(t.direction(d)))}function a(d){c=!d}function i(){c||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:i,to:l,toggleActive:a}}function Be(t,e,n,o,c,s,r,l,a){const x=pt(c),d=pt(c).reverse(),g=f().concat(m());function y(C,N){return C.reduce((w,M)=>w-c[M],N)}function u(C,N){return C.reduce((w,M)=>y(w,N)>0?w.concat([M]):w,[])}function p(C){return s.map((N,w)=>({start:N-o[w]+.5+C,end:N+e-.5+C}))}function h(C,N,w){const M=p(N);return C.map(E=>{const R=w?0:-n,U=w?n:0,G=w?"end":"start",q=M[E][G];return{index:E,loopPoint:q,slideLocation:ft(-1),translate:_t(t,a[E]),target:()=>l.get()>q?R:U}})}function f(){const C=r[0],N=u(d,C);return h(N,n,!1)}function m(){const C=e-r[0]-1,N=u(x,C);return h(N,-n,!0)}function S(){return g.every(({index:C})=>{const N=x.filter(w=>w!==C);return y(N,e)<=.1})}function j(){g.forEach(C=>{const{target:N,translate:w,slideLocation:M}=C,E=N();E!==M.get()&&(w.to(E),M.set(E))})}function A(){g.forEach(C=>C.translate.clear())}return{canLoop:S,clear:A,loop:j,loopPoints:g}}function Ve(t,e,n){let o,c=!1;function s(a){if(!n)return;function i(x){for(const d of x)if(d.type==="childList"){a.reInit(),e.emit("slidesChanged");break}}o=new MutationObserver(x=>{c||(yt(n)||n(a,x))&&i(x)}),o.observe(t,{childList:!0})}function r(){o&&o.disconnect(),c=!0}return{init:s,destroy:r}}function He(t,e,n,o){const c={};let s=null,r=null,l,a=!1;function i(){l=new IntersectionObserver(u=>{a||(u.forEach(p=>{const h=e.indexOf(p.target);c[h]=p}),s=null,r=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:o}),e.forEach(u=>l.observe(u))}function x(){l&&l.disconnect(),a=!0}function d(u){return mt(c).reduce((p,h)=>{const f=parseInt(h),{isIntersecting:m}=c[f];return(u&&m||!u&&!m)&&p.push(f),p},[])}function g(u=!0){if(u&&s)return s;if(!u&&r)return r;const p=d(u);return u&&(s=p),u||(r=p),p}return{init:i,destroy:x,get:g}}function Ue(t,e,n,o,c,s){const{measureSize:r,startEdge:l,endEdge:a}=t,i=n[0]&&c,x=u(),d=p(),g=n.map(r),y=h();function u(){if(!i)return 0;const m=n[0];return T(e[l]-m[l])}function p(){if(!i)return 0;const m=s.getComputedStyle(V(o));return parseFloat(m.getPropertyValue(`margin-${a}`))}function h(){return n.map((m,S,j)=>{const A=!S,D=Tt(j,S);return A?g[S]+x:D?g[S]+d:j[S+1][l]-m[l]}).map(T)}return{slideSizes:g,slideSizesWithGaps:y,startGap:x,endGap:d}}function Ge(t,e,n,o,c,s,r,l,a){const{startEdge:i,endEdge:x,direction:d}=t,g=At(n);function y(f,m){return pt(f).filter(S=>S%m===0).map(S=>f.slice(S,S+m))}function u(f){return f.length?pt(f).reduce((m,S,j)=>{const A=V(m)||0,D=A===0,C=S===ht(f),N=c[i]-s[A][i],w=c[i]-s[S][x],M=!o&&D?d(r):0,E=!o&&C?d(l):0,R=T(w-E-(N+M));return j&&R>e+a&&m.push(S),C&&m.push(f.length),m},[]).map((m,S,j)=>{const A=Math.max(j[S-1]||0);return f.slice(A,m)}):[]}function p(f){return g?y(f,n):u(f)}return{groupSlides:p}}function qe(t,e,n,o,c,s,r){const{align:l,axis:a,direction:i,startIndex:x,loop:d,duration:g,dragFree:y,dragThreshold:u,inViewThreshold:p,slidesToScroll:h,skipSnaps:f,containScroll:m,watchResize:S,watchSlides:j,watchDrag:A,watchFocus:D}=s,C=2,N=Ee(),w=N.measure(e),M=n.map(N.measure),E=Ce(a,i),R=E.measureSize(w),U=je(R),G=Se(l,R),q=!d&&!!m,nt=d||!!m,{slideSizes:Z,slideSizesWithGaps:Q,startGap:J,endGap:ct}=Ue(E,w,M,n,nt,c),$=Ge(E,R,h,d,w,M,J,ct,C),{snaps:st,snapsAligned:it}=Oe(E,G,w,M,$),X=-V(st)+V(Q),{snapsContained:at,scrollContainLimit:lt}=Ae(R,X,it,m,C),z=q?at:it,{limit:F}=Pe(X,z,d),Y=Yt(ht(z),x,d),B=Y.clone(),P=pt(n),b=({dragHandler:et,scrollBody:wt,scrollBounds:Et,options:{loop:xt}},jt)=>{xt||Et.constrain(et.pointerDown()),wt.seek(jt)},I=({scrollBody:et,translate:wt,location:Et,offsetLocation:xt,scrollLooper:jt,slideLooper:ae,dragHandler:le,animation:ue,eventHandler:Rt,scrollBounds:fe,options:{loop:zt}},Bt)=>{const Vt=et.settled(),de=!fe.shouldConstrain(),Ht=zt?Vt:Vt&&de;Ht&&!le.pointerDown()&&(ue.stop(),Rt.emit("settle")),Ht||Rt.emit("scroll");const pe=Et.get()*Bt+W.get()*(1-Bt);xt.set(pe),zt&&(jt.loop(et.direction()),ae.loop()),wt.to(xt.get())},O=ve(o,c,et=>b(Nt,et),et=>I(Nt,et)),k=.68,K=z[Y.get()],_=ft(K),W=ft(K),tt=ft(K),rt=ft(K),ut=De(_,tt,W,rt,g,k),vt=ke(d,z,X,F,rt),Ct=Re(O,Y,B,ut,vt,rt,r),Ot=Me(F),Ft=gt(),ie=He(e,n,r,p),{slideRegistry:kt}=Fe(q,m,z,lt,$,P),ce=ze(t,n,kt,Ct,ut,Ft,r,D),Nt={ownerDocument:o,ownerWindow:c,eventHandler:r,containerRect:w,slideRects:M,animation:O,axis:E,dragHandler:Ne(E,t,o,c,rt,we(E,c),_,O,Ct,ut,vt,Y,r,U,y,u,f,k,A),eventStore:Ft,percentOfView:U,index:Y,indexPrevious:B,limit:F,location:_,offsetLocation:tt,previousLocation:W,options:s,resizeHandler:Le(e,r,c,n,E,S,N),scrollBody:ut,scrollBounds:Ie(F,tt,rt,ut,U),scrollLooper:Te(X,F,tt,[_,tt,W,rt]),scrollProgress:Ot,scrollSnapList:z.map(Ot.get),scrollSnaps:z,scrollTarget:vt,scrollTo:Ct,slideLooper:Be(E,R,X,Z,Q,st,z,tt,n),slideFocus:ce,slidesHandler:Ve(e,r,j),slidesInView:ie,slideIndexes:P,slideRegistry:kt,slidesToScroll:$,target:rt,translate:_t(E,e)};return Nt}function $e(){let t={},e;function n(i){e=i}function o(i){return t[i]||[]}function c(i){return o(i).forEach(x=>x(e,i)),a}function s(i,x){return t[i]=o(i).concat([x]),a}function r(i,x){return t[i]=o(i).filter(d=>d!==x),a}function l(){t={}}const a={init:n,emit:c,off:r,on:s,clear:l};return a}const Ke={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Qe(t){function e(s,r){return Xt(s,r||{})}function n(s){const r=s.breakpoints||{},l=mt(r).filter(a=>t.matchMedia(a).matches).map(a=>r[a]).reduce((a,i)=>e(a,i),{});return e(s,l)}function o(s){return s.map(r=>mt(r.breakpoints||{})).reduce((r,l)=>r.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:o}}function Je(t){let e=[];function n(s,r){return e=r.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(s,t)),r.reduce((l,a)=>Object.assign(l,{[a.name]:a}),{})}function o(){e=e.filter(s=>s.destroy())}return{init:n,destroy:o}}function bt(t,e,n){const o=t.ownerDocument,c=o.defaultView,s=Qe(c),r=Je(s),l=gt(),a=$e(),{mergeOptions:i,optionsAtMedia:x,optionsMediaQueries:d}=s,{on:g,off:y,emit:u}=a,p=E;let h=!1,f,m=i(Ke,bt.globalOptions),S=i(m),j=[],A,D,C;function N(){const{container:P,slides:b}=S;D=(Lt(P)?t.querySelector(P):P)||t.children[0];const O=Lt(b)?D.querySelectorAll(b):b;C=[].slice.call(O||D.children)}function w(P){const b=qe(t,D,C,o,c,P,a);if(P.loop&&!b.slideLooper.canLoop()){const I=Object.assign({},P,{loop:!1});return w(I)}return b}function M(P,b){h||(m=i(m,P),S=x(m),j=b||j,N(),f=w(S),d([m,...j.map(({options:I})=>I)]).forEach(I=>l.add(I,"change",E)),S.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(B),f.eventHandler.init(B),f.resizeHandler.init(B),f.slidesHandler.init(B),f.options.loop&&f.slideLooper.loop(),D.offsetParent&&C.length&&f.dragHandler.init(B),A=r.init(B,j)))}function E(P,b){const I=$();R(),M(i({startIndex:I},P),b),a.emit("reInit")}function R(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),r.destroy(),l.clear()}function U(){h||(h=!0,l.clear(),R(),a.emit("destroy"),a.clear())}function G(P,b,I){!S.active||h||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:S.duration),f.scrollTo.index(P,I||0))}function q(P){const b=f.index.add(1).get();G(b,P,-1)}function nt(P){const b=f.index.add(-1).get();G(b,P,1)}function Z(){return f.index.add(1).get()!==$()}function Q(){return f.index.add(-1).get()!==$()}function J(){return f.scrollSnapList}function ct(){return f.scrollProgress.get(f.location.get())}function $(){return f.index.get()}function st(){return f.indexPrevious.get()}function it(){return f.slidesInView.get()}function X(){return f.slidesInView.get(!1)}function at(){return A}function lt(){return f}function z(){return t}function F(){return D}function Y(){return C}const B={canScrollNext:Z,canScrollPrev:Q,containerNode:F,internalEngine:lt,destroy:U,off:y,on:g,emit:u,plugins:at,previousScrollSnap:st,reInit:p,rootNode:z,scrollNext:q,scrollPrev:nt,scrollProgress:ct,scrollSnapList:J,scrollTo:G,selectedScrollSnap:$,slideNodes:Y,slidesInView:it,slidesNotInView:X};return M(e,n),setTimeout(()=>a.emit("init"),0),B}bt.globalOptions=void 0;function Mt(t={},e=[]){const n=L.useRef(t),o=L.useRef(e),[c,s]=L.useState(),[r,l]=L.useState(),a=L.useCallback(()=>{c&&c.reInit(n.current,o.current)},[c]);return L.useEffect(()=>{It(n.current,t)||(n.current=t,a())},[t,a]),L.useEffect(()=>{be(o.current,e)||(o.current=e,a())},[e,a]),L.useEffect(()=>{if(xe()&&r){bt.globalOptions=Mt.globalOptions;const i=bt(r,n.current,o.current);return s(i),()=>i.destroy()}else s(void 0)},[r,s]),[l,c]}Mt.globalOptions=void 0;const Zt=L.createContext(null);function St(){const t=L.useContext(Zt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Wt=L.forwardRef(({orientation:t="horizontal",opts:e,setApi:n,plugins:o,className:c,children:s,...r},l)=>{const[a,i]=Mt({...e,axis:t==="horizontal"?"x":"y"},o),[x,d]=L.useState(!1),[g,y]=L.useState(!1),u=L.useCallback(m=>{m&&(d(m.canScrollPrev()),y(m.canScrollNext()))},[]),p=L.useCallback(()=>{i==null||i.scrollPrev()},[i]),h=L.useCallback(()=>{i==null||i.scrollNext()},[i]),f=L.useCallback(m=>{m.key==="ArrowLeft"?(m.preventDefault(),p()):m.key==="ArrowRight"&&(m.preventDefault(),h())},[p,h]);return L.useEffect(()=>{!i||!n||n(i)},[i,n]),L.useEffect(()=>{if(i)return u(i),i.on("reInit",u),i.on("select",u),()=>{i==null||i.off("select",u)}},[i,u]),v.jsx(Zt.Provider,{value:{carouselRef:a,api:i,opts:e,orientation:t||((e==null?void 0:e.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:h,canScrollPrev:x,canScrollNext:g},children:v.jsx("div",{ref:l,onKeyDownCapture:f,className:H("relative",c),role:"region","aria-roledescription":"carousel",...r,children:s})})});Wt.displayName="Carousel";const te=L.forwardRef(({className:t,...e},n)=>{const{carouselRef:o,orientation:c}=St();return v.jsx("div",{ref:o,className:"overflow-hidden",children:v.jsx("div",{ref:n,className:H("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...e})})});te.displayName="CarouselContent";const ee=L.forwardRef(({className:t,...e},n)=>{const{orientation:o}=St();return v.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:H("min-w-0 shrink-0 grow-0 basis-full",o==="horizontal"?"pl-4":"pt-4",t),...e})});ee.displayName="CarouselItem";const ne=L.forwardRef(({className:t,variant:e="outline",size:n="icon",...o},c)=>{const{orientation:s,scrollPrev:r,canScrollPrev:l}=St();return v.jsxs(Qt,{ref:c,variant:e,size:n,className:H("absolute  h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!l,onClick:r,...o,children:[v.jsx(Jt,{className:"h-4 w-4"}),v.jsx("span",{className:"sr-only",children:"Previous slide"})]})});ne.displayName="CarouselPrevious";const re=L.forwardRef(({className:t,variant:e="outline",size:n="icon",...o},c)=>{const{orientation:s,scrollNext:r,canScrollNext:l}=St();return v.jsxs(Qt,{ref:c,variant:e,size:n,className:H("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!l,onClick:r,...o,children:[v.jsx(Kt,{className:"h-4 w-4"}),v.jsx("span",{className:"sr-only",children:"Next slide"})]})});re.displayName="CarouselNext";const oe=L.forwardRef(({className:t,...e},n)=>v.jsx("div",{ref:n,className:H("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));oe.displayName="Card";const Xe=L.forwardRef(({className:t,...e},n)=>v.jsx("div",{ref:n,className:H("flex flex-col space-y-1.5 p-6",t),...e}));Xe.displayName="CardHeader";const Ye=L.forwardRef(({className:t,...e},n)=>v.jsx("h3",{ref:n,className:H("text-2xl font-semibold leading-none tracking-tight",t),...e}));Ye.displayName="CardTitle";const _e=L.forwardRef(({className:t,...e},n)=>v.jsx("p",{ref:n,className:H("text-sm text-muted-foreground",t),...e}));_e.displayName="CardDescription";const se=L.forwardRef(({className:t,...e},n)=>v.jsx("div",{ref:n,className:H("p-6 pt-0",t),...e}));se.displayName="CardContent";const Ze=L.forwardRef(({className:t,...e},n)=>v.jsx("div",{ref:n,className:H("flex items-center p-6 pt-0",t),...e}));Ze.displayName="CardFooter";const nn=()=>{const{t}=ge(),e=[{id:1,title:"E-commerce Redesign",description:"Complete brand refresh for an established online retailer",imageUrl:"/placeholder.svg",type:"image"},{id:2,title:"Mobile App UI",description:"Intuitive interface for a fitness tracking application",imageUrl:"/placeholder.svg",type:"image"},{id:3,title:"Corporate Website",description:"Modern web presence for a financial consulting firm",imageUrl:"/placeholder.svg",type:"image"},{id:4,title:"Product Launch Video",description:"Promotional content for a tech startup's flagship product",imageUrl:"/placeholder.svg",type:"video"},{id:5,title:"Brand Identity",description:"Complete visual identity for an eco-friendly cosmetics line",imageUrl:"/placeholder.svg",type:"image"},{id:6,title:"Social Media Campaign",description:"Engaging content strategy across multiple platforms",imageUrl:"/lovable-uploads/2d922fc8-97a4-412e-b125-f30c43a4641f.png",type:"image"}];return v.jsx("section",{id:"portfolio",className:"section-padding bg-[#F5F5E9] py-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsxs("div",{className:"text-center mb-12",children:[v.jsx("h2",{className:"text-4xl font-serif font-bold text-[#0D503C] mb-4",children:t("carousel.title")}),v.jsx("p",{className:"text-xl text-[#0D503C]/80 max-w-2xl mx-auto",children:t("carousel.subtitle")}),v.jsx("div",{className:"w-24 h-1 bg-[#F9A7A7] mx-auto mt-6"})]}),v.jsx("div",{className:"relative px-10",children:v.jsxs(Wt,{opts:{align:"start",loop:!0},className:"w-full",children:[v.jsx(te,{className:"-ml-2 md:-ml-4",children:e.map(n=>v.jsx(ee,{className:"pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4",children:v.jsx(oe,{className:"overflow-hidden border border-[#0D503C]/10 rounded-xl transition-all duration-300 hover:shadow-lg",children:v.jsxs(se,{className:"p-0",children:[v.jsxs("div",{className:"relative aspect-video overflow-hidden",children:[v.jsx("img",{src:n.imageUrl,alt:n.title,className:"object-cover w-full h-full transition-transform duration-300 hover:scale-105"}),n.type==="video"&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors",children:v.jsx("div",{className:"w-12 h-12 rounded-full bg-white/90 flex items-center justify-center",children:v.jsx("div",{className:"w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-[#0D503C] ml-1"})})})]}),v.jsxs("div",{className:"p-4",children:[v.jsx("h3",{className:"text-lg font-semibold text-[#0D503C]",children:n.title}),v.jsx("p",{className:"text-sm text-[#0D503C]/70 mt-1",children:n.description})]})]})})},n.id))}),v.jsx(ne,{className:"left-0 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none",icon:v.jsx(Jt,{className:"h-4 w-4"})}),v.jsx(re,{className:"right-0 bg-[#0D503C] text-[#F5F5E9] hover:bg-[#0D503C]/90 border-none",icon:v.jsx(Kt,{className:"h-4 w-4"})})]})}),v.jsx("div",{className:"text-center mt-10",children:v.jsx("p",{className:"text-[#0D503C]/80 italic",children:t("carousel.viewMore")})})]})})};export{nn as default};
//# sourceMappingURL=Carousel.CSCcVUqz.js.map

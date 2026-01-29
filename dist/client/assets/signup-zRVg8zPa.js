import{r as d,u as q,R as G,j as m,L as K,c as Q,a as V}from"./main-DnMUtEc_.js";let J={data:""},X=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||J},ee=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,te=/\/\*[^]*?\*\/|  +/g,T=/\n+/g,w=(e,t)=>{let a="",s="",i="";for(let o in e){let r=e[o];o[0]=="@"?o[1]=="i"?a=o+" "+r+";":s+=o[1]=="f"?w(r,o):o+"{"+w(r,o[1]=="k"?"":t)+"}":typeof r=="object"?s+=w(r,t?t.replace(/([^,])+/g,n=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):o):r!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=w.p?w.p(o,r):o+":"+r+";")}return a+(t&&i?t+"{"+i+"}":i)+s},x={},_=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+_(e[a]);return t}return e},ae=(e,t,a,s,i)=>{let o=_(e),r=x[o]||(x[o]=(l=>{let u=0,p=11;for(;u<l.length;)p=101*p+l.charCodeAt(u++)>>>0;return"go"+p})(o));if(!x[r]){let l=o!==e?e:(u=>{let p,c,f=[{}];for(;p=ee.exec(u.replace(te,""));)p[4]?f.shift():p[3]?(c=p[3].replace(T," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][p[1]]=p[2].replace(T," ").trim();return f[0]})(e);x[r]=w(i?{["@keyframes "+r]:l}:l,a?"":"."+r)}let n=a&&x.g?x.g:null;return a&&(x.g=x[r]),((l,u,p,c)=>{c?u.data=u.data.replace(c,l):u.data.indexOf(l)===-1&&(u.data=p?l+u.data:u.data+l)})(x[r],t,s,n),r},re=(e,t,a)=>e.reduce((s,i,o)=>{let r=t[o];if(r&&r.call){let n=r(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;r=l?"."+l:n&&typeof n=="object"?n.props?"":w(n,""):n===!1?"":n}return s+i+(r??"")},"");function D(e){let t=this||{},a=e.call?e(t.p):e;return ae(a.unshift?a.raw?re(a,[].slice.call(arguments,1),t.p):a.reduce((s,i)=>Object.assign(s,i&&i.call?i(t.p):i),{}):a,X(t.target),t.g,t.o,t.k)}let H,z,A;D.bind({g:1});let v=D.bind({k:1});function se(e,t,a,s){w.p=t,H=e,z=a,A=s}function j(e,t){let a=this||{};return function(){let s=arguments;function i(o,r){let n=Object.assign({},o),l=n.className||i.className;a.p=Object.assign({theme:z&&z()},n),a.o=/ *go\d+/.test(l),n.className=D.apply(a,s)+(l?" "+l:"");let u=e;return e[0]&&(u=n.as||e,delete n.as),A&&u[0]&&A(n),H(u,n)}return t?t(i):i}}var oe=e=>typeof e=="function",C=(e,t)=>oe(e)?e(t):e,ie=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ne=20,F="default",B=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return B(e,{type:e.toasts.find(r=>r.id===s.id)?1:0,toast:s});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},N=[],U={toasts:[],pausedAt:void 0,settings:{toastLimit:ne}},y={},W=(e,t=F)=>{y[t]=B(y[t]||U,e),N.forEach(([a,s])=>{a===t&&s(y[t])})},Y=e=>Object.keys(y).forEach(t=>W(e,t)),le=e=>Object.keys(y).find(t=>y[t].toasts.some(a=>a.id===e)),O=(e=F)=>t=>{W(t,e)},de={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ce=(e={},t=F)=>{let[a,s]=d.useState(y[t]||U),i=d.useRef(y[t]);d.useEffect(()=>(i.current!==y[t]&&s(y[t]),N.push([t,s]),()=>{let r=N.findIndex(([n])=>n===t);r>-1&&N.splice(r,1)}),[t]);let o=a.toasts.map(r=>{var n,l,u;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((n=e[r.type])==null?void 0:n.removeDelay)||e?.removeDelay,duration:r.duration||((l=e[r.type])==null?void 0:l.duration)||e?.duration||de[r.type],style:{...e.style,...(u=e[r.type])==null?void 0:u.style,...r.style}}});return{...a,toasts:o}},ue=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||ie()}),E=e=>(t,a)=>{let s=ue(t,e,a);return O(s.toasterId||le(s.id))({type:2,toast:s}),s.id},g=(e,t)=>E("blank")(e,t);g.error=E("error");g.success=E("success");g.loading=E("loading");g.custom=E("custom");g.dismiss=(e,t)=>{let a={type:3,toastId:e};t?O(t)(a):Y(a)};g.dismissAll=e=>g.dismiss(void 0,e);g.remove=(e,t)=>{let a={type:4,toastId:e};t?O(t)(a):Y(a)};g.removeAll=e=>g.remove(void 0,e);g.promise=(e,t,a)=>{let s=g.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let o=t.success?C(t.success,i):void 0;return o?g.success(o,{id:s,...a,...a?.success}):g.dismiss(s),i}).catch(i=>{let o=t.error?C(t.error,i):void 0;o?g.error(o,{id:s,...a,...a?.error}):g.dismiss(s)}),e};var pe=1e3,me=(e,t="default")=>{let{toasts:a,pausedAt:s}=ce(e,t),i=d.useRef(new Map).current,o=d.useCallback((c,f=pe)=>{if(i.has(c))return;let h=setTimeout(()=>{i.delete(c),r({type:4,toastId:c})},f);i.set(c,h)},[]);d.useEffect(()=>{if(s)return;let c=Date.now(),f=a.map(h=>{if(h.duration===1/0)return;let k=(h.duration||0)+h.pauseDuration-(c-h.createdAt);if(k<0){h.visible&&g.dismiss(h.id);return}return setTimeout(()=>g.dismiss(h.id,t),k)});return()=>{f.forEach(h=>h&&clearTimeout(h))}},[a,s,t]);let r=d.useCallback(O(t),[t]),n=d.useCallback(()=>{r({type:5,time:Date.now()})},[r]),l=d.useCallback((c,f)=>{r({type:1,toast:{id:c,height:f}})},[r]),u=d.useCallback(()=>{s&&r({type:6,time:Date.now()})},[s,r]),p=d.useCallback((c,f)=>{let{reverseOrder:h=!1,gutter:k=8,defaultPosition:P}=f||{},S=a.filter(b=>(b.position||P)===(c.position||P)&&b.height),Z=S.findIndex(b=>b.id===c.id),R=S.filter((b,I)=>I<Z&&b.visible).length;return S.filter(b=>b.visible).slice(...h?[R+1]:[0,R]).reduce((b,I)=>b+(I.height||0)+k,0)},[a]);return d.useEffect(()=>{a.forEach(c=>{if(c.dismissed)o(c.id,c.removeDelay);else{let f=i.get(c.id);f&&(clearTimeout(f),i.delete(c.id))}})},[a,o]),{toasts:a,handlers:{updateHeight:l,startPause:n,endPause:u,calculateOffset:p}}},fe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ge=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,he=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,be=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ge} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${he} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ye=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xe=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ye} 1s linear infinite;
`,ve=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,we=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,je=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ve} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${we} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ee=j("div")`
  position: absolute;
`,ke=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$e=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ne=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$e} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ce=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.createElement(Ne,null,t):t:a==="blank"?null:d.createElement(ke,null,d.createElement(xe,{...s}),a!=="loading"&&d.createElement(Ee,null,a==="error"?d.createElement(be,{...s}):d.createElement(je,{...s})))},De=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Oe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Se="0%{opacity:0;} 100%{opacity:1;}",Ie="0%{opacity:1;} 100%{opacity:0;}",ze=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ae=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Fe=(e,t)=>{let a=e.includes("top")?1:-1,[s,i]=M()?[Se,Ie]:[De(a),Oe(a)];return{animation:t?`${v(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Pe=d.memo(({toast:e,position:t,style:a,children:s})=>{let i=e.height?Fe(e.position||t||"top-center",e.visible):{opacity:0},o=d.createElement(Ce,{toast:e}),r=d.createElement(Ae,{...e.ariaProps},C(e.message,e));return d.createElement(ze,{className:e.className,style:{...i,...a,...e.style}},typeof s=="function"?s({icon:o,message:r}):d.createElement(d.Fragment,null,o,r))});se(d.createElement);var Re=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let o=d.useCallback(r=>{if(r){let n=()=>{let l=r.getBoundingClientRect().height;s(e,l)};n(),new MutationObserver(n).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.createElement("div",{ref:o,className:t,style:a},i)},Te=(e,t)=>{let a=e.includes("top"),s=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...s,...i}},Le=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,_e=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,toasterId:o,containerStyle:r,containerClassName:n})=>{let{toasts:l,handlers:u}=me(a,o);return d.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:n,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(p=>{let c=p.position||t,f=u.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),h=Te(c,f);return d.createElement(Re,{id:p.id,key:p.id,onHeightUpdate:u.updateHeight,className:p.visible?Le:"",style:h},p.type==="custom"?C(p.message,p):i?i(p):d.createElement(Pe,{toast:p,position:c}))}))},He=g;const Me=Q({method:"POST"}).handler(V("42ba3bbfc6772f1778f6b4ba72a7942eaa599706da84ba254c054bbdfff82db6")),L=e=>He(`${e}`);function Ue(){const e=q();return G.useLoaderData(),m.jsxs(m.Fragment,{children:[m.jsx(_e,{}),m.jsx("div",{className:"bg-white flex justify-center items-center h-screen",children:m.jsxs("div",{children:[m.jsx("h1",{className:"text-[2rem] text-black text-bold",children:"Get started"}),m.jsx("p",{className:"text-gray-500",children:"Welcome to toleransi - Let's create your account"}),m.jsx("hr",{className:"my-4"}),m.jsxs("form",{onSubmit:async t=>{t.preventDefault();const a=new FormData(t.currentTarget),s=await Me({data:{email:String(a.get("email")),password:String(a.get("password"))}});"error"in s?L(s.error):(L("sign up success"),localStorage.setItem("access_token",s),e.navigate({to:"/login"}))},children:[m.jsxs("div",{className:"flex flex-col gap-2",children:[m.jsxs("div",{className:"flex flex-col",children:[m.jsx("label",{htmlFor:"email",children:"Email"}),m.jsx("input",{type:"email",id:"email",name:"email",placeholder:"something@something.com",autoComplete:"email",className:"px-2 py-2 border-1 border-gray-300 rounded-lg"})]}),m.jsxs("div",{className:"flex flex-col mb-4",children:[m.jsx("label",{htmlFor:"password",children:"Password"}),m.jsx("input",{type:"password",id:"password",name:"password",placeholder:"*****",autoComplete:"password",className:"px-2 py-2 border-1 border-gray-300 rounded-lg"})]})]}),m.jsx("button",{className:"w-full bg-slate-800 hover:bg-white hover:text-black hover:border-black hover:border-1 text-white py-2 rounded-lg",type:"submit",name:"submit",children:"Sign up"}),m.jsxs("p",{className:"mt-4",children:["Have an account? ",m.jsx(K,{to:"/login",children:m.jsx("b",{children:"login"})})]})]})]})})]})}export{Ue as component};

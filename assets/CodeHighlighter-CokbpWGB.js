import{r as a,j as i}from"./index-Bv95bFYi.js";import{t as y,u as x}from"./toast-DcnsCoJV.js";import{u as b}from"./use-is-dark-B6VE3KzZ.js";import{s as h}from"./dom-XXNktKeO.js";import{c as k}from"./helper-CaAdfMs7.js";const p={},o={};function d(e){return new Promise((n,t)=>{const r=p[e];if(r==="loaded")return n(null);if(r==="loading"){o[e]=o[e]?[...o[e],[n,t]]:[[n,t]];return}const s=document.createElement("script");s.src=e,s.crossOrigin="anonymous",p[e]="loading",s.onload=function(){p[e]="loaded",n(null),o[e]&&(o[e].forEach(([c])=>{c(null)}),delete o[e])},s.onerror=function(c){this.onerror=this.onload=null,delete p[e],o[e].forEach(([,f])=>{f(c)}),delete o[e],t(c)},document.head.appendChild(s)})}const l=new Map;function u(e){if(l.has(e)){const t=l.get(e);return{$link:t,remove:()=>{t.parentNode&&t.parentNode.removeChild(t),l.delete(e)}}}const n=document.createElement("link");return n.href=e,n.rel="stylesheet",n.type="text/css",n.crossOrigin="anonymous",l.set(e,n),n.onerror=()=>{n.onerror=null,l.delete(e)},document.head.appendChild(n),{remove:()=>{n.parentNode&&n.parentNode.removeChild(n),l.delete(e)},$link:n}}const m={"code-wrap":"_code-wrap_1uhyk_1","copy-tip":"_copy-tip_1uhyk_11","language-tip":"_language-tip_1uhyk_49"},P=e=>{const{lang:n,content:t}=e,r=a.useCallback(()=>{navigator.clipboard.writeText(t),y.success("已复制到剪贴板")},[t]),s=a.useRef(null);return g(s),i.jsxs("div",{className:m["code-wrap"],onCopy:h,children:[i.jsx("span",{className:m["language-tip"],"aria-hidden":!0,children:n?.toUpperCase()}),i.jsx("pre",{className:"line-numbers !bg-transparent","data-start":"1",children:i.jsx("code",{className:`language-${n??"markup"} !bg-transparent`,ref:s,children:t})}),i.jsx("div",{className:m["copy-tip"],onClick:r,"aria-hidden":!0,children:"Copy"})]})},j=({content:e,lang:n,className:t,style:r})=>{const s=a.useRef(null);return g(s),a.useEffect(()=>{window.Prism?.highlightElement(s.current)},[e,n]),i.jsx("pre",{onCopy:h,className:k("!bg-transparent",t),style:r,"data-start":"1",children:i.jsx("code",{className:`language-${n??"markup"} !bg-transparent`,ref:s,children:e})})},g=e=>{const n=a.useRef(),t=x(),r=b();a.useInsertionEffect(()=>{const s=u(`https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism-themes/1.9.0/prism-one-${t?"light":r?"dark":"light"}.css`);if(n.current){const c=n.current;s.$link.onload=()=>{c.remove()}}n.current=s},[r,t]),a.useInsertionEffect(()=>{u("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.css"),Promise.all([d("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/components/prism-core.min.js")]).then(()=>Promise.all([d("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"),d("https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.js")])).then(()=>{e.current?requestAnimationFrame(()=>{window.Prism?.highlightElement(e.current),requestAnimationFrame(()=>{window.Prism?.highlightElement(e.current)})}):requestAnimationFrame(()=>{requestAnimationFrame(()=>{window.Prism?.highlightAll()})})})},[])};export{j as B,P as H,u as a,d as l};

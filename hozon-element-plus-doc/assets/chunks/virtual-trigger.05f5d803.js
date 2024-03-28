import{h,k as d,r as s,o as c,g as b,w as t,a as e,d as l,t as y,f as v,c as m,b as i,F as g,j as k,l as S,a$ as T}from"../app.18624a7b.js";const j=h({__name:"advanced-usage",setup(u){const _=d(!1);return(n,o)=>{const f=s("el-button"),a=s("el-tooltip");return c(),b(a,{disabled:_.value,content:"click to close tooltip function",placement:"bottom",effect:"light"},{default:t(()=>[e(f,{onClick:o[0]||(o[0]=r=>_.value=!_.value)},{default:t(()=>[l("click to "+y(_.value?"active":"close")+" tooltip function",1)]),_:1})]),_:1},8,["disabled"])}}});var St=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const O={},C=l("trigger me");function M(u,_){const n=s("el-button"),o=s("el-tooltip");return c(),b(o,{content:"I am an el-tooltip"},{default:t(()=>[e(n,null,{default:t(()=>[C]),_:1})]),_:1})}var B=v(O,[["render",M]]),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const R={},z={class:"tooltip-base-box"},L={class:"row center"},w=l("top-start"),P=l("top"),D=l("top-end"),E={class:"row"},H=l("left-start"),N=l("right-start"),U={class:"row"},V=l("left"),F=l("right"),I={class:"row"},X=l("left-end"),Y=l("right-end"),q={class:"row center"},A=l("bottom-start"),G=l("bottom"),J=l("bottom-end");function K(u,_){const n=s("el-button"),o=s("el-tooltip");return c(),m("div",z,[i("div",L,[e(o,{class:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:t(()=>[e(n,null,{default:t(()=>[w]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:t(()=>[e(n,null,{default:t(()=>[P]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:t(()=>[e(n,null,{default:t(()=>[D]),_:1})]),_:1})]),i("div",E,[e(o,{class:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:t(()=>[e(n,null,{default:t(()=>[H]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:t(()=>[e(n,null,{default:t(()=>[N]),_:1})]),_:1})]),i("div",U,[e(o,{class:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:t(()=>[e(n,{class:"mt-3 mb-3"},{default:t(()=>[V]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:t(()=>[e(n,null,{default:t(()=>[F]),_:1})]),_:1})]),i("div",I,[e(o,{class:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:t(()=>[e(n,null,{default:t(()=>[X]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:t(()=>[e(n,null,{default:t(()=>[Y]),_:1})]),_:1})]),i("div",q,[e(o,{class:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:t(()=>[e(n,null,{default:t(()=>[A]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:t(()=>[e(n,null,{default:t(()=>[G]),_:1})]),_:1}),e(o,{class:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:t(()=>[e(n,null,{default:t(()=>[J]),_:1})]),_:1})])])}var Q=v(R,[["render",K]]),jt=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));const W=i("span",null,"Content",-1),Z=l(" Hover me "),tt=h({__name:"controlled",setup(u){const _=d(!1);return(n,o)=>{const f=s("el-button"),a=s("el-tooltip");return c(),b(a,{visible:_.value},{content:t(()=>[W]),default:t(()=>[e(f,{onMouseenter:o[0]||(o[0]=r=>_.value=!0),onMouseleave:o[1]||(o[1]=r=>_.value=!1)},{default:t(()=>[Z]),_:1})]),_:1},8,["visible"])}}});var Ot=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));const et={},ot=l("hover me");function nt(u,_){const n=s("el-button"),o=s("el-tooltip");return c(),b(o,{content:"<span>The content can be <strong>HTML</strong></span>","raw-content":""},{default:t(()=>[e(n,null,{default:t(()=>[ot]),_:1})]),_:1})}var lt=v(et,[["render",nt]]),Ct=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"}));const _t={},st=l(" multiple lines"),at=i("br",null,null,-1),ct=l("second line "),rt=l("Top center");function it(u,_){const n=s("el-button"),o=s("el-tooltip");return c(),b(o,{placement:"top"},{content:t(()=>[st,at,ct]),default:t(()=>[e(n,null,{default:t(()=>[rt]),_:1})]),_:1})}var ut=v(_t,[["render",it]]),Mt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));const dt=l("Click to open tooltip"),ft=i("span",null," Some content ",-1),pt=h({__name:"singleton",setup(u){const _=d(),n=d(),o=d(!1);return(f,a)=>{const r=s("el-button"),$=s("el-tooltip");return c(),m(g,null,[i("div",null,[(c(),m(g,null,k(3,x=>e(r,{key:x,onMouseover:a[0]||(a[0]=p=>_.value=p.currentTarget),onClick:a[1]||(a[1]=p=>o.value=!o.value)},{default:t(()=>[dt]),_:2},1024)),64))]),e($,{ref_key:"tooltipRef",ref:n,visible:o.value,"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":_.value,"virtual-triggering":"","popper-class":"singleton-tooltip"},{content:t(()=>[ft]),_:1},8,["visible","virtual-ref"])],64)}}});var Bt=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));const mt={},bt=l("Dark"),vt=l("Light"),gt=l("Customized theme");function ht(u,_){const n=s("el-button"),o=s("el-tooltip");return c(),m(g,null,[e(o,{content:"Top center",placement:"top"},{default:t(()=>[e(n,null,{default:t(()=>[bt]),_:1})]),_:1}),e(o,{content:"Bottom center",placement:"bottom",effect:"light"},{default:t(()=>[e(n,null,{default:t(()=>[vt]),_:1})]),_:1}),e(o,{content:"Bottom center",effect:"customized"},{default:t(()=>[e(n,null,{default:t(()=>[gt]),_:1})]),_:1})],64)}var $t=v(mt,[["render",ht]]),Rt=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"}));const xt=l("test"),yt=h({__name:"virtual-trigger",setup(u){const _=d(!1),n=d({getBoundingClientRect(){return o.value}}),o=d({top:0,left:0,bottom:0,right:0}),f=a=>{o.value=DOMRect.fromRect({width:0,height:0,x:a.clientX,y:a.clientY})};return S(()=>{document.addEventListener("mousemove",f)}),T(()=>{document.removeEventListener("mousemove",f)}),(a,r)=>{const $=s("el-tooltip"),x=s("el-button");return c(),m(g,null,[e($,{visible:_.value,"onUpdate:visible":r[0]||(r[0]=p=>_.value=p),content:"Bottom center",placement:"bottom",effect:"light",trigger:"click","virtual-triggering":"","virtual-ref":n.value},null,8,["visible","virtual-ref"]),e(x,{onClick:r[1]||(r[1]=p=>_.value=!_.value)},{default:t(()=>[xt]),_:1})],64)}}});var zt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));export{St as _,Tt as a,jt as b,Ot as c,Ct as d,Mt as e,Bt as f,Rt as g,zt as h};

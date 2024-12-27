import{c as q,f as p,j as y,a as o,h as f,k as F,m as I,g as B,r as $,w as T,s as j,u as z,A,B as b,y as g,x as N,z as M,C as V,F as D,v as H}from"./index-BU9H83YE.js";import{h as R,d as K}from"./dom-2XMNHOp2.js";import{u as L,a as E,Q as x}from"./QBtn-giV8d287.js";const G=q({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:r}}=B(),t=p(F,y);if(t===y)return console.error("QPage needs to be a deep child of QLayout"),y;if(p(I,y)===y)return console.error("QPage needs to be child of QPageContainer"),y;const d=o(()=>{const c=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const m=t.isContainer.value===!0?t.containerHeight.value:r.screen.height;return e.styleFn(c,m)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-c+"px":r.screen.height===0?c!==0?`calc(100vh - ${c}px)`:"100vh":r.screen.height-c+"px"}}),s=o(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:s.value,style:d.value},R(a.default))}}),O={...L,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function U(e,a,r){return r<=a?a:Math.min(r,Math.max(a,e))}const w=50,P=2*w,Q=P*Math.PI,W=Math.round(Q*1e3)/1e3,J=q({name:"QCircularProgress",props:{...O,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:a}){const{proxy:{$q:r}}=B(),t=E(e),u=o(()=>{const n=(r.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(r.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-n}deg)`:`rotate3d(0, 0, 1, ${n-90}deg)`}}),d=o(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),s=o(()=>P/(1-e.thickness/2)),c=o(()=>`${s.value/2} ${s.value/2} ${s.value} ${s.value}`),m=o(()=>U(e.value,e.min,e.max)),C=o(()=>e.max-e.min),l=o(()=>e.thickness/2*s.value),_=o(()=>{const n=(e.max-m.value)/C.value,v=e.rounded===!0&&m.value<e.max&&n<.25?l.value/2*(1-n/.25):0;return Q*n+v});function k({thickness:n,offset:v,color:i,cls:h,rounded:S}){return f("circle",{class:"q-circular-progress__"+h+(i!==void 0?` text-${i}`:""),style:d.value,fill:"transparent",stroke:"currentColor","stroke-width":n,"stroke-dasharray":W,"stroke-dashoffset":v,"stroke-linecap":S,cx:s.value,cy:s.value,r:w})}return()=>{const n=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&n.push(f("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:w-l.value/2,cx:s.value,cy:s.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&n.push(k({cls:"track",thickness:l.value,offset:0,color:e.trackColor})),n.push(k({cls:"circle",thickness:l.value,offset:_.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const v=[f("svg",{class:"q-circular-progress__svg",style:u.value,viewBox:c.value,"aria-hidden":"true"},n)];return e.showValue===!0&&v.push(f("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},a.default!==void 0?a.default():[f("div",m.value)])),f("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:t.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:m.value},K(a.internal,v))}}}),X={class:"row justify-center"},Y={class:"row justify-center"},Z={class:"row justify-center"},ee={__name:"TimerTomate",props:{minutes:{type:Number,required:!0},smallIntval:{type:Number,default:5e3},bigIntval:{type:Number,default:3e4}},setup(e){const a=e,r=$(a.minutes),t=$(0),u=$(a.minutes*60);let d=null;const s=new Audio("../sounds/tick.mp3"),c=new Audio("..//sounds/buzz.mp3"),m=o(()=>u.value/(a.minutes*60)*100),C=o(()=>`${r.value.toString().padStart(2,"0")}:${t.value.toString().padStart(2,"0")}`),l=()=>{d&&(window.clearInterval(d),d=null)},_=()=>{l()},k=i=>{l(),u.value=i*60,r.value=i,t.value=0,C()},n=()=>{l(),u.value=a.minutes*60,r.value=a.minutes,t.value=0},v=()=>{l(),s.play(),d=window.setInterval(()=>{u.value>0?(u.value--,t.value===0?(r.value--,t.value=59):t.value--):(l(),c.play())},1e3)};return T(()=>a.minutes,i=>{r.value=i,t.value=0,u.value=i*60,l()}),j(()=>{l()}),(i,h)=>(z(),A(D,null,[b("div",X,[g(J,{"show-value":"","font-size":"80px",value:m.value,size:"320px",thickness:.1,color:"light-blue","track-color":"transparent",class:"q-ma-md text-green-13 text-bold"},{default:N(()=>[M(V(C.value),1)]),_:1},8,["value"])]),b("div",Y,[g(x,{class:"q-ma-md",color:"green",label:"Start",onClick:v}),g(x,{class:"q-ma-md",color:"grey",label:"Pause",onClick:_}),g(x,{class:"q-ma-md",color:"red",label:"Reset",onClick:n})]),b("div",Z,[g(x,{class:"q-ma-md",color:"blue",label:"Short Break (5min)",onClick:h[0]||(h[0]=S=>k(5))}),g(x,{class:"q-ma-md",color:"purple",label:"Long Break (15min)",onClick:h[1]||(h[1]=S=>k(15))})])],64))}},te={class:"text-center"},se={__name:"IndexPage",setup(e){return(a,r)=>(z(),H(G,{class:"flex flex-center bg-dark"},{default:N(()=>[b("div",te,[g(ee,{minutes:25})])]),_:1}))}};export{se as default};

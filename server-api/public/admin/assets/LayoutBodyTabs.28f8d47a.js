import{a4 as v,a6 as y,al as o,ap as e,aM as p,bh as b,aK as h,aP as u,aD as l,aq as f,aI as g}from"./index.6baeffbe.js";const m={class:"layout-body-tabs-nav"},B={class:"layout-body-tabs-nav-wrap"},k={class:"layout-body-tabs-nav-scroll"},V={class:"layout-body-tabs-nav-head"},C=["onClick"],F={class:"layout-body-tabs-main"},L={name:"LayoutBodyTabs"},D=v({...L,props:{tabs:{default:()=>[]},modelValue:{default:0},heightFil:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["update:modelValue","update:loading","change"],setup(i,{emit:c}){const n=i,d=c,t=y(n.modelValue),_=a=>{n.loading||(t.value=a.value,d("update:modelValue",a.value),d("change",a.value,a))};return(a,I)=>(l(),o("div",{class:u(["layout-body-tabs",a.heightFil?"height-fil":""])},[e("div",m,[e("div",B,[e("div",k,[e("div",V,[(l(!0),o(p,null,b(a.tabs,(s,r)=>(l(),o("div",{key:r,class:u(["layout-body-tabs-nav-head-item",[s.value==t.value?"is-active":"",a.loading&&s.value!=t.value?"is-loading":""]]),onClick:S=>_(s)},f(s.name),11,C))),128))])])])]),e("div",F,[h(a.$slots,"default",{},void 0,!0)])],2))}});const $=g(D,[["__scopeId","data-v-159d47fc"]]);export{$ as _};

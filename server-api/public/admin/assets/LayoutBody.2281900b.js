import{a4 as r,aJ as u,al as a,aK as o,aL as n,ap as s,aq as p,ao as _,aM as y,aD as l,aI as c}from"./index.6baeffbe.js";const m={key:0,class:"layout-body-main-header"},h={class:"layout-body-main-header-title"},g={name:"LayoutBody"},v=r({...g,props:{height:{type:[String,Boolean],default:!1},title:{default:""},padding:{default:"12px"}},setup(i){const t=i,d=u(()=>[t.height?`height:calc(${t.height} - 42px)`:"",`padding:${t.padding}`]);return(e,f)=>e.title==""?(l(),a("div",{key:0,class:"layout-body-main",style:n(d.value)},[o(e.$slots,"default",{},void 0,!0)],4)):(l(),a(y,{key:1},[e.title?(l(),a("div",m,[s("div",h,p(e.title),1),s("div",null,[o(e.$slots,"right",{},void 0,!0)])])):_("",!0),s("div",{class:"layout-body-main",style:n(d.value)},[o(e.$slots,"default",{},void 0,!0)],4)],64))}});const B=c(v,[["__scopeId","data-v-354718bd"]]);export{B as _};

import{a4 as r,aG as u,aj as t,aH as o,aI as d,an as s,ao as c,am as _,aJ as p,aA as l,aF as y}from"./index.b357e229.js";const m={key:0,class:"layout-body-main-header"},f={class:"layout-body-main-header-title"},h={name:"LayoutBody"},g=r({...h,props:{height:{type:[String,Boolean],default:!1},title:{default:""},padding:{default:"20px"}},setup(i){const a=i,n=u(()=>[a.height?`height:calc(${a.height} - 42px)`:"",`padding:${a.padding}`]);return(e,v)=>e.title==""?(l(),t("div",{key:0,class:"layout-body-main",style:d(n.value)},[o(e.$slots,"default",{},void 0,!0)],4)):(l(),t(p,{key:1},[e.title?(l(),t("div",m,[s("div",f,c(e.title),1),s("div",null,[o(e.$slots,"right",{},void 0,!0)])])):_("",!0),s("div",{class:"layout-body-main",style:d(n.value)},[o(e.$slots,"default",{},void 0,!0)],4)],64))}});const k=y(g,[["__scopeId","data-v-caf6fa57"]]);export{k as _};

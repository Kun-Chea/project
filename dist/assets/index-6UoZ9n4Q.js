import{N as p,C as h}from"./index-DCyFIHIc.js";import{a as v}from"./axios-upsvKRUO.js";import{r as g,c as s,a as n,b as t,F as i,d as f,o as e,t as _,e as y}from"./index-B9O3EXh8.js";const N={class:"cartoon_product_list"},k=["src"],x={class:"cartoon_product_item_info"},C={class:"cartoon_product_item_title"},B={class:"cartoon_product_item_content"},b=["onClick"],F={__name:"index",setup(z){const r=g([]),d=y(),l=o=>{d.push({path:"/detail",query:{cartoonId:o.id}})};async function u(){try{const o=await v({url:"https://zt.juzhun.com/admin/cartoon/getCartoonList",params:{pageNum:1,pageSize:1e3},method:"GET"});r.value=o.data.data.list}catch{}}return u(),(o,c)=>(e(),s(i,null,[n(p),c[0]||(c[0]=t("div",{class:"hidden_box_common"},null,-1)),t("div",N,[(e(!0),s(i,null,f(r.value,(a,m)=>(e(),s("div",{class:"cartoon_product_item",key:m},[t("img",{src:a.coverImg,alt:"",class:"cartoon_product_item_img"},null,8,k),t("div",x,[t("div",C,_(a.cartoonName),1),t("div",B,_(a.content),1),t("div",{class:"cartoon_product_item_btn",onClick:D=>l(a)}," 开始阅读 ",8,b)])]))),128))]),n(h)],64))}};export{F as default};
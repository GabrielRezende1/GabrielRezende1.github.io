import{_ as h,a as p,o as n,c as s,b as t,d as u,F as c,i as _,e as m,t as a,p as v,f as y}from"./index-b2a5675a.js";const f={data(){return{data:{}}},methods:{},mounted(){p.get("https://localhost:3000/documento/id/"+this.$route.params.id,{withCredentials:!0}).then(e=>{this.data=e.data,console.log(this.data)}).catch(e=>{console.log(e.response.data)})}},l=e=>(v("data-v-3ac93a52"),e=e(),y(),e),k=l(()=>t("th",null,"Tipo:",-1)),D=l(()=>t("th",null,"Título:",-1)),S=l(()=>t("th",null,"Autor:",-1)),g={key:0},w=l(()=>t("th",null,"Resumo:",-1)),B=l(()=>t("th",null,"Palavras-Chave:",-1)),C=l(()=>t("th",null,"Data:",-1)),I={key:0},V={key:1},b={key:2};function x(e,i,F,N,d,P){return n(),s("section",null,[t("table",null,[t("tbody",null,[t("tr",null,[k,D,S,d.data.isStudent?(n(),s("th",g,"Orientador:")):u("",!0),w,B,C]),(n(!0),s(c,null,_(d.data.doc,o=>(n(),s("tr",{key:o},[t("td",null,a(o.Doc_tipo.tipo),1),t("td",null,a(o.nome_doc),1),d.data.isStudent?(n(),s("td",I,a(o.Discente.nome),1)):(n(),s("td",V,a(o.Docente.nome),1)),d.data.isStudent?(n(),s("td",b,a(o.Docente.nome),1)):u("",!0),t("td",null,a(o.resumo),1),t("td",null,[(n(!0),s(c,null,_(d.data.docKeyword,r=>(n(),s("span",{key:r},a(r.Palavra_chave.nome)+"; ",1))),128))]),t("td",null,a(o.data),1)]))),128))]),t("td",null,[t("a",{href:"#",onClick:i[0]||(i[0]=m(o=>e.docDownload(e.doc.id_documento,e.doc.nome_arq),["prevent"]))},"Baixar")])])])}const q=h(f,[["render",x],["__scopeId","data-v-3ac93a52"]]);export{q as default};

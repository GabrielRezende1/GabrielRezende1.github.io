import{_ as t,a as n,o as l,c,b as e,p as i,f as _}from"./index-96ea1b3c.js";const p={data(){return{email:"",senha:""}},methods:{createAccount(){n.post("http://localhost:3000/cadastro",{email:this.email,senha:this.senha}).then(s=>{s.status==200&&console.log("Usuário cadastrado!")}).catch(s=>{console.log(s)})}},components:{}},o=s=>(i("data-v-a865e997"),s=s(),_(),s),d={method:"post"},h=o(()=>e("label",{for:"email"},"EMAIL:",-1)),r=["value"],u=o(()=>e("label",{for:"senha"},"SENHA:",-1)),m=["value"],f=o(()=>e("label",{for:"senha2"},"CONFIRME SUA SENHA:",-1)),v=["value"],A=o(()=>e("input",{type:"submit",value:"CADASTRAR"},null,-1)),I=o(()=>e("a",{href:"/login"},"Já possui conta? Então faça Login",-1));function S(s,x,y,E,a,b){return l(),c("section",null,[e("form",d,[h,e("input",{type:"text",id:"nome",value:a.email,placeholder:"Insira seu e-mail..."},null,8,r),u,e("input",{type:"password",id:"senha",value:a.senha,placeholder:"Insira sua senha..."},null,8,m),f,e("input",{type:"password",id:"senha2",value:a.senha,placeholder:"Repita sua senha..."},null,8,v),A,I])])}const w=t(p,[["render",S],["__scopeId","data-v-a865e997"]]);export{w as default};

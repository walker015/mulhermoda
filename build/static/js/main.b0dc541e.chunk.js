(this.webpackJsonpmulhermoda=this.webpackJsonpmulhermoda||[]).push([[0],{62:function(t,e,n){"use strict";n.r(e);var a,c,i,o,r,s,u,l,d=n(0),j=n.n(d),g=n(30),b=n.n(g),h=n(12),m=n(2),O=n(3),p=n(4),x=Object(p.a)(a||(a=Object(O.a)(["\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    html {\n        height: 100vh;\n    }\n"]))),v=p.b.section(c||(c=Object(O.a)(["\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    background-color: #363636;\n"]))),f=p.b.section(i||(i=Object(O.a)(["\n    display: grid;\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n    height: 100%;\n    background-color: #FFF;\n    justify-items: center;\n\n"]))),S=p.b.div(o||(o=Object(O.a)(["\n    position: relative;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    height: max-content;\n    img {\n        display: flex;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 0px;\n    }\n"]))),y=p.b.div(r||(r=Object(O.a)(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    background-color: #fff;\n    grid-template-rows: repeat(1, 1fr);\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n"]))),w=p.b.div(s||(s=Object(O.a)(["\n    margin: auto;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    p {\n        font-size: 400;\n    }\n"]))),N=p.b.div(u||(u=Object(O.a)(["\n    margin: auto;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    p {\n        font-size: 400;\n    }\n"]))),I=p.b.div(l||(l=Object(O.a)(["\n    position: relative;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n\n    img {\n        width: 100%;\n        height: 100vh;\n\n    }\n"]))),C=n.p+"static/media/logo.080f72e0.png",P=n.p+"static/media/moda.0eb45525.gif",k=n(1);function J(){var t=Object(m.f)();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(x,{}),Object(k.jsx)(v,{children:Object(k.jsxs)(f,{children:[Object(k.jsx)(S,{children:Object(k.jsx)("img",{src:C,className:"logoHome",alt:"logoHome",width:"40%",height:"100%"})}),Object(k.jsxs)(y,{children:[Object(k.jsxs)(w,{children:[Object(k.jsx)("h3",{children:"Produtos: "}),Object(k.jsx)("button",{type:"button",onClick:function(){t.push("/AddProdutos")},children:"Adicionar"}),Object(k.jsx)("button",{type:"button",onClick:function(){},children:"Visualizar"})]}),Object(k.jsxs)(N,{children:[Object(k.jsx)("h3",{children:"Clientes:"}),Object(k.jsx)("button",{type:"button",onClick:function(){t.push("/AddClientes")},children:"Adicionar"}),Object(k.jsx)("button",{type:"button",onClick:function(){},children:"Visualizar"})]})]}),Object(k.jsx)(I,{children:Object(k.jsx)("img",{src:P,className:"gifModa",alt:"Gif Moda"})})]})})]})}var A,E,F,H,q,z=n(6),R=n.p+"static/media/logoLogin.d6c36121.png",M=n(34),V=n.n(M),G=Object(p.a)(A||(A=Object(O.a)(["\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    html {\n        height: 100vh;\n    }\n"]))),L=p.b.div(E||(E=Object(O.a)(["\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    height: 100vh;\n    position: relative;\n\n    img {\n        margin: auto;\n    }\n"]))),T=p.b.div(F||(F=Object(O.a)(["\n    position: absolute;\n    left: 49%;\n    top: 35%;\n    width: 5%;\n"]))),B=p.b.input(H||(H=Object(O.a)(["\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    width: 100%;\n\n    &:focus,\n    &:active {\n        outline: none;\n        box-shadow: none;\n    }\n"]))),D=p.b.input(q||(q=Object(O.a)(["\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    width: 100%;\n\n    &:focus,\n    &:active {\n        outline: none;\n        box-shadow: none;\n    }\n"])));var Q,U=function(t){var e=Object(d.useState)(""),n=Object(z.a)(e,2),a=n[0],c=n[1],i=Object(d.useState)(""),o=Object(z.a)(i,2),r=o[0],s=o[1],u=Object(m.f)();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(G,{}),Object(k.jsxs)(L,{children:[Object(k.jsx)("img",{src:R,className:"App-logo",alt:"logo",width:"auto",height:"100%"}),Object(k.jsxs)(T,{children:[Object(k.jsx)(B,{name:"usuario",className:"usuarioInput",placeholder:"Usu\xe1rio",value:a,onChange:function(t){c(t.target.value)}}),Object(k.jsx)(D,{name:"senha",className:"senhaInput",placeholder:"Senha",value:r,onChange:function(t){s(t.target.value)}}),Object(k.jsx)("button",{type:"button",onClick:function(){V.a.get("https://my-json-server.typicode.com/walker015/mulhermoda/loginAdmin").then((function(t){var e=t.data,n=[];e.map((function(t){n.push(t.login)}));var c=t.data,i=[];c.map((function(t){i.push(t.senha)})),JSON.stringify(n[0])===JSON.stringify(a)&&JSON.stringify(i[0])===JSON.stringify(r)?u.push("/Home"):window.alert("LOGIN/SENHA INCORRETA")}))},children:"ENTRAR"})]})]})]})};function K(){Object(m.f)();var t=Object(d.useState)(""),e=Object(z.a)(t,2),n=e[0],a=e[1],c=Object(d.useState)(""),i=Object(z.a)(c,2),o=i[0],r=i[1],s=Object(d.useState)(""),u=Object(z.a)(s,2),l=u[0],j=u[1],g=Object(d.useState)(""),b=Object(z.a)(g,2),h=b[0],O=b[1],p=Object(d.useState)(""),x=Object(z.a)(p,2),v=x[0],f=x[1],S=[];return Object(k.jsxs)("section",{children:[Object(k.jsx)("div",{}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"text",className:"idProductImput",name:"idProduct",placeholder:"xxxx",value:n,onChange:function(t){a(t.target.value)}}),Object(k.jsx)("input",{className:"nameProductImput",name:"nameProduct",placeholder:"Nome do Produto",value:o,onChange:function(t){r(t.target.value)}}),Object(k.jsx)("input",{className:"quantProductImput",name:"quantProduct",placeholder:"Quantidade de Produtos",value:l,onChange:function(t){j(t.target.value)}}),Object(k.jsx)("input",{className:"descriProductImput",name:"descriProduct",placeholder:"Descri\xe7\xe3o do Produto",value:h,onChange:function(t){O(t.target.value)}}),Object(k.jsx)("input",{className:"valorProductImput",name:"valorProduct",placeholder:"Valor em centavos",value:v,onChange:function(t){f(t.target.value)}}),Object(k.jsx)("button",{type:"button",onClick:function(t){var e={id:n,name:o,quantidade:l,description:h,valor:v};null===localStorage.getItem("@store")?(S.push(JSON.stringify(e)),localStorage.setItem("@store",S)):(S.push(localStorage.getItem("@store"),JSON.stringify(e)),localStorage.setItem("@store",S)),a(t.target.value=""),r(t.target.value=""),j(t.target.value=""),O(t.target.value=""),f(t.target.value="")},children:"Enviar"})]})]})}function W(){var t=Object(d.useState)(""),e=Object(z.a)(t,2),n=e[0],a=e[1],c=Object(d.useState)(""),i=Object(z.a)(c,2),o=i[0],r=i[1],s=Object(d.useState)(""),u=Object(z.a)(s,2),l=u[0],j=u[1],g=Object(d.useState)(""),b=Object(z.a)(g,2),h=b[0],m=b[1],O=Object(d.useState)(""),p=Object(z.a)(O,2),x=p[0],v=p[1],f=[];return Object(k.jsxs)("section",{children:[Object(k.jsx)("div",{}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{className:"rgImput",name:"input",placeholder:"xxx.xxx.xxx-xx",value:n,onChange:function(t){a(t.target.value)}}),Object(k.jsx)("input",{className:"nameProductImput",name:"input",placeholder:"Nome",value:o,onChange:function(t){r(t.target.value)}}),Object(k.jsx)("input",{className:"nascimentoImput",name:"input",placeholder:"xx/xx/xxxx",value:x,onChange:function(t){v(t.target.value)}}),Object(k.jsx)("input",{className:"enderecoImput",name:"input",placeholder:"Endere\xe7o",value:l,onChange:function(t){j(t.target.value)}}),Object(k.jsx)("input",{className:"cepImput",name:"input",placeholder:"xxxxx-xxx",value:h,onChange:function(t){m(t.target.value)}}),Object(k.jsx)("button",{type:"button",onClick:function(t){var e=[];e.push({id:n,name:o,quantidade:l,description:h,valor:x}),null===localStorage.getItem("@data")?(f.push(JSON.stringify(e)),localStorage.setItem("@data",f)):(f.push(localStorage.getItem("@data"),JSON.stringify(e)),localStorage.setItem("@data",f)),a(t.target.value=""),r(t.target.value=""),j(t.target.value=""),m(t.target.value=""),v(t.target.value="")},children:"Enviar"})]})]})}var X,Y=Object(p.a)(Q||(Q=Object(O.a)(["\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    html {\n        height: 100vh;\n    }\n"])));function Z(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(Y,{})})}var $=Object(p.a)(X||(X=Object(O.a)(["\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    html {\n        height: 100vh;\n    }\n"])));function _(){var t=Object(d.useState)([]),e=Object(z.a)(t,2),n=e[0],a=e[1];return Object(d.useEffect)((function(){var t=[JSON.parse(localStorage.getItem("@store"))];a(t),console.log(localStorage.getItem("@store"))}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)($,{}),Object(k.jsx)("section",{children:Object(k.jsx)("ul",{children:n.map((function(t){return Object(k.jsx)("li",{children:t})}))})})]})}function tt(){return Object(k.jsx)(h.a,{children:Object(k.jsxs)(m.c,{children:[Object(k.jsx)(m.a,{path:"/Home",exact:!0,component:J}),Object(k.jsx)(m.a,{path:"/",exact:!0,component:U}),Object(k.jsx)(m.a,{path:"/addProdutos",component:K}),Object(k.jsx)(m.a,{path:"/addClientes",component:W}),Object(k.jsx)(m.a,{path:"/viewClientes",component:Z}),Object(k.jsx)(m.a,{path:"/viewProdutos",component:_})]})})}var et=function(){return Object(k.jsx)(tt,{})};b.a.render(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(et,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.b0dc541e.chunk.js.map
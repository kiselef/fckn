(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{120:function(e,t,s){},223:function(e,t,s){"use strict";s.r(t);var r=s(7),a=s(0),c=s(24),i=s.n(c),n=(s(119),s(120),s(53)),o=s(48),j=s(36),l=s(66),d=s(38),b=s(231),u=s(228),O=s(237),p=s(236),h=s(238),x=s(99),m=s(234);var g=[{id:100,title:"Wash your FCKNG face.",status:"Urgent",author:"Mike",description:"Description.",created_at:"2021-01-01 00:00:00",progress:"not_started"},{id:101,title:"Eat your FCKNG food.",status:"Normal",description:"Description FCKNG.",author:"Mike",created_at:"2021-01-01 00:10:00",progress:"not_started"},{id:102,title:"Clear your FCKNG bedroom.",description:"Description FCKNG bedroom",status:"Urgent",author:"Valera",created_at:"2021-01-01 00:00:00",progress:"in_progress"},{id:105,title:"Get up from your FCKNG bed.",description:"Description FCKNG bed",status:"Normal",author:"Lena",created_at:"2021-01-01 00:00:00",progress:"completed"}];const k=Object(a.createContext)(),v=({children:e})=>{const t=Object(a.useState)(g),s=Object(o.a)(t,2),c=s[0],i=s[1];return Object(r.jsx)(k.Provider,{value:{tasks:c,setTasks:i},children:e})},N={urgent:"red",normal:"blue",default:"lime"};var y=e=>{const t=e.id,s=e.title,c=e.status,i=e.author,n=e.description,j=Object(a.useContext)(k).setTasks,l=Object(m.a)({item:{task:e,type:"default"}}),d=Object(o.a)(l,2)[1],g=Object(r.jsx)(b.a,{onClick:()=>{j((e=>e.filter((e=>e.id!==t))))},children:Object(r.jsx)(b.a.Item,{icon:Object(r.jsx)(h.a,{}),children:"Remove"},"remove")});return Object(r.jsx)("div",{ref:d,className:"taskItem",children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(O.a,{color:f(c),children:c}),Object(r.jsx)(p.a.Button,{size:"small",style:{position:"absolute",right:"20px"},overlay:g,placement:"bottomRight",icon:Object(r.jsx)(x.a,{})}),Object(r.jsxs)("div",{style:{marginTop:"10px"},children:[Object(r.jsx)("div",{className:"taskTitle",children:s}),Object(r.jsx)("div",{className:"taskDescription",children:n}),Object(r.jsxs)("b",{children:["Author: ",Object(r.jsx)("a",{href:"#",children:i})]})]})]})})};function f(e=""){var t;return null!==(t=N[e.toLowerCase()])&&void 0!==t?t:N.default}var C=s(67),_=s(235),D=({type:e,tasks:t,onDrop:s})=>{const c=Object(a.useCallback)((t=>s(e,t)),[e,s]),i=Object(_.a)({accept:["default"],drop:c}),n=Object(o.a)(i,2)[1];return Object(r.jsx)(d.a,{span:8,children:Object(r.jsx)("div",{ref:n,style:{height:"100%"},children:G(t)})})};function G(e=[]){return e.length>0?e.map(((e,t)=>Object(r.jsx)(y,Object(n.a)({},e),t))):Object(r.jsx)(C.a,{image:C.a.PRESENTED_IMAGE_SIMPLE})}var F=s(227),M=s(140);const T="not_started",I="in_progress",K="completed";var A=s(233),E=s(229),S=s(232),w=s(230),L=({setVisible:e,setTasks:t})=>{const s=()=>{e(!1)};return Object(r.jsx)(A.a,{title:"New FCKNG routine",onCancel:s,visible:!0,footer:null,children:Object(r.jsxs)(E.a,{name:"basic",layout:"vertical",initialValues:{status:"Normal"},onFinish:s=>{t((e=>[...e,Object(n.a)(Object(n.a)({},s),{},{author:"Default Author",id:Math.round(100+99900*Math.random()),progress:"not_started"})])),e(!1)},children:[Object(r.jsx)(E.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input title!"}],children:Object(r.jsx)(S.a,{})}),Object(r.jsx)(E.a.Item,{label:"Description",name:"description",children:Object(r.jsx)(S.a.TextArea,{rows:3})}),Object(r.jsx)(E.a.Item,{label:"Status",name:"status",children:Object(r.jsxs)(w.a,{children:[Object(r.jsx)(w.a.Option,{value:"Urgent",children:"Urgent"}),Object(r.jsx)(w.a.Option,{value:"Normal",children:"Normal"}),Object(r.jsx)(w.a.Option,{value:"Lime",children:"Lime :)"})]})}),Object(r.jsxs)(E.a.Item,{children:[Object(r.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Add"}),"\xa0\xa0\xa0",Object(r.jsx)(j.a,{onClick:s,children:"Cancel"})]})]})})};function P(){const e=Object(a.useContext)(k),t=e.tasks,s=e.setTasks,c=Object(a.useState)(!1),i=Object(o.a)(c,2),b=i[0],u=i[1],O=Object(a.useMemo)((()=>function(e){const t={};return e.forEach((e=>{Array.isArray(t[e.progress])?t[e.progress].push(e):t[e.progress]=[e]})),t}(t)),[t]),p=Object(a.useMemo)((()=>O.not_started),[O]),h=Object(a.useMemo)((()=>O.in_progress),[O]),x=Object(a.useMemo)((()=>O.completed),[O]),m=(e,{task:t})=>{t.progress!==e&&s((s=>[...s.filter((e=>e.id!==t.id)),Object(n.a)(Object(n.a)({},t),{},{progress:e})]))};return Object(r.jsxs)("div",{className:"main-wrapper",children:[Object(r.jsxs)("h2",{children:["Do your FCKNG routines",Object(r.jsx)("br",{}),Object(r.jsx)(j.a,{type:"primary",className:"btn-add",onClick:()=>u(!0),children:"Add FCKNG routine"})]}),Object(r.jsxs)(l.a,{gutter:24,className:"tasksHeader",children:[Object(r.jsx)(d.a,{span:8,children:"Not Started"}),Object(r.jsx)(d.a,{span:8,children:"In Progress"}),Object(r.jsx)(d.a,{span:8,children:"Completed"})]}),Object(r.jsx)(F.a,{backend:M.a,children:Object(r.jsxs)(l.a,{gutter:24,children:[Object(r.jsx)(D,{type:T,onDrop:m,tasks:p}),Object(r.jsx)(D,{type:I,onDrop:m,tasks:h}),Object(r.jsx)(D,{type:K,onDrop:m,tasks:x})]})}),b&&Object(r.jsx)(L,{setTasks:s,setVisible:u})]})}function U(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(v,{children:Object(r.jsx)(P,{})})})}const V=document.getElementById("root");i.a.render(Object(r.jsx)(a.StrictMode,{children:Object(r.jsx)(U,{})}),V)}},[[223,1,2]]]);
//# sourceMappingURL=main.6c9e1416.chunk.js.map
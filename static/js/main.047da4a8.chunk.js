(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){e.exports=t(177)},119:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(108),c=t.n(l),o=(t(119),t(6)),i=t(95),m=t(176),s=function(e){return Object(i.a)({},"dark"===e?{grey:{100:"#e0e0e0",200:"#c2c2c2",300:"#a3a3a3",400:"#858585",500:"#666666",600:"#525252",700:"#3d3d3d",800:"#292929",900:"#141414"},primary:{100:"#d0d1d5",200:"#a1a4ab",300:"#727681",400:"#1F2A40",500:"#141b2d",600:"#101624",700:"#0c101b",800:"#080b12",900:"#040509"},greenAccent:{100:"#dbf5ee",200:"#b7ebde",300:"#94e2cd",400:"#70d8bd",500:"#4cceac",600:"#3da58a",700:"#2e7c67",800:"#1e5245",900:"#0f2922"},redAccent:{100:"#f8dcdb",200:"#f1b9b7",300:"#e99592",400:"#e2726e",500:"#db4f4a",600:"#af3f3b",700:"#832f2c",800:"#58201e",900:"#2c100f"},blueAccent:{100:"#e1e2fe",200:"#c3c6fd",300:"#a4a9fc",400:"#868dfb",500:"#6870fa",600:"#535ac8",700:"#3e4396",800:"#2a2d64",900:"#151632"}}:{grey:{100:"#141414",200:"#292929",300:"#3d3d3d",400:"#525252",500:"#666666",600:"#858585",700:"#a3a3a3",800:"#c2c2c2",900:"#e0e0e0"},primary:{100:"#040509",200:"#080b12",300:"#0c101b",400:"#f2f0f0",500:"#141b2d",600:"#434957",700:"#727681",800:"#a1a4ab",900:"#d0d1d5"},greenAccent:{100:"#0f2922",200:"#1e5245",300:"#2e7c67",400:"#3da58a",500:"#4cceac",600:"#70d8bd",700:"#94e2cd",800:"#b7ebde",900:"#dbf5ee"},redAccent:{100:"#2c100f",200:"#58201e",300:"#832f2c",400:"#af3f3b",500:"#db4f4a",600:"#e2726e",700:"#e99592",800:"#f1b9b7",900:"#f8dcdb"},blueAccent:{100:"#151632",200:"#2a2d64",300:"#3e4396",400:"#535ac8",500:"#6870fa",600:"#868dfb",700:"#a4a9fc",800:"#c3c6fd",900:"#e1e2fe"}})},d=Object(n.createContext)({toggleColorMode:function(){}}),u=function(){var e=Object(n.useState)("dark"),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useMemo)(function(){return{toggleColorMode:function(){return r(function(e){return"light"===e?"dark":"light"})}}},[]);return[Object(n.useMemo)(function(){return Object(m.a)(function(e){var a=s(e);return{palette:Object(i.a)({mode:e},"dark"===e?{primary:{main:a.primary[500]},secondary:{main:a.greenAccent[500]},neutral:{dark:a.grey[700],main:a.grey[500],light:a.grey[100]},background:{default:a.primary[500]}}:{primary:{main:a.primary[100]},secondary:{main:a.greenAccent[500]},neutral:{dark:a.grey[700],main:a.grey[500],light:a.grey[100]},background:{default:"#fcfcfc"}}),typography:{fontFamile:["Source Sans Pro","sans-serif"].join(","),fontSize:12,h1:{fontFamile:["Source Sans Pro","sans-serif"].join(","),fontSize:40},h2:{fontFamile:["Source Sans Pro","sans-serif"].join(","),fontSize:32},h3:{fontFamile:["Source Sans Pro","sans-serif"].join(","),fontSize:24},h4:{fontFamile:["Source Sans Pro","sans-serif"].join(","),fontSize:20},h5:{fontFamile:["Source Sans Pro","sans-serif"].join(","),fontSize:16},h6:{fontFamile:["Source Sans Pro","sans-serif"].join(","),fontSize:14}}}}(t))},[t]),l]},f=t(237),p=t(233),E=t(9),g=t(35),b=t(238),h=t(240),y=t(64),x=t(133),S=t.n(x),v=t(132),j=t.n(v),C=t(134),A=t.n(C),k=t(135),O=t.n(k),w=t(78),P=t.n(w),F=t(125),M=t.n(F),N=function(){var e=Object(g.a)(),a=s(e.palette.mode),t=Object(n.useContext)(d);return r.a.createElement(b.a,{display:"flex",justifyContent:"space-between",p:2},r.a.createElement(b.a,{display:"flex",backgroundColor:a.primary[400],borderRadius:"3px"},r.a.createElement(y.c,{sx:{ml:2,flex:1},placeholder:"Search"}),r.a.createElement(h.a,{type:"button",sx:{p:1}},r.a.createElement(M.a,null))),r.a.createElement(b.a,{display:"flex"},r.a.createElement(h.a,{onClick:t.toggleColorMode},"dark"===e.palette.mode?r.a.createElement(j.a,null):r.a.createElement(S.a,null)),r.a.createElement(h.a,null,r.a.createElement(A.a,null)),r.a.createElement(h.a,null,r.a.createElement(O.a,null)),r.a.createElement(h.a,null,r.a.createElement(P.a,null))))},R=t(241),z=function(e){var a=e.title,t=e.subtitle,n=Object(g.a)(),l=s(n.palette.mode);return r.a.createElement(b.a,{mb:"30px"},r.a.createElement(R.a,{variant:"h2",color:l.grey[100],fontWeight:"Bold",sx:{mb:"5px"}},a),r.a.createElement(R.a,{variant:"h5",color:l.greenAccent[400]},t))},D=function(){return r.a.createElement(b.a,{m:"20px"},r.a.createElement(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.a.createElement(z,{title:"DASHBOARD",subtitle:"Welcome to your dashboard"})))},I=t(46),B=t(70),L=t(136),T=t.n(L),J=t(137),W=t.n(J),q=t(138),H=t.n(q),G=t(139),Q=t.n(G),V=t(140),K=t.n(V),U=t(141),X=t.n(U),Y=t(142),Z=t.n(Y),$=t(143),_=t.n($),ee=t(144),ae=t.n(ee),te=t(145),ne=t.n(te),re=t(96),le=t.n(re),ce=function(e){var a=e.title,t=e.to,n=e.icon,l=e.selected,c=e.setSelected,o=Object(g.a)(),i=s(o.palette.mode);return r.a.createElement(I.b,{active:l===a,style:{color:i.grey[100]},onClick:function(){return c(a)},icon:n,component:r.a.createElement(B.b,{to:t})},r.a.createElement(R.a,null,a))},oe=function(){var e=Object(g.a)(),a=s(e.palette.mode),t=Object(I.e)(),l=t.collapseSidebar,c=t.collapsed,i=Object(n.useState)("Dashboard"),m=Object(o.a)(i,2),d=m[0],u=m[1];return r.a.createElement(b.a,{sx:{"& .ps-sidebar-root":{border:"none"},"& .ps-sidebar-container":{background:"".concat(a.primary[400]," !important")},"& .ps-menu-button":{padding:"5px 35px 5px 20px !important"},"& .ps-menu-button:hover":{color:"#868dfb !important",backgroundColor:"transparent !important"}}},r.a.createElement(I.d,null,r.a.createElement(I.a,{iconShape:"square"},r.a.createElement(I.b,{onClick:function(){return l()},icon:c?r.a.createElement(le.a,null):void 0,style:{margin:"10px 0 20px 0",color:a.grey[100]}},l&&r.a.createElement(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center",ml:"15px"},r.a.createElement(R.a,{variant:"h3",color:a.grey[100]},"catmin"),r.a.createElement(h.a,null,r.a.createElement(le.a,null)))),l&&r.a.createElement(b.a,{mb:"25px"},r.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement("img",{alt:"user-avatar",width:"100px",height:"100px",src:"../../assets/user-img.jpg",style:{cursor:"pointer",borderRadius:"50%"}})),r.a.createElement(b.a,{textAlign:"center"},r.a.createElement(R.a,{variant:"h2",color:a.grey[100],fontWeight:"bold",sx:{m:"10px 0 0 0"}},"Mr Cat"),r.a.createElement(R.a,{variant:"h5",color:a.greenAccent[500]},"VR Serious Admin"))),r.a.createElement(b.a,{paddingLeft:l?void 0:"10%"},r.a.createElement(ce,{title:"Dashboard",to:"/",icon:r.a.createElement(T.a,null),selected:d,setSelected:u}),r.a.createElement(R.a,{variant:"h6",color:a.grey[300],sx:{m:"15px 0 5px 20px"}},"Data"),r.a.createElement(ce,{title:"Manage Team",to:"/team",icon:r.a.createElement(W.a,null),selected:d,setSelected:u}),r.a.createElement(ce,{title:"Contacts Information",to:"/contacts",icon:r.a.createElement(H.a,null),selected:d,setSelected:u}),r.a.createElement(ce,{title:"Invioces Balances",to:"/invoices",icon:r.a.createElement(Q.a,null),selected:d,setSelected:u}),r.a.createElement(R.a,{variant:"h6",color:a.grey[300],sx:{m:"15px 0 5px 20px"}},"Pages"),r.a.createElement(ce,{title:"Profile Form",to:"/form",icon:r.a.createElement(P.a,null),selected:d,setSelected:u}),r.a.createElement(ce,{title:"Calendar",to:"/calendar",icon:r.a.createElement(K.a,null),selected:d,setSelected:u}),r.a.createElement(ce,{title:"FAQ Page",to:"/faq",icon:r.a.createElement(X.a,null),selected:d,setSelected:u}),r.a.createElement(R.a,{variant:"h6",color:a.grey[300],sx:{m:"15px 0 5px 20px"}},"Charts"),r.a.createElement(ce,{title:"Bar Chart",to:"/bar",icon:r.a.createElement(Z.a,null),selected:d,setSelected:u}),r.a.createElement(ce,{title:"Pie Chart",to:"/pie",icon:r.a.createElement(_.a,null),selected:d,setSelected:u}),r.a.createElement(ce,{title:"Line Chart",to:"/line",icon:r.a.createElement(ae.a,null),selected:d,setSelected:u}),r.a.createElement(ce,{title:"Geography Chart",to:"/geography",icon:r.a.createElement(ne.a,null),selected:d,setSelected:u})))))},ie=t(234),me=[{id:1,name:"Jon Snow",email:"jonsnow@gmail.com",age:35,phone:"(665)121-5454",access:"admin"},{id:2,name:"Cersei Lannister",email:"cerseilannister@gmail.com",age:42,phone:"(421)314-2288",access:"manager"},{id:3,name:"Jaime Lannister",email:"jaimelannister@gmail.com",age:45,phone:"(422)982-6739",access:"user"},{id:4,name:"Anya Stark",email:"anyastark@gmail.com",age:16,phone:"(921)425-6742",access:"admin"},{id:5,name:"Daenerys Targaryen",email:"daenerystargaryen@gmail.com",age:31,phone:"(421)445-1189",access:"user"},{id:6,name:"Ever Melisandre",email:"evermelisandre@gmail.com",age:150,phone:"(232)545-6483",access:"manager"},{id:7,name:"Ferrara Clifford",email:"ferraraclifford@gmail.com",age:44,phone:"(543)124-0123",access:"user"},{id:8,name:"Rossini Frances",email:"rossinifrances@gmail.com",age:36,phone:"(222)444-5555",access:"user"},{id:9,name:"Harvey Roxie",email:"harveyroxie@gmail.com",age:65,phone:"(444)555-6239",access:"admin"}],se=t(146),de=t.n(se),ue=t(148),fe=t.n(ue),pe=t(147),Ee=t.n(pe),ge=function(){var e=Object(g.a)(),a=s(e.palette.mode),t=[{field:"id",headerName:"ID"},{field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},{field:"email",headerName:"Email",flex:1},{field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},{field:"phone",headerName:"Phone Number",flex:1},{field:"access",headerName:"Access Level",flex:1,renderCell:function(e){var t=e.row.access;return r.a.createElement(b.a,{width:"60%",m:"0 auto",p:"5px",display:"flex",justifyContent:"center",backgroundColor:"admin"===t?a.greenAccent[600]:a.greenAccent[700],borderRadius:"4px"},"admin"===t&&r.a.createElement(de.a,null),"manager"===t&&r.a.createElement(Ee.a,null),"user"===t&&r.a.createElement(fe.a,null),r.a.createElement(R.a,{color:a.grey[100],sx:{ml:"5px"}},t))}}];return r.a.createElement(b.a,{m:"20px"},r.a.createElement(z,{title:"TEAM",subtitle:"Managing The Team Members"}),r.a.createElement(b.a,{m:"40px 0 0 0",height:"75vh"},r.a.createElement(ie.a,{checkboxSelection:!0,rows:me,columns:t})))};var be=function(){var e=u(),a=Object(o.a)(e,2),t=a[0],n=a[1];return r.a.createElement(d.Provider,{value:n},r.a.createElement(f.a,{theme:t},r.a.createElement(p.a,null)," ",r.a.createElement("div",{className:"app"},r.a.createElement(oe,null),r.a.createElement("main",{className:"content"},r.a.createElement(N,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",element:r.a.createElement(D,null)}),r.a.createElement(E.a,{path:"/team",element:r.a.createElement(ge,null)}))))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B.a,null,r.a.createElement(I.c,null,r.a.createElement(be,null)))))}},[[111,2,1]]]);
//# sourceMappingURL=main.047da4a8.chunk.js.map
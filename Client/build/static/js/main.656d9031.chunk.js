(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),o=(a(81),a(7)),s=a(8),m=a(10),u=a(9),i=a(17),p=a(6),h=a.n(p),d=a(14),E=a(13),b=a.n(E),g=(a(100),a(16)),f="https://itayinbar.herokuapp.com",v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submit=function(){var e=Object(d.a)(h.a.mark((function e(t){var a,l,r,c,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,l=a.email,r=a.password,c=a.handler,o={email:l,password:r},e.next=5,b.a.post(f+"/login",o);case 5:(s=e.sent).data.succeed&&c?c({isLoggedIn:s.data.succeed,isLawyer:s.data.res.isLawyer}):alert(s.data.res);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.state={email:"",password:"",handler:e.handleLogin},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"custom-file-translate-scss",id:"login",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement("h3",null,"Login"),l.a.createElement("div",null,l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",autoComplete:"on",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"),l.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",l.a.createElement("a",{href:"/"},"password?")))}}]),a}(n.Component),y=Object(g.e)(v),C=a(12),k=(a(106),a(148)),O=a(20),j=a(141),w=a(143),N=a(150),x=a(139),L=a(142),F=a(138),S=a(140);function D(e,t,a,n,l){return{blockNum:e,buildNum:t,apartNum:a,purchaseDate:n,reportDate:l}}var G=Object(O.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white,fontSize:12,size:"small"},body:{fontSize:10}}}))(N.a),I=Object(O.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(F.a),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={scanned_reports:[{blockNum:"",buildNum:"",apartNum:"",purchaseDate:"",reportDate:""}],unscanned_reports:[{blockNum:"",buildNum:"",apartNum:"",purchaseDate:"",reportDate:""}]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(f+"/rep");case 2:t=e.sent,console.log(t.data),null!==t.data&&this.setState({scanned_reports:t.data.res.scanned_reports,unscanned_reports:t.data.res.unscanned_reports}),console.log(this.state);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"makerows",value:function(){var e=[];this.state.scanned_reports.forEach((function(t){e.push(D(t.blockNum,t.buildNum,t.apartNum,t.purchaseDate,t.reportDate))}));var t=[];return this.state.unscanned_reports.forEach((function(e){t.push(D(e.blockNum,e.buildNum,e.apartNum,e.purchaseDate,e.reportDate))})),console.log([e,t]),[e,t]}},{key:"render",value:function(){var e=this.makerows();return l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",encType:"multipart/form-data"},l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"lander"},l.a.createElement("h1",null,"\u05d3\u05d9\u05d5\u05d5\u05d7\u05d9\u05dd- \u05d8\u05e8\u05dd \u05d3\u05d5\u05d5\u05d7\u05d5"))),l.a.createElement(x.a,{component:S.a},l.a.createElement("h3",{align:"right"},"\u05e8\u05db\u05d9\u05e9\u05d5\u05ea \u05e2\u05dd \u05d8\u05d5\u05e4\u05e1 \u05e1\u05e8\u05d9\u05e7\u05d4"),l.a.createElement(j.a,{className:"table","aria-label":"customized table"},l.a.createElement(L.a,null,l.a.createElement(F.a,null,l.a.createElement(G,{align:"right"}),l.a.createElement(G,{align:"right"},"\u05ea\u05d0\u05e8\u05d9\u05da \u05d0\u05d7\u05e8\u05d5\u05df \u05dc\u05d3\u05d9\u05d5\u05d5\u05d7"),l.a.createElement(G,{align:"right"},"\u05ea\u05d0\u05e8\u05d9\u05da \u05e8\u05db\u05d9\u05e9\u05d4"),l.a.createElement(G,{align:"right"},"\u05d3\u05d9\u05e8\u05d4"),l.a.createElement(G,{align:"right"},"\u05d1\u05e0\u05d9\u05d9\u05df"),l.a.createElement(G,{align:"right"},"\u05de\u05d2\u05e8\u05e9"))),l.a.createElement(w.a,null,e[0].map((function(e,t){return l.a.createElement(I,{key:t},l.a.createElement(G,{align:"right",href:"/",key:2},"\u05d3\u05d5\u05d5\u05d7"),l.a.createElement(G,{align:"right",key:3},e.reportDate),l.a.createElement(G,{align:"right",key:4},e.purchaseDate),l.a.createElement(G,{align:"right",key:5},e.apartNum),l.a.createElement(G,{align:"right",key:6},e.buildNum),l.a.createElement(G,{align:"right",key:7},e.blockNum))}))))),l.a.createElement("h3",{align:"right"},"\u05e8\u05db\u05d9\u05e9\u05d5\u05ea \u05dc\u05dc\u05d0 \u05d8\u05d5\u05e4\u05e1 \u05e1\u05e8\u05d9\u05e7\u05d4"),l.a.createElement(x.a,{component:S.a},l.a.createElement(j.a,{className:"table","aria-label":"customized table"},l.a.createElement(L.a,null,l.a.createElement(F.a,null,l.a.createElement(G,{align:"right"}),l.a.createElement(G,{align:"right"},"\u05ea\u05d0\u05e8\u05d9\u05da \u05d0\u05d7\u05e8\u05d5\u05df \u05dc\u05d3\u05d9\u05d5\u05d5\u05d7"),l.a.createElement(G,{align:"right"},"\u05ea\u05d0\u05e8\u05d9\u05da \u05e8\u05db\u05d9\u05e9\u05d4"),l.a.createElement(G,{align:"right"},"\u05d3\u05d9\u05e8\u05d4"),l.a.createElement(G,{align:"right"},"\u05d1\u05e0\u05d9\u05d9\u05df"),l.a.createElement(G,{align:"right"},"\u05de\u05d2\u05e8\u05e9"))),l.a.createElement(w.a,null,e[1].map((function(e,t){return l.a.createElement(I,{key:t},l.a.createElement(G,{align:"right",href:"/",key:2},"\u05d4\u05d5\u05e1\u05e4\u05ea \u05d8\u05d5\u05e4\u05e1 \u05e1\u05e8\u05d9\u05e7\u05d4"),l.a.createElement(G,{align:"right",key:3},e.reportDate),l.a.createElement(G,{align:"right",key:4},e.purchaseDate),l.a.createElement(G,{align:"right",key:5},e.apartNum),l.a.createElement(G,{align:"right",key:6},e.buildNum),l.a.createElement(G,{align:"right",key:7},e.blockNum))}))))))}}]),a}(n.Component),_=Object(g.e)(T),z=a(35),A=a(144),P=a(65),V=a(66),B=(a(60),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value)),console.log(e.state)},e.handleLawyer=function(t){e.setState({type:!0}),console.log(e.state)},e.handleCostumer=function(t){e.setState({type:!1}),console.log(e.state)},e.state={email:"",type:!0},e.submit=e.submit.bind(Object(z.a)(e)),e}return Object(s.a)(a,[{key:"submit",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.a.post(f+"/register",this.state);case 3:(a=e.sent).data.succeed?alert("\u05de\u05e9\u05ea\u05de\u05e9 \u05e0\u05e8\u05e9\u05dd \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"):alert(a.data.res);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement("br",null),l.a.createElement(k.a.Group,{as:A.a,controlId:"formHorizontalEmail"},l.a.createElement(P.a,{sm:{span:4,offset:4}},l.a.createElement(k.a.Label,null,"\u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05d9\u05d9\u05dc"),l.a.createElement(k.a.Control,{type:"email",name:"email",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05d9\u05d9\u05dc",onChange:this.handleChange})),l.a.createElement(A.a,null)),l.a.createElement("fieldset",null,l.a.createElement(k.a.Group,{as:A.a},l.a.createElement(P.a,{sm:{span:0,offset:4}},l.a.createElement("input",{type:"radio",name:"type",value:"lawyer",defaultChecked:!0,onChange:this.handleLawyer})," \u05e2\u05d5\u05e8\u05da \u05d3\u05d9\u05df",l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"type",value:"client",onChange:this.handleCostumer})," \u05dc\u05e7\u05d5\u05d7"))),l.a.createElement(k.a.Group,{as:A.a},l.a.createElement(P.a,{sm:{span:1,offset:5}},l.a.createElement(V.a,{type:"submit"},"submit"))))}}]),a}(n.Component)),H=Object(g.e)(B),M=(a(61),a(108),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={report:e.report},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("table",{className:"w3-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u05db\u05d9\u05d5\u05d5\u05e0\u05d9\u05dd"),l.a.createElement("th",null,"\u05de\u05d7\u05d9\u05e8 \u05d3\u05d9\u05e8\u05d4 \u05de\u05de\u05d5\u05d3\u05d3"),l.a.createElement("th",null,"\u05d4\u05e2\u05e8\u05d5\u05ea"),l.a.createElement("th",null,"\u05de\u05db\u05d9\u05e8\u05d4 \u05d1\u05de\u05e1\u05d2\u05e8\u05ea \u05de\u05d7\u05d9\u05e8 \u05dc\u05de\u05e9\u05ea\u05db\u05df"),l.a.createElement("th",null,"\u05de\u05d7\u05d9\u05e8 \u05d3\u05d9\u05e8\u05d4 \u05e0\u05d5\u05de\u05d9\u05e0\u05dc\u05d9"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d5\u05ea (\u05db\u05de\u05d5\u05ea)"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05de\u05d7\u05e1\u05df"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05de\u05d7\u05e1\u05df"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05de\u05e8\u05e4\u05e1\u05ea/\u05d2\u05d9\u05e0\u05d4"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05d3\u05d9\u05e8\u05d4 \u05d0\u05e7\u05d5\u05d5\u05d9\u05dc\u05e0\u05d8\u05d9"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05d3\u05d9\u05e8\u05d4"),l.a.createElement("th",null,"\u05de\u05e1' \u05d7\u05d3\u05e8\u05d9\u05dd"),l.a.createElement("th",null,"\u05e7\u05d5\u05de\u05d4"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e7 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement("tr",null,l.a.createElement("td",null,this.state.report.dir),l.a.createElement("td",null,this.state.report.apartMMDprice),l.a.createElement("td",null,this.state.report.notes),l.a.createElement("td",null,this.state.report.apartTenantPrice),l.a.createElement("td",null,this.state.report.price),l.a.createElement("td",null,this.state.report.parkingNum),l.a.createElement("td",null,this.state.report.warehouseNum),l.a.createElement("td",null,this.state.report.warehouseArea),l.a.createElement("td",null,this.state.report.balconyArea),l.a.createElement("td",null,this.state.report.apartAreaAq),l.a.createElement("td",null,this.state.report.apartArea),l.a.createElement("td",null,this.state.report.roomNum),l.a.createElement("td",null,this.state.report.level),l.a.createElement("td",null,this.state.report.apartNum),l.a.createElement("td",null,this.state.report.buildNum),l.a.createElement("td",null,this.state.report.blockNum)))))}}]),a}(n.Component)),J=Object(g.e)(M),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).submit=function(){var t=Object(d.a)(h.a.mark((function t(a){var n,l,r,c,o,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,l=n.block,r=n.building,c=n.apartment,o={block:l,building:r,apartment:c},t.next=5,b.a.post(f+"/searchrepo",o);case 5:s=t.sent,console.log(s),s.data.succeed?(e.setState({report:null}),e.setState({report:s.data.res})):alert(s.data.res);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.state={block:"",building:"",apartment:"",report:null},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.report;return console.log(e),l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement(P.a,{md:{span:8,offset:5}},l.a.createElement(k.a.Group,{controlId:"block"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement(k.a.Control,{name:"block",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"building"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement(k.a.Control,{name:"building",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"apartment"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4")),l.a.createElement(k.a.Control,{name:"apartment",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4",onChange:this.handleChange})),l.a.createElement(V.a,{variant:"primary",type:"submit"},"\u05d0\u05d9\u05e9\u05d5\u05e8")),l.a.createElement(P.a,null,e?l.a.createElement(J,{report:this.state.report}):l.a.createElement("div",null)))}}]),a}(n.Component),W=Object(g.e)(R),q=(a(62),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){console.log(e.state),e.setState(Object(i.a)({},t.target.name,t.target.value))},e.onChangeFile=function(t){e.setState({file:t.target.files[0]})},e.submit=function(){var t=Object(d.a)(h.a.mark((function t(a){var n,l,r,c,o,s,m;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,l=n.block,r=n.building,c=n.apartment,o=n.file,(s=new FormData).append("block",l),s.append("building",r),s.append("apartment",c),s.append("file",o),t.next=9,b.a.post(f+"/uploadpdf",s);case 9:(m=t.sent).data.succeed?alert("\u05e7\u05d5\u05d1\u05e5 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"):alert(m.data.res);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={block:"",building:"",apartment:"",file:null},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement("div",{class:"header"},l.a.createElement("h1",null,"PDF \u05d4\u05d5\u05e1\u05e4\u05ea \u05e7\u05d5\u05d1\u05e5")),l.a.createElement(P.a,{md:{span:8,offset:5}},l.a.createElement(k.a.Group,{controlId:"block"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement(k.a.Control,{name:"block",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"building"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement(k.a.Control,{name:"building",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"apartment"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4")),l.a.createElement(k.a.Control,{name:"apartment",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4",onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.File,{id:"formcheck-api-custom",custom:!0},l.a.createElement(k.a.File.Input,{name:"sampleFile",isValid:!0,onChange:this.onChangeFile}),l.a.createElement(k.a.File.Label,{"data-browse":"file"},this.state.file?this.state.file.name:"\u05d4\u05e2\u05dc\u05d4 \u05e7\u05d5\u05d1\u05e5........"))),l.a.createElement("br",null),l.a.createElement(V.a,{variant:"primary",type:"submit"},"\u05d0\u05d9\u05e9\u05d5\u05e8")))}}]),a}(n.Component)),U=Object(g.e)(q),$=(a(63),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).submit=function(){var t=Object(d.a)(h.a.mark((function t(a){var n,l,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state.file,(l=new FormData).append("file",n),t.next=6,b.a.post(f+"/addg4",l);case 6:(r=t.sent).data.succeed?alert("\u05e7\u05d5\u05d1\u05e5 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"):alert(r.data.res);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeFile=function(t){e.setState({file:t.target.files[0]})},e.state={file:null},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"custom-file-translate-scss",id:"uploadForm",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"file",name:"sampleFile",onChange:this.onChangeFile})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"submit",value:this.state.file?this.state.file.name:"\u05d4\u05e2\u05dc\u05d4 \u05e7\u05d5\u05d1\u05e5"})))}}]),a}(n.Component)),K=Object(g.e)($),Q=(a(109),a(145)),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submit=function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.a.post(f+"/addPurchase",n.state);case 3:if(a=e.sent,console.log(a),!a.data.succeed){e.next=9;break}alert("\u05e8\u05db\u05d9\u05e9\u05d4 \u05e2\u05d5\u05d3\u05db\u05e0\u05d4"),e.next=13;break;case 9:return e.next=11,b.a.post(f+"/edit/"+n.state.blockNum+"/"+n.state.buildNum+"/"+n.state.apartNum,n.state);case 11:(a=e.sent).data.succeed?alert("\u05e8\u05db\u05d9\u05e9\u05d4 \u05e2\u05d5\u05d3\u05db\u05e0\u05d4"):alert(a.data.res);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.state=e.report,console.log(n.state),n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",encType:"multipart/form-data",onSubmit:this.submit},l.a.createElement(Q.a,{fluid:"md"},l.a.createElement("h1",null,"\u05e2\u05e8\u05d9\u05db\u05ea \u05e4\u05e8\u05d8\u05d9 \u05e8\u05db\u05d9\u05e9\u05d4"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"\u05e4\u05e8\u05d8\u05d9 \u05e8\u05d5\u05db\u05e9/\u05d9\u05dd"),l.a.createElement("br",null),l.a.createElement(A.a,null,l.a.createElement(P.a,{md:6},l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05ea\u05d6 \u05e8\u05d5\u05db\u05e9 1"),l.a.createElement(k.a.Control,{type:"text",name:"buyerId1",placeholder:this.state.buyerId1||"\u05d4\u05db\u05e0\u05e1 \u05ea\u05d6",onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05e9\u05dd \u05e8\u05d5\u05db\u05e9 1"),l.a.createElement(k.a.Control,{type:"text",name:"buyerName1",placeholder:this.state.buyerName1||"\u05d4\u05db\u05e0\u05e1 \u05e9\u05dd",onChange:this.handleChange}))),l.a.createElement(P.a,{md:6},l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05ea\u05d6 \u05e8\u05d5\u05db\u05e9 2"),l.a.createElement(k.a.Control,{type:"text",name:"buyerId2",placeholder:this.state.buyerId2||"\u05d4\u05db\u05e0\u05e1 \u05ea\u05d6",onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05e9\u05dd \u05e8\u05d5\u05db\u05e9 2"),l.a.createElement(k.a.Control,{type:"text",name:"buyerName2",placeholder:this.state.buyerName2||"\u05d4\u05db\u05e0\u05e1 \u05e9\u05dd",onChange:this.handleChange})))),l.a.createElement("p",null,"\u05e4\u05e8\u05d8\u05d9 \u05d4\u05e8\u05e9\u05d5\u05de\u05d4"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(A.a,{md:3},l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4"),l.a.createElement(k.a.Control,{type:"text",name:"apartNum",value:this.state.apartNum,placeholder:this.state.apartNum,readOnly:"readOnly"})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df"),l.a.createElement(k.a.Control,{type:"text",name:"buildNum",value:this.state.buildNum,placeholder:this.state.buildNum,readOnly:"readOnly"})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7"),l.a.createElement(k.a.Control,{type:"text",name:"blockNum",value:this.state.blockNum,placeholder:this.state.blockNum,readOnly:"readOnly"}))),l.a.createElement("br",null),l.a.createElement(A.a,{md:3},l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d4 2"),l.a.createElement(k.a.Control,{type:"text",name:"parking2",placeholder:this.state.parking2||this.state.parking2,onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d4 1"),l.a.createElement(k.a.Control,{type:"text",name:"parking1",placeholder:this.state.parking1||this.state.parking1,onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d5\u05ea"),l.a.createElement(k.a.Control,{type:"text",name:"parkingNum",placeholder:this.state.parkingNum,onChange:this.handleChange}))),l.a.createElement(A.a,{md:3},l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05d7\u05d9\u05e8 \u05d3\u05d9\u05e8\u05d4"),l.a.createElement(k.a.Control,{type:"text",name:"price",placeholder:this.state.price,onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05e9\u05d8\u05d7 \u05de\u05d7\u05e1\u05df"),l.a.createElement(k.a.Control,{type:"text",name:"warehouseArea",placeholder:this.state.warehouseArea,onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05de\u05d7\u05e1\u05df"),l.a.createElement(k.a.Control,{type:"text",name:"warehouseNum",placeholder:this.state.warehouseNum,onChange:this.handleChange}))),l.a.createElement(P.a,null,l.a.createElement(k.a.Group,{className:"align-items-center"},l.a.createElement(k.a.Label,null,"\u05d4\u05e2\u05e8\u05d5\u05ea"),l.a.createElement(k.a.Control,{name:"notes",type:"text",as:"textarea",rows:"3",defaultValue:this.state.notes,onChange:this.handleChange}))),l.a.createElement("br",null),l.a.createElement("div",{className:"item"},l.a.createElement(A.a,null,l.a.createElement(P.a,null,l.a.createElement("input",{type:"date",id:"start",name:"purchaseDate",onChange:this.handleChange})),l.a.createElement(P.a,null,l.a.createElement("p",null,"\u05d4\u05db\u05e0\u05e1 \u05ea\u05d0\u05e8\u05d9\u05da \u05e8\u05db\u05d9\u05e9\u05d4")))),l.a.createElement("div",{className:"btn-block"},l.a.createElement(V.a,{type:"submit"},"\u05e9\u05dc\u05d7"))))}}]),a}(n.Component),Y=Object(g.e)(X),Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).submit=function(){var t=Object(d.a)(h.a.mark((function t(a){var n,l,r,c,o,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.state.report&&(e.state.report=null),n=e.state,l=n.block,r=n.building,c=n.apartment,o={block:l,building:r,apartment:c},t.next=6,b.a.post(f+"/addrepo",o);case 6:s=t.sent,console.log(s),s.data.succeed?e.setState({report:s.data.res}):alert(s.data.res);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.state={block:"",building:"",apartment:"",report:null},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.report;return l.a.createElement("div",null,l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",encType:"multipart/form-data",onSubmit:this.submit},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"\u05d4\u05d5\u05e1\u05e4\u05ea \u05e8\u05db\u05d9\u05e9\u05d4")),l.a.createElement(P.a,{md:{span:8,offset:5}},l.a.createElement(k.a.Group,{controlId:"block"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement(k.a.Control,{name:"block",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"building"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement(k.a.Control,{name:"building",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"apartment"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4")),l.a.createElement(k.a.Control,{name:"apartment",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4",onChange:this.handleChange})),l.a.createElement(V.a,{variant:"primary",type:"submit"},"\u05d0\u05d9\u05e9\u05d5\u05e8"))),e?l.a.createElement(Y,{report:this.state.report}):l.a.createElement("div",null))}}]),a}(n.Component),ee=Object(g.e)(Z),te=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).submit=function(){var t=Object(d.a)(h.a.mark((function t(a){var n,l,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state.file,(l=new FormData).append("file",n),t.next=6,b.a.post(f+"/replaceg4",l);case 6:(r=t.sent).data.succeed?alert("\u05e7\u05d5\u05d1\u05e5 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"):alert(r.data.res);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeFile=function(t){console.log("c"),e.setState({file:t.target.files[0]})},e.state={file:null},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"replaceg4",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement(P.a,null,l.a.createElement(k.a.Group,null,l.a.createElement(k.a.File,{id:"formcheck-api-custom",custom:!0},l.a.createElement(k.a.File.Input,{name:"sampleFile",isValid:!0,onChange:this.onChangeFile}),l.a.createElement(k.a.File.Label,{"data-browse":"file"},this.state.file?this.state.file.name:"\u05d4\u05e2\u05dc\u05d4 \u05e7\u05d5\u05d1\u05e5........"))),l.a.createElement(V.a,{variant:"primary",type:"submit"},"\u05d0\u05d9\u05e9\u05d5\u05e8")))}}]),a}(n.Component),ae=Object(g.e)(te),ne=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value)),console.log(e.state)},e.onChangeFile=function(t){e.setState({file:t.target.files[0]}),console.log(e.state)},e.submit=function(){var t=Object(d.a)(h.a.mark((function t(a){var n,l,r,c,o,s,m;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,l=n.block,r=n.building,c=n.apartment,o=n.file,(s=new FormData).append("block",l),s.append("building",r),s.append("apartment",c),s.append("file",o),t.next=9,b.a.post(f+"/addscanning",s);case 9:m=t.sent,console.log(m.data),m.data.succeed?alert("\u05e7\u05d5\u05d1\u05e5 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"):alert(m.data.res);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={block:"",building:"",apartment:"",file:null},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement("div",{class:"header"},l.a.createElement("h1",null,"\u05d4\u05d5\u05e1\u05e4\u05ea \u05e7\u05d5\u05d1\u05e5 \u05e1\u05e8\u05d9\u05e7\u05d4")),l.a.createElement(P.a,{md:{span:8,offset:5}},l.a.createElement(k.a.Group,{controlId:"block"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement(k.a.Control,{name:"block",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"building"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement(k.a.Control,{name:"building",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df",onChange:this.handleChange})),l.a.createElement(k.a.Group,{controlId:"apartment"},l.a.createElement(A.a,null,l.a.createElement(k.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4")),l.a.createElement(k.a.Control,{name:"apartment",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4",onChange:this.handleChange})),l.a.createElement(k.a.Group,null,l.a.createElement(k.a.File,{id:"formcheck-api-custom",custom:!0},l.a.createElement(k.a.File.Input,{name:"sampleFile",isValid:!0,onChange:this.onChangeFile}),l.a.createElement(k.a.File.Label,{"data-browse":"file"},this.state.file?this.state.file.name:"\u05d4\u05e2\u05dc\u05d4 \u05e7\u05d5\u05d1\u05e5........"))),l.a.createElement("br",null),l.a.createElement(V.a,{variant:"primary",type:"submit"},"\u05d0\u05d9\u05e9\u05d5\u05e8")))}}]),a}(n.Component),le=Object(g.e)(ne),re=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value)),console.log(e.state)},e.state={email:"",password:"",new_password:""},e.submit=e.submit.bind(Object(z.a)(e)),e}return Object(s.a)(a,[{key:"submit",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a,n,l,r,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state,n=a.email,l=a.password,r=a.new_password,c={email:n,password:l,new_password:r},e.next=5,b.a.post(f+"/changePassword",c);case 5:(o=e.sent).data.succeed?alert("\u05e1\u05d9\u05e1\u05de\u05d0 \u05e9\u05d5\u05e0\u05ea\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"):alert(o.data.res);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(k.a,{className:"custom-file-translate-scss",id:"uploadForm",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement("br",null),l.a.createElement(k.a.Group,{as:A.a,controlId:"formHorizontalEmail"},l.a.createElement(P.a,{sm:{span:4,offset:4}},l.a.createElement(k.a.Label,null,"\u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05d9\u05d9\u05dc"),l.a.createElement(k.a.Control,{type:"email",name:"email",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05d9\u05d9\u05dc",onChange:this.handleChange}),l.a.createElement(k.a.Label,null,"\u05e1\u05d9\u05e1\u05de\u05d0"),l.a.createElement(k.a.Control,{type:"password",name:"password",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e1\u05d9\u05e1\u05de\u05d0 \u05de\u05e7\u05d5\u05e8\u05d9\u05ea",onChange:this.handleChange}),l.a.createElement(k.a.Label,null,"\u05e1\u05d9\u05e1\u05de\u05d0 \u05d7\u05d3\u05e9\u05d4"),l.a.createElement(k.a.Control,{type:"password",name:"new_password",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05e1\u05d9\u05e1\u05de\u05d0 \u05d7\u05d3\u05e9\u05d4",onChange:this.handleChange})),l.a.createElement(A.a,null)),l.a.createElement(k.a.Group,{as:A.a},l.a.createElement(P.a,{sm:{span:1,offset:5}},l.a.createElement(V.a,{type:"submit"},"submit"))))}}]),a}(n.Component),ce=Object(g.e)(re),oe=a(146),se=a(147),me=a(149),ue=(a(110),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(oe.a,{className:"color-nav",expand:"lg"},l.a.createElement(oe.a.Brand,{as:C.b,to:"/reports"},"\u05de\u05e7\u05d5\u05d1-\u05e0\u05d5\u05e3-\u05d4\u05d5\u05d1\u05e8\u05de\u05df"),l.a.createElement(oe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(oe.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(me.a,{className:"mr-auto"},l.a.createElement(se.a,{title:"\u05e4\u05e2\u05d5\u05dc\u05d5\u05ea",id:"basic-nav-dropdown"},l.a.createElement(se.a.Item,{as:C.b,to:"/uploadscanning"},"\u05d4\u05d5\u05e1\u05e4\u05ea PDF \u05d8\u05d5\u05e4\u05e1 \u05e1\u05e8\u05d9\u05e7\u05d4"),l.a.createElement(se.a.Item,{as:C.b,to:"/searchrepo"},"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05e8\u05e9\u05d5\u05de\u05d4"),l.a.createElement(se.a.Item,{as:C.b,to:"/addrepo"},"\u05d4\u05d5\u05e1\u05e4\u05ea \u05e8\u05db\u05d9\u05e9\u05d4"),l.a.createElement(se.a.Item,{as:C.b,to:"/replaceg4"},"\u05d4\u05d7\u05dc\u05e4\u05ea \u05d2'4"),l.a.createElement(se.a.Item,{as:C.b,to:"/addg4"},"\u05d4\u05d5\u05e1\u05e4\u05ea \u05d2'4"),l.a.createElement(se.a.Divider,null),l.a.createElement(se.a.Item,{as:C.b,to:"/changepass"},"\u05d4\u05d7\u05dc\u05e3 \u05e1\u05d9\u05e1\u05de\u05d0"))),l.a.createElement(k.a,{inline:!0},l.a.createElement(C.b,{to:"/signnew"},l.a.createElement(V.a,{variant:"outline-secondary",color:"white"},"\u05e8\u05d9\u05e9\u05d5\u05dd \u05de\u05e9\u05ea\u05de\u05e9 \u05d7\u05d3\u05e9"))))))}}]),a}(n.Component)),ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(C.a,null,l.a.createElement(ue,null),l.a.createElement(g.a,{exact:!0,path:"/",component:_}),l.a.createElement(g.a,{exact:!0,path:"/reports",component:_}),l.a.createElement(g.a,{exact:!0,path:"/signnew",component:H}),l.a.createElement(g.a,{exact:!0,path:"/searchrepo",component:W}),l.a.createElement(g.a,{exact:!0,path:"/uploadpdf",component:U}),l.a.createElement(g.a,{exact:!0,path:"/uploadscanning",component:le}),l.a.createElement(g.a,{exact:!0,path:"/addrepo",component:ee}),l.a.createElement(g.a,{exact:!0,path:"/addg4",component:K}),l.a.createElement(g.a,{exact:!0,path:"/showsearch",component:J}),l.a.createElement(g.a,{exact:!0,path:"/editrepo",component:Y}),l.a.createElement(g.a,{exact:!0,path:"/replaceg4",component:ae}),l.a.createElement(g.a,{exact:!0,path:"/changepass",component:ce}))}}]),a}(n.Component),pe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(C.a,null,l.a.createElement(ue,null),l.a.createElement(g.a,{exact:!0,path:"/",component:_}),l.a.createElement(g.a,{exact:!0,path:"/reports",component:_}),l.a.createElement(g.a,{exact:!0,path:"/searchrepo",component:W}),l.a.createElement(g.a,{exact:!0,path:"/uploadpdf",component:U}),l.a.createElement(g.a,{exact:!0,path:"/uploadscanning",component:le}),l.a.createElement(g.a,{exact:!0,path:"/addrepo",component:ee}),l.a.createElement(g.a,{exact:!0,path:"/showsearch",component:J}))}}]),a}(n.Component);b.a.create({baseURL:f});var he=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setLogged=function(e){n.setState({isLoggedIn:e})},n.setType=function(e){n.setState({isLawyer:e})},n.handleLoginSubmit=function(e){console.log(e),n.setState(e)},n.state={isLoggedIn:!1,isLawyer:!0},console.log(n.state),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.isLawyer;return l.a.createElement("div",{className:"background-blue"},t?a?l.a.createElement(ie,null):l.a.createElement(pe,null):l.a.createElement(y,{handleLogin:this.handleLoginSubmit}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(112);c.a.render(l.a.createElement(C.a,null,l.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},76:function(e,t,a){e.exports=a(113)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.656d9031.chunk.js.map
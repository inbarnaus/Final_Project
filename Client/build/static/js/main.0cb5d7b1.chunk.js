(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),m=(a(70),a(6)),o=a(7),s=a(9),u=a(8),i=a(52),p=a(18),E=a.n(p),d=a(25),h=a(19),b=a.n(h),f=(a(89),a(10)),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).submit=function(){var t=Object(d.a)(E.a.mark((function t(a){var n,l,r,c,m;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,l=n.email,r=n.password,c={email:l,password:r},t.next=5,b.a.post("https://itayinbar.herokuapp.com/login",c);case 5:m=t.sent,e.props.handleLogin&&e.props.handleLogin(m.data.succeed);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.state={email:"",password:""},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"custom-file-translate-scss",id:"login",onSubmit:this.submit,encType:"multipart/form-data"},l.a.createElement("h3",null,"Login"),l.a.createElement("div",null,l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",autoComplete:"on",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"),l.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",l.a.createElement("a",{href:"/"},"password?")))}}]),a}(n.Component),v=Object(f.f)(y),N=a(12);a(95);function g(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"lander"},l.a.createElement("h1",null,"\u05d3\u05d9\u05d5\u05d5\u05d7\u05d9\u05dd"),l.a.createElement("p",null,"\u05db\u05d0\u05df \u05d9\u05d5\u05e4\u05d9\u05e2\u05d5 \u05e8\u05e9\u05d9\u05de\u05ea \u05d3\u05d9\u05d5\u05d5\u05d7\u05d9\u05dd \u05e9\u05d8\u05e8\u05dd \u05d8\u05d5\u05e4\u05dc\u05d5")))}var x=a(112),j=a(109),O=a(55),w=a(56),k=(a(96),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(x.a,{className:"custom-file-translate-scss",id:"uploadForm",action:"http://localhost:8080/register",method:"post",encType:"multipart/form-data"},l.a.createElement("br",null),l.a.createElement(x.a.Group,{as:j.a,controlId:"formHorizontalEmail"},l.a.createElement(x.a.Label,null,'\u05d3\u05d5\u05d0"\u05dc'),l.a.createElement(O.a,{sm:5},l.a.createElement(x.a.Control,{type:"email",name:"mail",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05d3\u05d5\u05d0'\u05dc"})),l.a.createElement(j.a,null)),l.a.createElement("fieldset",null,l.a.createElement(x.a.Group,{as:j.a},l.a.createElement(O.a,{sm:{span:8,offset:2}},l.a.createElement("input",{type:"radio",name:"type",value:"lawyer",defaultChecked:!0})," \u05e2\u05d5\u05e8\u05da \u05d3\u05d9\u05df",l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"type",value:"client"})," \u05dc\u05e7\u05d5\u05d7"))),l.a.createElement(x.a.Group,{as:j.a},l.a.createElement(O.a,{sm:{span:10,offset:5}},l.a.createElement(w.a,{type:"submit",onClick:function(){alert("\u05de\u05e9\u05ea\u05de\u05e9 \u05d4\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!")}},"submit"))))}}]),a}(n.Component)),C=Object(f.f)(k),L=(a(49),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(x.a,{className:"custom-file-translate-scss",id:"uploadForm",action:"http://localhost:8080/api/searchrepo",method:"post",encType:"multipart/form-data"},l.a.createElement(O.a,{md:{span:8,offset:5}},l.a.createElement(x.a.Group,{controlId:"block"},l.a.createElement(j.a,null,l.a.createElement(x.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement(x.a.Control,{name:"block",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7"})),l.a.createElement(x.a.Group,{controlId:"building"},l.a.createElement(j.a,null,l.a.createElement(x.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement(x.a.Control,{name:"building",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df"})),l.a.createElement(x.a.Group,{controlId:"apartment"},l.a.createElement(j.a,null,l.a.createElement(x.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4")),l.a.createElement(x.a.Control,{name:"apartment",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4"})),l.a.createElement(w.a,{variant:"primary",type:"submit"},"\u05d0\u05d9\u05e9\u05d5\u05e8")))}}]),a}(n.Component)),I=Object(f.f)(L),A=(a(50),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"custom-file-translate-scss",id:"uploadForm",action:"http://localhost:8080/uploadpdf",method:"post",encType:"multipart/form-data"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"w3-text-blue"},l.a.createElement("b",null,"\u05de\u05e1' \u05d1\u05dc\u05d5\u05e7")),l.a.createElement("input",{class:"w3-input w3-border",type:"text",name:"block"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"w3-text-blue"},l.a.createElement("b",null,"\u05de\u05e1' \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement("input",{class:"w3-input w3-border",type:"text",name:"building"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"w3-text-blue"},l.a.createElement("b",null,"\u05de\u05e1' \u05d3\u05d9\u05e8\u05d4")),l.a.createElement("input",{class:"w3-input w3-border",type:"text",name:"apartment"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"file",name:"sampleFile"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"submit",onClick:function(){alert("\u05d4\u05e7\u05d5\u05d1\u05e3 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!")},value:"submit!"})))}}]),a}(n.Component)),F=Object(f.f)(A),S=(a(51),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"custom-file-translate-scss",id:"uploadForm",action:"http://localhost:8080/addg4",method:"post",encType:"multipart/form-data"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"file",name:"sampleFile"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"submit",onClick:function(){alert("\u05d4\u05e7\u05d5\u05d1\u05e3 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!")},value:"submit!"})))}}]),a}(n.Component)),T=Object(f.f)(S),P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(x.a,{className:"custom-file-translate-scss",id:"uploadForm",action:"http://localhost:8080/addrepo",method:"post",encType:"multipart/form-data"},l.a.createElement(O.a,{md:{span:8,offset:5}},l.a.createElement(x.a.Group,{controlId:"block"},l.a.createElement(j.a,null,l.a.createElement(x.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement(x.a.Control,{name:"block",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7"})),l.a.createElement(x.a.Group,{controlId:"building"},l.a.createElement(j.a,null,l.a.createElement(x.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement(x.a.Control,{name:"building",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df"})),l.a.createElement(x.a.Group,{controlId:"apartment"},l.a.createElement(j.a,null,l.a.createElement(x.a.Label,null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4")),l.a.createElement(x.a.Control,{name:"apartment",type:"text",placeholder:"\u05d4\u05db\u05e0\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4"})),l.a.createElement(w.a,{variant:"primary",type:"submit"},"\u05d0\u05d9\u05e9\u05d5\u05e8")))}}]),a}(n.Component),D=Object(f.f)(P),G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("body",null,l.a.createElement("form",{className:"custom-file-translate-scss",id:"replaceg4",action:"http://localhost:8080/replaceg4",method:"Post",encType:"multipart/form-data"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"file",name:"sampleFile"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",onClick:function(){alert("\u05d4\u05e7\u05d5\u05d1\u05e3 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!"),e.props.history.push("/")},type:"button"}))))}}]),a}(n.Component),M=Object(f.f)(G),Q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"custom-file-translate-scss",id:"uploadScanning",action:"http://localhost:8080/addscanning",method:"Post",encType:"multipart/form-data"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null,"\u05de\u05e1' \u05d1\u05dc\u05d5\u05e7")),l.a.createElement("input",{className:"w3-input w3-border",type:"text",name:"block"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null,"\u05de\u05e1' \u05d1\u05e0\u05d9\u05d9\u05df")),l.a.createElement("input",{className:"w3-input w3-border",type:"text",name:"building"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null,"\u05de\u05e1' \u05d3\u05d9\u05e8\u05d4")),l.a.createElement("input",{className:"w3-input w3-border",type:"text",name:"apartment"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",type:"file",name:"sampleFile"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"w3-text-blue"},l.a.createElement("b",null)),l.a.createElement("input",{className:"input",onClick:function(){alert("\u05d4\u05e7\u05d5\u05d1\u05e3 \u05d4\u05d5\u05e2\u05dc\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!"),e.props.history.push("/")},type:"button"})))}}]),a}(n.Component),q=Object(f.f)(Q),B=(a(98),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={report:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(E.a.mark((function e(){var t=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.get("/showsearch").then((function(e){t.setState({report:e.data.res}),console.log(t.state)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("table",{className:"w3-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u05db\u05d9\u05d5\u05d5\u05e0\u05d9\u05dd"),l.a.createElement("th",null,"\u05de\u05d7\u05d9\u05e8 \u05d3\u05d9\u05e8\u05d4 \u05de\u05de\u05d5\u05d3\u05d3"),l.a.createElement("th",null,"\u05d4\u05e2\u05e8\u05d5\u05ea"),l.a.createElement("th",null,"\u05de\u05db\u05d9\u05e8\u05d4 \u05d1\u05de\u05e1\u05d2\u05e8\u05ea \u05de\u05d7\u05d9\u05e8 \u05dc\u05de\u05e9\u05ea\u05db\u05df"),l.a.createElement("th",null,"\u05de\u05d7\u05d9\u05e8 \u05d3\u05d9\u05e8\u05d4 \u05e0\u05d5\u05de\u05d9\u05e0\u05dc\u05d9"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d5\u05ea (\u05db\u05de\u05d5\u05ea)"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05de\u05d7\u05e1\u05df"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05de\u05d7\u05e1\u05df"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05de\u05e8\u05e4\u05e1\u05ea/\u05d2\u05d9\u05e0\u05d4"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05d3\u05d9\u05e8\u05d4 \u05d0\u05e7\u05d5\u05d5\u05d9\u05dc\u05e0\u05d8\u05d9"),l.a.createElement("th",null,"\u05e9\u05d8\u05d7 \u05d3\u05d9\u05e8\u05d4"),l.a.createElement("th",null,"\u05de\u05e1' \u05d7\u05d3\u05e8\u05d9\u05dd"),l.a.createElement("th",null,"\u05e7\u05d5\u05de\u05d4"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df"),l.a.createElement("th",null,"\u05de\u05e1\u05e4\u05e7 \u05d1\u05dc\u05d5\u05e7")),l.a.createElement("tr",null,l.a.createElement("td",null,this.state.report.dir),l.a.createElement("td",null,this.state.report.apartMMDprice),l.a.createElement("td",null,this.state.report.notes),l.a.createElement("td",null,this.state.report.apartTenantPrice),l.a.createElement("td",null,this.state.report.apartNumPrice),l.a.createElement("td",null,this.state.report.parkingNum),l.a.createElement("td",null,this.state.report.warehouseNum),l.a.createElement("td",null,this.state.report.warehouseArea),l.a.createElement("td",null,this.state.report.balconyArea),l.a.createElement("td",null,this.state.report.apartAreaAq),l.a.createElement("td",null,this.state.report.apartArea),l.a.createElement("td",null,this.state.report.roomNum),l.a.createElement("td",null,this.state.report.level),l.a.createElement("td",null,this.state.report.apartNum),l.a.createElement("td",null,this.state.report.buildNum),l.a.createElement("td",null,this.state.report.blockNum)))))}}]),a}(n.Component)),H=Object(f.f)(B),J=(a(99),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={report:{apartArea:70,apartAreaAq:"-",apartMMDprice:"-",apartNum:2,apartNumPrice:12e5,apartTenantPrice:9e5,balconyArea:10,blockNum:112,buildNum:1,dir:5,level:2,notes:"\u05d4\u05d9\u05d9, \u05e9\u05dc\u05d5\u05dd \u05e2\u05d5\u05dc\u05dd",parkingNum:1,parkingQuantity1:12,parkingQuantity2:"-",roomNum:2,warehouseArea:5,warehouseNum:1}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(E.a.mark((function e(){var t=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.get("/editrepo").then((function(e){console.log(t.state)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"testbox"},l.a.createElement("form",{action:"/"},l.a.createElement("h1",null,"\u05e2\u05e8\u05d9\u05db\u05ea \u05e4\u05e8\u05d8\u05d9 \u05e8\u05db\u05d9\u05e9\u05d4"),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"\u05e4\u05e8\u05d8\u05d9 \u05e8\u05d5\u05db\u05e9/\u05d9\u05dd"),l.a.createElement("div",{className:"name-item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05ea\u05d6 \u05e8\u05d5\u05db\u05e9 1"}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05e9\u05dd \u05e8\u05d5\u05db\u05e9 1"})),l.a.createElement("div",{className:"name-item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05ea\u05d6 \u05e8\u05d5\u05db\u05e9 2"}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05e9\u05dd \u05e8\u05d5\u05db\u05e9 2"}))),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"\u05e4\u05e8\u05d8\u05d9 \u05d4\u05e8\u05e9\u05d5\u05de\u05d4"),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05d3\u05d9\u05e8\u05d4: "+this.state.report.apartNum,disabled:!0}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05d1\u05e0\u05d9\u05d9\u05df: "+this.state.report.buildNum,disabled:!0}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05d1\u05dc\u05d5\u05e7: "+this.state.report.blockNum,disabled:!0}),l.a.createElement("div",{className:"item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05db\u05d9\u05d5\u05d5\u05e0\u05d9\u05dd: "+this.state.report.dir,disabled:!0}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05d7\u05d3\u05e8\u05d9\u05dd: "+this.state.report.roomNum,disabled:!0}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05e7\u05d5\u05de\u05d4: "+this.state.report.level,disabled:!0})),l.a.createElement("div",{className:"item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05e9\u05d8\u05d7 \u05de\u05e8\u05e4\u05e1\u05ea/\u05d2\u05d9\u05e0\u05d4: "+this.state.report.balconyArea,disabled:!0}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05e9\u05d8\u05d7 \u05d3\u05d9\u05e8\u05d4 \u05d0\u05e7\u05d5\u05d5\u05d9\u05dc\u05e0\u05d8\u05d9: "+this.state.report.apartAreaAq,disabled:!0}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05e9\u05d8\u05d7 \u05d3\u05d9\u05e8\u05d4: "+this.state.report.apartArea,disabled:!0})),l.a.createElement("div",{className:"item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d4 2: "+this.state.report.parkingQuantity2}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d4 1: "+this.state.report.parkingQuantity1}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05d7\u05e0\u05d9\u05d5\u05ea: "+this.state.report.parkingNum})),l.a.createElement("div",{className:"item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05e1\u05e4\u05e8 \u05de\u05d7\u05e1\u05df: "+this.state.report.warehouseNum}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05e9\u05d8\u05d7 \u05de\u05d7\u05e1\u05df: "+this.state.report.warehouseArea})),l.a.createElement("div",{className:"item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05d7\u05d9\u05e8 \u05d3\u05d9\u05e8\u05d4 \u05de\u05de\u05d5\u05d3\u05d3: "+this.state.report.apartMMDprice}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05d7\u05d9\u05e8 \u05d1\u05de\u05e1\u05d2\u05e8\u05ea \u05de\u05d7\u05d9\u05e8 \u05dc\u05de\u05e9\u05ea\u05db\u05df: "+this.state.report.apartTenantPrice}),l.a.createElement("input",{type:"text",name:"name",placeholder:"\u05de\u05d7\u05d9\u05e8 \u05d3\u05d9\u05e8\u05d4 \u05e0\u05d5\u05de\u05d9\u05e0\u05dc\u05d9: "+this.state.report.apartNumPrice}))),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"\u05d4\u05e2\u05e8\u05d5\u05ea"),l.a.createElement("textarea",{rows:"4"},this.state.report.notes)),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"\u05d4\u05db\u05e0\u05e1 \u05ea\u05d0\u05e8\u05d9\u05da \u05e8\u05db\u05d9\u05e9\u05d4"),l.a.createElement("input",{type:"date",id:"start",name:"trip-start"})),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Name"),l.a.createElement("div",{className:"name-item"},l.a.createElement("input",{type:"text",name:"name",placeholder:"First"}),l.a.createElement("input",{type:"text",name:"name",placeholder:"Last"}))),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Daytime Phone"),l.a.createElement("input",{type:"text",name:"name"})),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Your Address"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Street address"}),l.a.createElement("input",{type:"text",name:"name",placeholder:"Street address line 2"})),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Email"),l.a.createElement("input",{type:"text",name:"name"})),l.a.createElement("div",{className:"btn-block"},l.a.createElement("button",{type:"submit",href:"/"},"SEND"))))}}]),a}(n.Component)),R=Object(f.f)(J),W=a(110),z=a(111),U=a(113),Y=(a(100),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(W.a,{className:"color-nav",expand:"lg"},l.a.createElement(W.a.Brand,{href:"/"},"\u05de\u05e7\u05d5\u05d1-\u05e0\u05d5\u05e3-\u05d4\u05d5\u05d1\u05e8\u05de\u05df"),l.a.createElement(W.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(W.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(U.a,{className:"mr-auto"},l.a.createElement(z.a,{title:"\u05e4\u05e2\u05d5\u05dc\u05d5\u05ea",id:"basic-nav-dropdown"},l.a.createElement(z.a.Item,{href:"/uploadscanning"},"\u05d4\u05d5\u05e1\u05e4\u05ea PDF \u05d8\u05d5\u05e4\u05e1 \u05e1\u05e8\u05d9\u05e7\u05d4"),l.a.createElement(z.a.Item,{href:"/uploadpdf"},'\u05d4\u05d5\u05e1\u05e4\u05ea PDF \u05de\u05e9"\u05d7'),l.a.createElement(z.a.Item,{href:"/searchrepo"},"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05e8\u05e9\u05d5\u05de\u05d4"),l.a.createElement(z.a.Item,{href:"/addrepo"},"\u05d4\u05d5\u05e1\u05e4\u05ea \u05e8\u05db\u05d9\u05e9\u05d4"),l.a.createElement(z.a.Item,{href:"/replaceg4"},"\u05d4\u05d7\u05dc\u05e4\u05ea \u05d2'4"),l.a.createElement(z.a.Item,{href:"/addg4"},"\u05d4\u05d5\u05e1\u05e4\u05ea \u05d2'4"),l.a.createElement(z.a.Divider,null),l.a.createElement(z.a.Item,{href:"#action/3.4"},"Separated link"))),l.a.createElement(x.a,{inline:!0},l.a.createElement(w.a,{href:"/signnew",variant:"outline-secondary",color:"white"},"\u05e8\u05d9\u05e9\u05d5\u05dd \u05de\u05e9\u05ea\u05de\u05e9 \u05d7\u05d3\u05e9")))))}}]),a}(n.Component)),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Y,null),l.a.createElement(N.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/"},l.a.createElement(g,null)),l.a.createElement(f.a,{exact:!0,path:"/signnew"},l.a.createElement(C,null)),l.a.createElement(f.a,{exact:!0,path:"/searchrepo"},l.a.createElement(I,null)),l.a.createElement(f.a,{exact:!0,path:"/uploadpdf"},l.a.createElement(F,null)),l.a.createElement(f.a,{exact:!0,path:"/uploadscanning"},l.a.createElement(q,null)),l.a.createElement(f.a,{exact:!0,path:"/addrepo"},l.a.createElement(D,null)),l.a.createElement(f.a,{exact:!0,path:"/addg4"},l.a.createElement(T,null)),l.a.createElement(f.a,{exact:!0,path:"/showsearch"},l.a.createElement(H,null)),l.a.createElement(f.a,{exact:!0,path:"/editrepo"},l.a.createElement(R,null)),l.a.createElement(f.a,{exact:!0,path:"/replaceg4"},l.a.createElement(M,null)),l.a.createElement(f.a,null))))}}]),a}(n.Component),K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Y,null),l.a.createElement(N.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/"},l.a.createElement(g,null)),l.a.createElement(f.a,{exact:!0,path:"/searchrepo"},l.a.createElement(I,null)),l.a.createElement(f.a,{exact:!0,path:"/uploadpdf"},l.a.createElement(F,null)),l.a.createElement(f.a,{exact:!0,path:"/uploadscanning"},l.a.createElement(q,null)),l.a.createElement(f.a,{exact:!0,path:"/addrepo"},l.a.createElement(D,null)),l.a.createElement(f.a,{exact:!0,path:"/showsearch"},l.a.createElement(H,null)),l.a.createElement(f.a,null))))}}]),a}(n.Component);b.a.create({baseURL:"https://itayinbar.herokuapp.com"});var V=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).setLogged=function(t){e.setState({isLoggedIn:t})},e.setType=function(t){e.setState({isLawyer:t})},e.handleLoginSubmit=function(t){e.setState({isLoggedIn:t})},e.state={isLoggedIn:!1,isLawyer:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.isLoggedIn,t=this.state.isLawyer;return l.a.createElement("div",{className:"background-blue"},e?t?l.a.createElement($,null):l.a.createElement(K,null):l.a.createElement(v,{handleLogin:this.handleLoginSubmit}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102);c.a.render(l.a.createElement(N.a,null,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},65:function(e,t,a){e.exports=a(103)},70:function(e,t,a){},89:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.0cb5d7b1.chunk.js.map
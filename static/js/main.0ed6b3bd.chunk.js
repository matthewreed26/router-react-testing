(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),c=n.n(r),l=(n(29),n(16)),i=n.n(l),s=(n(30),n(5)),h=n(17),u=n(18),d=n(22),m=n(19),p=n(9),g=n(23),f=function(e){return o.a.createElement("div",null,"My name is ".concat(e.text.name))},E=Object(s.f)((function(e){var t=e.texts,n=e.history;return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return console.log(n)}},"Log History from Sub Component"),o.a.createElement("div",null,t.map((function(e){return o.a.createElement(f,{key:e.id,text:e})}))))})),v=function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{type:"search",placeholder:t,onChange:n})},C=n(7),k=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={pageTexts:[],searchField:""},e.handleClickGetLogApp=e.handleClickGetUndefined.bind(Object(p.a)(e)),e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({pageTexts:t})}))}},{key:"handleClickGetUndefined",value:function(){console.log(this)}},{key:"handleClickGetLog",value:function(){console.log("logging something")}},{key:"render",value:function(){var e=this,t=this.state,n=t.pageTexts,a=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement(v,{placeholder:"name search",handleChange:this.handleChange}),o.a.createElement("button",{onClick:this.handleClickGetUndefined},"Log Undefined"),o.a.createElement("button",{onClick:this.handleClickGetLog},"Log Something"),o.a.createElement("button",{onClick:this.handleClickGetLogApp},"Log App"),o.a.createElement(E,{texts:r}),o.a.createElement(C.b,{to:"/other"},"Route to /other"),o.a.createElement("button",{onClick:function(){return e.props.history.push("/other")}},"Also Routes to /other"),o.a.createElement("div",null,"Current path: ",this.props.location.pathname,"Matched path: ",this.props.match.url))}}]),t}(a.Component);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:k}),o.a.createElement(s.a,{path:"/other",component:k}),o.a.createElement(s.a,{path:"/other/:otherId",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C.a,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.0ed6b3bd.chunk.js.map
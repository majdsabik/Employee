(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},51:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),l=a.n(s),u=a(23),o=(a(50),a(12)),c=a(14),i=a(13),m=(a(51),a(5)),d=a(17),h=a(9),p=a.n(h);function f(e){return p.a.post("/api/suborders",{restaurantPrefix:e}).then((function(e){return e.data}))}function b(e,t){return p.a.put("/api/suborders/advance",{id:e,status:t}).then((function(e){return e.data}))}var E=a(78),v=a(81),g=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],user:e.props.user,restaurantPrefix:"RIC"},e.handleSubmit=function(t,a){"placed"===a.status&&(b(a._id,"inPreparation"),f(e.state.restaurantPrefix).then((function(t){e.setState({orders:t})}))),"inPreparation"===a.status&&(b(a._id,"outForDelivery"),f(e.state.restaurantPrefix).then((function(t){e.setState({orders:t})}))),"outForDelivery"===a.status&&(b(a._id,"Delivered"),f(e.state.restaurantPrefix).then((function(t){e.setState({orders:t})})))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;f(this.state.restaurantPrefix).then((function(t){e.setState({orders:t})}))}},{key:"calculateQuantiny",value:function(e){var t={};return e.items.map((function(e){return t[e.name]?t[e.name]++:t[e.name]=1})),r.a.createElement("ul",null,Object.entries(t).map((function(e){return r.a.createElement("li",null,e.join(": "))})))}},{key:"render",value:function(){var e=this,t=this.state.orders;return 0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"No orders at the moment")):r.a.createElement("div",{className:" container"},t.map((function(t){return r.a.createElement("div",{key:Object(v.a)()},r.a.createElement("br",null),r.a.createElement("h4",null,"Order ID: ",t.subOrderId),r.a.createElement("h4",null,"Order Status: ",t.status),r.a.createElement("h4",null,"Subtotal: \u20ac",t.subTotal),r.a.createElement("h4",null,"Created at: ",t.createdAt.split("T")[1].substring(0,8)),r.a.createElement("h4",null,"Order Items: ",e.calculateQuantiny(t)),r.a.createElement(E.a,{to:"/",onClick:function(a){return e.handleSubmit(a,t)}},"Advance Statue"),r.a.createElement("br",null),r.a.createElement("br",null))})))}}]),a}(r.a.Component),y=a(38),w=a(79),O=a(80),j=function(e,t){return p.a.post("/api/employee/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},S=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;j(n,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/orders"))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Login"),r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(w.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(w.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&r.a.createElement(O.a,{variant:"danger"},this.state.message),r.a.createElement(E.a,{type:"submit"},"Login")))}}]),a}(n.Component),C=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,message:"",order:""},e.setUser=function(t){e.setState({user:t})},e.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(S,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(m.a,{exact:!0,path:"/orders",render:function(t){return r.a.createElement(g,Object.assign({setUser:e.setUser},t))}}))},e}return a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.get("/api/auth/loggedin").then((function(e){var t=e.data;l.a.render(r.a.createElement(u.a,null,r.a.createElement(C,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.0dbf73ad.chunk.js.map
(function(e){function t(t){for(var r,c,a=t[0],i=t[1],s=t[2],b=0,p=[];b<a.length;b++)c=a[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(p.length)p.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},l=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0309":function(e,t,n){"use strict";n("6da0")},"0f82":function(e,t,n){"use strict";n("a679")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container-fluid"},l={class:"row justify-content-center"},c={class:"col-md-10 col-lg-7"};function a(e,t,n,a,i,s){var u=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["i"])(u),Object(r["g"])("div",o,[Object(r["g"])("div",l,[Object(r["g"])("div",c,[Object(r["i"])(b)])])])])}var i=function(e){return Object(r["u"])("data-v-e2525282"),e=e(),Object(r["s"])(),e},s={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},b=Object(r["h"])("Home"),p=i((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),j={class:"collapse navbar-collapse",id:"navbarNav"},O={class:"navbar-nav ms-auto"},d={class:"nav-item"},m=Object(r["h"])("Employees"),g={key:0,class:"nav-item"},f=Object(r["h"])("Schedule"),h={key:1,class:"nav-item"},v=i((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),y={key:2,class:"nav-item"},E=i((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"}," Signup ",-1)})),w={key:3,class:"nav-item"};function P(e,t,n,o,l,c){var a=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",s,[Object(r["g"])("div",u,[Object(r["i"])(a,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),p,Object(r["g"])("div",j,[Object(r["g"])("ul",O,[Object(r["g"])("li",d,[Object(r["i"])(a,{class:"nav-link active","aria-current":"page",to:"/Employees"},{default:Object(r["E"])((function(){return[m]})),_:1})]),c.auth?(Object(r["r"])(),Object(r["f"])("li",g,[Object(r["i"])(a,{class:"nav-link active","aria-current":"page",to:"/Schedule"},{default:Object(r["E"])((function(){return[f]})),_:1})])):Object(r["e"])("",!0),c.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",h,[Object(r["i"])(a,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[v]})),_:1})])),c.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",y,[Object(r["i"])(a,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[E]})),_:1})])),c.auth?(Object(r["r"])(),Object(r["f"])("li",w,[Object(r["g"])("button",{class:"btn btn-warning",onClick:t[0]||(t[0]=function(){return c.onLogout&&c.onLogout.apply(c,arguments)})},"Logout")])):Object(r["e"])("",!0)])])])])}var k={computed:{auth:function(){return this.$store.state.token}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},_=(n("0309"),n("6b0d")),A=n.n(_);const S=A()(k,[["render",P],["__scopeId","data-v-e2525282"]]);var x=S,$={name:"App",components:{"my-header":x},created:function(){this.$store.dispatch("getMovies")}};n("0f82");const U=A()($,[["render",a]]);var F=U,L=n("6c02"),C=Object(r["g"])("h1",null," Scheduling ",-1),M=Object(r["g"])("h3",null," Welcome to your Employee Schedules",-1),N=Object(r["g"])("br",null,null,-1),q=Object(r["g"])("img",{src:"\\img\\pexels-andrea-piacquadio-927022.jpg"},null,-1),K=[C,M,N,q];function V(e,t,n,o,l,c){return Object(r["r"])(),Object(r["f"])("div",null,K)}var R={};const T=A()(R,[["render",V]]);var I=T,D=Object(r["g"])("div",null,[Object(r["g"])("h1",null," Login ")],-1),z={class:"mb-3"},G=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),B={class:"mb-3"},H=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),J=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function W(e,t,n,o,l,c){return Object(r["r"])(),Object(r["f"])("div",null,[D,Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["G"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",z,[G,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.email=e})},null,512),[[r["C"],l.email]])]),Object(r["g"])("div",B,[H,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.password=e})},null,512),[[r["C"],l.password]])]),J],32)])}n("ac1f"),n("5319");var Y=n("bc3a"),Q=n.n(Y),X={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var e=this,t={email:this.email,password:this.password};console.log("form Data",t),Q.a.post("/Employee/login",t).then((function(t){console.log("here is the response",t),e.$store.commit("storeTokenInApp",t.data.token),console.log("token",t.data.token),e.$store.commit("storeUserInApp",t.data.user),e.$router.replace("/Employees"),console.log(t)})).catch((function(e){console.log("error in login",e)}))}}};const Z=A()(X,[["render",W]]);var ee=Z,te=Object(r["g"])("h1",null," Employees ",-1),ne=Object(r["g"])("hr",null,null,-1),re={class:"table"},oe=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"First Name"),Object(r["g"])("th",null,"Last Name "),Object(r["g"])("th",null," Phone "),Object(r["g"])("th",null," Email "),Object(r["g"])("th",null," Position"),Object(r["g"])("th")])],-1),le=Object(r["g"])("button",{class:"btn btn-primary"}," Details",-1);function ce(e,t,n,o,l,c){var a=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[te,ne,Object(r["g"])("table",re,[oe,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(c.theEmployee,(function(e){return Object(r["r"])(),Object(r["f"])("tr",{key:e.EmployeePK},[Object(r["g"])("th",null,Object(r["A"])(e.First_Name),1),Object(r["g"])("th",null,Object(r["A"])(e.Last_Name),1),Object(r["g"])("th",null,Object(r["A"])(e.phone),1),Object(r["g"])("th",null,Object(r["A"])(e.Email),1),Object(r["g"])("th",null,Object(r["A"])(e.position),1),Object(r["g"])("th",null,[Object(r["i"])(a,{to:"/Employee/".concat(e.EmployeePK)},{default:Object(r["E"])((function(){return[le]})),_:2},1032,["to"])])])})),128))])])])}var ae={computed:{theEmployee:function(){return console.log("eMPLOYEEpK",this.$store.state.Employee),this.$store.state.Employee}}};const ie=A()(ae,[["render",ce]]);var se=ie,ue=Object(r["g"])("h1",null," Not found",-1),be=Object(r["g"])("h4",null," Sorry page was not found ",-1),pe=[ue,be];function je(e,t,n,o,l,c){return Object(r["r"])(),Object(r["f"])("div",null,pe)}var Oe={};const de=A()(Oe,[["render",je]]);var me=de,ge=Object(r["g"])("h1",null," Schedule ",-1),fe=Object(r["g"])("hr",null,null,-1),he={key:0},ve={class:"table"},ye=Object(r["g"])("thead",null,[Object(r["g"])("th",null," Day "),Object(r["g"])("th",null," Start Time "),Object(r["g"])("th",null," End Time ")],-1);function Ee(e,t,n,o,l,c){return Object(r["r"])(),Object(r["f"])("div",null,[ge,fe,Object(r["g"])("h3",null,Object(r["A"])(c.firstname)+"'s Schedule ",1),l.accountError?(Object(r["r"])(),Object(r["f"])("p",he,"cannot get your account information please try again later ")):Object(r["e"])("",!0),Object(r["g"])("table",ve,[ye,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(l.reviewsbyUser,(function(e){return Object(r["r"])(),Object(r["f"])("tr",{key:e.EmployeePK},[Object(r["g"])("th",null,Object(r["A"])(e.day),1),Object(r["g"])("th",null,Object(r["A"])(e.start_time),1),Object(r["g"])("th",null,Object(r["A"])(e.end_time),1)])})),128))])])])}var we={data:function(){return{reviewsbyUser:null,accountError:!1}},computed:{firstname:function(){return console.log("state",this.$store.state),console.log("user",this.$store.state.user),console.log("Email",this.$store.state.user.Email),this.$store.state.user.Email}},created:function(){var e=this;Q.a.get("/Employee",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(t){console.log("here is the response",t),e.reviewsbyUser=t.data})).catch((function(){e.accountError=!0}))}};const Pe=A()(we,[["render",Ee]]);var ke=Pe,_e=Object(r["g"])("h1",null,"Sign Up",-1),Ae={class:"mb-3"},Se=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),xe={class:"mb-3"},$e=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),Ue={class:"mb-3"},Fe=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),Le={key:0,class:"text-danger"},Ce={class:"mb-3"},Me=Object(r["g"])("label",{for:"position-input",class:"form-label"},"Position",-1),Ne={class:"mb-3"},qe=Object(r["g"])("label",{for:"phone-input",class:"form-label"},"Phone",-1),Ke={class:"mb-3"},Ve=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),Re=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Te={id:"error-signup",class:"text-danger"};function Ie(e,t,n,o,l,c){return Object(r["r"])(),Object(r["f"])("div",null,[_e,Object(r["g"])("form",{onSubmit:t[6]||(t[6]=Object(r["G"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",Ae,[Se,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.first_name=e})},null,512),[[r["C"],l.first_name]])]),Object(r["g"])("div",xe,[$e,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.last_name=e})},null,512),[[r["C"],l.last_name]])]),Object(r["g"])("div",Ue,[Fe,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.Email=e})},null,512),[[r["C"],l.Email]]),l.dupEmail?(Object(r["r"])(),Object(r["f"])("small",Le,"Please chose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",Ce,[Me,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"position-input",placeholder:"Position",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.Position=e})},null,512),[[r["C"],l.Position]])]),Object(r["g"])("div",Ne,[qe,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"phone-input",placeholder:"Phone",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.phone=e})},null,512),[[r["C"],l.phone]])]),Object(r["g"])("div",Ke,[Ve,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return l.password=e})},null,512),[[r["C"],l.password]])]),Re,Object(r["g"])("p",Te,Object(r["A"])(l.errorMessage),1)],32)])}var De={data:function(){return{first_name:"",last_name:"",Email:"",Position:"",phone:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var e=this;console.log("form submiited");var t={first_name:this.first_name,last_name:this.last_name,Email:this.Email,Position:this.Position,phone:this.phone,password:this.password};console.log(" my form data in signup",t),Q.a.post("/Employee/get",t).then((function(t){console.log("the response",t),e.$router.replace("/Login?signupsuccess=true")})).catch((function(t){409===t.response.status?e.dupEmail=!0:e.errorMessage="Cannot sign you up, please try again later"}))}}};const ze=A()(De,[["render",Ie]]);var Ge=ze,Be={class:"card"},He={class:"card=-body"},Je=Object(r["g"])("h1",null,"Employee Details",-1),We={class:"text-primary"},Ye=Object(r["g"])("br",null,null,-1),Qe=Object(r["h"])(" First Name "),Xe=Object(r["g"])("br",null,null,-1),Ze=Object(r["h"])(" Last Name: "),et=Object(r["g"])("br",null,null,-1),tt=Object(r["h"])(" Email: "),nt=Object(r["g"])("br",null,null,-1),rt=Object(r["h"])(" Phone Number: "),ot=Object(r["g"])("br",null,null,-1),lt=Object(r["h"])(" Position: "),ct=Object(r["g"])("br",null,null,-1),at=Object(r["g"])("br",null,null,-1),it=Object(r["g"])("button",{class:"btn btn-success"}," Add Availibiliity",-1),st=Object(r["g"])("button",{class:"btn btn-outline-success"},"Login to Add Availibiliity",-1);function ut(e,t,n,o,l,c){var a=Object(r["y"])("router-link"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",Be,[Object(r["g"])("div",He,[Je,Object(r["g"])("h2",We,Object(r["A"])(c.Employee.First_Name),1),Ye,Object(r["g"])("p",null,[Qe,Xe,Object(r["g"])("strong",null,Object(r["A"])(c.Employee.First_Name),1)]),Object(r["g"])("p",null,[Ze,et,Object(r["g"])("strong",null,Object(r["A"])(c.Employee.Last_Name),1)]),Object(r["g"])("p",null,[tt,nt,Object(r["g"])("strong",null,Object(r["A"])(c.Employee.Email),1)]),Object(r["g"])("p",null,[rt,ot,Object(r["g"])("strong",null,Object(r["A"])(c.Employee.phone),1)]),Object(r["g"])("p",null,[lt,ct,Object(r["g"])("strong",null,Object(r["A"])(c.Employee.position),1)])])]),at,c.auth?(Object(r["r"])(),Object(r["d"])(a,{key:0,to:"/Employee/".concat(c.Employee.EmployeePK,"/Availibility")},{default:Object(r["E"])((function(){return[it]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(a,{key:1,to:"/Login"},{default:Object(r["E"])((function(){return[st]})),_:1})),Object(r["i"])(i)])}n("7db0"),n("d3b7");var bt={computed:{Employee:function(){var e=this,t=this.$store.state.Employee,n=t.find((function(t){return t.EmployeePK==e.$route.params.pk}));return console.log(" here is this employee",n),n},auth:function(){return this.$store.state.token}}};const pt=A()(bt,[["render",ut]]);var jt=pt,Ot={class:"row justify-content-center"},dt={class:"col-lg-10"},mt={class:"card"},gt={class:"card-body"},ft=Object(r["g"])("h4",null,"Create an availibility",-1),ht={class:"mb-3"},vt=Object(r["g"])("label",{for:"time-input",class:"form-label"},"Time",-1),yt={class:"mb-3"},Et=Object(r["g"])("label",{for:"hours-input",class:"form-label"},"Preffered Hours",-1),wt={class:"mb-3"},Pt=Object(r["g"])("label",{for:"PK-input",class:"form-label"},"EmployeePK",-1),kt=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"}," Submit Availibility",-1),_t={key:0,class:"form-text text-danger"};function At(e,t,n,o,l,c){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",Ot,[Object(r["g"])("div",dt,[Object(r["g"])("div",mt,[Object(r["g"])("div",gt,[ft,Object(r["g"])("form",{id:"review-form",onSubmit:t[4]||(t[4]=Object(r["G"])((function(){return c.submitReview&&c.submitReview.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",ht,[vt,Object(r["F"])(Object(r["g"])("input",{type:"number",class:"form-control",id:"time-input",required:"",min:"1",max:"10","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.rating=t})},null,512),[[r["C"],e.rating]])]),Object(r["g"])("div",yt,[Et,Object(r["F"])(Object(r["g"])("input",{type:"text",row:"3",class:"form-control",id:"hours-input",required:"","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.summary=t})},null,512),[[r["C"],e.summary]])]),Object(r["g"])("div",wt,[Pt,Object(r["F"])(Object(r["g"])("input",{type:"text",row:"3",class:"form-control",id:"PK-input",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.EmployeePK=e})},null,512),[[r["C"],l.EmployeePK]])]),kt,Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return c.cancelReview&&c.cancelReview.apply(c,arguments)}),type:"clear",class:"btn btn-outline-danger"}," Cancel "),l.errorMessage?(Object(r["r"])(),Object(r["f"])("p",_t,Object(r["A"])(l.errorMessage),1)):Object(r["e"])("",!0)],32)])])])])])}var St={data:function(){return{time:null,preffered_hours:"",EmployeePK:"",errorMessage:null}},methods:{submitReview:function(){var e=this,t={time:this.time,preffered_hours:this.preffered_hours,EmployeePk:this.$route.params.pk};Q.a.post("/Availibility",t,{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(){e.$router.replace("/")})).catch((function(){e.errorMessage="Unable to create a review, please try again later"}))},cancelReview:function(){this.$router.go(-1)}}};n("ba6d");const xt=A()(St,[["render",At]]);var $t=xt,Ut=Object(L["a"])({history:Object(L["b"])(),routes:[{path:"/",component:I},{path:"/Login",component:ee},{path:"/Employees",component:se},{path:"/schedule",component:ke},{path:"/Employee/:pk",component:jt,childeren:[{path:"Availibility",component:$t}]},{path:"/signup",component:Ge},{path:"/invalidRoute(.*)",component:me}]}),Ft=Ut,Lt=n("5502"),Ct=Object(Lt["a"])({state:{token:null,user:null,Employee:[]},mutations:{storeTokenInApp:function(e,t){e.token=t},storeUserInApp:function(e,t){e.user=t},storeEmployees:function(e,t){e.Employee=t}},actions:{getMovies:function(e){var t=e.commit;Q.a.get("/Employee").then((function(e){console.log("response",e),t("storeEmployees",e.data)}))}}});Q.a.defaults.baseURL="https://cis410-fa21-bowers-api.azurewebsites.net";var Mt=Object(r["c"])(F);Mt.use(Ft),Mt.use(Ct),Mt.mount("#app")},"6af3":function(e,t,n){},"6da0":function(e,t,n){},a679:function(e,t,n){},ba6d:function(e,t,n){"use strict";n("6af3")}});
//# sourceMappingURL=app.275f2359.js.map
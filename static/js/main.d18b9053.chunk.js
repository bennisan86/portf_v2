(this.webpackJsonpportf_v2=this.webpackJsonpportf_v2||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/backarrow.b94572f7.svg"},30:function(e,t,a){e.exports=a.p+"static/media/logo_white.948af40d.svg"},31:function(e,t,a){e.exports=a.p+"static/media/github_white.d3117811.svg"},32:function(e,t,a){e.exports=a.p+"static/media/twitter_white.7bc45df9.svg"},35:function(e,t,a){e.exports=a.p+"static/media/logo.db3b25fc.svg"},36:function(e,t,a){e.exports=a.p+"static/media/mail.ad688b66.svg"},37:function(e,t,a){e.exports=a.p+"static/media/twitter.4545c76d.svg"},38:function(e,t,a){e.exports=a.p+"static/media/github.c3a869f6.svg"},39:function(e,t,a){e.exports=a.p+"static/media/Bennisan_CV.ef54147d.pdf"},40:function(e,t,a){e.exports=a.p+"static/media/IMG_1051.309acf3b.png"},43:function(e,t,a){e.exports=a(56)},51:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),s=a.n(i),c=a(5),o=r.a.createContext(null),l=function(e){return function(t){return r.a.createElement(o.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},m=o,u=a(7),p=a(21),d=a.n(p),b=(a(48),a(57),{apiKey:"AIzaSyD4QKS3VhZNUE0PXHdstIL7HR8-KGrKMYI",authDomain:"bennisan-a8fe3.firebaseapp.com",databaseURL:"https://bennisan-a8fe3.firebaseio.com",projectId:"bennisan-a8fe3",storageBucket:"bennisan-a8fe3.appspot.com",messagingSenderId:"792026632972"}),f=function e(){var t=this;Object(u.a)(this,e),this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},this.project=function(e){return t.db.ref("projects/".concat(e))},this.projects=function(){return t.db.ref("projects")},this.covers=function(){return t.strg.ref("covers/")},this.varref=function(e){return t.strg.ref(e)},d.a.initializeApp(b),this.db=d.a.database(),this.strg=d.a.storage()},h=(a(51),a(41)),g=a(10),v=a(12),E=a(11),j=a(17),k=a(13),N=a(14),y=a(30),w=a.n(y),_=a(31),O=a.n(_),x=a(32),P=a.n(x),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer_container"},r.a.createElement("div",{className:"footer_logo"},r.a.createElement(c.b,{to:"/about"},r.a.createElement("img",{src:w.a,alt:"Bennisan logo small"}))),r.a.createElement("div",{className:"footer_txt"},r.a.createElement("p",null,"+32 485 51 41 55"),r.a.createElement("a",{href:"mailto:info@bennisan.be?subject=Hi there, Bennisan!"},"ben@bennisan.be")),r.a.createElement("div",{className:"sociallinks"},r.a.createElement("div",{className:"sociallink"},r.a.createElement("a",{href:"https://github.com/bennisan86",target:"blank"},r.a.createElement("img",{src:O.a,alt:"Logo"}))),r.a.createElement("div",{className:"sociallink"},r.a.createElement("a",{href:"https://twitter.com/ben_adriaenssen",target:"blank"},r.a.createElement("img",{src:P.a,alt:"Logo"}))))),r.a.createElement("div",{className:"footer_closer"},r.a.createElement("p",null," \u24b8 2019 \u2014 ",r.a.createElement("a",{href:"https://github.com/bennisan86/portf_v2",target:"blank"},"Designed & developed")," by myself")))},I=a(35),S=a.n(I),A=a(36),B=a.n(A),L=a(37),C=a.n(L),T=a(38),H=a.n(T),F=function(e){function t(){return Object(u.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.covers,a=this.props.loading;return r.a.createElement("div",{className:"main_container"},r.a.createElement("div",{className:"top_container"},r.a.createElement("div",{className:"top_logo"},r.a.createElement(c.b,{to:"/about"},r.a.createElement("img",{src:S.a,alt:"Logo"}))),r.a.createElement("div",{className:"top_txt"},r.a.createElement("p",null,"I\u2019m ",r.a.createElement(c.b,{to:"/about"},"Bennisan"),", digital designer, focused on interfacing and branding"),r.a.createElement("small",null,"(and aspiring ",r.a.createElement("a",{href:"https://www.instagram.com/__bennisan__/",target:"blank"},"graphic novelist"),").")),r.a.createElement("div",{className:"sociallinks"},r.a.createElement("div",{className:"sociallink"},r.a.createElement("a",{href:"mailto:info@bennisan.be?subject=Hi there, Bennisan!"},r.a.createElement("img",{src:B.a,alt:"Logo"}))),r.a.createElement("div",{className:"sociallink"},r.a.createElement("a",{href:"https://github.com/bennisan86",target:"blank"},r.a.createElement("img",{src:H.a,alt:"Logo"}))),r.a.createElement("div",{className:"sociallink"},r.a.createElement("a",{href:"https://twitter.com/ben_adriaenssen",target:"blank"},r.a.createElement("img",{src:C.a,alt:"Logo"}))))),a?r.a.createElement("div",{className:"project_container_loading"},r.a.createElement("p",null,"Loading projects...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"project_container"},t.map((function(t,a){return r.a.createElement("div",{className:"project_tile",key:a,onClick:function(){return e.props.toDetail(a)}},r.a.createElement("img",{src:t,alt:""}))}))),r.a.createElement(D,null)))}}]),t}(n.Component),M=a(20),R=a.n(M),K=a(39),U=a.n(K),z=a(40),W=a.n(z),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={},a}return Object(k.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){window.scrollTo(0,0)}),300)}},{key:"render",value:function(){return r.a.createElement("div",{className:"detail_container"},r.a.createElement("div",{className:"backarrow"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:R.a,alt:"Arrow to left, as back button"}))),r.a.createElement("div",{className:"detailtop_container"},r.a.createElement("img",{className:"avatar_img",src:W.a,alt:"Ben Adriaenssen profile"}),r.a.createElement("div",{className:"detailtop_txt"},r.a.createElement("p",{className:"detailtop_title"},"About me"),r.a.createElement("p",{className:"detailtop_body"},"As a designer, I've always been most fascinated by the interactive side of communication. From an early stage I thought myself just enough coding to bring my designs to life, a habbit I've kept until this day. Throughout my career I've evolved from a general graphic designer to specifing more on the digital realm, shaping anything from brands, websites, apps, games, and everything in between, into clear communications carriers.",r.a.createElement("br",null),r.a.createElement("br",null),"Having a strong moral compass, I feel best when I can utizile my skills for a just cause, something I've been actively persuing throughout my career."),r.a.createElement("div",{className:"linkbutton"},r.a.createElement("a",{href:"mailto:info@bennisan.be?subject=Hi there, Bennisan!",target:"blank"},"Let's connect!")))),r.a.createElement("div",{className:"detailtop_container dotted"},r.a.createElement("div",{className:"about_me"},r.a.createElement("p",null,"Ben Adriaenssen"),r.a.createElement("small",null,"Nieuwe Donk 28",r.a.createElement("br",null),"2100 Deurne"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("small",null,"BTW 0723.439.460",r.a.createElement("br",null),"BE96 0636 6284 6505"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:U.a,target:"blank"},"Check my resum\xe9"))),r.a.createElement(D,null))}}]),t}(n.Component),J=l(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={selProject:a.props.project,labels:"",links:[],imgs:[],loadingimgs:!0,showfooter:!1},a}return Object(k.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){window.scrollTo(0,0)}),300);var e=this.state.selProject.labels,t=Object.keys(e).map((function(t){return e[t]})).toString().replace(",",", "),a=this.state.selProject.links,n=Object.keys(a).map((function(e,t){return{val:a[e],index:t}}));this.setState({selProject:this.state.selProject,labels:t,links:n}),this.renderImg(this.state.selProject)}},{key:"renderImg",value:function(e){var t=this;new Promise((function(a,n){t.props.firebase.varref(e.name+"/").listAll().then((function(a){var n=a.items.map((function(a){return new Promise((function(n,r){t.props.firebase.varref(e.name+"/").child(a.name).getDownloadURL().then((function(e){n(e)}))}))}));Promise.all(n).then((function(e){t.setState({imgs:e}),setTimeout(function(){this.setState({loadingimgs:!1})}.bind(t),300),setTimeout(function(){console.log("showFooter"),this.setState({showfooter:!0})}.bind(t),600)}))}))}))}},{key:"render",value:function(){var e=this.state.selProject,t=this.state.labels,a=this.state.links,n=this.state.imgs,i=this.state.loadingimgs,s=this.state.showfooter;return r.a.createElement("div",{className:"detail_container"},r.a.createElement("div",{className:"backarrow"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:R.a,alt:"Arrow to left, as back button"}))),r.a.createElement("div",{className:"detailtop_container"},r.a.createElement("div",{className:"detailtop_txt"},r.a.createElement("p",{className:"detailtop_title"},e.title),r.a.createElement("p",{className:"detailtop_body"},e.descr),r.a.createElement("small",{className:"detailtop_time"},e.time),r.a.createElement("small",{className:"detailtop_labels"},t),a.map((function(e){return r.a.createElement("a",{className:"detailtop_link",href:e.val,key:e.index,target:"blank"},e.val)})))),i?r.a.createElement("div",{className:"project_container_loading"},r.a.createElement("p",null,"Loading images...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detailimgs"},n.map((function(e,t){return r.a.createElement("img",{src:e,key:t,alt:""})}))),s?r.a.createElement(D,null):null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.project!==t.selProject?{selProject:e.project}:null}}]),t}(n.Component)),V=a(60),Q=a(59),X=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={projects:[],projectcovers:[],loading:!0,currentProject:0,selProject:{descr:"",labels:{label1:""},links:{link1:""},name:"",time:"",title:"Select a project in home"}},a.toDetail=a.toDetail.bind(Object(j.a)(a)),a.toNext=a.toNext.bind(Object(j.a)(a)),a}return Object(k.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.projects().on("value",(function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(h.a)({},a[e],{uid:e})}));e.setState({projects:n});var r=Object.keys(a).map((function(t){return new Promise((function(n,r){e.props.firebase.covers().child(a[t].name+".png").getDownloadURL().then((function(e){n(e)}))}))}));Promise.all(r).then((function(t){e.setState({projectcovers:t}),setTimeout(function(){this.setState({loading:!1})}.bind(e),300)}))}))}},{key:"getAnimDirection",value:function(e){switch(e.pathname){case"/":return"home-away";case"/detail":case"/about":return"to-home"}}},{key:"toDetail",value:function(e){var t=this.state.projects[e],a=e.prevPos;console.log("HIIIEEROOOO",a),this.setState({currentProject:e,selProject:t}),this.props.history.push("/detail")}},{key:"toNext",value:function(){var e=this.state.currentProject+1,t=this.state.projects[e];this.setState({currentProject:e,selProject:t}),this.props.history.push("/detail"),console.log(t)}},{key:"render",value:function(){var e=this,t=this.props.location,a=t.pathname.split("/")[1]||"/";this.getAnimDirection(t);var n=this.getAnimDirection(t),i=this.state.selProject;return r.a.createElement(V.a,{component:"div",className:"App"},r.a.createElement(Q.a,{key:a,timeout:{enter:360,exit:240},classNames:"pageSlider",mountOnEnter:!1,unmountOnExit:!0},r.a.createElement("div",{className:n},r.a.createElement(N.c,{location:t},r.a.createElement(N.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(F,Object.assign({},t,{covers:e.state.projectcovers,loading:e.state.loading,toDetail:e.toDetail}))}}),r.a.createElement(N.a,{exact:!0,path:"/about",component:G}),r.a.createElement(N.a,{exact:!0,path:"/detail",render:function(t){return r.a.createElement(J,Object.assign({},t,{project:i,toNext:e.toNext}))}})))))}}]),t}(n.Component),Y=l(Object(N.f)(X));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m.Provider,{value:new f},r.a.createElement(c.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d18b9053.chunk.js.map
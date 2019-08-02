(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r);a(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(64),c=a(13),l=a(14),m=a(18),d=a(15),u=a(17),h=a(21),p=a(19),f=a(159),g=a(160),w=a(161),v=function(){return i.a.createElement(g.a,{expand:"md",variant:"light",bg:"light",sticky:"top"},i.a.createElement(g.a.Brand,{as:h.b,exact:!0,to:"/"},i.a.createElement("span",{className:"full-brand"},"ACM SIGGRAPH University of Illinois"),i.a.createElement("span",{className:"abbrev-brand"},"SIGGRAPH UIUC")),i.a.createElement(g.a.Toggle,{"aria-controls":"navbar-nav"}),i.a.createElement(g.a.Collapse,{id:"navbar-nav"},i.a.createElement(w.a,{className:"ml-auto"},i.a.createElement(w.a.Link,{as:h.b,exact:!0,to:"/"},"Home"),i.a.createElement(w.a.Link,{as:h.b,to:"/projects"},"Projects"),i.a.createElement(w.a.Link,{as:h.b,to:"/gallery"},"Gallery"),i.a.createElement(w.a.Link,{as:h.b,to:"/about"},"About"))))},E=a(152),b=a(153),y=a(154),k=a(155),j=[{icon:i.a.createElement(E.a,null),address:"mailto:siggraphuiuc@gmail.com"},{icon:i.a.createElement(b.a,null),address:"https://www.facebook.com/uiucacmsiggraph/"},{icon:i.a.createElement(y.a,null),address:"https://siggraphuiuc.slack.com"},{icon:i.a.createElement(k.a,null),address:"https://www.instagram.com/siggraph.uiuc/"}],x=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",{className:"copyright"},"Copyright ","\xa9 2018-"+(new Date).getFullYear()," ACM SIGGRAPH UIUC"),i.a.createElement("span",{className:"footer-links"},j.map(function(e){return i.a.createElement("a",{key:e.address,className:"mr-3",href:e.address,target:"_blank",rel:"noopener noreferrer"},e.icon)})))},S=a(1),A=a(28),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).start=function(){a.frameId||(a.frameId=requestAnimationFrame(a.animate))},a.stop=function(){cancelAnimationFrame(a.frameId)},a.animate=function(){a.cube.rotation.x+=.01,a.cube.rotation.y+=.01,a.renderScene(),a.frameId=window.requestAnimationFrame(a.animate)},a.renderScene=function(){a.renderer.render(a.scene,a.camera)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.width,a=e.height;this.scene=new S.O,this.camera=new S.H(45,t/a,1,2e3),this.camera.position.z=15;var n=new S.J(16711680,1,100);this.camera.add(n),this.scene.add(this.camera),this.renderer=new S.bb({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t,a),this.mount.appendChild(this.renderer.domElement);var i=this;(new A.a).load("models/index.fbx",function(e){e.traverse(function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i.scene.add(e),i.cube=e,i.start()})}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this,t=this.props,a=t.width,n=t.height;return this.camera&&(this.camera.aspect=a/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(a,n)),i.a.createElement("div",{className:"canvas",style:{width:a,height:n},ref:function(t){e.mount=t}})}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.size,t=e.width,a=e.height;return i.a.createElement("div",{className:"App"},i.a.createElement(I,{width:t,height:a}),i.a.createElement("h1",{className:"center w-100"},"SIGGRAPH @ UIUC"))}}]),t}(n.Component),C=a(25),N=a.n(C),z={current:[{name:"Go Squirrel",description:"A tiny little squirrel is crossing the street, and there comes a car..."},{name:"Sunny",description:"A short animation about an alarm clock owned by a college student."},{name:"Pro Bending VR",description:"A Pro Bending game developed in VR."}],past:[{name:"Curvature",description:"A short animation about a triangle who finally finds his sense of belonging in a group of circles."},{name:"In Darkness",description:"A game where you are put in darkness and learn your surroundings through walking around, knocking things over, and listening for noises."},{name:"Mesozoic Park",description:"An interactive dinosaur park where players can explore an island populated by five kinds of dinosaurs and watch them eat, move, and roar."}]},M={about:"We are the student chapter of ACM SIGGRAPH at the University of Illinois at Urbana-Champaign. ACM SIGGRAPH is a nonprofit international membership organization made up of thousands of people who share a passion for computer graphics and interactive techniques. ACM SIGGRAPH members are involved in a wide variety of fields, including computer graphics research, software development, digital art, scientific visualization, interactive technology, game design, visual effects, computer science, education, engineering, graphic design, film and television production, scientific research and more.",exec:[{name:"Samuel McFadden",position:"Chair",email:"samuelm2@illinois.edu"},{name:"Jasmine Shih",position:"Vice Chair",email:"yshih8@illinois.edu"},{name:"Michelle Giang",position:"Treasurer",email:"giang2@illinois.edu"}]},P=function(e){var t=e.item;return i.a.createElement("div",{className:"card m-3"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{className:"card-title"},t.name),i.a.createElement("p",{className:"card-text"},t.description)))},G=function(e){var t=e.size.width;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Current"),i.a.createElement(N.a,{columnWidth:t<=768?"100%":"33.33%"},z.current.map(function(e){return i.a.createElement(P,{item:e,key:e.name})})),i.a.createElement("h2",null,"Past"),i.a.createElement(N.a,{columnWidth:t<=768?"100%":"33.33%"},z.past.map(function(e){return i.a.createElement(P,{item:e,key:e.name})})))},F=function(e){var t=e.item;return i.a.createElement("div",{className:"card m-3"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},t.name),i.a.createElement("h5",{className:"card-text"},t.position),i.a.createElement("a",{href:"mailto:"+t.email,target:"_blank",rel:"noopener noreferrer"},t.email)))},R=function(e){var t=e.size.width;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"About Us"),M.about,i.a.createElement("p",{className:"h5 mt-3"},"Meet us on Mondays 7pm @ Siebel 3401!"),i.a.createElement("h3",{className:"mt-1"},"Exec"),i.a.createElement(N.a,{columnWidth:t<=768?"100%":"33.33%"},M.exec.map(function(e){return i.a.createElement(F,{item:e,key:e.name})})))},U=a(26),H=a(62),W=a(156),D=a(157),q=a(158),L=["cookie","gorillaobjrefined","person2","unicorn"],B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={slideIndex:0,loading:null},a.start=function(){a.frameId||(a.frameId=requestAnimationFrame(a.animate))},a.stop=function(){cancelAnimationFrame(a.frameId)},a.animate=function(){a.renderScene(),a.frameId=window.requestAnimationFrame(a.animate),a.controls.update()},a.renderScene=function(){a.renderer.render(a.scene,a.camera)},a.loadModel=function(e){var t=Object(U.a)(a);(new A.a).load(e,function(e){e.traverse(function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),e.scale.x=10,e.scale.y=10,e.scale.z=10,t.scene.add(e),t.object=e,t.start()},function(e){t.setState({loading:e.loaded!==e.total?e.loaded/e.total:null})},function(e){console.log(e)})},a.nextSlide=function(e){a.scene.remove(a.object);var t=(a.state.slideIndex+e+L.length)%L.length;a.setState({slideIndex:t}),a.loadModel("models/gallery/"+L[t]+".fbx")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.size,t=e.width,a=e.height;this.scene=new S.O,this.scene.background=new S.g(10526880),this.scene.fog=new S.p(10526880,200,1e3),this.camera=new S.H(45,t/a,1,2e3),this.camera.position.set(100,180,300);var n=new S.s(16777215,4473924);n.position.set(0,200,0),this.scene.add(n),(n=new S.j(16777215)).position.set(0,200,100),n.castShadow=!0,n.shadow.camera.top=180,n.shadow.camera.bottom=-100,n.shadow.camera.left=-120,n.shadow.camera.right=120,this.scene.add(n);var i=new S.B(new S.I(2e3,2e3),new S.D({color:10066329,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i);var r=new S.q(2e3,20,0,0);r.material.opacity=.2,r.material.transparent=!0,this.scene.add(r),this.renderer=new S.bb({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t,a),this.mount.appendChild(this.renderer.domElement),this.loadModel("models/gallery/"+L[this.state.slideIndex]+".fbx"),this.controls=new H.a(this.camera,this.renderer.domElement),this.controls.target.set(0,50,0)}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this,t=this.props.size,a=t.width,n=t.height,r=this.state.loading;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"canvas",style:{width:a,height:n},ref:function(t){e.mount=t}}),r&&i.a.createElement("p",null,"Loading ",(100*r).toFixed(2),"%"),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center slide-controls"},i.a.createElement(W.a,{variant:"outline-dark",onClick:function(){return e.nextSlide(-1)}},i.a.createElement(D.a,null)),i.a.createElement(W.a,{variant:"outline-dark",onClick:function(){return e.nextSlide(1)}},i.a.createElement(q.a,null))))}}]),t}(n.Component);B.defaultProps={width:900,height:600};var J=B,T=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).updateDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e.componentDidMount=function(){e.updateDimensions(),window.addEventListener("resize",e.updateDimensions)},e.componentWillUnmount=function(){window.removeEventListener("resize",e.updateDimensions)},e.state={width:0,height:0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,{basename:"/siggraph"},i.a.createElement(p.c,null,i.a.createElement(V,{exact:!0,path:"/",component:O,size:this.state}),i.a.createElement(V,{path:"/projects",component:G,size:this.state}),i.a.createElement(V,{path:"/about",component:R,size:this.state}),i.a.createElement(V,{path:"/gallery",component:J,size:this.state}),i.a.createElement(V,{component:_})))}}]),t}(n.Component),V=function(e){var t=e.component,a=e.size,n=Object(s.a)(e,["component","size"]);return i.a.createElement(p.a,Object.assign({},n,{render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-container"},i.a.createElement(v,null),i.a.createElement(f.a,null,i.a.createElement(t,Object.assign({},e,{size:a}))),i.a.createElement(x,null)))}}))},_=function(){return i.a.createElement("h1",{className:"d-flex align-items-center justify-content-center"},"The page you're looking for does not exist :(")},Y=T;o.a.render(i.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(150)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.72efab82.chunk.js.map
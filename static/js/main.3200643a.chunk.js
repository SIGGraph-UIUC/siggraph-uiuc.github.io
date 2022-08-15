(this["webpackJsonpsiggraph-website"]=this["webpackJsonpsiggraph-website"]||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r);a(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(40),c=a(11),l=a(12),m=a(14),d=a(13),u=a(21),h=a(19),p=a(175),f=a(176),g=a(177),v=function(){return i.a.createElement(f.a,{expand:"md",variant:"light",bg:"light",sticky:"top"},i.a.createElement(f.a.Brand,{as:u.b,exact:!0,to:"/"},i.a.createElement("span",{className:"full-brand"},i.a.createElement("img",{src:"/assets/favicon.png",width:"30",height:"30",className:"d-inline-block align-top mr-1",alt:"siggraph logo"}),"ACM SIGGRAPH University of Illinois"),i.a.createElement("img",{className:"abbrev-brand",height:50,src:"/assets/logo.png",alt:"siggraph logo"})),i.a.createElement(f.a.Toggle,{"aria-controls":"navbar-nav"}),i.a.createElement(f.a.Collapse,{id:"navbar-nav"},i.a.createElement(g.a,{className:"ml-auto"},i.a.createElement(g.a.Link,{as:u.b,exact:!0,to:"/"},"Home"),i.a.createElement(g.a.Link,{as:u.b,to:"/projects"},"Projects"),i.a.createElement(g.a.Link,{as:u.b,to:"/gallery"},"Gallery"),i.a.createElement(g.a.Link,{as:u.b,to:"/about"},"About"))))},w=a(168),E=a(169),b=a(170),y=a(171),k=[{icon:i.a.createElement(w.a,null),address:"mailto:siggraphuiuc@gmail.com"},{icon:i.a.createElement(E.a,null),address:"https://www.facebook.com/uiucacmsiggraph/"},{icon:i.a.createElement(b.a,null),address:"https://www.instagram.com/siggraph.uiuc/"},{icon:i.a.createElement(y.a,null),address:"https://discord.gg/QtKSUBgJe3"}],C=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",{className:"copyright"},"Copyright ","\xa9 2018-"+(new Date).getFullYear()," ACM SIGGRAPH UIUC"),i.a.createElement("span",{className:"footer-links"},k.map((function(e){return i.a.createElement("a",{key:e.address,className:"mr-3",href:e.address,target:"_blank",rel:"noopener noreferrer"},e.icon)}))))},x=a(1),j=a(30),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).start=function(){e.frameId||(e.frameId=requestAnimationFrame(e.animate))},e.stop=function(){cancelAnimationFrame(e.frameId)},e.animate=function(){e.cube.rotation.x+=.01,e.cube.rotation.y+=.01,e.renderScene(),e.frameId=window.requestAnimationFrame(e.animate)},e.renderScene=function(){e.renderer.render(e.scene,e.camera)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.width,a=e.height;this.scene=new x.O,this.camera=new x.H(45,t/a,1,2e3),this.camera.position.z=15;var n=new x.J(16711680,1,100);this.camera.add(n),this.scene.add(this.camera),this.renderer=new x.bb({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t,a),this.mount.appendChild(this.renderer.domElement);var i=this;(new j.a).load("models/index.fbx",(function(e){e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),i.scene.add(e),i.cube=e,i.start()}))}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this,t=this.props,a=t.width,n=t.height;return this.camera&&(this.camera.aspect=a/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(a,n)),i.a.createElement("div",{className:"canvas",style:{width:a,height:n},ref:function(t){e.mount=t}})}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.size,t=e.width,a=e.height;return i.a.createElement("div",{className:"App"},i.a.createElement(S,{width:t,height:a}),i.a.createElement("h1",{className:"center w-100"},"SIGGRAPH @ UIUC"))}}]),a}(n.Component),I=(n.Component,a(178)),z=a(172),O=a(24),M=a.n(O),N=(a(152),{current:[{name:"Island Survival",description:"An island-survival game built in Unity with pre-rendered cut-scenes"}],past:[{name:"Fluid Simulation",description:"A 2D fluid simulation demo.",media:"https://sahilshahpatel.com/fluid-sim/"},{name:"Go Squirrel",description:"A tiny little squirrel is crossing the street, and there comes a car...",media:"https://youtu.be/FCCHRdrrfnw"},{name:"3D Museum",description:"A collection of distinct model works over the past semester.",media:"https://youtu.be/MGKMD_lFVrM"},{name:"Sunny",description:"A short animation about an alarm clock owned by a college student.",media:"https://www.youtube.com/watch?v=28z4niR_8es"}]}),P={about:"We are the student chapter of ACM SIGGRAPH at the University of Illinois at Urbana-Champaign. ACM SIGGRAPH is a nonprofit international membership organization made up of thousands of people who share a passion for computer graphics and interactive techniques. ACM SIGGRAPH members are involved in a wide variety of fields, including computer graphics research, software development, digital art, scientific visualization, interactive technology, game design, visual effects, computer science, education, engineering, graphic design, film and television production, scientific research and more.",curr_exec:[{name:"Ameer Taher",position:"Co-Chair",email:"ameert2@illinois.edu",media:"/assets/Ameer Taher.png"},{name:"Ben Wei",position:"Co-Chair",email:"btwei2@illinois.edu",media:"/assets/Ben Wei.png"},{name:"Jeffrey Liu",position:"Co-Chair",email:"jliu179@illinois.edu",media:"/assets/Jeffrey Liu.png"}],past_exec:[{name:"Sahil Patel",position:"Co-Chair",email:"sahilsp2@illinois.edu",media:"/assets/archive/Sahil Patel.jpg"},{name:"Stacy Zheng",position:"Co-Chair",email:"stacymz2@illinois.edu",media:"/assets/archive/Stacy Zheng.jpg"},{name:"Michael Korenchan",position:"Co-Chair",email:"mbk6@illinois.edu",media:"/assets/archive/Michael Korenchan.jpg"}],meeting:"Join our Discord (link in footer) to get in touch with us!"},F=function(e){var t=e.item;return i.a.createElement(I.a,null,i.a.createElement(I.a.Body,null,i.a.createElement(I.a.Title,null,t.name),i.a.createElement(I.a.Text,null,t.description),t.media&&i.a.createElement(z.a,{variant:"secondary",block:!0,href:t.media},"Demo")))},W=function(e){var t=e.size.width;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Current"),i.a.createElement(M.a,{columnWidth:t<=768?"100%":"33.33%"},N.current.map((function(e){return i.a.createElement(F,{item:e,key:e.name})}))),i.a.createElement("h2",null,"Past"),i.a.createElement(M.a,{columnWidth:t<=768?"100%":"33.33%"},N.past.map((function(e){return i.a.createElement(F,{item:e,key:e.name})}))))},G=function(e){var t=e.item;return i.a.createElement(I.a,null,t.media&&i.a.createElement(I.a.Img,{variant:"top",src:""+t.media}),i.a.createElement(I.a.Body,null,i.a.createElement(I.a.Title,null,t.name),i.a.createElement(I.a.Text,null,t.position,i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:"+t.email,target:"_blank",rel:"noopener noreferrer"},t.email))))},D=function(e){return e<540?"100%":e<960?"50%":"25%"},U=function(e){var t=e.size.width;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"About Us"),P.about,i.a.createElement("p",{className:"h5 mt-3"},P.meeting),i.a.createElement("h3",{className:"mt-1"},"Current Exec"),i.a.createElement(M.a,{columnWidth:D(t),monitorImagesLoaded:!0,gutterWidth:10},P.curr_exec.map((function(e){return i.a.createElement(G,{item:e,key:e.name})}))),i.a.createElement("h3",{className:"mt-1"},"Former Exec (2021-2022)"),i.a.createElement(M.a,{columnWidth:D(t),monitorImagesLoaded:!0,gutterWidth:10},P.past_exec.map((function(e){return i.a.createElement(G,{item:e,key:e.name})}))))},R=a(27),H=a(66),L=a(173),B=a(174),q=["cookie","gorillaobjrefined","person2","unicorn"],T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={slideIndex:0,loading:null},e.start=function(){e.frameId||(e.frameId=requestAnimationFrame(e.animate))},e.stop=function(){cancelAnimationFrame(e.frameId)},e.animate=function(){e.renderScene(),e.frameId=window.requestAnimationFrame(e.animate),e.controls.update()},e.renderScene=function(){e.renderer.render(e.scene,e.camera)},e.loadModel=function(t){var a=Object(R.a)(e);(new j.a).load(t,(function(e){e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),e.scale.x=10,e.scale.y=10,e.scale.z=10,a.scene.add(e),a.object=e,a.start()}),(function(e){a.setState({loading:e.loaded!==e.total?e.loaded/e.total:null})}),(function(e){console.log(e)}))},e.nextSlide=function(t){e.scene.remove(e.object);var a=(e.state.slideIndex+t+q.length)%q.length;e.setState({slideIndex:a}),e.loadModel("models/gallery/"+q[a]+".fbx")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.size,t=e.width,a=e.height;this.scene=new x.O,this.scene.background=new x.g(10526880),this.scene.fog=new x.p(10526880,200,1e3),this.camera=new x.H(45,t/a,1,2e3),this.camera.position.set(100,180,300);var n=new x.s(16777215,4473924);n.position.set(0,200,0),this.scene.add(n),(n=new x.j(16777215)).position.set(0,200,100),n.castShadow=!0,n.shadow.camera.top=180,n.shadow.camera.bottom=-100,n.shadow.camera.left=-120,n.shadow.camera.right=120,this.scene.add(n);var i=new x.B(new x.I(2e3,2e3),new x.D({color:10066329,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i);var r=new x.q(2e3,20,0,0);r.material.opacity=.2,r.material.transparent=!0,this.scene.add(r),this.renderer=new x.bb({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t,a),this.mount.appendChild(this.renderer.domElement),this.loadModel("models/gallery/"+q[this.state.slideIndex]+".fbx"),this.controls=new H.a(this.camera,this.renderer.domElement),this.controls.target.set(0,50,0)}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this,t=this.props.size,a=t.width,n=t.height,r=this.state.loading;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"canvas",style:{width:a,height:n},ref:function(t){e.mount=t}}),r&&i.a.createElement("p",null,"Loading ",(100*r).toFixed(2),"%"),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center slide-controls"},i.a.createElement(z.a,{variant:"outline-dark",onClick:function(){return e.nextSlide(-1)}},i.a.createElement(L.a,null)),i.a.createElement(z.a,{variant:"outline-dark",onClick:function(){return e.nextSlide(1)}},i.a.createElement(B.a,null))))}}]),a}(n.Component);T.defaultProps={width:900,height:600};var _=T,J=["component","size"],K=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).updateDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e.componentDidMount=function(){e.updateDimensions(),window.addEventListener("resize",e.updateDimensions)},e.componentWillUnmount=function(){window.removeEventListener("resize",e.updateDimensions)},e.state={width:0,height:0},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,{basename:"/"}," ",i.a.createElement(h.c,null,i.a.createElement(Z,{exact:!0,path:"/",component:A,size:this.state}),i.a.createElement(Z,{path:"/projects",component:W,size:this.state}),i.a.createElement(Z,{path:"/about",component:U,size:this.state}),i.a.createElement(Z,{path:"/gallery",component:_,size:this.state}),i.a.createElement(Z,{component:Q})))}}]),a}(n.Component),Z=function(e){var t=e.component,a=e.size,n=Object(s.a)(e,J);return i.a.createElement(h.a,Object.assign({},n,{render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-container"},i.a.createElement(v,null),i.a.createElement(p.a,null,i.a.createElement(t,Object.assign({},e,{size:a}))),i.a.createElement(C,null)))}}))},Q=function(){return i.a.createElement("h1",{className:"d-flex align-items-center justify-content-center"},"The page you're looking for does not exist :(")},V=K;o.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){}},[[165,1,2]]]);
//# sourceMappingURL=main.3200643a.chunk.js.map
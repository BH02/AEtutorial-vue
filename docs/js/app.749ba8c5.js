(function(t){function e(e){for(var i,s,o=e[0],r=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(i=!1)}i&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a={app:0},c=[];function o(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-0ad09616":"7901a6a4","chunk-1ec834f4":"a06878c9","chunk-dbcebeda":"0b672c52","chunk-0a69f5b2":"30a51f83","chunk-278196e2":"9345545a","chunk-1fedc31b":"1d9415eb","chunk-2a0b971e":"872053b1","chunk-2cb43c7c":"cbfe1268","chunk-655e215c":"d58fac64","chunk-6907b138":"0a088eba","chunk-73c67a12":"ce0a8145","chunk-815cea46":"d39bbe11","chunk-c516da48":"aa994802","chunk-c792e042":"ab518e2e","chunk-d3234824":"ec3e7d84","chunk-f9a1f3b2":"89c2fe71","chunk-520c259a":"9100e65e"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-0ad09616":1,"chunk-1ec834f4":1,"chunk-0a69f5b2":1,"chunk-278196e2":1,"chunk-1fedc31b":1,"chunk-2a0b971e":1,"chunk-2cb43c7c":1,"chunk-655e215c":1,"chunk-6907b138":1,"chunk-73c67a12":1,"chunk-815cea46":1,"chunk-c516da48":1,"chunk-c792e042":1,"chunk-d3234824":1,"chunk-f9a1f3b2":1,"chunk-520c259a":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-0ad09616":"5bea9093","chunk-1ec834f4":"ddece83f","chunk-dbcebeda":"31d6cfe0","chunk-0a69f5b2":"8ba972b6","chunk-278196e2":"6d4b85e1","chunk-1fedc31b":"0fbcdc6d","chunk-2a0b971e":"01d119ef","chunk-2cb43c7c":"d2b0d8a0","chunk-655e215c":"38fa102d","chunk-6907b138":"0d5e65af","chunk-73c67a12":"c935777d","chunk-815cea46":"2252cdbb","chunk-c516da48":"08b6a545","chunk-c792e042":"edb89aeb","chunk-d3234824":"4d41d11d","chunk-f9a1f3b2":"1df0f78c","chunk-520c259a":"b5652b27"}[t]+".css",a=r.p+i,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===i||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete s[t],p.parentNode.removeChild(p),n(c)},p.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){s[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var c=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0494":function(t,e,n){},"0974":function(t,e,n){t.exports=n.p+"img/fps.f467ecc7.png"},"12d4":function(t,e,n){t.exports=n.p+"img/format.b24912ca.png"},"198f":function(t,e,n){},"2d0c":function(t,e,n){t.exports=n.p+"img/projectPanel.2d540f26.png"},3216:function(t,e,n){t.exports=n.p+"img/aeui1.33359dd6.jpg"},"321d":function(t,e,n){t.exports=n.p+"img/aenav.d4efd8c0.png"},"359c":function(t,e,n){t.exports=n.p+"img/github.70b2fac0.png"},"35d7":function(t,e,n){t.exports=n.p+"img/Bitrate.03ec56db.png"},"37d2":function(t,e,n){t.exports=n.p+"img/aeui4.2abd98a2.png"},"37fe":function(t,e,n){t.exports=n.p+"img/mask2.c19452f2.png"},"3d5c":function(t,e,n){t.exports=n.p+"img/layersPanel.1282c3a3.png"},"3f93":function(t,e,n){},"55d4":function(t,e,n){t.exports=n.p+"img/mask3.5dfa62f5.png"},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("1f37"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header",[e("div",{staticClass:"box"},[t._m(0),e("Slide",{attrs:{right:""}},[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("首页")])]),e("router-link",{attrs:{to:"/selectArticle"}},[e("span",[t._v("AE起步")])]),e("router-link",{attrs:{to:"/videoKnows"}},[e("span",[t._v("认识视频")])]),e("router-link",{attrs:{to:"/aeInterface"}},[e("span",[t._v("AE界面")])]),e("router-link",{attrs:{to:"/mainInterface"}},[e("span",[t._v("主要面板")])]),e("router-link",{attrs:{to:"/Keyframe"}},[e("span",[t._v("关键帧")])]),e("router-link",{attrs:{to:"/effect"}},[e("span",[t._v("效果")])]),e("router-link",{attrs:{to:"/Advanced"}},[e("span",[t._v("进阶")])]),e("router-link",{attrs:{to:"/Render"}},[e("span",[t._v("渲染")])]),e("router-link",{attrs:{to:"/testPage"}},[e("span",[t._v("测试页面")])])],1),e("div",{staticClass:"navBar"},[e("ul",[e("router-link",{attrs:{to:"/"}},[t._v("首页")]),e("router-link",{attrs:{to:"/selectArticle"}},[t._v("AE起步")]),e("router-link",{attrs:{to:"/videoKnows"}},[t._v("认识视频")]),e("router-link",{attrs:{to:"/aeInterface"}},[t._v("AE界面")]),e("router-link",{attrs:{to:"/mainInterface"}},[t._v("主要面板")]),e("router-link",{attrs:{to:"/Keyframe"}},[t._v("关键帧")]),e("router-link",{attrs:{to:"/effect"}},[t._v("效果")]),e("router-link",{attrs:{to:"/Advanced"}},[t._v("进阶")]),e("router-link",{attrs:{to:"/Render"}},[t._v("渲染")]),e("router-link",{attrs:{to:"/testPage"}},[t._v("测试页面")])],1)])],1)]),e("div",{staticClass:"blo"}),e("router-view"),e("login"),t._m(1),t._m(2),this.$store.state.showEdit?e("editWindow"):t._e(),this.$store.state.showAdd?e("addWindow"):t._e()],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon"},[e("img",{attrs:{src:n("be6b"),alt:"AE icon"}})])},function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"box"},[e("span",[t._v("Copyright © 2021 ")]),e("a",{attrs:{href:"https://github.com/BH02"}},[t._v("BH02")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"visiblePic"},[e("img",{attrs:{src:n("9119"),alt:""}}),e("img",{attrs:{src:n("3216"),alt:""}}),e("img",{attrs:{src:n("7012"),alt:""}}),e("img",{attrs:{src:n("e33d"),alt:""}}),e("img",{attrs:{src:n("c9e3"),alt:""}}),e("img",{attrs:{src:n("5fe6"),alt:""}}),e("img",{attrs:{src:n("0974"),alt:""}}),e("img",{attrs:{src:n("12d4"),alt:""}}),e("img",{attrs:{src:n("35d7"),alt:""}}),e("img",{attrs:{src:n("ffa3"),alt:""}}),e("img",{attrs:{src:n("9a39"),alt:""}}),e("img",{attrs:{src:n("321d"),alt:""}}),e("img",{attrs:{src:n("2d0c"),alt:""}}),e("img",{attrs:{src:n("3d5c"),alt:""}}),e("img",{attrs:{src:n("bca2"),alt:""}}),e("img",{attrs:{src:n("7af3"),alt:""}}),e("img",{attrs:{src:n("e2c5"),alt:""}}),e("img",{attrs:{src:n("ea77"),alt:""}}),e("img",{attrs:{src:n("ccbf"),alt:""}}),e("img",{attrs:{src:n("e762"),alt:""}}),e("img",{attrs:{src:n("8b24"),alt:""}}),e("img",{attrs:{src:n("55d4"),alt:""}}),e("img",{attrs:{src:n("37fe"),alt:""}}),e("img",{attrs:{src:n("a108"),alt:""}}),e("img",{attrs:{src:n("8ce8"),alt:""}}),e("img",{attrs:{src:n("9b00"),alt:""}}),e("img",{attrs:{src:n("9f8f"),alt:""}}),e("img",{attrs:{src:n("82ac"),alt:""}}),e("img",{attrs:{src:n("58f1"),alt:""}}),e("img",{attrs:{src:n("f994"),alt:""}})])}],c=n("a0b0"),o=function(){var t=this,e=t._self._c;return this.$store.state.showLogin?e("div",{staticClass:"login br"},[e("span",{staticClass:"close",on:{click:t.switchShow}},[t._v("X")]),this.$store.state.localLogin?t._e():e("div",{staticClass:"showLogin"},[e("div",{staticClass:"account br"},[e("span",[t._v("帐号：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.regAccount,expression:"regAccount"}],staticClass:"br",attrs:{type:"text",placeholder:"输入账号"},domProps:{value:t.regAccount},on:{input:function(e){e.target.composing||(t.regAccount=e.target.value)}}})]),e("div",{staticClass:"password br"},[e("span",[t._v("密码：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.regPassword,expression:"regPassword"}],staticClass:"br",attrs:{type:"password",placeholder:"输入密码"},domProps:{value:t.regPassword},on:{input:function(e){e.target.composing||(t.regPassword=e.target.value)}}})]),e("div",{staticClass:"switchBtn br",on:{click:t.switchB}},[t._v("切换")]),t.isLoginBtn?e("div",{staticClass:"loginBtn br",on:{click:t.login}},[t._v("登录")]):t._e(),t.isLoginBtn?t._e():e("div",{staticClass:"registerBtn br",on:{click:t.reg}},[t._v("注册")]),e("div",{staticClass:"welcome"},[t._v("Welcome!")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.toastShow,expression:"toastShow"}],staticClass:"toast"},[t._v(" "+t._s(t.toastText)+" ")])]),this.$store.state.localLogin?e("div",{staticClass:"showExit"},[e("div",{staticClass:"exitBtn br",on:{click:t.loginOut}},[t._v("退出")])]):t._e()]):t._e()},r=[],l={name:"",data(){return{isLoginBtn:!1,regAccount:"",regPassword:"",toastText:"",toastShow:!1,info:{id:"",account:"",password:"",nickname:"",permission:"user"}}},created(){null==localStorage.getItem("LoginAcc")?this.$store.state.localLogin=!1:this.$store.state.localLogin=!0},methods:{switchB(){this.isLoginBtn=!this.isLoginBtn},switchShow(){this.$store.state.showLogin=!this.$store.state.showLogin,null==localStorage.getItem("LoginAcc")?this.$store.state.localLogin=!1:this.$store.state.localLogin=!0},reg(){let t;this.isNull(this.regAccount)?this.toast("输入账号为空"):this.isNull(this.regPassword)?this.toast("输入密码为空"):this.$axios.get("/api/user/searchAcc/"+this.regAccount).then(e=>{if(t=0!=e.data.length,t)this.toast("账号已存在");else{this.info.account=this.regAccount,this.info.password=this.regPassword;let t=JSON.parse(JSON.stringify(this.info));this.$axios.post("/api/user/add",t).then(()=>{this.toast("成功注册")}).catch(t=>{console.log("注册错误："+t),this.toast("注册错误")})}}).catch(t=>{console.log("查找错误："+t),this.toast("帐号已存在")})},login(){this.isNull(this.regAccount)?this.toast("输入账号为空"):this.isNull(this.regPassword)?this.toast("输入密码为空"):this.$axios.get("/api/user/searchAcc/"+this.regAccount).then(t=>{t.data[0].account==this.regAccount&&t.data[0].password==this.regPassword?(this.toast("登陆成功"),"admin"==t.data[0].permission?(this.$store.state.permission=!0,localStorage.setItem("accountPer",!0)):(this.$store.state.permission=!1,localStorage.setItem("accountPer",!1)),console.log(this.$store.state.permission)):this.toast("帐号或密码不正确")}).catch(t=>{console.log("查找错误："+t),this.toast("账号不存在")}),localStorage.setItem("LoginAcc",this.regAccount),this.$store.state.showLogin=!1,this.$router.go(0)},loginOut(){localStorage.removeItem("LoginAcc"),localStorage.removeItem("accountPer"),this.$store.state.localLogin=!1,this.$store.state.showLogin=!1,this.$store.state.permission=!1,this.$router.go(0)},toast(t){let e=this;e.toastText=t,e.toastShow=!0,setTimeout((function(){e.toastShow=!1}),1500)},isNull(t){return""==t}}},u=l,d=(n("c58b"),n("e607")),p=Object(d["a"])(u,o,r,!1,null,"56a0c656",null),g=p.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"editWindow br"},[e("span",{staticClass:"close",on:{click:t.close}},[t._v("x")]),e("div",{staticClass:"title br"},[e("span",[t._v("标题：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.json.title,expression:"json.title"}],staticClass:"br",attrs:{type:"text",placeholder:"输入标题"},domProps:{value:t.json.title},on:{input:function(e){e.target.composing||t.$set(t.json,"title",e.target.value)}}})]),e("div",{staticClass:"content br"},[e("span",[t._v("内容：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.json.content,expression:"json.content"}],staticClass:"br",attrs:{placeholder:"输入内容"},domProps:{value:t.json.content},on:{input:function(e){e.target.composing||t.$set(t.json,"content",e.target.value)}}})]),e("div",{staticClass:"submitBtn br",on:{click:t.submitArt}},[t._v("提 交")])])},m=[],h={name:"editWindow",data(){return{json:{id:"",title:"",pic:"",content:"",router:""}}},created(){this.$axios.get("/api/art/search/"+this.$store.state.editId).then(t=>{this.json=t.data[0]})},methods:{close(){this.$store.state.showEdit=!1},submitArt(){this.$axios.post("/api/art/add",this.json).then(()=>{this.$store.state.showEdit=!1,location.reload()}).catch(t=>{console.log(t)})}}},b=h,v=(n("9cbd"),Object(d["a"])(b,f,m,!1,null,"18a5b99c",null)),k=v.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"editWindow br"},[e("span",{staticClass:"close",on:{click:t.close}},[t._v("x")]),e("div",{staticClass:"title br"},[e("span",[t._v("标题：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.json.title,expression:"json.title"}],staticClass:"br",attrs:{type:"text",placeholder:"输入标题"},domProps:{value:t.json.title},on:{input:function(e){e.target.composing||t.$set(t.json,"title",e.target.value)}}})]),e("div",{staticClass:"content br"},[e("span",[t._v("内容：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.json.content,expression:"json.content"}],staticClass:"br",attrs:{placeholder:"输入内容"},domProps:{value:t.json.content},on:{input:function(e){e.target.composing||t.$set(t.json,"content",e.target.value)}}})]),e("div",{staticClass:"submitBtn br",on:{click:t.submitArt}},[t._v("提 交")])])},A=[],_={name:"addWindow",data(){return{json:{id:"",title:"",pic:"",content:"",router:""}}},methods:{close(){this.$store.state.showAdd=!1},submitArt(){this.$axios.post("/api/art/add",this.json).then(()=>{this.$store.state.showAdd=!1,location.reload()}).catch(t=>{console.log(t)})}}},x=_,P=(n("c5f6"),Object(d["a"])(x,w,A,!1,null,"3236b198",null)),C=P.exports;i["default"].prototype.eventBus=new i["default"];var y={data(){return{}},components:{Slide:c["Slide"],login:g,editWindow:k,addWindow:C}},S=y,E=(n("cff9"),Object(d["a"])(S,s,a,!1,null,null,null)),j=E.exports,$=n("f038"),I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("swiper",{staticClass:"topPic"}),e("div",{staticClass:"main"},[e("div",{staticClass:"content"},[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"images"},[e("img",{staticClass:"br",attrs:{src:n("37d2")}})]),e("div",{staticClass:"words"},[t._v(" After Effects是Adobe公司出的一款影视后期处理软件（adobe相信大家很熟悉，PS AI都是他公司出的，配合AE可以得到很好的效果），适用于从事设计和视频特技的机构，包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。要想熟练的使用After Effects软件进行后期制作的话不能盲目的急于求成，必须先了解一下软件的操作界面，窗口布局等。只有对其操作界面上有了宏观的认识，才能在工作中游刃有余。 ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"words"},[t._v(" After Effects软件可以帮助高效、准确的创建大量引人注目的动态图形和令人印象深刻的视觉效果。通过紧密集成和高灵活度的二维和三维合成，以及数百个预设效果和动画。Adobe为您的电影、视频作品添加了全新的效果。 ")]),e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"images"},[e("img",{staticClass:"br",attrs:{src:n("cbfd")}})])]),e("div",{staticClass:"content"},[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"images"},[e("img",{staticClass:"br",attrs:{src:n("c083")}})]),e("div",{staticClass:"words"},[t._v(" After Effects使用数百个插件来增强图像效果和动画控制。它可以与其他Adobe软件和三维软件相结合 ")])]),e("div",{staticClass:"content"},[t._m(0),e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"images"},[e("img",{staticClass:"br",attrs:{src:n("359c")}})])])])],1)},L=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"words"},[t._v(" 本教程试着向从未接触过AE的人介绍AE，有很多不够详细的地方，可以在github上给本项目留言，我一定会加以改进。 "),e("a",{attrs:{href:"https://github.com/BH02/AEtutorial-vue"}},[t._v("项目地址→")])])}],B=function(){var t=this,e=t._self._c;return e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.picList,(function(t){return e("swiper-slide",{key:t.id},[e("img",{attrs:{src:t.url}})])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},O=[],V={name:"carrousel",data(){return{swiperOptions:{pagination:".swiper-pagination",loop:!0,autoplay:3e3},picList:[{id:"00",url:n("c083")},{id:"01",url:n("d975")},{id:"02",url:n("cbfd")},{id:"03",url:n("9959")},{id:"04",url:n("c6d0")}]}},computed:{swiper(){return this.$refs.mySwiper.$swiper}},mounted(){this.swiper.slideTo(3,1e3,!1)}},M=V,T=(n("5705"),Object(d["a"])(M,B,O,!1,null,"7dfbf6c4",null)),N=T.exports,W={name:"home",components:{swiper:N}},F=W,K=(n("857f"),Object(d["a"])(F,I,L,!1,null,"290301c5",null)),R=K.exports;i["default"].use($["a"]);const D=[{path:"/",name:"Home",component:R},{path:"/selectArticle",name:"selectArticle",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-655e215c")]).then(n.bind(null,"4878"))},{path:"/showArticle",name:"showArticle",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-520c259a")]).then(n.bind(null,"b1dd"))},{path:"/videoKnows",name:"videoKnows",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-2cb43c7c")]).then(n.bind(null,"c595"))},{path:"/aeInterface",name:"aeInterface",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-73c67a12")]).then(n.bind(null,"42d6"))},{path:"/mainInterface",name:"mainInterface",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-c516da48")]).then(n.bind(null,"b068"))},{path:"/Keyframe",name:"Keyframe",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-1fedc31b")]).then(n.bind(null,"27fb"))},{path:"/effect",name:"effect",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-f9a1f3b2")]).then(n.bind(null,"e6abb"))},{path:"/Advanced",name:"Advanced",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-c792e042")]).then(n.bind(null,"fbe6"))},{path:"/Render",name:"Render",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-d3234824")]).then(n.bind(null,"8b8e"))},{path:"/search",name:"search",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-6907b138")]).then(n.bind(null,"8716"))},{path:"/testPage",name:"testPage",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-2a0b971e")]).then(n.bind(null,"3c08"))},{path:"/Set",name:"Set",redirect:"/Set/setArt",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-278196e2"),n.e("chunk-815cea46")]).then(n.bind(null,"eed2")),children:[{path:"setArt",component:()=>Promise.all([n.e("chunk-dbcebeda"),n.e("chunk-0a69f5b2")]).then(n.bind(null,"ef01"))},{path:"setUser",component:()=>n.e("chunk-1ec834f4").then(n.bind(null,"3f25"))},{path:"setPic",component:()=>n.e("chunk-0ad09616").then(n.bind(null,"f057"))}]}],G=new $["a"]({mode:"history",base:"/",routes:D});var H=G,Q=(n("8406"),n("eece")),J=n.n(Q),X=n("7736");i["default"].use(X["a"]);var U=new X["a"].Store({state:{backBtnVisible:!1,showMsg:!1,showLogin:!1,localLogin:!1,isAdmin:!1,permission:!1,showEdit:!1,showAdd:!1,accID:"",editId:null,searchId:[],picList:[{id:0,src:["./img/aeui2.3ffb4059.jpg"],content:"AE制作的UI界面"},{id:1,src:["./img/Db1.a1fd25e5.png"],content:"AE图标"},{id:2,src:["./img/trigger.48572e21.gif"],content:"关键帧动画展示——动画标题划过"},{id:3,src:["./img/ringRotation.dea76612.gif"],content:"关键帧动画展示——圆环动画"},{id:4,src:["./img/fs.c0d83a82.gif"],content:"父子层级演示动画"},{id:5,src:["./img/output.3a7ce429.png","./img/output2.519f6f66.png"],content:"渲染设置"},{id:6,src:["./img/keylight1.eccac615.png"],content:"Keylight界面"},{id:7,src:["./img/aenav.d4efd8c0.png"],content:"工具栏展示"},{id:8,src:["./img/layerBasic.ff6195b5.png"],content:"图层基本属性"},{id:9,src:["./img/mask1.f05eb60f.png","./img/mask2.c19452f2.png","./img/mask3.5dfa62f5.png"],content:"蒙板效果"}],article:[{id:0,title:"帧",pic:["./img/frame.bf28b5db.png"],content:"帧就是影像动画中最小单位的单幅影像画面，相当于电影胶片上的每一格镜头。一帧就是一幅静止的画面，连续的帧就形成动画，如电视图像等。",router:""},{id:1,title:"关键帧",pic:["./img/keyframe.1e5c3bec.png"],content:"关键帧相当于二维动画中的原画。指角色或者物体运动或变化中的关键动作所处的那一帧。关键帧与关键帧之间的动画可以由软件来创建，叫做过渡帧或者中间帧。在AE里面，我们只需要添加关键帧．电脑会自动生成过渡动画。",router:""},{id:2,title:"FPS（Frames Per Second）",pic:["./img/fps.f467ecc7.png"],content:"FPS是图像领域中的定义，是指画面每秒传输帧敌，通俗来讲就是指动画或视频的画面致。FPS是测量用于保存、显示动态视频的信息数量。每秒钟帧政愈多，所显示的动作就会愈流畅。通常．要避免动作不流畅的最低是30。某些计算机视频格式．每秒只能提供15帧。",router:""},{id:3,title:"视频格式",pic:["./img/format.b24912ca.png"],content:"\n                MP4 \n\n                MP4是一套用于音频、视频信息的压缩编码标准，由国际标准化组织(ISO）和国际电工委员会(IEC）下属的“动态图像专家组”(Moving Picture Experts Group，即MPEG〉制定，第一版在1998年10月通过，第二版在1999年12月通过。MPEG-4格式的主要用途在于网上流、光盘、语音发送（视频电话)，以及电视广播，\n                AVI \n\n                AVI，音频视频交错(Audio Video Interleaved)的英文缩写。AVI这个由微软公司发表的视频格式，在视频领域可以说是最悠久的格式之一。AVI格式调用方便、图像质量好，压缩标准可任意选择，是应用最广泛、也是应用时间最长的格式之一。\n                MOV \n\n                使用过Me机的朋友应该多少按触过QuickTime。QuickTime原本是Apple公司用于Mac计算机上的一种图像视频处理软件。Quick-Time提供了两种标准图像和数字视频格式，即可以支持静态的*.PIC和 .JPG图像格式，动态的基于Indeo压缩法的*.MOV和基于MPEG压缩法的* .MPG视频格式。\n                WMV \n\n                一种独立于编码方式的在Internet上实时传播多媒体的技术标准，Microsoft公司希望用其取代OuickTime之类的技术标准以及WAV、AVI之类的文件扩展名。WMV的主要优点在于:可扩充的媒体类型、本地或网络回放、可伸缩的媒体类型、流的优先级化、多语言支持、扩展性等。\n                MKV \n\n                种后缀为MKV的视频文件频频出现在网络上，它可在一个文件中集成多条不同类型的音轨和字幕轨，而且其视频编码的自由度也非常大，可以是常见的DivX、XviD、3IVX.甚至可以是RealVideo 、Quick Time、WMV这类流式视频。\n                FLV \n\n                FLV是FLASH VIDEO的简称，FLV流媒体格式是一种新的视频格式。由于它形成的文件极小、加载速度极快，使得网络观看视频文件成为可能，它的出现有效地解决了视频文件导入Flash后，使导出的SWF文件体积庞大，不能在网络上很好的使用等缺点。\n                ",router:""},{id:4,title:"常见格式",pic:["./img/Db1.a1fd25e5.png"],content:"",router:""},{id:5,title:"比特率",pic:["./img/Bitrate.03ec56db.png"],content:"比特率是指每秒传送的比特(bit)数。单位为bp(Bit Per Second)，比特率越高，传送数据速度越快。声音中的比特率是指将模拟声音信号转换成数字声音信号后，单位时间内的二进制数据量，是间接衡量音频质量的一个指标。视频中的比特率（码率）原理与声音中的相同，都是指由模拟信号转换为数字信号后，单位时间内的二进制数据量。",router:""},{id:6,title:"格式转换",pic:["./img/FF150.91a8545c.png"],content:"视频格式转换主指通过一些软件，将视频的格式互相转化，使其达到用户的需求。常用的视频格式有影像格式（Video)、流媒体格式(Stream Video)。每一种格式的文件需要有对应的播放器。MOV格式文件用OuickTime据放，RM格式的文件用RealPlayer播放。若出现只装有RealPlayer播放器，所有的却是一个MOV格式文件，为了播放．需要对视频进行格式转换。",router:""},{id:7,title:"窗口功能",pic:["./img/aeWindow.522f8359.png"],content:"Adobe系列的软件大都提供了高自由度的面板调整，每一个窗口都能自由的显示、隐藏或者放在软件的各个位置，用户一般不用调整窗口的位置，但是根据自身需求调整窗口布局能让AE使用更加得心应手。当然，你不知道怎么摆放窗口位置的时候你也可以试试AE给出的默认工作区样式",router:""},{id:8,title:"菜单栏",pic:["./img/aenav.d4efd8c0.png"],content:"菜单栏提供了许多重要的操作，比如项目的创建与设置、文件的导入导出、面板的详细设置入口。当然一些常用的操作他会默认提供快捷键，一些功能也会集成到相应的面板上，可以进行图形化的操作。\n                \n 文件\n                可以新建项目，导入导出，与其他Adobe软件动态链接和设置脚本。\n                \n 编辑\n                计算机常规的复制粘贴都在这里，AE的基础设置就在这。\n                \n 合成\n                合成面板的基础信息和设置。\n                \n 图层\n                图层与PS中的类似，大都是图层的基础样式。\n                \n 效果\n                一些简单的效果预设，比如颜色变暗、变亮。\n                \n 动画\n                提供了关键帧的调整，以及摄像机的运动调整，还有表达式的编写。\n                \n 窗口\n                调整窗口设置，显示隐藏你要操作的窗口，还有默认的工作区样式可供选择。\n                \n 帮助\n                可以查看软件的信息、查看官网论坛、登录账号，新版还提供了Adobe官方的教程。\n                ",router:""},{id:9,title:"工具栏",pic:["./img/aenav.d4efd8c0.png"],content:"\n                \n 选取工具（快捷键V）\n                最常用的工具，鼠标默认就是选择工具，用于选择各个文件、各项属性，并且改变位置。\n                \n 手型工具（快捷键H）\n                随意的拖动合成窗口。\n                \n 缩放工具（快捷键Z）\n                缩放合成窗口，注意并不是缩放素材。\n                \n 旋转工具（快捷键W）\n                字面意思，可以旋转素材。\n                \n 形状工具（快捷键Q）\n                快速生成默认形状，并且能调整填充颜色与描边样式。\n                \n 钢笔工具（快捷键G）\n                绘画路径，是路径动画的基础。\n                \n 文字工具（快捷键ctrl+T）\n                生成文字图层输入文字，能调整文字样式，并且制作文字动画，也能附着在路径上。\n                \n 画笔工具（快捷键ctrl+B在这同样快捷键的工具中切换）\n                自由的绘制线条，有各种各样的画笔样式预设。\n                \n 仿制图章工具（快捷键ctrl+B在这同样快捷键的工具中切换）\n                将图案的一部分进行复制，操作和PS相同。\n                \n 橡皮擦工具（快捷键ctrl+B在这同样快捷键的工具中切换）\n                将图案的一部分擦除，操作和PS相同。\n                \n Roto笔刷（快捷键Alt+W）\n                快速选区，自动识别图案内容建立选区。后续还能追踪物体变化而更新选区，这样就能将视频中的运动物体实时选取出来。\n                ",router:""},{id:10,title:"项目面板和参数",pic:["./img/projectPanel.2d540f26.png"],content:"项目面板是容纳素材和合成的一个窗口，可以新建文件夹对杂乱的素材进行整理。在面板上方会显示所选素材的基础信息比如分辨率、时长、编码信息。",router:""},{id:11,title:"图层面板",pic:["./img/layersPanel.1282c3a3.png"],content:"虽然他是叫图层，但是不同格式的素材都会形成一个层。对于可以显示的素材来说，图层面板里的显示优先级是自上而下的，在上方的素材会最优先显示。",router:""},{id:12,title:"图层的基本属性",pic:["./img/layerBasic.ff6195b5.png"],content:"图层的五个基础属性\n                \n 锚点（单独显示快捷键A）\n                相对于素材自身的坐标而定位的一个点，一些对素材的操作是以锚点来进行的，比如缩放。\n                \n 位置（单独显示快捷键P）\n                相对于整个项目的坐标而定位的，它能直接的表达你这个素材在这个项目里处在一个什么位置。\n                \n 缩放（单独显示快捷键S）\n                基于锚点对素材自身进行缩放。\n                \n 旋转（单独显示快捷键R）\n                基于锚点对素材自身进行旋转。\n                \n 不透明度（单独显示快捷键T）\n                字面意思，调整素材的不透明度，从0%~100%。\n                ",router:""},{id:13,title:"获取AE",pic:["./img/Db1.a1fd25e5.png"],content:"\n                百度搜索Adobe，进入Adobe官网付费获取正版AE（推荐）。\n                微博关注@vposy，在置顶微博查看下载链接（不推荐）。\n                ",router:""},{id:14,title:"关键帧属性",pic:["./img/frame2.5c672f2a.png"],content:"在某个时间记录素材的属性，并且自动计算出两个关键帧之间发生的变化。如果两个关键帧之间的时间长度一致，但是首位的数值差距不一样，它们的运行速度就会不一样，如图所示1~7的数值增长速度会更快一些。",router:""},{id:15,title:"动画案例",pic:["./img/trigger.48572e21.gif","./img/ringRotation.dea76612.gif"],content:"",router:""},{id:16,title:"文字工具",pic:["./img/textTool.611b76cc.png","./img/textTool2.e3b40c71.png"],content:"新建一个文本图层，拥有图层基本属性，与其他软件的文字编辑相同，在此之上还能对文本进行关键帧设置实现显示文字动画。",router:""},{id:17,title:"效果控件",pic:["./img/effect1.5106e506.png"],content:'选中一个图层在效果控件窗口右键即可弹出效果菜单，或者直接在"效果与预设"窗口寻找想要的预设。效果控件里有大量AE自带的基础效果。',router:""},{id:18,title:"蒙板遮罩",pic:["./img/mask1.f05eb60f.png","./img/mask2.c19452f2.png","./img/mask3.5dfa62f5.png"],content:"遮罩（mask），是一个路径或者轮廓图，用于修改层的Alpha通道。\n                简而言之，这个遮罩层可以允许你阻止某幅图片不透过该层、其下一层或背景显示出来，也就是我们传统中遮掩图片的某部分的一种方式。也就是说，遮罩是由至少2个对象组合起来的，一个是被改变的对象，另一个是作为遮罩的对象。",router:""},{id:19,title:"元素间的父子关系。",pic:["./img/fs.cb95862b.png","./img/fs.c0d83a82.gif"],content:"子层级的一些基础属性会随父层级变化，而且在改变子层级的基础属性时父层级不会发生变化。",router:""},{id:20,title:"简单表达式",pic:["./img/wiggle1.4594e0fe.png","./img/expression1.cb31e9d8.png"],content:"按住Alt点击图层基本属性旁边的秒表即可打开表达式界面。通过表达式设置的数值有最高优先级。\n                \n 抖动表达式 wiggle(每秒钟抖动次数,数值范围)\n                wiggle(5，20)则代表每秒钟抖动五次，每次抖动修改的数值范围是20。\n                \n 随机表达式 random(最小值,最大值)\n                按照最小值最大值随机返回一个符合该范围的数值，属性有多个值时需要用数组如[random(10,20),random(0,99),……]。\n                \n 时间表达式 time\n                随时间对数值进行叠加，同随机数值一样，属性有多个值的时候需要用到数组。\n                \n 索引表达式 index\n                返回当前图层所在层级的层数，第一层的图层的index会返回数字1\n                ",router:""},{id:21,title:"渲染设置以及常用格式",pic:["./img/output.3a7ce429.png","./img/output2.519f6f66.png"],content:"基本上渲染输出只会用到AVI和QuickTime两个格式，前者输出质量高体积大，后者支持透明通道的视频。",router:""},{id:22,title:"KeyLight一键扣绿",pic:["./img/keylight1.eccac615.png"],content:"曾是一个非常优秀的外部插件，现在已经被官方集成到正版AE里，新版AE不用下载安装就能直接使用。\n                单击Screen Color旁边的取色吸管选取要抠除的颜色即可大致去掉所选颜色，并且生成透明通道。\n                适当拖动调节Screen Gain的值,使得抠图区域更加纯净。\n                Dispill Bias 顔色溢出抑制,吸管吸取皮肤颜色,则皮肤周围的黑边就会改善,Alpha Bias 透明度偏移同时也会改变。\n                ",router:""}]},mutations:{showBackBtn(t,e){t.backBtnVisible=e},showMsg(t,e){t.showMsg=e},getSearchId(t,e){t.searchId=e}},actions:{}}),q=n("6192"),Z=n("d02f"),z=n.n(Z);n("f848");i["default"].use(z.a),i["default"].use(J.a),i["default"].config.productionTip=!1,i["default"].prototype.$axios=q["a"],new i["default"]({router:H,render:t=>t(j),store:U}).$mount("#app")},5705:function(t,e,n){"use strict";n("77ef")},"58f1":function(t,e,n){t.exports=n.p+"img/output.3a7ce429.png"},"5fe6":function(t,e,n){t.exports=n.p+"img/keyframe.1e5c3bec.png"},"68eb":function(t,e,n){},7012:function(t,e,n){t.exports=n.p+"img/aeui3.cb63e65d.png"},"77ef":function(t,e,n){},"7af3":function(t,e,n){t.exports=n.p+"img/trigger.48572e21.gif"},"82ac":function(t,e,n){t.exports=n.p+"img/keylight1.eccac615.png"},"857f":function(t,e,n){"use strict";n("3f93")},"8b24":function(t,e,n){t.exports=n.p+"img/mask1.f05eb60f.png"},"8ce8":function(t,e,n){t.exports=n.p+"img/fs.c0d83a82.gif"},9119:function(t,e,n){t.exports=n.p+"img/aeui2.3ffb4059.jpg"},9959:function(t,e,n){t.exports=n.p+"img/slide_10.9773d680.gif"},"9a39":function(t,e,n){t.exports=n.p+"img/aeWindow.522f8359.png"},"9b00":function(t,e,n){t.exports=n.p+"img/expression1.cb31e9d8.png"},"9cbd":function(t,e,n){"use strict";n("68eb")},"9f8f":function(t,e,n){t.exports=n.p+"img/wiggle1.4594e0fe.png"},a108:function(t,e,n){t.exports=n.p+"img/fs.cb95862b.png"},bca2:function(t,e,n){t.exports=n.p+"img/layerBasic.ff6195b5.png"},be6b:function(t,e,n){t.exports=n.p+"img/Db1.a1fd25e5.png"},c083:function(t,e,n){t.exports=n.p+"img/slide_1.acdefe0e.gif"},c58b:function(t,e,n){"use strict";n("f7aa")},c5f6:function(t,e,n){"use strict";n("0494")},c6d0:function(t,e,n){t.exports=n.p+"img/slide_7.7140fe79.gif"},c9e3:function(t,e,n){t.exports=n.p+"img/frame2.5c672f2a.png"},cbfd:function(t,e,n){t.exports=n.p+"img/loop3.9536bdad.png"},ccbf:function(t,e,n){t.exports=n.p+"img/textTool2.e3b40c71.png"},cff9:function(t,e,n){"use strict";n("198f")},d975:function(t,e,n){t.exports=n.p+"img/loop2.f0a87432.png"},e2c5:function(t,e,n){t.exports=n.p+"img/ringRotation.dea76612.gif"},e33d:function(t,e,n){t.exports=n.p+"img/frame.bf28b5db.png"},e762:function(t,e,n){t.exports=n.p+"img/effect1.5106e506.png"},ea77:function(t,e,n){t.exports=n.p+"img/textTool.611b76cc.png"},f7aa:function(t,e,n){},f994:function(t,e,n){t.exports=n.p+"img/output2.519f6f66.png"},ffa3:function(t,e,n){t.exports=n.p+"img/FF150.91a8545c.png"}});
//# sourceMappingURL=app.749ba8c5.js.map
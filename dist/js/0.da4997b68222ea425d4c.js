webpackJsonp([0,1,5,6],{372:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(382),s=i(388);var o=function(t){i(386)},n=i(13)(a.a,s.a,!1,o,"data-v-7b921c30",null);e.default=n.exports},373:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(383),s=i(391);var o=function(t){i(389)},n=i(13)(a.a,s.a,!1,o,null,null);e.default=n.exports},374:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(384),s=i(394);var o=function(t){i(392)},n=i(13)(a.a,s.a,!1,o,null,null);e.default=n.exports},377:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(397),s=i(409);var o=function(t){i(407)},n=i(13)(a.a,s.a,!1,o,null,null);e.default=n.exports},382:function(t,e,i){"use strict";var a=i(129),s=i.n(a),o=i(26),n=i.n(o),r=i(27),c=i.n(r),l=i(385);i(14);function d(t){return t?(e="Darwin"===t.os.name?"MAC":"WINDOWS",{status:"ACTIVE",cpid:t.cpid,name:t.name,type:e,meta:t}):null;var e}e.a={data:function(){return{ipcRenderer:null,loading:!0,parseDevice:l.a,onBatteries:!1,deviceStatePoll:null,actionbg:{backgroundColor:"white"},config:{run_if_user_active:null},boincStatus:"Initializing....",boincStatusIcon:"check",activeTasks:[],thisDevice:{name:null,power:"",status:"",id:"",meta:{},icon:"WINDOWS",type:"WINDOWS",powerRatings:[]},deviceId:null,pending:!1,toggle:!1}},computed:{},methods:{openConfigModal:function(){this.$e.$emit("openBoincConfigModal",this.config)},modulateTaskProgress:function(t){return t=100*parseFloat(t)+function(t){return Math.floor(Math.random()*Math.floor(t))}(2)},handleLocalDevice:function(){var t=c()(n.a.mark(function t(e){var i,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=6;break}return console.log("received blank localDevice"),window.local.ipcRenderer.send("initBoinc"),t.abrupt("return");case 6:if(!e.cpid){t.next=51;break}return t.prev=7,t.next=10,this.api.device.getByCpid(e.cpid).catch(console.error);case 10:if(i=t.sent,console.log("RESULT FROM CHECK",i),this.$e.$emit("closeAuthModal",!1),i){t.next=30;break}return console.log("device does not exist, User can claim device"),t.prev=15,t.next=18,this.api.device.add(d(e));case 18:return a=t.sent,t.next=21,this.api.device.get(a.id);case 21:this.thisDevice=t.sent,t.next=28;break;case 24:return t.prev=24,t.t0=t.catch(15),console.error(t.t0),t.abrupt("return");case 28:t.next=44;break;case 30:if(i.owner.id!==this.thisUser.id){t.next=42;break}return t.prev=31,t.next=34,this.api.device.get(i.id);case 34:this.thisDevice=t.sent,t.next=40;break;case 37:return t.prev=37,t.t1=t.catch(31),t.abrupt("return",console.error(t.t1));case 40:t.next=44;break;case 42:this.$e.$emit("logout"),alert("This device is already claimed by a different account. 😢 \n \n Contact us: support@boid.com");case 44:t.next=49;break;case 46:t.prev=46,t.t2=t.catch(7),console.error(t.t2);case 49:t.next=53;break;case 51:this.$router.push({name:"Auth"}),alert("This device is acting up. 😢 \n \n Contact us: support@boid.com");case 53:if(!e.wcgid){t.next=62;break}if(this.thisDevice.wcgid!==e.wcgid){t.next=58;break}return t.abrupt("return");case 58:return t.next=60,this.api.device.updateWcgid({deviceId:this.thisDevice.id,wcgid:e.wcgid});case 60:i=t.sent,console.log(i);case 62:case"end":return t.stop()}},t,this,[[7,46],[15,24],[31,37]])}));return function(e){return t.apply(this,arguments)}}(),init:function(){var t=this;window.local&&this.authenticated&&setTimeout(function(){console.log("LOCAL DEVICE",window.local.ipcRenderer.sendSync("localDevice")),t.handleLocalDevice(window.local.ipcRenderer.sendSync("localDevice"))},600)}},props:["thisUser","authenticated","api","thisModal","ch"],created:function(){var t=this;setInterval(function(){t.init()},5e3),this.init(),window.local&&(this.ipcRenderer=window.local.ipcRenderer,window.local.ipcRenderer.send("boinc.config.get"),window.local.ipcRenderer.on("boinc.toggle",function(e,i){console.log("GOT TOGGLE:",i),t.loading||(t.toggle=i)}),window.local.ipcRenderer.on("boinc.config",function(e,i){console.log("GOT CONFIG",i),t.config=i}),window.local.ipcRenderer.on("boinc.activeTasks",function(e,i){i&&(t.activeTasks=i)}),window.local.ipcRenderer.on("boinc.suspended",function(e,i){console.log("GOT BOINC SUSPENDED:",i),i?(t.onBatteries=!0,t.boincStatus="Paused: "+i,t.boincStatusIcon="pause"):(t.onBatteries=!1,t.boincStatus="Computing Tasks...",t.boincStatusIcon="check")}),window.local.ipcRenderer.on("deviceReady",function(t,e){console.log("GOT DEVICE:",e)}),window.local.ipcRenderer.on("boinc.error",function(t,e){console.error("got errorfrom boinc",e),alert(e)}))},watch:{activeTasks:function(t){t.length>0&&t.some(function(t){return 1==t.active_task_state[0]})&&(this.onBatteries||(this.boincStatus="Computing Tasks...",this.boincStatusIcon="check"))},thisDevice:function(){var t=c()(n.a.mark(function t(e){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e&&(window.local.ipcRenderer.send("boinc.config.get"),this.loading=!1,console.log(s()(this.thisDevice)),this.thisDevice.icon=l.a.icon(this.thisDevice));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),toggle:function(){var t=c()(n.a.mark(function t(e){var i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.pending=!0,t.prev=1,i={deviceId:this.thisDevice.id},e?(i.status="ACTIVE",this.actionbg.backgroundColor="li",window.local.ipcRenderer.send("startBoinc"),clearInterval(this.deviceStatePoll),this.deviceStatePoll=setInterval(function(){window.local.ipcRenderer.send("boinc.activeTasks")},5e3)):(i.status="ONLINE",this.actionbg.backgroundColor="white",window.local.ipcRenderer.send("boinc.cmd","quit"),clearInterval(this.deviceStatePoll)),t.next=11;break;case 6:t.prev=6,t.t0=t.catch(1),console.error("error"),alert(t.t0),console.error(t.t0);case 11:return t.prev=11,t.next=14,this.api.device.get(this.thisDevice.id);case 14:return this.thisDevice=t.sent,this.pending=!1,t.finish(11);case 17:case"end":return t.stop()}},t,this,[[1,6,11,17]])}));return function(e){return t.apply(this,arguments)}}()}}},383:function(t,e,i){"use strict";e.a={}},384:function(t,e,i){"use strict";e.a={name:"index",data:function(){return{team:{}}},computed:{},methods:{},watch:{team:function(t){console.log("gotTeam",t)}},created:function(){var t=this;this.$e.$on("team",function(e){t.team=e})},props:["thisUser","api","authenticated","leaderboard","teamLeaderboard"]}},385:function(t,e,i){"use strict";e.a={icon:function(t){return"BROWSER"===t.type?"tab":"DESKTOP"===t.type?"flash_on":"MOBILE"===t.type?"phone_android":"WINDOWS"===t.type?"fa-windows":"MAC"===t.type?"fa-apple":"add"},color:function(t){return"OFFLINE"===t.status?"grey":"ONLINE"===t.status?"blue":"ACTIVE"===t.status?"green":void 0}}},386:function(t,e,i){var a=i(387);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(371)("2a6fc7f4",a,!0,{})},387:function(t,e,i){(t.exports=i(370)(!1)).push([t.i,".layout-padding[data-v-7b921c30]{max-width:700px}.infobtn[data-v-7b921c30]{color:$grey-6;font-size:15px;right:5px;top:5px}.taller[data-v-7b921c30]{height:60px}body[data-v-7b921c30]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""])},388:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[!t.loading&&t.thisDevice.name?i("div",{staticClass:"layout-padding relative-position"},[i("h6",{staticClass:"text-center",staticStyle:{padding:"0px",margin:"0px"}},[t._v(t._s(t.thisDevice.name)+" "),i("q-icon",{staticClass:"float-lefth on-right inline",staticStyle:{"padding-bottom":"3px"},attrs:{name:t.parseDevice.icon(t.thisDevice),color:t.parseDevice.color(t.thisDevice)}}),i("q-tooltip",[t._v("Your Device Name")])],1),i("q-card",{staticStyle:{width:"90vw","max-height":"400px"}},[i("q-card-media",{staticClass:"relative-position"},[i("q-btn",{staticClass:"infobtn absolute-top-right",attrs:{color:"blue",flat:"flat",round:"round"},on:{click:function(e){t.openConfigModal()}}},[i("q-icon",{attrs:{color:"grey-7",name:"settings"}}),i("q-tooltip",[t._v("Settings")])],1),i("div",{staticClass:"row"},[i("div",{staticClass:"col-auto"},[i("img",{staticStyle:{opacity:".9",width:"100px",height:"100px",padding:"15px"},attrs:{src:"statics/images/magnifyingglass.svg"}})]),i("div",{staticClass:"col-7 relative-position"},[i("h6",{staticClass:"light-paragraph"},[t._v("Device Boid Power"),i("q-tooltip",[t._v("Boid Power is updated as each Work Unit is finished. Give it some time!")])],1),t.thisDevice.powerRatings[0]?i("div",[i("img",{staticStyle:{height:"20px",top:"5px"},attrs:{src:"/statics/images/BoidPower.svg"}}),t._v(t._s(t.thisDevice.powerRatings[0].power.toFixed(4)))]):t._e(),i("q-btn",{staticClass:"absolute-bottom light-paragraph",staticStyle:{"margin-bottom":"5px"},attrs:{flat:"flat"},on:{click:function(e){t.ipcRenderer.send("openURL","https://app.boid.com/impact")}}},[t._v("Mapping Cancer Markers"),i("q-tooltip",[t._v("Learn more about the current computational task")])],1)],1)])],1),t.toggle?i("q-card-main",[t.activeTasks.length>0?i("p",[t._v("Work Units"),i("q-tooltip",[t._v("Work Units are small tasks that help solve huge problems.")])],1):i("p",[t._v("Downloading Work Units....")]),t._l(t.activeTasks,function(e,a){return t.activeTasks.length>0?i("div",{key:e.slot[0],staticStyle:{"margin-bottom":"5px"}},[1!=e.active_task_state[0]||t.onBatteries?i("q-progress",{attrs:{buffer:0,height:"40px",stripe:"stripe",percentage:100*e.checkpoint_fraction_done[0],color:"grey-4"}}):i("q-progress",{staticStyle:{height:"10px"},attrs:{buffer:0,height:"40px",stripe:"stripe",animate:"animate",percentage:t.modulateTaskProgress(e.checkpoint_fraction_done[0])}}),i("q-tooltip",[i("p",{staticStyle:{margin:"0px"}},[t._v("Task:")]),t._v(t._s(e.result_name[0])+" "),i("div",{staticStyle:{height:"10px"}}),i("p",{staticStyle:{margin:"0px"}},[t._v("Progress:")]),t._v(t._s((100*e.checkpoint_fraction_done[0]).toFixed(0))+"%")])],1):t._e()})],2):t._e(),i("q-card-separator"),i("q-card-actions",{staticClass:"taller relative-position"},[i("q-btn",{attrs:{small:"small",round:"round",flat:"flat"}},[t.toggle?i("q-icon",{staticClass:"on-right",attrs:{name:t.boincStatusIcon}}):t._e()],1),t.toggle?i("h6",{staticClass:"text-grey-8 on-right",staticStyle:{"padding-top":"5px"}},[t._v(t._s(t.boincStatus))]):t._e(),t.toggle?i("q-spinner-grid",{staticClass:"inline on-right absolute-right",staticStyle:{right:"70px",top:"20px"},attrs:{size:20,color:"grey-4"}}):t._e(),i("q-toggle",{staticClass:"absolute-right",staticStyle:{padding:"20px"},attrs:{color:"green",disable:t.pending},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}})],1)],1)],1):i("div",{staticClass:"layout-padding relative-position"},[i("div",{staticClass:"text-center"},[t._v("Initializing....")])])])},staticRenderFns:[]};e.a=a},389:function(t,e,i){var a=i(390);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(371)("6341b158",a,!0,{})},390:function(t,e,i){(t.exports=i(370)(!1)).push([t.i,".herocard{border-radius:30px;z-index:1;padding-top:125px;margin-left:15px;margin-right:15px}@media screen and (max-width:500px){.herocard{padding-top:60px}}.heroicon{background-color:#fafafa;border-radius:20%;padding:20px;width:220px;height:220px;-webkit-filter:drop-shadow(2px 3px 2px rgba(0,0,0,.2));filter:drop-shadow(2px 3px 2px rgba(0,0,0,.2))}@media screen and (max-width:1000px){.heroicon{width:170px;height:170px}}@media screen and (max-width:500px){.heroicon{width:110px;height:110px}}",""])},391:function(t,e,i){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-green-6"},[e("div",{staticClass:"row justify-center xl-padding md-padding",staticStyle:{"padding-top":"145px","padding-bottom":"10px"}},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"row justify-center relative-position"},[e("img",{staticClass:"heroicon absolute-center",attrs:{src:"https://assets.boid.com/images/connectdevices.svg"}})]),e("div",{staticClass:"herocard"},[e("h5",{staticClass:"text-center text-white"},[this._v("Connect Your Devices")])])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"row justify-center relative-position"},[e("img",{staticClass:"heroicon absolute-center",attrs:{src:"https://assets.boid.com/images/contribute3.svg"}})]),e("div",{staticClass:"herocard"},[e("h5",{staticClass:"text-center text-white"},[this._v("Contribute To Big Ideas")])])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"row justify-center relative-position"},[e("img",{staticClass:"heroicon absolute-center",attrs:{src:"https://assets.boid.com/images/earnrewards3.svg"}})]),e("div",{staticClass:"herocard"},[e("h5",{staticClass:"text-center text-white"},[this._v("Earn Rewards")])])])]),e("div",{staticStyle:{height:"10px"}})])}]};e.a=a},392:function(t,e,i){var a=i(393);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(371)("48ca1bf7",a,!0,{})},393:function(t,e,i){(t.exports=i(370)(!1)).push([t.i,".q-card{padding:10px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.tokenimg{width:50px}.user:hover{background-color:#f5f5f5}",""])},394:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-center full-width",staticStyle:{"z-index":"10000"}},[i("div",{staticClass:"col-md-12 col-lg-6"},[i("q-card",{staticClass:"animate-scale full-wi"},[i("p",{staticClass:"light-paragraph text-center"},[t._v("Top Users")]),i("table",{staticClass:"q-table horizontal-separator",staticStyle:{width:"100%"}},[i("thead",[i("tr",[i("th"),i("th",{staticClass:"relative-position",staticStyle:{width:"50px"}},[i("q-tooltip",[t._v("User Boid Power")]),i("img",{staticClass:"absolute-center",staticStyle:{height:"30px",top:"15px"},attrs:{src:"/statics/images/BoidPower.svg"}})],1)])]),t._l(t.leaderboard,function(e,a){return i("tbody",{key:e.id},[i("tr",{staticClass:"user",staticStyle:{cursor:"pointer"},on:{click:function(i){t.$router.push({name:"User",params:{username:e.username}})}}},[i("td",{staticClass:"relative-position"},[i("div",{staticClass:"absolute-left text-grey-7"},[t._v(t._s(a+1))]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-auto"},[i("img",{staticClass:"avatar",attrs:{src:e.image}})]),i("div",{staticClass:"col",staticStyle:{padding:"15px"}},[i("div",{staticClass:"ellipsis",attrs:{"data-th":"Username"}},[t._v(t._s(e.username))]),i("small",{staticClass:"block light-paragraph"},[t._v(t._s(e.tagline))])])])]),i("td",{attrs:{"data-th":"Power"}},[t._v(t._s(e.power.toFixed(2)))])])])})],2)])],1),i("div",{staticClass:"col-md-12 col-lg-6"},[i("q-card",{staticClass:"animate-scale"},[i("p",{staticClass:"light-paragraph text-center"},[t._v("Top Teams")]),i("table",{staticClass:"q-table horizontal-separator",staticStyle:{width:"100%"}},[i("thead",[i("tr",[i("th",{staticStyle:{width:"0px"}}),i("th",{staticClass:"relative-position",staticStyle:{width:"50px"}},[i("q-tooltip",[t._v("Team Boid Power")]),i("img",{staticClass:"absolute-center",staticStyle:{height:"30px",top:"15px"},attrs:{src:"/statics/images/BoidPower.svg"}})],1)])]),t._l(t.teamLeaderboard,function(e,a){return i("tbody",{key:e.id},[i("tr",{staticClass:"user cursor-pointer",on:{click:function(i){t.$router.push({name:"Team",params:{teamname:e.name}})}}},[i("td",{staticClass:"relative-position"},[i("div",{staticClass:"absolute-left text-grey-7"},[t._v(t._s(a+1))]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-auto"},[i("img",{staticClass:"tokenimg",attrs:{src:e.image}})]),i("div",{staticClass:"col",staticStyle:{padding:"15px"}},[i("div",{staticClass:"ellipsis",staticStyle:{"max-width":"120px"}},[t._v(t._s(t._f("removeDash")(e.name)))])])])]),i("td",{attrs:{"data-th":"Power"}},[t._v(t._s(parseInt(e.power)))])])])})],2)])],1)])},staticRenderFns:[]};e.a=a},397:function(t,e,i){"use strict";var a=i(26),s=i.n(a),o=i(27),n=i.n(o),r=i(372),c=i(385),l=i(14),d=i(374),p=i(373),h={wallet:{heading:"Your Wallet",body:"Tokens and coins that you earn will show up here, during the Alpha, only BOIDs are generated. Soon you will be able to earn other coins as well."},power:{heading:"Boid Power",body:"Boid Power increases when you run Boid on devices. Your Power will also decrease when devices are turned off. The higher your Power, the more you will earn and the higher you will climb in the leaderboards."},devices:{heading:"Your Devices",body:"When you install the Boid application on multiple devices (desktops, laptops, phones), \n          you will be able to manage your devices here."},team:{heading:"Your Team",body:"Your power generated goes towards your team, in eachange, each team will distribute exclusive rewards. \n          You are automatically on the team of the user who has invited you."},social:{heading:"Social",body:"When users join Boid using your invite link you will receive a small percentage of bonus power based\n          on their contributions. Your invite link changes if you change your username."}};e.a={name:"index",data:function(){return{browserDeviceId:null,chThrottleDisplay:null,browserDeviceToggle:!1,openURL:l.openURL,info:h,currentDevice:null,devices:[],parseDevice:c.a,pollLeaderboard:null}},computed:{userPower:function(){try{return this.thisUser.powerRatings[0].power.toFixed(4)}catch(t){return 0}},throttlePercent:function(){return 0===this.ch.throttle?"100%":100-(100*this.ch.throttle).toFixed(0)+"%"}},methods:{configDevice:function(t){this.currentDevice=t,this.$refs.deviceModal.open()},toggleDevice:function(){var t=n()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),init:function(){var t=this;this.thisUser&&(this.devices=this.thisUser.devices,this.devices&&this.devices.forEach(function(e){"BROWSER"===e.type&&(t.browserDeviceId=e.id)}))},disableToggle:function(t){return"BROWSER"!==t.type}},mounted:function(){this.init()},watch:{ch:function(){this.chThrottleDisplay=this.ch.throttle},browserDeviceToggle:function(t){console.log("browserdevicetoggle",t),this.$root.$emit("browserDeviceToggle",t,this.browserDeviceId)},thisUser:function(){this.init()},adBlock:function(){console.log("here we are")}},props:["thisUser","thisDevice","authenticated","api","ch","adBlock","leaderboard","teamLeaderboard"],components:{device:r.default,leaderboard:d.default,bHeader:p.default}}},407:function(t,e,i){var a=i(408);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(371)("310d973f",a,!0,{})},408:function(t,e,i){(t.exports=i(370)(!1)).push([t.i,"p{margin-bottom:0}h5{font-family:Comfortaa,cursive;font-size:20px}@media screen and (max-width:500px){h5{font-size:15px}}h4,h6{font-family:Comfortaa,cursive}.q-card{padding:10px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.tokenimg{width:50px}.tokenlist:hover{background-color:#f5f5f5}.hovericon:hover{color:#2196f3}.hovericon{color:#bdbdbd}.power{color:#fff176}.infobtn{color:#9e9e9e;font-size:15px;right:10px}.infobtn:hover{color:#4caf50}.q-btn-round.q-btn-small{width:30px;height:30px}@media (max-width:767px){table.q-table.responsive:not(.flipped) table.q-table.responsive:not(.flipped) td{display:inline-table}}",""])},409:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[t.authenticated?i("div",{staticClass:"thin-paragraph"}):i("div",[i("bHeader",{staticClass:"shadow-3",staticStyle:{"drop-shadow":"0px 4px 10px grey"}})],1),i("br"),t.authenticated?t._e():i("div",{staticClass:"row justify-center"},[i("div",[i("q-btn",{staticClass:"on-left",staticStyle:{"font-size":"30px"},attrs:{big:"big",color:"green"},on:{click:function(e){t.$e.$emit("openAuthModal",!0)}}},[t._v("Join Us")]),i("q-btn",{staticClass:"on-left",staticStyle:{"font-size":"20px"},attrs:{big:"big",color:"blue"},on:{click:function(e){t.openURL("https://www.boid.com")}}},[t._v("Learn More")])],1)]),i("br")]),i("div",{staticClass:"row justify-center"},[t.authenticated?i("div",{staticClass:"col-md-4 col-lg-3 col-xl-3"},[i("div",{staticClass:"row justify-center"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-sm-6 col-md-12"},[i("q-card",{staticClass:"relative-position animate-scale"},[i("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[i("q-icon",{attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.power)}}})],1),i("p",{staticClass:"light-paragraph text-center"},[t._v("My Boid Power")]),i("div",{staticClass:"row justify-center"},[i("div",{staticClass:"col-7"},[t.userPower>0?i("img",{staticClass:"float-right",staticStyle:{"margin-top":"10px",fill:"white",width:"100%","max-height":"140px",padding:"20px"},attrs:{src:"/statics/images/BoidPower.svg"}}):i("img",{staticClass:"float-right",staticStyle:{fill:"white",width:"100%","max-height":"140px",padding:"20px"},attrs:{src:"/statics/images/BoidPower-Off.svg"}})]),i("div",{staticClass:"col-5"},[i("div",{staticClass:"relative-position",staticStyle:{"padding-top":"10px"}},[i("small",{staticClass:"block light-paragraph small"},[t._v("Total: ")]),i("h5",[t._v(t._s(t.userPower)+" ")]),t.thisUser.powerRatings[0]?i("div",[i("small",{staticClass:"block light-paragraph small"},[t._v("Devices: ")]),i("p",{staticClass:"light-paragraph"},[t._v(t._s(parseInt(t.thisUser.powerRatings[0].meta.devices)))]),i("small",{staticClass:"block light-paragraph"},[t._v("Social: ")]),i("p",{staticClass:"light-paragraph"},[t._v(t._s(parseInt(t.thisUser.powerRatings[0].meta.social)))])]):t._e()])])])],1)],1),i("div",{staticClass:"col-xs-12 col-sm-6 col-md-12"},[i("q-card",{staticClass:"animate-scale relative-position"},[i("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[i("q-icon",{attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.social)}}})],1),i("p",{staticClass:"light-paragraph text-center"},[t._v("Social")]),i("div",{staticClass:"relative-position",staticStyle:{margin:"auto","margin-top":"30px"}},[i("q-tooltip",[t._v("Invited Users")]),i("h3",{staticClass:"text-center",staticStyle:{"z-index":"5"}},[t._v(t._s(parseInt(t.thisUser.invited.length))),i("q-icon",{staticClass:"text-center absolute-center",staticStyle:{"font-size":"50px","z-index":"-4"},attrs:{color:"blue-1",name:"fa-users"}})],1)],1),i("div",{staticStyle:{height:"15px"}}),i("q-btn",{staticClass:"full-width",attrs:{outline:"outline",color:"green"},on:{click:function(e){t.$e.$emit("openSocialModal")}}},[t._v("Get Invite Link")])],1)],1)]),i("div",{staticClass:"row",staticStyle:{"align-items":"stretch"}},[i("div",{staticClass:"col-xs-12 col-sm-6 col-md-12"},[i("q-card",{staticClass:"animate-scale relative-position"},[i("div",{staticClass:"light-paragraph text-center"},[t._v("Profile")]),i("table",{staticClass:"q-table",staticStyle:{width:"100%"}},[i("tbody",[i("tr",[i("td",[i("img",{staticClass:"tokenimg",attrs:{src:t.thisUser.image}}),i("div",{staticClass:"ellipsis inline",staticStyle:{"max-width":"220px"}},[t._v(t._s(t.thisUser.username))])]),i("td")])])]),i("div",{staticStyle:{"padding-left":"5px"}},[t.thisUser.tagline?i("p",{staticClass:"text-truncate"},[t._v(t._s(t.thisUser.tagline))]):i("p",{staticClass:"light-paragraph text-truncate"},[t._v("No tagline set...")])]),i("q-btn",{staticClass:"full-width",attrs:{outline:"outline",color:"blue"},on:{click:function(e){t.$e.$emit("openProfileEditModal")}}},[t._v("Update profile")])],1)],1),i("div",{staticClass:"col-xs-12 col-sm-6 col-md-12"},[t.thisUser.team?i("q-card",{staticClass:"animate-scale relative-position"},[i("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[i("q-icon",{attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.team)}}})],1),i("div",{staticClass:"light-paragraph text-center"},[t._v("Team")]),i("table",{staticClass:"q-table reactive",staticStyle:{width:"100%","margin-top":"10px"}},[i("tbody",[i("tr",{staticClass:"cursor-pointer",on:{click:function(e){t.$router.push({name:"Team",params:{teamname:t.thisUser.team.name}})}}},[i("td",[i("img",{staticClass:"tokenimg",attrs:{src:t.thisUser.team.image}})]),i("td",[t._v(t._s(t.thisUser.team.name))])])])])],1):t._e()],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-sm-6 col-md-12"},[i("q-card",{staticClass:"animate-scale relative-position"},[i("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[i("q-icon",{staticClass:"infobtn",attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.wallet)}}})],1),i("p",{staticClass:"light-paragraph text-center"},[t._v("Wallet")]),i("table",{staticClass:"q-table reactive",staticStyle:{width:"100%"}},t._l(t.thisUser.wallet.tokens,function(e){return i("tbody",{key:e.id},[i("tr",{staticClass:"tokenlist cursor-pointer"},[i("td",[i("img",{staticClass:"tokenimg",attrs:{src:e.tokenType.image}})]),i("td",[t._v(t._s(e.tokenType.name))]),i("td",[t._v(t._s(e.balance.toFixed(4)))]),i("td")])])}))],1)],1),i("div",{staticClass:"col-xs-12 col-sm-6 col-md-12"},[i("div",[i("q-card",{staticClass:"animate-scale relative-position"},[i("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[i("q-icon",{staticClass:"infobtn",attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.wallet)}}})],1),i("p",{staticClass:"light-paragraph text-center"},[t._v("Inventory")]),i("table",{staticClass:"q-table reactive",staticStyle:{width:"100%"}},[i("tbody",[i("tr",{staticClass:"tokenlist cursor-pointer"},[i("td",[i("img",{staticClass:"tokenimg",attrs:{src:"https://assets.boid.com/images/winprizes.svg"}})]),i("td",[t._v("Boid Items")])])])])],1)],1)])])])])]):t._e(),i("div",{staticClass:"col-md-8 col-lg-9 col-xl-8"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t.authenticated?i("q-card",{staticClass:"animate-scale relative-position"},[i("p",{staticClass:"light-paragraph text-center"},[t._v("My Devices"),i("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[i("q-icon",{staticClass:"infobtn",attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.devices)}}})],1)],1),t._l(t.devices,function(e,a){return i("q-list",{key:e.id},[t.adBlock?i("q-item",{staticClass:"relative-position bg-red",staticStyle:{height:"80px"},attrs:{color:"red"}},[i("h5",{staticClass:"text-white"},[t._v("Disable AdBlock and refresh to continue")])]):i("q-item",{staticClass:"relative-position",staticStyle:{"padding-bottom":"30px"}},[i("q-item-side",[i("q-icon",{attrs:{name:t.parseDevice.icon(e),color:t.parseDevice.color(e)}})],1),i("q-item-main",[i("q-item-tile",{staticStyle:{"user-select":"none"},attrs:{label:"label"}},[t._v(t._s(e.name))]),i("q-item-tile",{attrs:{sublabel:"sublabel"}},[t._v(t._s(e.status))])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.browserDeviceToggle&&"BROWSER"==e.type,expression:"browserDeviceToggle && device.type=='BROWSER'"}],staticClass:"absolute",staticStyle:{width:"190px",height:"50px",left:"180px","padding-top":"8px"}},[i("q-tooltip",[t._v("CPU Usage")]),i("div",{staticClass:"relative-position float-left"},[i("q-btn",{staticClass:"on-left",staticStyle:{"margin-right":"20px"},attrs:{small:"small",round:"round"},on:{click:function(e){t.$root.$emit("browserDeviceThrottle",t.ch.throttle+=.1)}}},[t._v("-")]),t.browserDeviceToggle&&"BROWSER"==e.type?i("h6",{staticClass:"absolute-center text-black",staticStyle:{"margin-top":"3px",width:"35px"}},[t._v(t._s(t.throttlePercent))]):t._e(),i("q-btn",{staticStyle:{"margin-left":"35px"},attrs:{small:"small",round:"round"},on:{click:function(e){t.$root.$emit("browserDeviceThrottle",t.ch.throttle-=.1)}}},[t._v("+")])],1)],1),i("div",{staticClass:"relative-position",staticStyle:{width:"80px"}},[i("q-tooltip",[t._v("Hashes Per Second")]),t.browserDeviceToggle&&"BROWSER"==e.type?i("h5",{staticClass:"inline float-right text-green-4",staticStyle:{"margin-top":"0px","margin-bottom":"0px"}},[t._v(t._s(t.ch.hps))]):t._e()],1),"BROWSER"==e.type?i("div"):t._e(),t.browserDeviceToggle&&!t.ch.accepted?i("q-spinner-grid",{staticClass:"inline on-right",staticStyle:{"margin-right":"10px"},attrs:{size:30,color:"grey-4"}}):t._e(),t.browserDeviceToggle&&t.ch.accepted?i("q-spinner-cube",{staticClass:"inline on-right",staticStyle:{"margin-right":"10px"},attrs:{size:30,color:"yellow"}}):t._e(),e.toggle?i("q-item-side",{attrs:{right:"right"}}):t._e(),t.browserDeviceToggle&&"BROWSER"==e.type?i("q-progress",{staticClass:"absolute-bottom",staticStyle:{bottom:"10px"},attrs:{indeterminate:t.ch.found,color:"yellow"}}):t._e(),"BROWSER"===e.type?i("q-toggle",{attrs:{color:"yellow"},model:{value:t.browserDeviceToggle,callback:function(e){t.browserDeviceToggle=e},expression:"browserDeviceToggle"}}):t._e(),i("q-inner-loading",{attrs:{visible:e.pending}},[i("q-spinner",{attrs:{size:"30px",color:"blue"}})],1)],1)],1)}),t.thisUser.devices.length>0?i("q-btn",{staticClass:"full-width",staticStyle:{"margin-top":"20px"},attrs:{color:"green"},on:{click:function(e){t.$root.$emit("modal.addDevice",!0)}}},[t._v("add more Devices"),i("q-icon",{staticClass:"on-right",attrs:{name:"add"}})],1):i("q-btn",{staticClass:"full-width",staticStyle:{"margin-top":"20px"},attrs:{color:"green"},on:{click:function(e){t.$root.$emit("modal.addDevice",!0)}}},[t._v("add your first device"),i("q-icon",{staticClass:"on-right",attrs:{name:"add"}})],1)],2):t._e(),i("div",{staticClass:"full-width"},[i("leaderboard",{staticClass:"full-width",attrs:{leaderboard:t.leaderboard,teamLeaderboard:t.teamLeaderboard}})],1)],1)])])])])},staticRenderFns:[]};e.a=a}});
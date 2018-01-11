webpackJsonp([0,1],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Device_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4303a6e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Device_vue__ = __webpack_require__(275);
function injectStyle (ssrContext) {
  __webpack_require__(272)
}
var normalizeComponent = __webpack_require__(19)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c4303a6e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Device_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4303a6e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Device_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc10c8ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(287);
function injectStyle (ssrContext) {
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(19)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc10c8ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  icon: function icon(device) {
    if (device.type === 'BROWSER') return 'tab';else if (device.type === 'DESKTOP') return 'flash_on';else if (device.type === 'MOBILE') return 'phone_android';else return 'add';
  },
  color: function color(device) {
    if (device.status === 'OFFLINE') return 'grey';else if (device.status === 'ONLINE') return 'blue';else if (device.status === 'ACTIVE') return 'green';
  }
});

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(265)("4a2b2840", content, true);

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(264)(undefined);
// imports


// module
exports.push([module.i, ".layout-padding[data-v-c4303a6e]{max-width:700px}", ""]);

// exports


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_lib_parseDevice__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quasar__ = __webpack_require__(12);







/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            parseDevice: __WEBPACK_IMPORTED_MODULE_2_src_lib_parseDevice__["a" /* default */],
            thisDevice: {
                name: "",
                power: "",
                status: "",
                id: "",
                meta: {},
                icon: "",
                type: ""

            },
            pending: false,
            toggle: false
        };
    },

    computed: {},
    methods: {},
    props: ["thisUser", "authenticated", "api", "deviceId", "thisModal", "ch"],
    mounted: function mounted() {},

    watch: {
        deviceId: function () {
            var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(value) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!value) {
                                    _context.next = 8;
                                    break;
                                }

                                this.pending = true;
                                _context.next = 4;
                                return this.api.device.get(this.deviceId);

                            case 4:
                                this.thisDevice = _context.sent;

                                if (this.thisDevice.status == "ACTIVE") this.toggle = true;
                                this.thisDevice.icon = __WEBPACK_IMPORTED_MODULE_2_src_lib_parseDevice__["a" /* default */].icon(this.thisDevice);
                                this.pending = false;

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function deviceId(_x) {
                return _ref.apply(this, arguments);
            }

            return deviceId;
        }(),
        toggle: function () {
            var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(value) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log(value);
                                this.$e.$emit('ch.toggle', value);

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function toggle(_x2) {
                return _ref2.apply(this, arguments);
            }

            return toggle;
        }()
    }
});

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-transition',{attrs:{"appear":"appear","enter":"fadeIn","leave":"fadeOut"}},[_c('div',{staticClass:"layout-padding relative-position"},[_c('h5',{staticClass:"text-center"},[_vm._v("Configure Device")]),_c('p',{staticClass:"text-center inline"},[_vm._v(_vm._s(_vm.thisDevice.name)),_c('q-icon',{staticClass:"on-right",attrs:{"name":_vm.thisDevice.icon,"color":_vm.parseDevice.color(_vm.thisDevice)}})],1),_c('q-alert',{attrs:{"color":"green","icon":"info","enter":"fadeIn","leave":"fadeOut","dismissible":"dismissible"}},[_c('p',[_vm._v("You can manaully configure the secure applications which Boid will run on this device.")])]),_c('p',{staticClass:"light-paragraph text-center"}),_c('div',{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[_c('q-btn',{attrs:{"color":"blue"},on:{"click":function($event){_vm.thisModal.close()}}},[_vm._v("finished")])],1),_c('q-inner-loading',{attrs:{"visible":_vm.pending}},[_c('q-spinner-ball',{attrs:{"size":"70px","color":"blue"}})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(265)("1ad68d29", content, true);

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(264)(undefined);
// imports


// module
exports.push([module.i, ".q-card{padding:10px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.tokenimg{width:50px}.tokenlist:hover{background-color:#f5f5f5}.hovericon:hover{color:#2196f3}.hovericon{color:#bdbdbd}.power{color:#fff176}.infobtn{color:#9e9e9e;font-size:15px;right:10px}.infobtn:hover{color:#4caf50}.q-btn-round.q-btn-small{width:30px;height:30px}", ""]);

// exports


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Device__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_lib_parseDevice__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quasar__ = __webpack_require__(12);




var _methods;





var info = {
  wallet: {
    heading: "Your Wallet",
    body: "Tokens and coins which you earn from your team will show up in your wallet.\n          To earn more, you need to increase your Power by running Boid on more devices or inviting more users.\n          During the Alpha, only BOIDs are generated."
  },
  power: {
    heading: "Boid Power",
    body: "Your Boid Power is your score that shows how much influence you have on Boid.  The higher your Power,\n          the more you will earn and the higher you will climb in the leaderboards. When you invite others, you\n          earn some power when they run the app."
  },
  devices: {
    heading: "Your Devices",
    body: "When you install the Boid application on multiple devices (desktops, laptops, phones), \n          you will be able to manage your devices here."
  },
  team: {
    heading: "Your Team",
    body: "Your power generated goes towards your Team, in eachange, each team will distribute exclusive rewards. \n          You are automatically on the team of the user who has invited you."
  },
  social: {
    heading: "Social",
    body: "When users join Boid using your invite link you will receive a small percentage of bonus power based\n          on their contributions. Your Invite link changes if you change your username."
  }

};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "index",
  data: function data() {
    return {
      openURL: __WEBPACK_IMPORTED_MODULE_5_quasar__["openURL"],
      info: info,
      currentDevice: null,
      devices: [],
      parseDevice: __WEBPACK_IMPORTED_MODULE_4_src_lib_parseDevice__["a" /* default */],
      leaderboard: [],
      teamLeaderboard: [],
      pollLeaderboard: null
    };
  },

  computed: {
    userPower: function userPower() {
      return 'lul';
    }
  },
  methods: (_methods = {
    updateLeaderboards: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.leaderboard.global();

              case 2:
                this.leaderboard = _context.sent;
                _context.next = 5;
                return this.api.leaderboard.teams();

              case 5:
                this.teamLeaderboard = _context.sent;

                console.log('updateLeaderboard', this.leaderboard);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateLeaderboards() {
        return _ref.apply(this, arguments);
      }

      return updateLeaderboards;
    }(),
    toggleDevice: function toggleDevice(device) {
      console.log(device);
    },
    configDevice: function configDevice(deviceId) {
      this.currentDevice = deviceId;
      this.$refs.deviceModal.open();
    }
  }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, "toggleDevice", function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(device) {
      var result;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('TOGGLE STATE', device.toggle);
              _context2.prev = 1;

              if (device.toggle) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return this.api.device.updateStatus({
                deviceId: device.id,
                status: 'ACTIVE'
              });

            case 5:
              result = _context2.sent;
              _context2.next = 12;
              break;

            case 8:
              console.log('online');
              _context2.next = 11;
              return this.api.device.updateStatus({
                deviceId: device.id,
                status: 'ONLINE'
              });

            case 11:
              result = _context2.sent;

            case 12:
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);

              console.log(_context2.t0);

            case 17:
              _context2.prev = 17;

              console.log(result);
              this.$e.$emit('refreshUser');
              this.$e.$emit('ch.toggle', device.toggle);
              return _context2.finish(17);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 14, 17, 22]]);
    }));

    function toggleDevice(_x) {
      return _ref2.apply(this, arguments);
    }

    return toggleDevice;
  }()), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, "init", function init() {
    this.devices = this.thisUser.devices;
  }), _methods),
  mounted: function mounted() {
    this.init();
    this.updateLeaderboards();
    setInterval(this.updateLeaderboard, 200000);
  },

  watch: {
    thisUser: function thisUser() {
      this.init();
    },
    adBlock: function adBlock() {
      console.log('here we are');
    }
  },
  props: ["thisUser", "authenticated", "api", "ch", "adBlock", "authModal"],
  components: {
    device: __WEBPACK_IMPORTED_MODULE_3__Device__["default"]
  }
});

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-padding"},[(_vm.authenticated)?_c('big',{staticClass:"thin-paragraph"},[_vm._v("User Dashboard")]):_c('big',{staticClass:"thin-paragraph"},[_vm._v("Gloabal Leaderboards")]),_c('br'),_c('br'),_c('div',{staticClass:"row gutter justify-center"},[(_vm.authenticated)?_c('div',{staticClass:"col-auto",staticStyle:{"max-width":"270px"}},[_c('q-card',{staticClass:"animate-scale relative-position"},[_c('q-btn',{staticClass:"absolute infobtn",attrs:{"round":"round","small":"small","flat":"flat"}},[_c('q-icon',{attrs:{"name":"help_outline"},on:{"click":function($event){_vm.$e.$emit('showInfoModal',_vm.info.power)}}})],1),_c('p',{staticClass:"light-paragraph text-center"},[_vm._v("Power Rating")]),_c('div',{staticStyle:{"margin":"auto"}},[_c('p',{staticClass:"text-center"},[_vm._v(_vm._s(parseInt(_vm.thisUser.powerRatings[0].power))),_c('q-icon',{staticClass:"text-center",staticStyle:{"font-size":"50px"},attrs:{"color":"yellow","name":"flash_on"}}),_c('small',{staticClass:"block light-paragraph small"},[_vm._v("Devices: "+_vm._s(parseInt(_vm.thisUser.powerRatings[0].meta.devices))),_c('q-icon',{attrs:{"name":"flash_on","color":"yellow"}})],1),_c('small',{staticClass:"block light-paragraph"},[_vm._v("Social: "+_vm._s(parseInt(_vm.thisUser.powerRatings[0].meta.social))),_c('q-icon',{attrs:{"name":"flash_on","color":"yellow"}})],1)],1)])],1),_c('q-card',{staticClass:"animate-scale relative-position"},[_c('q-btn',{staticClass:"absolute infobtn",attrs:{"round":"round","small":"small","flat":"flat"}},[_c('q-icon',{attrs:{"name":"help_outline"},on:{"click":function($event){_vm.$e.$emit('showInfoModal',_vm.info.social)}}})],1),_c('p',{staticClass:"light-paragraph text-center"},[_vm._v("Social")]),_c('p',[_vm._v("Users Invited: "+_vm._s(_vm.thisUser.invited.length))]),_c('p',[_vm._v("Power from Invited Users: "+_vm._s(parseInt(_vm.thisUser.powerRatings[0].meta.social)))]),_c('q-btn',{staticClass:"full-width",attrs:{"color":"green"},on:{"click":function($event){_vm.openURL(_vm.thisUser.team.meta.social.telegram)}}},[_vm._v("Get Invite Link")])],1),_c('q-card',{staticClass:"animate-scale relative-position"},[_c('div',{staticClass:"light-paragraph text-center"},[_vm._v("My Profile")]),_c('table',{staticClass:"q-table",staticStyle:{"width":"100%"}},[_c('tbody',[_c('tr',[_c('td',[_c('img',{staticClass:"tokenimg",attrs:{"src":_vm.thisUser.image}})]),_c('td',[_vm._v(_vm._s(_vm.thisUser.username))])])])]),_c('div',{staticStyle:{"padding-left":"5px"}},[(!_vm.thisUser.tagline)?_c('p',{staticClass:"light-paragraph"},[_vm._v("No tagline set...")]):_c('p',[_vm._v(_vm._s(_vm.thisUser.tagline))])]),_c('q-btn',{staticClass:"full-width",attrs:{"color":"blue"},on:{"click":function($event){_vm.$e.$emit('openProfileEditModal')}}},[_vm._v("Update profile")])],1),_c('q-card',{staticClass:"animate-scale relative-position"},[_c('q-btn',{staticClass:"absolute infobtn",attrs:{"round":"round","small":"small","flat":"flat"}},[_c('q-icon',{attrs:{"name":"help_outline"},on:{"click":function($event){_vm.$e.$emit('showInfoModal',_vm.info.team)}}})],1),_c('div',{staticClass:"light-paragraph text-center"},[_vm._v("My Team")]),_c('table',{staticClass:"q-table",staticStyle:{"width":"100%"}},[_c('tbody',[_c('tr',[_c('td',[_c('img',{staticClass:"tokenimg",attrs:{"src":_vm.thisUser.team.image}})]),_c('td',[_vm._v(_vm._s(_vm.thisUser.team.name))])])])]),_c('q-btn',{staticClass:"full-width",attrs:{"color":"blue","outline":"outline"},on:{"click":function($event){_vm.openURL(_vm.thisUser.team.meta.social.telegram)}}},[_c('img',{staticClass:"on-left",staticStyle:{"width":"25px"},attrs:{"src":"https://telegram.org/img/t_logo.png"}}),_vm._v("Join Telegram Chat")])],1),_c('q-card',{staticClass:"animate-scale relative-position"},[_c('q-btn',{staticClass:"absolute infobtn",attrs:{"round":"round","small":"small","flat":"flat"}},[_c('q-icon',{staticClass:"infobtn",attrs:{"name":"help_outline"},on:{"click":function($event){_vm.$e.$emit('showInfoModal',_vm.info.wallet)}}})],1),_c('p',{staticClass:"light-paragraph text-center"},[_vm._v("Wallet")]),_c('table',{staticClass:"q-table",staticStyle:{"width":"100%"}},_vm._l((_vm.thisUser.wallet.tokens),function(token){return _c('tbody',{key:token.id},[_c('tr',{staticClass:"tokenlist cursor-pointer"},[_c('td',[_c('img',{staticClass:"tokenimg",attrs:{"src":token.tokenType.image}})]),_c('td',[_vm._v(_vm._s(token.tokenType.name))]),_c('td',[_vm._v(_vm._s(token.balance.toFixed(2)))]),_c('td')])])}))],1),_c('q-card',{staticClass:"animate-scale"},[_c('p',{staticClass:"light-paragraph text-center"},[_vm._v("Inventory")]),_c('p',{staticClass:"text-centered text-grey"},[_vm._v("Inventory Items are coming soon...")])])],1):_vm._e(),_c('div',{staticClass:"col"},[(_vm.authenticated)?_c('q-card',{staticClass:"animate-scale relative-position"},[_c('p',{staticClass:"light-paragraph text-center"},[_vm._v("My Devices"),_c('q-btn',{staticClass:"absolute infobtn",attrs:{"round":"round","small":"small","flat":"flat"}},[_c('q-icon',{staticClass:"infobtn",attrs:{"name":"help_outline"},on:{"click":function($event){_vm.$e.$emit('showInfoModal',_vm.info.devices)}}})],1)],1),_vm._l((_vm.devices),function(device,index){return _c('q-list',{key:device.id},[(!_vm.adBlock && device.type == 'BROWSER')?_c('q-item',{staticClass:"relative-position"},[_c('q-item-side',[_c('q-icon',{attrs:{"name":_vm.parseDevice.icon(device),"color":_vm.parseDevice.color(device)}})],1),_c('q-item-main',[_c('q-item-tile',{staticStyle:{"user-select":"none"},attrs:{"label":"label"}},[_vm._v(_vm._s(device.name))]),_c('q-item-tile',{attrs:{"sublabel":"sublabel"}},[_vm._v(_vm._s(device.status))])],1),(device.toggle)?_c('h6',{staticClass:"inline float-right text-yellow-6"},[_vm._v(_vm._s(_vm.ch.hps))]):_vm._e(),(device.toggle)?_c('q-spinner-grid',{staticClass:"inline on-right",attrs:{"size":20,"color":"yellow-4"}}):_vm._e(),_c('q-item-side',{attrs:{"right":"right"}},[_c('q-btn',{staticClass:"on-left hovericon",attrs:{"round":"round","flat":"flat"},on:{"click":function($event){_vm.configDevice(device.id)}}},[_c('q-icon',{attrs:{"name":"settings","color":""}})],1)],1),_c('q-toggle',{attrs:{"color":"yellow"},on:{"blur":function($event){device.pending = true,_vm.toggleDevice(device)}},model:{value:(device.toggle),callback:function ($$v) {_vm.$set(device, "toggle", $$v)},expression:"device.toggle"}}),_c('q-inner-loading',{attrs:{"visible":device.pending}},[_c('q-spinner',{attrs:{"size":"30px","color":"blue"}})],1)],1):_c('q-item',{staticClass:"relative-position bg-red",staticStyle:{"height":"80px"},attrs:{"color":"red"}},[_c('h5',{staticClass:"text-white"},[_vm._v("Disable AdBlock and refresh to continue")])])],1)}),_c('q-btn',{staticClass:"full-width",attrs:{"disabled":"disabled","small":"small","color":"green"}},[_vm._v("add more Devices"),_c('q-icon',{staticClass:"on-right",attrs:{"name":"add"}})],1)],2):_vm._e(),_c('q-card',{staticClass:"animate-scale"},[_c('p',{staticClass:"light-paragraph text-center"},[_vm._v("Top Users")]),_c('table',{staticClass:"q-table horizontal-separator",staticStyle:{"width":"100%"}},[_c('thead',[_c('tr',[_c('th'),_c('th',[_vm._v("Username")]),_c('th',[_vm._v("Team")]),_c('th',[_vm._v("Power"),_c('q-icon',{attrs:{"name":"flash_on","color":"yellow"}})],1),_c('th',[_vm._v("Rank")])])]),_vm._l((this.leaderboard),function(user,index){return _c('tbody',{key:user.id},[_c('tr',[_c('td',[_c('img',{staticClass:"avatar",attrs:{"src":user.image}})]),_c('td',{attrs:{"data-th":"Username"}},[_vm._v(_vm._s(user.username))]),_c('td',{attrs:{"data-th":"Team"}},[_vm._v(_vm._s(user.team.name))]),_c('td',{attrs:{"data-th":"Power"}},[_vm._v(_vm._s(parseInt(user.power)))]),_c('td',[_vm._v(_vm._s(index + 1))])])])})],2)]),_c('q-card',{staticClass:"animate-scale"},[_c('p',{staticClass:"light-paragraph text-center"},[_vm._v("Top Teams")]),_c('table',{staticClass:"q-table horizontal-separator",staticStyle:{"width":"100%"}},[_c('thead',[_c('tr',[_c('th'),_c('th'),_c('th',[_vm._v("Leader")]),_c('th',[_vm._v("Power"),_c('q-icon',{attrs:{"name":"flash_on","color":"yellow"}})],1),_c('th',[_vm._v("Rank")])])]),_vm._l((this.teamLeaderboard),function(team,index){return _c('tbody',{key:team.id},[_c('tr',[_c('td',[_c('img',{staticClass:"avatar",attrs:{"src":team.image}})]),_c('td',{attrs:{"data-th":"Username"}},[_vm._v(_vm._s(team.name))]),_c('td',{attrs:{"data-th":"Leader"}},[_vm._v("$10. 11")]),_c('td',{attrs:{"data-th":"Power"}},[_vm._v(_vm._s(parseInt(team.power)))]),_c('td',[_vm._v(_vm._s(index + 1))])])])})],2)]),(!_vm.authenticated)?_c('div',{staticClass:"relative-position"},[_c('div',{staticClass:"absolute-center"},[_c('br'),_c('br'),_c('br'),_c('br'),_c('q-btn',{staticClass:"on-left",staticStyle:{"font-size":"30px"},attrs:{"big":"big","color":"green"},on:{"click":function($event){_vm.$e.$emit('openAuthModal')}}},[_vm._v("Join")]),_c('q-btn',{staticStyle:{"font-size":"30px"},attrs:{"big":"big","color":"blue"},on:{"click":function($event){_vm.openURL('https://www.boid.com')}}},[_vm._v("Learn More")])],1)]):_vm._e()],1)]),_c('q-modal',{ref:"deviceModal",on:{"close":function($event){_vm.currentDevice = null}}},[_c('device',{attrs:{"deviceId":_vm.currentDevice,"api":_vm.api,"ch":_vm.ch,"thisModal":_vm.$refs.deviceModal}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
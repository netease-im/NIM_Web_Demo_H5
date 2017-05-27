webpackJsonp([4],{

/***/ 291:
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/SysMsgs.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-rewriter?{"id":"data-v-30d2f03f","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./SysMsgs.vue */ 389)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./SysMsgs.vue */ 365),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?{"id":"data-v-30d2f03f"}!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./SysMsgs.vue */ 377),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\web\\node\\nim-web-demo-h5\\src\\pages\\SysMsgs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SysMsgs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30d2f03f", Component.options)
  } else {
    hotAPI.reload("data-v-30d2f03f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 365:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/SysMsgs.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  mounted: function mounted() {
    this.$store.dispatch('markSysMsgRead');
    this.$store.dispatch('markCustomSysMsgRead');
  },
  updated: function updated() {
    this.$store.dispatch('markSysMsgRead');
    this.$store.dispatch('markCustomSysMsgRead');
  },
  data: function data() {
    return {
      sysType: 0 };
  },

  computed: {
    userInfos: function userInfos() {
      return this.$store.state.userInfos;
    },
    sysMsgs: function sysMsgs() {
      var _this = this;

      var sysMsgs = this.$store.state.sysMsgs.filter(function (msg) {
        switch (msg.type) {
          case 'addFriend':
            msg.showText = (msg.friend.alias || msg.friend.account) + ' \u6DFB\u52A0\u60A8\u4E3A\u597D\u53CB~';
            msg.avatar = _this.userInfos[msg.from].avatar;
            return true;
          case 'deleteFriend':
            msg.showText = msg.from + ' \u5C06\u60A8\u4ECE\u597D\u53CB\u4E2D\u5220\u9664';
            msg.avatar = _this.userInfos[msg.from].avatar;
            return false;
        }
        return false;
      });
      return sysMsgs;
    },
    customSysMsgs: function customSysMsgs() {
      var _this2 = this;

      var customSysMsgs = this.$store.state.customSysMsgs.filter(function (msg) {
        if (msg.scene === 'p2p') {
          var content = JSON.parse(msg.content);
          msg.showText = '' + content.content;
          msg.avatar = _this2.userInfos[msg.from].avatar;
          return msg;
        }
        return false;
      });
      return customSysMsgs;
    }
  },
  methods: {
    clearMsgs: function clearMsgs() {
      this.$store.dispatch('resetSysMsgs', {
        type: this.sysType
      });
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 366:
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?{"id":"data-v-30d2f03f","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SysMsgs.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.p-sysmsgs .u-list {\n    height: 100%;\n    overflow-y: scroll;\n}\n.p-sysmsgs p {\n    word-wrap: normal;\n    word-break: break-all;\n    color: #333;\n}\n", "", {"version":3,"sources":["D:/web/node/nim-web-demo-h5/src/pages/SysMsgs.vue"],"names":[],"mappings":";AAiGE;IACE,aAAa;IACb,mBAAmB;CACpB;AACD;IACE,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;CACb","file":"SysMsgs.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-sysmsgs {\n  .u-list {\n    height: 100%;\n    overflow-y: scroll;\n  }\n  p {\n    word-wrap: normal;\n    word-break: break-all;\n    color: #333;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 377:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?{"id":"data-v-30d2f03f"}!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/SysMsgs.vue ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('button-tab', {
    staticClass: "m-tab-top",
    model: {
      value: (_vm.sysType),
      callback: function($$v) {
        _vm.sysType = $$v
      },
      expression: "sysType"
    }
  }, [_c('button-tab-item', {
    staticClass: "u-tab-top"
  }, [_vm._v("系统消息")]), _vm._v(" "), _c('button-tab-item', {
    staticClass: "u-tab-top"
  }, [_vm._v("自定义消息")])], 1), _vm._v(" "), _c('a', {
    slot: "left"
  }), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clearMsgs($event)
      }
    },
    slot: "right"
  }, [_vm._v("清空")])], 1), _vm._v(" "), _c('div', {
    staticClass: "m-article-main p-sysmsgs"
  }, [(_vm.sysType === 0) ? _c('group', {
    staticClass: "u-list"
  }, _vm._l((_vm.sysMsgs), function(msg) {
    return _c('cell', {
      key: msg.idServer,
      staticClass: "u-list-item",
      attrs: {
        "title": msg.showText,
        "value": msg.showTime
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "width": "24",
        "src": msg.avatar
      },
      slot: "icon"
    })])
  })) : _vm._e(), _vm._v(" "), (_vm.sysType === 1) ? _c('group', {
    staticClass: "u-list"
  }, _vm._l((_vm.customSysMsgs), function(msg, index) {
    return _c('cell', {
      key: msg.idServer,
      staticClass: "u-list-item",
      attrs: {
        "title": msg.showText,
        "value": msg.showTime
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "width": "24",
        "src": msg.avatar
      },
      slot: "icon"
    })])
  })) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30d2f03f", module.exports)
  }
}

/***/ }),

/***/ 389:
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?{"id":"data-v-30d2f03f","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SysMsgs.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-rewriter.js?{"id":"data-v-30d2f03f","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue */ 366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 5)("5f5c7c30", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-30d2f03f\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-30d2f03f\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SysMsgs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=4.js.map
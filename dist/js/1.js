webpackJsonp([1],{

/***/ 317:
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./src/pages/Chat.vue ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-5e047348","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./Chat.vue */ 486)
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-5e047348","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=1!./Chat.vue */ 485)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Chat.vue */ 407),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-5e047348"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Chat.vue */ 465),
  /* scopeId */
  "data-v-5e047348",
  /* cssModules */
  null
)
Component.options.__file = "D:\\Project\\javascript\\nim-web-demo-h5\\src\\pages\\Chat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Chat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e047348", Component.options)
  } else {
    hotAPI.reload("data-v-5e047348", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 357:
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./src/configs/emoji.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(/*! ./index */ 6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojiBaseUrl = "http://yx-web.nosdn.127.net/webdoc/h5/emoji";

var emojiList = {
  "emoji": {
    "[大笑]": { file: "emoji_0.png" }, "[可爱]": { file: "emoji_01.png" }, "[色]": { file: "emoji_02.png" }, "[嘘]": { file: "emoji_03.png" }, "[亲]": { file: "emoji_04.png" }, "[呆]": { file: "emoji_05.png" }, "[口水]": { file: "emoji_06.png" }, "[汗]": { file: "emoji_145.png" }, "[呲牙]": { file: "emoji_07.png" }, "[鬼脸]": { file: "emoji_08.png" }, "[害羞]": { file: "emoji_09.png" }, "[偷笑]": { file: "emoji_10.png" }, "[调皮]": { file: "emoji_11.png" }, "[可怜]": { file: "emoji_12.png" }, "[敲]": { file: "emoji_13.png" }, "[惊讶]": { file: "emoji_14.png" }, "[流感]": { file: "emoji_15.png" }, "[委屈]": { file: "emoji_16.png" }, "[流泪]": { file: "emoji_17.png" }, "[嚎哭]": { file: "emoji_18.png" }, "[惊恐]": { file: "emoji_19.png" }, "[怒]": { file: "emoji_20.png" }, "[酷]": { file: "emoji_21.png" }, "[不说]": { file: "emoji_22.png" }, "[鄙视]": { file: "emoji_23.png" }, "[阿弥陀佛]": { file: "emoji_24.png" }, "[奸笑]": { file: "emoji_25.png" }, "[睡着]": { file: "emoji_26.png" }, "[口罩]": { file: "emoji_27.png" }, "[努力]": { file: "emoji_28.png" }, "[抠鼻孔]": { file: "emoji_29.png" }, "[疑问]": { file: "emoji_30.png" }, "[怒骂]": { file: "emoji_31.png" }, "[晕]": { file: "emoji_32.png" }, "[呕吐]": { file: "emoji_33.png" }, "[拜一拜]": { file: "emoji_160.png" }, "[惊喜]": { file: "emoji_161.png" }, "[流汗]": { file: "emoji_162.png" }, "[卖萌]": { file: "emoji_163.png" }, "[默契眨眼]": { file: "emoji_164.png" }, "[烧香拜佛]": { file: "emoji_165.png" }, "[晚安]": { file: "emoji_166.png" }, "[强]": { file: "emoji_34.png" }, "[弱]": { file: "emoji_35.png" }, "[OK]": { file: "emoji_36.png" }, "[拳头]": { file: "emoji_37.png" }, "[胜利]": { file: "emoji_38.png" }, "[鼓掌]": { file: "emoji_39.png" }, "[握手]": { file: "emoji_200.png" }, "[发怒]": { file: "emoji_40.png" }, "[骷髅]": { file: "emoji_41.png" }, "[便便]": { file: "emoji_42.png" }, "[火]": { file: "emoji_43.png" }, "[溜]": { file: "emoji_44.png" }, "[爱心]": { file: "emoji_45.png" }, "[心碎]": { file: "emoji_46.png" }, "[钟情]": { file: "emoji_47.png" }, "[唇]": { file: "emoji_48.png" }, "[戒指]": { file: "emoji_49.png" }, "[钻石]": { file: "emoji_50.png" }, "[太阳]": { file: "emoji_51.png" }, "[有时晴]": { file: "emoji_52.png" }, "[多云]": { file: "emoji_53.png" }, "[雷]": { file: "emoji_54.png" }, "[雨]": { file: "emoji_55.png" }, "[雪花]": { file: "emoji_56.png" }, "[爱人]": { file: "emoji_57.png" }, "[帽子]": { file: "emoji_58.png" }, "[皇冠]": { file: "emoji_59.png" }, "[篮球]": { file: "emoji_60.png" }, "[足球]": { file: "emoji_61.png" }, "[垒球]": { file: "emoji_62.png" }, "[网球]": { file: "emoji_63.png" }, "[台球]": { file: "emoji_64.png" }, "[咖啡]": { file: "emoji_65.png" }, "[啤酒]": { file: "emoji_66.png" }, "[干杯]": { file: "emoji_67.png" }, "[柠檬汁]": { file: "emoji_68.png" }, "[餐具]": { file: "emoji_69.png" }, "[汉堡]": { file: "emoji_70.png" }, "[鸡腿]": { file: "emoji_71.png" }, "[面条]": { file: "emoji_72.png" }, "[冰淇淋]": { file: "emoji_73.png" }, "[沙冰]": { file: "emoji_74.png" }, "[生日蛋糕]": { file: "emoji_75.png" }, "[蛋糕]": { file: "emoji_76.png" }, "[糖果]": { file: "emoji_77.png" }, "[葡萄]": { file: "emoji_78.png" }, "[西瓜]": { file: "emoji_79.png" }, "[光碟]": { file: "emoji_80.png" }, "[手机]": { file: "emoji_81.png" }, "[电话]": { file: "emoji_82.png" }, "[电视]": { file: "emoji_83.png" }, "[声音开启]": { file: "emoji_84.png" }, "[声音关闭]": { file: "emoji_85.png" }, "[铃铛]": { file: "emoji_86.png" }, "[锁头]": { file: "emoji_87.png" }, "[放大镜]": { file: "emoji_88.png" }, "[灯泡]": { file: "emoji_89.png" }, "[锤头]": { file: "emoji_90.png" }, "[烟]": { file: "emoji_91.png" }, "[炸弹]": { file: "emoji_92.png" }, "[枪]": { file: "emoji_93.png" }, "[刀]": { file: "emoji_94.png" }, "[药]": { file: "emoji_95.png" }, "[打针]": { file: "emoji_96.png" }, "[钱袋]": { file: "emoji_97.png" }, "[钞票]": { file: "emoji_98.png" }, "[银行卡]": { file: "emoji_99.png" }, "[手柄]": { file: "emoji_100.png" }, "[麻将]": { file: "emoji_101.png" }, "[调色板]": { file: "emoji_102.png" }, "[电影]": { file: "emoji_103.png" }, "[麦克风]": { file: "emoji_104.png" }, "[耳机]": { file: "emoji_105.png" }, "[音乐]": { file: "emoji_106.png" }, "[吉他]": { file: "emoji_107.png" }, "[火箭]": { file: "emoji_108.png" }, "[飞机]": { file: "emoji_109.png" }, "[火车]": { file: "emoji_110.png" }, "[公交]": { file: "emoji_111.png" }, "[轿车]": { file: "emoji_112.png" }, "[出租车]": { file: "emoji_113.png" }, "[警车]": { file: "emoji_114.png" }, "[自行车]": { file: "emoji_115.png" }
  }
};

for (var emoji in emojiList) {
  var emojiItem = emojiList[emoji];
  for (var key in emojiItem) {
    var item = emojiItem[key];
    item.img = emojiBaseUrl + "/" + emoji + "/" + item.file;
  }
}

var pinupList = {
  'ajmd': {},
  'xxy': {},
  'lt': {}
};

for (var i = 1; i <= 48; i++) {
  var _key = 'ajmd0' + (i >= 10 ? i : '0' + i);
  pinupList['ajmd'][_key] = { file: _key + '.png' };
}
for (var _i = 1; _i <= 40; _i++) {
  var _key2 = 'xxy0' + (_i >= 10 ? _i : '0' + _i);
  pinupList['xxy'][_key2] = { file: _key2 + '.png' };
}
for (var _i2 = 1; _i2 <= 20; _i2++) {
  var _key3 = 'lt0' + (_i2 >= 10 ? _i2 : '0' + _i2);
  pinupList['lt'][_key3] = { file: _key3 + '.png' };
}

for (var _emoji in pinupList) {
  var _emojiItem = pinupList[_emoji];
  for (var _key4 in _emojiItem) {
    var _item = _emojiItem[_key4];
    _item.img = emojiBaseUrl + "/" + _emoji + "/" + _item.file;
  }
}

exports.default = {
  emojiList: emojiList,
  pinupList: pinupList
};
module.exports = exports["default"];

/***/ }),

/***/ 358:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatItem.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 8);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../../utils */ 16);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../../configs */ 6);

var _configs2 = _interopRequireDefault(_configs);

var _emoji = __webpack_require__(/*! ../../configs/emoji */ 357);

var _emoji2 = _interopRequireDefault(_emoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    type: String,
    rawMsg: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    userInfos: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    myInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isRobot: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    isHistory: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      msg: '',
      isFullImgShow: false,
      currentAudio: null
    };
  },

  computed: {
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    },
    teamMsgUnRead: function teamMsgUnRead() {
      var _this = this;

      var obj = !this.isHistory && this.msg.needMsgReceipt && this.msg.flow === 'out' && this.$store.state.teamMsgReads.find(function (item) {
        return item.idServer === _this.msg.idServer;
      });

      return obj ? parseInt(obj.unread) : -1;
    }
  },
  beforeMount: function beforeMount() {
    var item = (0, _assign2.default)({}, this.rawMsg);

    if (this.type === 'session') {

      if (item.flow === 'in') {
        if (item.type === 'robot' && item.content && item.content.msgOut) {
          var robotAccid = item.content.robotAccid;
          item.avatar = this.robotInfos[robotAccid].avatar;
          item.isRobot = true;
          item.link = '#/namecard/' + robotAccid;
        } else if (item.from !== this.$store.state.userUID) {
          item.avatar = this.userInfos[item.from] && this.userInfos[item.from].avatar || _configs2.default.defaultUserIcon;
          item.link = '#/namecard/' + item.from;
        } else {
          item.avatar = this.myInfo.avatar;
        }
      } else if (item.flow === 'out') {
        item.avatar = this.myInfo.avatar;
      }
    } else {
      item.showTime = _utils2.default.formatDate(item.time);
    }
    if (item.type === 'timeTag') {
      item.showText = item.text;
    } else if (item.type === 'text') {
      item.showText = _utils2.default.escape(item.text);
      if (/\[[^\]]+\]/.test(item.showText)) {
        var emojiItems = item.showText.match(/\[[^\]]+\]/g);
        emojiItems.forEach(function (text) {
          var emojiCnt = _emoji2.default.emojiList.emoji;
          if (emojiCnt[text]) {
            item.showText = item.showText.replace(text, '<img class="emoji-small" src="' + emojiCnt[text].img + '">');
          }
        });
      }
    } else if (item.type === 'custom') {
      var content = JSON.parse(item.content);

      if (content.type === 1) {
        var data = content.data;
        var resourceUrl = _configs2.default.resourceUrl;

        item.type = 'custom-type1';
        item.imgUrl = resourceUrl + '/im/play-' + data.value + '.png';
      } else if (content.type === 3) {
        var _data = content.data;
        var emojiCnt = '';
        if (_emoji2.default.pinupList[_data.catalog]) {
          emojiCnt = _emoji2.default.pinupList[_data.catalog][_data.chartlet];

          item.type = 'custom-type3';
          item.imgUrl = '' + emojiCnt.img;
        }
      } else {
        item.showText = _utils2.default.parseCustomMsg(item);
        if (item.showText !== '[自定义消息]') {
          item.showText += ',请到手机或电脑客户端查看';
        }
      }
    } else if (item.type === 'image') {
      item.originLink = item.file.url;
    } else if (item.type === 'video') {} else if (item.type === 'audio') {
      item.audioSrc = item.file.mp3Url;
      item.showText = Math.round(item.file.dur / 1000) + '" 点击播放';
    } else if (item.type === 'file') {
      item.fileLink = item.file.url;
      item.showText = item.file.name;
    } else if (item.type === 'notification') {
      if (item.scene === 'team') {
        item.showText = _utils2.default.generateTeamSysmMsg(item);
      } else {
        item.showText = _utils2.default.generateChatroomSysMsg(item);
      }
    } else if (item.type === 'tip') {
      item.showText = item.tip;
    } else if (item.type === 'robot') {
      var _content = item.content || {};
      var message = _content.message || [];
      if (!_content.msgOut) {
        item.robotFlow = 'out';
        item.showText = item.text;
      } else if (_content.flag === 'bot') {
        item.subType = 'bot';
        message = message.map(function (item) {
          if (item.type === 'template') {
            return item.content.json;
          } else if (item.type === 'text' || item.type === 'answer') {
            return [{
              type: 'text',
              text: item.content
            }];
          } else if (item.type === 'image') {
            return [{
              type: 'image',
              url: item.content
            }];
          }
        });
        item.message = message;
      } else if (item.content.flag === 'faq') {
        item.subType = 'faq';
        item.query = message.query;
        var match = message.match.sort(function (a, b) {
          return b.score - a.score;
        });
        item.message = match[0];
      }
    } else {
      item.showText = '[' + _utils2.default.mapMsgType(item) + '],\u8BF7\u5230\u624B\u673A\u6216\u7535\u8111\u5BA2\u6237\u7AEF\u67E5\u770B';
    }
    this.msg = item;
  },
  mounted: function mounted() {
    var _this2 = this;

    var item = this.msg;

    this.$nextTick(function () {
      var media = null;
      if (item.type === 'image') {
        media = new Image();
        media.src = item.file.url + '?imageView&thumbnail=180x0&quality=85';
      } else if (item.type === 'custom-type1') {
        media = new Image();
        media.className = 'emoji-middle';
        media.src = item.imgUrl;
      } else if (item.type === 'custom-type3') {
        media = new Image();
        media.className = 'emoji-big';
        media.src = item.imgUrl;
      } else if (item.type === 'video') {
        if (/(mov|mp4|ogg|webm)/i.test(item.file.ext)) {
          media = document.createElement('video');
          media.src = item.file.url;
          media.width = 640;
          media.height = 480;
          media.autoStart = false;
          media.preload = 'metadata';
          media.controls = 'controls';
        } else {
          var aLink = document.createElement('a');
          aLink.href = item.file.url;
          aLink.target = '_blank';
          aLink.innerHTML = '<i class="u-icon icon-file"></i>' + video.name;
          _this2.$refs.mediaMsg.appendChild(aLink);
        }
      }
      if (media) {
        if (_this2.$refs.mediaMsg) {
          _this2.$refs.mediaMsg.appendChild(media);
        }
        media.onload = function () {
          _this2.$emit('msg-loaded');
        };
        media.onerror = function () {
          _this2.$emit('msg-loaded');
        };
      } else {
        _this2.$emit('msg-loaded');
      }
    });
  },

  methods: {
    revocateMsg: function revocateMsg(vNode) {
      if (this.$store.state.currSessionId) {
        if (vNode && vNode.data && vNode.data.attrs) {
          var attrs = vNode.data.attrs;
          if (attrs.type === 'robot') {
            return;
          }

          if (attrs.flow === 'out') {
            var that = this;
            this.$vux.confirm.show({
              title: '确定需要撤回消息',
              onCancel: function onCancel() {},
              onConfirm: function onConfirm() {
                that.$store.dispatch('revocateMsg', {
                  idClient: attrs.idClient
                });
              }
            });
          }
        }
      }
    },
    sendRobotBlockMsg: function sendRobotBlockMsg(msg, originMsg) {
      if (this.isHistory) {
        return;
      }
      var body = '[复杂按钮模板触发消息]';
      if (msg.text && msg.text.length === 1) {
        body = msg.text[0].text;
      }
      var robotAccid = originMsg.content.robotAccid;
      if (!this.isRobot) {
        body = '@' + this.robotInfos[robotAccid].nick + ' ' + body;
      }
      if (this.type === 'session') {
        this.$store.dispatch('sendRobotMsg', {
          type: 'link',
          scene: originMsg.scene,
          to: originMsg.to,
          robotAccid: robotAccid,

          params: msg.params,
          target: msg.target,

          body: body
        });
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomRobotMsg', {
          type: 'link',
          robotAccid: robotAccid,

          params: msg.params,
          target: msg.target,

          body: body
        });
      }
    },
    continueRobotMsg: function continueRobotMsg(robotAccid) {
      this.$store.dispatch('continueRobotMsg', robotAccid);
    },
    showFullImg: function showFullImg(src) {
      this.$store.dispatch('showFullscreenImg', {
        src: src
      });
    },
    playAudio: function playAudio(src) {
      var _this3 = this;

      if (!this.currentAudio) {
        this.currentAudio = new Audio(src);
        this.currentAudio.play();
        this.currentAudio.onended = function () {
          _this3.currentAudio = null;
        };
      }
    },
    toMsgUnReadDetail: function toMsgUnReadDetail() {
      this.href = '#/msgReceiptDetail/' + this.msg.idServer;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 359:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatList.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../../utils */ 16);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../../configs */ 6);

var _configs2 = _interopRequireDefault(_configs);

var _emoji = __webpack_require__(/*! ../../configs/emoji */ 357);

var _emoji2 = _interopRequireDefault(_emoji);

var _ChatItem = __webpack_require__(/*! ./ChatItem */ 370);

var _ChatItem2 = _interopRequireDefault(_ChatItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ChatItem: _ChatItem2.default
  },
  props: {
    type: String,
    canLoadMore: [String, Boolean],
    isRobot: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    msglist: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    userInfos: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    myInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isHistory: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      isFullImgShow: false,
      msgLoadedTimer: null
    };
  },

  methods: {
    showFullImg: function showFullImg(src) {
      this.$store.dispatch('showFullscreenImg', {
        src: src
      });
    },
    msgLoaded: function msgLoaded() {
      var _this = this;

      clearTimeout(this.msgLoadedTimer);
      this.msgLoadedTimer = setTimeout(function () {
        _this.$emit('msgs-loaded');
      }, 20);
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 361:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-7f8a2422","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-list .u-icon {\n    width: 1.4rem;\n    height: 1.6rem;\n    margin-right: 0.2rem;\n    vertical-align: bottom;\n}\n", "", {"version":3,"sources":["D:/Project/javascript/nim-web-demo-h5/src/pages/components/ChatList.vue"],"names":[],"mappings":";AA+FE;IACE,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,uBAAuB;CACxB","file":"ChatList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-list {\n  .u-icon {\n    width: 1.4rem;\n    height: 1.6rem;\n    margin-right: 0.2rem;\n    vertical-align: bottom;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 362:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-93951438","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatItem.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.p-chat-history .u-msg .msg-link[data-v-93951438] {\n  display: none;\n}\n.p-room-chat-list .u-msg .msg-text[data-v-93951438] {\n  max-width: 80%;\n}\n.p-room-chat-list .u-msg .msg-link[data-v-93951438] {\n  bottom: 0;\n  right: -4rem;\n  font-size: 0.9rem;\n}\n.msg-unread[data-v-93951438] {\n  position: relative;\n  float: right;\n  top: 0.3rem;\n  right: 0.5rem;\n  font-size: 0.9rem;\n  color: #0091e4;\n}\n", "", {"version":3,"sources":["D:/Project/javascript/nim-web-demo-h5/src/pages/components/ChatItem.vue"],"names":[],"mappings":";AAyaI;EACE,cAAc;CACf;AAKD;EACE,eAAe;CAChB;AACD;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;CACnB;AAIL;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,eAAe;CAChB","file":"ChatItem.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-chat-history {\n  .u-msg {\n    .msg-link {\n      display: none;\n    }\n  }\n}\n.p-room-chat-list {\n  .u-msg {\n    .msg-text {\n      max-width: 80%;\n    }\n    .msg-link {\n      bottom: 0;\n      right: -4rem;\n      font-size: 0.9rem;\n    }\n  }\n}\n\n.msg-unread {\n  position: relative;\n  float: right;\n  top: 0.3rem;\n  right: 0.5rem;\n  font-size: 0.9rem;\n  color: #0091e4;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 364:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-7f8a2422"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatList.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "m-chat-list p-chat-list",
    attrs: {
      "id": "chat-list"
    }
  }, [(_vm.canLoadMore) ? _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n    ---- 上拉加载更多 ----\n  ")]) : _c('li', {
    staticClass: "u-msg item-time"
  }, [_vm._v("\n    ---- 已无更多记录 ----\n  ")]), _vm._v(" "), _vm._l((_vm.msglist), function(msg) {
    return _c('chat-item', {
      key: msg.idClient,
      attrs: {
        "type": _vm.type,
        "rawMsg": msg,
        "isRobot": _vm.isRobot,
        "userInfos": _vm.userInfos,
        "myInfo": _vm.myInfo,
        "isHistory": _vm.isHistory
      },
      on: {
        "msg-loaded": _vm.msgLoaded
      }
    })
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f8a2422", module.exports)
  }
}

/***/ }),

/***/ 365:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-93951438"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatItem.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "u-msg",
    class: {
      'item-me': _vm.msg.flow === 'out',
        'item-you': _vm.msg.flow === 'in',
        'item-time': _vm.msg.type === 'timeTag',
        'item-tip': _vm.msg.type === 'tip',
        'session-chat': _vm.type === 'session'
    }
  }, [(_vm.msg.type === 'timeTag') ? _c('div', [_vm._v("---- " + _vm._s(_vm.msg.showText) + " ----")]) : (_vm.msg.type === 'tip') ? _c('div', {
    staticClass: "tip"
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.type === 'notification' && _vm.msg.scene === 'team') ? _c('div', {
    staticClass: "notification"
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.flow === 'in' || _vm.msg.flow === 'out') ? _c('div', {
    directives: [{
      name: "touch",
      rawName: "v-touch:hold",
      value: (_vm.revocateMsg),
      expression: "revocateMsg",
      arg: "hold"
    }],
    attrs: {
      "idClient": _vm.msg.idClient,
      "time": _vm.msg.time,
      "flow": _vm.msg.flow,
      "type": _vm.msg.type
    }
  }, [(_vm.msg.avatar) ? _c('a', {
    staticClass: "msg-head",
    attrs: {
      "href": _vm.msg.link
    }
  }, [_c('img', {
    staticClass: "icon u-circle",
    attrs: {
      "src": _vm.msg.avatar
    }
  })]) : (_vm.msg.type !== 'notification') ? _c('p', {
    staticClass: "msg-user"
  }, [_c('em', [_vm._v(_vm._s(_vm.msg.showTime))]), _vm._v(_vm._s(_vm.msg.from))]) : _vm._e(), _vm._v(" "), (_vm.msg.type === 'text') ? _c('span', {
    staticClass: "msg-text",
    domProps: {
      "innerHTML": _vm._s(_vm.msg.showText)
    }
  }) : (_vm.msg.type === 'custom-type1') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text"
  }) : (_vm.msg.type === 'custom-type3') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text"
  }) : (_vm.msg.type === 'image') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showFullImg(_vm.msg.originLink)
      }
    }
  }) : (_vm.msg.type === 'video') ? _c('span', {
    ref: "mediaMsg",
    staticClass: "msg-text"
  }) : (_vm.msg.type === 'audio') ? _c('span', {
    staticClass: "msg-text",
    on: {
      "click": function($event) {
        _vm.playAudio(_vm.msg.audioSrc)
      }
    }
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.type === 'file') ? _c('span', {
    staticClass: "msg-text"
  }, [_c('a', {
    attrs: {
      "href": _vm.msg.fileLink,
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "u-icon icon-file"
  }), _vm._v(_vm._s(_vm.msg.showText))])]) : (_vm.msg.type === 'robot') ? _c('span', {
    staticClass: "msg-text",
    class: {
      'msg-robot': _vm.msg.robotFlow !== 'out' && !_vm.isRobot
    }
  }, [(_vm.msg.robotFlow === 'out') ? _c('div', [_vm._v(_vm._s(_vm.msg.showText))]) : (_vm.msg.subType === 'bot') ? _c('div', _vm._l((_vm.msg.message), function(tmsgs) {
    return _c('div', _vm._l((tmsgs), function(tmsg) {
      return _c('div', [(tmsg.type === 'text') ? _c('div', [_c('p', [_vm._v(_vm._s(tmsg.text))])]) : (tmsg.type === 'image') ? _c('div', [_c('p', [_c('img', {
        attrs: {
          "src": tmsg.url
        }
      })])]) : (tmsg.type === 'url') ? _c('div', [_c('a', {
        class: tmsg.style,
        attrs: {
          "href": tmsg.target,
          "target": "_blank"
        }
      }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
        return _c('p', [_c('img', {
          attrs: {
            "src": tmsg2.url
          }
        })])
      })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
        return _c('p', [_vm._v(_vm._s(tmsg2.text))])
      })) : _vm._e()])]) : (tmsg.type === 'block') ? _c('div', [_c('a', {
        class: tmsg.style,
        attrs: {
          "params": tmsg.params,
          "target": tmsg.target
        },
        on: {
          "click": function($event) {
            _vm.sendRobotBlockMsg(tmsg, _vm.msg)
          }
        }
      }, [(tmsg.image) ? _c('div', _vm._l((tmsg.image), function(tmsg2) {
        return _c('p', [_c('img', {
          attrs: {
            "src": tmsg2.url
          }
        })])
      })) : _vm._e(), _vm._v(" "), (tmsg.text) ? _c('div', _vm._l((tmsg.text), function(tmsg2) {
        return _c('p', [_vm._v(_vm._s(tmsg2.text))])
      })) : _vm._e()])]) : _vm._e()])
    }))
  })) : (_vm.msg.subType === 'faq') ? _c('div', [_c('p', [_vm._v(_vm._s(_vm.msg.message.answer))])]) : _vm._e(), _vm._v(" "), (_vm.msg.robotFlow !== 'out' && !_vm.isRobot) ? _c('span', {
    staticClass: "msg-link"
  }, [_c('a', {
    staticClass: "link-right",
    on: {
      "click": function($event) {
        _vm.continueRobotMsg(_vm.msg.content.robotAccid)
      }
    }
  }, [_vm._v("继续对话")])]) : _vm._e()]) : (_vm.msg.type === 'notification') ? _c('span', {
    staticClass: "msg-text notify"
  }, [_vm._v(_vm._s(_vm.msg.showText))]) : _c('span', {
    staticClass: "msg-text",
    domProps: {
      "innerHTML": _vm._s(_vm.msg.showText)
    }
  }), _vm._v(" "), (_vm.msg.status === 'fail') ? _c('span', {
    staticClass: "msg-failed"
  }, [_c('i', {
    staticClass: "weui-icon-warn"
  })]) : _vm._e(), _vm._v(" "), (_vm.teamMsgUnRead >= 0) ? _c('a', {
    staticClass: "msg-unread",
    attrs: {
      "href": ("#/msgReceiptDetail/" + (_vm.msg.to) + "-" + (_vm.msg.idServer))
    }
  }, [_vm._v(_vm._s(_vm.teamMsgUnRead > 0 ? (_vm.teamMsgUnRead + "人未读") : '全部已读'))]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-93951438", module.exports)
  }
}

/***/ }),

/***/ 367:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-7f8a2422","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatList.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-7f8a2422","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue */ 361);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 5)("5b137753", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7f8a2422\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7f8a2422\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 368:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-93951438","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatItem.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-93951438","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatItem.vue */ 362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 5)("509b1fdf", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-93951438\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatItem.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-93951438\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 370:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./src/pages/components/ChatItem.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-93951438","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatItem.vue */ 368)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatItem.vue */ 358),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-93951438"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatItem.vue */ 365),
  /* scopeId */
  "data-v-93951438",
  /* cssModules */
  null
)
Component.options.__file = "D:\\Project\\javascript\\nim-web-demo-h5\\src\\pages\\components\\ChatItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-93951438", Component.options)
  } else {
    hotAPI.reload("data-v-93951438", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 371:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./src/pages/components/ChatList.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-7f8a2422","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatList.vue */ 367)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatList.vue */ 359),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-7f8a2422"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatList.vue */ 364),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Project\\javascript\\nim-web-demo-h5\\src\\pages\\components\\ChatList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f8a2422", Component.options)
  } else {
    hotAPI.reload("data-v-7f8a2422", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 374:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatEditor.vue ***!
  \*********************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ChatEmoji = __webpack_require__(/*! ./ChatEmoji */ 383);

var _ChatEmoji2 = _interopRequireDefault(_ChatEmoji);

var _utils = __webpack_require__(/*! ../../utils */ 16);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../../configs */ 6);

var _configs2 = _interopRequireDefault(_configs);

var _page = __webpack_require__(/*! ../../utils/page */ 42);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ChatEmoji: _ChatEmoji2.default
  },
  updated: function updated() {
    var _this = this;

    window.document.body.addEventListener('click', function () {
      _this.isEmojiShown = false;
    });
  },

  props: {
    type: String,
    scene: String,
    to: String,
    isRobot: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    invalid: {
      type: Boolean,
      default: false
    },
    invalidHint: {
      type: String,
      default: '您无权限发送消息'
    },
    advancedTeam: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    continueRobotAccid: function continueRobotAccid(curVal, oldVal) {
      if (curVal && this.robotInfos[curVal]) {
        this.msgToSent = '@' + this.robotInfos[curVal].nick + ' ';
      }

      this.$store.dispatch('continueRobotMsg', '');
    },
    msgToSent: function msgToSent(curVal, oldVal) {
      if (this.isRobot) {
        return;
      }
      var indexAt = this.msgToSent.indexOf('@');
      if (indexAt >= 0 && indexAt === this.msgToSent.length - 1) {
        if (this.robotslist && this.robotslist.length > 0) {
          this.isRobotListShown = true;
        }
      } else if (this.isRobotListShown === true) {
        this.isRobotListShown = false;
      }
    }
  },
  data: function data() {
    return {
      isEmojiShown: false,
      isRobotListShown: false,
      msgToSent: '',
      icon1: _configs2.default.resourceUrl + '/im/chat-editor-1.png',
      icon2: _configs2.default.resourceUrl + '/im/chat-editor-2.png',
      icon3: _configs2.default.resourceUrl + '/im/chat-editor-3.png'
    };
  },

  computed: {
    continueRobotAccid: function continueRobotAccid() {
      return this.$store.state.continueRobotAccid;
    },
    robotslist: function robotslist() {
      return this.$store.state.robotslist;
    },
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    },
    robotInfosByNick: function robotInfosByNick() {
      return this.$store.state.robotInfosByNick;
    }
  },
  methods: {
    sendTextMsg: function sendTextMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      if (/^\s*$/.test(this.msgToSent)) {
        this.$vux.alert.show({
          title: '请不要发送空消息'
        });
        return;
      } else if (this.msgToSent.length > 800) {
        this.$vux.alert.show({
          title: '请不要超过800个字'
        });
        return;
      }
      this.msgToSent = this.msgToSent.trim();
      if (this.type === 'session') {
        if (this.isRobot) {
          this.$store.dispatch('sendRobotMsg', {
            type: 'text',
            scene: this.scene,
            to: this.to,
            robotAccid: this.to,

            content: this.msgToSent,

            body: this.msgToSent
          });
        } else {
          var robotAccid = '';
          var robotText = '';

          var atUsers = this.msgToSent.match(/@[^\s@$]+/g);
          if (atUsers) {
            for (var i = 0; i < atUsers.length; i++) {
              var item = atUsers[i].replace('@', '');
              if (this.robotInfosByNick[item]) {
                robotAccid = this.robotInfosByNick[item].account;
                robotText = (this.msgToSent + '').replace(atUsers[i], '').trim();
                break;
              }
            }
          }
          if (robotAccid) {
            if (robotText) {
              this.$store.dispatch('sendRobotMsg', {
                type: 'text',
                scene: this.scene,
                to: this.to,
                robotAccid: robotAccid,

                content: robotText,

                body: this.msgToSent
              });
            } else {
              this.$store.dispatch('sendRobotMsg', {
                type: 'welcome',
                scene: this.scene,
                to: this.to,
                robotAccid: robotAccid,

                body: this.msgToSent
              });
            }
          } else {
            this.$store.dispatch('sendMsg', {
              type: 'text',
              scene: this.scene,
              to: this.to,
              text: this.msgToSent
            });
          }
        }
      } else if (this.type === 'chatroom') {
        var _robotAccid = '';
        var _robotText = '';

        var _atUsers = this.msgToSent.match(/@[^\s@$]+/g);
        if (_atUsers) {
          for (var _i = 0; _i < _atUsers.length; _i++) {
            var _item = _atUsers[_i].replace('@', '');
            if (this.robotInfosByNick[_item]) {
              _robotAccid = this.robotInfosByNick[_item].account;
              _robotText = (this.msgToSent + '').replace(_atUsers[_i], '').trim();
              break;
            }
          }
        }
        if (_robotAccid) {
          if (_robotText) {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'text',
              robotAccid: _robotAccid,

              content: _robotText,

              body: this.msgToSent
            });
          } else {
            this.$store.dispatch('sendChatroomRobotMsg', {
              type: 'welcome',
              robotAccid: _robotAccid,

              body: this.msgToSent
            });
          }
        } else {
          this.$store.dispatch('sendChatroomMsg', {
            type: 'text',
            text: this.msgToSent
          });
        }
      }
      this.msgToSent = '';
    },
    sendPlayMsg: function sendPlayMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }

      if (this.type === 'session') {
        this.$store.dispatch('sendMsg', {
          type: 'custom',
          scene: this.scene,
          to: this.to,
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random() * 3)
            }
          }
        });
      } else if (this.type === 'chatroom') {
        this.$store.dispatch('sendChatroomMsg', {
          type: 'custom',
          pushContent: '[猜拳]',
          content: {
            type: 1,
            data: {
              value: Math.ceil(Math.random() * 3)
            }
          }
        });
      }
    },
    sendFileMsg: function sendFileMsg() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      var ipt = this.$refs.fileToSent;
      if (ipt.value) {
        if (this.type === 'session') {
          this.$store.dispatch('sendFileMsg', {
            scene: this.scene,
            to: this.to,
            fileInput: ipt
          });
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomFileMsg', {
            fileInput: ipt
          });
        }
      }
    },
    showEmoji: function showEmoji() {
      this.isEmojiShown = true;
    },
    hideEmoji: function hideEmoji() {
      this.isEmojiShown = false;
    },
    addEmoji: function addEmoji(emojiName) {
      this.msgToSent += emojiName;
      this.hideEmoji();
    },
    chooseRobot: function chooseRobot(robot) {
      if (robot && robot.account) {
        var len = this.msgToSent.length;
        if (len === 0 || this.msgToSent[len - 1] !== '@') {
          this.msgToSent += '@' + robot.nick + ' ';
        }{
          this.msgToSent += robot.nick + ' ';
        }
      }
    },
    hideRobotList: function hideRobotList() {
      this.isRobotListShown = false;
    },
    onInputFocus: function onInputFocus(e) {
      setTimeout(function () {
        e.target.scrollIntoView();
        _page2.default.scrollChatListDown();
      }, 200);
    },
    turnToMsgReceipt: function turnToMsgReceipt() {
      if (this.invalid) {
        this.$toast(this.invalidHint);
        return;
      }
      location = '#/teamSendMsgReceipt/' + this.to;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 375:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/ChatEmoji.vue ***!
  \********************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emoji = __webpack_require__(/*! ../../configs/emoji */ 357);

var _emoji2 = _interopRequireDefault(_emoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function genEmojiList(type, emojiList) {
  var result = {};
  for (var name in emojiList) {
    var emojiMap = emojiList[name];
    var list = [];
    for (var key in emojiMap) {
      list.push({
        type: type,
        name: name,
        key: key,
        img: emojiMap[key].img
      });
    }
    if (list.length > 0) {
      result[name] = {
        type: type,
        name: name,
        list: list,
        album: list[0].img
      };
    }
  }
  return result;
}

exports.default = {
  props: {
    type: String,
    scene: String,
    to: String
  },
  data: function data() {
    return {
      currType: 'emoji',
      currAlbum: 'emoji'
    };
  },

  computed: {
    emoji: function emoji() {
      return genEmojiList('emoji', _emoji2.default.emojiList);
    },
    pinup: function pinup() {
      return genEmojiList('pinup', _emoji2.default.pinupList);
    },
    currEmoji: function currEmoji() {
      if (this.currType === 'emoji') {
        return this.emoji[this.currAlbum];
      } else if (this.currType === 'pinup') {
        return this.pinup[this.currAlbum];
      }
      return [];
    }
  },
  methods: {
    selectAlbum: function selectAlbum(album) {
      this.currType = album.type;
      this.currAlbum = album.name;
    },
    selectEmoji: function selectEmoji(emoji) {
      if (this.currType === 'emoji') {
        this.$emit('add-emoji', emoji.key);
      } else if (this.currType === 'pinup') {
        if (this.type === 'session') {
          this.$store.dispatch('sendMsg', {
            type: 'custom',
            scene: this.scene,
            to: this.to,
            pushContent: '[贴图表情]',
            content: {
              type: 3,
              data: {
                catalog: this.currAlbum,
                chartlet: emoji.key
              }
            }
          });
        } else if (this.type === 'chatroom') {
          this.$store.dispatch('sendChatroomMsg', {
            type: 'custom',
            pushContent: '[贴图表情]',
            content: {
              type: 3,
              data: {
                catalog: this.currAlbum,
                chartlet: emoji.key
              }
            }
          });
        }
        this.$emit('hide-emoji');
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 376:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-11846576","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEmoji.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.m-chat-emoji {\n  position: absolute;\n  top: -12rem;\n  height: 12rem;\n  left: 0;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n}\n.m-chat-emoji .emoji-channel {\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin: 0 1rem;\n}\n.m-chat-emoji .emoji-channel .emoji-album {\n  display: inline-block;\n  padding: 0.1rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  border-right: 1px solid #f0f0f0;\n}\n.m-chat-emoji .emoji-channel .emoji-album img {\n  margin: 0;\n  display: block;\n  width: inherit;\n  height: inherit;\n}\n.m-chat-emoji .emoji-channel .emoji-album.active {\n  background-color: #f0f0f0;\n}\n.m-chat-emoji .emoji-content {\n  position: relative;\n  width: 100%;\n  height: 10rem;\n  background-color: #f0f0f0;\n  overflow-y: auto;\n}\n.m-chat-emoji .emoji-content .cnt {\n  position: relative;\n  display: block;\n  margin: 0.4rem auto;\n  text-align: left;\n}\n.m-chat-emoji .emoji-content .emoji-item {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  padding: 2px;\n  vertical-align: middle;\n  /*border: 1px solid #fff;*/\n  /*margin-left: -1px;*/\n}\n/*margin-bottom: -1px;*/\n.m-chat-emoji .emoji-content .emoji-item img {\n  width: inherit;\n  height: inherit;\n}\n.m-chat-emoji .emoji-content .pinup-item {\n  width: 44px;\n  height: 44px;\n}\n@media screen and (min-width: 300px) and (max-width: 420px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 300px;\n  }\n}\n@media screen and (min-width: 420px) and (max-width: 600px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 420px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 720px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 600px;\n  }\n}\n@media screen and (min-width: 720px) and (max-width: 1080px) {\n  .m-chat-emoji .emoji-content .cnt {\n    width: 720px;\n  }\n}\n@media screen and (min-width: 1080px){\n  .m-chat-emoji .emoji-content .cnt {\n    width: 1080px;\n  }\n}\n", "", {"version":3,"sources":["D:/Project/javascript/nim-web-demo-h5/src/pages/components/ChatEmoji.vue"],"names":[],"mappings":";AAwHA;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,QAAQ;EACR,YAAY;EACZ,2BAA2B;EAC3B,uBAAuB;CAoFxB;AAnFC;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,eAAe;CAiBhB;AAhBC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gCAAgC;CAUjC;AATC;EACE,UAAU;EACV,eAAe;EACf,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,0BAA0B;CAC3B;AAGL;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,0BAA0B;EAC1B,iBAAiB;CAyBlB;AAxBC;EACE,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,sBAAsB;CAMvB;AALC,wBAAwB;AACxB;EACE,eAAe;EACf,gBAAgB;CACjB;AAEH;EACE,YAAY;EACZ,aAAa;CACd;AAGH;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,aAAa;GACd;CACF;AAED;EACE;IACE,cAAc;GACf;CACF","file":"ChatEmoji.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.m-chat-emoji {\n  position: absolute;\n  top: -12rem;\n  height: 12rem;\n  left: 0;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n  .emoji-channel {\n    position: relative;\n    width: 100%;\n    height: auto;\n    margin: 0 1rem;\n    .emoji-album {\n      display: inline-block;\n      padding: 0.1rem;\n      width: 1.8rem;\n      height: 1.8rem;\n      border-right: 1px solid #f0f0f0;\n      img {\n        margin: 0;\n        display: block;\n        width: inherit;\n        height: inherit;\n      }\n      &.active {\n        background-color: #f0f0f0;\n      }\n    }\n  }\n  .emoji-content {\n    position: relative;\n    width: 100%;\n    height: 10rem;\n    background-color: #f0f0f0;\n    overflow-y: auto;\n    .cnt {\n      position: relative;\n      display: block;\n      margin: 0.4rem auto;\n      text-align: left;\n    }\n    .emoji-item {\n      display: inline-block;\n      width: 28px;\n      height: 28px;\n      padding: 2px;\n      vertical-align: middle;\n      /*border: 1px solid #fff;*/\n      /*margin-left: -1px;*/\n      /*margin-bottom: -1px;*/\n      img {\n        width: inherit;\n        height: inherit;\n      }\n    }\n    .pinup-item {\n      width: 44px;\n      height: 44px;\n    }\n  }\n\n  @media screen and (min-width: 300px) and (max-width: 420px) {\n    .emoji-content .cnt {\n      width: 300px;\n    }\n  }\n\n  @media screen and (min-width: 420px) and (max-width: 600px) {\n    .emoji-content .cnt {\n      width: 420px;\n    }\n  }\n\n  @media screen and (min-width: 600px) and (max-width: 720px) {\n    .emoji-content .cnt {\n      width: 600px;\n    }\n  }\n\n  @media screen and (min-width: 720px) and (max-width: 1080px) {\n    .emoji-content .cnt {\n      width: 720px;\n    }\n  }\n\n  @media screen and (min-width: 1080px){\n    .emoji-content .cnt {\n      width: 1080px;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 377:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-69a5d4fe","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEditor.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.robot.m-chat-editor-main[data-v-69a5d4fe] {\n  /*.u-editor-input {\n    padding-right: 4.5rem;\n  }\n  .u-editor-icons {\n    width: 4rem;\n  }*/\n}\n.m-chat-robot[data-v-69a5d4fe] {\n  overflow-y: scroll;\n}\n.m-chat-robot .weui-cells .weui-cell__hd[data-v-69a5d4fe] {\n  margin-right: 0.5rem;\n}\n.u-editor-send.u-editor-receipt[data-v-69a5d4fe] {\n  background-color: #fefefe;\n  border: #ccc solid 1px;\n  color: black;\n  padding: 0.1rem;\n  margin-left: .1rem;\n}\n", "", {"version":3,"sources":["D:/Project/javascript/nim-web-demo-h5/src/pages/components/ChatEditor.vue"],"names":[],"mappings":";AA8UA;EACE;;;;;KAKG;CACJ;AACD;EACE,mBAAmB;CAMpB;AAJG;EACE,qBAAqB;CACtB;AAIL;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;CACpB","file":"ChatEditor.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.robot.m-chat-editor-main {\n  /*.u-editor-input {\n    padding-right: 4.5rem;\n  }\n  .u-editor-icons {\n    width: 4rem;\n  }*/\n}\n.m-chat-robot {\n  overflow-y: scroll;\n  .weui-cells {\n    .weui-cell__hd {\n      margin-right: 0.5rem;\n    }\n  }\n}\n\n.u-editor-send.u-editor-receipt {\n  background-color: #fefefe;\n  border: #ccc solid 1px;\n  color: black;\n  padding: 0.1rem;\n  margin-left: .1rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 378:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-11846576"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatEmoji.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-chat-emoji"
  }, [_c('div', {
    staticClass: "emoji-content"
  }, [_c('div', {
    staticClass: "cnt"
  }, _vm._l((_vm.currEmoji.list), function(item) {
    return _c('span', {
      staticClass: "emoji-item",
      class: {
        'pinup-item': item.type === 'pinup'
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectEmoji(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "emoji-channel"
  }, [_vm._l((_vm.emoji), function(item) {
    return _c('span', {
      staticClass: "emoji-album",
      class: {
        active: item.name == _vm.currAlbum
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectAlbum(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.album
      }
    })])
  }), _vm._l((_vm.pinup), function(item) {
    return (_vm.type === 'session') ? _c('span', {
      staticClass: "emoji-album",
      class: {
        active: item.name == _vm.currAlbum
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectAlbum(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.album
      }
    })]) : _vm._e()
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11846576", module.exports)
  }
}

/***/ }),

/***/ 379:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-69a5d4fe"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/ChatEditor.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-chat-editor",
    on: {
      "click": _vm.hideRobotList
    }
  }, [_c('chat-emoji', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEmojiShown),
      expression: "isEmojiShown"
    }],
    attrs: {
      "type": _vm.type,
      "scene": _vm.scene,
      "to": _vm.to
    },
    on: {
      "add-emoji": _vm.addEmoji,
      "hide-emoji": _vm.hideEmoji
    }
  }), _vm._v(" "), _c('group', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isRobotListShown),
      expression: "isRobotListShown"
    }],
    staticClass: "m-chat-emoji m-chat-robot"
  }, _vm._l((_vm.robotslist), function(robot) {
    return _c('cell', {
      key: robot.account,
      attrs: {
        "title": robot.nick
      },
      nativeOn: {
        "click": function($event) {
          _vm.chooseRobot(robot)
        }
      }
    }, [_c('img', {
      staticClass: "icon u-circle",
      attrs: {
        "slot": "icon",
        "width": "20",
        "height": "20",
        "src": robot.avatar
      },
      slot: "icon"
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "m-chat-editor-main",
    class: {
      robot: _vm.isRobot
    }
  }, [_c('span', {
    staticClass: "u-editor-input"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msgToSent),
      expression: "msgToSent"
    }],
    domProps: {
      "value": (_vm.msgToSent)
    },
    on: {
      "focus": _vm.onInputFocus,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.msgToSent = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "u-editor-icons"
  }, [(!_vm.isRobot) ? _c('span', {
    staticClass: "u-editor-icon",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showEmoji($event)
      }
    }
  }, [_c('i', {
    staticClass: "u-icon-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon1
    }
  })])]) : _vm._e(), _vm._v(" "), (!_vm.isRobot) ? _c('span', {
    staticClass: "u-editor-icon",
    on: {
      "change": _vm.sendFileMsg
    }
  }, [_c('i', {
    staticClass: "u-icon-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon2
    }
  })]), _vm._v(" "), _c('input', {
    ref: "fileToSent",
    attrs: {
      "type": "file"
    }
  })]) : _vm._e(), _vm._v(" "), (!_vm.isRobot && !_vm.advancedTeam) ? _c('span', {
    staticClass: "u-editor-icon",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.sendPlayMsg($event)
      }
    }
  }, [_c('i', {
    staticClass: "u-icon-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon3
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.advancedTeam) ? _c('span', {
    staticClass: "u-editor-send u-editor-receipt",
    on: {
      "click": _vm.turnToMsgReceipt
    }
  }, [_vm._v("回执")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "u-editor-send",
    on: {
      "click": _vm.sendTextMsg
    }
  }, [_vm._v("发 送")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69a5d4fe", module.exports)
  }
}

/***/ }),

/***/ 380:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-11846576","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEmoji.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-11846576","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue */ 376);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 5)("6004febd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-11846576\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-11846576\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEmoji.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 381:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-69a5d4fe","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/ChatEditor.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-69a5d4fe","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue */ 377);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 5)("16ea92cd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-69a5d4fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-69a5d4fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatEditor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 382:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./src/pages/components/ChatEditor.vue ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-69a5d4fe","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatEditor.vue */ 381)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatEditor.vue */ 374),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-69a5d4fe"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatEditor.vue */ 379),
  /* scopeId */
  "data-v-69a5d4fe",
  /* cssModules */
  null
)
Component.options.__file = "D:\\Project\\javascript\\nim-web-demo-h5\\src\\pages\\components\\ChatEditor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatEditor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69a5d4fe", Component.options)
  } else {
    hotAPI.reload("data-v-69a5d4fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 383:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./src/pages/components/ChatEmoji.vue ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-11846576","scoped":false,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ChatEmoji.vue */ 380)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 2)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ChatEmoji.vue */ 375),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-11846576"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ChatEmoji.vue */ 378),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Project\\javascript\\nim-web-demo-h5\\src\\pages\\components\\ChatEmoji.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatEmoji.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11846576", Component.options)
  } else {
    hotAPI.reload("data-v-11846576", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 407:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Chat.vue ***!
  \****************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ChatEditor = __webpack_require__(/*! ./components/ChatEditor */ 382);

var _ChatEditor2 = _interopRequireDefault(_ChatEditor);

var _ChatList = __webpack_require__(/*! ./components/ChatList */ 371);

var _ChatList2 = _interopRequireDefault(_ChatList);

var _utils = __webpack_require__(/*! ../utils */ 16);

var _utils2 = _interopRequireDefault(_utils);

var _page = __webpack_require__(/*! ../utils/page */ 42);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ChatEditor: _ChatEditor2.default,
    ChatList: _ChatList2.default
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('showLoading');

    this.$store.dispatch('setCurrSession', this.sessionId);
    _page2.default.scrollChatListDown();

    setTimeout(function () {
      _this.$store.dispatch('hideLoading');
    }, 1000);

    if (this.scene === 'team') {
      var teamMembers = this.$store.state.teamMembers[this.to];
      if (teamMembers === undefined || teamMembers.length < this.teamInfo.memberNum) {
        this.$store.dispatch('getTeamMembers', this.to);
      }
    }
  },
  updated: function updated() {
    _page2.default.scrollChatListDown();
  },
  destroyed: function destroyed() {
    this.$store.dispatch('resetCurrSession');
  },
  data: function data() {
    return {
      leftBtnOptions: {
        backText: ' ',
        preventGoBack: true
      }
    };
  },

  computed: {
    sessionId: function sessionId() {
      var sessionId = this.$route.params.sessionId;
      return sessionId;
    },
    sessionName: function sessionName() {
      var sessionId = this.sessionId;
      var user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (user === this.$store.state.userUID) {
          return '我的手机';
        } else if (this.isRobot) {
          return this.robotInfos[user].nick;
        } else {
          var userInfo = this.userInfos[user] || {};
          return _utils2.default.getFriendAlias(userInfo);
        }
      } else if (/^team-/.test(sessionId)) {
        if (this.teamInfo) {
          var members = this.$store.state.teamMembers && this.$store.state.teamMembers[this.teamInfo.teamId];
          var memberCount = members && members.length;
          return this.teamInfo.name + (memberCount ? '(' + memberCount + ')' : '');
        } else {
          return '群';
        }
      }
    },
    scene: function scene() {
      return _utils2.default.parseSession(this.sessionId).scene;
    },
    to: function to() {
      return _utils2.default.parseSession(this.sessionId).to;
    },
    isRobot: function isRobot() {
      var sessionId = this.sessionId;
      var user = null;
      if (/^p2p-/.test(sessionId)) {
        user = sessionId.replace(/^p2p-/, '');
        if (this.robotInfos[user]) {
          return true;
        }
      }
      return false;
    },
    myInfo: function myInfo() {
      return this.$store.state.myInfo;
    },
    userInfos: function userInfos() {
      return this.$store.state.userInfos;
    },
    robotInfos: function robotInfos() {
      return this.$store.state.robotInfos;
    },
    msglist: function msglist() {
      var msgs = this.$store.state.currSessionMsgs;
      return msgs;
    },
    teamInfo: function teamInfo() {
      if (this.scene === 'team') {
        var teamId = this.sessionId.replace('team-', '');
        return this.$store.state.teamlist.find(function (team) {
          return team.teamId === teamId;
        });
      }
      return undefined;
    },
    muteInTeam: function muteInTeam() {
      var _this2 = this;

      if (this.scene !== 'team') return false;
      var teamMembers = this.$store.state.teamMembers;
      var Members = teamMembers && teamMembers[this.teamInfo.teamId];
      var selfInTeam = Members && Members.find(function (item) {
        return item.account === _this2.$store.state.userUID;
      });
      return selfInTeam && selfInTeam.mute || false;
    },
    teamInvalid: function teamInvalid() {
      if (this.scene === 'team') {
        return !(this.teamInfo && this.teamInfo.validToCurrentUser);
      }
      return false;
    },
    sendInvalidHint: function sendInvalidHint() {
      if (this.scene === 'team' && this.teamInvalid) {
        return '\u60A8\u5DF2\u4E0D\u5728\u8BE5' + (this.teamInfo && this.teamInfo.type === 'normal' ? '讨论组' : '群') + '\uFF0C\u4E0D\u80FD\u53D1\u9001\u6D88\u606F';
      } else if (this.muteInTeam) {
        return '您已被禁言';
      }
      return '无权限发送消息';
    }
  },
  methods: {
    onClickBack: function onClickBack() {
      window.history.go(-1);
    },
    msgsLoaded: function msgsLoaded() {
      _page2.default.scrollChatListDown();
    },
    enterNameCard: function enterNameCard() {
      if (/^p2p-/.test(this.sessionId)) {
        var account = this.sessionId.replace(/^p2p-/, '');
        if (account === this.$store.state.userUID) {
          location.href = '#/general';
          return;
        }
        location.href = '#/namecard/' + account;
      }
    },
    onTeamManageClick: function onTeamManageClick() {
      if (this.teamInfo && this.teamInfo.validToCurrentUser) {
        location.href = '#/teammanage/' + this.teamInfo.teamId;
      } else {
        this.$toast('您已退出该群');
      }
    },
    onHistoryClick: function onHistoryClick() {
      if (this.scene !== 'team' || this.teamInfo && this.teamInfo.validToCurrentUser) {
        location.href = '#/chathistory/' + this.sessionId;
      } else {
        this.$toast('您已退出该群');
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 442:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5e047348","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=1!./src/pages/Chat.vue ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.g-window .vux-header .m-tab-top {\r\n  width: 80%;\r\n  margin: 0 10%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}\r\n", "", {"version":3,"sources":["D:/Project/javascript/nim-web-demo-h5/src/pages/Chat.vue"],"names":[],"mappings":";AAiPA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB","file":"Chat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.g-window .vux-header .m-tab-top {\r\n  width: 80%;\r\n  margin: 0 10%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 443:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5e047348","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Chat.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 4)(true);
// imports


// module
exports.push([module.i, "\n.g-window .m-tab .m-tab-right[data-v-5e047348]{\r\n  width: 5rem;\r\n  right: -1rem;\n}\n.m-tab-right[data-v-5e047348] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n     -moz-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\n}\n.m-tab-right .icon-history[data-v-5e047348], .m-tab-right .icon-team[data-v-5e047348] {\r\n  display: inline-block;\r\n  margin-right: .8rem;\r\n  width: 1.7rem;\r\n  height: 1.7rem;\r\n  background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\r\n  background-size: 20rem;\r\n  background-position: -5.8rem -11.3rem;\n}\n.m-tab-right .icon-team[data-v-5e047348]{\r\n  background-position: -7.9rem -11.3rem;\n}\n.invalidHint[data-v-5e047348] {\r\n  width: 100%;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  background-color: bisque;\r\n  color: burlywood;\n}\r\n", "", {"version":3,"sources":["D:/Project/javascript/nim-web-demo-h5/src/pages/Chat.vue"],"names":[],"mappings":";AAkNA;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,sBAA0B;EAA1B,kCAA0B;KAA1B,mBAA0B;MAA1B,mBAA0B;UAA1B,0BAA0B;CAc3B;AAZC;EACE,sBAAsB;EACtB,oBAAoB;EACpB,cAAc;EACd,eAAe;EACf,sEAAsE;EACtE,uBAAuB;EACvB,sCAAsC;CACvC;AACD;EACE,sCAAsC;CACvC;AAEH;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;CAClB","file":"Chat.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.g-window .m-tab .m-tab-right{\r\n  width: 5rem;\r\n  right: -1rem;\r\n}\r\n.m-tab-right {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n\r\n  .icon-history, .icon-team {\r\n    display: inline-block;\r\n    margin-right: .8rem;\r\n    width: 1.7rem;\r\n    height: 1.7rem;\r\n    background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\r\n    background-size: 20rem;\r\n    background-position: -5.8rem -11.3rem;\r\n  }\r\n  .icon-team{\r\n    background-position: -7.9rem -11.3rem;\r\n  }\r\n}\r\n.invalidHint {\r\n  width: 100%;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  background-color: bisque;\r\n  color: burlywood;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 465:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-5e047348"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Chat.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": _vm.leftBtnOptions
    },
    on: {
      "on-click-back": _vm.onClickBack
    }
  }, [_c('h1', {
    staticClass: "m-tab-top",
    on: {
      "click": _vm.enterNameCard
    }
  }, [_vm._v(_vm._s(_vm.sessionName))]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }), _vm._v(" "), _c('div', {
    staticClass: "m-tab-right",
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('span', {
    staticClass: "icon-history",
    on: {
      "click": _vm.onHistoryClick
    }
  }), _vm._v(" "), (_vm.scene === 'team') ? _c('span', {
    staticClass: "icon-team",
    on: {
      "click": _vm.onTeamManageClick
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "m-chat-main"
  }, [(_vm.scene === "team" && _vm.teamInvalid) ? _c('div', {
    staticClass: "invalidHint"
  }, [_vm._v("\n      " + _vm._s(("您已退出该" + (_vm.teamInfo && _vm.teamInfo.type==='normal' ? '讨论组':'群'))) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('chat-list', {
    attrs: {
      "type": "session",
      "msglist": _vm.msglist,
      "userInfos": _vm.userInfos,
      "myInfo": _vm.myInfo,
      "isRobot": _vm.isRobot
    },
    on: {
      "msgs-loaded": _vm.msgsLoaded
    }
  }), _vm._v(" "), _c('chat-editor', {
    attrs: {
      "type": "session",
      "scene": _vm.scene,
      "to": _vm.to,
      "isRobot": _vm.isRobot,
      "invalid": _vm.teamInvalid || _vm.muteInTeam,
      "invalidHint": _vm.sendInvalidHint,
      "advancedTeam": _vm.teamInfo && _vm.teamInfo.type === 'advanced'
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e047348", module.exports)
  }
}

/***/ }),

/***/ 485:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5e047348","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=1!./src/pages/Chat.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-5e047348","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue */ 442);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 5)("14a85fe6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e047348\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e047348\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 486:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-5e047348","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Chat.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-5e047348","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue */ 443);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 5)("42d74e7e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e047348\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e047348\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=1.js.map
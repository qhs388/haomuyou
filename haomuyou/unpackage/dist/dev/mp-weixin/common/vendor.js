(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"haomuyou","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"haomuyou","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"haomuyou","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"haomuyou","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"haomuyou","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!***********************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/pages.json ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!******************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 12));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 13));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 17));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 18));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 22));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 23));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 24));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 25));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 26));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 27));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 28));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 15));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 14));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 29));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 16));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 30));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 31));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 32));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 33));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 34));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 35);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 36));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 37));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 38));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 12 */
/*!*****************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/mixin/mixin.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/request/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 14));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/deepMerge.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 15 */
/*!************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/deepClone.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 16 */
/*!*******************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/test.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 17 */
/*!**************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/queryParams.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 18 */
/*!********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/route.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 19 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 20);

/***/ }),
/* 20 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 21);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 21 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 22 */
/*!*************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/timeFormat.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 23 */
/*!***********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/timeFrom.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 24 */
/*!****************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/colorGradient.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 25 */
/*!*******************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/guid.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 26 */
/*!********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/color.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 27 */
/*!************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/type2icon.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 28 */
/*!**************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/randomArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 29 */
/*!**********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/addUnit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 30 */
/*!*********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/random.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 31 */
/*!*******************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/trim.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 32 */
/*!********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/toast.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 33 */
/*!************************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/getParent.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 34 */
/*!**********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/$parent.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 35 */
/*!******************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/sys.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 36 */
/*!***********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/debounce.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 37 */
/*!***********************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/function/throttle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 38 */
/*!*******************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/config/config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 39 */
/*!*******************************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/uview-ui/libs/config/zIndex.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 47 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 48 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/3.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 49 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/4.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAMAAAB6fSTWAAACglBMVEUAAADtnXrtnXrtnXrtnXr64tv65+L65+L65+L65+L65+L65+L65uH65eD65+L0xLH65+L65+L65+L54Nj65+L42tD65+L54tz54dr42M343dT20ML54tv65d/43tb54dr65uH54dr43NP54dv549z54dr549z55d/54Nj54dr54Nf54Nn65+L65d/549354Nn54tv43NP43tX539j32tH3183xX1zyhF7wXFz208j32dD10MP21crvNVrwVVz20sb32M7wWFz0ybv1zsHyeV3yfV3ygF70y73wR1vxc13wUVvxY1zxdl3xcF3ywK7xbV3zxrbxal3yh17wQVvwTlvvOFr0ybn2wLXyhl7vPlrwRFvvO1rwS1v1zb/xZ1z0x7jxZVzxrZbysZvxrpj1v7LwqZD0vK31vK/ywrH0xLT1vazyiF71vrH1vq/zt6XywbD0uaX0w7L2wbbxsJnzuafzt6H1v6z0u6vytaLztZ/yrpzztKP2wrjyv6z0uqn0vKjys531vLD1wbPxrJnwqpL1varzt6Pxq5T0uqf0u6r0uanxWHDzvarzsqHvpI7zu6jxrZvysJ7wqpfznZHztKX2tLfvpY/0mZn3zsT3yL7zqYzxoYTwqZX2x7zyuqbwlYXxrJTvo47yjojzppDxmIr0uKP2xbjwqpHxeG/40Mb0oJjzfIXzko7ygYH0wbHwlojzo5Hzo5X0q5H0n57zmoL3tbn3ysDzlIP1wa7zj4Xxl4zxg3zxpYn1sKryY3ryannxWnPygXXycXfyiHTzlHj1srDyoobymo3yfHj0n4TzjnTxb2zyiIPvppDxjHvxdXvyhG3zjm3xZ2vyp4zxXmz3t7sODnKEAAAALHRSTlMABAgNERHAQIDvoGAwIM8c31CvhnBJj/CkOWgrwvB3leC0WNLR4uHRxNLT0vu4GOYAAG4vSURBVHja7NxdbqMwFAbQvGAbCAgixCrY//qmmU6lUdW0aQuJMefs4dP98YUTAAAAAAAAAAAAAADAo3Txakqv5vCB9E8br6oTkL1zjG1KKbxYfqoOIVxSSmOM3QnIRBdjSk0I9bKBIYQ5TWo9PEkVx2s3vjzKcK3zMZ6AR/gb8H55mhBSiucTsInzmJpQL5kYwpxM8bCi2KYw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"

/***/ }),
/* 50 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/5.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAMAAAB6fSTWAAAC/VBMVEUAAADy0Yby0Yby0Yby0Yby0Yby0Yb779b77tT77tP78Nn779b78Nj78Nn78Nn779b56cf779b78Nn78Nf34K367dD67M/78Nj78Nn67dL45bz78Nj568v67M367M/67tP56sr779b67dD67M778Nn779b67tP67dD668356sr67M735L356cj458L56MX3U0P45b/3WUT3VUP347v3TUH3aEf4ekv4dUr3V0P4hU34fUz3XET4gk34ckn4bkn3akj3ZUb5wqn5wav4kFD4iE73YEX236/4jU/3Y0b4lFH5vlr5uln4mlL21Zn4f0z4d0r4bUj5wVv5xFz5yFz5slf22J34cUn5tVj34rj3T0L5xKr5uFj4vqH4llH21p34wKb4wqf4nlP4ik74olT3vp/4v6T34bT1yZH4w6P5r1f1yZT21Zv1xpD5y134xKf3xp75q1b4nFP4xqb1x4/2yJf2xJj316D1yJH1ypP4pVX4xaP4zqX4w6X5wqv4yKX3xaD3xpv3bEj32p/4qFX3w5z32qL4zKT5xKz34LH2wpX33KP2xpj2x5X2yJn5xqn426n43ar2wZj3wZ7326H4yaP4y6b42qX43Kb215v30aD30qP30J71zZX3wJr1wZL2vpf3zaL44K33z6L2zZf43Kz3yKD2v5X3wJz1wpL4x6P4yKf406X2wJf2ypj2yZX427H3bVn3yJ34wKH22p364sf32KX43qf436r11Jf42aj64MT40af53rz3wpr2w5D3v5n4blv4zqf40KX2y5X5zrX4wqH2z5v75Mv63sD205b43Lf50bH4knH4mXH3y6H4o4L2xJX62L7507n3sn/41a/3v4D4iXT4n3H4qoD5p435yLD32qn3WUr3sXP4p3L4r2X4p2b4jFz4lV35s5r3uXn5uqL5xKb2wob4gGv3Y1P5nIb31KP4k3/4uW35rJX3uYj4emj5zbD4hFz4c2H4alr3f134nWT4fFr40Ir5zHn4uJP3Y0z4j2f5ymv5v2geUZe9AAAAJHRSTlMABAsIDxEUwRE/79FhgKAxTLHgIB+mh5Bw8C1QanmX4Vrw4kepMrEQAACUEklEQVR42uzdTW6rMBQG0MzAgI2AAUhM2f8aXxqpk7avaSsgYM7Zw6f745twAwAAAAAAAAAAAAAAAAD4mTLcxTfFQ7V8r3hI8W4OIQw34JhCmGMc73ldVlE/gt9IPRxACNNbuqtlS4/Mh1DegD2VYb7nu1521hcpNmo8bG0IU9w+4M8DP8bQ3oC1heYACf+U90l9h3WEaSyq5biKFMUd/q6dY9Evp1C9Vfcb8CthSsVyOnUXLefhpxk/2DD+O720w7eGZjxhHf9Kn3Ty8FkZ4qFXbn9RjLMtHbwb5vHUzfqT0u7FHYYmnWSx/ndVJ+xc2BVCLuxcWnmhkAs715TxTP5Mnxpvb1xAO3XLxdWjpzdyVs7X69e/VnWNlzeyNCjlHwu7iZ3MtNedyr9TpdnETi7mlNvN25o62znOr2w6KX+mngzsnFjZGMtlnbxJuayTOymXdbIn5bJO7uzY7eHJXTs6fVtDmm9wUMPkKmY1lbs5DslgvrZ60sJzLO1oMN9Cp4XnMMpGy76ZfrSF5whCWthU0dzgpcrJln0HlbLOC7WK+X8p62TCZL6vPirr7G2wZn+B5M/m2FPwZv4itQ6evTQWcC9U6eDZwRD17K+WXMfykT17jgoXc2wnZPL18hz0fsvKO6N5zqoo6jw4gctblezlWFNpA3dQoo5F+yV0jmj+sXcvOQ2CURhAmZUCbSMMbNIp7n+LRmON8f3ABL57Ttdw898nZQmTRvvK7YQ6wrwCoY4wL0GoI8xLEOoI8xKEOsK8BKGOMC9BqGM9poSdFRqEeQW25fjaIMy37+jcBRdqBbhsw715CZ2Py/G+SZhHGX2FhrdaE7U4Zm28ptUeSQOely56cKF05Xh2UpwHG3XlUJxXoFSnac6K83wWaKrbK85L6M4NdU3+K7GMXv5elpFaKfL3mmTt1cjfC9Jrr0j+Xo1ee1G38vdCbMjU1Tl1qaI9zBTmW1M1aMJV1x0a0mnCMc/9qSHaRROOB47akrU24XgymrTFMlPDpC2eT8LhUc/nOcejHs9zjkc9n2Y7HvV4mu18bDRTD+E551MW5RJYhcOiXD6b7fgkRT6HanzLTk9uw6Z+Bnfq4QZdOAza0hmqoSeX76QLx0/pyW2OLhy/cCN935TWajuW3+PtdeGwJxdP2o6RejxpO3/TSd83QNqO9D2ftB3d93jSdlyp57Mkw2KGhpUaZljMUfq+Tr4wwaJ6/8a4Qk5SmWdztnSmaly5csl1nuGRQj2Y8vzqbtW/DVKor0erPOefKNTv2btj3LaBIArD7JLYSAwnhYu0M3HOwcv5QjmCANZ2mdNElqDAQsiIS3nJN7P/p1btw5Nmh1wdd/w9P6HR3x8n6iJ4Mxwq+9Jhcw+Gv2j0GnhydXu8ARL1sfpejjFcTTR6HYzkijGGQ0yM5EowhquKRq+GkVwJtuEQF2+jmIttuMpo9KpuSfosjNsR2w3D98sYt9dHo1fF8H0Gxu3IgOH7NHK+Fhq9Nh5Rv4R3wyEHjtnGkfP10Oj18TKKaTzFgkw4ZhvH8flaaPQ1kPRxHJ9vy4VYEjzN9g+Oz4v5e37Egp7l1wCrM2+QcwkuxNIg6ee4o6EUjR6h0Y3VmTOsyWzPhVgmJP0VOV+IRg/S6CT9FTmX4UIsF5J+wt1qxWj0MI3OOuwRa68SXIhlQ9LJ+UI0eqBGJ+nkXIYLsXxIOjlfhEYP1egknZyLcCGWEUkn5wvQ6MEanaSTcwkuxHIi6eS8GI0ertFJOjkX4EIsK5JOzgvR6AEbnaST8825EMuLpJPzIjR6yEYn6eT8alphHUPzG0kn59MitvIomt9IOjm/UoNBj4mkF7uzNtDoiRqdpPM+mas0GPSouIKRnI+g0ZM1Om+XIudXaDDocZH02b41lHMaPVmjk3TuY1mswaBH9qkDOT9DoydsdG5rIucLNRj00Eg695+fo9EzNrrZDfenk/MFGgx6cLck/f8erDFCjT4MLiN4o5N0FtyX8epseHp2GRbefQdyfqLU6Lv+xWWEb3TW3lmIW8Jrs+e+712GJfC5Azk/0mn0od/75SoSNDorchM+fjVM8cpst8+50G93S4EVORZljmQafegPHl1EikZncWbMvbXIRez6A6G5+xzyzc/iTPpFGZGmPvhx8TP0R79/Tn27/LMG+ZbnOJ2DtT2ZRn/p97T+pc8h3+hmHzq88d2yCdXoj0/9yRCr0tUbneP0P+ydva7TMBTH78aHxAAMILHGpxULi18g50X6JMx5oU6dI4U1GSoRsVWV6NVVVen2AQg3mGs3duO0vql9nF9CWwgglj8/fxyfThtrDb4YfYX/qb1Zj7MgAKNPm2wSrwnmPCSjswqfqVhAQg/A6Eny5W4i5o21Bl+MnqHEigVEEgDTJhvRBfeGsIxeoELBJqM75cO09P6Xd0nEMB/4gQqZR8dVzxOG0ZtNtrsJqhtrIRm9xE7SJ6M7ZFp6j3rBvcETo+eIoTo9CYTov8CF7EmWkIxe4ynZik1Gd8h0viXiBfcGT4yOGn6wIEhCIfKld5IL7g1hGR11VDMWgNKDMXrcVe9EF+Ks8djoiHUIE/UkHCJuIkf5O9CDN3pDySajOyPi1lIUK1+H4bXRg5B6EhKx1sKSXoijYPSGas4mo7sh2gW56L6roYtvRs+wQ1Z6fZwtCYooF+SIL8SFY3T90F3dU5+M7oIoK+QirIhjIwCXUON56hW4gt0Ef8wfXYUcqYq4W9kbupfMfFWAFTn2kZUzcMGNBgMemT+2aXqMPV+ZY+Bs0pci5v1U2E9WzcEBNxnie2T02PrCfk4oYWWLUYM+L8sBuSzRinwFJiajWxJZt0jKlTImRgz6Mh+m3wItyaoCroFNRo+qboZapYxXc/R5WQ8eZaM9tXGoMBndipgOsr1KooRdD0ivbSJAfV/mWA+3bo04StYZdP7NYzjdL6PHM00n1zvKF6M3MsfsBwynQsRxss668gb24kr3y+ixTNPfJJHCrgOYjJRzIfMKEWvLAJon6RvbrFdLGMitams8M3ok03RqE/TEi1X3vzJvKOEyMhQ8rNGevCxgEMr/TeKKzuhxTNNj3EFvYS6QzN4mvCjLMs9FsSqYsBy7/+RHHERdreZgi1h1H9fp/hk9hmk6rR30lvGNDk8v8x9Vdtq89TIKbNl+4xwHU9ubnWln5yw2o9Ofpse5g97Crgekjz9qTetWuJAan/jNOb/Hi2jCPoMemP5q7xfBU6OTn6aTKnEX3GKOPqsybYtmuAhRHLfnDY94MXXVo3bTuB1YZEanXvROtxmkBcwZuqLVon1yITP8y5H/ZYMCx2lnoKa7UwngHm+NTvt7muh9DXrD+EZfZthhxZ6AS6mE0Dk/oANqfbWsuhanLLxHZnTKZ9M/0ttZs8fZPrq2vKUSDy+DwRwRD7xlg07IC4vdNdXtbvHa6JRbyFEtfR3V6EWNXbIZa4GLqXDL//GIjiitl+OeXuMyevL24x1NyJW+DoS5YIU6VuxfVuAChNIfuOAeHVHPzJP00zm6Y6f7b3Sqe2x0d9ZGM7op5zkTwOVUj1zwbess6UV3H12z1C5eojI60T2212S7O7MRaGUIK9SyBAfM+TM7xAWKH+0tvZl+iBeZzLAm1wN7cbywPMU9NiLdnW9yzlx8MOS8BhdkXOIgpxelCFtEvb1wYRi9N9e58y1jnVv3wvIE+z8TPrPGHAOd63zOsQQX3HOZg5zwhWx0M6rRxR8QSe83+pi95fwwevLpjhhkSuJGMDoYrgINzMEFa65wEPlWaWUtXe0tXlD6FUF1GuD21l8QldHpnWOjfGaNucUYgQz11OCER65yUISuRFllYfos/kQJMFDn0RidWoEcnZK48efo4srRQAVO+MVPeNyaxuoL5ZY/CdvLk3tlQY6d83WERqc1eCfYbOI/7nvB6TecSjRRghN4h91eHq2LN3P4pWdq+muwMPq4veV8MTqtAjlCA/cbzNGf7gKNFOAE3uXbg9bpmrn5opNvJfHlyRzddI3XW84bo1NqQkFn4K7BbS84MA3d8/GDLobvuEA12Hq6AX/2fzaHXkbtLeeR0ZP3d0QgNXC/0ar7Cs2AG7iEIvUO6kj++dbO0duPuc3kG9jZ0y9EjU5n8E5o4K6FOQGYQDNWnWXjB11w3EtStxe6/JPUqnhvzN5yPhmdyuCd1sB9JKOfGK3EcYOuctio4V0oPxF3N+PPbk8xt1pO7+stR9PoNI6mkxq4a2FXA0zGdgtdMHcVdDPrLabqilva2VNvf4N4Ih6l4mUFPYzbW84no9MomyE2cH9Jo4M+5wzK74jXLcZtC5uCGTPfWqunIsZyiFPxy6n0ZNE+Es8R636j2/SWI2l0CmUzhGvcBcwx3SL3+mzQl9BDubHIOfzm5zn8FOFOlevf/T/UItni2dO7hdLH7S3nl9HDL5shU+MueNk5uq5IBNjy+9mglz0y32/Bhnvex+5BVrhyq4lvL/mtIR9gdDXj6sI7RaOHP3gncjj1LOxKQJ2nJ50AVOeDnoOZ8n5dgx1b3s+3wx5P471Qgq9+bu+Bp+Z1x1jd9pbzz+jJh7ugoTdwfzGjJ2Bcivt+Pui1Obu/jzXYUnIrfj1sUJ6Wp4gde0tJl6bu1Vmlq0Y/21uOotED7zZDtquMDLseSIAZjb7qCTrODTLf/drDAHbckl2bdWnGLr0Iw4vES8yGGV1V+fW95bw2etjdZgi2g3zZObowunxD1Rf0lVbmnP8uYAhrbs9uvUdUUi4+SEJfaBYTrKbovUvuBI0ecqtIgn3cmWOgnxn2kWtkzvmvjfgLLNnyQfw63G8XAmxv5UpPqdt/zundAzMs0Y1GMhKf70IlpD7uI3Ry1VpM/GDGWpEl9vIVnsmyRuYNxxxE0G35xYeyW/9cLKROU8qF6SmFLuaznpoZ4xr80xNC360ebCUsrdrXFnYFoLmlmJv6spco6Bm75/v1kQuOSxgc9DW/hOPfsGuOuCzSDhXMOpe10bWHXEh1ogn0GFtYta8jGN0Y8wZz91PI0WbsXj7suMQaYHjQt/xSdr8fNml60nsm1Y3dZ12hWxodmO3lhPGNHupmOsktdHYxZqPL41ANaMMjV/gNEjNrdvwKvj2uf25TeY7evCg/0nTeCbmq9JnZ6Aw6q3LUjB7mZvof9s5gt3EbCMPNKbttdgvsHlqgV4lUiAIBFnyBPEb34l76GHvOC/nks4Hs1TkYcOBbYCAJjKCL+AEqm5l4xhxZpETJpNNfFKX01mR/fJzhcJTYh1miJXpR7/LZSlOths2MPtNtNd+4fW3rrbvLqdRmGgrBrdwl9rjEvwgwuJ2KP0aiJ7mZfpxb6HkLCXbQhamt6zqbL+4ttw1FM6MP5zqIHqZ3YO+BcfhLEn7Crt39U+7U8KFq4Q9O9BS/u/h7lpZ6IzrdIqo7n1mfi3uyzXkliKS7ljqU7kuuG5BDUm5t9TFesUt4YWQn1gVD7mqgCzS56+BET28zPa1MnLvyxiLIqcoa28prjM5YcyoaG32ig2n+ZFbuRGPwNrY7lrTsXn2kjb+SJnp6baU+ZompJ6Jv7c45mykAryH6v4zDhs2NLh91OC0vbQnEcRg0SqdEJ2y3LX5U++ilkjuZfnyHWYxCEF1Ut0biItSxp8/1o2hh9OE8rNMHO1R/BXn10l1yROcMzYXpyRM9sXxcSjVxRr0QHTHdvPBAJzgbe/pcDzmj9490nunXggB9b2WchXa4HLbRm0XpERA9rXzcWXasylvJXn3uA3oORPfy+VS0Mrp80AH1eFkKM32IeA7PKuU7QKcUr3Z9c2vHQPSU6uNSzMR1TnSajIMHFQ3P64jOp8gXLY1+pQPq4umSaiiQ08HteALllt33g5wQPWvo9BiInlJ93BGeTjUKQHRK9Wqi5zBNKvfVNKthS6PLex1QDwsolgGjg8urkC6RwwnSRbXLjyjrXuqXnxLR5yxB9Ud0kSOs80BHVq80+oJPm60EZ/SD5eP0vUX06lQcS/TKM2x2Bh4GSHiTPQqiJ3NeNb1MnKvaE12YBwzKKWp5M4mhW4AOmrY2ulzokJqRKH2IQ3Q7GSftVrD12+g1+2seiI+D6KmcV01za60fojMtXhmii7y+BHameT22N7qc6oCac0SHiS12B9FtdGTpmo305jSPhOiJNH8+tgbPSCGITrufEVQx4aio+krLXPN6CmD04UoH1NROxrGlcSBJbc7G6Ed6eu1VKWyxJbq11gfRAeaY7aVyphgM6YbzeSV0rwIYXY5DhukXd8joBV62cyCnK3eyzNmfcz+K02tGSZS8p7i1xqrDL7Cg02oOGm36LVItLnSFrqQl5a87HVD/DraSRgqe5cUJiE/KY+vTduZmlXevLKDen/D6KRqlsLV2oP5wbAbJQbe20auj6GUQo6ugYfrdtm2kMbnCHldCSjTEy8Ot5xSFPrlpGq8cnSow+X8pPW1fEfn8mBq/5i0kmMGa3RLfNM4V6Ho6CWJ0teoE6T8kFnheoCHhZ+x1M1yITm9SSNu5spA6i9zpSZxaO0w3GT5J7CB1tWv05T5TfQ9i9OFDF0i/AXcrSSSwwUuRhB1MNUQ3A912w4oOFTqW//TuJGafJ9Y/qkI9EB0uJ012jb7HhKvBt+sQRlfjeQdIn2CaK0R0WLG/vhGSSwek5zbVyVZG90zPgupD1ERPo1bmYERnPO+i4ooa/Unv0cByumqmsQ6mi4VB+mAIRK8AOrwBxR060dAdd7A5+rEfpgfPzv9cIj1an6dZK8Moghgdn/OYUKPvrUZ/GgyuCtvoh029LwdGxU50LgtIxgnwObxULd0l3OB04mpKdBSj95CPy8Lqt4jX7ok0hOy/P5x/1p3qlhh9Xuep24IY/fBOnxuiX1GgF5jo5gE3WJw8zG2JmBomWp7QA9PD77d/jpboidbKVCn3kCATTr7hF+uqpjnV0Hnlrh8Gu05XETj9abDWjdxqC/ctwRHVMdFrPvRAyI2oTntWdM/0LLA+Rkv0VIpf++8PV13W5agxl3PndbfrdBWB08t03OVg8P2V6AVxuwCyE6KzITpvduRqFugkeupI4Svofj05idLnRwb0oP3h6JPE6E5heoGM/lwbD1OnqwicfgEhOlJRSXQJNKeGZ6P0nNqaAzr9O3SmLLRO41y7p1P82nd/OC5S9yS6vNkana+WofHwJXK6isHp67X7rQE6CSuYGJ2SHD154SR7vo/oXVs9fE38+yiJnkLxq5dybwmYMEKa7aNLa4sNfL7QNZoNKNNVDE5fkl30ohzmYWXdwfR8ZRw8BENwmCjR6WfbukR6FlynMRI9HaB3QHSRg6BhmZWMYy93oosJGH2ma7QyKe5Xp6sYnL6umbkGhBOk491zTHSCdOkEdNqbh2bk87bb6f0TfYP02Hx+fED3JrrIyova3Dy3s1+pO43Sr9xycZCOuyydfm28FIPTH8zKHXiOHqgyDm7L5zCYGoMdg+f8TP8C3SgLr9P41u4JAb2nbjI074bt7RqiU8ePmJNrvJ5LpJcDauRUW32d6/YyK3cI0QtUNoOQTuN0QR68crhhCH7GAXpwr4cnOugsOqIfH9DbJ+PMQD95baRL+h+k+O5qdD0Dp98WltEPVfd+Z+fcQThIhxsZHCYuSCc2F3uJDqMzpmcd6FNsRE8J6J0QnfYoo1to/tvovPVN5n2ltUOUbqxujou112Sl22pmTq5hjxfwKiQJ0kkOjimY4RfuaDPNitSRyUMwvTeib5Aek8+PEeiNiA6Gx8tEeG/mdGnmzXXjaHS9NDYvNQpidDV8bm30IbgbJqsyDtmdxOZwgSR/UJUAnR5hA593yvSsC32Ka+2eVr+J3vrDgddxeE7enUyOnD52MDocF7vc7Kd/K1ij999zZklS7tTrAp7s6TUY+2J0C+XWETYapidD9OwsKqIn0W+iWq1NjcLEHEZjSVtgkeJ2MHBi6/0ANC4CaaZb6bEwUi+TKm8jJdXL0fTN28ss4ZYKBiPRQvmBlPmIRumH7iP3LotWfdW1C1oLR9uemKtCcvcCcV6//jZwQ+tsABoVrjrfc5X6Om9pdKXY5cWLw+EGt8MNE2orh15dRcOl3K13dBSxPIrSD96LIv0IPW8strkrXT3uk7RML3A1qBnI6t8HS+2i+QKMflsE0Mbqk1VLo5eDlUF6OcFFj9nChJrQwGszlMOza1cHILqJ0iNxeswp9wN1fDUT7VLqQHSBOipZQDe6mbmWooFGYYhe3qNVS6MrRsTk8AY77tjxyOowicZEz0UqRM/OoiF6+kBvS3S+tjVvTnR6bJO4/da9utzoRyiit3L6olDltR/o6PVVBQyFdt/M3IroeSpEzz7FQvSYgd5fhh0eKAykRBcuREcRKEjsfOvg2nGn6+IJnP5nGKK3Y/pXIHrt0h1Sc4wE6RjbLEZ/GekQfY30GHx+DEDPXP9ErPhvneetiS74BfyTa3k5hOmTIEQ3Gs0bG50nOtjbIjpduqud8tgt0cntFaDDQM8ov+jySxxr96iB3g3R6XlHiw0VH0x0jdFhELsX2zB9ONd+YfptCKLD84duphEQnZOkfgeiE7uD0/GrP9HhtYroYZEeaL/9fRREPwagNyW6gAdcvkAX0rI8hjiNz2FeakdNYe0eguigO91IBRC9kuloFNKWIi1ige2eot3l7CvOL7qcRkH0qIHeY4xOryZEhxcyzEQS7xPtKEjITcIRvdRUN9DzfqMjp5OkOymZpQn3JkTHdbIWxeMl+hrpB/f5cXSKc/0TMaI8aEx0VNxtSWwbrPkh/ctL99UgRIfn6EH7a+oCdEmJzveWY7Lukk686DmXSmdH+UWX0wjW7pG3fu2e6GxwZwG9luhbp9N6GfoP3i9KB6ffBiV68VX7a7aP6BbQDc8tswvEdf99dPNgY3Ts8RiJnv16cKIfB9C9iC5gAjFxHgZ6I6ILNk6HLNWjdtRfX9ap978DER1eltpbYzefw6Ct5XCMTpEuPMzOf03ZvmL8osvHgxM9cqD3QvTK06cEHLVEJzG6hfSCMN1x9QybbMGI3nSPbb4X6EByxPVSBRfCUKT7x+iU6DzTIyT6+rMtDXz+/9fWQmbdOTD4E13ujdF3mX6lvZwelOjnDTLv98bn1RUzeBedbKAX5lb03DpgXRj57aMD0Cv31iL8osvHJmv3t/T51N5idBjuOXfqcHjSjwgD0i3CPXs5fRSO6Ea++bi7wmvpbv0fs190kf617qQRTWW//Tw+ov/8zp/o/38PPXDWnbkQ0D2IDm6vIDmwbT0m2sfpo1BEB7svtJ8me4kud9bugHFkd2VVxZkXTyGTsyjf+DrKL7p88Cf6m2o40Q3RBXpnmWAl3V2JjqiFA/UCmd1o6uP0SWiiFyvto1VRt3SHYabqxtBmRkSXLYkuKpr7RVTrvtHPhyT65+xY5PonwhLw5K5GRIdBNpKs7TV/pOuHccgY3T9KnxXKbekORIcwHVe722VxzD66L9HpFfMXXc4O6PTfsujVS4zO+dyb6PBCK8Bg4HoZo6VX1ntcBNaD38q91unmAq9TUaTjMy3+WXfry4t2PB4l0dcNKLx8/maOs1QqbyNjXjTsbjJeXZxtiRJnhYTJjNdGa+bNOGbq5fTReVjNvHLuKARwk9oMkFq/M104VPM+cun1lnt/4qzA7v89i0uHOHue02pX9GZJWhc1OmCq2NxKmgUsDGXJL05+Dmz0kXbXAsf/TlKMSFsphX5pdJKCu9xlVUP0XlLDk7+sg+VUjfm3UyzTaX84uAjRYXIUbXe4kZDG4GpzK3hyKm68ls+PgZ1+754hMD5fT1bOz93oBbI55rnA+TnO1b51NVtF1lvus6vTAxP9jywyHaI/HNo5x753JDq3TSzA4Qq7XdkqzhdftIduwhr9zqfOvdra5x5EJw2gwebU6hzRmwE9OqKXRTPOTn9bxTKsAhudfhAI3qqcToTKvMgEDkdpaFZFcfN0yMW7e3oAhejnLYhuIR1sDRM4m/6SPZGOFFtvuXeuK/eT495b6ylGpxfK4zIZdoluDjSAInIiFdWPwMQb/c9/vFLvl4dZuz9ib9vDg+ggBYPk4lmim+HacYoCPC6i51n2wZnob6tY5j/2zme3bSMI48embf6gziEFeipASjShus9gv4ULAu7BBPwQzdm3PotR5GTkkIOBGMmhsA4GbOhmOLAMw7Dh3HIp5fVUM56P4lBaUqLMb6ldqn9iINan3+7s7NB/FhwLxNGYT/Suhegkvo1G7iab5xo9uk1vNu0aeo67b5o02Gcu1z63E53qUXDDs1kRWqOTz2ciuq4sV5PRlVbMRF/uvbXq68OB7GjjIh0QXSe0u/vYTPToMD0fbtrlF+n9TZMegJ5L9NUpiS6n73zgbfqge6eY6B3qqxDaWX9uJfoS761VTHRyvGoS5GR4JL14pKm7RDrZu3CNnumP9HrTrgu/SB+WA7q2euzGUmv0WCQPsaxh6lUZPuj0rh3pi7NGD76zEn2599bm+FQW/AgmmZaJUOMkkR7ZiR710/R40659v4t0M9CZy+OsUe9e5YiOH+DCDryoqrpqkW5Buna6HIQqoTr87L42En2J99ZqWaPjSjKihjCMuqun+bNoXEcu06MOmdtC9F6apl/tRj/zavRLS1xAsly43DU70eUKPab8946ooVlAdIPLUdR9LsE4oJe1E/2nYPFUX147PKwmaI6DcQo1qpQMEZ05fZLRo9M0vZ7X3P3M8BMpKY4RnRrx3Ex0rojvs3GUY6IzFUBdh1pUmtToYl01wkT/wbjDtsR7a1UQXYXiArReQ48HgOoqokug05uYNwZ0ZPSjtMzkfeDV6OeGbxbyuRsQ07HRsdPpIoszorteEr3rg+i4MVUWjEN6biP6cp9bm1MNd7njmg8PjhqGdBV5j8sQfTXNNDA73Wd23Fpa/MVyRA6Hi/SSRJeK1DekIDpPX5DxklnW6NRqED7R9qON6E/kqQ3VrNE10V0nPxwhtrtYo4v9NVUj6bHP8+QscZsZnXa0691gOyr+gnmc/EoYZz4vuUaPZZlM8jQmOs6BnWz4sCAzrsY1OtT3JqIvd5HnKoneoQFWGkNEB0tDUE6GxG5ZrruwOjb6UZrpzmr0E49Gvy0MA34gnyuv8ym8nehSsUa6bDgWVz7qrnBeS9A959P70kT0p57m7iEzTnmdER1E3UGhV1YgTuZu0p0Ku08yei/NdGY1us8jbFtFRh8ckbdpJG9zrtuJLngeuxdYpAuiy791g0IDzyl0U3EwDuuZhejLHYqrvD4cLhDMgE49SQNdEF15nE6vmSbvkdNpmumifqMfFv7UEwj0iIfcSxE97gLln1vj36hAdqKjlinoZC0MO/djXZVoguBnC9GXORRXD9HBRE4+E0B4He3pZlL7a3IG6txNjQkavZ9mOh/UbvTPReH+O+5zFI0rnRnnFFHWDKsjxxdCIObO/lm5Nbqcr3OfO4fPgegrFqIvdyiujqg7aAaik70VaVRlU/vMnYz+Lh3puG6j94p+KJ1O1VF3wXRzrjvfV4sF0BXRJ8fiusVEX4gc2AC34JUmunr/5LLiwukl6sPxDme7opNpYuiIUxkEpazJLmtGjdfKdqRf9nypnyTJRKN/yb4MVqdVZJT7Thy9XM+CdiplNpq+uFxo+rWHvoUp/xLYXAL9kRqdFVdzfTjqRQAOfPujOBDdiVPUNLj4Eu8eiqVGdI2Ei61T9LsE0k96vvRXgdEvew78rj0Msxk9vm9ucDejcIaKaIBDboR7LnNlOZkSBaqD8hhsxeQPApAdVxCHX7ZQHJL/abo6qgZF5hYROAZ06qjKBO+6/NNM9V8nEb2f2pH+pedJ75PJRr/okat9EX01jkDryubQ7m755EkcEXQd3F63Ej1kb5jjw8of0DjS8zI+n4HoL4IFUG0n1XDTRMdAF7kxDOnURfwxRK5Xn+VRtwqATtpPU3Pgvd/zpL+TTPnb93uH3o0eAZ/zcz90r2ZNEQuC+CF6Jo53nhJfPdFFdpyF7ct0QLUKooNoq2GNDrxOIwK6eFQwDZFqmOikNLXupQ+8Aj35mvtzbnuejb6KiU7eFkTHj36I2MOoMdFldF7861Cbnt4w11OrmOjB63JEb/STkmslOthUKyI6B/rDFWmgxwRyvsrU6HJEz0X6qXP6jeGMiVeg5xv9vOfR6OR0ZHR9MICde+HhOIn0DiJ6Xjq8Soly4nGaeokevLGR/CFM9yRqxYVa5c+eG4nepZcCumsodZN/UKnBTzRICl/li3RbxvuJV6Anmzm67vX8Ez1CEx05Fbq/IgX0yNFcP3wZFP2Bgk/CZsZ3/WMmVGf0FYPL2djoWnF11IdTXodEBxRgIGd3EV88PuBdstwN8BPtEI6Jfpg6fSs0+q1HoOcb/bjXq4DocI0uUE6NHX6hXhz6Z8E4QHQ1e9elReQXAPWY535PrwdOv5Qh+lKdZ1kEouMDLOwiyCiiy4Z8joqgs/OiTleF5V487qFnOsnzuX+jr06KurNu9OI8B+qwO3WKmO4nEV1uso57cNqpIqIHL0sRvbmb6JWv0TshOZ0u9Rs0RN05MATRI9dRqF1e8PO8CpA+Vup0XlO6zNqOM/oVPrJ26NvoBHS8RldEF1Xl3BtH8I+d0eBuNNHdBaQLioSI6OgEc1VGD56VIPryb6JXRnQacR1IWqNjoseCNdrn0OmY6Cwa53RTz+babeJ0kePzioies0ZX6x+B80hkwo087m4yySOs/CAC9jquO8De1hJ1d3pehuiNrvI8h7x2UfE1LEiMAxc7YMmW6jrhI8JGdxCHSD9InQqqNd55i8Q57eX4vH6ix2p7TbuczJ69Ipq36yp+MrSqia5uxUeCMO5xlY6N/l3lRP8xaJRCJWt9OIh0tNFinrqDUkg6FFd+jU5h9+KaUl+8TtyTfp7P6yc6/T3mT93lSWB386hCgC3qrubtqNxUdVF30uuKif4qWBDVQXSwOEeZE0h45u6YzqsWy0l78RqdrdPl0XBDdtzQa8T9r30QEhiQz2smuusF0VXJKXWnNkb4NJ5JzdVd00TXzfs51oD0s53oT+IkemgS/88Y1VFpEbzP0tXb6CDdXcmhiLWiNbrAujC6YSv9uudDn53PP6/1rlBCHKm2qDthnAbyNhIxvSN9LokuTI44DoleU225gPRjCaI3Ov11jmt0RnR71F2t0SPXE80Zl3LX6NQU0ddSw9z9g8cF+l/vs9uh+gnk87qJLg+wObNHxHSWGCcsLxfn1KFVuuS4G3VmHJr+UW0Kb2gfG+CVlejNnrnPqz6cjMSRrHN3FmrnQKeraI0umS7210g3Fa/QD3cczkexd7w+r3+NLtY9mOgRgZyVi0UJM8YD6TRIpKtoHKwi6cvob+xEb3T6a9314ai5rgDowuCM6CBfRkzci9bokunI6CfVprmvjU6h/71/f3+FfV4/0dU2ukxWILmdta5OjaMR58tgotNA/6D2NXqwYib6EtWQ8k/0juvoAvvoucXbyeoK6vzMGmFd7aFPWqMzqzuiq430g/3c82R9Hz7PAnE7n3pOQ+3zeRFd7qWrkjLReGON2x1NunKOpocS6fLr3lT/3ZPng7FemYne6BpSta/R6UYS3ZLsTvcRQE0cq6uQ6IR0bfSj1dUbX0lx2Oc72azd6cujCYPyee2Zce4GP9CFlYImnqsZl+u05ORczt4Lct391I/ERn9jJHqzZ+7V1IfLOj4LM6qrxdbgLMAeU+FD18UR1ipqQMxTp8lIR9ldljPzu24qErc2jT6dfvptjXTMf9Dm8ZpWzyiz+VEzqpu9qEIfeyd/RSrNhsJ4OocGi4yvN+Vk1rQXrUy0OR8bM3Ovh96upxE3qPEkkHX0sWEno6NYy+p0g9HTfQlavO9FRp9VMlvmaq1qo0dljB6P+9gN9AScSD3Uif+KYgF/uu0YS9GQpVEhCnmpNpXA3B2ryTN370THM3Sp3K00UHmYE53eAnki+m0WInvnbgHR6Ry6B6MjoGc79Opf+yc6djqSO7/q+ogGtt0e0UC/IiEen+drebkYsxMdNx96YzV6Y2bu86rXrnCORZ8FnooRq7yYSoneT27JV3cw4q6N7g/og521TAs0dRfVNd0bMjm/kbN2eqttz3Kh6DITHbvcj+9XrEZvysy9IqJHHwv1Tr5GvVH7qBl1mLXsEuPhZN2ePty8f3+skT7sv/ctVv/1686Mf9ahTfDvxax31LF3qJn10U50mHvlQda5e2Nm7tUQ/WB3rLe7b7U2NrKLvVyntG7Vn0BbaSqvUTMqgQKJqSeJ0rZRSQL/32t2JO7M/v/alVqF/gKNWr/XlvgFbiCtIx1Ak4dqja6XhMj7Bk0/d2/KzN2mWYyO9RbI6Gm70bVmNPrJY6JvXibejT5eHxxn7+ZodGxhu9GzjrQ1ahtb6/cdDVnL0a4MxeOsOXT+0XZe1efcvTEzdxPRW6M/SFV2Srwb/V/6sweX2802eo42xIB11FFSWXPK4mai+5y7N7LM8+xZcMtu9D3J85vEu9HPqArl8Hp7OY1u0a52Opmc3iiPy8EgL3P3xpxQbYlexugy7H6T+Df6BQXzt7efsNHX10/7+3qNLhNkQ9xU6F3J59y9qSdUW6JPNPrxJtviHp55N/r25f/T9idu9EwHMZ68k81hCjXLncmXx7l7Y06otkQvY/Sr38cin/s0+tng/o/eO9tujZ5R/SP0uDyjXhx5n1IvTEZvysy9JTpWjoVPhM/9G304+pMHWbS9NfpIu/sUdkfl5fISZjwx3fa4xcZUhWyJXobo19zn/o1+c4/z6+3W6KQ+93iozQ6grpg+rV5bjL5s9dzDsCX6SMzn/o1+PML51fZ2a3S8UM9PcldHXHww/WeL0RtTz70l+jRG3ztL/BqdAgAXZ9ut0dFCPVTV/tGOOVy3T6ufLEZv4pOYWqIXG/3bvc9vksSr0cnnN9msvTX6I+2+A0Av2F7zw/Rnno3+LCijlujzNPreyOcXSRVG37u4TpLW6ED7RHK6mN3hCl3CfWr9YjB6Iw60LBjR/wBaRKNfJb6NTvJv9H+AfBv9T6B1o/6waOMQpbnnzdbVOLVeGozemAMtC0T0Zhh9cJK0Rq/L6KR+B5QCz5+40zij1X81GL0RB1qgfBSZCA+qNPUWkn9TY6MPr6UxF1zL8oXQV/Vj7QrtKp8c14y0OER0H2WjTEb/MA/tzajBcO9J64M3XZUjf39c5rugtpy7XJffTHrh1egvggVTiOTf6L+3eso6LjnF77PicoVOdyPJ7vPyyXHNSIvLVE19uNborQr07byc0R3T1dNZkWRdcRPRp95ga8jmWkv0VvPS3XkZozunW4iuQnbI50Y992j050E5tURvtRwa3F2VMbqbvXOsI4U0eCC6ZYOtIZtrs+yZt0RvNau+npUxOkXkhM+79BJQF5a3766X32BrTM2J/9g7f9cogiiOIxYRVEQFFSxEvJ0J/j4rIZWF/8RhaeEfobVd/hYRK7GwiCSFIKYIGNIFJQQJhtjZGD1fbt697+y+vZm7m43vM+dG7Yx+/ex7O/N2Cka3oBtatr7og05JJ6eLQh0Nm0owuuoBW0cermUzujOjGxOxoQ06JZ0rnaPeV0O4o8uEJ9g6cXIth9Gd1ehGYlNOE3RizflR1hnA6PGka6vRhaagd/nkWsWxGt3gzKFQHxAv1nAvzseMzjfF832yCpqC3pn9r9Z1N+bN1p4i6MTLVZ50L7ruwuhgQkXPKd11oyHoXR7oXo1hRjemy9auJuiU9EU3ZnRf+yAdj6PBtB/v3pn9r/mM7qzrbkzKriLoxP5N3HX37Dl6fY3ek+047K7TmYK+0CuPiqExujOjG1Ntvg9CVuLNOP6KB16i86XlVJ6g91pTrNGtRjcS+KEIOvGZ/M1tzi0ujR7W6Nhd7cfMdLhEtxrdmAMPapM+4LzlRoc1OhO68rWr7Yv0rpTo9hzdKIUfuqBTQ47vgGVGr5sWqzK6vkjvcIluRjcSye/0wRj7rsnoRIUXdlX7Ir0rJbrtdTfKIZ50NEWOZ91HjA6bcQp3KYv0rpToiaEefsJv75AVxXy4e4Yx7nT9bLm33vE1vMTh/1DDH3QlRJF+ki1GkSV6ZnvL6dkUfQu6MRk76qAPVv9oXCwBKZ2fUg/Oq7L2HCzS65LelRK9SsEFi9qbeqM/MAzBrnpa7D55nH0gYBNNi5Orp+qMXmSJnrseR8uCbiSxi4MOWHNOl/RquPjLH/RJv1Fn9I6U6IlGZ8uCbuRgDwYdsSrv3Rkw8u3nyJ2tM3qRZ9HN6Eb5bO1pg77PXC4Punhu9EDoR2rSJH2hzuhdOYvePt3BVX67LOhGMj+/gqBDPjuWc1K6r1O6rNHpE506U2f0Is+ipxndid8II25GN3LxHgQdsxjcs4MDbdDo8SWAZ9LbG/1ib/5Uld26G6WxoQ36Cik9MkfOwxod551shgbHxY1e5ER3ZPR8SbfHa0YudmXQMWsUcLoQHhudftXK6OdPxJPelYnuCRW6bLmb0Y1cDTll0F8uspx7Xdddvlu9NugXaoxe5EvX8hqdvj12624IcjfkHsVgb2QDzTj9c3QCtOMuhpU5T3qB22XsObrRHXZk0DFvSOWNJXoVXFDNWUW5Gjd6kdtlMnbdXW2J3nwe3YJu1LPbGHSaK0U9d1Gk473uscmw/3DN51pCyjvRgpnI44QTd+8WdCMTW9u6oA/WjmKuO73GzRR+ibIQN3qR22Vy1uhmdGO6vFcGfdN58OJ0XKOT0duOi4w/Ry//7YoJXXec9GjQB5gHhlHDww1d0Aef5RZYX291vNjNqnjX4sRGP9Vr5ngYfYB5aBi17OmCvnmTVC4nw3q5M04xdUZw5sSJiWv0q70SmDTjdGUPIy3oRk5eKYJOSqdVB92/C4/jpONu3BhF9uLydN1dz/XM6MYM+K4L+uai7jy6nAGNjO5gN44Yz3oXpsu0MroDwY6zMmDA5+gPDaOex9R5hwS7Zrz3N/98IE6Ca3c+Qo7NkTsZwIJe3tG1RKM7cKMulgXdyMr7hqATq55w45+45eWpNjZCjsn9XBj0cJXYi0s1Oos6NHplQTdy0t/VBX2djM5j7l07o4MpiNSNO4mTfqLAfXGJNTo4B8C/MXbrbmTn19f6oBOLfoQL1I6FLlPtGh63XQ5yzp6pl9iLk7S9dcctdqIyoxu52dAF/fO/Kt1RusnmCqPL8MsO3ULM6AXui0swuijTKzO6MRO2tlVBX14cEzoV6HjuDBQ4+sURzOiU8sMf3dgX19Lo4yPi0ozeN4xmdhRBJ6VTvqNGr7U7DDzuxo2etBV5RjXB6Gy8BDld+tyCbuRmTxX0TVmiU9THUu6x0Rv2v1+NGL3EXhyiaoVjbneMyoxuTIODaNAZa0dG91So00+UVGgRlyJGL22ke06j0xcXLjO6MSW+qIK+EhO616Ya7Yw9YmFCo1/ulcHEc6PM6MaMOGgOOm2aucmETlZn1bmmRAdGvxYxepEbYKHR2ycdN93N6MaU+KIK+joZnbLuyO6gG6ev0YmI0QvcAJvB6Ox/O+u6G7PhQBX05cWRw1ni02p0SvsNbPQi392Qutfd8X3AZnRDT36lixnvpHR28XgaBTY6LWD0K9joHWm6q4NOPh9ezOjGLDlQBX0/TLijixwNqxU6T/plbPQiN8AmGF324sQyoxvTYhsHXbTjwlYcCV25M67pDasL2OgdeEnLJDW6GxXqZnRjZuyogr7OH64ho2M070y/jo1eYtM9Q9c98Ll13Y3Zsa0J+jIZnQk9MusdnEivL9JPQaN3pOne3ujUmNMaPU7fMLSgQ2wDwdtQ5t7R0lDhFXADGr3IqRPJXXf6Ei3RZxf05Wa+KXmWmQ8z4FkWPqbdT38BPP32l+VP/az8UgV9ne13J8BWd3Q3CntxAWeg0TvSdFcHfVjENEIHhxqDfvj31E/idjN3AXcSuA+4NSfuJzD6E6WlcePpkNch7+g7vb7Tz8nuc4GM/vJND8Hhj4+agaK/dBIx953ulVxpXXf2p+YKl9O0Leic/zDod+8+fdXPxwEIumQtFnHn+RFWSEUxF7vlqO0uKfHpWj6jV/VKP7ZGvyPWYeTmsUoI+lI06MS77/18bGuCvu45ozlyYYPOqY0eDEisTsOgz73pPk2jD38aFbo3o4/zXxr9kG/5pL6hCfryYbLDNXK6Cy96o4ezEicI+uleKeQ2undmdDN6IPWP/Uz8kkEHvEVGJ6HTVW90tm/kHAr63MfLzKVGp6Qf16Cb0fVGJ57+6ufhkybo6xRu+kFCD65/oGaS2DMDjT783Ggd9HO9YkjouqfW6EtJmNFzBH0pgbjROesHS1nY0QR9M4g5Nzpd+Yk2nveKvgTJr+iD2+5zf7qWanRHF2F0WtGkH9+gHzujLyWgCDrdvi9l4Yki6INVTzCli6GRDFmmD7+ynFeXYdCLmyP1m72zedUhCgN42djIRz4K+SjvnDPGJbJ8NzbK3yBLCysLS/kbFLGUlWwtrKSkFKF0JXVtbbgLkaTYuON43jnP+5x55zkf7pyZ+/zmmBcLJ/Hr987MmZnQoivPotdjrKJL0TmiU1amKVjliL5sBDcDPesdP5eC0sjtfuKM+/pa71fX0h6jk7fNbsyv7lJ0luiUj7+n8XzliP7MCI6BQ3T49C96vTvkFD2/W1oi17p3Ap5L0aXohG8pTL/AEP28MbvUuoK9/VgpKLvz1vSOohcu0Xu/upa+6GhrR4ruYKMXPY3pqxzRH2pH05XZNYfq7pNxZJUIfoPwPpfoub28IaDoyv65FF2K7id6etM/cURfrjWHquNnvePHS1EKJDtszXBdX+v93rW4oqtiDnbQtZKz7hQpegrTf3NEf2b0NpqX6Os6fhiFZpyPw0Xf4hJ9EPeuEdFdKCi6XEeXotu8Zoie1vQVhujn9RyVFXTFLXrhKvoeT9H3T1xkVXTAv+ij/uouRY8RfSna9Pcc0R82a2Vg10iOz7qT97IVYLuz6Ltdog/i3rVO0ZX3MfqoF8xI0S1OeYu+9HEaxwOO6MtwhA47rZDlZu9+qQNEnRa97UJ6769j+o9FZ5g+UtGl6Db+oi/Frpy5wBD9GTntjpNudi5AcnfR3RfSB3IZfdIVcyl6gyPoUnQ/0ZciV8OuMkS/bjS31sYpO+Vm1yL54qIXOYreR9FBdSn6PFL0f6K/iLvD5RND9PPPIenwOXdlrf1Z7x1Fd11Iz/EyuofUdGOiDc+w1JS1f6dpFAypYwTOSerUnJwRKfp9w0Wbx8f/8n9OvZ/9fMkChJ+X/0VV1tsa5lMToOpaW0N1c2RTTV6ixz7xtfW1LCL60FkX0R1bihtcLjJEX64wGupuf8DF9GZ0vUd9jcNU9BzvRud7XoDp8BtSdBE9tujAp2kEbxiif6sQpZEbNDc7cNv6CYM9VPTe18vEFR03HfW8ENEHTm9FN7yN+fL+niH6dVL0iiTdVBx2ZiwqeojoWyYe9Pfm1EZ1KbqIHlF0Qsys37tErylJ0Wsqu+yo5vDZyQ4qeu/rZVK8OdUyPuYY/bIDEZ3NMEV3bcCDiEk5oj+qELbfoDw+OG+3HP+f35yh6LFFV3FFv25x2c2Uh4ieu+g3bWjRKRcjJv3SiH65jcdzogOW8mC4X9EPUdH9L6PnU3SQHHboGD2d6GejENFTiH42hoWiu7YZn8InXWWI/raj6LpCRYcdgwxFj3xzaiP4fyv62Wn4JqKnEn0avLGLTrkSPul7hujfOoteoZLDLkT03t/eEFF0KDhyHc65S9EHT/9Fj0j6d4boHzqKjr65ezV9GxU9v4VxXkVXlu5S9BGLnr7oLaYjLgbP+puKTmlbMAMDFx0+GBzJT/Q0K+NqlByjj1h0JvFFx6o/CJ71IkP0h91Fp1/cU4u+c9IXfM9Bdlp0EX349PTVHbESPOsKQ3R8fY0GXZdoXRxf9T1EdP+FcfkVna6ME9HHQAbH6CceB8/6hiH6Y1J0gBa9qfowRY8ruv0WSSm6iO4jOi/p74NnZYi+TIpezQ1jNh4MDhLRe38fU1TRm4GKrgoRfQSsW9HrYX0u4dNxgfxgiP6WiI6g62XM1s1mInqGC+P4os8dnkvRRfR0RQcCJ53+RKJzLqSToJM1sOZjmKJHrnVHJ9/lGF1ET3CMvpTmu3uA6BS6YCZ50bdOuPRe9Jn0UnQRPXXRf/En4osOzIlOByyU4XoOENF7XwEbfz86Lnq9E9FHwToX3exI0d+GTvuFIbp/0QcrOsFbdPTKiuii09tUz0YRIXVKgU9nzrGFRIp+x3Df5iU8gPLkcfhx0uzmCV0zs7LoNtXLhtKmopTawTBFT/TEV/iJiC6ie4nebMdbTH8dOO0bhuiPkOh6ftOVwk98N4PBPiJ6fkvd2aLbhkvRRXTAr+jQc9CdsBI6ra/ompheVcZs0Jxf9CPZiR5ZdHBdii6iA2FFb3X9aui0AUWv7B8m6jjpwxU99u41KbqITmCLDjGHDyeB0773Fp0WHd7eYqEGKnqSY3TYSdFFdG/RIeVgeqqzcT8Zoi9j0SvdDDDdqA5jVnTd/HBxYF70DJe6O0SftIkuRRfRCb6iG89Bcwr36RP+ol+bE13jUelSaQT7ZNye7ET3KrqCHTJdjtFFdMBbdGM57JysMueJL7qmm1Zo1CgnReaixxfd/ESKLqIDQUWvhxvm7PFF13NJ16WmQd8QRSdpX4+in4tCRE8h+rkYukQH2dv4FTivf9HpQTqqufNknIagIw7Oi57fe1qcRWdfRxfRRXQv0RlcDZzXu+j4uzstOlxPR2fj3GwmonvfvJZF0VvOukvRRfRhiH7F0Fp084FPugPKRZG76B5FV2aHRZeii+gzhib6VVJ0ENw+SFfzq2AbNkbRCyXH6CI6IbnojxlzpCu6Rqory3H7rLsec9FnKHSILkUX0YG0ogO8aeKLjpJOiq60u+h69EVv9Jaii+g1QxOdFh1Mh82+aw1ctw3XLUXfyxZ9xySC5EXn3agqRRfRByW6q+ja7nmlLRR8ciCie9+O3mvRFfqFHKOL6IihiU6LDj2HD3oRvUX0InfR466jy1l3EZ2QWvR3zHniiw6ek5Vx2PYaPe6iW2EHyQdQ9HdPZ9xmcovJvfGRnejreR3dyjla696gxlx0N/iv2W65dlAZXtmiX3Gw9u90Lorja9y+uZA7Dp4wuTs+TlMiRX/i4CU8gJKSUHQKlv9t6aaqR43WuqxHQ2nc/7vNhqvomHUVvaCbT9FV+6k4UL0YlOivzwnAz40q+lHYmrCXzaYNSHf0Ngf4RZGT6EmKrsZTdBF9EKKzb2rxF/0FbTna8Hl343qpsOT1Rtk14KIXnUUX0QdLxqIHzv6DIfojXHRqujZvTyZvWCVVLxRm++CLvu7H6GeiWCj6GQFYLHrUHx0reuDsLNE7iz6jqof5oWBrBuAv+qQm16IrXHRVoGN0DT9E9OGQseifwqZNV3SzAyy/LeVVkZHo0UVXzqIX8EHRIvpAyFj0H9yJ/EV/yCt6ZUe9VFptlKIboOeq+XCilYiePRmLHjotQ/Syq+iW5AA4jkeRk+jpz7pDyo3scow+XP6n6DcMd2z4or/jz8QX/YqhPMooOhydw7BeuQjbhij6H/bOntWJIArDjSDiN4Ko4EehM5tVgyAqCFErW63EXyB2gmUKgyCCpYWlWqkogo2VKGIhyGqwCag/Q0GEkMIk43HnZCY7Z+es8azOO3M3ubfIITc8PDOzs5sDJeQHGjd6v98/w0gC3U3bQO8HC0SD/oRgdDfyh+5/atXdNbo2P2D0BLr4yAU9svixj2HQvxKMnjt9AfJ/zujKu+oOzTK6toBPRm9J5IIe+yl9IYDOM3rpdf0PztHDRocko7cockH/Hll2HAa9CBvdp3Rna5y0oXsDc3SFnqP2p+box1ipBP1YCqQadNZL80AvYsteJoDOMjr0/8zoqsLoCXTxEQs64fOPBv1d2Oi5dro9YtciF+M4RocQjA6LccnoLYpY0GNrfyeA/iLG6IZsm3Vxi3ENGV3R5+g6Gb0lEQv6JFwgGvTnxPPouONVuH9v1R3NzytX3dMcvX0RC3p0VQLoGX1nHJ6jI8rlDd3buep+jJEEOjXfhYL+OLLo6WEQ9P7XjGB01+ml0KUO3f/kHF2lVfdWRyro0aW/hI3+lWB0V+mWz3V7Vt2JTO8PfM9a+QdtGuqeZCbvEdX+ve7HODGg3/idu3YS6BboDyEX3TBBv2/y1M6zg7648H+PrTp+C/GB3p/mctFByTyZ39x9Idrz9S2u0deskWR0sr2db1/yIn8AQEcbBEWBbrUEunzQi+iqb4Og90mgu82YbH6EB2Ggxxkdk17+6jW6Pa6B7vyrktHlRSjo4+j38/btwLTloL8Igw43frZaZswFlP97RgfSvUYH2g3bVktGb0eEgh79EU0IRj9EMrrp8DPt5exU/XNG368AduuwfIqOuruekSeji4tQ0GNrnh6GjX61QzE6brPDr6jy4Add0l1gaxodjqZXGR0P3TX6b82S5cnooiIT9NfRRb+Ejf61QzU6dHNQlsvNQRroPKMD5fNGMHrZFpNPezK6rMgEfRhd9HXY6AUBdAQ5PCwIXR7oXKPDYf7j+NxmHTkdjdzB6Fme5zTQT7NSZfTh6RRINeisl44HvTgRW/PE27DR35GMXiIOwBt9YdTdL3Bop9GnsRDHRke8a5dzZfCGBkbP50Z/YmXJhpnTrGDQcRLoqwH9qcltOyTQx9E1J4MyfU/ml7RQQMcj9znuCoyuKoy+pr1Gxwvujs/B6O6t85ylOGP0LM9XB/rAtAT6NO0B/UN0zU9h0J90KKCDzk1bOJGutUzQOXN08Dkc/EbHnEM3DrcwN0bP/7LRHyXQZYNeRJe8/iUM+lcK6CXe5WM5ZldCQecY3bI5foKF7tkHbDGew6MxepaMLiYSQf8SX3MQBr2gGT1fJP2fNjqen/968AndoI1Zt00OT8w1A2mOLiaVoH9mvfQwFvQf8e+GAPo78tB9mdEbAX3rDENpRp/28okKG13bG2ZyG/fMkJ6MLiUCQX/AKEkA/RDR6HglTueGctWU0TeykG5+jo53wFLm6HjV3T7kyejiIhD0+I/n+pcw6Hc6RKPb3TQgvAL0nfVAl2R066qWikm6o/Npy3SZPBldZuSBXjBKDsKgvyeCjlfcjdFVEPS17Te6NU03QWN4V+fKGN10gL2O0a+zUmn06ymQatBZLx0J+pf4it8IoL+sb3Sdw3l04aBzjI5IN6zjb1E1v9k6h4O7MS6nGp0POjZ6Av369baA/oNRkQB6l2506NDEg84yOh68o/tHeZfiStaR0c2hjtHPs1Jp9PMpkGrQWS8dB/prRsVxGPQ7HarRrWZ4bxb0DTMMRRsdluHMA7p6DeOuc8YcnQs6NnoCfZp2gD6JL9gbhEF/TwTdUXrTQ/d1+1cSMue+huM/j27uMGOS6ez3U5M/D/qRaZZdvZZA94F+yQ0L9OvDhyb4opajSzOn/Q2j4oQA+ksy6HqxU4y+px7owoxO4dx0dICr961BUAJdWr6VoF90Gs/oUaBzPpuPBNAP1TA6ajTQt//zRsecg9GtGY5pCXRh+SbL6CNOxbtB0AdfO3VAx11rtdClgb4Koy9SbowOqJuejC4vwow+5LyVQdjoBR10l3S+0Vd/07jal7TAY4zRNTT/HP2aJ42AfrME/ZWdBHrTRqcvxlWAzhT6qU8E0F90oofumSIYfXc90NtodPeCdGvcDv+2OqCfYqUS9FMpkGqjs146AvSPnHrjMOjXOmTQkdPJc/Qt7TY6hXT3JjO2zQH6BLqwVBl95aAXJxjlfgzCoI+ooDucw33dkc6lgd6M0QlKxzthczxBT0aXGFFGZ9X7RAD9ZV2j40V3xTP66i9Ir38rKdLQXTtjdzz2SaDLiySjj05wyo3DoF87VAt0vJCcAdvQfUbfVQ90OUZXqJkeXoszPTN8ly0N3eVFktGHrDcyCIP+ng46pNQU8A1RPqOvabHRnRY6vwYdn51IRhcZQUYfsap9JIBe1AUdiwoCwPNA3zTFUKrRK0nHA3hjdGv0nuboIiPI6LyP5S4B9G680csNMwh3BuiruHwt8ksWl4KO+IaurbNr0BLo0iLH6DyhTwZh0EeH6hvddNPQHN1r9LU1QZdj9Ho7YDHp9mKGeUhzdHGRY/QJq9hnAugv64Nuj0md+8XxQN+xhFbZ59G1PUuHhmxee45+gZVK0C+kQKqNznrpeqBfYdX6MXDjrrlHgQ49Q4TzjA6b3cUafd690Y7Qf1GOewJdWKqMvlLQv/FqEUAfxYBuycpSulpi9D0NgP7Xz6MHjO6M3RXifNaS0eVFitHHF1gZE0A/cogzdNeZAqHbR5ztNUDfNsVQjtFjtsBCwzOc+W8JdGkRYvTiOKvUZBAG/c6hGNAtU7nf3hABOmEPrOjz6NrTNbZ5GrpLjBCj8yr1vhBAL+JA19AytObuN/qWmqDLMfocbTLp2OvZwhQ9GV1gZBh9dIGVH1cIoB+ONDqMRp2t7ooJ+nofqwKMXrkF1n7/8AB026h3slnL3qObTPjTY+XgNDdLtm/bGfZSINVG73Hiv/HExXmO4kx6rHy8EQR98L47SwTokLnRVdnMbzjriKDDHlg5RqfO0fH7N7B7h+6G9Pe2vR970gjoltET6Evy7R6kedBveeIF/UqPlXOvw6D3Xy4H3dNyTxRSunev+xo26AKMXsW55z+glcX5726EHgb9QQK96dBBL6CvCPRnP3q8Qjf8oD+w2p0u1+g5Frr5JRJ02Bonx+jlkD1g9MX/gNbgcrRh2ICejC4mEowOZWLz+kbY6M+6bKNrpQNG38sHXYzRaXN0wzoAXrb5HD0ZXVC8oF+c6vziykAf9XiZ3PCDbgu93+UbPTxHX0sFHb6rRY7RyXN0jd7/LKpEHHoyurh4QC/guCLQJz1exjfCRh91GzC6R+kKZWsAdMLWOAFGN71qjg6Eg9Bh3F72ZHRpQaAj1lcF+phRAoQemqP3jzRjdIWaY/TttUDfvH+/HKMD3QSjlwvu8OPeMjcZXVow6MVZBPsqQH92klEChB4y+ptuE0ZfjNJU0Ok7ZgQYnTBHx6wbtpPRRce76j6bpK/K6IwPA4QemqPDuTW20d0olH11QZdj9N90E4wOgMMz+zp0eKxh9BOsVIJ+IgWCQEe5OAWd9dIk0J+eYGZ8I2z0O90/YXR36L4lADrhRLoYo/9k7/xdnAiiON6cxPj79+9fhSZxNUEQFCWlXBlb/wLbq65R0C1E9hALQVuxUSyEYK0gthFtFJJKiP9AwEJBLNzbyfPmZXbXl7zdN7My39nbSxUH5MNn3pvZvX/U6A3tFiCnq0E2ugddJBh0vJEuAXr/KnP+Suj5NfqtQUfG6EfmBN0ho9NrdPOpfHzKff3HG925INCBcfVJAnTGvwBCzzM6CL0Mo2cdjKODftBE1QWjk866A+p4H90b3dVcnwV9GRbuIkZ/zZ3/8F426EjoEkY/OSfo2x0yOnkfXYtmdLx890Z3L5lHYAVA5y/cL72792+j3+mwjE4HvTYn6EdNVF0wOv2s+/qFXw6pbo4YfdWDnm50iNjSnfEfAULPNTqcfhUy+v45Qa87ZHTyWfe0YNKbvuvuYDDog+ntxk0Joz/iTv7nvTzQkdAljH5gTtA3m6i6Y/R5QNeq88Ab3c2MEejLaPFeIuiwcOdlRAG935Ey+jEq6BCHjE6u0c1otbmv0Z0NAh3nRsmg/2bP/R4B9CcdMaPvygKd/o4ZF4xOOOuOox10t951X9XijZ4DOgidb/Tr/wB9wp77hAL6oCNm9CPzgl5zx+hAN8PoeS+ewMHwX2YkH/ThZR8TdIT5jdJr9NvshfvHlY2kgZ4YA4QuYfQlAujST6STOU+C2SaDrtIKtCCj5+T58+fXWVkH/dlqeobXfSAa6NHN5emAYn3E+uos0FXG3JlffbeSnwT0QUfM6Cc3qdBBP+SO0cHgSOhU0M2A0cVAv6eGBz0rqUt3hXpUJugj9sxHKwTQ33fkjF4jgU7fX5M3OqabB3qr5Y3uUC5nGz0q0+hr17kZr1BAf9uRM/qJuUHf6ZTRZ5XONXrLG92h6KAjo0dsow+zQe/3uPO++osC+oeOoNEPEECn7q/JGx0w/5sz3uj/UzZAj5LlujJ6lIzyQP/NnPWl619XKKC3O4JG3zU/6FvdMbpC29R5E3680SudGaNHIkYf8ae9QgG935E0ep0AOn1/TX4fHVn8jDf6/xW9GRcpmZdu9NfcSV+ChXtuYGtNyuib5gd9u/tGL79Gv8RKrtEv+UBma/RlZHTWV2eB3u+xZ/11hRDoxAkZfSsBdPL+mnyNXrjRRUGHeNCzYtToNzWjlwP6mD9pCud333dEjV5bAPS6o0ZPRXx690avZIwaXdlcXaWAPuJP+sUKJe2OqNEPEECXf37NRPo0oUYH3AHwpjd61WPU6Erp8VWS0df4cx6SOP/SkTX6MRroOBUyemMhoz/R8jglxYAe/o0HXYVg9ETmCvUSQH/YZU/5O4nz2+2OrNF3EUCntt3ljd4wjM6t0WVBX1XDg65CqNHB6OUs3Z/yC/TeLxLob9vCRt+3COg7XDR6Vpre6NWN0XWPR4lG/82f8Vfawr0tbPTDmwigE/bXHKjR0RYbHJTxRq92Mmp0tYz/TP0WKujDAiYcUji/f6EtbPTaQqDXq2R0X6NXOGaNrrXjiga9gIZ791VIW7hLG/3EQqDvnWXVhRodjA5p+hq9+jGNHpVm9EmXP99JGNIW7tJGP04FHWeLN/olRrzRaTGNDpV6sTU6NOLYGYZhSFq4ixt9FwF0StvdgRo9veveLMvoV1nJNfpVH4jRdUdGZ331LOjjAmYbxqEs3OWNvmkx0A86aHQd8aaBu5ugT+NBz0raWfeNI7CMLzZA/8GfbFygx6Es3MWNfpIAOuG0u6TRG3BXv9D7IZNQ99FbKTmrIgT6BtsedEgm6PHGWrSc3KLY7EmYRn+pMm3E8efanYQU0J9faMsbvbb0N3OBXnfF6Ghkvycy8KBXM9rSPYoGMeeD9YW7OiBXJOjwVZyMwiSEhbu80Q+QQKcfgpWv0dEw3j6hGz3Qhwe9GkGgx5yrsY56oUafdPlTHYYqhIW7vNFPLQr6HreMri51Szd64I1exeigx4D3E8iTW5FGf3qNP9Mf4TSEjru80euLgr4boSpm9EYa6Yv8AYfAg16J6F33fpQEUC/O6E+LaLiv0UC/2LZi9KVFQd9u0egNuNH/9lqAVu7e6JWJBnqC9/IAOC/Q6L9Z3wOcQwgLd3Gj1wig07pxbtToafvo3ugVTk8DXVGuOC/S6IVsrE1CEujvgXJho59YGPTNbtXoep0OfOsJMONBAUbvsZILes8HooGudeMi1Y373OMEQP/aY0fnPCTsrIkb/RgZdPohWHmjA+G5z6PjdbsHvRrpohodunEK9mJAXyua85CwsyZu9PrioNecM3p+jW4oPQ/0LwboZnqszJyM86BnZPwSEsVRQles842uNtB7/CDOw1SVJ+kD4+JGX6KDzu/G8Y2O+3D5NTpevmPM4zgC+qoaHvSMdDXQY7T7wHnCfBGgT7o9dkYhDfQ3gLi40WsM0I9WzOgwQOlugO6Nnh9s9GnTvUCjT6702BmFNNDfX2jbMvoJBuhGN85m133jIrwzLvBGr06+bYB+c+rzqKgavRDOr0xCGuifLratGf0YHXQze6ph9KYyuladw+9WYB90b3SUXNCnKdDoT8c9XoBzCujQiLNh9DoDdHQ2Ttzo9INxYHSt4Q7U84zeZSXP6F+7PtNooCudDyK9Ru9yMnw67nKjOKeAPmi37Rl9iQP6dktGb8AtVen5++iI9VZgH/RpPOhZQUYfxJAnhKsbF3Q+5+NJSAQdTsRZMXqNATo+G2fP6Gjk76Pry/b1tLzRnQ+q0ZcTm+tHYLt2M14LiaAD53aMfoIBehx3avR/L901zFUCb/RKRAMdnl5DRreZb2urBNDhkTWLRj/FA30rxtX2Wfc00psZXffA1+jVCGrGJUfdk/LcCaP/WF0lgn7/XNuq0Y/wQD9owegN9HG+p9fgUqF33e+n5NOnT11GvNFJMY0OZ2AV7lZB//ogTpiS17O5fw6EbsfoJ5d4oG9DtEoavTF31x0LHR5qWRz0eLuky8rFOM8e/I0HHZIJ+jIkUrd4WAT9mmrDUUD/dCMd6vMpKcXou5mg73WgRldoa7/yjY5a763AjAfdsSDQI3WtJ7nbA338NMyMwXli77YxxEA/zgMdP8Bmv0afNXoz3ehBXjPOg+5aNNAjXeZ2jf5jLcyOybllo+/igr7bvtGze3GY99bU6AF6Hj1AaQVzgX6FlVzQr/hA8NIdKFekR5+vWMm1UZiXFM5B4miIgb7EAR2/3F3Q6A32O+MgAVa6B93FpNXo4HRLoI8nYW4Mzi0bvcYGvW7N6I20rnvuPjpsqWlXwnacVvLjQXcyOuiAORTpdkAfroX5meHcutEPMEHHR2Ys1+j6h2yjB4bRg0TlLQ+6q3HN6Nc+hyEZ9Nsx5/aNvosPes2hGh1ozzM6VvqU7/jyoDsbE/QEcVtGhy4cCfTb8fa5A0bfxwIdP9di2+hmjd40TsYZSp/C7UF3OQh0ELqk0ek6h+icO2D0rUt80OvyRjd7cfSTcVjpYHQ0zrY86E4lfeku33WH6pwO+puYcxeMfoIHOi7SZY3eWOB5dGDcG71ayVi6Cxsdmu100JMXxDlh9FNFgF6zVqM30ptx2TU6BJTujf6HvXNpbSKKAjCoQev7/X4haiQ+EPwJIwkD8wOyycIKLobZBBURNy4V2x+gFRHtQhANLlyIMiBCkS6kMBUXMjUGwYWL7LJw5aTTo/f0zpzceKaZO5N8E2N3wdqP7547j2YCXYo+vnD9dj+iNwK79Sj6Tr7oeEhP/8o4Iun/BB8VPVPoUfSLnUfX+xH9U/A8GU2KDiM6T/QxvXbdyWfG4aSPZvRsoEXRW+3rAaqih6fVdCn6YaboeEhPs+jSlA4UcdFx0kt00W8JxNymepHFouiTf7knsnBxBEAX/eIg+O7dW2QyglcIYRtOm6IfTUb0tancjw5fq++6nyripMcXfSS6VlBFH4jolVDzPkSfD8TWp+g7GaLzhnR+0eVnQyo8170kvLpvo6JngpSLXll4dq9P0WfPypxPq+gworNFH9PjfnSFZ8aJlEZFzwppFR1rri76rQunz+pU9MNc0eV70jV4CqzarntpNKNnh/SKPg6zeT+izwdPCNOq6FuTEn1b2rvu4UvyvAh/RRV9NKNnhtSK3kKaq4n+aTbwXK+ir+GKju9JT6/oCFxzXHTUdE1m9JjTayPR/2W15QJlwfQlVkz08U77HqAu+tsLgebpFf1kBGsTE33LcZ3Oo4PquOrwhBlEKbLoAxO9MRJdCVH0RnjAnaorJnpr4REyXFH0RiA5r+jJi36ILTr+XYsaFT32Wncc9bSL/mkkOqfod1au6B1vbm5OWXScc+2KPpac6Jv1KnoMILggPLfo4yxI0cdHALjoYc7DV3B440kTxDzQXF10lHP9ir5vDVt0/HR3XYou2F6MLLrgO7foxjiHyZHoKlRQ0Rvlxbc7MKcnLDpY3r/ob7o517DouxIUfZ3ORf9r+ylQHGznF70zzqE9El0JJHqoeljz7stL1PI2WN6v6I+7m+1aFv0gX3T8K9g0KTrYLssOjvc6jz4SXS8qnguE+3DdP8kXveNDy/9D9Pmu3XoWfWeSom/SpugEIDfYnkTRKxy+UKJXRizRcuWi34FX2UvkI754yPL+RA834TQt+oYCX3R8gk27oheX/gDyhM4uOk/Hzkh0FdpIdCg6/MoWtuhGx4cF+/+JfqsamK1t0XdzRcesz0DRT4HjYDu/6H6FRSD6k8m/XBPxKyNCmq6Ldt2BRIre8X5OxKEmenglnL5FH2OKLp9g06Lokb4X5V33hIrerrCYjxf9mVEZ0cV0BULFG8EBRS/zlj5eIPTcjbn/Fv1T40KwbNe46PsKyYp+QI+iE+Bd91L4YhWdL/okFh0xWruHeK5AKDma0XnbJEueO/fURceaB2hd9F1c0eUTbPoWPQTtuidU9NsVFm0sOqZVGQELd1R0NKOXeSv3iTlnYs5WL7qsueZFP8oXHbNNw6IX8bXukHIh6DzRA5g/xZToXmUE7LjjK+PEGX2qwsEPiw6mq4sOmmtf9J1Ji75Xh6LTa3hpQuduxrHPr5mS6CKdytBjtN2oogszulvh4E4Elvc/o4Pm+hd9WyFp0XdoUHQEseue1E0t3PNrRuU5JbprVoYd38WEI3pDmNFZ/wGtoOfByr3voj+Z7QqehaIf4oous0HfouNdd3QRLFH02fcCcaL7Bou2JLqIZww3leazZYQ1F+9eMw0GfuB51/W+iv7qbbWrdzaKvj950fdoX3TIOCSdKLqy6L8NFgtIdImOMdS0ni3n7+k1UN0xOLhLRQ/+UhX9U2NR84wUfUMhedG3pF70yEdJFaUnzAi+84v+ivmjTIs+1zKGmJYriS6cXgv33H3WB0zAul1x6T75IFyzZ6boh/iiy2xPuegIlee6l/oo+q0IHndhqvgYiS7RNoYXs+1IQNHBde7KfRE7eEWdR7+2jCfT1cWaZ6joYysh+h7tir5sSg/9BsfJoquL3jRYeLTok74xtHhOjOhC0V3uyn3CBqll8LUx81fipD4fQZToSRe9GMFJxLFCl1URrBbpU/SxbBQ9dFzhPPpHJdE95vIUiS4z0TSGFN+JAGoO+3Gs705HXKaTor963rU8e6IfDkVfIx9Y9D5Zn2rRT6AD1zwEXS7Tu+jnlUR/ZPBwe4juDumYHum5DafRl5I+ZXDwwHKbKDq0PJOij4WiR5jOEn1zmkWPoEjdj07tuquLHmDwWOgh+pCa3nSieB1aDvC24kyYz6ml+5NG1/KMin6sAEVfBrPoB/QrOvqH4/tZep5HP6cgOndIN41WL9En2qYxdER7/qIsEAT9l8FhAW+8yXx63ui6nV3RDxcYRadYr1fRBcVhRkfEFz1EQXT2kG6aHi36UJredCL5Civ30HNe0A2XEn3m+XQ35dkWfazAmNEpNqdXdJVnPqOcEw+e6E/0R4bJOAyjSYvepW2YQ3XEeH4fLA8Jgs75lA6s3OUZ/XnjSjUg66IfK/wrulj1AGbRD6RVdLrmQKnPos8riB7QMnm4pOiLeOYwEeO5Pb1s5e6bHLzYc+aTgeR5EP1wARUd4BQdWK950VHP6RldXfQFk4ffW3R7mEz3nWjeLPUc3n+ZHFrxF8c8yInoYwXGjE6zWaui44Gl/xl9Vk30tsmjRos+bE2P83wKWg5r9ybvY8SFu41En86H6McK/4qOXV/FLvqBlIp+Qjpk5/uf0d+piB5gmTw8BdHtds0cBmo/nGheTJcxT3mf48YX/Uo+RD9cQEUPgHdG0YH1qRSdntCJGb1EFv28kuj8tXudFB0YCtNrn51obnyFnAMdZtABe7no96v5EB1W7onuugObNS36InLQgzei6Ofe/oMSvW0y8V4sQotut1tm3um4Tgy/wG+w/bPJwoU9d/nKuDf5EB1W7lEz+ip20bfoVvQuRWpGjxIdUBOdv3av06IDbsfMN81Yz2eQ5QFTzE8i7lS7kw/RDxeEoiNYRQe2D7LoQFzRi1LRpaZHLt2BeUXRF9hJp0UH3KaZZ3wHgwd0vHJvJhB06DkWfaaaD9Fh5c7YdafYo2HR0TPj+in6rKLod00mdUJ0hG/mFuuzE4ctDOjhXz8TCLotui6s3PMh+oYCwJjRCbboNqMXxV13qel00d/1Eh3o1Jh4hOgIz6rlk3A8J86gi02fqvFwiYdM3MmH6IcKAL4yjn0/OrBB36KXQssFSnTRz6qK3q4xqZOi40G9lkd8J55fguIhzRoL4cky0tJ9qpoP0fdLRQ9hFx3Yq1nR8ZVxOOixRQdURX9Vr/Ewf8wQomMWarmjDst2eiMOZP9RY2HBlnvU/ehf8yH62gLAmNFJdmTsyrjIogPzvUQH+PJNUaJjftRr+WLBJT0HxeGLGzUWEHRwHC/dr+RD9IMFVPQA3HWG6MC2gRT9JLzBrvsykPB977oDs6qi36sxsZpfKdExbrOWHyyUcwlb6vmvOvPzut/WxZfdfQ9fL5Z4UO1f9EFIXYqAEn0nehCkTAKib0zrfvTgDd5PkM91Vy/6eVp0gabFxX2uJDpE3coLkHPylrWG4Dr3W+2J397gsLuqg+jTVUD/J74Sou9as/Kir1ufynl0eO++xYiuvusOnFEW3bVqzKM+PXNNxo7BaVq1PByXPjsUH0LPQ8KvfYv3iU37ZQQvQmaqouiaP8OdEP0oQ3RlNq900U/KnksHUXSVXXdgnhQ92aR/uzJDi475cdnKPHXfIXn4r+eNpS9ci8lPSvQ31VwU/ciaQYg+ps2VcXLRVXfdgVll0V2LRy34EYww3Y7H8a2M0/zpAMS6HfHUYuLblOhX8lH0wxzR1dm+okXH23F00YusGT3gPCl6wkm/9LX8Qkl0wG1aGabz2VHpOWr6VN3icdmhRH9QzUfR9w9G9L1pFD18xRS92PeuO6AuuptA4aqS6TbN54yu32vW5R+OqueNMvC1aTH5bFOiN6q5KPqGNYMRfUdav01VND6EcR49pEGLjpPO5odkuh2St1EdhnP1dXsjEc+bNiX6TDUfRT/IE12dbStd9JP/PaPjoPcu+jt10a9ZfJ4uN93uieNn7lRb3XedXjwVeg5N99kf7JCif63mouj7dg5K9ANpFT1CdPoJMz2LfoYUHeNbCYzpgelY9NypDpqTzJRlfIu/cCdFr+aj6LvWMEVXZ/1gZvSTyPTY29cAKehU0YF5ddFfXbLYNMvV8gwSXU31zCzgL//V/KoTz1SZ33OZbzYp+ptqPoo+NjjR9wy86CpL95LqjC7yjhQd07aSGNOr4lk2W5Eb2ZjVb8IWHC36gzJmOpD9qsXlskOLfiUfRT+yZnCi7xjgrjt2HJxXe667QtHP0KJjmnU2f9g7l9/GiQAOL9BQWN7s8lqeQpAsYrdC4n/IBbhVqiWkSlEkRwk9BBlt0nMvOXLtpgdEfFuVnCJRCXGgUiQ4cMInq3IPlnKwct/TinHcX+vpOO7YM551Rv2cONksj27Fxzczdu1vZ8T0YXbRez3n9MeSc+osBCeQ3XLPe5OEnlvi//pZJ1X0R4YeRf9QhehgvdCiV7HjuJRU7qKDcQbRf5KhQ88wjIfZRSfMTho/lpbGyQwhJ09redEP3JjmQILnfidddNPQo+i3VYr+svqi012nqeVedcfY/a8EfmXxf5RAYBjG0WEEv+gRfkmzfupbDImaW1ObHrQT4aV4ftpJF/2hoUfR31pTIjq4WVzR2bZHrktedQf3uEQHMjxrhqbboxyiR1nf/bFk7J7MrAQSPQ/iOQd/Svgadq4Q3TT0KPrrakV/RVnRq59x/FBLnlV3MM4i+p/NhjindcMw6sPMooOZ12yUBljOsmx6DsZ4WA1hmrNOuugPDT2K/tKaWtFvPa1Vd7wVX3UH97OI/q/fkGW6uZ9DdOCUw3VYzin61E7seUMcv3OF6KahR9E/UCU6eKPwK8wAqujsYfT8q+7gvyyi/+tJM91w84qOMXzjqXIKyzlFtx7Ss/Mz/IY4J50rRD8y9Cj6e7dVi/6+qqJDbfnH0cEfmUQ/lJHSprcwvT7MJzqY+V7j6dD0fFi+lLTVdgzd5XjudeIkB12Por+1pkx08GZhRa9ynRknfq47uJtB9OFw+GdDBpHpZpBbdOCcnDaUgZQ7XAtvZOth19uvU4wl9vx0pxPnkMU1EliVC0HGuZMgdcGiv1uic91r2Vbd7zJJ5xf9l+HQl2m6e8gteilkh+QcovesnoVdZwLBsVvgeg1xsOC+XPSpoYno6wmXdi5a9BduFlR0/sW4muCqO7iXQfSQEzJ0Fd4i003T3BcWHcP400azyO00Zbi+k8RF0amc21A+8rwpuO3OOleJPtZF9E9Yz4srOnhVVdGlz9GZWfo//KL/S7bhaVMGoekmgSfqPT4c/+S0KZ/QcYScX3SrF3pOdszsHHde2m2KA89TRB8amoj+aYUxusCig1vFFr3KeWacyKo72HiURKLoCw73ZJluLqBn6v0EWgksbbtzcuLBIUEanneCjqeycNoK5T5/JV9K+GwFlybn8P1Yytfod64UfaCL6G9XlBYdrCs4M45ejJNfdCSdW/SIHTke7QZmhD2VIjrre27hieAnqDgHvcj0hd94JVvL6tHHzskOWM1CPGdFnxi6iH67onSODt5XcIUZjuNrNYFVd7DBLXpBppuTQ9miA8shA/rQeY8Z1TP1DvU+cRwm4dxFv3hdaN4auZdn55DebwoDz9NFn5q6iP5WdPslyvFCiw7eVLXqznHJuJyr7mDMKzpwmlLYbZkgKEh0tvQsM0uQnXjSMTu3DoKY2dQ715PvOWBW4nQR/Q5uqAiKLjp4V4tz3Rfczyr6rzBdFMsE9WHxooMdCgsImx7zHJNzZnZOdvunBXnOih4Yuoi+Xqkon6PjCNtTvsJMTXiODu79wy06kGW6b55jD5WIbl3adqLNEgBBP/OciN/at+OCU1i7BXnOij4ytRH9dfYWyUWvuoN3Ci06Zurs5WUkrrpD9A1e0eU33atTqksUnfUaS2QIcLSLPBWA1py8heZU0DFNd+TMepwOh+i2oYvon8ZukQy/iy46uFVM0atZT3aviRf93h+8ostv+l5gXuBOpRfdajGbtUh4XE3yVgB6ht670HwMuxcvYynTcxw/5xB939BG9A8qBNWr7uBVdfdeo8IufF13VvR7RxlER9N3JdEyKdX5RBfwnEzSQ9fpObWEopMdBu12POXYE6Z7uzLownMWasVdG9HfqxCUz9HBa2rm6OwmcdUdon+VQXTw554k0/06pfpQSdHpmTUQMZ3s+gGlON4AZ1cKntXhEX1saCP62xUUXemZcWC9qKJXqT2zyV51v0cYP6J5mMD+JXqyTPdcM059/7ifhxYnvWSsvA8wmlw6aD6m0u7Od2XQnFv9iOMERucEhjaiv3dbZdFZXlS56h57hdvSVt0JG1lEB4ferhy6IxMMyGYOJiPFoltIf46tF9KZuvUkxmj6tLsrBb8PUkUfGvqITk6WUTlHZ3mzTPdHF1h1D/k6i+hgKidSGL5D9AFG8MKicw/7W/k9D5t+gDE7io7jarKH7XtOn0v06UAj0e9UQp6PvFZ5Zhx4WX7Rqxnn6DU5RSeMM4kOfFmme4FpGgvT4Xo9GCkcup9Lm93zPmLOMMYu8CR9l2Z9PtFtQx/Rz4KOois9Mw5JL1HRhVbdCRu5RB/OurJUn0VFXzyR9f1jRUW/7Hjvyj3eTYM6ix09sbckfZPmvT6f6BNDI9HvVFB09XN0JF1y0dmw0+fKZLque6LoiUWP+DqX6MPfvD1JzN3zolNDeGVFz1p1Zsie3HR3vieFLhm284m+b2gk+noFRQ+JO66g6OBm0UWvAkbwGv0rlip/0SPGeUQn+HuS6Fpxz5H1wWQqUHROuOfyMQ4CN01xTNIPuntS8Gas1MkMTWkXgnxq13AHsbs2sD/UAqlpnokjSfRXlB1HJ6RdM479TiXP0e+miL5xlE90Mnzfk8T8KN50zNcHA3d4LFR0+aJP45bb9DM0HLiOrG8NW+8kpqPpdLD6V3yNBZ3/iq8QPbbJEv2Fm4qKzhjO3B89fMR2WYoO7ucSnTCa78liBsdjbV9gB6OyiH4wndhUu6kndTLcVNLEph3mnK/oh7YG13Cngs4tOms6RBdPupqix5OeSE1o1R38kUd0yVH3hqHcdfNC93Pqk+HoqYuOlEPnJOxoJzHnLSI2Z9FdHa7hTgU9a9HPQdGVJF286NCcbjkr+vkue9HBOIfo0qPu2GZI3UTc49iM7AorP9qH5Ek9xw5Iy7k36x8kMEok0OKuLFXwwVo5io6kF1l0WJ5+4YkqpXrGOTrY+C+76MDyupJot86OpEdJrw8ItOzBKKPo/TyPOAfT4Ii9SSKtPP0brt+Vg9/v84v+UI+7suC/649heY45OoquMuniRU8yvHaxZ1bishYdpucRHThdWcwfnB1RR9Hr4SMG8Sj4gcP2yNe8YY9874+Cyc8YkjPYkdbMbx20uzLYm1v9DKLvm3rcZ40KeuaiR6DospKubo4O2VmQ80XZQaaig6/yiA5GiJg4vk0MR9FZsKY92Z4epIsO1bNt0YN0HI4D9NqG4/gQn0W/nMy7UsCpcJyiD3W5z9p50EtT9Bu3lB1Hh+xJQPMQLMFD7vi2vOjg61yig+N5VxLtmY2io+dkh7eUe24QTJfUPXfMfyeKH7H5pibm+JCdrM/k5Lzt9PuZRDcNTe6cSgU9R9Gfk1h08Kqa4+iQHWLTr9SgPV/RwT8CoktV3WuZBBT90tCdxXYnwRDCA3Z6jnf0R9gRwbeDiQuhASM7pTZewNQ7H3gL7Lptvw84RR+bhlZF/3itREXHLL3golPLciz0gnvU96xFB+OcooO+NNXnPzCr7mh7Cq7rBqTx0ykRhOtcuQPy125vb09ct54KfiqNMhuf4B21CNfOv2v7rT636PBcs6KToJdnjo5ZuoKipxxii9ymVb+bVXQwFhOdGOa3u0BYdQzd6RE8L7YbMgkebD8gj+2APM944C6o58Cmek533sIfXcByaM4tOjzXq+gfr5Wq6Eh6QUWH4UuLXlsydK/mFn3jP0HRCY4nTfVBAnXVQGdm8Y2epP89j2veJlue3Sbm5ryio+d6FZ0EvUxzdCS9wKJDcLxPH7rD9jyH12C6qOgEa97uyti68+8WauOpRHR4zDJmb7FEHTq/+LrbObvuQXNe0eG5ZkX/eK1kRUfSCy469ug4BewG1ZxFh+lHIqKDkTNvS4Gqepah+zjpM7JxPFLcx2/jDbA2ZfxZZwecUMfVwp5rVnQS9HLN0ZH0IouO1yX3WKRiTp65iw7uH4mJDvqOJ0t1zNEzFZ0VWKjo9OidTvrUawvjOWRqnkP0IYm5bkVfXytd0ZH04oqO16UwQc9ZdLAB0wVEh+szKV33Hl/0PHfRwRg7O+W5ZNGdDjuYzGXEHMN0LmjPDd2KTn5srWxzdCS98KKnnAeLnkP4qljRNzbu2xJEBzNfSu5+zr4Yx/o7plRPebKy038nAf9E12kLsjnHzDy76IFp6lf09bUSFh1JV1r0GvULANtFi04YSxAdjEbHM188es6DTKKz/qLIebBjKaePsjlCk3NYnlf0SSi4dkUnQS/fHB1Xjyuo6OTBcdtkzM+BWNFhOiV63/HnBGc2yix6RKsluj43f7zIer1EPBYbrXjRiD236C7RXL+ir6+VsugZLwjLLzqT8+QzYFFx+lz3BO4mkCx6iPEoxvF8s32NdDbzf1e3wv/n1q+UeoUuBHnBi6zU3KID8k6+6C8XVnRCes5r4ZNNerLoX7BbougRXz4CrfnmNWWjTZ5bzncaiv4Wz21ZVFwckuUlRUX/PG3VnRJeuOiEr6ILRu5fa15iyAEJ3US/k+B5SUR/scg5emxLXItDy/EiXnRw3yaeW1ub15SZJ3/rJfpHCU6XRfQb64UUnQEf0brTkldlFB3888jZvKbszCcaif7e7WfLW/Qbrym5P/oSqDNlJBUdXHu+AmxtPdZH9Lcrz5Z3jo4rUKgtOkDFgWjRrz1fObYcXUT/9HaFeB53vVRD9xu3bqorem3JxSFhvGjRrz1fPbaeDPQQ/YMKin5GyYp+45Xii/75ldeMg/CSiv7D1jWrwuaTgQ6iv1SpVMo8R8eJsHKLzuScd45elVL0wdY1K8QTUwPRXyeiX7a8VEN3nDVTWNHT749O/0SLpKI/2bpmlXiy+qKvV0LRQeR4yYqOE2GVFL2GHUSH43iRUfTHW9esFs7Ki36nsih6iVfdCS+qLjpkR9AhuZyiG99sXbNSfL/194qL/lGFwM7RyzV0x1kzxRQ9DabnVRlF/5+9s9dtGooCcC6ySdMCbSEUAgIqBIWqKYrUd2BIlKFlIFIlj14iVj8AElLFUqYyMCFlZwqij5Bn6IvYQyJuMEeJ6xtf/5wm91jnu2maGfTps0+ub4OPDDU6A9KiN+qh6NLsebtNK3rlwc0VHYSHikeIWI5V9N4pQ48JadGfScuNn7pLxN2lFF19rntU9r23RYvunzIEGREWfcMOiXtu2KW7WFtfQtE1e933kIo+OWUIMnHpir4FooPZ4LhxRRd3bqjoyYDfmFP3i1OGJD5Z0bfteNFvmTh1n5pevYGia0+HBMMxix6cMiSZUBW98UQ6TmPqLiqihlt07Q169NIdPiHco086DE1GREXfsYH5K3cjp+6y6OIeStEBCPmMRU+vybfwd8bn0fcV/PsSnaHJ6fhAB4LUeAdBAi9yHASpYFlFhy3vKEWfXbCHVYff6qOkolveC4rudBiqnJEUfTeH6PG1rKLLpj9GLDqIHr5NfxKGcdDz8FNB0f0OQ5URRdGruc5wj63lFV2IDdyipzll5o1iHldM9KDDUCUgKHrjiUWs6BWxiVx0WPqn12BN34oUnWdxpGkTFH3HIlf0inikSXoO0WcfdQdPwKeConcYupyRE11O4ugVXb8/LqvnqYqOe4/eZuhyQU70LYti0cVT3KKD7ZphXGSDXA7R3x32JEeHzVD0Di+iq92lJvq2RbHouv1x+MM4sDz8let79AP36hIYuK7bZujiExO9UbdIFr0iHqwjFD0+i0u4dJ8lPcc9+jtp+TzD4bDN0IWa6M8sqkUXd7Gn7qn+bDJonk30Zk+6zaKXiBEt0auWRbXoFbGBUfSI4BrRYRts5ql76+qSRS8XI5eU6DWLatFl02tLnrqD65mL7oLdUdEnbYYsvnPZoyP6jkW56OIR9tRdW3TQPIvo+78u1aKP2wxZHMmAiugvLItw0Sti7T5W0aOy64qeSfTmr/MFovvHDFUmzpThEQ3RtyzSRa+IGmLRtffoQDbRm4PzRaL3jxmqBI7T/yFVdymI/twiXnQhthGKHp/GIYq+/+t8geiSyTFDk7bvSM2nP+/NF/1l3aJedHgyHXmvO6Lo0vMFovO1O2FOHEmo+nvjRd+yqBcddsKiPr2GKnrvfKHofO1OmAA0l7w3XPSHty36RRdiG29nHH7RDwf/UIsuCY4ZkoycOd4bLXqjXkh0IYwo+uJj3l9nZw/e9xLQyR+5QR+EnCu4mOIcMxQZexGOTJFasnedXdtOK7U66Ks7My66nmKdGTf7qg1L9KNk0SXBCUMQ34swbClEV6zUoitWXtG37fSiG3U4JPitm7xnCPncCl9IojcHWtGdE4Ycx4F3jauY5y1Dit6oUxVdxNbaesGpOwCeY4neSxSdk06WvnedM1OLvmtTFT1uuniKVfTwhVX05kArumR8whDD9+IcmXmP/twmKzr4HZ28F7pHj0guQbpH72lE54t3mgSegisji/6iTld0lelr93MX/VWoOGiOWPT9QbLogH/CUGLsKXFNLPqWTVd0oVq1VwjPo/+3HEv0llZ0vk0nyLjvKRkaWPTnNmHRVZ4L8ahY0cFyzGGcm1b0y+ADQwXwPI5rXNE36pRFF0rT1zZeFSh6pOlIRd8f6EUH2HQqjLveIobGFb1mUxZdXXSxWXTqLl+oRW/pRGfT6THuOt5CeoYVfccmLbpQrfCoyAJTd3jhFf0oleiA/4Exn8BxEkQfmFX0qk1bdLXnkmrue/T5F1rRz9KJDow+fWDM5pPvgOhqWiYVvfGEuOiLij49592kog9Sig584ct3swm6jkZ016Si79rERVd5HvIUo+h7SEVvphcdGI0/MKYyljnXiT4wqOgPbeqii8Wm35tLevai426BfZdFdMAff2JMBDRPFv3CnKK/qJMXfbHncoMcRtElCKIf5BF9OBwFnxjDGAcjZ4aXwIExRa/Z5EUXCaZvzpKOUHQ80b8p+K7gYkrXDzjspjAOfLA8QfQv/+mZUvQdm77oSs+BxwhFX6XoCr4o8BQ4Kekr6KbkTwFGBfhTgK6CvgInJZ7S9HC5hhS9apdA9ISiRw6hyFl0rBNmXDTRvfhi0fXgi64v+pkZRW/UyyC6Ct0JcoDOc3gtQ/TU9+0K0Cufkq7h9BWgS60A/l9usuhKqdVs5T4IUoFRokeeY0sgsehywWfjRfeG3vUfFn05oqv+7c0Sfccqrejz1/B38xQdFMf7Hr13k6JPsxL54aIvTfTYv7tpRa9a5RVdzK9q9qKD7ohT9xYXXQtJ0U0veqNeYtGjT6yuZy56tOevjRedi25m0Y8MEH3LKrHo0Qn8ZsaiRza/ou2M46JrISl6UtEPVi/6jlVm0a+Z/jiL6NFxO97Ta1x0LSRFTyr64cpFr9qlFj12KmzWqTv212sS9+eMtKKbtImmLKI7Bfis4IuCryGDlYveqJdb9IRTYfWiQ8jBeKwTZlh0HWUT3V256DW73KKL62tzPUPR51xHPO65yaLrKJvoB6sW/ZldctHjO2Lv5Ji6wxvWKbAsuoaSif77cMWiP7TLLrqIr0cZig4vWDiit1h0DSUT3V2x6Bv10ouuesplI6Xo+GfGASy6hpKJ3lqt6I2aXXrRhWKp9s0s58w4oMWiJ1Mu0c8OVyv6rl1+0VWmi82sRUf/s8ks+l/2zma3aSAKo6pIrEIiflsQooj/ljqxZanv0B3LSnmCPggSUsUKiUXZ9hlARerTcVvzMZ7MjXOnHjIT556ZxCZL4Oh4Jq7bTr9Er+KK/nS4AaJvsaaP/YpOr0BFB5WK3kqvRD8roor+aLgJonOeE/d9fnot5BodnKnobfRJ9PMiquijnY0QnS06MRIWPfS97qCE6EI40b8yfGH4zHAi5EcHPkXiRwdOhHiIPoslOjbiNkJ0xnM8Fnap6MZw+B6g6OBIRf9Lz0U/LqKK/nC4GaIvKvr8HXKLPEfVoTzNjqKDUxW9pt+iXxZRRX853BDROc9rxrboHZCKnlscnl2w8PJfMoSVn+ckMJxcqxAztMCs1AyXVdzfyrIqqUFTtDSKPvdkKbnUH5zhKTooVPT+iz4pY4o+ul29mSH2PL2i21vvHv12hlh0oem/GbqI/l0IK3qP+cnwmeE7w1cZszKm6K92/EXnTV/rom9tjyIVHUxUdA/WUPRZGVP053cHMYoexXO+6GD7Xpyig4NKRZezdqKfz8qoor8eEBGKntau+9zWe4vYjOaeRQe5Q6Gii1k30c+rMqroe4OBFh28WCy69ZH98Amje1vR9+dnzlCo6FLWTPSLoiyLaKJjwz1S0ek9qaKbL9n8rty7Fx18nJ6q6DLWS/TTEsQR/dEARCn6VmJFx9Y7V3SJ5y1Fd2fOQP92ExVdxDqJflGR0EXEoo92Blr0LYtHXkU3d757F30/P2BFp6ir6ALWR/TLWUkUEYv+fGegRd+y2R61Fn3f0vy9vOhO0BcVnShPVfSlrIvopHld83hFv/5iTYvumP7Yq+houek6OGiK7jSdPmCSjn/AcqaiL2E9RD82NY9X9IfZQIsOz+0v2ZbYTS/ZZhxsh9xmwnNHdFDMznxE5/kqRCr6zw6cROKnkOCin1/MCtQ8ZtH3skyLzpvOid59M86mpejgsCwmk8kRw4zhVMgZw7GQCyG/Gb5F4jfDhZBjhjMZR1VJoOYwPYLoT7NMi349XMYeX6/JN+NQc5yxa3SGQ4YpQ8lQCJl04KgDs8AcdWAipGIoGBotLyIWfTfLtOgLTQ9fdCQdZyj6LUUv3aGiJyZ6gZKbok9XLvqjLNOi14Pj2UKzW0yvp1mbO5txTd/3yXMt+o2cYUZyopPXCHm8oo92Mi06Bsf95S2H5z53xsF3mio6EbTmiYlemov3GEWH51p0DCA3fV946W66DrstdI1+RGr2uehmxCn6c/Jci95u+vYo8Gacsx9HD/dS0fu9Rm+OCKI/v5tlWvQWz2F6wM04HDHpteyBkSCW/JWQSU9gBRZS8kwboz4Ellr6aGdWahlyqd2R5hNmupqOrtPEyxwO/g2a9TGXin7oDhV9kr7oU+cP05WK/nAYXnR/05P8eXSbJ29kntu6M5pD7vqAk2vy5tCi+5C+6G7QV1r0veFQiy4z/YHAdMZ1qN44oOR20XMtekIEF90N+opEh+dadGsY/E2H4pzmH8wBittlnyfXonuwBqJbRafXiooOz7XooUy3JccJTctyomk6jnNX7lp0T9ZAdNv5lRb95XCoRRd5DtP9FulmjQ7L6xOr55i5Fj0lwotusr7qJ77uDodadD/Tx/Kk20W/AR81TcfIbcdzLboX6yI6WKXo5LkW3RlLGHt6Ds1xThi9zbSu3fV79AToj+jkuRb9v5lOE0en6Nh1t3wnze2ka9F9UNEXiU6ea9HbPPc3HWa7RbeTDrdt3w25Fj0+fRGdPNeibwU33Qxu1x26m5Ib2T/iyh2u51p0D1R0gvdci+5bdDD2X6MTfNHNBDlNLXp0+iH6bjbUosPzsKa763Sm6Cbo7K47dP+Ya9GFqOgE43mmRV9adH/TbcNhNWTn75fBAZvuzaTnWnQpKjrBeK5Fh+eBTed/TBUHWG9LToO9A1aLLkdFJ1zPtejdis6bblveWnTobSY24vJ66hrdDxWdcDzXosPzkKa7NYfbRvEld8ZZt8dp0T1Q0Yl5z7XoHYoO7rSZzu66G+0hN96YXfdc1+heqOjEnOda9BBFv8OZDsXtYYoO603M7e/RaQLddfdCRSdsz7XoXYsOxqznRPMdbjuBBwsfDbvf5cmwHeTnKVZAFZiiA6EFXs197WDXSC1ELrW/5/5yJ1T0rTus6c4a3XIbp6znmBhELNELdzBsnujMSFL03Ua9B+5Yhegped5tjX49371hPTfn8qLXCbeTnscRnf3fzP6/l1KJRnjRRaOD6YkWfXdoYDzXonuaTjxwTCdQc4Jbo/NAc5P0lIpOk+OXM1mq3ha9SFH0PfI7+qV7Sp53K3o9yHTuyt0pOsEV/cC84cIdWaf3PBnRuaKXrPkQuzKT6EfRS2ekWHTyXIsetOg0rKZDbSiPRTpb9IPFRf/ne0KiF3KqDSp6gmv0G891jR646DSfjD4AW3GcA/EaHUGPVfRpITO9ZK/dr25eNPHqS9FLxvT0Lt333K/Smo7rrvvtTd9umo6Om3NczC9foyPmKHrcS3eazSPNWwDJe1J06++kHtOkRMfvXTLYdmvRb+05Tct087ZfvwPo/oFZoRMm5jhbh6LbMacXMCv1HhV9bqRX9NpzXaP/l6LT6fZ9ZjcOYccAfNTtmNMretEl++6/mA+wAQeq3q3Rk710fwvPG6DiGLrrfivPcbjv7sZBc2CU5zfjEHO8JVJ0j113aH9V+10v0ftU9MTX6KOdoQvc/nvUonc0/ZmzGwfjYTcPpEfLkfXIRa+nPRgWfod+1ds1enOktUaH5zam5Lrr3slznIyZZ8xYm3Bm2I6DZtATKjoGrznziX3Z3t81empF393JhqBtja677mFMxzsmFF+Gvd8evejNIb85znIcx6s+3evuXrpP0xC9/bFRxnEtejfPaT54g4ibnENxIzwNq+bAtDy66M2i/2rddWchsaubQ0Vv/bnXvSyafymprdFfZkRb0QnddQ9hOp09eFULjjn/KCkW+F5bnoTof9g71+WmYSAKMy04dMJAO6SBZihQmAY3Q/30+cUL8FpsrB5kRRtHtja25OxZRVbCAMPl6yfJl1ZNl5s6uOuOFwZTvtbd+UtJ6zz6l4IDnb8yTnfd+3KOqi+dAed1OUa3TgfdntDTAP3F6JVzYBXHYg6b15nOte7Vc7K77nfXxUHQPZer0eNJv3h7A9IpoBoH1uZ2RJWc0Z2iFhqszidmdH/vIgmj310VxTGj19FddyGj09/NbXOBDqMjzhrdN3oqU/eAXXdP6VsMgfUfIP5nRKM/n4PR54vCRHfdBzM6/eXce1fE2SGTVI0OZbWzvt0bT/t+9MZiJqE1+g0450E3Jtddd6+i2N/l3UPLs95NeNIlLc+HhT8wVVSegyrp/JYHWPxpMkzOzt4s5/GkX3qgu8+i8L+HMprpMADpEaBLPC0WqahR2UavKM5D8jxShaNuqm6oYND9knmajBToTOVp74GMTnk7D/vGiw7vgkbnOR/T6EH7ePIEi8bSvWudQWcpjwX97vqNCOg86Wr0g6CD9Jsjz3pHh8EgRn8aFfRpGB3NDvsb/Ska9DndraZGH8XoyKd9o6OZQh5xBOenBH1Mo5s61hJ3OuBGxU7dY0Gf0V0savQRje5uya0PlvdtmiRB5zAfEXRUaxMvaaX7Uq96g17G3XtutuHU6CMaHVtyLZybNAcDrNFHm7r7d8ewA/kSVjrQxjFyjR43da+34dTooxsdW3IhRj/dGr3RqEY2+tb09r4QfEYHfIauiu7Dld6VdFNm1NHotsXuuu+24dToKRid8h6g1x0GrtExmrzRk99qCz+/Znkfzejz1Zs3avQ0jE753DQ6J3QMkjuPHg56omfITYeBlNF3YAPzsc6j4yETavRkjH55+fOhZY1uR49nYPRGbd13A/AuZ3QUusGNjpvP1egJGf3y8uPcmJw9jQ7Gz8LoZlFu+XM+sc3y36/3SJdUusUbw8GNjptS1ehJGZ1yy10aR0F3SqNTwzENozP29imlg+PjwDEGzu+Dg0ws53133anh2Nfo81VRqNFTM/rl5cUX6NwxukWd6hyM3vXcdsw5c3SAXNTortWHNDqW54UaPUGjX1yYJ0zZspjT8IzOox9cmHelOPynCjvd7sWhBt11xzOj1OhJGv3iYnHjkt7Uur0ybtpG5yncdqA9BHz+awjlFFfGdV6jA+/+Rv9xRYir0RM1OmXZQBwaH8Lo7ppw9GvdsQfXAvPW4mq7xjIeQ/dz9NJOl5+69zY6njGhRk/X6BQ6z9Zg3eJeDxO8H10U9MCNOJDZudCxX08AueTta071mLr3NPqS+FajJ210mr7PuPPoVOdwZdwBvg+T32uzjuM9wunyU3e3OhkdZ9XU6IkbvZ6+t87f5Y0O2Mc3Oljj/EstFOTuu3Gs03vHkTlaB9CjNuNmNG1XoyfyZFguzmVyJkDdGa4DEg4/6KceB3pxeYrI7wnnKSJlSzbou917vqxJTvX5cDmSHjd396uRtzNwbqpuGMuDTo3KNFNJgV793rdi5X9aUW3dl+m9l/2Z3uu/iQMTfoqMWijo5l+CXugpv0JB/3EdYW9ZfU+F81dinKOaWfpPnUEnDPqvHdYb04Hz1IzuPHmSwbxy3rdWO+YBjPcyehludPwLoKMKN/rNQnaazvxPVaPLGB358A2ce3U6o6cJOgD0eDafYcB8FeDeOR94xwCf9zA6pYvR9yrc6PfC63GedDW6mNHx3Eh4HHVSo6cKumNtSyQ+wsg3+hYj50cszOhwDBL6IEZHdTP6/Io23tTor15lZXTKO/fWVQxOYPSkQffCI2kZdry+xfJ97zayyp8zoO+UiDW6sNG/LopCjb5LXkanrOaW8tMZPU/QWfS3Tlc1WKeGkZcoocvuuvOgB92S+r0oCjV6ndyMTlk6hAsanRd6mrvugXGEjqPzFh+1/dSuCTR6GQX6EaPj5Lka3SQ7o9NFND+/NXWuRm+JCzZUbvluR7nqKXR5o2+4agf97p4gV6MjGRqdroi93Z+8q9ERHlbrcgws9fKkp2D0+RUxrkb/nxyNTvn+QJDrGv1Y7F47Oss4qAf/gpgnYPQlEa5GbyRLo5u71HWNjgSv0euyjFfYez9IenVKoyPCRsed52r0ZjI1ei11NXpAtiDcqt0xO9QtmTGNjpNqanQ3uRqdsprtpK5Gb49/zxgKb9vW6FQ9Mq7Rf1wT3Wr0veRrdMr9w6Ma/Ugs4Hu8Y9Y+NaPXOlej7ydjo9dSV6Mfib1hzQJuxnC6GUlmPKMbnavR/WRtdCN1mr6r0fk4l8MDcjO2O3NTMnqtczU6k7yN/rL9/qjn0VtS7ZVzAP+iGcvotc7V6GxyN3q9/a5GP5jK23S3KgfsUzH6cqdzNTqf7I1OWdyq0fnskU5xbjAH6aMYHZEyen0pnBr9UBIyOst+WOjqdy/94ccnIV8QhPM0fMroX0A2/G76sdzdy0PNJxDqTJ/4OoDRe4GOLJaPkk+dWW8GAP2Jq9MHZnWPESmZGgT0tR3OVsWAoIewPqUnvqZj9N33aJv1Mzrnb5DttDjQn0JqUKOXzlGWdO4PHAn6fvPuO1ejt2YiRncun0GFCp1gR4fDrw2Vx/2pjR6AnbDRqcvf6HROLRfQp8L5aEbHppyY0aH0Eo3GEzS6gM4HMPqvNqPPr4siG9DV6AKgU2hTrt8dbeuXlz14RifaJ7RGB+UCv23Jl98CE7wXt37ZhMsI9KlwPp7RkeXDIxI8cbeYr3Egqg3bSLDRw7Fm3w6X0iKfFOec0UtndmXe1rldFFmBrkaPBh1Z3eCB0N023X2ll3WHJr1Gd2iwNRDrQF0AdobqIYyOWXteoE+F8/GNTsFJ9cAVurX6kWykje6+ydPoJTWuZI2+MT5vZGNm7bmBrkYXAx3774FGt4Bj171uduYOrcsbna8hg0X66ebum7rMMdroGxRm7fmBPhXOkzA69t+jhO5O3U2Ejc5+MGBK9OJCB9lOH2V0Kjezq6LIEHQ1uhToyIdZ8NS9IXR7KP2Zu6TRHdbHWqMLnbov21lHxRrddOb140tRZAn6VDhPxei7fP8WbHQIff137UkdWhc2evMjh/i2pGd0Zo/ddKAbtMev0Snly+J8uSgyBV2NLgg68np5F4Q6KKcGpVvIS7Hz6Dz1kzU6bF4KGd3O3W9XRZEr6FPhPCWjX7x+vbgNNLpVef2uXJeOz8XX6Kzjw4ye2LVxDOOmA+U4xl4ZB9Rn10WRL+hq9FOATlnNQtbo1BHc/H2qmLrLGR3qZis/1A8a3S2Ja93pkXDfiyJn0KfCeWJG/8fe2fY8CUNhONFNsuwLS7YlLHuLxpbw///D87eE1vupZz3UQosCO/fhpShzI/Hyagvz6VIWEUZvo9wCukF4TqODgVel/6e7a3UezOllwOh/rulGb9eqnYNbNuhi9ElAt7k+osboSM+se5PtPjp6tW1hQ+qfJp31vid6qc/TjP45B7d00NfC+QyNblCvImbdidC952XyGr1dZ/G8zDRPxtExOohP7bqfWswXD7oYfRrQkeO5+tt9dFW39QHqCeI2TVaj+6SbJQa8mRndvwzsnc+Tx+hmqn0FoK+F8/la/njGY7Fx0WYhBzohL0NOWyS1WbjU08S9cZ0EIXsZWmPpCkejU1wMst+6QqIBFnv3ZZ2Wv5x80H+a4kGnpXQ20MF6bHjiEkL5bls9SXpbbRdTjV3HpijjTe2X2Ls3azS6RX2o0YE5Gti4tm6iisMgAXRwmpDGEm52+YyOOMjdpY7GPLZLzpMuRu/NOo1uUfeN3it0b0kIR0Js+jBN0jkAb2zxGQ86EDe78aDj+Rgx+iIyF6O/ov4zLHTQjnKz85iix+AzYk0Ig5utFJ3b12v8UdMYHWUzGnMx+jIyI6P7qLflM05Jx8EL6tjHYN5WTtCdh8dtHN5oeefYpI7R0XM3GYm5GH0xmZPRN0CdGF1jJXNxtAvvCHeUx08n5zR6QzgdsUHB6Mw56UZvi846jsJcjL6czMvom7Yc6m3x0YDcFfgmcrep6dKQtl2m6LprNMdW4PU2OYyOSx+BuRh9UZmX0TfW6uHvsNIZdxziy22mtGlaysPJO0annCYUjM5XstEd5cNBPxjMxejLyvyM3lb3CE0VUHpg0h16t7BTzKF32s5s9Cab0kMv14bqBKO3Nabrji+ci9EXl/kZvasW9dvjBW7s0G8nBaG7Ljzbc2d4b3KO0ZtYpad36/M8MDMM9MpiLkZfXuZpdPtXAN9s0x7smje6+lDYBVO/HubvukPpE5b37k0C6RGU4xtqYvRFZp5G39gp+LIIDdK9+2sQuzJteLtb3RYNHOQ0uqddPS3pCUa3NWSM/v1qMBejLzMzNvqGe1yuv+fueuu+1QE5RTy/0X0Om2kr0ejxoBdPw7QYfbGZsdG72m79KXgiczCPOLkzkNfT3kdvmDmzURX7wrTba/Ggn3aGaDH6cjNro7e17XJ9nZdDuQWAY5jue5tOzblmRqP7HI4FPf6F0xu9OpsZODH6sjN7o5uUBzBOje7KBsiTcD6vJzB644t5rM91rOzHgt5W3Bh9fzUwi9EXnkUYvcvlXvnfXsPe2Zy9vYYtWrTZ5LqPzmE5ZurdJFr2Lk0C6ZrPqTQoi9GXn2UY3eS6738yTtVtKfqtFtdHb4O218xmdOpd7NrowQu0zf06VfqURv9u++xi9DVkbkZHMOu+Jdmdqr6uO/hW2DCBzD3is4Duj84t5UPT1K4r4KfpV3ozKPovoBfos+czuhcxekLSSZ+V5UnwwFxstHuWzuxp0x1niDKrrX8QhUp4PTmmqe4XIBsBcEJ4gv2Ki9g7wHlm0r/6lQl05MepisZcs4UGdpG4qKTfnj5q/HkU9OK6RdLH3uFEci72npvRvzKVC3Rkc7zuVUwc1vx/SwO7MyjYhRbCnkcoomOEEan/8sK6ex+sEZ+PFMKD/t3JfPzYW4w+tyzQ6F82bXb3KsboWPgmuHcZa0xA5b4eiwXtQYtJ8AR8FTe30Q9Pw7MYfXVZotFtrofYzjvd0YUB3XXs/YTPQzvF5/GvVC/70dcB0Pe3o6FZjL6+LNXoJpfbnlBNVwc3gZxW2OmKVpB43MlXDKc1NhFbON17IT1U2JJZwNHX0c2/7QzKYvR1ZrlGN9ndH0GhU4/HG50TZcR5yv78dsLmIMwRyjWLvvpQkZ8vIqenBVmMvtIs2ug2T34WnvO4t5gNrzgPJRU8zw3R+b73YNgR/rfwc+PNm+ONx17H4Wq77GL0FWfhRg8N1z2f9/bdeRPW9myLMQ+Rck/Yg3eHJPF5fPAqrNwYoP79Ae2HBNCjrmN/u5iHXsToq84KjG5yBOsamyE9dxWe7LJGZGknJlf4ma/MEN3BG26HqMcxgrdTjusB1wHKTcToa88qjE5YB/Be3502Q0anPxECu4DRPxxMLX6EUC91uE0G+B7xFF9cxgc+b+x1UMrF6OvPWozOsk5I95rY8BAjcGbQ6ApjZd7HrhmFu3ceto5/+s8Leu8DrsNRLkZ/j6zH6J+sVzEPzLQVNLpCV9c26+AY3ZwA6sA0oZOZNq/ZNgUabZ5bdy+vz+jwvfl4TI9djP4uWZfR6Tw8WOa77mgHNQjA3ZOkoadWlAGemz8LCxtt9pfgdDJaB7f4VAGje32WA/6XRzH6O2VtRv+8v77/S+/dFCt0wANAsOWN7gbImAincFKtRwVExz0X92EPVP+su7uI6vT8TbkY/b2ySqPjubmDAuw88a4CIUrnhenOg9EDhNcvfvYOXOjZ/j03ZReFQxZ2t93f8X88itHfLys1epft9vg8fXesY4/Cb/QPba2xcVuqR/wYzHcba/Q60G1HI1Lr/KvoQzDBWXeo/HDFsFyM/o6kr9jom63JzoidYE6wByO8qXH6R9j9StX2LEWwJqpWdA7e21DBM2InPncT/So4625Vjv/6TYz+ppyv3OhIed+znNvDwP1xgj1vdPfMDTaBp9oQhnUe7Zp/JZnox6w7m++nz7k3Mfobk75+o//O8dr24v2ee5+m6TRbyJgIzqShgg4/R8OcyHQNXBTWvs9XHW4YlU9qdC9i9GUkL/v5zT82l+vpoQbkp1puOsg3fDJb+T/9T65i7/lZ3ku6+ZNh/4laNM6JkIfH2blBF3vPLWs1OnJ53vdqpXmcHOQLMLqMx4dEjB4d9xe4PBfV0vvnLynuzwvAFaML529t9I0t9OPvheqNxuZzp8nKRYcPNH+MuPeIjXYiLzeIGF1If3ejW9JRJuXttI+AiQkPvibHOow/fT13mnYb/h0fh3N5/JwRF6ML52J0+hfZHrbbNi3tRYQ8c0WHfj3+PfeGcUSMLkYXowd+kuNnds9z8UhgG6cnUBybqrjfyq2LGF2MLkYPGN0UTXm7F5WK7KyHo7Fl4Q6+R//ovjidy8vWRYwuRhejxxidTXk9H/bDRuk82ioEu6Zr2PiPzuLHrYsYXYwuRh9pdJpLeTsXEbwndOTDvwzCz+WOQC1GF6OL0ROMzudYPs/3oogjVwdMHhsAfjpfX7vpYnQbMboYPcXo4ZTlrSO+UrHhaQ8zX7R8n0uvky5GJxGji9FzG51H/nnumC+CbMffKDN0X0vO32J0LmJ0MXqy0eNjCDuWbc5dCpOHCqcwOZ3bPMt+tsXooYjRxejTGp2CPqNsoiJGl4jRe7N20MXob5hf7dWxEYAgFETBUfrv2YDQHxiACrd7Ndw8RS9sfnRFT6ToN7sfXdEDKXph86MrOi9VfnT5ayelNtgxnXp3K1a+0u5z9PP/R682lHp3iu7oHx59/s8VvVN0R1d0FB1FR9HDKDqKHkDRUfQAio6iB1B0FD2AoqPoARQdRQ+g6Ch6AEVH0QMoOooeQNFR9ACKjqIHUHQUPYCio+gBFB1FD6Do/K7yT7Vq1I5nm6/871r1vgB6fw1bgXrOmwAAAABJRU5ErkJggg=="

/***/ }),
/* 51 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/6.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img/6.png";

/***/ }),
/* 52 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/7.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img/7.png";

/***/ }),
/* 53 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/8.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img/8.png";

/***/ }),
/* 54 */
/*!*****************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/9.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAMAAAB6fSTWAAABjFBMVEUAAAD1sP/1sP/1sP/1sP/0uf/q4f3q4v3r4f3q4v3r4f3r4P3q4v3q4f3q4v3r3/7q4f3q4v3r4P3q4f3q4v3q3/3r2/3q3f3vyv7q3v3r3P3q3f3t1f7s2P3q4f3r3P3q3v3q3/3r3/7q4P3q2/3r2v3q4f3q3v3p3P3p2P3p1v3o1P3o0P3o0v2sdfjnzP2lcviPaveVbPeSa/eeb/iYbfenc/jnzv2bbveicfipc/jnyf2hcfjXtPzWsfzXtvzQrvuNaffQsfvQsPvVtfzWr/zWufzWs/zUsPzSq/zSsvvSsPvXuPzUrfzYvPzSqfzUq/zl1v3YvvzPsvvYufzZv/y4hfm9kfrjxf3Jo/vgxf3eu/3Akvu7i/rgwv3ZwfzjyP2/lfvfwf3gy/22ifq1g/nCn/vkzf3Lp/zgyP3ev/3k0f3JoPuuf/nhz/2yhvqxgfm7jvrWrfzGnvvMq/unefnat/zbw/zdx/yyjfqkffjEmvuogvnbu/yeevi4lfqadfi2kfmsh/m8mfq0288ZAAAAJnRSTlMABQgMEBPA70CAEDHQYKAgkd9RsXDwR4UdpGfSKDngduHhL4OIiZbr5j0AAGSHSURBVHja7NxLcqMwFAVQRuJn8V8D+19i4wycpLvSFdskBumcBTC7dd+TVBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwWtWbpb7pws1Q38Tqqi2AM2irKm7BnUMI5fqQMYQwb5+YBB8Opa2mt6ou192VIXRb6GUeXqWt4hbvy/pLrrN+rPoC+A39FvB5q+8XGUO3Bb4pgB/RbAnfGvwgwizvsHOJ111Yj6gMQ22ehyc1h434J2FYtDs8oo11KNcTGUM9KXe4I+PDCWr8q3KPLuMg4Yx/TLtuh6/28ZPN6v9XznVVAB/0sTvMxdmeLkNU7XDVLnNCRf6vsVts7eQt9ZC/z/HCTqZyCbmwk60+5hXy9zHezk4mmmkY14xdhqmAtLVLAtfkz5sXxU6qmqnLuso/GxU7CeqXeeUvs42dlLRDks9h9nBxFE8aMj97+84QL+uc3NRleY12r7GzsHNaUn6HUtY5IymXdVIn5Q9n3b7OSbRS7myOxPXO2J83ejjHkTWL+/KdhOi3shzT5O3brhzNcTztYDHf3Vgb4TmQJhrZf0iIBX/Yu7fcBoEYCqB88QqBhLAG9r/EVlVVpY9UQQoJ2OfswRrm2mPYhLqf+U7HjWDaScq+uk4yxzIO831yrHM/N/M9c1vnFQbzb89WCeF5stHqt5e4+M0T/xHARXH2Bc/ffLPH4gue9dXmXDdABs+q5OxbURqE54ureWAu66yhbVzNN+bcGJjjsQYjcFskl0OZ59ArdR6jNhyzaUodZZ6CbhvKPIXSaCzKPAOljjJPQamjzFMo3dVR5hlI4FlgUOa7pdQxHpOCUucOrTLfu8oMPJ6uZFA1Bdw2KfMgPGLlpqP35oF02uroqGWgrc4vg11wAfVSOa61zUxEAniuHGVwYUnl+FRb7Rqaqzou5ym4qqdnQCaFairIbNQ5T0JXPTGP1DK5eOuSk5ZaMr7fU6p9tafj+z0dWXtO8vdcvFLLqjI/k8fBhExipVAuh/Y0k5qtFBkI4RDKhdcK4Xh3EsqFNgrh+HB2qMelp4ZOW3x6alyrxoJ4DLbz08WhHo7jHId6eK3jHId6eMJ2bqnE71HonaOnHp/jHD318Ey2Y/o9voPJdu7QWQm9a7ZFYc9UeGZk0GiLTwqHRlt4bT/DIqeCvbEuiuU6a6Z2ZprB8Psbe/eWmzAMBFDUX0DpE3UP2f8SywdV6UMllhLimTlnD1eK7bGTnFk4XFPPz+E5jtTz89mOp9/T89mOz/f8fLbj8z2/5wnsvidnSAbDM/m9GpJhMTsL9UGZbWdJewv1IbmSysKcs43HqRoXztkSc4eFL265ZGV5zoWFemKW51yzUE/J8pw1vTRG4PScdT3ZkhvAo+U5KztZqG/OcDt/Mvqeiv+wcBeefe9kG46QbMlt52gbjn/YksvBNhy3eI0iPtNw3GZKLjrb7cxhSi42b8kwj833wLwZxVw23+Oy3U4ff1eOyHQ7nRyzBeRYjV6O2eI56JxejtnCcazG1vaHxnc6JyMH6r+5rUY+Sv/JmAwZPTQ+6Zy8jM6s5bibYBhKv2IcjrSUfqZz0jMk13ROAUo/M95OekpvzXg7+Sld51SgdJ1TgdJ1TgUus+mcCpSucypQus6pQOk6pwKl65wKlK5zKlC6zqlA6TqnApMzOqcCpeucCpTe73iaIBile2eCCpSucypQus6p4L2hc/LzNqz/NFCB0nVOBW8f7N1NbhNBEIbhXjk2IAUin6HK5wDEIgtLTg6QxSxH8jZzfII1UgwKKHJ7mq763mfp/Wd1/Ux3ATlHfrzA+A5bA4Ij6bx/DgV3BeQc6fEpGwvuUEDSyTkUfGFF7q8+kHOkwTIsC3FQsCp408qARFiRY1EGCliRe8PGgGRYnGGADgXrgt+sDciHcToDdChgnM5NkFDAOP0MA3SkxZCNwRoUMGTjC3QoYMh2cmdAarTeabhDwM1tkUfDHfnReqfhDgXyrXca7pCwKdLYcIcI6esiPxqgQXnr/ZaGO2QIN+TCNuI8B0M7wu+sxm3EeQ6GhmQbcoEbcZ6DoSXRhlzkRpznYGhJsyEX+g53z8HQlGRDLvTdzp6DoS3BDbnPFpnnYGhuW6QE/zTVczC0JvbJavRNGc/B0JrYbZFhN2VOCDouJrU3E7tAN4KOywmV6cELdCPoqCDzfEv0At0IOirIlOnRC3Qj6KghUqaHL9CNoKOKRJkev0A3go46AtP0BAW6EXTUESjTQ6+4zwg6KqUv0zeWgudg+F+Sv9MU+Rv0VwQdtXK/3tL9qywO/hBa+VTS6v6SOAdBbyTxFXL9T9YcBL2VtKuwASZrDoLeStoZW4DJmoOgN5N0xra1/jkIejsp738OMVlzEPSWbvId3kN8s+Yg6E2tSjIxVuIcBL2ldN+xhTi4Lxf03TiOw/TL0/5kOhlefvYADAvJtiDX/UrczK/rMA4vyf7xeO7rtz/d7/fP07HnxBuWkuzwHuWyCb+Ww3F6eA34v4J+Hvinadx5hwyLSXV4X1sQfgWH4Xn/OHt30M/jPh0P3hfDYjId3qMc3KuDvhunOeOXBn32/WHoKeyG5SQ6vEc5uNcFfZzms3pt0Gf3/YTd8JO9+/dNG4gCOJ6xrZq2af8HP3skKDs+Iw8ekJxTBiYGJCuSJU+WAggZAv94TXB/YAL4zib33ul9unXI9tWzfT+4Imse3sk8uOuHHk8fhWxGBAqGkwzDS7vDrsiWh3c6D+6aoccvoSgphK4EwWB32DVZ8vBOY6vMHiiLX4aipBK6uvCqrXPo5lnw8E5kq8weKKkqVw9dq3UXroFDR8GCh3cSe9z/AAXuNBQl9dB1PWbQMQ4dDfIP7zge3KFz6SRoYNCtaBa7XQJtHH+3yF8K+91BAbrlzoZBYCD08u+NMg7dSsQPrCK5VQa6FE+ioKHBFUQzj0O3EOnbZm4dHKA76aOU0mTowSB6iTl0+xC+KvILlusgoSvZSEqjoVeeYg7dNoSvikRzjzt0YzqUEkfou9Q5dMuQvecdz95X0FXPHE/ou9Q5dLtQ/S1lPHtfob20zBxX6LvUOXSbEF1Mx7GE/gbaSkdS4gu9TN3j0C1CcjEdyRL6G2gnfpQSZ+i7xTYO3RokF9ORLKG/gTbcmZQdhZ4nyWo+nxd1y/I/kyTRSz3j0K3x7YYcVL+oCC1MI9k+9LLvZXHvX1QUZfFjxXX1MObQbUFuMR3XKXTQFo+kbBV6mXjR9xWtl/MkV4j9xePQ7UDuR9MRfYkrgSZ3JoR+6M/bTeHru1/Mk+bP7xy6HYidTMf0Ja4EetKh0A39ebV88DtQNI195HHoNiD2PQ7Tl7gS6HBfhNAKPd/qR64fezTj0G1A6nscqi9xJdCQDoVO6M/zhd+9++V2cFEYc+gWoLQ/DtWXuBKoqca5eujPr2v/WvqXW48yDp0+QvvjcH2JK4GqeChUQz+u3EDrI49DJ4/M/rjvWE6n/gWKZkKohr5a+B/hYTM+P9RTDp06MudVvzkmQWteqLqNdbzp+x+mWJ1fU/+oI20c/3WQOa/6yTEK2kqjQC30VeF/rP7ZsR56HDpxNC5/Nry0Bi3N1JbM8/mDb8AiGZwkUg6dNhL3x906ZkEr3qPSmvnzpu8bsj79BB/MOHTaKGx5v3PMgjbiUGnNfOmb9HAq9SCYeBw6ZQSW2IwvrUELWSSPYM38TOpBEIQeh04Z+iU28xe/gr6pfAfezE+mHpSimEMn7O4GuR+OaaBtIhuHnuPI/ETqwU405dAJQ77EhuDUGmhyR7Jp6Pm87yNSJPXQ96YcOl3IT7H9cowDPW4om4a+evCRWYwPQ69MOHS6ftwghuEmd9ASh7Jh6EnhIzTPD0KvTDh0ujDvmsFwDB10xJE4JTiQb3yc1tuD0Cuhx6FThfhgOoaBrhx61Xmz0LeoXs5PPb8H/5fOoVOF92D6nYMAqMsi0Sj056KHWf/1MPSqdA6dKLS7Zm4dDEBZJkSj0F/7PeSKcRX6QekcOlFYN8KiGOjqoWfiLCLj/P+hHtRK59BpQjrScQx05dAz0Sj0FfpxvlfkZej10jl0mn7eIGR+8+seqMlEk9DzRY+K/nYQHJXOoZOEciOs8dMsFVCSiiahJ+seIZv8uHQOnSSEZ1uwDHS10OOoSeivPVrWyXHpHDpFCEe6kYEO+tydeufBOwaEHtv/6K8GNcPYO8aXSKKHbqSbGeigr+r8fOj0Htv/2Axqnsqua//4tlj80I10EwO9beheKM6ETuxre12RXyidJzoJyEa6oTd00Fd1fin0TY+qdVIrfeb9jyc6DchGupGB3jL0J3EudGqrag1e1KceT3R6UI10MwO9XegTcTH0nOTr+T+vtdLTv6XzRCcD1Ug3tYYO+qbiYugJ0dfzf5b132vy9niiE4JopBtbQwdtqXiPZZ33eou8vsjGE50aRCP9s2MI6Iqji6GvejZY5/VfW+WJTg2akW5uUxxockPxLus6Pyp99hY5f3WnBM1I/+yYApom4n32dV6WPj4oPeOJTg6SkW5wlzvomYpLoc979rg/WFCPYo8nOjFIRvpnxxjQEotLoS97NjksfRjzRKcGx0i/c4wBHe5QnGJl5/XSnzz+6k7M1xsEbh1zQMeTOIn6ttdmpWc80anBcHvcnWMOaJiK0yz7DvfP/fjgNZ3f0X+zdzarbQNRFNautCltafsMkl2TRSQCXQphDJmCwQ1ZeBVag5vW4C4acGJCotovXsmSZdnRTMejn9GR7udn+DjHc++MwKjB63EaA10suspTE031/GDK1qdER0N/pL82taEk+sAT0FjPD0y/o0QH44OhQHM+zmIdzR0TEKi+PmsqfvoluRklOhgqX2JrztfWrGMZMSHe2D5rLA8p0QeU6GC8MbRyYlaGpU4nYeAJuWmw5/t32RbdEHpHDge9kf7GrIhiRL/zhKDfPz/mfvpsYzW9IwfDS0Mjb82qKET0kScG4aNLuVinT95D6B05GF68Mo4EdPvVUkeyuDdtIU68OLOILKd35FA4dg8W9TqLpU4nYuIJaepgjTdk61GiQ6HxastHszryiz5inojxWRt4dBMGG8279I4cCu+NI8DdfrWUiUX/Kj6Ia/SB+45V+lXYzsZtekcOA217sO/N6sgv+swT0vAD9x3r/avplOg4nBhHALssY6nTCel7Ipp3Y03ifstiZzglOgDySzOwszUzt+gTj0ujN1+f47sJoy79R0dCesKGuiwTkFP0LmvvRhz/b/qQ/qNDIbs0gztbM/OKvmj3pgzvb/qcEh0J6Qkb7GzNzCn6yBPRpKcgZbCTafqA/qNDIb00gzpbM3OKfk0T9Oxp+pwSHQnJCRvubM3MJ/qIijvnegvr0n90JKqfsH0wKyWf6EMq7rwZ24QSHQnJCRvsbC3AUmfm8blsX3EPeUxFOv1Hx6HyO2zvzKqx1BlSceeV9zjSKdFR+GhUywuzaixlZkxU3J12Yt8mkd6hRMdBasIG/cizpcxQIPqN01aWSaTTN9ORkHj4GXbNfYMlR+cZI8b4X2VZOq1lmkS6GOWYJ/nL4I0hBP0oLofo1wLR10578d2YnyQ6EsLjOPijOHXRR4wv+q3vtJj7ZD1OTIdErxMfDTHYR3Hqol8LRG/rSVxEMkz/QYkOhPg4Dv0oTln0bp8ventP4iIe3IghJToSwuM49KM4ZdEnjC/6g9Nypm7EKSU6EILjOPyjOGXR+3zRp07LOVu6EVeU6ED8ZzsO8zX3LaqizxlP9FaP1iKSSP/So0QHQnhZFfiCaoiq6Fdc0SsLdFsRpwL87YSNEh2I14YI9C8lW3Icztb4oj86VWAH1Fj1J3dDnxIdibcGF9y34iIURb/ji/7kVIAdUGvVt5E+o0QH4p1RAa9MHSiKPuCL7julE3ped9XjSF9QogPBG6XjD9FNNdHnLEJLoIea19/0ONIZJToS7w0O6EN0U030axahI9BDzxFUjyN9QokORPYovQFDdFNJ9C7jij51SsYOgFA9jvQhJToS2aN05FeeY5REn/BFL3eGHmoOY/ra3dCjRAcic5TegCG6qST6FeNRbqCHnuOovoxH6ZToQJT+7vOJqQcV0buMy8opE1uW1aoOpk+j7k6JjkTGKB3+JnqIiugTxuPGKRFbjsfxXa/X+z7+6+s2fRV3d0p0IDi30qFvooeoiH6lJdBtKfxxb8P3i4uLv7pNv4m6OyU6EBlrsIDfZ7FykNXcvQPOnZKQ9vzracSvi4A/n/Wafh91908bunJ0VOUn04sgu7vDrb9aOchq7pUty8h7noheA9P9uLvzRe8c/kh03RyuwUI2dysHu+bOFf3RKQtbjsvTlOghT3qP5J6i7h6JLuM5Jbp29tdgMZt7MaL3eaKPnbKw5VidpkSPWGo1fZnq7l0JKNFrwImRBrK5FyL6nPFEXzklYUty+Vz0b3rHbGM34AslOhL73R2yuRci+oLtqOYozpbEP02LHvNZp+nxcdyPrehi1ynRa0G6u4M290JEH/BEXzvlYMuyyhJ9qXV1xndDFqJET6BErwnp7o7Z3IsQfcR4oj84pWBLM80S/bdO0ePtuAElOhLp7o7Z3IsQfcIT/dYpBTun6Pd6994fkgEbz/LYdUr02rDr7qjNvQjRr1mK8ofodn7RtZp+7oZMxIkeQIleI3bdHbS5FyF6n6UovbnbBYiu1/S1G3BFiY7ErruDNvcCRB+xNCU392JE12l63N0HlOhIbLs7bHMvQPQ5S1N2c7fPjyFb9POjKNr0uLtTokOx7e6ozb0A0RcsTcnNXey5WHQ3YF90Tab/2UzSKdGR2HZ31OZegOgDnuhO4aQ9VxPdrYPoKzdgQYmOROquKuYHWix1YtHZHuVuy/BcVBddh+m+GzCkRIcivqsK+7aMpUws+owjevFPTogCXV10HaaH++6MEv0fe/fS2zQUhGF41xsgWpLfYKc0KFKwhRcIKkCAA6QbKoGQuMsJLQIhQsmNtil/nHEoKT0ZtybnTDwj5i3sumHx8NnuiSuq8m+bYt8K6VuEvUWK6HXumHO50Eeb0IYuuqSOr93FvhXSt2hyXAaD3nYpA3VOBZ1e+nATaumii2rlmKfQX4ruW1RJa2ZAHzmEUTh0x9LD8dM4XXRRXXIO/aI3x/Kazsz8Fcl/GjpjMatzKKmeNPk5+vvwrPZDtOtO+xrH8dOrSOs5y+tc7TurlNqU+5uYfLT80HezoAMNt4X00Ht3X8M3vu4cUU96L47je/mhV8wvhT7/Fsc6xf4OVR8tP/RPGdCfu3ZeJ4c+bE6+92ufVvowhnJDr+iic+iKY+glb37ZQ+9mQD+oOy6khj6qTqrF8dSou/3HxFBLF11Uq2OeIo/FefbQXzXwh3FHHJxnQsedT3oZU0tPT8G+ywm9ovfoLFpLdYr8QAtkDb2ZAf1QGHRwftJD+K72TUrpo/Sxuy66rOBwnNBjcZ499AYOvcPCOQ69l+18MujQgBL6EUDf1nt0WZXFHovzyKAnjKGPznHeehKP2yeUvg/QH+uiy2pB7g/XrKHvZkDvsXCOQz8423ntVtZ/CHWHAfSG3qMLy+XhuLI3z8igD/lCf5nkcQ4NQkLpCUjXRRfWFbE/XLOG3s2AfsjCOQb9ZTXJ4xz6SAl9BNA39B5dVqtif7hGBp3HoE9DB+cAPY9zKJzK7dO4li66rNZkvnMCsoa+jUNPeDg3oafOAXpO5wNK6P0Uut6jC+uyzE+uQbbQmzj0A6bQd6pQksc59CYklB4C9O+66MK6JPOTaxAR9J5T59HMGdD3qmlJdFKmc+hzNJXDSe8AdL1HF1bJlfMVb75ZQ2/g0PsuoUeOoINzE/rRGc63gmi6urMSXXR5LQo9/+pRQd/nCB2cG9CHr7OcQ6Moopz0Azgxo/fo0rog8/yrRwWdyZX7Keit6nEJ4hzai0/1MYIIJ70H0HXRpVWWef7Vs4W+i0PvMBl0gI6U5HIeRBHppA8But6jS2tB5vlXjwh6wmTQs6Djzs0bdDyHP1+7p4suLhEvl/EtqiCtr+/eMbub9pMN9BtmtVotOXZe+6u9rVO1v0UQ6aQfpkfjpsr/1hmkHPoVumVLEn7nmm9kDb2SAb3H5Mo9AzruPD5p4pwMOqTQJbYs4RbdNyJb9B6TQc+AjjmHq/XO1vGfiXPSa/e2BfSKQi+oBQm36L6R/aK3cOhDJoOeAR1zfvJlOCeb9EQXXWICbtEJFr2LQ+8zh246T3l34I/hnC90XfTCWuJ/i06w6N1HaH0mV+4Z0JE9hwv239wN54TX7j910SW2LOCgu29mv+g49EMmg45Dv3vaeRzHm+nf8VdsOCec9J4uusQWBBx0943IFp3LlTsGHTKdQ5vjPZ9yzhW6LnpxCTjo7huRLTqXK/fzoZvnZAzneMVD10Uvrgv8D7r7RvwXPUKzh57fOR30I110kdkfd1/wSJvfonekQH+RwznZtXtfF11kJWvoHm0ki94wGkNPuFy5nwP97UzOocKh66IX1yL/18X5RvaLLhp6PucsoeuiF9hl9q+L843sF/0TDp3LlTsGHXcOfY7wOELXRS+wS+zf6O6b2Z91lwvdwnkU1nXR/99W2b/R3TeyX/QM6Fyu3DHo9s6hui76/9tF3p9o8eQtOgX0GZwzhK6LXmS8P9HiyVv0KLANgY47D/4tN9Dv6aKLbIn3cRl5i04C3d45FDqB/lgXXWTLvI/LUCz6Oin0gAK6vXMocgNdF11kJd7HZaxeBIk6hyihhw6g15B2tk73ORAIHSk3dMVv15qN8wsede6hV0RCR5wXBH3bBnrF/FLoc2vFAnrZo45k0e+j0LncogcJiXPICfS3NpfuuujFtcT47TIQxaI3MehtxtCfzeKcIXRd9AJbZvx2GYhg0THoEF/oz2IHzqHQxcdU380OvaL36AVW4v0sjmLRuyh0Lg/dg8TCOTX03uY7XXSZLXL+6JpHsOjSoJvOvwSzFrmA3tJ7dKGtsH4WR7HoLRR6xOShe5Cc6fxNUCz0DV10oS1xPhdHsuifUOh9ltAR5wVCDw8aG3qPLrRlzufiSBb9qhzoDp1DdesGt3XRpVZi/SzOOfQ0HHrooCiwCIH+wp1zKLRu8GND79GFtsb5XBzJoq83Megj/tDBecHQn+/ooouN7SvdIZpF35YJ/U1QOPT4g96ji22J7fviIJJF72LQB6GDAjro4Lxw6FHc0kUXW5nzsziSRW9h0JPQInro4Lx46P34mt6ji211RuhrHn00i76LQW+HFpFDB+ccoD+4posutgXOD90JFh2ahg6FFpFDHwQcoPeeXtN7dLkxPgBLsejQfQz6YWgRNfQvgYOi0LLRji76L/burqeJIArj+F1tfY/xM7QGppm92NHZuCZGjRGN1UQJ1AsDaFrAGDUuKgVEyhd3ghike5TZOT3bmfH8em9CzD8PuztdAnbF3wOwRIv+FQp9pKr5D0PfecXX6AFr+nsAlmjRv0GhbysEqtAXjvkRen/Iix6wVvg33Ttw1X8zfHLK3SMHCi+39v79p49bOeTz7RMni55PATr0BdEFzGOu2y1x6FNw2dM/0mIgQ4c+R6DQB/WFvtVflstPFxaerZrWwwl9dIdDD1kj/JvulRbdeAiEXtQW+uqyNEzpxqc8nNDHmxx60MK/6V510RdLoRu6ptALU/lJ6avhhL69wqEH7Yqff43JoFr0DSj0UT2h96U8XXowoe/c4tCD1vT2pDvVoneh0A9qCf2DlJOlhxL6E8GhB+26tzfdaRbdeAyEflhL6GuyXHoYoed7HHrYrnr6quc20aIbPSD0dYWW5mf5MPnqx6PSgwh99xWHHraGtzfdyRZ9oxS6kSoEy9D78rTNX6WHEPrBLQ49bA4vmbnSrgPdoneh0HcVgmXoDyRY+k4AofcFhx44b5+uES268eCPI7D3j+0rBMvQ1yRY+p3C/9D3OPTQXfD1Ky1Ei24sAqEPFIJ16GDpd2RBH7pCGa1w6KFr+vp0jW7R35RCNxSC9a/uUOkmdFl4HvqB4NBD1/L16Rrdos9BoY8Ugu3NOLB0E7os/A59nUMP3lVfn65RLbqxCIS+r5B0fpa3Eiz9jjSWaENPFcprDj14DV+frlEturEBhN5Hh56daU1CluVR6ZkBh57h4UIf3eLQg1f5+dr5di0oF71bCt1I6UP/JP9hyd/QDwWHHj5fn66RLbrxEAh9rJAseiv+WfpE6AvHZh/6Aw49Alf8/O4a3aIbG0Dohwopz2D2pdOFrhXC9yGHHoGmp0/XKBe9C4ReEIVuX/rtJT9D3xYcegQu+flmyHYb/8rXv3v4O/Q/7CqcNAPBpd8GfYGu0WceeiF+wYTOpc9cy9PH6MjQoc+JDSD0fYWTZlb2jkMHUYWO+rmGHHoMLnv6GJ100eeA0NcVjs6sbO3VH3quELYFSeg3OPR6NTx9jE646MbiZOjGiCB0sPTaQ08VQiF40WNwMc7Qz/AGCH1f4WQgqPSAQtc/VnjR4+DpY3TKRTeA0NcVTp6BoNJrDl0rdweCFz0O56MM/SxfS6Gj77unGQwq3SL058dmHPoLwYseh6aX30anXvQuEPqhQkkza1tfag1dufsheNEj0fTzvAzpohu9cuiFQtGZBaB08tBT5e5Q8KJH4nql0C+360G76MabydCNsULJKtjaCyP0RV70WLT8PC9Du+gGEPpAoeRJBVDpcOgJllbOdgUveiwuRxk69Dnt22ToxneFkSaI0ulCz5S7QvCix6Lh52N08kXvAqHvKwydIEqnCz1XrsxDdF70aMQZOvSZsFgO/a5CyRCl04WeKmcHghc9Gue8fL8MNnQL3VLo2NtxeYIonSx0rZy9Erzo8fDzvAz1ohu9cuh9jZEmiNKpQs+0s7HgRY/I+RhDtzE0oU/a1RhJVe+XyUPPtbN7ghc9Ik0fXyRFv+hGrxz6jsbIkqo+LlOHnmpXI8GLHpOmlwfjkKFbGT4pyzVCnmBKh0NfSnC0s0LwosfkWoyhQx+rSV/VGAmidJrQM+1qJHjRo9Ly4ARsB8F20efKpj7pCaJ0ml/dU+1qAISOKN2Ga+fcvo2WBwfjOgi2iz4HeDnlSc8RpdOE7v6jrBCHXv4f4tBJXY0xdMCcr5NuSicLPdOuBoI49Bu86PVqePBqyA4CZtHnpz3pCaJ0itBT7cgMOi96XBoenIDtIGAWfX7ak54jSqcIXbsaCOLQb/A1eq0iDd120ef3vJh0UzpJ6Ll2NFoRvOiRORdj6AA49HePJjJ/ipv0zLl0itC1q0IIvkaPjX3nF9okZrno82vTPR6XJs6lexT6SAhe9Oh4cNS9g4Bb9Pnug+meeE+wpeNDx9+KuycEX6NHJ8bQbRfd2CiH3tfucmTp+NDxgz4WvOgRakYYOuBvoUOP2Mba3U1nn8EjsO7/Xq4d9YTga/T4NGf/VvcOAm7RjXfl0ItUO8u8CV07OhS86DFqzv47LR0E5KLD9+P2tTtfQs+0DfisDF+jRyjG0CssugHcj9vSzhJPQk+1m0LyokfpeoShV1p06HzcQDtLbSqkDz3RbsZSCr5Gj1ErwtCrLLqxWS59W1vATTo+dIpB70le9Di1Zv7ltdkuOvwwvci0BcSk40MnGfSBlJKv0aMUY+iVFt0Y4s/H4ScdHzp+0Hel5EWPVIyhV1t0YxPxMB0x6WShZ9pNT0q+Rv/J3t3tNg0EYRjmiB+BkJC4hoJEwvpgZfyztByAICDDCVITqFCKEA2oUSjFlUqpEHfONCBo7UV1xjvOZJiXC4CTh8/rxI7QrguEvtiiQ/2N+sW7S7ClS4eOHPT3RhddbBcFQl9g0fF33tGTTg/dJai+mXn3es3qc39hpOL/m0zoiy469Crknfd0ydATVO65QhfcxaU/js5h0X3fef/yNcFGAJ1+0EdmQejc3/Wu0P8mE/rCiw71Pb/F5hJkdpnQowTVoTG66IKTCH3xRYd2EN95R3zERg/dJpi+jo0uuuQkQkcsuv/plmmCCDHpIaGnCarnRhdddDcEQkctuu9VkV/KBJkjgk514T4yRhdddgKh4xYdPk0PeEyPYl/00G2C6dAsHbouOmkioaMWHdp5Gu7tzzbOFssPPVuwNMH0bbx86LropImEjlt0/xvk3iXIXF0hPfQI9099bpYPXRedNJHQkYsOvQp4Qy6tKqSHjrxwf2gYQNdFJ00kdMSiU9yQiysM6aG7BNMXwwG6LjpxS38JLKdFv9N/WZM+cQkuG3cMPU0w/TAsoOuikyYSeotF7/fqt9530dIrEImhxwmmQ8MDui46aSKht1n0fq8GfXCUIHPALwR0wgP6tzET6LropImE3mbR+/3ah2yDwXaCLMq6g451zgS6LjppIqG3WfS6dIA+2EyQRe2gb9E6t+6t4QJdF500kdBbLTo0rkCHZgkuG3cE3SWI3HPDBrouOmkiobdbdOjVWejP6KXjoeOdW/fS8IGui06aSOhtFx2kPzlVMW9mkcUdQE8tInDOCLouOmkcoHtqjNoLvVl+6B7pRSfSd3HQ8c5TcO6XXs+LP/CiN7WvL5HEJBK6509j6B7pRWvpeOikzllB974YVqGHSiT0NovukV60l46GTumcGfTbuuiEiYTeZtE90osA0u+emx/63fPDOucGXRedMpHQQyw69KECHXpHIN0Hvfjd+dAzh3TODbqe0UkTCT3IokM7FejQtkUW4aDTOJ++NOyg66KTJhJ6m0X3SC+CSE8poMcW5XxoGELXMzplHJ5Hr8Vl0UH6RhV6se8sLpcFhx5ZTIdDwxG6LjplIqGHWnSoB9KLs41KiywOCz1zFtN3YzhC1zM6aSKhh1t06LgKvXiBlp6GhB5bVCPDE7ouOmkioQdcdOhtUZM+s8hcHAx6ZDGlDwxX6HpGp0wk9JCLPv9Avai2abFFYaDHzmKC2+1soeuiUyYSujc89N54vai27yy2uAH0z7/bajHn/ttwbKHrGZ00kdADL3qvd2+jqDSYlBaby1pCjyyu98bwha6LThmL316rxW3RoY9V6IPBO4suzVpAj7F/6UPDGrqe0Qlj8WuqtdgtOjR+chY6dOQsuihDQo+dxTUbGt7QddEJkwmdYNGrl++DkyZTiy/NENDRzO0oz3lD1zM6bc2hX1zrKo6LDn2sQIf2bIvSeDHoWWSxTQ9y7tB10SmTCZ1k0aHx+lno0G5p2xRljaHHqUW3Pcz5Q9czOmEyodMsOnTvuAK95ahDLsoaQAfl+MrHeb4C0HXRCeMKHaQ3qs2iN/+VplN5vjwDo96yFLD/G3ocOQu1mfPW0Lt5OyRy0vH4/6f/EK4LhO75EwY6dO+gqLXnbOvc7P2Dx2ehT/Y3p4glr5/OFfo/+p+gXxEInW7RId/35CZTG6hodtKn6bS0IYpGeb7C0G8r9GA1h35lrbMYL/qvk3qto9Iy7McwX2nouuihkgmddtGh8Yb3+p1ZMzgKrDZ0XfRQyYROsOjV3jzxPbzKqXKS56sOXRc9XDcFQidfdMjUrt/n35TjUvR+mK8+dF30cF1uDP3mWmfxX3RoZ6MCHdrnQd2dMBcAXRc9WAB9dV4DW2lZi+4/qgN0JtTd9ps8FwFdFz1UMqFTLLq/N+unobOgnp4wFwJdFz1UMqFTL7qf+uBP+zO7rMrt13kuBrouerguNO7qWmetzKKfpj441WSW2iVUHsGaC4Kuix4sgL46D6Sfjceiz6nfr0CHXmyWtuNmk2Gei4Kuix4qmdBpF91/W64CvfMr+HKvAObCoOuiB+uSROi0i+5v57jCvNNZnx29BsnioOuiB+viAtCvrXXVyi36SebjIw/13Xfk1qdbBTCXCF0XPVgAneXja7fOj9eiw7Muxrw5qEGHSK2Xe6ODYZ7LhK6LHiih0D1/uoEOfVyvQie0/mlrd/1kzKVC10UP1pUFoF9f66pVXfR54+NHNejQaPNT2CmfbU8+v4YxFwxdFz1YAJ3lUy23GsRy0ecND4oq9HlHe9NAyLd2X/xSLhr6T/burqeJIArj+LnC4iuon6FnFy+4MZqGVhMjK5hoqcbQWsEXiFG0VsQWTOOVX9yxXerO7CCzL1PPTM8Pq/HCxJt/Hp1dR170kvgZukaxSU/Tl5705ufGptbR4ddBocj3ReQGldsO3W77xePniyUl18HcleqslB96MOvQhTcHjU0NseydUa7ae/vbo6Yw7K4Jrocehq3kh0O3qgJA8mV3lLm36BOruz/vpUOPHY0O+72a0Yr3drZHYseF9fGUux96uNJaWZE+pplz6NnNT+jBfwpdWNv92ZBCV3RGo8OdHX3xg51Xo1HzVKO7uyZ4EfofYfLDi24VZHCxOiv+LPqp9sHwnhK6olfX6DVj68PJkvsSeisMxWcl8eFFtwqA5juwqHB40f9qv+s21rOGvt7oHkwa9yl0kXZyzvkwzrIL8xJ6SCH0iXa7223ce2IS+u1+nLiHoQvxlI+/8aJbtQBA89U4VHix6Kni28NzFr2/5m3oYTzlMT51t2iOQie06End+Q1dpH265eLDp+52LQHQfAcWFT4u+pyHPhE/XuNTd7sWAWi+GocyXnTfQk9uuYicT93tugkCxZvdUcGL7lnoiS1v8Suw1lUAaL4xgzJedN9CP93yMT51t2uOQudFJxb6ZMvjN9751N02AKIP0lHGi+5b6NMtH3/Hp+5WzVHovOjEQp9uufhxhd91t+wyCCSvh0QZL7pvoYfTLW+J7/hdd7sWAIi+MYMKXnTPQp9sOl88MRtXIZul6mzwonsfeiucbvn4w39Ht2kRgOgbM6jgRfcsdJG69GocL7pNVyCb69VZQUOBAQuLbnxhJKHQV62Hbl668T1yBQSqOb5YsgJA9EE6GjEPPSAa+maMQy94j1z6SzHXoV8T8dK8YwYN+LDoHHrRe+T0nfOiSwCoPkhHE7zofoWe/x45FS+65DIA1QfpaIAX3a/Q0/fI8aKXYwGA6oN0NMGL7lXoue+RU1vnRVcsAVB9voYGeNF9Cz0lQ+ZJAZ+6SxZBoPkv0tEEL3rawaMzPTRzXycq11OdZ+V6ndWJt6FXAKg+X0MDvOiq9tGgznIb/PriZ+iXIKtr1ZngRc8V+gfOvKj3XoYOQPb5GhrgRZdt11lh/ZZ/oS8DkH2+hiZ40ZOO6qwEP/wLfQGyu1GdBV707KE/qrNSdLwLfQmA7PM1NMGLntCrs1IMnh0n7H0KUM+d0G9Cdleqs8CLnjn0jTorya9IdtxCHXdCrwCQfb6GerzoZxju11lJepFqDzXcCf0i0D12Rx2/F72mYRr6uvjlrCxRynGAKe6EDnlcqM7AXC56/tBF5807NVaW75rSMcWZ0BdAoPrPWjCFF/1Mf+6pqbHSfIjSvqDKmdCvAtA9dscUXvSztJvCoMbK8jxKe+ru3XKLAHSP3dFQUGTSDeMv0v5djWToW7HNTX3oqwrtQZzonP+OXqJIZ08t3ZnQKwB0j91RUTh0zZcvoW81he0aK0k/0nnqbOjXAOgeu6OMFz2m/5O70KmxkryPtFwN/QLks1y1jxc9Q+i7zbF+jZViEOm1UOZK6AsAhI/dUcaLHtOfuQtbHX7AVo6OZ6EvARA+dkcFL/q/QxdGNVaCt5Fnod+EGMn/rQVlvOjn/dFdGPGml9G5b6FXIJ9LVft40bMdxsU6/IytoMGHSPDrME40S/jYHWW86LE1jW/Nqc99bj23wX4nOtsLR0NfBqB8GoeKOV30fZPQu00jm+fT/x6OhM/l6hT3tqbz8N8iI169MHMDpij+J+kom9dFNwhd2LIa+uETvY0iHpl5eLbOeaFHuq/8QkdDXwSB7kuwqOBF/0foXQdDf5z+KhC6/UX/FDgaegWA8mkcynjRY2taQ8dCf7QhFe7Aop8EroZ+EUifxqGCFz0OXW/oVugbGw8TNTuw6CeBq6EvQ4zolc8o40VXQld1nQo9veiPSS/6XuBs6Dcgv6tV23jRs4UutIdb7oSuHMbFqVNd9JMwcDf0RQDSp3Eo40VXQtfZ7RbV14d+r3tg6p2hly+PE19/fmbu49iDmo466C8+yvYyE6dwgcOhVwBIn8ahwtdFfxIzDj2/1fPt60NvrN7V0P+3yWZu6ayYCSee1XTU9f4YSoIc3A79IgDp0ziUebvoHHrJoUd/v+LQg79f8xf6MgiU341DBS86h86Lnt0NEGi/G5eGZgIt+zfD5on/4MmUQehF2Q+9UPyGViZ+s3c2vU3DYAC2D2xAGR2sZ441GR/NaRzQVg4MEBJVwodWQEhQyucEGgK2SQjx10mXNIs9x/YSN/PrvA/L4F4ePfFbx1GKnvMlqIQ38vfIEU4/qSpgX/TrKLrXoid37yaiS271/Kn8eVKHbv8MwKKfAEVXTd2Fopt77lPRSY7Lr2vh8L3oeyh6E0XX41PRl0gBh9+SXsT3oqPoWHTrrJIMp8+N4/G+6KGEpkUPJbgqeihDU3S9634VfYXkuPwWBw7vi+6q6DtQRa8ydfes6F2S4PiWGREsugGTl9PfIVKN6cdDz9boV0iC61tmRLDoWsY7IVKL6WHgU9HXSAK8LTOMB4su8BdjXp9nPhW9RxLgbZlhHFh09HwRPPNoZ1yH1OViv3Gw6GrG6LkdXgS+FH2ZZDh+ygwPFl0Nrs8t8c2boi8RCnKRzniw6EUmIWKJZ76IfoEk0LIfdxfpjAOLzvEyRCzxzxfRzxMKcpHOeLDoRaYhYonfvohObHCl3zBYdCXfQsQWxTMkRwffA6CiL5G86I4fBcuBRVdxN0SsIbxSdfQ+ACm6eonu8DfpjAOLXmC8vREitvj1QOBFDFH08zOdIS7SGQ8WPWf8JNoLEVs8OMEohif6ss5z6uo36awGNU6GXa8j/001k+2MWqK/fRJFb0LEEt+Gw5OmwxvQrREq/+P8N+msBqYnw4IUfTOKoj8hYokfqeg8B+BE75EjAG53Z3paWfRxNON2iNjhXiq6wC400TuKoicXdXeRzgxoY9H3owiTbo93Q6noh8BEXyZyqPvPpDM9rSx6lIJbZiyt0OWij4CJfpmU9Zy6fnAcM6CFRR9HaLpFzx/nogvEsERfKSu6k+9anIFFVzOJ5uADbLWZJp6XiL4LS/QuUU3dZ2F39nR3ZkALi/46yvk8xX0zdZh+Hg49Ef1S0WRgp7szPe0u+oyf73aqI53c7+04yVQ+SavOn89Jzb0RfTWtt5VV+kq/EbDoujW6Nfbkxz3L2TbkkYQtQx5KuJ/yMpRxX81QjUeiXyUcoF7BxvS0seh3UfRGRIc1dSeKoqdQZ8+TYga0sOiDTRS9AdEPQIm+RhLKPHd9FyzT08aiD76i6HZF92BnXC+1XAZNfzv8ZiZmQBuLPthE0a2K7sFe92550d1/fTLT08qiD8Yo+qJFH8WgRL+SOy25b3f+CzZmALSiP0pJbFCIrmXyxA7loktkbcpqEVPR5QZX5Dusx1RXSV50nvzbNerwF2xMD7ii5zaoRNcz2V6s6DJ/z9ZzvegWPR/tAjvr/aqq6M4fM8MMAFp0jeh6xvso+sJEP4gTzSGJvkxSBNf5xlNnX9jC9LS16Eeqb6HoCxD96WGiObD3sa0R3mzO+0pV7/UXDBb9FNwd12QqF31zbMrbGnw6HfeNRD/4xLF7alLHgb1hdUVXdPefYBNgAg2dDGvN/clWRpnodwQGC6VE9P2BjDuG3KzBrXJGRlP3V+taAh3z/xVVPW9e9HM0I/Ob/w3lPQ4LFf06io6ii0ATfYkWI37CdQib4xKw6DkoehXR4yDgLlPN4YjeoySNuazoMO/dmQgWHUVXih7MVC9eHha9m1leUvQM6vLmuH7f36JvSGha9A0Jroq+IUNf9Hj2eRYu/4p+iWqLTkG8g83ToqPojYieEMSFy7+i96iy6GCOd8eiz0HRTy96zH+esYdr9I6+6O4/2NLHoh+DolcpepyoPb98nLpfy/SmVDl1h3XvzgSw6Ci6SvQ44IZxXk7dV2eOlxcd5r07E8Gio+jqW/fiIM7LqXtHV/QMCunenQlg0VF0tejBbOqeXXHg4dT9GtUUPbtgzd2ZCBYdRVeKXsh5Quzf1H2VaooO6LWqWPQUFL3KGv046Ynk/k3dOwZFhzd3ZyJYdBRdvUYvJD32cK97NnPXT91h3bszASw6ii4RXcx69rPu4dQ9nbkrig7z3p2JYNFRdKXoxY8z8HDq3tEXPYNCundnAlh0FF231z1/fi35h3dT92zmTnRFpwTW3J2JYNFRdF50KXF2ebfXvUcNig7w3p0JYNFRdP3U/fi5Ne/2unepfo2e9hzWOTNMBIuOomun7vH82bXYt6n7pURts6Jnf4M5Z4bVQGq6Icamq5ls5XyQin5TQGbS2Yh+1vI/l4ouniD76gbHuiEW3Nfbb1/07GwZo6fXgJ0zwwyoezIsio6i/2fv7FqbCKIA6hWS+pUUFHzwIS+CI6kmbwms2IgkREQqiGLUpqS1NdUqKoJ9EP+7GxNjZjJp52s39+7cE1DRgE+H0zs7MzvVWv2gE71kVnS4UNif3bnoLLqH6HrP0RX9xnxCP7fos99R3+9eoKLv9WdgFv0JIdG7EmFFV8FX9AoYFd2j6Zt3sqeIRWfRCYmOvugbpdl0bjqjo3+vKhedRc9bdNV1hEWvwrzlNjM64veqctFZ9PUUfQ7Gol+a2G1WdGfbr2S/DZaLzqJz0c+gBmZFn0NpG6yQ4aKz6JkWfeY6yqJfBvOiu/t+6U7GcNENRD84PvzSYpxoDD+cmhQ9BWfRNw2LPv1bYo/ShUzcRR/ttxgvhqd0i16e2m216k7nUbpQiLnovxstxpPGY7JFr4DFjA7UHqULmZiLzp4H4THRom+ULIpO71G6UIi36CP2PAynNIteBfOip1A7lS5kIi46z+eB+Eqz6FfBoOjSehyp22CFQrRFP2gxgXhMsejXwLLosz9QOZUuZOIt+nGLCcRrikWvANjP6ISW44RCtEX/3mIC0SBY9I2SRdG9bS/fyQgu+rmi8z6ZcJzQK3oVwGpGn0DqZItQiLboLSYYL+gV/SrYFZ3ccpyQ8PbcK/IO8r/tzzEQXUKRv8UE43TVkK7IPvnFHSHjJf81sCm6P5fv+IJR9Lv5iJ5oMBf9MGFCYXjFDCLRK2BVdKC3HCdkKBc90TA0Fn0/YQJxZH6XFBLRN0oORQdSu+OEQsGKbi7604QJxOtPi3y8j7/oVQBwW3Unc1hVyMRb9L0vCROGR53Os0V2xtiLvgkuMzqpw6pCIdKiN3/2fiRMmKB3UtFlTuuoi14GsJ/RiR1WFTKRFj31vNcbJkwAvvVV0VNe1TEXvQLgM6OTuDtOKERZ9InnbHpAz1PRVdMRF70GdkWfQevuOCETZ9Hf9absJownh/3OVHSVj3iLfhtsi07wCZtQiLHoD3r/eD5sJIyH5sedKc+W2UJb9JJt0eeSE9rwLmSiLPrv3gKf93fN0K7SHxl+78turhwlOvaXGOq/Z8hxWvPVor/FWvQquBQ9hdQTNqEQY9G3ey5o/79dw+8d9Sx4Ysb2avQzSX+JN4mO7n86JuhF38Fa9E2YYXtnHKknbEImxqKPeix6cNE1bOEsehlci07qDJtQiLDoAxY9F9FPcBb9+oLn1qvudJ6wCZkYi37AoucjOsqi12CO3Z1xxM6wCYUIi77Hokdc9ApIWBQd/JPupCxe0ZEXnWf0iIu+AeAyo9PbNCMUIiz6mEXPRXSUq+63Jc8tT69RuiVSyMRY9HsPWfQcRH+F8jl6Cdxm9Bl0XtoiFCIs+r09Fj0H0d9jLHoVwHVGB3qbZlQwJX3rbN52p3iJ3ny4rAYm0XWEEH3hC2eK3v9PV4OZ6Tt1bdE1mEvtL/omuM/oBPfBZi265hNK9M6UrtehlsG2EbJXetHTfzAT3b/UKriLvvoKaPWTo+hV2XP78+g038NGsehBRG9/YtEzFv19va71fL1FvwmuRSd700zURU9NZ9FDi656jrDoZQCnGZ3sPtjoi95uDx6y6JmJvnNSr9cRzuhp0L1mdOpJFyrFL3q73dz7yaJnIvqrSc4xFr0MsPYZ3T/pmEQnUPQJzdGZDBY50Iv+a7DE4SrRDwaGjLz5YSD6y/F43DUU/eP4PE7mbNX/gnBGvw6w/hnd+/VMmESnUHQDmgsMVojeXGK4SvRB04y2B/emvDEQ/Xe6LWHHUPTx1iL188BZ9Bqo2J9eo3a0hYvOomcqOsYZvQIeRad6WpWLzqJHVvQagOuMDgVJulDgorPoHqIjndEnQcew6u6XdFyi51P0hoYsRW9o0Ine0JC36A0dGtEbOgpZdCnobnfGkU+6UCBSdBadnOhrnNErgKboHklHJjoXnUVHVnQp6Pbn0Yux8C4UuOgsetFmdCnoLnfGFSHpQoWLzqIXq+hS0F3vjCOfdKHARWfRCzajVwAQzeiuSUcnOhedRUdV9BqA54wORZjShQIXnUUv1ox+C7yKDgVJulDhorPoRSp67SL4zuiF2B4nFDxFD38zrCp6SrerF/2+jCS4j/yjbT/R0+On2ERPv/fSXnQ9uGf0WxcB2Yzuci6dhuh3WXQWfU1FL1+ciY7iPLrruXQionPRWfQ/7J1dTxNBFIadMdZETSRV/ESNMXEr1b31yo8LoheSJjUUAxEJlgYbLJHQBBL+vMNKpzuzQ3d2ujt7Bt+nfqBR8Obx3XNmzmldNfq9ieg05tEdIz0Q0ZHoEL2mRG9wKTqBnXGukR6K6Eh0iF5TjS4CnWKNXnDHeyiiI9Ehej2JLgKdZI1e7G1bghEdiQ7R66nRlzinWaO7Rbp/0U8+jsfjXx7YSHG0IxkZhdooj99pjr4bv95oK8MoNrE+GGz544/536Ai/tx6bGInw+8NE+PjABL9If8nOqnptXNuOsjqW/TxIAb/PYMv1Gv0xaWp6ER2xrm/X7p/0fu7MQCCwz3aif6CS9HJ7Ixzfb90/6L3RzEACaNjyjX64jVhOdWuu8NFWL+iH8BzIBnsEU70Z5yXU6OzyzCuGtkhRT+MAZCc0q3Rn3JOO9Gv3LW21L/oxzEAKYZkE70pHCfcdXe4COtT9J0YgBRHVGv0Bp+KTmpnXIqmraX+RY8BSDOgmuj3eHmJrroe5q2ZyBI8uQMjRGv0h5yTr9Hzb81AdECFDslEX1ziEnI746xvzUB0QIYOyRr9BZ9Cbmec9REbRAdk2KOY6E85Ly/R9UwP84gtKkQ3BiDNiGSN3uQ8iBrd4xFbVAzccwcKpxS77g0+gew8uvfB9KgYKzEAKToUz9Gf8Al059Eld156ISoIJlRBikOKd90XuCCMrrvgtp9+XFQQtOPAlNExwbvuZ1Nr4dToOVNsHkTHwzvI4wvFefRHnAdUo/vqx0V5dA80xhhUBQmjj0ONfQI1+lknLqQa3dyP8yz6q/52L8MKWu9A8G1lNWEtRWfzTd2JLjtx9KfXfPbjolns98ysHG3t7u6KFYPrZX4HAbF1+mX1nDWVYZ01utaJo7wzznM/LppBvzebrwY67qyZWDXwwZJ3JfOeDu9K5oMlqwbWNDZrTHS1E0d6Z9wU5qMfF0kMnkN0iF5c9NXNGmv0JheE1XU/45bupUfRuz2IDtGtRNfp15boSieO+M64KSzbj/MnemsbokN0N9E77bpq9CVOLNGZ5Q8Lmpf+RN/vQXSI7iK6oF9Tot/ngqC67pOvo8+r+hP9BKJDdFfRe/XU6M95Cgo741hOkkuYvj/Om+itHkSH6G6iC5ZrSfR7PEUIO+Mmn5xl9sd5E70L0SG6u+j7ddToZ0fo1Gr03OqcTVxXD9MhOkQPVPTKE33xAT+H0vQas0t0fdkMRIfogYpeeaI3eQoaO+NYfqZL19XDdIgO0QMVvepEv8P5VT4hmJ1xqa+pLX+m04z7asscppOX3xaTrIRwEV3yKUvXZ6LLB3eKNTrLy3Tpuj6ZTuZ4DaJD9AtE7/k/R38mAv080snNozObRM8+vFO5MAPRIfoFove9n6M3uITQPDrL771L1w0P70SuwEJ0iG4WvdP2neiLS0mgE+y62/z1RPKKH96jC9nfzkGY7kzZDTry7n/O8s4aSlYbPO/o9L3Oo8sHd/GdXI2eW6Ir31jm4d3LmCoB0TtG0QM0nZDo1p67in7ifR69IRxPXjRrdPtEzz68e1k8AdEhenHRT3zujJMP7iRr9ASWV6KzaaJX9/AezeIAokP0oqIPfe+Mkx138SI3vZZb5bNUqJs7736WQx5DdIheQPSTtv+97g3Fc0o741jelXc90avrvEc5tLoHc9N3Z2jLpjs/SubnPPyons05GM5mr+11r7v+4J6YHtTOOKbX6JV13qM5aFnyyp1lE2073ljyumzeuvPaA28saZtYtsBzjf5I5vlVmjfjZkyl64kuO+9him54QfT/TvSKEv0O5ynTw9sZx9Kys8n25zBFR6JD9PJrdHnHnW6is1mbZiRM+W2WDKyGKToSHaJXlejNxHOyXfe8jjuTP7NUqjcCFR2JDtErqtEXFM+p7YxTMMe59Dwd7Teuhyk6Eh2iV5Pozx9wxXRyO+OMVb7+ObP/szTDFB2JDtGrqdGfnNlNt0ZXhDZeilPacOz8JVgIUnQkOkSvJNHvc66aTmx6jRXc7i6Y7Hm/FaLoSHSIXkWN3tAsv0ptZ5wqsr5VxlSjy9fNEEVHokP0khNdDqGrL3I745gidM7Ei3xyNy+FDbRut3N/2ZI2dfutoCW1AVurzZpbElnS5Ao0d8bp6JmunKwpv86csYUpusHrFkS/xKK/Klv0hzwD4Xl0qbY53vWjdEHmjC1M0ZHoBi6z6GUn+uMHfArVefTkcyiWG9vwLPWR/CDzXsphit7KFm0Q/TKL/pe9M19yGobhMCLhZjmmLLOlLMtf0BReJu//Mni9RVNp5diptamV0S9HwzlcH18sx4qy0a9vHw/IW3xTS8lNPKDRyRoXvo7NJuiPyXaj/10z6MpGv+u65xbG6CB+MK0DgR0Nz4bpNkF3owtZM+i6Rt90Xdf8GJ3QTb4oV+f5TTxbx2YT9IGx7kYPWTPoqkb/eRNANzBGL1uqHjcyySa+Nd0m6P8pP8aNfp81g65q9NtOBr291WsQT5LeMXweHa/Yo7A2QXejC1kz6JpGv+tk0JvuGSeM0NkD77w0x1as2gT9nmw8u9EfsmbQFY2+6VKgt9gzDiYG5gRtRnw40RWrNkE/5duNfsyaQdcz+u6mCzFSdacBfsnn0flkG5zMptsE3Y0uZM2gKxgdZ9CToDfXMw74GR0uLGxhJ/4yZZugu9GFrBl0NaN/6zqLRofU1wvz6PHAfXPk0ibobnQhawZdy+jbCLmNqjsxedrngLtI/tvPv2Jsgu5GF7Jm0JWMvusmQG+xZxyIxAO7bacjcwb+u4eCnE3Q3ehC1gy6jtGvv0+C3lzPuOytO+CJTqET8q8ilzZBd6MLWTPoOkb/GgA3NEYH8WE4DBCjp+bZ4PjcjE3Q3ehC1gy6itHvTjg3s3pNekAGf1rOtzzRZvg1TW50IWsGXcPo224a9AZ7xgGlmYfLm5+w07vZ1zS50YWsGXQFo+9ucqC31TMOMt8mSF0gP2wPzSJbAn1fbfSG16jXZAFYF4D6kpxjIQ5TSPXF59EhHuwaI3H9aLot5Moo6ILRy0EfhvH0cNCbA33/eKsG/WtXDfryPeNAviQnwF0k/3j+ZBP0KqOPB3oMDnpboO/VjY6FuOWNfi7t+R8uGx2vGO8vTYJeY/Qj2niMbvTGQH8Co2+7M0G/eNU9hKubD9LFGhxBvbG3tyxi9DFKHQ8fozcH+l5/jL7rQgyO0bM/A6RXrzHTw7tXBkGvMjpVeEDfQW8KdH2jX98X3C2O0RHdiaK7PLUmjN1fGwS9suoerI6HF+OaA11zjI5LU+2O0XmbCQxyLq1e40YPubIHeo3Rw86KccPooLcEuq7RcWnq8kZXCGQXuuCJr17j8AN8MAd6jdHHIHJSkPNb97ZA1xujY8H9kkaHOsonfh7IrF7jfSMBXloDvcboMcP4//BiXGugKxt923eXMnrYVQMC9MTcU0aHcPnivTHQ6+bRI+2YwefRGwNddYy+6+9BN1p1J2DTgFB1TxbkcPv4yhbolUYnT8b5rXtroGsafXejA/ryPeOQX0K2+DXy6jU28x4TJtlMgV4zj06LcT6P3hzommP069vettExJc+6TxgdtytToFfOo2MhzufRGwRd0+i3fUhnuOou3hVwneMuQM5IB/hiCfTa1Wv4ZJzPozcIut4Y/VuvBfryPeMQVbnQTqiWV6/RmTj8BX8wBHqF0ZnCfR69PdDVjH7X9y0YHfR7Pifhzxo9ZGMH9Kp5dPpsnM+jtwa62hh924esYYwOcgUOtZ9dvYZbPL14bwb0qjE6eTbOb92bA13L6Ju+b8DoUEs3ZOQOmdVr/NY9km4F9Bqjk2fjfPVag6DXjtFxYu3iRgflojt3evnqtbgh7e9eGQG9aoweKMdn47zq3iDolUZHzpswuvIKNtnviHam6v7/Q4P038qZYXm+afaRqzZ/Q/9x/NHMov3hykG//p6Bus7oQvT7SE02f03Oo6er7kfS4+dru6ALXO9LQWc95Bz0WUmDPdJDSd950OPK1B6359ImpBhzEDZ11jFAr/BapDpjdBxwXJkFvcLobNmqgz4vCcwfNecr5FwDdMJ5BvN8E3e+R77YlluPrr+eRTY6q8PJd+6RdKug7+m/mrP7yI1u9HmRQY+1ELoeeCiJitG/PXCORhdIrzY6jX7VPVl0h3TPOMHo7Nb9BPc3RkEXyD6nj1w0j4M+J4dUxoEcixgdOVczOs8Mo+sEck3jSlevnZxiHwqboFcZfSQDy9FBL82E0YnOsRiXYV3D6HeB8yWMDrjJRlf1OZAiHPN55t1ryDmbMvhgEvSBsH52Hzkvxs1Oyueo8rhPGB2jYvRt4HwZox/z1GN0+TWLBGYuc6HqTo1+dLpF0Ml8ek0fuWFwo8/K5JQaXo3LGD1y3ozRn/DO/ZzVa8cdi3Iv3hsEnRi9po/c6Eafl+QIHV0eDvnWnfytaRgdOV/A6PSs3zMOeL2NfTnz7jU+RgckHa8D6fZAV+sjF53uoBdmshiHH+EYpoxOma/IBjlfwOjkLMP/FAF6Ravryao7N3rYo9PNga7VR24YvBg3L0mf40d88HgJo+9uur4xo2M0tB6O8969BsCNjqRbA12rj5zfus9NyufH0gc+mqBrdJnzvimjI6jnBcRrRL5o9Vo8JY0eSTcGulYfuZBhcNALk7l1HwcUvLbRZc779Rgd0pRL9X48ScQj59zocYGLLdA1+sj5PPrcTM+j4xPvkXpdo8ucN2f0athB+iLnPrd6DZ+MY0Y/km4KdJU+cj6PPjeZeXTs6KNddZc5b8zoCKYu8khx+bvXuNEZ6ZZA1+kj5/Po83OYyIhu1626y5y3aXSogDtz6y6vXiuvuiPphkBX6iPn8+izcxCDs+cPQ3XdqrvMeXNGVwinmgaKV6/xqjsn3Q7oOn3k/NZ9ZqZWr2HFXbvqLnPepNGhHnE4OeIZv5hdvZavuiPpZkDX6iPnoM/NYTJ4p6RtdM55g0YHRZ/Lyb17LV91R9KtgF5ndNSQgz47h1zGeCgbnXPeqNERVhXmgSo+812zVXdKug3QK7rOaPWWu/jdQA2sFRkqsi+LfiPI8gYzfJONrhxCNcxVf349uki6XdAr+sglq/P548CzMtBPfrcZ0PXbw3HQGef6oD+TyJcELgVUWOc+zy5aL666c9LNgq5sdKzW5Y7DikGnfwri/Hgp5xpGj5znQO+e073O6NKQHDEjH3ilFc4x/4Yzq+5IulXQK7rOpKrz2SNk3aCPA2uwN5yZeqMj509qdEp5udH1dI7nsu9aXnXnpP8wCnoV2XJ1vmBfN+j/2DsbJaWBIAgzCGqVopQayvP8ufKnzuVt8v4vY1ip9jLMuhMyG3Y36SQSED2T4qN3OpuxU7/B3g0dHZwnrtGhsKNLogRTYKFLZ8ejPnXn2r4uE3RjR9eF8pWD7hxvsOdU4qybOLrnPBNH74Flw7rIOCw6LG3qLpFeJOiOsz5OZwdr/7vV7ugtn0Q4yNEhA0cH5+kdXVGjh285IwO0I38X4QEGrk7dOeklgj6ij1wodZ99GHc8sgZ7t3N0cJ7e0Yem7mRm42HKCZt496o6deekFwi6naMjdV/CuCNrsDfQ0UH5eEe/68jOzNEvySRb4rEvi/AOferOSX9eHuiq2XJ6nR3sP+sMrqO7ljXY04BuOa0d+st5NjU6wy21SH46InWH3hQHug3lULxF7CyG7vgu85bubuTo4DyX1B1wGfk5YQXIgJa/g8+k06fuMumlgW7t6K6Nz447qWbQT8fYO9obOfp+u8nW0eXSOr0IO/rUXSa9MNCtHf2oCOLmkLo/OWJ3I0f/tO1Az7JGt0Ybdq79AfoOM2HtygLd3NFdGwvj2mPloB/ZWWgndnRw7kHPKXX3G7fV60Vi6k5sFC++rJ/rHia9KNANKUfqrpkWVzPo56Qds+Nukbo3u+02Z0c3tHf9XzJyrjvXuxcFgZ4kdQ/DPAtHd63DUd4odW9ebjtlXKOTXye7kg6RSeqOW1zKAT1V6i7PiZuHo7O+MZOn7uB8m1nqLgNOVjZOwpBefGV86o5bXIoBPU3qHoziZuHonfqnYGpHv3+73ebo6ATO+KMV5aT6cwapOybJlQJ6qtTdydtcHL1/CqZ0dHBeSI1OdrevybPaOeBGqTsmyRUCeqLUvX26YZ1N6u6FEzBx6n53pjzD1B2kTZvAEX+jQeoOvSm2vZQod7lY65i3nLGs+0Y9nrVPSPVYR+eUkxXznNlIjzmL1B36URPoTpA16gOQaxNvyUGXz58F6J+i9r0WFiXoBqm74ax3mWqhaZXxXHeuXUWgZ+XobfJtCtB/p3D0ZqcZp1v3cNfPdYemHrxjxzB1hw4vqgHdufSkH/VyibdJHP2S9tGgN18UBflaIH06RycJPDIYuGOLi8xSd1xmqwV0cJ1Q+pH7sU27Tufo/VeMu8nYO7pl6k6J7Bz8srIdO2NT92q6zmTv6O0xtSaq0Y0d/T04T+XoBnPdpQte40T6d5B56g7S7+oA3X8Mc6nRMeks0Tapo5v1jfLdZEpxdOOOkHIb97Rz3bl+VAG6c5ztGzq6O9YQxnnhpI539L9xe+41OrPzUdiT+oY2lruZpu7QrqkA9Lwcva0hjLN19ObdduOVc+ouIk7pcncS3jG4r7ter5ryQRcov4WjQ65Nubopa3TsjXH0++4ulvwdHSW5/f+gig3PY9fsLVN3RHLFg84cPAdHTyV56J63o78/zW7fFFSjgzT7sbumBby+r/tA3ZUOeo6Onmo7Ssq6Rt93mN/e0aF4jU4xMm3tHu5u0Nc9og+Fg55hjZ4shmsLS92bU9OoAh2dTFjmK/bC7NPwvu56HZqiQXc5pe6d0JPNfHMy5/nW6A9deZ6Fo6tSd/gs208lEvaSpO7Q59clg56hoyeaFnfsVJKjP+/K8ywcXdvX3VA0pLMzp94+dcfcmYJBz7FGB5O2cq6k6+in8rwwRwd2Fp5OfAtl7hDZz3Xn+lAu6Jmm7klmxhXk6L48z8TRh9boCsDtXZ8M+rqrCvVSQc/R0V2iOK6c6+in8jwfR9ek7vgNe9op+AIc3KDDjPqKeqGgZ1ijJ4vjirmOfrp6XrCjm/aV4aPyRH3d9dqXCboTRuu2qF+TurdJ1lKuo//q4M7L0Yd3mCED5KM4x/pJUbi0kBaldk0196grO9HMTsadY2Q1BwFqhUZCLSwSIqKjk0Q7JbqMRqEATp7rLkMtUa3vRlHLPeqSYh97LAV+I1x/IAlAv/++SQq6XgFEsHJHJyMnlyJ27CnEgzjxIKRFq3U196hrHH2OnKd3dN/qNSdHD3MOR48gZy8KhH7E5roH/30y6Wp1p/VTUyvo1/ObP+nXfycYg44WkNODLnNOsaxLcnJiNmzVCpYCA3dOO+EB+xqs9bCvO315XSvoy8j94lBsHR3D9hs5Opc8xmUrXrMW8XxN6emEXxnwWILwe616axj0bvheKejL2B1LKkffdwF7do7OORdN3XiSOw1u9y4X6NhXZe7dqnd0P3yvEvTS6HUpSouUNXqz2yYHXU86HF2AKoC6aLs2pi5TTZG+7jgCKYvTZ+4y6H74XiPoDIe5Onqy1P3vPSy5DN3Vjg70zTvA8gdS9qYgVqBLByG5OtYo/GtoXyHoy8g9aer+y2OenaOLkPB1gikywYqdP+dX0ENje6LQyJ0RL4IOHZrqQOeLm2Pq7hLV6H5u++bGjs4/9gFI+BoHcrgoPJU9hDh2WYEeihSlMYxS6yfaPq8N9GXk7pckqftdN2zPwNE593pHB9sT3JzG9jjlJPaZwYIvDxIzd7+pQIe+NXWBvqTuqVL3Zuchz87RZc7lHk9296FH3ZsiLWCBtjwnvneM7IkXeI/W6MjkqgK9LHZdqtLCvkZ//v0E+M0dfUWXnK+UqTtknLr7ddgEORh62NG9pBGMVmuuHzWB3sNhzo5unLp/6wDPwtFX7GMP8KOObm/nrPaWHVz+weBarNEjjq4Dfn2hw9d6QF9G7ilS9/uXHvIMHJ0ER+9WferOs3ATzCFAzOjmbydm59Jvy5wTpJgZx7XdVwM6Y3euqbuzrNHPF9WycfS+vcEPoUgUZ3kPG/4m/XcBhz3s6MLQ/byotJb0rqkE9GXkfl7sUveHwwntTBx95Vfsqx09SLUh69iCt7Wwf6wwfMcLkqPjoIen7tDH93WAvqTu1qn7vruolo2j06WjAw5FjW4/Z4bCL0a/W7ipy20zhMwdv4J9Fegw9RpAL4lcl7K0MKrRH955vDNy9D7pBAdloMTLdCBlRTnF0jqB5LCj0xlzRUmuBR2mXgHoT3CYu6NbpO7ezjNy9N5lY5AOZlSpO0TmneGwQ6EfRZrUnaGOBZyzs6AXTN3qjrYSvyQW8TvVHg4bWQGELxeliEY4utR5SZ+eTTH1HXu61J07Og5XsPiBQvz+fgF9znrsaf9xEwJ9o+P8mSnocHRWowtDd+XEGDIx83A2J1FODPaYo/PwUfBzvZ5U6l8X0OerR+hs57k6Oj7kcj8WDrcMvkEvKe1dLX0BZwY2nqocfXUF671r6gvos9XjP/3cdCrB0fm4HdDr71azT9wp9F48hue6c6PnpYrfrhSbKLeAPlPhfN+/7HDO1dFXpEjd5TSM2FMr2EkO1oMBPyCPOboQPuLJFcjz2e8L6PPUH/bOcDltGAjCHKT86o9MGRKgpKHTdvz+b1hi3J2yWUUX2TKy0Rqw0ybTlvKxupV0NBdtX88wF+vo3SOvdVdZXGRAnaUPbDQKgGPHU3ft6P3bS0HHdQX9HtW02rx1eZ2So1us1aKRnQ8lc25Q1/WDpabuHMslgY7ekRX0+1Nz1umtaXu5jr4QNTrgYLpisNvAsPM4naM6dv2k1L3n9Brry76Cfndqujm1ch2dhu4hR6cyORqZD/vRTBHRXzYhdU/O45ZKT18r6HemZv0Wwk3L0a/hAOe6Lua+jP0Bj0V0esccT635U/devShsqfW8raDfk7aHh7OKdnSdujNEYCa3l7PM+X5gV8AnpO5EeCLo0HFTQb8fnRe2PzyU7eg0dNdrYIO1cZ4l77rbRHgHPL4hOXXXhCeCjkn1Cvp9aP3WRWaSjm6YqxK4u4i2wcbu7jLd8JC+1h0RfCLo3Ce2gj5/bQ9fzirO0Rf8IGp0gEP5u0YPWGWaZ9Mb33Eltrmlpu64SgWdtdtX0OeuP2/bUafh6JS6k6NT6o6725PTITfJu6mfEI7uT92HH7pDL+sK+pzVtnIu0NGVn3PDFbBBFbkFCukMXWC9H6fK1p+auhs/I/1Bhw4/Kuhz1aWJzEQcHVNq1NedbFKDGLbY4bzcJPGmPD05dU/XMqrd87aCPkdt247tZTq6MnWwzmvd2cxxEitZBqzTzf8ewkV739R9MTDoKNUr6PNTW5xP3dGNAq2wkZseU/eVCs3Dvw1H75+691/rrkv1Cvq8tHkrzst19ECNzgk8uGGjtgiYw8ucm1i12NF1qmfq6CE9q17Q+nfnG8Kc3ziaXlo/rZKkoc6RsHPmxoGafxl6XsjdkZx51r+z29v1BQoWGsOnKpTKVdDLUdNDp29nYB/48IKee5iuOsmY6Ve+jrVNo5Qfd2vvjpE97moAYJp0nK6eoV5aan35ta2gl6ImWafDg8C8LEen+fLrUJo4d1s2OMojjbg5f5L/gfJdgJrn5UjigXoFvQw1idr+3r0laoL1oh2d8mrmSIVaOI0sOLeLeOOx+0eOTjvZFsMP3aHjvoJehJoEtZh3iVrZjg7SDTcjFIwgD8tw5/I5C+KeLTC46R1tmnPxpGQI46BjActiK+hpoO/bTlFTcHTapdaRQKQTRQ7S8lIeBjsuR+pui/fPSrIYdI16Bf3maj4tYH5W8TU6mRd1cwb1ZNECMMvPuObb6/UUv5Xj6Jdp9Qr653R70DvMwXnxjs6pO2dWRvhGy+DcYsItPOUnCgrzpO75a3TW07qCnqzxQe8wn4yjg26ZugOLSLQu/Twz9Rpsx3fFU3dMoOdO3Rn1CrpfNwW9w3w6jg64ZerORITAtlHqc/9Hwpj+mky8MEe/oN4UpAp6QB3mE3N0flEbXvAgKUy5SVe9jfCnc+zOQ/l46g4bz16js172TTGqoEt1mJft6IvwA248xI2tl9GD+7zQm1oJ543co6k7yM6bumsdi0G9gi7UYT4DR6eBLS4h9nNW/trc+DEQELD4XSy6XmZ8R18VhHoFnYTlMaU7unLxcOqOs0zdmTkwlNvTHb3qcOIRPLgOpe54wJOUv0Zn0ldtZ4rm9qqgkzrMJ+nognzl6OSgfDG+LD64CJcTH6fu4D7rWnct/D/vnn82A6uC3g/006ElegqOLkw9lLoT7C4xTNlkEdZN027O1B2M2+JGjt7+Rx8GRb2C3g/09QXzyTp6KHXHTZg6/Q4uBN0ZcdcsE/9UQrhS9/aGp2b0Gh3HzWfbKujQ5unhrMk4uqrRce10dPOQlx1ycBtbHZeQutv1bvTxUncmfbDZtgp6L9C3l6B9bo4ua/TI/NpoFu5fnidH9K7U/Sw8F+M7Oh3LY99croLeD/TTJYGblKOzp8PRHam7BZq3a9lY0+jpu9QhIh148zrYBR9j1e2Hgj5y+d60PqzG7AUHWapk8qZ51Y4eJNtkIZxfJqhP2kPHDTbAOT9ZrOxJPPS0r6DfQvuXVQ8tc4/J/ZzjwIWs0UPrXSMpd1bo/WWD/OxX3GVv2IVRmT66o7OOz+W2nJqpTs+71VkTdHQxdO/AJsp16g75JtMtf3sZk7TL0YVFHJ1n1+R744CcA3S/DusK+njafGthnYuj09B1oR3dt+HcUhHP3xWWvzKxBY5a1hvHlIJs4H/14NXy0zrutxX0MbR9PLaoTtTRBelwbxyRGj2w63x0xAGp59dMb28Ld3u3q6F7zNETWV8maHf4WkF/r3ICuBIcXc2kc9TMfVhEm1f3iHikpnHhD4Pzbpk36g0rGj4D+asjcxin9fK4raDn06kz89k5OnueI3U3XGluxloIbwmtYo1+DmCzuwPlyEeypeO+TNZhXUH/p+Iq89EdnTNjzTmn7rjhHKHWuMjNL8OD7i1tHupxrR2dynPctKMnfo56uo4F7HmZnU6vFzOflKOLolHDD1LJwekcrZC1t48pI9YjZQV974d7WnAlOWe8M4OOufUStrLORttuznyCju4euSN3Dzq6Ln7tY3osI+sm6FYyAT1d0z9SODobNmfuiVr21e6waarKG7LfrEYX67zI0YH7RzW6RjzryN1fgJvy9HCNgXMvRzcIyGceurOOr9+bqp76ftit2o9ZmaSjswOJnWoLA9HgPJC6+7uwMn5QvtA9dfscmG8PXaPjgRcU4nL0MI5Zf6zler/CHJRP3NHxOpSOzkN35egW/gRiKH8TKX+JDundd6YujVN3SjQ48MjfjMKvl8p66lxaW5g/nG+TdXSGHXdO3YWr0TkiQmksmfqDXeE71MvRQXo8dE8HvUZzUCbKH7qjxXyKjg60OY3T2zTCqTsMn51PGzd+bLSxO5uydnadwzHn4U5SXKPfch5d69u++nqSl4P0yTv6wmh3tTt1pxk4P31jGLx5fZ/AFglDJHUXTLvn1/qDXsfwmSg/H6B8so7OSkjdgQHjoK7zs62DNGXkDLHWII6uwk7WSKCvOtZrDv+hvr9eKMfRPUzW0cFzUupOju5hjufQLRv45t08xwN6fNW3Rr+ci0jdr/tQ1Tm3D7V5PXaU42hvM3F0GHhC6g4MQIskBpf5JbJzz8ybhZIE+2zqLgDXsI/t6BcP6dbS1HCOtN1/261AOZE+YUenl2BC6u6jV4Pm/fkMTu+nv794Vr09RpAriH9ErznW/fWg+/74sjxLoQcg1TG0bGAtxKFf9Zy6CyokM/oTFMaXLiD8HWpNR/Lew96TPoaWPh1fN9sK+nZzOC4BueJ5PNJtePHrDkgT/ThrLJgH3rZaAOMRUxf768T2Wx7T+w88vSNq6VVr7PcM+vq5s/IiOM/h6LjkQzk9O7q/5WIZfi6GFuaehZdXLpXu6J2+HPY/7hH0n49tVc5wz8rRF+YYujPiXJtbDJEyCBd/lf5Naf2GjgucfPd0JfWbO8N+T6D/3B+Oq4sK4nxo0LXBLOShtmmKE01RWaFD94WJR90nR+24N9wTh+5FOvo/vZxhvwfQAXko/Z6Xo7d6X46roTs7eooN2m1x9y/aMWd979H/z3BpqbtQ5+xzBv1ve2e42ygQA2FMpP1dJQqbtteL+v4veVwqjZrRLOtAIAYxhLJH+uPS8DFeG8wnIIcCcT5j1p2ZNlfszk4dqZOMi2H9AczHvT3k6LTp1dRfE9VO0uX4lrYIesrHi7OevRlHF/5SdnQTUTtRwx1hQ03Q9UlHt3kuTEAoiPeTTjG7z9Eno95OV3c9/d0O6N/v12IrqECcL5Z114cw/4BcLFuIwB2qu7j5UnEemXD0JdQ+R5djTue1g35OuYORK2msN+LoKusOlsukGoxPGmG0ihok6vu+bAMFNFPy7nyT4NA6Ve0T9aenfaXXy/aMH+udWwNxvkjWHSwLR6fA3NHswcJV2JhlTrvLXZp7/ywd2D7k6RFC93v96fJpVbe4fp7g4xUVod6Ko99EPONVj9yt0ssh7MVxlF5wByI2oobAjg5Ph3er8XS186j7eItv7t8pf3SHBxSI8yWy7uI2c4m0aQYkDZEiecoP+gDXzm4+RwfZg9W1Rownq51Rl+6aU0h3J8S9KiO9AUfn4+4RRzdiXzd7sIihuxW7UJvcVU4pOkiHo/PjcLBPsf4U4tv51R3zexR7P6f33H0dRioQ50tk3cVt5nqOXkcofGJuROiuPL0iUUe/UzOfr7eLqef9Lb2skcVnyiB8rAaRXr2ji+eEkVUPZt3J07GTIIpzm2qlQGCOJ7nwp3Q5Oqzc4Oj8NWC8ktAd+n2cX7ou57RURP+dTj3g3eE5CsT57Fn36Y7OspB2bmLybbQHYyV7YJbOJTZfCe31ofvBvWAA/Sf+mnOaw+RTSjl/EN/TVUF6/Y6uIndf1t3Yr1U5LVLXCfoPTG9R4Wx7e59iZ0dvpK+vJnSvt0LqbtDn1Os8buqdeuu+wd0d5lMgzufOuhv8vJJ1J7415aEvdS+3hvQ/sVGfEOXNQOq6OMfUPM5TXsqqUQBBX91NeUjX7qbBy1x2R/eJs+4IKh2O7qbE4nm6pzBeTrrXpCN3JT7N6iWU2l1a9iI13kVKNHeF6nxbwDm5Q1b5HCNbWpY9X/3jRxiHI73dFQt0r5rSwvNS7w0rQe45d0uTDMlPZIpjrPJPqf/E0N3cnefxTX1d200y25O9Ss2UhdPJwEAXmmwNJXM/7VYpwNU83Rm5W9ne8SOcpbe7lptTu9YJoTv2g3QPzdiukHVzN6Ef+WRHbegENz+3GiO8QVuMl9IOekRH90jDD8DdTxZm2FeDOGSV2pkN1RYML+3oemFeKS/6a2SS9Qbv7aH7y2VzqRneNt5F7tS5OMMr6mUwE2VUemMZUU6SBj70m7VmU4Cdv+JXaQd90dDdQXkvdysEEpCmg5bERHBCap05OWcTSX+gU3N0GuELxgamrrWH7kFkc0lRDjlzOD5HL2tNt69o6f4xvFu/p5Pu/tj9l19jxNk4ajXH5wA6NcyuHfRIc/QGW1fbE805jl9Kx2HdROncU0L3urk28fIvakdv6KHVsXLuO+iLgU4Rnd5SXFheyg3TyNY1DNjPVamQ3WRG1dggq1zUq31/2NEp5SYfWk3oKzW2lHbQIzn6j1zRe6MdnWx9dMul0aj/A5L7eGsa27ySAAAAAElFTkSuQmCC"

/***/ }),
/* 55 */
/*!******************************************************!*\
  !*** D:/liukang/haomuyou/haomuyou/static/img/10.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map
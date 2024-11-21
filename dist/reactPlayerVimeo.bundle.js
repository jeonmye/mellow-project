/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmellow_project"] = self["webpackChunkmellow_project"] || []).push([["reactPlayerVimeo"],{

/***/ "./node_modules/react-player/lib/players/Vimeo.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vimeo.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Vimeo_exports = {};\n__export(Vimeo_exports, {\n  default: () => Vimeo\n});\nmodule.exports = __toCommonJS(Vimeo_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://player.vimeo.com/api/player.js\";\nconst SDK_GLOBAL = \"Vimeo\";\nconst cleanUrl = (url) => {\n  return url.replace(\"/manage/videos\", \"\");\n};\nclass Vimeo extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Prevent checking isLoading when URL changes\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"duration\", null);\n    __publicField(this, \"currentTime\", null);\n    __publicField(this, \"secondsLoaded\", null);\n    __publicField(this, \"mute\", () => {\n      this.setMuted(true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.setMuted(false);\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    this.duration = null;\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Vimeo2) => {\n      if (!this.container)\n        return;\n      const { playerOptions, title } = this.props.config;\n      this.player = new Vimeo2.Player(this.container, {\n        url: cleanUrl(url),\n        autoplay: this.props.playing,\n        muted: this.props.muted,\n        loop: this.props.loop,\n        playsinline: this.props.playsinline,\n        controls: this.props.controls,\n        ...playerOptions\n      });\n      this.player.ready().then(() => {\n        const iframe = this.container.querySelector(\"iframe\");\n        iframe.style.width = \"100%\";\n        iframe.style.height = \"100%\";\n        if (title) {\n          iframe.title = title;\n        }\n      }).catch(this.props.onError);\n      this.player.on(\"loaded\", () => {\n        this.props.onReady();\n        this.refreshDuration();\n      });\n      this.player.on(\"play\", () => {\n        this.props.onPlay();\n        this.refreshDuration();\n      });\n      this.player.on(\"pause\", this.props.onPause);\n      this.player.on(\"seeked\", (e) => this.props.onSeek(e.seconds));\n      this.player.on(\"ended\", this.props.onEnded);\n      this.player.on(\"error\", this.props.onError);\n      this.player.on(\"timeupdate\", ({ seconds }) => {\n        this.currentTime = seconds;\n      });\n      this.player.on(\"progress\", ({ seconds }) => {\n        this.secondsLoaded = seconds;\n      });\n      this.player.on(\"bufferstart\", this.props.onBuffer);\n      this.player.on(\"bufferend\", this.props.onBufferEnd);\n      this.player.on(\"playbackratechange\", (e) => this.props.onPlaybackRateChange(e.playbackRate));\n    }, this.props.onError);\n  }\n  refreshDuration() {\n    this.player.getDuration().then((duration) => {\n      this.duration = duration;\n    });\n  }\n  play() {\n    const promise = this.callPlayer(\"play\");\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.callPlayer(\"unload\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"setCurrentTime\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  setMuted(muted) {\n    this.callPlayer(\"setMuted\", muted);\n  }\n  setLoop(loop) {\n    this.callPlayer(\"setLoop\", loop);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackRate\", rate);\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.secondsLoaded;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      overflow: \"hidden\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        key: this.props.url,\n        ref: this.ref,\n        style\n      }\n    );\n  }\n}\n__publicField(Vimeo, \"displayName\", \"Vimeo\");\n__publicField(Vimeo, \"canPlay\", import_patterns.canPlay.vimeo);\n__publicField(Vimeo, \"forceLoad\", true);\n\n\n//# sourceURL=webpack://mellow-project/./node_modules/react-player/lib/players/Vimeo.js?");

/***/ })

}]);
(self.webpackChunkmellow_project=self.webpackChunkmellow_project||[]).push([[554],{4744:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function a(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function s(e,r,l){(l=l||{}).arrayMerge=l.arrayMerge||a,l.isMergeableObject=l.isMergeableObject||t,l.cloneUnlessOtherwiseSpecified=n;var u=Array.isArray(r);return u===Array.isArray(e)?u?l.arrayMerge(e,r,l):function(e,t,r){var a={};return r.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=n(e[t],r)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&r.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,r)(e[o],t[o],r):a[o]=n(t[o],r))})),a}(e,r,l):n(r,l)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var l=s;e.exports=l},6147:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,a),i.onload||t(i,a),o.appendChild(i)}},1811:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!((a=e[r])===(o=t[r])||n(a)&&n(o)))return!1;var a,o;return!0}const o=function(e,t){var r;void 0===t&&(t=a);var n,o=[],i=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},2694:(e,t,r)=>{"use strict";var n=r(6925);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},5556:(e,t,r)=>{e.exports=r(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},115:e=>{var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!i.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},8021:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),y=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var f=p(r(6540)),h=p(r(115)),m=r(7604),b=r(5635);class P extends f.Component{constructor(){super(...arguments),y(this,"mounted",!1),y(this,"isReady",!1),y(this,"isPlaying",!1),y(this,"isLoading",!0),y(this,"loadOnReady",null),y(this,"startOnPlay",!0),y(this,"seekOnPlay",null),y(this,"onDurationCalled",!1),y(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),y(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),y(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),y(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),y(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),y(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),y(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),y(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),y(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),y(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:a,playbackRate:o,pip:i,loop:s,activePlayer:l,disableDeferredLoading:u}=this.props;if(!(0,h.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!u&&!(0,b.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==a&&(a?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(this.isReady){if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e,r)}else 0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3))}render(){const e=this.props.activePlayer;return e?f.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}y(P,"displayName","Player"),y(P,"propTypes",m.propTypes),y(P,"defaultProps",m.defaultProps)},5580:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),y=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{createReactPlayer:()=>S}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var f=p(r(6540)),h=p(r(4744)),m=p(r(1811)),b=p(r(115)),P=r(7604),g=r(5635),w=p(r(8021));const v=(0,g.lazy)((()=>r.e(353).then(r.t.bind(r,6734,23)))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,k=void 0!==r.g&&r.g.window&&r.g.window.document,_=Object.keys(P.propTypes),j=O||k?f.Suspense:()=>null,T=[],S=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),y(this,"state",{showPreview:!!this.props.light}),y(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),y(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),y(this,"showPreview",(()=>{this.setState({showPreview:!0})})),y(this,"getDuration",(()=>this.player?this.player.getDuration():null)),y(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),y(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),y(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),y(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),y(this,"handleReady",(()=>{this.props.onReady(this)})),y(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...T,...e])if(t.canPlay(r))return t;return t||null}))),y(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])}))),y(this,"getAttributes",(0,m.default)((e=>(0,g.omit)(this.props,_)))),y(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:a,previewAriaLabel:o}=this.props;return f.default.createElement(v,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:o,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:a,wrapper:o}=this.props,{showPreview:i}=this.state,s=this.getAttributes(e),l="string"==typeof o?this.references.wrapper:void 0;return f.default.createElement(o,{ref:l,style:{...t,width:r,height:n},...s},f.default.createElement(j,{fallback:a},i?this.renderPreview(e):this.renderActivePlayer(e)))}},y(r,"displayName","ReactPlayer"),y(r,"propTypes",P.propTypes),y(r,"defaultProps",P.defaultProps),y(r,"addCustomPlayer",(e=>{T.push(e)})),y(r,"removeCustomPlayers",(()=>{T.length=0})),y(r,"canPlay",(t=>{for(const r of[...T,...e])if(r.canPlay(t))return!0;return!1})),y(r,"canEnablePIP",(t=>{for(const r of[...T,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},3554:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>h}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?a(l(e)):{},c(e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(7015)),d=r(5580);const f=y.default[y.default.length-1];var h=(0,d.createReactPlayer)(y.default,f)},327:(e,t,r)=>{var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,l={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(l,{AUDIO_EXTENSIONS:()=>_,DASH_EXTENSIONS:()=>S,FLV_EXTENSIONS:()=>E,HLS_EXTENSIONS:()=>T,MATCH_URL_DAILYMOTION:()=>w,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>h,MATCH_URL_KALTURA:()=>k,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>y,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>j,canPlay:()=>C}),e.exports=(n=l,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of i(t))s.call(e,r)||undefined===r||a(e,r,{get:()=>t[r],enumerable:!(n=o(t,r))||n.enumerable});return e})(a({},"__esModule",{value:!0}),n));var u=r(5635);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,y=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,h=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,w=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,k=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,_=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,j=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,T=/\.(m3u8)($|\?)/i,S=/\.(mpd)($|\?)/i,E=/\.(flv)($|\?)/i,A=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&A(t))return!0;if(A(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||_.test(e)||j.test(e)||T.test(e)||S.test(e)||E.test(e)},C={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!_.test(e),vimeo:e=>y.test(e)&&!j.test(e)&&!T.test(e),mux:e=>d.test(e),facebook:e=>f.test(e)||h.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>w.test(e),mixcloud:e=>v.test(e),vidyard:e=>O.test(e),kaltura:e=>k.test(e),file:A}},7015:(e,t,r)=>{Object.create;var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),l={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(l,{default:()=>p}),e.exports=(n=l,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||a(e,l,{get:()=>t[l],enumerable:!(n=o(t,l))||n.enumerable});return e})(a({},"__esModule",{value:!0}),n));var u=r(5635),c=r(327),p=[{key:"youtube",name:"YouTube",canPlay:c.canPlay.youtube,lazyPlayer:(0,u.lazy)((()=>r.e(446).then(r.t.bind(r,2910,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:c.canPlay.soundcloud,lazyPlayer:(0,u.lazy)((()=>r.e(979).then(r.t.bind(r,3127,23))))},{key:"vimeo",name:"Vimeo",canPlay:c.canPlay.vimeo,lazyPlayer:(0,u.lazy)((()=>r.e(173).then(r.t.bind(r,1423,23))))},{key:"mux",name:"Mux",canPlay:c.canPlay.mux,lazyPlayer:(0,u.lazy)((()=>r.e(723).then(r.t.bind(r,7553,23))))},{key:"facebook",name:"Facebook",canPlay:c.canPlay.facebook,lazyPlayer:(0,u.lazy)((()=>r.e(887).then(r.t.bind(r,1343,23))))},{key:"streamable",name:"Streamable",canPlay:c.canPlay.streamable,lazyPlayer:(0,u.lazy)((()=>r.e(627).then(r.t.bind(r,9643,23))))},{key:"wistia",name:"Wistia",canPlay:c.canPlay.wistia,lazyPlayer:(0,u.lazy)((()=>r.e(340).then(r.t.bind(r,3330,23))))},{key:"twitch",name:"Twitch",canPlay:c.canPlay.twitch,lazyPlayer:(0,u.lazy)((()=>r.e(42).then(r.t.bind(r,1400,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:c.canPlay.dailymotion,lazyPlayer:(0,u.lazy)((()=>r.e(328).then(r.t.bind(r,9348,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:c.canPlay.mixcloud,lazyPlayer:(0,u.lazy)((()=>r.e(570).then(r.t.bind(r,3276,23))))},{key:"vidyard",name:"Vidyard",canPlay:c.canPlay.vidyard,lazyPlayer:(0,u.lazy)((()=>r.e(392).then(r.t.bind(r,3552,23))))},{key:"kaltura",name:"Kaltura",canPlay:c.canPlay.kaltura,lazyPlayer:(0,u.lazy)((()=>r.e(463).then(r.t.bind(r,7945,23))))},{key:"file",name:"FilePlayer",canPlay:c.canPlay.file,canEnablePIP:e=>c.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,u.supportsWebKitPresentationMode)())&&!c.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,u.lazy)((()=>r.e(458).then(r.t.bind(r,688,23))))}]},7604:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{defaultProps:()=>_,propTypes:()=>O}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?a(l(e)):{},c(e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(5556));const{string:d,bool:f,number:h,array:m,oneOfType:b,shape:P,object:g,func:w,node:v}=y.default,O={url:b([d,m,g]),playing:f,loop:f,controls:f,volume:h,muted:f,playbackRate:h,width:b([d,h]),height:b([d,h]),style:g,progressInterval:h,playsinline:f,pip:f,stopOnUnmount:f,light:b([f,d,g]),playIcon:v,previewTabIndex:h,previewAriaLabel:d,fallback:v,oEmbedUrl:d,wrapper:b([d,w,P({render:w.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:w}),facebook:P({appId:d,version:d,playerId:d,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:d}),mux:P({attributes:g,version:d}),file:P({attributes:g,tracks:m,forceVideo:f,forceAudio:f,forceHLS:f,forceSafariHLS:f,forceDisableHls:f,forceDASH:f,forceFLV:f,hlsOptions:g,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:P({options:g,playerId:d,customControls:m}),mixcloud:P({options:g}),twitch:P({options:g,playerId:d}),vidyard:P({options:g})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},k=()=>{},_={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},5635:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{callPlayer:()=>I,getConfig:()=>A,getSDK:()=>E,isBlobUrl:()=>M,isMediaStream:()=>R,lazy:()=>m,omit:()=>C,parseEndTime:()=>k,parseStartTime:()=>O,queryString:()=>j,randomString:()=>_,supportsWebKitPresentationMode:()=>x}),e.exports=(n=y,c(o({},"__esModule",{value:!0}),n));var d=p(r(6540)),f=p(r(6147)),h=p(r(4744));const m=e=>d.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),b=/[?&#](?:start|t)=([0-9hms]+)/,P=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,w=/^\d+$/;function v(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,a]=r;"h"===a&&(t+=60*parseInt(n,10)*60),"m"===a&&(t+=60*parseInt(n,10)),"s"===a&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(w.test(e))return parseInt(e)}}function O(e){return v(e,b)}function k(e){return v(e,P)}function _(){return Math.random().toString(36).substr(2,5)}function j(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function T(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const S={},E=function(e,t,r=null,n=()=>!0,a=f.default){const o=T(t);return o&&n(o)?Promise.resolve(o):new Promise(((n,o)=>{if(S[e])return void S[e].push({resolve:n,reject:o});S[e]=[{resolve:n,reject:o}];const i=t=>{S[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(T(t))}}a(e,(n=>{n?(S[e].forEach((e=>e.reject(n))),S[e]=null):r||i(T(t))}))}))};function A(e,t){return(0,h.default)(t.config,e.config)}function C(e,...t){const r=[].concat(...t),n={},a=Object.keys(e);for(const t of a)-1===r.indexOf(t)&&(n[t]=e[t]);return n}function I(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function R(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function M(e){return/^blob:/.test(e)}function x(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}}}]);
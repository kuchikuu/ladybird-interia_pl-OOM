(window.webpackJsonp=window.webpackJsonp||[]).push([["videoplayers"],{MybI:function(e,a,n){function t(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,r=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done)&&(n.push(l.value),!a||n.length!==a);t=!0);}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}return n}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return r(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=e[n];return t}n("QWBl"),n("FZtP"),n("R5XZ"),n("T63A"),n("4l63"),n("J30X"),n("pNMO"),n("4Brf"),n("07d7"),n("0oug"),n("PKPk"),n("4mDm"),n("3bBZ"),n("+2oP"),n("sMBO"),n("pjDv"),function(){if(window.Inpl=window.Inpl||{},"1"===window.Inpl.playerDisabled){var e=document.createElement("style");return e.innerHTML=".video-container {background: none;}",void document.body.appendChild(e)}window.Inpl.Video=window.Inpl.Video||{};var a=window.Inpl.Video;window.SGVideo=window.SGVideo||{};var n=window.SGVideo;a.autoplayDisabled=!1;var r={ytplayer:[],fbplayer:[],iplaliveplayer:[],iplaplayer:[],interialivedashplayer:[],interialivehlsplayer:[],interiaplayer:[]},i={},l={},o=null,y=1;function p(e){var n=e.dataset;if("iplaliveplayer"===n.playerType&&(n.live="1"),n.priority=y++,o||"1"!==n.autoplay||(o=e),r&&r[e.dataset.playerType]){r[e.dataset.playerType].push({element:e}),e.parentElement.addEventListener("click",(function(e){e.preventDefault()})),e.parentElement.addEventListener("click",(function(){"iplaplayer"!==e.dataset.playerType&&"iplaliveplayer"!==e.dataset.playerType||function(e){a.autoplayDisabled=!0,a.currentPlayingContainer&&a.currentPlayingContainer.player&&a.currentPlayingContainer!==e&&"function"==typeof a.currentPlayingContainer.player.pause&&(a.currentPlayingContainer.player.isPlaying=!1,a.currentPlayingContainer.player.pause());a.currentPlayingContainer=e,e.player&&e.player.ready?(e.player.play(),e.player.isIntentional=!0):e.addEventListener("playerReady",(function(){e.player.play(),e.player.isIntentional=!0}))}(e)})),e.addEventListener("play",(function(){window.localStorage.setItem("stop_autorefresh","true"),e.player&&(e.player.isIntentional||"1"!==e.dataset.wasAutoPlayed)&&(a.currentPlayingContainer&&a.currentPlayingContainer.player&&a.currentPlayingContainer!==e&&"function"==typeof a.currentPlayingContainer.player.pause&&(a.currentPlayingContainer.player.isPlaying=!1,a.currentPlayingContainer.player.pause()),a.currentPlayingContainer=e,a.autoplayDisabled=!0)})),e.addEventListener("playerSuspended",(function(){window.localStorage.setItem("stop_autorefresh","false")}));new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){if("1"===e.dataset.disableVideoAutoembed)return;e.dataset.loaded||(e.dataset.loaded="1",u(e)),"1"===n.autoplay&&(l[e.id]=e,setTimeout((function(){a.currentPlayingContainer||a.autoplayDisabled||(a.currentPlayingContainer=s(l),function e(n){if(!n)return;a.isAnyInstancePlaying||a.autoplayDisabled||(a.isAnyInstancePlaying=!0,n.dataset.hasBeenPlayed="1",n.dataset.wasAutoPlayed="1",n.dataset.isPlaying="1");a.autoplayDisabled||(n.player&&n.player.ready?n.player.play():n.addEventListener("playerReady",(function(){(n.player.play(),n.player&&(n.player.instance&&n.player.instance.isPaused||n.player.instance.instance&&n.player.instance.instance.isPaused))&&((n.player.instance.isPaused?n.player.instance:n.player.instance.instance).isPaused()&&setTimeout((function(){n.player.play()}),1))})));n.addEventListener("playerSuspended",(function(){a.currentPlayingContainer&&a.currentPlayingContainer.player&&"function"==typeof a.currentPlayingContainer.player.pause&&a.currentPlayingContainer.player.isPlaying&&(a.currentPlayingContainer.player.isPlaying=!1,a.currentPlayingContainer.player.pause()),a.currentPlayingContainer=null,setTimeout((function(){a.currentPlayingContainer||(a.currentPlayingContainer=s(l),e(a.currentPlayingContainer))}),0)}))}(a.currentPlayingContainer))}),0))}}))})).observe(e)}}function u(e){var a=e.dataset.playerType;if(!i[a])if("ytplayer"===a)window.ytplayer(r[a]);else if("fbplayer"===a)window.fbplayer(r[a]);else if("iplaplayer"===a||"iplaliveplayer"===a)window.iplaplayer(r[a]);else if("interiaplayer"===a){var t=document.createElement("script");t.src="https://js.iplsc.com/inpl.videoplayer/latest/inpl.videoplayer.js",document.body.appendChild(t),t.onload=function(){window.playerInterfaceReady=!0,window.dispatchEvent(new Event("playerInterfaceReady"))}}"interiaplayer"===a?window.playerInterfaceReady?(window.interiaplayer(e,{autoplay:"1"===e.dataset.autoplay?n.firstAutoplay:0}),"1"===e.dataset.autoplay&&(n.firstAutoplay=!1)):window.addEventListener("playerInterfaceReady",(function(){window.interiaplayer(e,{autoplay:"1"===e.dataset.autoplay?n.firstAutoplay:0}),"1"===e.dataset.autoplay&&(n.firstAutoplay=!1)})):"1"===e.dataset.autoplay&&(n.firstAutoplay=!1),i[a]=!0}function s(e){for(var a=0,n=null,r=0,i=Object.entries(e);r<i.length;r++){var l=t(i[r],2),o=(l[0],l[1]),y=parseInt(o.dataset.priority);"1"!==o.dataset.hasBeenPlayed&&(!a||a>y)&&(a=y,n=o)}return n}n.firstAutoplay=!0,window.pageIsPersonalized?(!0,document.querySelectorAll(".has-videoplayer").forEach((function(e,a){p(e)}))):window.addEventListener("message",(function(e){"pageIsPersonalized"===e.data&&(!0,document.querySelectorAll(".has-videoplayer").forEach((function(e,a){p(e)})))})),a.importPlayerLibrary=u}()}},[["MybI","runtime","vendors"]]]);
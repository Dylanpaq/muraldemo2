!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e){t.exports={canPlayThroughPromise:function(t,e){return new Promise((function(i,n){function s(){t.removeEventListener("canplaythrough",s),t.removeEventListener("loadeddata",o),i()}function o(){t.readyState>3&&(t.removeEventListener("canplaythrough",s),t.removeEventListener("loadeddata",o),i())}t.addEventListener("canplaythrough",s),t.addEventListener("loadeddata",o),t.onerror=function(e){t.onerror=null,i()},e.forEach((n,s)=>{const o=document.createElement("source");o.type=n.type,o.src=n.src,t.appendChild(o),s===e.length-1&&o.addEventListener("error",(function(t){i()}))}),e.length||i()}))},fadeout:function(t,e){return new Promise((function(i,n){$(t).animate({volume:0},{duration:20,always:function(){(e.paused||!e.active&&!e.paused)&&t.pause(),i()}})}))},fadein:function(t){t.volume=0;const e=t.play();return e.then((function(){return new Promise((function(e,i){$(t).animate({volume:1},{duration:20,always:function(){e()}})}))})),e}}},function(t,e,i){i(12),i(16),i(18);const n=i(2),s=$("#bypass");const o=$("meta[name=bypass]").attr("content"),a=Number($("meta[name=rot]").attr("content"));s.find("button").on("click",(function(t){t.preventDefault();(function(t,e){for(var i="",n=0;n<t.length;n++){var s=t.charCodeAt(n);i+=s>=65&&s<=90?String.fromCharCode((s-65+e)%26+65):s>=97&&s<=122?String.fromCharCode((s-97+e)%26+97):t.charAt(n)}return i})(s.find("input")[0].value,a)===o&&n.loadExclusives()})),n.init().then(()=>{let t=document.getElementById("loading_overlay"),e=document.getElementById("play_start");e.style.display="block",e.addEventListener("click",()=>{n.scrollStory.MURAL_MEDIA.length&&n.scrollStory.MURAL_MEDIA[n.scrollStory.MURAL_MEDIA.length-1].load(),document.body.removeChild(t),document.body.classList.remove("frozen"),$("#paywall").addClass("exclusive"),t=null,e=null,n.load()})})},function(t,e,i){const n=i(3),s=i(5),o=i(7),a=i(8),r=i(9),l=i(10),d=i(11);$.fn.moveIt=function(){var t=$(window),e=[];$(this).each((function(){e.push(new c($(this)))})),window.addEventListener("scroll",(function(i){const n=t.scrollTop();e.forEach((function(t){t.update(n)}))}),{passive:!0})};const c=function(t){this.el=$(t),this.container=this.el.parent(".part"),this.speed=parseInt(this.el.attr("data-scroll-speed")),this.fpsInterval=1e3/60,this.top=null,this.inView=!1,this.rafID=null,this.then=null};let h;c.prototype.animate=function(t){const e=t,i=e-this.then;i>this.fpsInterval&&(this.then=e-i%this.fpsInterval,this.el.css("transform","translateY("+-this.top/this.speed+"px)")),this.rafID=requestAnimationFrame(this.animate.bind(this))},c.prototype.update=function(t){this.container.hasClass("inviewport")?(this.inView||(this.el.css("willChange","transform"),this.then=performance.now(),this.rafID=requestAnimationFrame(this.animate.bind(this))),this.top=t-this.container.offset().top,this.inView=!0):(this.inView&&(cancelAnimationFrame(this.rafID),this.el.css("willChange","auto")),this.inView=!1)},n.prototype.onkeydown=function(t){if(this.options.storyItem.active)switch(t.which||t.keyCode){case 38:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.prev());break;case 40:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.next());break;default:this.options.toggleControlsOnEnter&&(this.preventDefault(t),this.toggleControls())}};const u=[],p=[];let f,m,g,v=!0;const y=$("#scrollytelling");h=y.scrollStory({contentSelector:".part",triggerOffset:0,index:0}).data("plugin_scrollStory"),f>=1024?(m="src",g="src"):f>=600?(m="srcMedium",g="src-medium"):(m="srcPhone",g="src-phone");let w=h.getItems(),C=w.filter(t=>"paywallInfo"===t.id)[0];function x(t){t.data.video&&(s.fixBackgroundVideo(t.el),s.playBackgroundVideo(h,t)),t.data.youtubeId&&(r.play(t,v),r.stick(t)),t.data.vimeoVideoId&&(l.play(t,v),l.stick(t)),t.data.dailymotionId&&(d.play(t,v),d.stick(t)),t.data.audio&&a.playBackgroundAudio(h,t)}function b(t,e){x(e)}function E(t,e){!function(t){t.data&&t.data.youtubeId&&r.remove(t),t.data&&t.data.vimeoVideoId&&l.remove(t),t.data&&t.data.dailymotionId&&d.remove(t),t.data&&t.data.video&&s.removeBackgroundVideo(h,t),t.data&&t.data.audio&&a.removeBackgroundAudio(h,t.index)}(e)}function P(t,e){!function(t){const e=h.getItems();I(t),t.index+1<e.length&&I(e[t.index+1]),t.index+2<e.length&&I(e[t.index+2])}(e)}function S(){h.filter(w[C.index]),$("section").removeClass("exclusive"),h.updateOffsets()}function I(t){if(void 0!==p[t.index])return;p[t.index]={loaded:!0};const e=[];if(t.data.youtubeId){const i=r.prepare(h,t);e.push(i)}if(t.data.vimeoVideoId){const i=l.prepare(h,t);e.push(i)}if(t.data.dailymotionId){const i=d.prepare(h,t);e.push(i)}if(t.data.image){const i=o.insertBackgroundImage(t.el,t.data[m]).then(t=>{t&&h.updateOffsets()});e.push(i)}if(t.data.slideshow){const i=t.el.find(".slide-container a").get(),s=[];for(let t=0;t<i.length;t++){const e=i[t],n=$(e).data(m),a=o.imageLoadPromise(n);s.push(a)}const a=Promise.all(s).then(()=>{n(i,{container:t.el.find(".blueimp-gallery")[0],urlProperty:g,carousel:!0,startSlideshow:!1,thumbnailIndicators:!0,enableKeyboardNavigation:!0,toggleControlsOnEnter:!1,storyItem:t,onslide:function(t,e){[{selector:".slide-caption",attr:"title"},{selector:".credits",attr:"data-credits"}].forEach(({selector:e,attr:i})=>{const n=this.list[t].getAttribute(i),s=$(this.container).parent().find(e);s.empty(),n&&(s[0].innerHTML=n)})}})});e.push(a)}if(t.data.slides&&t.el.find(".bg-image").each((function(t){const i=$(this),n=i.data(m),s=o.imageLoadPromise(n).then(()=>{i.css("background-image",`url(${n})`)});e.push(s)})).stickybits(),t.data.parallax){const i=t.data[m],n=o.imageLoadPromise(i).then(()=>{t.el.find(".bg-image").css("background-image",`url(${i})`)});e.push(n)}if(t.data.video){const i=s.prepareVideo(h,t.el,t.index,[{type:"video/mp4",src:t.data.mp4},{type:"video/webm",src:t.data.webm},{type:"application/vnd.apple.mpegurl",src:t.data.hls}],s.getVideoAttrs(t));e.push(i)}if(t.data.audio){const i=a.prepareAudio(h,t.index,[{type:"audio/mp3",src:t.data.mp3},{type:"audio/ogg",src:t.data.ogg}],{loop:t.data.loop});e.push(i)}return Promise.all(e)}window.loadExclusives=S,t.exports={init:function(){f=$(window).width(),h.MURAL_AUDIO=[],h.MURAL_VIDEO=[],w.forEach((function(t){if(t.data.video){const e=document.createElement("video");e.muted=!!t.data.muted,e.loop=!!t.data.loop,e.dataset.id=t.index,h.MURAL_VIDEO[t.index]=e}if(t.data.audio){const e=document.createElement("audio");e.muted=t.data.muted,e.dataset.id=t.index,h.MURAL_AUDIO[t.index]=e}})),h.MURAL_MEDIA=h.MURAL_AUDIO.concat(h.MURAL_VIDEO).filter(t=>t),$("[data-scroll-speed]").moveIt(),$(".mute").on("click",(function(){const t=$(this);t.hasClass("muted")?(v=!0,t.removeClass("muted")):(v=!1,t.addClass("muted")),h.MURAL_MEDIA.forEach((function(t){t.muted=!v})),r.setMuted(!v),l.setMuted(!v),d.setMuted(!v)})),$(".sticks_wrapper").on("click",(function(){$("body").toggleClass("paneOpen")})),$("nav").on("click","li",(function(){const t=parseInt(this.dataset.index,10);C&&!C.filtered&&t>=C.index?h.index(C.index):h.index(t)}));const t=h.getActiveItem();if(h.getItemsInViewport().forEach((function(t){const e=I(t);e&&u.push(e)})),t&&t.index+1<w.length){const e=I(w[t.index+1]);e&&u.push(e)}if(t&&t.index+2<w.length){const e=I(w[t.index+2]);e&&u.push(e)}return Promise.all(u)},loadExclusives:S,load:function(){y.on("itemfocus",b),y.on("itementerviewport",P),y.on("itemblur",E),x(h.getActiveItem())},scrollStory:h}},function(t,e,i){var n,s,o;!function(a){"use strict";s=[i(4)],void 0===(o="function"==typeof(n=function(t){function e(t,i){return void 0===document.body.style.maxHeight?null:this&&this.options===e.prototype.options?void(t&&t.length?(this.list=t,this.num=t.length,this.initOptions(i),this.initialize()):this.console.log("blueimp Gallery: No or empty list provided as first argument.",t)):new e(t,i)}return t.extend(e.prototype,{options:{container:"#blueimp-gallery",slidesContainer:"div",titleElement:"h3",displayClass:"blueimp-gallery-display",controlsClass:"blueimp-gallery-controls",singleClass:"blueimp-gallery-single",leftEdgeClass:"blueimp-gallery-left",rightEdgeClass:"blueimp-gallery-right",playingClass:"blueimp-gallery-playing",svgasimgClass:"blueimp-gallery-svgasimg",smilClass:"blueimp-gallery-smil",slideClass:"slide",slideActiveClass:"slide-active",slidePrevClass:"slide-prev",slideNextClass:"slide-next",slideLoadingClass:"slide-loading",slideErrorClass:"slide-error",slideContentClass:"slide-content",toggleClass:"toggle",prevClass:"prev",nextClass:"next",closeClass:"close",playPauseClass:"play-pause",typeProperty:"type",titleProperty:"title",altTextProperty:"alt",urlProperty:"href",srcsetProperty:"srcset",sizesProperty:"sizes",sourcesProperty:"sources",displayTransition:!0,clearSlides:!0,toggleControlsOnEnter:!0,toggleControlsOnSlideClick:!0,toggleSlideshowOnSpace:!0,enableKeyboardNavigation:!0,closeOnEscape:!0,closeOnSlideClick:!0,closeOnSwipeUpOrDown:!0,closeOnHashChange:!0,emulateTouchEvents:!0,stopTouchEventsPropagation:!1,hidePageScrollbars:!0,disableScroll:!0,carousel:!1,continuous:!0,unloadElements:!0,startSlideshow:!1,slideshowInterval:5e3,slideshowDirection:"ltr",index:0,preloadRange:2,transitionDuration:300,slideshowTransitionDuration:500,event:void 0,onopen:void 0,onopened:void 0,onslide:void 0,onslideend:void 0,onslidecomplete:void 0,onclose:void 0,onclosed:void 0},carouselOptions:{hidePageScrollbars:!1,toggleControlsOnEnter:!1,toggleSlideshowOnSpace:!1,enableKeyboardNavigation:!1,closeOnEscape:!1,closeOnSlideClick:!1,closeOnSwipeUpOrDown:!1,closeOnHashChange:!1,disableScroll:!1,startSlideshow:!0},console:window.console&&"function"==typeof window.console.log?window.console:{log:function(){}},support:function(e){var i,n={source:!!window.HTMLSourceElement,picture:!!window.HTMLPictureElement,svgasimg:document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),smil:!!document.createElementNS&&/SVGAnimate/.test(document.createElementNS("http://www.w3.org/2000/svg","animate").toString()),touch:void 0!==window.ontouchstart||window.DocumentTouch&&document instanceof DocumentTouch},s={webkitTransition:{end:"webkitTransitionEnd",prefix:"-webkit-"},MozTransition:{end:"transitionend",prefix:"-moz-"},OTransition:{end:"otransitionend",prefix:"-o-"},transition:{end:"transitionend",prefix:""}};for(i in s)if(Object.prototype.hasOwnProperty.call(s,i)&&void 0!==e.style[i]){n.transition=s[i],n.transition.name=i;break}function o(){var t,i,s=n.transition;document.body.appendChild(e),s&&(t=s.name.slice(0,-9)+"ransform",void 0!==e.style[t]&&(e.style[t]="translateZ(0)",i=window.getComputedStyle(e).getPropertyValue(s.prefix+"transform"),n.transform={prefix:s.prefix,name:t,translate:!0,translateZ:!!i&&"none"!==i})),document.body.removeChild(e)}return document.body?o():t(document).on("DOMContentLoaded",o),n}(document.createElement("div")),requestAnimationFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,cancelAnimationFrame:window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame,initialize:function(){if(this.initStartIndex(),!1===this.initWidget())return!1;this.initEventListeners(),this.onslide(this.index),this.ontransitionend(),this.options.startSlideshow&&this.play()},slide:function(t,e){window.clearTimeout(this.timeout);var i,n,s,o=this.index;if(o!==t&&1!==this.num){if(e||(e=this.options.transitionDuration),this.support.transform){for(this.options.continuous||(t=this.circle(t)),i=Math.abs(o-t)/(o-t),this.options.continuous&&(n=i,(i=-this.positions[this.circle(t)]/this.slideWidth)!==n&&(t=-i*this.num+t)),s=Math.abs(o-t)-1;s;)s-=1,this.move(this.circle((t>o?t:o)-s-1),this.slideWidth*i,0);t=this.circle(t),this.move(o,this.slideWidth*i,e),this.move(t,0,e),this.options.continuous&&this.move(this.circle(t-i),-this.slideWidth*i,0)}else t=this.circle(t),this.animate(o*-this.slideWidth,t*-this.slideWidth,e);this.onslide(t)}},getIndex:function(){return this.index},getNumber:function(){return this.num},prev:function(){(this.options.continuous||this.index)&&this.slide(this.index-1)},next:function(){(this.options.continuous||this.index<this.num-1)&&this.slide(this.index+1)},play:function(t){var e=this,i=this.index+("rtl"===this.options.slideshowDirection?-1:1);window.clearTimeout(this.timeout),this.interval=t||this.options.slideshowInterval,this.elements[this.index]>1&&(this.timeout=this.setTimeout(!this.requestAnimationFrame&&this.slide||function(t,i){e.animationFrameId=e.requestAnimationFrame.call(window,(function(){e.slide(t,i)}))},[i,this.options.slideshowTransitionDuration],this.interval)),this.container.addClass(this.options.playingClass),this.slidesContainer[0].setAttribute("aria-live","off"),this.playPauseElement.length&&this.playPauseElement[0].setAttribute("aria-pressed","true")},pause:function(){window.clearTimeout(this.timeout),this.interval=null,this.cancelAnimationFrame&&(this.cancelAnimationFrame.call(window,this.animationFrameId),this.animationFrameId=null),this.container.removeClass(this.options.playingClass),this.slidesContainer[0].setAttribute("aria-live","polite"),this.playPauseElement.length&&this.playPauseElement[0].setAttribute("aria-pressed","false")},add:function(t){var e;for(t.concat||(t=Array.prototype.slice.call(t)),this.list.concat||(this.list=Array.prototype.slice.call(this.list)),this.list=this.list.concat(t),this.num=this.list.length,this.num>2&&null===this.options.continuous&&(this.options.continuous=!0,this.container.removeClass(this.options.leftEdgeClass)),this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass),e=this.num-t.length;e<this.num;e+=1)this.addSlide(e),this.positionSlide(e);this.positions.length=this.num,this.initSlides(!0)},resetSlides:function(){this.slidesContainer.empty(),this.unloadAllSlides(),this.slides=[]},handleClose:function(){var t=this.options;this.destroyEventListeners(),this.pause(),this.container[0].style.display="none",this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass),t.hidePageScrollbars&&(document.body.style.overflow=this.bodyOverflowStyle),this.options.clearSlides&&this.resetSlides(),this.options.onclosed&&this.options.onclosed.call(this)},close:function(){var t=this;this.options.onclose&&this.options.onclose.call(this),this.support.transition&&this.options.displayTransition?(this.container.on(this.support.transition.end,(function e(i){i.target===t.container[0]&&(t.container.off(t.support.transition.end,e),t.handleClose())})),this.container.removeClass(this.options.displayClass)):this.handleClose()},circle:function(t){return(this.num+t%this.num)%this.num},move:function(t,e,i){this.translateX(t,e,i),this.positions[t]=e},translate:function(t,e,i,n){if(this.slides[t]){var s=this.slides[t].style,o=this.support.transition,a=this.support.transform;s[o.name+"Duration"]=n+"ms",s[a.name]="translate("+e+"px, "+i+"px)"+(a.translateZ?" translateZ(0)":"")}},translateX:function(t,e,i){this.translate(t,e,0,i)},translateY:function(t,e,i){this.translate(t,0,e,i)},animate:function(t,e,i){if(i)var n=this,s=(new Date).getTime(),o=window.setInterval((function(){var a=(new Date).getTime()-s;if(a>i)return n.slidesContainer[0].style.left=e+"px",n.ontransitionend(),void window.clearInterval(o);n.slidesContainer[0].style.left=(e-t)*(Math.floor(a/i*100)/100)+t+"px"}),4);else this.slidesContainer[0].style.left=e+"px"},preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},onresize:function(){this.initSlides(!0)},onhashchange:function(){this.options.closeOnHashChange&&this.close()},onmousedown:function(t){t.which&&1===t.which&&"VIDEO"!==t.target.nodeName&&"AUDIO"!==t.target.nodeName&&(t.preventDefault(),(t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchstart(t))},onmousemove:function(t){this.touchStart&&((t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchmove(t))},onmouseup:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},onmouseout:function(e){if(this.touchStart){var i=e.target,n=e.relatedTarget;n&&(n===i||t.contains(i,n))||this.onmouseup(e)}},ontouchstart:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e=(t.originalEvent||t).touches[0];this.touchStart={x:e.pageX,y:e.pageY,time:Date.now()},this.isScrolling=void 0,this.touchDelta={}},ontouchmove:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e,i,n=(t.originalEvent||t).touches,s=n[0],o=(t.originalEvent||t).scale,a=this.index;if(!(n.length>1||o&&1!==o))if(this.options.disableScroll&&t.preventDefault(),this.touchDelta={x:s.pageX-this.touchStart.x,y:s.pageY-this.touchStart.y},e=this.touchDelta.x,void 0===this.isScrolling&&(this.isScrolling=this.isScrolling||Math.abs(e)<Math.abs(this.touchDelta.y)),this.isScrolling)this.options.carousel||this.translateY(a,this.touchDelta.y+this.positions[a],0);else for(t.preventDefault(),window.clearTimeout(this.timeout),this.options.continuous?i=[this.circle(a+1),a,this.circle(a-1)]:(this.touchDelta.x=e/=!a&&e>0||a===this.num-1&&e<0?Math.abs(e)/this.slideWidth+1:1,i=[a],a&&i.push(a-1),a<this.num-1&&i.unshift(a+1));i.length;)a=i.pop(),this.translateX(a,e+this.positions[a],0)},ontouchend:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e,i,n,s,o,a=this.index,r=Math.abs(this.touchDelta.x),l=this.slideWidth,d=Math.ceil(this.options.transitionDuration*(1-r/l)/2),c=r>20,h=!a&&this.touchDelta.x>0||a===this.num-1&&this.touchDelta.x<0,u=!c&&this.options.closeOnSwipeUpOrDown&&Math.abs(this.touchDelta.y)>20;this.options.continuous&&(h=!1),e=this.touchDelta.x<0?-1:1,this.isScrolling?u?this.close():this.translateY(a,0,d):c&&!h?(i=a+e,n=a-e,s=l*e,o=-l*e,this.options.continuous?(this.move(this.circle(i),s,0),this.move(this.circle(a-2*e),o,0)):i>=0&&i<this.num&&this.move(i,s,0),this.move(a,this.positions[a]+s,d),this.move(this.circle(n),this.positions[this.circle(n)]+s,d),a=this.circle(n),this.onslide(a)):this.options.continuous?(this.move(this.circle(a-1),-l,d),this.move(a,0,d),this.move(this.circle(a+1),l,d)):(a&&this.move(a-1,-l,d),this.move(a,0,d),a<this.num-1&&this.move(a+1,l,d))},ontouchcancel:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},ontransitionend:function(t){var e=this.slides[this.index];t&&e!==t.target||(this.interval&&this.play(),this.setTimeout(this.options.onslideend,[this.index,e]))},oncomplete:function(e){var i,n=e.target||e.srcElement,s=n&&n.parentNode;n&&s&&(i=this.getNodeIndex(s),t(s).removeClass(this.options.slideLoadingClass),"error"===e.type?(t(s).addClass(this.options.slideErrorClass),this.elements[i]=3):this.elements[i]=2,n.clientHeight>this.container[0].clientHeight&&(n.style.maxHeight=this.container[0].clientHeight),this.interval&&this.slides[this.index]===s&&this.play(),this.setTimeout(this.options.onslidecomplete,[i,s]))},onload:function(t){this.oncomplete(t)},onerror:function(t){this.oncomplete(t)},onkeydown:function(t){switch(t.which||t.keyCode){case 13:this.options.toggleControlsOnEnter&&(this.preventDefault(t),this.toggleControls());break;case 27:this.options.closeOnEscape&&(this.close(),t.stopImmediatePropagation());break;case 32:this.options.toggleSlideshowOnSpace&&(this.preventDefault(t),this.toggleSlideshow());break;case 37:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.prev());break;case 39:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.next())}},handleClick:function(e){var i=this.options,n=e.target||e.srcElement,s=n.parentNode;function o(e){return t(n).hasClass(e)||t(s).hasClass(e)}o(i.toggleClass)?(this.preventDefault(e),this.toggleControls()):o(i.prevClass)?(this.preventDefault(e),this.prev()):o(i.nextClass)?(this.preventDefault(e),this.next()):o(i.closeClass)?(this.preventDefault(e),this.close()):o(i.playPauseClass)?(this.preventDefault(e),this.toggleSlideshow()):s===this.slidesContainer[0]?i.closeOnSlideClick?(this.preventDefault(e),this.close()):i.toggleControlsOnSlideClick&&(this.preventDefault(e),this.toggleControls()):s.parentNode&&s.parentNode===this.slidesContainer[0]&&i.toggleControlsOnSlideClick&&(this.preventDefault(e),this.toggleControls())},onclick:function(t){if(!(this.options.emulateTouchEvents&&this.touchDelta&&(Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.y)>20)))return this.handleClick(t);delete this.touchDelta},updateEdgeClasses:function(t){t?this.container.removeClass(this.options.leftEdgeClass):this.container.addClass(this.options.leftEdgeClass),t===this.num-1?this.container.addClass(this.options.rightEdgeClass):this.container.removeClass(this.options.rightEdgeClass)},updateActiveSlide:function(e,i){for(var n,s,o=this.slides,a=this.options,r=[{index:i,method:"addClass",hidden:!1},{index:e,method:"removeClass",hidden:!0}];r.length;)n=r.pop(),t(o[n.index])[n.method](a.slideActiveClass),s=this.circle(n.index-1),(a.continuous||s<n.index)&&t(o[s])[n.method](a.slidePrevClass),s=this.circle(n.index+1),(a.continuous||s>n.index)&&t(o[s])[n.method](a.slideNextClass);this.slides[e].setAttribute("aria-hidden","true"),this.slides[i].removeAttribute("aria-hidden")},handleSlide:function(t,e){this.options.continuous||this.updateEdgeClasses(e),this.updateActiveSlide(t,e),this.loadElements(e),this.options.unloadElements&&this.unloadElements(t,e),this.setTitle(e)},onslide:function(t){this.handleSlide(this.index,t),this.index=t,this.setTimeout(this.options.onslide,[t,this.slides[t]])},setTitle:function(t){var e=this.slides[t].firstChild,i=e.title||e.alt,n=this.titleElement;n.length&&(this.titleElement.empty(),i&&n[0].appendChild(document.createTextNode(i)))},setTimeout:function(t,e,i){var n=this;return t&&window.setTimeout((function(){t.apply(n,e||[])}),i||0)},imageFactory:function(e,i){var n,s,o,a,r,l,d,c,h=this.options,u=this,p=e,f=this.imagePrototype.cloneNode(!1);if("string"!=typeof p&&(p=this.getItemProperty(e,h.urlProperty),o=this.support.picture&&this.support.source&&this.getItemProperty(e,h.sourcesProperty),a=this.getItemProperty(e,h.srcsetProperty),r=this.getItemProperty(e,h.sizesProperty),l=this.getItemProperty(e,h.titleProperty),d=this.getItemProperty(e,h.altTextProperty)||l),f.draggable=!1,l&&(f.title=l),d&&(f.alt=d),t(f).on("load error",(function e(o){if(!s){if(!(o={type:o.type,target:n||f}).target.parentNode)return u.setTimeout(e,[o]);s=!0,t(f).off("load error",e),i(o)}})),o&&o.length){for(n=this.picturePrototype.cloneNode(!1),c=0;c<o.length;c+=1)n.appendChild(t.extend(this.sourcePrototype.cloneNode(!1),o[c]));n.appendChild(f),t(n).addClass(h.toggleClass)}return a&&(r&&(f.sizes=r),f.srcset=a),f.src=p,n||f},createElement:function(e,i){var n=e&&this.getItemProperty(e,this.options.typeProperty),s=n&&this[n.split("/")[0]+"Factory"]||this.imageFactory,o=e&&s.call(this,e,i);return o||(o=this.elementPrototype.cloneNode(!1),this.setTimeout(i,[{type:"error",target:o}])),t(o).addClass(this.options.slideContentClass),o},iteratePreloadRange:function(t,e){var i,n=this.num,s=this.options,o=Math.min(n,2*s.preloadRange+1),a=t;for(i=0;i<o;i+=1){if((a+=i*(i%2==0?-1:1))<0||a>=n){if(!s.continuous)continue;a=this.circle(a)}e.call(this,a)}},loadElement:function(e){this.elements[e]||(this.slides[e].firstChild?this.elements[e]=t(this.slides[e]).hasClass(this.options.slideErrorClass)?3:2:(this.elements[e]=1,t(this.slides[e]).addClass(this.options.slideLoadingClass),this.slides[e].appendChild(this.createElement(this.list[e],this.proxyListener))))},loadElements:function(t){this.iteratePreloadRange(t,this.loadElement)},unloadElements:function(t,e){var i=this.options.preloadRange;this.iteratePreloadRange(t,(function(t){var n=Math.abs(t-e);n>i&&n+i<this.num&&(this.unloadSlide(t),delete this.elements[t])}))},addSlide:function(t){var e=this.slidePrototype.cloneNode(!1);e.setAttribute("data-index",t),e.setAttribute("aria-hidden","true"),this.slidesContainer[0].appendChild(e),this.slides.push(e)},positionSlide:function(t){var e=this.slides[t];e.style.width=this.slideWidth+"px",this.support.transform&&(e.style.left=t*-this.slideWidth+"px",this.move(t,this.index>t?-this.slideWidth:this.index<t?this.slideWidth:0,0))},initSlides:function(e){var i,n;for(e||(this.positions=[],this.positions.length=this.num,this.elements={},this.picturePrototype=this.support.picture&&document.createElement("picture"),this.sourcePrototype=this.support.source&&document.createElement("source"),this.imagePrototype=document.createElement("img"),this.elementPrototype=document.createElement("div"),this.slidePrototype=this.elementPrototype.cloneNode(!1),t(this.slidePrototype).addClass(this.options.slideClass),this.slides=this.slidesContainer[0].children,i=this.options.clearSlides||this.slides.length!==this.num),this.slideWidth=this.container[0].clientWidth,this.slideHeight=this.container[0].clientHeight,this.slidesContainer[0].style.width=this.num*this.slideWidth+"px",i&&this.resetSlides(),n=0;n<this.num;n+=1)i&&this.addSlide(n),this.positionSlide(n);this.options.continuous&&this.support.transform&&(this.move(this.circle(this.index-1),-this.slideWidth,0),this.move(this.circle(this.index+1),this.slideWidth,0)),this.support.transform||(this.slidesContainer[0].style.left=this.index*-this.slideWidth+"px")},unloadSlide:function(t){var e,i;null!==(i=(e=this.slides[t]).firstChild)&&e.removeChild(i)},unloadAllSlides:function(){var t,e;for(t=0,e=this.slides.length;t<e;t++)this.unloadSlide(t)},toggleControls:function(){var t=this.options.controlsClass;this.container.hasClass(t)?this.container.removeClass(t):this.container.addClass(t)},toggleSlideshow:function(){this.interval?this.pause():this.play()},getNodeIndex:function(t){return parseInt(t.getAttribute("data-index"),10)},getNestedProperty:function(t,e){return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,(function(e,i,n,s,o){var a=o||i||n||s&&parseInt(s,10);e&&t&&(t=t[a])})),t},getDataProperty:function(e,i){var n,s;if(e.dataset?(n=i.replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()})),s=e.dataset[n]):e.getAttribute&&(s=e.getAttribute("data-"+i.replace(/([A-Z])/g,"-$1").toLowerCase())),"string"==typeof s){if(/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(s))try{return t.parseJSON(s)}catch(t){}return s}},getItemProperty:function(t,e){var i=this.getDataProperty(t,e);return void 0===i&&(i=t[e]),void 0===i&&(i=this.getNestedProperty(t,e)),i},initStartIndex:function(){var t,e=this.options.index,i=this.options.urlProperty;if(e&&"number"!=typeof e)for(t=0;t<this.num;t+=1)if(this.list[t]===e||this.getItemProperty(this.list[t],i)===this.getItemProperty(e,i)){e=t;break}this.index=this.circle(parseInt(e,10)||0)},initEventListeners:function(){var e=this,i=this.slidesContainer;function n(t){var i=e.support.transition&&e.support.transition.end===t.type?"transitionend":t.type;e["on"+i](t)}t(window).on("resize",n),t(window).on("hashchange",n),t(document.body).on("keydown",n),this.container.on("click",n),this.support.touch?i.on("touchstart touchmove touchend touchcancel",n):this.options.emulateTouchEvents&&this.support.transition&&i.on("mousedown mousemove mouseup mouseout",n),this.support.transition&&i.on(this.support.transition.end,n),this.proxyListener=n},destroyEventListeners:function(){var e=this.slidesContainer,i=this.proxyListener;t(window).off("resize",i),t(document.body).off("keydown",i),this.container.off("click",i),this.support.touch?e.off("touchstart touchmove touchend touchcancel",i):this.options.emulateTouchEvents&&this.support.transition&&e.off("mousedown mousemove mouseup mouseout",i),this.support.transition&&e.off(this.support.transition.end,i)},handleOpen:function(){this.options.onopened&&this.options.onopened.call(this)},initWidget:function(){var e=this;return this.container=t(this.options.container),this.container.length?(this.slidesContainer=this.container.find(this.options.slidesContainer).first(),this.slidesContainer.length?(this.titleElement=this.container.find(this.options.titleElement).first(),this.playPauseElement=this.container.find("."+this.options.playPauseClass).first(),1===this.num&&this.container.addClass(this.options.singleClass),this.support.svgasimg&&this.container.addClass(this.options.svgasimgClass),this.support.smil&&this.container.addClass(this.options.smilClass),this.options.onopen&&this.options.onopen.call(this),this.support.transition&&this.options.displayTransition?this.container.on(this.support.transition.end,(function t(i){i.target===e.container[0]&&(e.container.off(e.support.transition.end,t),e.handleOpen())})):this.handleOpen(),this.options.hidePageScrollbars&&(this.bodyOverflowStyle=document.body.style.overflow,document.body.style.overflow="hidden"),this.container[0].style.display="block",this.initSlides(),void this.container.addClass(this.options.displayClass)):(this.console.log("blueimp Gallery: Slides container not found.",this.options.slidesContainer),!1)):(this.console.log("blueimp Gallery: Widget container not found.",this.options.container),!1)},initOptions:function(e){this.options=t.extend({},this.options),(e&&e.carousel||this.options.carousel&&(!e||!1!==e.carousel))&&t.extend(this.options,this.carouselOptions),t.extend(this.options,e),this.num<3&&(this.options.continuous=!!this.options.continuous&&null),this.support.transition||(this.options.emulateTouchEvents=!1),this.options.event&&this.preventDefault(this.options.event)}}),e})?n.apply(e,s):n)||(t.exports=o)}()},function(t,e,i){var n;!function(){"use strict";function s(t,e){var i;for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}function o(t){if(!this||this.find!==o.prototype.find)return new o(t);if(this.length=0,t)if("string"==typeof t&&(t=this.find(t)),t.nodeType||t===t.window)this.length=1,this[0]=t;else{var e=t.length;for(this.length=e;e;)this[e-=1]=t[e]}}o.extend=s,o.contains=function(t,e){do{if((e=e.parentNode)===t)return!0}while(e);return!1},o.parseJSON=function(t){return JSON.parse(t)},s(o.prototype,{find:function(t){var e=this[0]||document;return"string"==typeof t&&(t=e.querySelectorAll?e.querySelectorAll(t):"#"===t.charAt(0)?e.getElementById(t.slice(1)):e.getElementsByTagName(t)),new o(t)},hasClass:function(t){return!!this[0]&&new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(this[0].className)},addClass:function(t){for(var e,i,n,s=this.length;s;)if((i=this[s-=1]).className)for(e||(e=t.split(/\s+/)),n=0;n<e.length;n+=1)this.hasClass(e[n])||(i.className+=" "+e[n]);else i.className=t;return this},removeClass:function(t){for(var e,i=new RegExp("^(?:"+t.split(/\s+/).join("|")+")$"),n=/(\S+)(?:\s+|$)/g,s=function(t,e){return i.test(e)?"":t},o=/\s+$/,a=this.length;a;)(e=this[a-=1]).className=e.className.replace(n,s).replace(o,"");return this},on:function(t,e){for(var i,n,s=t.split(/\s+/);s.length;)for(t=s.shift(),i=this.length;i;)(n=this[i-=1]).addEventListener?n.addEventListener(t,e,!1):n.attachEvent&&n.attachEvent("on"+t,e);return this},off:function(t,e){for(var i,n,s=t.split(/\s+/);s.length;)for(t=s.shift(),i=this.length;i;)(n=this[i-=1]).removeEventListener?n.removeEventListener(t,e,!1):n.detachEvent&&n.detachEvent("on"+t,e);return this},empty:function(){for(var t,e=this.length;e;)for(t=this[e-=1];t.hasChildNodes();)t.removeChild(t.lastChild);return this},first:function(){return new o(this[0])}}),void 0===(n=function(){return o}.call(e,i,e,t))||(t.exports=n)}()},function(t,e,i){const n=i(6),s=i(0),o={},a="application/vnd.apple.mpegurl";function r(t,e){$(e).finish(),!o[t].paused&&o[t].active||(o[t].playPromise=o[t].playPromise.then((function(){return s.fadeout(e,o[t])})))}function l(t,e){$(e).finish(),(!o[t].paused&&e.paused||!o[t].paused&&o[t].active&&e.paused)&&(o[t].playPromise=o[t].playPromise.then((function(){return s.fadein(e)})))}t.exports={playBackgroundVideo:function(t,e){const i=e.index,n=t.MURAL_VIDEO[i];o[i].active=!0,o[i].paused=!1,l(i,n),e.el.find(".play").hide(),e.el.find(".pause").show()},prepareVideo:function(t,e,i,d,c){let h,u=t.MURAL_VIDEO[i];c.poster&&(u.poster=c.poster),u.preload="auto",u.setAttribute("webkit-playsinline",""),u.setAttribute("playsinline","");const p=d.filter(t=>void 0!==t.src),f=p.filter(t=>t.type===a)[0],m=p.filter(t=>t.type!==a);return h=n&&f&&n.isSupported()?new Promise((function(t,e){const i=new n;i.loadSource(f.src),i.attachMedia(u),i.on(n.Events.MANIFEST_PARSED,(function(){t()}))})):n&&f&&u.canPlayType(a)?new Promise((function(t,e){u.src=f.src,u.addEventListener("loadedmetadata",(function(){t()}))})):s.canPlayThroughPromise(u,m),e.find(".video-container").append(u),e.find(".play").click((function(){o[i].paused=!1,l(i,u),$(this).hide(),e.find(".pause").show()})),e.find(".pause").click((function(){o[i].paused=!0,r(i,u),$(this).hide(),e.find(".play").show()})),c.autoAdvance&&u.addEventListener("ended",()=>{const e=t.getItems().length,n=i+1;n<e&&t.index(n),u.currentTime=0}),u.load(),o[i]={playPromise:h},h},removeBackgroundVideo:function(t,e){e.el.find(".video-container").css("position",""),function(t,e){const i=t.MURAL_VIDEO[e];o[e].active=!1,r(e,i)}(t,e.index),e.el.find(".pause").hide(),e.el.find(".play").show()},fixBackgroundVideo:function(t){t.find(".video-container").css("position","fixed")},getVideoAttrs:function(t){return{poster:t.data.poster,autoAdvance:t.data.autoAdvance}}}},function(t,e){t.exports=Hls},function(t,e){function i(t){return new Promise(e=>{const i=new Image;i.onload=()=>{e()},i.onerror=()=>{e()},i.src=t})}t.exports={insertBackgroundImage:function(t,e){return i(e).then(()=>{const i=t.find(".bg-image");if(i.length){const t={"background-image":`url(${e})`};return i.css(t),!1}return t.find("img").get(0).src=e,!0})},imageLoadPromise:i}},function(t,e,i){const n=i(0),s={};t.exports={playBackgroundAudio:function(t,e){const i=e.index,o=t.MURAL_AUDIO[i];s[i].active=!0,$(o).finish(),s[i].playPromise=s[i].playPromise.then((function(){return n.fadein(o)}))},prepareAudio:function(t,e,i,o){const a=t.MURAL_AUDIO[e];a.loop=!!o.loop,a.preload="auto";const r=i.filter(t=>void 0!==t.src),l=n.canPlayThroughPromise(a,r);return a.load(),s[e]={playPromise:l},l},removeBackgroundAudio:function(t,e){!function(t,e){const i=t.MURAL_AUDIO[e];s[e].active=!1,$(i).finish(),s[e].playPromise=s[e].playPromise.then((function(){return n.fadeout(i,s[e]).then((function(){i.loop||(i.currentTime=0)}))}))}(t,e)}}},function(t,e){const i={},n={};let s=!1;const o=new Promise((function(t,e){window.onYouTubePlayerAPIReady=function(){t()}}));function a(t){return"ytplayer_"+t.data.youtubeId}window.addEventListener("resize",(function(){Object.keys(i).forEach((function(t){i[t].setSize(window.innerWidth,window.innerHeight)}))})),t.exports={play:function(t,e){const s=t.index;n[s].active=!0;const o=a(t);n[s].playPromise=n[s].playPromise.then((function(){const t=i[o],a=n[s].active;e?t.unMute():t.mute(),a?t.playVideo():t.pauseVideo()}))},remove:function(t){const e=t.index;n[e].active=!1;const s=a(t);t.el.find(".video-container").css("position",""),n[e].playPromise=n[e].playPromise.then((function(){const t=i[s];n[e].active?t.playVideo():t.pauseVideo()}))},stick:function(t){t.el.find(".video-container").css("position","fixed")},prepare:function(t,e){!function(){if(!s){const t=document.createElement("script");t.async=!0,t.src="https://www.youtube.com/player_api";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),s=!0}}();const r=e.data.youtubeId,l=e.data.autoAdvance,d=e.index,c=a(e),h=e.data.controls?1:0,u=new Promise((function(e,n){o.then((function(){i[c]=new YT.Player(c,{width:window.innerWidth,height:window.innerHeight,videoId:r,playerVars:{controls:h,enablejsapi:1,playsinline:1,disablekb:1,rel:0,fs:0,modestbranding:1},events:{onReady:function(t){e()},onError:function(t){console.log("on error",t)},onStateChange:function(e){const i=e.data;if(l&&i===YT.PlayerState.ENDED){const e=t.getItems().length,i=d+1;i<e&&t.index(i)}}}})}))}));return n[d]={playPromise:u},u},setMuted:function(t){Object.keys(i).forEach((function(e){const n=i[e];t?n.mute():n.unMute()}))}}},function(t,e){const i={},n={};let s=!1;const o=new Promise((function(t,e){window.onVimeoReadyCallback=function(){t()}}));t.exports={play:function(t,e){const s=t.index;n[s].active=!0,n[s].playPromise=n[s].playPromise.then((function(){const t=i[s];return t.setVolume(e?1:0),t.getPaused().then((function(e){const i=n[s].active;return e&&i?t.play():e||i?void 0:t.pause()}))}))},remove:function(t){const e=t.index;n[e].active=!1,t.el.find(".video-container").css("position",""),n[e].playPromise=n[e].playPromise.then((function(){const t=i[e];return t.getPaused().then((function(i){const s=n[e].active;return i&&s?t.play():i||s?void 0:t.pause()}))}))},stick:function(t){t.el.find(".video-container").css("position","fixed")},prepare:function(t,e){!function(){if(!s){const t=document.createElement("script");t.async=!0,t.src="https://player.vimeo.com/api/player.js",t.onload=window.onVimeoReadyCallback;const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),s=!0}}();const a=e.index,r=new Promise((function(n,s){o.then((function(){const s=e.data.autoAdvance,o=new Vimeo.Player("vimeo_"+e.data.vimeoVideoId,{id:e.data.vimeoVideoId,responsive:!0,autoplay:!1,controls:!!e.data.controls});o.on("loaded",n),o.on("error",n),o.on("ended",(function(){if(s){const e=t.getItems().length,i=a+1;i<e&&t.index(i)}})),i[a]=o}))}));return n[a]={playPromise:r},r},setMuted:function(t){for(const e of Object.keys(i))i[e].setVolume(t?0:1)}}},function(t,e){const i={},n={};let s=!1;const o=new Promise((function(t,e){window.dmAsyncInit=function(){t()}}));t.exports={play:function(t,e){const s=t.index;n[s].active=!0,n[s].playPromise=n[s].playPromise.then((function(){const t=i[s],o=n[s].active;e?t.setMuted(!1):t.setMuted(!0),o?t.play():t.pause()}))},remove:function(t){const e=t.index;n[e].active=!1,t.el.find(".video-container").css("position",""),n[e].playPromise=n[e].playPromise.then((function(){const t=i[e];n[e].active?t.play():t.pause()}))},stick:function(t){t.el.find(".video-container").css("position","fixed")},prepare:function(t,e){!function(){if(!s){const t=document.createElement("script");t.async=!0,t.src="https://api.dmcdn.net/all.js";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),s=!0}}();const a=e.index,r=new Promise((function(n,s){o.then((function(){const s=e.data.autoAdvance,o=DM.player(document.getElementById("dm_"+e.data.dailymotionId),{video:e.data.dailymotionId,width:"100%",height:"100%",params:{controls:!!e.data.controls,autoplay:!1,mute:!1,loop:!0},events:{video_end:function(){if(s){const e=t.getItems().length,i=a+1;i<e&&(o.pause(),t.index(i))}}}});o.addEventListener("playback_ready",n),o.addEventListener("error",n),i[e.index]=o}))}));return n[a]={playPromise:r},r},setMuted:function(t){for(const e of Object.keys(i))i[e].setMuted(t)}}},function(t,e){},,,,function(t,e){},,function(t,e){}]);
"use strict";(globalThis.blocksyJsonP=globalThis.blocksyJsonP||[]).push([[167],{167:function(t,e,n){n.r(e),n.d(e,{mount:function(){return D}});var i=n(194),r=n.n(i);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const u=function(t,e){return"vertical"===e.options.orientation?t.top+t.height:t.right},d=function(t,e){return"vertical"===e.options.orientation?t.top:t.left},f=function(t,e){return"vertical"===e.options.orientation?t.height:t.width},c=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"container";const r=t.sliderContainer;let o=0;if("left"===n){let n=[...r.children].reduce((function(e,n){let i=d(p(e,t.options.nullifyTransformEl),t);return d(p(n,t.options.nullifyTransformEl),t)<i?n:e}),{getBoundingClientRect:function(){return{left:1e11,bottom:1e11,top:1e11,right:1e11}}});d(p(n,t.options.nullifyTransformEl),t)>("container"===i?d(p(r,t.options.nullifyTransformEl),t):0)&&(o=-1*f(p(r.firstElementChild,t.options.nullifyTransformEl),t),e=e===r.children.length?1:e+1)}if("right"===n){let n=[...r.children].reduce((function(e,n){return u(p(e,t.options.nullifyTransformEl),t)>u(p(n,t.options.nullifyTransformEl),t)?e:n}),{getBoundingClientRect:function(){return{left:-1,bottom:-9999999999999,top:-1,right:-1}}});u(p(n,t.options.nullifyTransformEl),t)<("container"===i?u(p(r,t.options.nullifyTransformEl),t):window.innerWidth)&&(o=f(p(r.firstElementChild,t.options.nullifyTransformEl),t),e=1===e?r.children.length:e-1)}return{relativeDelta:o,elementsOnBehind:e}};function p(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return null;if(t.getBoundingClientRect&&!t.firstElementChild)return t.getBoundingClientRect();e||(e=t);let{top:n,left:i,right:r,width:o,height:s}=t.getBoundingClientRect(),l=window.getComputedStyle(e).transform.split(/\(|,|\)/).slice(1,-1).map((function(t){return parseFloat(t)}));if(6!=l.length)return t.getBoundingClientRect();var a=l;let u=a[0]*a[3]-a[1]*a[2];return{width:o/a[0],height:s/a[3],left:(i*a[3]-n*a[2]+a[2]*a[5]-a[4]*a[3])/u,right:(r*a[3]-n*a[2]+a[2]*a[5]-a[4]*a[3])/u,top:(-i*a[1]+n*a[0]+a[4]*a[1]-a[0]*a[5])/u}}const h=function(t){if(t.options.pillsContainerSelector&&(t.options.pillsContainerSelector.querySelector(".active")&&t.options.pillsContainerSelector.querySelector(".active").classList.remove("active"),t.options.pillsContainerSelector.children[t.state.previousCurrentIndex].classList.add("active"),t.options.pillsFlexyInstance)){let e=t.options.pillsFlexyInstance.flexy,n=[...t.options.pillsContainerSelector.children],i=[...e.sliderContainer.children].indexOf([...e.sliderContainer.children].reduce((function(t,n){let i=d(p(t,e.options.nullifyTransformEl),e),r=d(p(n,e.options.nullifyTransformEl),e);return Math.abs(r-d(p(e.sliderContainer,e.options.nullifyTransformEl),e))<Math.abs(i-d(p(e.sliderContainer,e.options.nullifyTransformEl),e))?n:t}),{getBoundingClientRect:function(){return{left:1e11,top:1e11}}})),r=0;if("horizontal"===e.options.orientation){let i=Math.round(p(e.sliderContainer).width/p(e.sliderContainer.firstElementChild).width);r=t.state.previousCurrentIndex,5===i&&(t.state.previousCurrentIndex>2&&(r=t.state.previousCurrentIndex-2),n.length-1-t.state.previousCurrentIndex<3&&(r=n.length-5)),3===i&&(t.state.previousCurrentIndex>=1&&(r=t.state.previousCurrentIndex-1),n.length-1-t.state.previousCurrentIndex<1&&(r=n.length-3))}else r=t.state.previousCurrentIndex;let o=Math.abs(r-i),l=Math.min(i,r)+(n.length-Math.max(i,r)),a=Math.min(o,l)*(l>=o?i>r?1:-1:i>r?-1:1),u=100*Math.round(100*e.state.positionX/f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)/100)*f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)/100+f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)*a;e.state=s(s({},e.state),{},{positionTarget:u})}},m=function(t,e){let n=[...t.sliderContainer.children].indexOf([...t.sliderContainer.children].reduce((function(e,n){let i=d(p(e,t.options.nullifyTransformEl),t),r=d(p(n,t.options.nullifyTransformEl),t);return Math.abs(r-d(p(t.sliderContainer,t.options.nullifyTransformEl),t))<Math.abs(i-d(p(t.sliderContainer,t.options.nullifyTransformEl),t))?n:e}),{getBoundingClientRect:function(){return{left:1e11,top:1e11}}})),i=e(n);i<0&&(i=t.sliderContainer.children.length-1),i>t.sliderContainer.children.length-1&&(i=0);let r=Math.abs(i-n),o=Math.min(n,i)+(t.sliderContainer.children.length-Math.max(n,i)),l=Math.min(r,o)*(o>r?n>i?1:-1:n>i?-1:1),a=100*Math.round(100*t.state.positionX/f(p(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100)*f(p(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100+f(p(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)*l;t.state=s(s({},t.state),{},{positionTarget:a})},y=function(t){if(!t.options.adjustHeight)return;let e=t.sliderContainer.children[t.state.previousCurrentIndex];t.sliderContainer.style.setProperty("--sliderHeight",`${(e.firstElementChild||e).getBoundingClientRect().height}px`)},g=function(t,e,n){return Math.min(Math.max(t,e),n)},C="__DESTROYED__";class v{constructor(t){var e=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var i;a(this,"getDefaultState",(function(){return{elementsOnBehind:1,positionSnapshot:0,positionX:0,positionTarget:0,velocity:0,containerInnerWidth:e.sliderContainer?f(p(e.sliderContainer,e.nullifyTransformEl),e):0,slideWidth:e.sliderContainer?f(p(e.sliderContainer.firstElementChild,e.sliderContainer),e):0,previousCurrentIndex:0,startX:0,endX:0,mouseDown:!1,lastTimeAnimated:1/0}})),a(this,"state",this.getDefaultState()),a(this,"options",{onDragStart:function(){},autoplay:!1,scaleRotateEffect:!1,pillsContainerSelector:null,pillsFlexyInstance:null,flexyAttributeEl:null,initialDragEvent:null,adjustHeight:!1,wrapAroundMode:"container",orientation:"horizontal",nullifyTransformEl:null,elementsThatDoNotStartDrag:[],hasDragAndDrop:!0}),a(this,"sliderContainer",null),a(this,"drawLoop",(function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t?1/0:e.state.positionX;if(e.state.sliderActivated!==C){var i;if(e.state.containerInnerWidth!==p(e.sliderContainer,e.nullifyTransformEl).width&&e.refreshActivation(),e.state=s(s(s(s({},e.state),e.state.sliderActivated?{velocity:.72*(i=e.state.velocity+(e.state.mouseDown?e.state.positionSnapshot+(e.state.endX-e.state.startX)-e.state.positionX-e.state.velocity:.02*(e.state.positionTarget-e.state.positionX))),positionX:e.state.positionX+i}:{}),e.state.sliderActivated&&Math.abs(e.state.containerInnerWidth-f(p(e.sliderContainer,e.nullifyTransformEl),e))>1?{positionX:Math.round(f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)*(100*Math.round(e.state.positionX/e.state.slideWidth))/100),positionTarget:Math.round(f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)*(100*Math.round(e.state.positionX/e.state.slideWidth))/100)}:{}),{},{scrollPosition:{x:window.pageXOffset,y:window.pageYOffset},containerInnerWidth:f(p(e.sliderContainer,e.nullifyTransformEl),e),slideWidth:f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)}),(n!==e.state.positionX||Math.abs(e.state.positionX-e.state.positionTarget)>.1)&&!t&&e.state.sliderActivated){let{relativeDelta:t,elementsOnBehind:n}=c(e,e.state.elementsOnBehind,e.state.mouseDown?e.state.endX<=e.state.startX?"right":"left":e.state.positionX>=e.state.positionTarget?"right":"left",e.options.wrapAroundMode);e.state=s(s({},e.state),{},{elementsOnBehind:n,positionTarget:e.state.positionTarget+t,positionX:e.state.positionX+t,positionSnapshot:e.state.positionSnapshot+t})}if(e.options.autoplay&&e.state.sliderActivated&&Math.abs(e.state.positionX-e.state.positionTarget)<.5&&(new Date).getTime()/1e3-e.state.lastTimeAnimated/1e3>(parseFloat(e.options.autoplay,10)?parseFloat(e.options.autoplay,10):3)&&(e.state=s(s({},e.state),{},{positionTarget:e.state.positionX-f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)})),!e.state.mouseDown&&e.state.sliderActivated){Math.abs(e.state.positionX-e.state.positionTarget)<.2&&(e.state=s(s({},e.state),{},{positionX:e.state.positionTarget,velocity:0}));let t=e.state.previousCurrentIndex;e.state=s(s({},e.state),{},{previousCurrentIndex:g(e.state.elementsOnBehind>Math.round(Math.abs(e.state.positionTarget)/f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e))?Math.round(Math.abs(e.state.positionTarget)/f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e))+(e.sliderContainer.children.length-e.state.elementsOnBehind):Math.abs(Math.round(Math.abs(e.state.positionTarget)/f(p(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e))-e.state.elementsOnBehind),0,e.sliderContainer.children.length-1)}),t!==e.state.previousCurrentIndex&&(h(e),y(e),[...e.sliderContainer.querySelectorAll("video")].map((function(t){t.pause()})),[...e.sliderContainer.querySelectorAll('iframe[src*="youtu"]')].map((function(t){t.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})),[...e.sliderContainer.querySelectorAll('iframe:not([src*="youtu"])')].map((function(t){const e=t.src;t.src="",t.src=e})))}e.state.positionX!==n&&e.state.sliderActivated&&(e.render(),e.state=s(s({},e.state),{},{lastTimeAnimated:(new Date).getTime()})),requestAnimationFrame((function(){return e.drawLoop()}))}})),this.options=s(s({},this.options),{},{flexyAttributeEl:t,nullifyTransformEl:t},n),this.sliderContainer=t,function(t){if(!t.options.pillsContainerSelector)return;let e=[...t.options.pillsContainerSelector.children];const n=function(n){let i=[...t.sliderContainer.children].indexOf([...t.sliderContainer.children].reduce((function(e,n){let i=d(p(e,t.options.nullifyTransformEl),t),r=d(p(n,t.options.nullifyTransformEl),t);return Math.abs(r-d(p(t.sliderContainer,t.options.nullifyTransformEl),t))<Math.abs(i-d(p(t.sliderContainer,t.options.nullifyTransformEl),t))?n:e}),{getBoundingClientRect:function(){return{left:1e11}}})),r=e.indexOf(n);t.options.pillsContainerSelector.querySelector(".active")&&t.options.pillsContainerSelector.querySelector(".active").classList.remove("active"),n.classList.add("active");let o=Math.abs(r-i),l=Math.min(i,r)+(e.length-Math.max(i,r)),a=Math.min(o,l)*(l>=o?i>r?1:-1:i>r?-1:1),u=100*Math.round(100*t.state.positionX/f(p(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100)*f(p(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100+f(p(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)*a;t.state=s(s({},t.state),{},{positionTarget:u})};t.options.initialDragEvent&&t.options.initialDragEvent.target.closest(".flexy-pills > * > *")&&setTimeout((function(){n(t.options.initialDragEvent.target.closest(".flexy-pills > * > *"))})),e.map((function(t){return t.addEventListener("click",(function(e){n(t),e.preventDefault()}))}))}(this),(i=this).options.leftArrow&&i.options.leftArrow.addEventListener("click",(function(t){t.preventDefault(),m(i,(function(t){return t-1}))})),i.options.rightArrow&&i.options.rightArrow.addEventListener("click",(function(t){t.preventDefault(),m(i,(function(t){return t+1}))})),function(t){const e=t.sliderContainer;t.options.autoplay&&(e.addEventListener("mouseenter",(function(){return t.options=s(s({},t.options),{},{autoplay:!1,_autoplay:t.options.autoplay})})),e.addEventListener("mouseleave",(function(){t.options=s(s({},t.options),{},{autoplay:t.options._autoplay,_autoplay:!1}),t.state=s(s({},t.state),{},{lastTimeAnimated:(new Date).getTime()})})))}(this),function(t,e,n){if(!t.options.hasDragAndDrop)return;const i=t.sliderContainer,r=function(r){if(!e().sliderActivated)return;if(t.options.elementsThatDoNotStartDrag.reduce((function(t,e){return!!t||r.target.matches(e)||r.target.closest(e)}),!1))return;r.stopPropagation(),"touchstart"!==r.type&&r.preventDefault(),t.options.onDragStart(r),n(s(s({},e()),{},{startX:r.pageX||r.touches[0].pageX,endX:r.pageX||r.touches[0].pageX,mouseDown:!0,downScrollPosition:{x:window.pageXOffset,y:window.pageYOffset},positionSnapshot:e().positionX}));const o=function(r){if(!e().mouseDown)return;r.stopPropagation(),n(s(s({},e()),{},{mouseDown:!1})),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",o),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",o);let a=e(),u=100*a.positionX/p(i.firstElementChild,t.options.nullifyTransformEl).width;n(s(s({},e()),{},{positionTarget:p(i.firstElementChild,t.options.nullifyTransformEl).width*(Math.abs(a.endX-a.startX)>50?a.endX-a.startX<0?100*Math.floor(u/100):100*Math.ceil(u/100):100*Math.round(u/100))/100}))},l=function(t){let{pageX:i}=t;if(i||(i=t.touches[0].pageX),!e().mouseDown)return;let r=e();n(s(s({},r),{},{endX:i})),(Math.abs(r.downScrollPosition.x-r.scrollPosition.x)>3||Math.abs(r.downScrollPosition.y-r.scrollPosition.y)>5)&&o(t)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",o),document.addEventListener("touchmove",l),document.addEventListener("touchend",o)};i.addEventListener("mousedown",r),i.addEventListener("touchstart",r),t.options.initialDragEvent&&!t.options.initialDragEvent.target.closest(".flexy-pills > * > *")&&requestAnimationFrame((function(){r(t.options.initialDragEvent)}))}(this,(function(){return e.state}),(function(t){return e.state=t})),[...this.sliderContainer.children].map((function(t){return t.addEventListener("click",(function(t){return Math.abs(e.state.startX-e.state.endX)>3&&t.preventDefault()}))}));let r=1,o=1,l=getComputedStyle(this.options.flexyAttributeEl);l.getPropertyValue("--current-item")&&(o=parseInt(l.getPropertyValue("--current-item")),r=this.sliderContainer.children.length),this.state=s(s({},this.state),{},{elementsOnBehind:r,positionX:f(p(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this)*o*-1,positionTarget:f(p(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this)*o*-1,containerInnerWidth:f(p(this.sliderContainer,this.nullifyTransformEl),this),slideWidth:f(p(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this)}),this.refreshActivation(),requestAnimationFrame((function(){return e.drawLoop(!0)})),y(this)}destroy(){this.state=s(s({},this.state),{},{sliderActivated:C})}refreshActivation(){let t=f(p(this.sliderContainer.children[0],this.options.nullifyTransformEl)||{width:0,height:0},this)*this.sliderContainer.children.length;this.state=s(s({},this.state),{},{sliderActivated:!!this.sliderContainer&&-1===getComputedStyle(this.sliderContainer,":after").content.indexOf("no-flexy")&&t>f(p("vertical"===this.options.orientation?this.sliderContainer.parentNode:this.sliderContainer,this.options.nullifyTransformEl),this)+10}),this.state.sliderActivated?this.options.flexyAttributeEl.dataset.flexy="":(this.options.flexyAttributeEl.removeAttribute("data-flexy"),[...this.sliderContainer.children].map((function(t){return t.removeAttribute("style")})))}render(){var t=this;[...this.sliderContainer.children].map((function(e){"vertical"===t.options.orientation?e.style.transform=`translate3d(0, ${t.state.positionX}px, 0)`:e.style.transform=`translate3d(${t.state.positionX}px, 0, 0)`})),this.state.mouseDown?this.options.flexyAttributeEl.dataset.flexyDragging="":this.options.flexyAttributeEl.removeAttribute("data-flexy-dragging"),this.state.elementsOnBehind>0?([...this.sliderContainer.children].slice(0,-1*this.state.elementsOnBehind).map((function(t){return t.style.order=2})),[...this.sliderContainer.children].slice(-1*this.state.elementsOnBehind).map((function(t){return t.style.order=1}))):[...this.sliderContainer.children].map((function(t){return t.style.order=1}))}}var E=n(601),T=n.n(E),w=n(130);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const D=function(t,e){if(t.flexy)return;let n=t.querySelector(".flexy-pills [data-flexy]");const i=new v(t.querySelector(".flexy-items"),x(x(x({flexyAttributeEl:t,elementsThatDoNotStartDrag:[".twentytwenty-handle"],adjustHeight:!!t.querySelector(".flexy-items").dataset.height},e.event?{initialDragEvent:e.event}:{}),{},{autoplay:!!(Object.keys(t.dataset).indexOf("autoplay")>-1&&parseInt(t.dataset.autoplay,10))&&t.dataset.autoplay},t.querySelector(".flexy-pills")?{pillsContainerSelector:t.querySelector(".flexy-pills").firstElementChild}:{}),{},{leftArrow:t.querySelector(".flexy .flexy-arrow-prev"),rightArrow:t.querySelector(".flexy .flexy-arrow-next"),scaleRotateEffect:!1,onDragStart:function(t){t.target.closest(".flexy-items")&&Array.from(t.target.closest(".flexy-items").querySelectorAll(".zoomImg")).map((function(t){r()(t).stop().fadeTo(120,0)}))},wrapAroundMode:"viewport"===t.dataset.wrap?"viewport":"container"},n?{pillsFlexyInstance:n}:{}));if(n){const t=new v(n,x({elementsThatDoNotStartDrag:[".twentytwenty-handle"],wrapAroundMode:"viewport"===n.dataset.wrap?"viewport":"container",leftArrow:n.parentNode.querySelector(".flexy-arrow-prev"),rightArrow:n.parentNode.querySelector(".flexy-arrow-next"),hasDragAndDrop:!1},n.closest(".thumbs-left")&&"mobile"!==(0,w.C)({withTablet:!0})?{orientation:"vertical"}:{}));n.flexy=t}t.flexy=i};T().on("ct:flexy:update-height",(function(){[...document.querySelectorAll(".flexy-container")].map((function(t){t.flexy&&y(t.flexy)}))}))}}]);
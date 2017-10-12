!function(){"use strict";function e(e,t){this.loaded=!1,this.destroyed=!1,this.onDestroy=null,this.elem=document.createElement("div"),document.body.appendChild(this.elem),this.elem.classList.add("conveuro-dropdown","is-hidden"),this.elem.innerHTML='<p class="conveuro-title"></p><div class="conveuro-list"></div><div class="conveuro-error"></div><div class="conveuro-footer"><p class="js-conveuro-more">see more...</p><p class="js-conveuro-close">close</p></div>',this.title=this.elem.getElementsByClassName("conveuro-title")[0],this.list=this.elem.getElementsByClassName("conveuro-list")[0],this.errorContainer=this.elem.getElementsByClassName("conveuro-error")[0],this.btnMore=this.elem.getElementsByClassName("js-conveuro-more")[0],this.btnClose=this.elem.getElementsByClassName("js-conveuro-close")[0];var n=this;this.btnMore.addEventListener("click",function(){this.classList.add("is-hidden"),n.list.style.maxHeight=n.list.offsetHeight+"px",n.list.childNodes.forEach(function(e){e.classList.remove("is-hidden")})}),this.btnClose.addEventListener("click",function(){n.close()}),this.setPosition(e,t)}function t(t,n){var s=new e(t[0],t[1]);s.setTitle(n.title),s.renderPlaceholderList(3),s.setLoading(!0),setTimeout(function(){s.show()},150),chrome.runtime.sendMessage({getRates:!0,currency:n.currency,value:n.value},function(e){s.setLoaded(!0),e.list?s.renderList(e.list):s.renderError(e)}),l.add(s,n.title),s.onDestroy=function(){l.remove(s)}}function n(e){var t={commonAncestorText:s(r(e.commonAncestorContainer)),selectedText:s(o(e)),startContainerText:null,endContainerText:null};return e.startContainer!==e.endContainer&&(t.startContainerText=s(r(e.startContainer)),t.endContainerText=s(r(e.endContainer))),t}function s(e){return"string"==typeof e&&e.length<300&&e.match(/\d/)?e:null}function i(){for(var e=window.getSelection(),t=0;t<e.rangeCount;t++){var n=e.getRangeAt(t);if(!n.collapsed)return n}}function r(e){return e.nodeType===Node.TEXT_NODE?e.wholeText:e.innerText}function o(e){if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){var t=e.startOffset,n=e.endOffset-t;return e.startContainer.wholeText.substr(t,n)}return null}var l=function(){function e(e){for(var n=0;n<t.length;n++)if(t[n].title==e)return!0;return!1}var t=[];return{exists:e,add:function(n,s){return!e(s)&&(t.push({instance:n,title:s}),!0)},remove:function(e){for(var n=t.length-1;n>=0;n--)t[n].instance===e&&t.splice(n,1)}}}();e.prototype={setPosition:function(e,t){this.elem.style.left=e+"px",this.elem.style.top=t+"px"},createListItem:function(e){var t=document.createElement("div");return t.innerHTML="<p>"+e.value+'</p><small title="'+e.name+'">'+e.rate+" "+e.currency+"</small>",t},renderList:function(e){this.list.innerHTML="",this.btnMore.classList.add("is-hidden");var t=this;e.forEach(function(e,n){var s=t.createListItem(e);t.list.appendChild(s),n>=3&&(s.classList.add("is-hidden"),t.btnMore.classList.remove("is-hidden"))})},renderPlaceholderList:function(e){var t={value:"----------",rate:"",currency:"-----"};this.list.innerHTML="",this.btnMore.classList.add("is-hidden");for(var n=0;n<e;n++)this.list.appendChild(this.createListItem(t))},renderError:function(e){this.renderList([]),this.errorContainer.innerHTML="",e.code&&(this.errorContainer.innerHTML+='<p class="code">'+e.code+"</p>"),e.message&&(this.errorContainer.innerHTML+='<p class="message">'+e.message+"</p>")},setTitle:function(e){this.title.innerHTML=e},setLoaded:function(e){this.loaded=e,!0===e&&this.setLoading(!1)},setLoading:function(e){!0!==e||this.loaded?this.elem.classList.remove("is-loading"):this.elem.classList.add("is-loading")},show:function(){this.elem.classList.remove("is-hidden")},close:function(){this.elem.classList.add("is-hidden");var e=this;this.elem.addEventListener("transitionend",function(){e.destroy()}),setTimeout(function(){e.destroyed||e.destroy()},5e3)},destroy:function(){this.destroyed||(this.elem.parentElement.removeChild(this.elem),this.elem=null,this.title=null,this.list=null,this.errorContainer=null,this.btnMore=null,this.btnClose=null,this.destroyed=!0,"function"==typeof this.onDestroy&&this.onDestroy())}},document.addEventListener("mouseup",function(e){var s=i();if(console.log("range",s),s){var r=n(s),o=!1;for(var a in r)if(null!==r[a]){o=!0;break}console.log("rangeData",r),o&&chrome.runtime.sendMessage({getWorthy:!0,data:r},function(n){n&&"string"==typeof n.currency&&"number"==typeof n.value&&!l.exists(n.title)&&t([e.pageX,e.pageY],n)})}})}();
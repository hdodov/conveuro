!function(){"use strict";function t(t){this.elem=t,this.trigger=t,this.moving=!1,this.onStart=null,this.onMove=null,this.onStop=null,this.startHandler=function(t){t.preventDefault(),t.stopPropagation(),document.addEventListener("mousemove",this.moveHandler),document.addEventListener("mouseup",this.stopHandler),this.moving=!0,this.start(t)}.bind(this),this.moveHandler=function(t){this.move(t)}.bind(this),this.stopHandler=function(t){this.moving&&(document.removeEventListener("mouseup",this.stopHandler),document.removeEventListener("mousemove",this.moveHandler),this.moving=!1,this.stop(t))}.bind(this)}function e(t){this.container=t||document.body,this.loading=!1,this.destroyed=!1,this.requestTimestamp=null,this.onDestroy=null,this.elem=document.createElement("div"),this.container.appendChild(this.elem),this.elem.classList.add("conveuro-dropdown","is-hidden"),this.elem.innerHTML='<p class="conveuro-title"></p><div class="conveuro-list"></div><div class="conveuro-error"></div><div class="conveuro-footer"><p class="js-conveuro-more">see more...</p><p class="js-conveuro-close">close</p></div>',this.title=this.elem.getElementsByClassName("conveuro-title")[0],this.list=this.elem.getElementsByClassName("conveuro-list")[0],this.errorContainer=this.elem.getElementsByClassName("conveuro-error")[0],this.btnMore=this.elem.getElementsByClassName("js-conveuro-more")[0],this.btnClose=this.elem.getElementsByClassName("js-conveuro-close")[0],this.btnMore.addEventListener("click",function(){this.btnMore.classList.add("is-hidden"),this.list.style.maxHeight=this.list.offsetHeight+"px",this.list.style.overflow="auto",this.list.childNodes.forEach(function(t){t.classList.remove("is-hidden")})}.bind(this)),this.btnClose.addEventListener("click",function(){this.close()}.bind(this))}function n(n,s){var i=new e;i.setPosition(n[0]-i.elem.offsetWidth/2,n[1]+24),c.add(i,s.title),i.addClickClose();var o=new t(i.elem);o.trigger=i.title,o.init(),o.onStart=function(){i.removeClickClose(),i.elem.style.zIndex=d.dropdown.zIndex,d.dropdown.zIndex++},i.onDestroy=function(){c.remove(i),o.destroy()},i.requestData(s),setTimeout(function(){i.show()},150)}function s(t){var e={commonAncestorText:l(t.commonAncestorContainer),selectedText:a(t),startContainerText:null,endContainerText:null};t.startContainer!==t.endContainer&&(e.startContainerText=l(t.startContainer),e.endContainerText=l(t.endContainer)),"string"==typeof e.startContainerText&&t.startContainer.nodeType==Node.TEXT_NODE&&(e.startContainerText=e.startContainerText.substr(t.startOffset)),"string"==typeof e.endContainerText&&t.endContainer.nodeType==Node.TEXT_NODE&&(e.endContainerText=e.endContainerText.substr(0,t.endOffset));for(var n in e)e[n]=i(e[n]);return e}function i(t){return"string"==typeof t&&t.length<d.maxTextLength?t:null}function o(t){for(var e=t.parentElement,n=0;e;){if(e.classList.contains(d.dropdown.class))return!0;if(e=e.parentElement,++n>=d.dropdown.maxDepth)break}return!1}function r(){for(var t=window.getSelection(),e=0;e<t.rangeCount;e++){var n=t.getRangeAt(e);if(!n.collapsed)return n}}function l(t){return t.nodeType===Node.TEXT_NODE?t.wholeText:t.innerText}function a(t){var e=[],n=!1,s="",i="";t.startContainer===t.endContainer?e=[t.commonAncestorContainer]:t.startContainer.parentElement===t.commonAncestorContainer&&(e=t.commonAncestorContainer.childNodes);for(var o=0;o<e.length&&(e[o]===t.startContainer&&(n=!0),n&&(s=l(e[o]),e[o].nodeType===Node.TEXT_NODE&&(e[o]===t.endContainer&&(s=s.substr(0,t.endOffset)),e[o]===t.startContainer&&(s=s.substr(t.startOffset))),i+=s),e[o]!==t.endContainer);o++);return i}var d={maxTextLength:140,dropdown:{class:"conveuro-dropdown",maxDepth:4,zIndex:214748e4}};t.prototype={init:function(){this.previousTriggerCursor=this.trigger.style.cursor,this.trigger.style.cursor="move",this.trigger.addEventListener("mousedown",this.startHandler)},start:function(t){var e=parseInt(this.elem.style.left),n=parseInt(this.elem.style.top);this.offset={x:t.pageX-e,y:t.pageY-n},"function"==typeof this.onStart&&this.onStart(t)},move:function(t){var e=t.pageX,n=t.pageY;this.offset&&(e-=this.offset.x,n-=this.offset.y),this.elem.style.left=e+"px",this.elem.style.top=n+"px","function"==typeof this.onMove&&this.onMove(t)},stop:function(t){"function"==typeof this.onStop&&this.onStop(t)},destroy:function(){this.trigger.style.cursor=this.previousTriggerCursor,this.trigger.removeEventListener("mousedown",this.startHandler),this.stopHandler(),this.elem=null,this.target=null,this.offset=null,this.onStart=null,this.onMove=null,this.onStop=null}};var c=function(){function t(t){for(var n=0;n<e.length;n++)if(e[n].title==t)return!0;return!1}var e=[];return{exists:t,add:function(n,s){return!t(s)&&(e.push({instance:n,title:s}),!0)},remove:function(t){for(var n=e.length-1;n>=0;n--)e[n].instance===t&&e.splice(n,1)}}}();e.prototype={requestData:function(t){this.setLoading(!0),this.setTitle(t.title);var e=Date.now();this.requestTimestamp=e,t.list&&t.list.length?(this.renderList(t.list),chrome.runtime.sendMessage({id:"fill_list",list:t.list,base:t.currency,value:t.value},function(t){this.requestTimestamp!==e||this.destroyed||this.handleData(t)}.bind(this))):this.renderError({error:"No currencies to convert."})},handleData:function(t){this.setLoading(!1),t.list?this.renderList(t.list):this.renderError(t)},setPosition:function(t,e){this.elem.style.left=t+"px",this.elem.style.top=e+"px"},emptyContent:function(){this.list.innerHTML="",this.errorContainer.innerHTML=""},createListItem:function(t){var e=document.createElement("div"),n=t.name||"",s=t.value||"-------",i=t.rate||"----",o=t.code||"---";return e.innerHTML="<p>"+s+'</p><small title="'+n+'">'+i+" "+o+"</small>",e},renderList:function(t){this.emptyContent(),this.btnMore.classList.add("is-hidden"),t.forEach(function(t,e){var n=this.createListItem(t);this.list.appendChild(n),e>=3&&(n.classList.add("is-hidden"),this.loading||this.btnMore.classList.remove("is-hidden"))}.bind(this))},renderError:function(t){this.emptyContent(),t.code&&(this.errorContainer.innerHTML+='<p class="code">'+t.code+"</p>"),t.error&&(this.errorContainer.innerHTML+='<p class="message">'+t.error+"</p>")},setTitle:function(t){this.title.innerHTML=t},setLoading:function(t){this.loading=t,!0===this.loading?this.elem.classList.add("is-loading"):this.elem.classList.remove("is-loading")},addClickClose:function(){this.clickCloseHandler=function(t){o(t.target)||this.close()}.bind(this),document.addEventListener("click",this.clickCloseHandler)},removeClickClose:function(){"function"==typeof this.clickCloseHandler&&(document.removeEventListener("click",this.clickCloseHandler),this.clickCloseHandler=null)},show:function(){this.elem.classList.remove("is-hidden")},close:function(){this.elem.classList.add("is-closed"),setTimeout(function(){this.destroy()}.bind(this),500)},destroy:function(){this.destroyed||(this.container.removeChild(this.elem),this.removeClickClose(),this.container=null,this.elem=null,this.title=null,this.list=null,this.errorContainer=null,this.btnMore=null,this.btnClose=null,this.destroyed=!0,"function"==typeof this.onDestroy&&this.onDestroy())}},document.addEventListener("mouseup",function(t){var e=r();if(e&&!o(e.startContainer)&&!o(e.endContainer)){var i=s(e),l=!1;for(var a in i)if(null!==i[a]){l=!0;break}l&&chrome.runtime.sendMessage({id:"detect_data",data:i},function(e){e&&!c.exists(e.title)&&n([t.pageX,t.pageY],e)})}})}();
(()=>{"use strict";let t;function e(){document.querySelectorAll(".jetpack-video-wrapper").forEach((function(t){t.querySelectorAll("embed, iframe, object").forEach((function(e){let i=0;const a=t.previousElementSibling;if(a&&"P"===a.nodeName&&"center"===getComputedStyle(a)["text-align"])i="0 auto";if(!e.hasAttribute("data-ratio"))e.setAttribute("data-ratio",(e.height||0)/(e.width||0)),e.setAttribute("data-width",e.width),e.setAttribute("data-height",e.height),e.style.display="block",e.style.margin=i;const n=e.getAttribute("data-height"),d=e.getAttribute("data-ratio"),o=e.parentElement.clientWidth;if(e.removeAttribute("height"),e.removeAttribute("width"),"Infinity"===d)return e.style.width="100%",void(e.style.height=n+"px");const r=e.getAttribute("data-width");if(parseInt(r,10)>o)e.style.width=o+"px",e.style.height=o*parseFloat(d)+"px";else e.style.width=r+"px",e.style.height=n+"px"}))}))}function i(){window.addEventListener("load",e),window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout(e,500)})),window.addEventListener("is.post-load",e),setTimeout(e)}if("loading"!==document.readyState)i();else document.addEventListener("DOMContentLoaded",i)})();
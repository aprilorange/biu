!function(){function e(e){var n="getElement",i="Name",o={"#":"ById",".":"sByClass"+i,"@":"sBy"+i,"=":"sByTag"+i}[e[0]]||!1,a=e.slice(1),s=o?document[n+o](a):document.querySelectorAll(e),u=t(s,"NodeList")?Array.prototype.slice.call(s):s;return u}function t(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function n(e,n){t(e,"Array")?Array.prototype.forEach.call(e,function(e,t){n(e)}):n(e)}var i={height:"50px",lineHeight:"50px",top:"-55px",closeButton:"x"};window.biuOpts=i;var o="height:"+i.height+";line-height:"+i.lineHeight+";top:"+i.top+";",a=function(t){function a(){s.classList.remove("biu-shown"),setTimeout(function(){s.parentNode.removeChild(s)},600)}var s=document.createElement("div"),u=(new Date).getTime();instance="biu-instance-"+u,s.id=instance;var c="info",d="",r=!0,l=5e3,p="",f=e("body"),y=!0;if("object"==typeof t[0]){var b=t[0];b.type&&(c=b.type),b.text.toString()&&(d=b.text),r="undefined"!=typeof b.autoFade?b.autoFade:!0,l="undefined"!=typeof b.delay?b.delay:5e3,"undefined"!=typeof b.parent&&(f=e(b.parent),o+="position:absolute;","body"!=b.parent&&(y=!1))}else t[0]&&!t[1]?d=t[0]:(c=t[0],d=t[1],r="undefined"!=typeof t[2]?t[2]:!0);c="biu-"+c,s.classList.add("biu-instance"),s.classList.add(c),s.setAttribute("style",o),s.setAttribute("data-auto-hide",r),r||(p='<div class="biu-close" id="biu-close-'+u+'"">'+i.closeButton+"</div>"),d='<div class="biu-content">'+d+"</div>"+p,s.innerHTML=d,n(f,function(e){e.appendChild(s)}),setTimeout(function(){s.classList.add("biu-shown")},100),r?setTimeout(function(){a()},l):document.getElementById("biu-close-"+u).addEventListener("click",a)};window.biu=function(){return new a(arguments)}}();
//# sourceMappingURL=biu.js.map
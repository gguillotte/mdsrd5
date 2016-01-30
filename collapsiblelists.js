/*
CollapsibleLists.js
An object allowing lists to dynamically expand and collapse
Created by Stephen Morley - http://code.stephenmorley.org/ - and released under
the terms of the CC0 1.0 Universal legal code:
http://creativecommons.org/publicdomain/zero/1.0/legalcode
*/

var CollapsibleLists=new function(){function e(e){return function(a){a||(a=window.event);for(var n=a.target?a.target:a.srcElement;"LI"!=n.nodeName;)n=n.parentNode;n==e&&t(e)}}function t(e){for(var t=e.className.match(/(^| )collapsibleListClosed( |$)/),a=e.getElementsByTagName("ul"),n=0;n<a.length;n++){for(var l=a[n];"LI"!=l.nodeName;)l=l.parentNode;l==e&&(a[n].style.display=t?"block":"none")}e.className=e.className.replace(/(^| )collapsibleList(Open|Closed)( |$)/,""),a.length>0&&(e.className+=" collapsibleList"+(t?"Open":"Closed"))}this.apply=function(e){for(var t=document.getElementsByTagName("ul"),a=0;a<t.length;a++)if(t[a].className.match(/(^| )collapsibleList( |$)/)&&(this.applyTo(t[a],!0),!e))for(var n=t[a].getElementsByTagName("ul"),l=0;l<n.length;l++)n[l].className+=" collapsibleList"},this.applyTo=function(a,n){for(var l=a.getElementsByTagName("li"),s=0;s<l.length;s++)n&&a!=l[s].parentNode||(l[s].addEventListener?l[s].addEventListener("mousedown",function(e){e.preventDefault()},!1):l[s].attachEvent("onselectstart",function(){event.returnValue=!1}),l[s].addEventListener?l[s].addEventListener("click",e(l[s]),!1):l[s].attachEvent("onclick",e(l[s])),t(l[s]))}};
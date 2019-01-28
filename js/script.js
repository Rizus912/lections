console.log('script.js загружен');
var menu = document.getElementById("menu");
var lines = document.getElementById("lines");
var content = document.getElementById("contentShadow");
var cont = document.getElementById("content");
var nav = false;
var color;

window.onload = function(){
  var link = document.querySelector('link[rel=import]');
      var contentPaste = link.import.querySelector('#paste');
      document.body.appendChild(contentPaste.cloneNode(true));
}




goNav = function(){
  if (nav==false){
    menu.style.left="0px";
    content.style.zIndex= "60";
    console.log(lines.style.borderBottom);
    lines.style.borderBottom="17px double #F8F8F8";
    lines.style.borderTop="6px solid #F8F8F8";
    lines.style.opacity= "0.9";
  }else{
    menu.style.left="-250px";
    content.style.zIndex= "-250";
    lines.style.borderBottom="17px double black";
    lines.style.borderTop="6px solid black";
    lines.style.opacity= "0.5";
  }

  nav = !nav;
}

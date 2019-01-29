console.log('script.js загружен');
var menu = document.getElementById("menu");
var lines = document.getElementById("lines");
var content = document.getElementById("contentShadow");
var cont = document.getElementById("content");
var baloon = document.getElementById("baloon");
var airship = document.getElementById("airship");
var plane = document.getElementById("plane");


var nav = false;
var color;
var page = document.getElementsByClassName('page');
for (i=0;i<page.length;i++) { page[i].style.display="none";}
document.getElementById('b').style.display="block";
window.onload=function(){
  document.getElementById('preloader').style.display="none";
  var page = document.getElementsByClassName('page');
  for (i=0;i<page.length;i++) { page[i].style.display="none";}
  document.getElementById('b').style.display="block";
  document.getElementById('bMainLogo').style.opacity="1";
  baloon.style.bottom="15%";
  airship.style.top="4%";
  airship.style.left= "-280px";
  if(screen.width>700){plane.style.right= "2%";}


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

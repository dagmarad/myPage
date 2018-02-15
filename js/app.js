$(function(){

window.addEventListener("scroll", (function(event){
parallaxScroll();


}))
let parralax1 = document.querySelector('.parallax-1');
let parralax2 = document.querySelector('.parallax-2');
let parralax3 = document.querySelector('.parallax-3');
function parallaxScroll(){
  var scrolled = document.documentElement.scrollTop;
  parralax1.style.bottom=(0-(scrolled*1.2)+'px');
  parralax2.style.bottom=(0-(scrolled*1.4)+'px');
  parralax2.style.left=(0-(scrolled*.4)+'px');
  parralax3.style.transition=(-(scrolled+3-scrolled)+'s');
  }



});

$(function(){

window.addEventListener("scroll", (function(event){
parallaxScroll();


}))
let parralax1 = document.querySelector('.parallax-1');
function parallaxScroll(){
  var scrolled = document.documentElement.scrollTop;
  let cos =parralax1.style.bottom=(0-(scrolled*.2)+'px');
  }

});

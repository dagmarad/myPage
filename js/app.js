$(function(){
//bellow code is for parallax function
window.addEventListener("scroll", (function(event){
parallaxScroll();
addActiveMenu();
}))
let parralax1 = document.querySelector('.parallax-1');
let parralax2 = document.querySelector('.parallax-2');
let parralax3 = document.querySelector('.parallax-3');
function parallaxScroll(){
  var scrolled = document.documentElement.scrollTop;
  //here we move the divs
  parralax1.style.bottom=(0-(scrolled*1.2)+'px');
  parralax2.style.bottom=(0-(scrolled*1.4)+'px');
  parralax2.style.left=(0-(scrolled*.4)+'px');
  //one div with transiction animation
  parralax3.style.transition=(-(scrolled+3-scrolled)+'s');

  }
//below code is for highlight menu which can be active, when
//offsetTop is the pixel when we change color of menu

let home = document.querySelector('#home');
let topOfHome = home.offsetTop;
let homeLink = document.querySelector(".frame__menu--home");
let portfolio = document.querySelector('#portfolio');
let topOfPortfolio = portfolio.offsetTop;
let portfolioLink = document.querySelector(".frame__menu--portfolio");
let contact = document.querySelector('#contact');
let topOfContact = contact.offsetTop;
let contactLink = document.querySelector(".frame__menu--contact");
console.log(contactLink);


function addActiveMenu(){
      if(window.scrollY >= topOfHome  && window.scrollY <= topOfPortfolio){
        console.log("hej1");
         homeLink.classList.add('active');
        (portfolioLink.classList.remove('active'));
        (contactLink.classList.remove('active'));
       } else if
       (window.scrollY > topOfPortfolio && window.scrollY < topOfContact){
         console.log("hej2");
       (portfolioLink.classList.add('active'));
       (homeLink.classList.remove('active'));
       (contactLink.classList.remove('active'));
     } else if
       (window.scrollY >= topOfContact && window.scrollY !== topOfPortfolio){
       console.log("hej3");
        (contactLink.classList.add('active'));
        (portfolioLink.classList.remove('active'));
      }
   }
    // else if (window.scrollY >= topOfHome && window.scrollY < topOfPortfolio){
    //   homeLink.classList.add('active');
    // } else if (window.scrollY >= topOfContact){
    //   contactLink.classList.add('active');
    // }  else {
    //   contactLink.classList.remove('active');
    //   homeLink.classList.remove('active');





});

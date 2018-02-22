var Parallax = {
  parralax1: document.querySelector('.parallax-1'),
  parralax2: document.querySelector('.parallax-2'),
  parralax3: document.querySelector('.parallax-3'),
  scroll: function() {
    var scrolled = document.documentElement.scrollTop;
    //here we move the divs
    this.parralax1.style.bottom = 0 - (scrolled * 0.2) + 'px';
    this.parralax2.style.top = 0 - (scrolled * .4) + 'px';
    this.parralax2.style.left = 0  - (scrolled * .4) + 'px';
    this.parralax3.style.transition = - (scrolled + 3 - scrolled) + 's';
  },
  assign: function() {
    window.addEventListener("scroll", (function(event){
      Parallax.scroll();
    }));
  },
  init: function() {
    Parallax.assign();
  }
};

var Page = {
  home: document.querySelector('#home'),
  homeLink: document.querySelector(`[href="#home"]`),
  portfolio: document.querySelector('#portfolio'),
  portfolioLink: document.querySelector(`[href="#portfolio"]`),
  portfolioScroll: document.querySelector(`.section__scroll`),
  contact: document.querySelector('#contact'),
  contactLink: document.querySelector(`[href="#contact"]`),
  getSectionPositions: function() {
    this.topOfPortfolio = this.portfolio.offsetTop;
    this.topOfContact = this.contact.offsetTop;
  },
  showActiveMenu: function() {
    this.portfolioLink.classList.remove('menu__link--active');
    this.contactLink.classList.remove('menu__link--active');
    this.homeLink.classList.remove('menu__link--active');
    if(window.scrollY <= this.topOfPortfolio - 100) {
      this.homeLink.classList.add('menu__link--active');
    } else if (window.scrollY < this.topOfContact - 100) {
      this.portfolioLink.classList.add('menu__link--active');
    } else {
      this.contactLink.classList.add('menu__link--active');
    }
  },
  assign: function() {
    window.addEventListener("scroll", (function(event){
      Page.showActiveMenu();
    }));
    window.addEventListener("resize", (function(event){
      Page.getSectionPositions();
    }));
    this.homeLink.addEventListener("click", (function(event){
      event.preventDefault();
      Page.home.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }));
    this.portfolioLink.addEventListener("click", (function(event){
      event.preventDefault();
      Page.portfolio.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }));
    this.portfolioScroll.addEventListener("click", (function(event){
      event.preventDefault();
      Page.portfolio.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }));
    this.contactLink.addEventListener("click", (function(event){
      event.preventDefault();
      Page.contact.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }));
  },
  init: function() {
    Page.assign();
    Page.getSectionPositions();
    Page.showActiveMenu();
    Parallax.init();
  }
};

Page.init();
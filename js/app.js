var Parallax = {
    parrallaxes: [document.querySelectorAll('.parallax--dots'),
                  document.querySelectorAll('.parallax--circle'),
                  document.querySelectorAll('.parallax--traingles'),
                  document.querySelectorAll('.parallax--hart')],
    
    scroll: function() {
        var scrolled = document.documentElement.scrollTop;
        //here we move the divs
        
        this.parrallaxes[0].forEach((parallax) => parallax.style.marginTop = 0 - (scrolled * 0.3) + 'px');
        this.parrallaxes[1].forEach((parallax) => parallax.style.marginTop = 0 - (scrolled * 0.4) + 'px');
        this.parrallaxes[2].forEach((parallax) => parallax.style.marginTop = 0 - (scrolled * 0.5) + 'px');
        this.parrallaxes[3].forEach((parallax) => parallax.style.marginTop = 0 - (scrolled * 0.6) + 'px');
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
    portfolioScroll: document.querySelector(`.scroll`),
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
        if(window.scrollY < this.topOfPortfolio - 100) {
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
                behavior: 'smooth',
                block: 'start'
            });
        }));
        this.portfolioScroll.addEventListener("click", (function(event){
            event.preventDefault();
            Page.portfolio.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
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
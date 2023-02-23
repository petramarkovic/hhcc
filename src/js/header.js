const header = {
    body: document.body,
    nav: document.querySelector('.js-nav'),
    menu: document.querySelector('.js-menu'),
    navActiveClass: 'nav--active',

    init: function() {
        this.toggleMenuHandler();
    },

    toggleMenuHandler: function() {
        this.menu.addEventListener('click', () => {
            if(this.nav.classList.contains(this.navActiveClass)) {
                this.nav.classList.remove(this.navActiveClass);
                this.nav.classList.add('nav--closing');
                setTimeout(() => {
                    this.nav.classList.remove('nav--closing');
                }, 450);
                this.body.classList.remove('no-scroll');
            } else {
                this.nav.classList.add(this.navActiveClass);
                this.body.classList.add('no-scroll');
            }
        })
    }
};

export default header;
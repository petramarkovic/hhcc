const cocktails = {
	links: document.querySelectorAll('.js-cocktail'),
	img: document.querySelector('.js-cocktail-img'),

	init: function() {
		const isMobile = window.matchMedia('(max-width: 768px)');
		if(!isMobile.matches) {
			this.hoverAnimation();
		}
	},

	hoverAnimation: function() {
		this.links.forEach(link => {
			link.addEventListener('mouseenter', (e) => {
				const target = e.target;
				const imgSrc = target.getAttribute('data-img');
				target.classList.add('cocktail--active');
				this.img.setAttribute('src', imgSrc);
				this.img.classList.add('cocktail__img--active');
				const inactiveLinks = document.querySelectorAll('.js-cocktail:not(.cocktail--active)');
				inactiveLinks.forEach(el => {
					el.classList.add('cocktail--inactive');
				})
			})
			link.addEventListener('mouseleave', () => {
				link.classList.remove('cocktail--active');
				this.img.classList.remove('cocktail__img--active');
				const inactiveLinks = document.querySelectorAll('.js-cocktail:not(.cocktail--active)');
				inactiveLinks.forEach(el => {
					el.classList.remove('cocktail--inactive');
				})
			})
		})
	}
}

export default cocktails;
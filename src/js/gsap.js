import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const gsapAnimations = {
	bannerTitle: document.querySelector('.js-banner-title'),
	bannerSvg: document.querySelector('.js-banner-svg'),
	bannerText: document.querySelector('.js-banner-text'),
	bannerCta: document.querySelector('.js-banner-cta'),
	bannerImg: document.querySelector('.js-banner-img'),
	card: document.querySelector('.js-cards'),
	cards: gsap.utils.toArray('.js-card'),
	cardsTitle: document.querySelector('.js-cards-title'),
	cocktails: document.querySelector('.js-cocktails'),
	cocktailsTitle: document.querySelector('.js-cocktails-title'),
	cocktail: gsap.utils.toArray('.js-cocktail'),

	init: function() {
		const isMobile = window.matchMedia('(max-width: 768px)');
		if(!isMobile.matches) {
		}
		this.bannerAnimation();
		this.offersAnimation();
		this.cocktailsAnimation();
	},

	bannerAnimation: function() {
		const tl = gsap.timeline();
		tl.to(this.bannerTitle, { y: 0, opacity: 1, ease: 'sine', duration: 0.5 })
		  .to(this.bannerSvg, { y: 0, opacity: 1, ease: 'sine', duration: 0.5 })
		  .to(this.bannerText, { y: 0, opacity: 1, ease: 'sine', duration: 0.5 })
		  .to(this.bannerCta, { y: 0, opacity: 1, ease: 'sine', duration: 0.5 })
		  .to(this.bannerImg, { y: 0, opacity: 1, ease: 'sine', duration: 0.5 })
	},

	offersAnimation: function() {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: this.card,
				start: '20% 80%',
				end: '40% 30%',
				// scrub: true,
				// toggleActions: 'play pause resume none'
			},
		});
		tl.to(this.cardsTitle, { y: 0, opacity: 1, ease: 'sine', duration: 0.5 })
		  .to(this.cards, { rotate: 0, x: 0, y: 0, opacity: 1, ease: 'sine', duration: 1 })
	},

	cocktailsAnimation: function() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: this.cocktails,
				start: '20% 80%',
				end: '40% 30%',
				// scrub: true,
				// toggleActions: 'play pause resume none'
			},
		});
		tl.to(this.cocktailsTitle, { y: 0, opacity: 1, ease: 'sine', duration: 0.5 })
		  .to(this.cocktail[0], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
		  .to(this.cocktail[1], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
		  .to(this.cocktail[2], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
		  .to(this.cocktail[3], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
		  .to(this.cocktail[4], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
		  .to(this.cocktail[5], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
		  .to(this.cocktail[6], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
		  .to(this.cocktail[7], { y: 0, opacity: 1, ease: 'slow', duration: 0.3 })
	}
}

export default gsapAnimations;
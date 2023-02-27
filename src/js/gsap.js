import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const gsapAnimations = {
	container: document.querySelector('.js-offers-container'),
	slides: gsap.utils.toArray('.js-offers-slide'),
	text: gsap.utils.toArray('.anim'),
	mask: document.querySelector('.mask'),

	init: function() {
		// window.addEventListener('load', () => {
		// 	if (window.innerWidth < 768) {
		// 		return;
		// 	} else {
		// 	}
		// })
		this.horizontalScroll();
	},

	horizontalScroll: function() {
		gsap.registerPlugin(ScrollTrigger);
		let scrollTween = gsap.to(this.slides, {
			xPercent: -100 * (this.slides.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: this.container,
				pin: true,
				scrub: 1,
				eng: '+=3000'
			}
		})

		gsap.to(this.mask, {
			width: '100%',
			scrollTrigger: {
				trigger: '.offers',
				star: 'top left',
				scrub: 1
			}
		})

		this.slides.forEach(slide => {
			const text = slide.querySelectorAll('.anim');
			if(text.length === 0) {return;}
			gsap.from(text, {
				y: -130,
				opacity: 0,
				duration: 1,
				ease: 'elastic',
				stagger: 0.1,
				scrollTrigger: {
					trigger: slide,
					containerAnimation: scrollTween,
					start: 'left center'
				}
			})
		})
	}
}

export default gsapAnimations;
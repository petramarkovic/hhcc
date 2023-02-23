import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const gsapAnimations = {
	images: document.querySelectorAll('.js-image'),

	init: function() {
		window.addEventListener('load', () => {
			if (window.innerWidth < 768) {
				return;
			}
		})
	},

	triggerAnimations: function() {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(this.images, {
			scale: 1.5,
			scrollTrigger: {
				trigger: '.banner',
				start: 'top center',
				scrub: true,
				ease: 'slow'
			}
		})
	}
}

export default gsapAnimations;
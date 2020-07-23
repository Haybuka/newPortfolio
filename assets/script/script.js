let burgerNav = document.querySelector('.harmburger');
let nav = document.querySelector('nav');
let li = nav.querySelector('li');
let drop = nav.querySelectorAll('ul');
const lineOne = burgerNav.querySelector('.line-one');
const lineTwo = burgerNav.querySelector('.line-two');
const lineThree = burgerNav.querySelector('.line-three');

// add an event listener to toggle the class
burgerNav.addEventListener('click', function() {
	//toggle height and nav to 100vh
	drop.forEach((n) => {
		n.classList.toggle('hide');
	});
	//end of toggler
	nav.style.height = 'auto';
	//start of gsap
});

//Image Gallery Popups
$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		// other options
		gallery: {
			enabled: true
		}
	});
});

var tlm = gsap.timeline({});
tlm
	.from('.logo h3', {
		y: -200,
		duration: 0.5,
		transformOrigin: '50% 50%',
		opacity: 0,
		ease: Power1.easeInOut
	})
	.from('nav ul li', {
		scaleX: 5,
		duration: 0.5,
		stagger: 0.5,
		ease: Power1.easeInOut,
		opacity: 0
	});
var tls = gsap.timeline({});
tls
	.from('.welcome', {
		y: -200,
		duration: 0.8,
		delay: 0.5,
		stagger: 0.5,
		transformOrigin: '50% 50%',
		opacity: 0,
		ease: Power1.easeInOut
	})
	.from('.digital', {
		scaleY: -2,
		duration: 0.8,
		stagger: 0.5,
		transformOrigin: '50% 50%',
		opacity: 0,
		ease: Power1.easeInOut
	})
	.from('.arrowDown', {
		y: '-=30',
		duration: 0.8,
		stagger: 0.5,
		transformOrigin: '50% 50%',
		opacity: 0,
		ease: Power1.easeInOut,
		yoyo: true,
		repeat: 4
	});

var tl = gsap.timeline({});
tl.from('#about', 1.5, {
	opacity: 0,
	stagger: 1,
	y: '-=50',
	ease: 'bounce'
});
const totalGrid = [
	'.gal-one',
	'.gal-six',
	'.gal-three',
	'.gal-four',
	'.gal-five',
	'.gal-two',
	'.gal-seven',
	'.gal-eight',
	'.gal-nine'
];
gsap.registerPlugin(ScrollTrigger);
var tll = gsap.timeline({});
tll.from(totalGrid, {
	y: 'random(500,-300)',
	x: 'random(300,-500)',
	duration: 10,
	delay: 3,
	stagger: 0.25,
	transformOrigin: '50% 50%',
	opacity: 0,
	ease: Power2.easeInOut,
	scrollTrigger: {
		trigger: '.gallery',
		start: 'top 700',
		end: '1500 200',
		scrub: true,
		markers: true,
		id: 'scrub',
		reverse: true
	}
});

// let proxy = {
// 		skew: 0
// 	},
// 	skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg'), // fast
// 	clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

// ScrollTrigger.create({
// 	onUpdate: (self) => {
// 		let skew = clamp(self.getVelocity() / -300);
// 		// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
// 		if (Math.abs(skew) > Math.abs(proxy.skew)) {
// 			proxy.skew = skew;
// 			gsap.to(proxy, {
// 				skew: 0,
// 				duration: 0.8,
// 				ease: 'power3.easeInOut',
// 				overwrite: true,
// 				onUpdate: () => skewSetter(proxy.skew)
// 			});
// 		}
// 	}
// });

// // make the right edge "stick" to the scroll bar. force3D: true improves performance
// gsap.set('.skewElem', {
// 	transformOrigin: 'right center',
// 	force3D: true
// });

let burgerNav = document.querySelector(".harmburger");
let nav = document.querySelector("nav");
let li = nav.querySelector('li');
let drop = nav.querySelectorAll('ul');
const lineOne = burgerNav.querySelector('.line-one');
const lineTwo = burgerNav.querySelector('.line-two');
const lineThree = burgerNav.querySelector('.line-three');


// add an event listener to toggle the class
burgerNav.addEventListener("click", function () {
	//toggle height and nav to 100vh
	drop.forEach(n => {
		n.classList.toggle('hide')
	})
	//end of toggler
	nav.style.height = "auto";
	//start of gsap

});

//Image Gallery Popups
$(document).ready(function () {
	$('.gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		// other options
		gallery: {
			enabled: true
		}
	});
});

var tlm = gsap.timeline({

});
tlm
	.from('.logo h3', {
		y: -200,
		duration: 0.5,
		transformOrigin: '50% 50%',
		opacity: 0,
		ease: Power1.easeInOut,
	})
	.from('nav ul li', {
		scaleX: 5,
		duration: 0.5,
		stagger: 0.5,
		ease: Power1.easeInOut,
		opacity: 0
	});
var tls = gsap.timeline({});
tls.from('.welcome', {
	y: -200,
	duration: 0.8,
	delay: 0.5,
	stagger: 0.5,
	transformOrigin: '50% 50%',
	opacity: 0,
	ease: Power1.easeInOut,
}).from('.digital', {
	scaleY: -2,
	duration: 0.8,
	stagger: 0.5,
	transformOrigin: '50% 50%',
	opacity: 0,
	ease: Power1.easeInOut,
}).from('.arrowDown', {
	y: "-=30",
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
})
// var lines = [lineOne, lineThree, lineTwo]

// burgerNav.addEventListener('mouseover', () => {
// 	tl
// 		.to(lines, 0.25, {
// 			scaleX: 0.5,
// 			stagger: 1
// 		})
// 		.to(lines, 0.25, {
// 			scaleX: 3,
// 			stagger: 1
// 		})
// 		.to(lines, 0.25, {
// 			scaleX: 0,
// 			stagger: 1
// 		});
// });

// gsap.to('.first,.second,.third', 2, {
// 	y: '-3000',
// 	stagger: 1,
// 	delay: 1.5
// });
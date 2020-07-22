let burgerNav = document.querySelector(".harmburger");
let nav = document.querySelector("nav");
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

// gsap.from('.square', {
// 	y: 'random(-500,200)',
// 	x: 'random(-300,500)',
// 	duration: 2,
// 	stagger: 1.5,
// 	opacity: 0,
// 	backgroundColor: 'yellow'
// });
// var tlm = gsap.timeline(
// 	{
// 		// repeat: 2,
// 		// yoyo: true
// 	}
// );
// tlm.from('.box', {
// 	y: 'random(-500,500)',
// 	x: 'random(-500,500)',
// 	duration: 3,
// 	stagger: 1,
// 	rotation: '+=265',
// 	transformOrigin: '50% 50%',
// 	opacity: 0,
// 	ease: 'elastic',
// 	backgroundColor: 'red'
// });

// // burger.addEventListener("click", function () {
// //     this.classList.add('js-x')
// //     let tl = gsap.timeline({})
// //     tl.to(lineTwo, {
// //         x: -100,
// //         duration: 1
// //     })
// // })
var lines = [lineOne, lineThree, lineTwo]
var tl = gsap.timeline({
	repeat: 1,
	yoyo: true
});
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
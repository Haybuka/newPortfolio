const squares = document.querySelector('.red');
const burger = document.querySelector('.burger');
const lineOne = burger.querySelector('.line-one');
const lineTwo = burger.querySelector('.line-two');
const lineThree = burger.querySelector('.line-three');
gsap.from('.square', {
	y: 'random(-500,200)',
	x: 'random(-300,500)',
	duration: 2,
	stagger: 1.5,
	opacity: 0,
	backgroundColor: 'yellow'
});
var tlm = gsap.timeline(
	{
		// repeat: 2,
		// yoyo: true
	}
);
tlm.from('.box', {
	y: 'random(-500,500)',
	x: 'random(-500,500)',
	duration: 3,
	stagger: 1,
	rotation: '+=265',
	transformOrigin: '50% 50%',
	opacity: 0,
	ease: 'elastic',
	backgroundColor: 'red'
});

// burger.addEventListener("click", function () {
//     this.classList.add('js-x')
//     let tl = gsap.timeline({})
//     tl.to(lineTwo, {
//         x: -100,
//         duration: 1
//     })
// })
var tl = gsap.timeline({
	repeat: 1,
	yoyo: true
});
burger.addEventListener('mouseenter', () => {
	tl
		.to(lineOne, 0.25, {
			scaleX: 0.5
		})
		.to(lineOne, 0.25, {
			scaleX: 3
		})
		.to(lineOne, 0.25, {
			scaleX: 0
		});
});

gsap.to('.first,.second,.third', 2, {
	y: '-3000',
	stagger: 1,
	delay: 1.5
});

const tl1 = new TimelineMax({onUpdate:updatePercentage});
const tl2 = new TimelineMax({onUpdate:updatePercentage});
const tl3 = new TimelineMax({onUpdate:updatePercentage});
const tl4 = new TimelineMax({onUpdate:updatePercentage});
const tl5 = new TimelineMax({onUpdate:updatePercentage});
const tl6 = new TimelineMax({onUpdate:updatePercentage});
const tl7 = new TimelineMax({onUpdate:updatePercentage});

const controller1 = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();
const controller4 = new ScrollMagic.Controller();
const controller5 = new ScrollMagic.Controller();
const controller6 = new ScrollMagic.Controller();
const controller7 = new ScrollMagic.Controller();

tl1.from('#mask1', 0.5, { y: -200, opacity: 0 });
tl1.from('#mask2', 1, { y: -300, opacity: 0 }, '=-.5');

tl2.from('#route_word1', 1, { y: -600, opacity: 0 });
tl2.from('#route_word2', 1, { x: -400, opacity: 0 });
tl2.from('#route_word3', 1, { x: -200, opacity: 0 });

tl3.from('#reasons1', 1, { x: -300, opacity: 0})
tl3.from('#reasons2', 1, { x: -300, opacity: 0})
tl3.from('#reasons3', 1, { x: 300, opacity: 0})
tl3.from('#reasons4', 1, { x: 300, opacity: 0})

tl4.from('#women_men1', 1, { x: -300, opacity: 0})
tl4.from('#women_men2', 1, { x: -300, opacity: 0})
tl4.from('#women_men3', 1, { x: 300, opacity: 0})
tl4.from('#women_men4', 1, { x: 300, opacity: 0})

tl5.from('#ideas1', 1, { x: -300, opacity: 0})
tl5.from('#ideas2', 1, { x: -300, opacity: 0})
tl5.from('#ideas3', 1, { x: 300, opacity: 0})
tl5.from('#ideas4', 1, { x: 300, opacity: 0})


const scene1 = new ScrollMagic.Scene({
    triggerElement: "#mask",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#mask")
    .setTween(tl1)
        .addTo(controller1);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#route_word",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#route_word")
    .setTween(tl2)
    .addTo(controller2);

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#reasons",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#reasons")
    .setTween(tl3)
    .addTo(controller3);

const scene4 = new ScrollMagic.Scene({
    triggerElement: "#women_men",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#women_men")
    .setTween(tl4)
    .addTo(controller4);

const scene5 = new ScrollMagic.Scene({
    triggerElement: "#ideas",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#ideas")
    .setTween(tl5)
    .addTo(controller5);
    
$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slidecontainer", 0.5, {z: -150})		// move back in 3D space
			.to("#slidecontainer", 1,   {x: "-50%"})	// move in to first panel
			.to("#slidecontainer", 0.5, {z: 0})				// move back to origin in 3D space;

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pincontainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin("#pincontainer")
			.setTween(wipeAnimation)
			.addTo(controller);
	});

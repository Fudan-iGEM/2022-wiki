let tl1 = new TimelineMax({onUpdate: updatePercentage});
let tl2 = new TimelineMax({onUpdate: updatePercentage});
let tl3 = new TimelineMax({onUpdate: updatePercentage});
let tl4 = new TimelineMax({onUpdate: updatePercentage});
let tl5 = new TimelineMax({onUpdate: updatePercentage});
let tl6 = new TimelineMax({onUpdate: updatePercentage});
let tl7 = new TimelineMax({onUpdate: updatePercentage});

const controller1 = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();
const controller4 = new ScrollMagic.Controller();
const controller5 = new ScrollMagic.Controller();
const controller6 = new ScrollMagic.Controller();
const controller7 = new ScrollMagic.Controller();

tl1.from('#mask1', 1, { y: 200, opacity: 0 });
tl1.from('#mask2', 1, { y: 300, opacity: 0 });
tl1.from('#mask3', 1, { y: 200, opacity: 0 });
tl1.from('#mask4', 1, { y: 300, opacity: 0 });

tl2.from('#route_word1', 1, { y: 600, opacity: 0 });
tl2.from('#route_word2', 1, { y: 400, opacity: 0 });
tl2.from('#route_word3', 1, { y: 200, opacity: 0 });

tl3.from('#reasons1', 1, { x: -300, opacity: 0})
tl3.from('#reasons2', 1, { x: -300, opacity: 0})
tl3.from('#reasons3', 1, { x: 300, opacity: 0})
tl3.from('#reasons4', 1, { x: 300, opacity: 0})

tl4.from('#women_men1', 1, { x: -300, opacity: 0})
tl4.from('#women_men2', 1, { x: -300, opacity: 0})
tl4.from('#women_men3', 1, { x: 300, opacity: 0})
tl4.from('#women_men4', 1, { x: 300, opacity: 0})
tl4.from('#women_men5', 1, { x: -200, opacity: 0})

tl5.from('#ideas1', 1, { x: -300, opacity: 0})
tl5.from('#ideas2', 1, { x: -300, opacity: 0})
tl5.from('#ideas3', 1, { x: 300, opacity: 0})
tl5.from('#ideas4', 1, { x: 300, opacity: 0})

tl6.from('#health_words1', 1, { y: -200, opacity: 0 });
tl6.from('#health_words2', 1, { y: -400, opacity: 0 });
tl6.from('#health_words3', 1, { y: -600, opacity: 0 });

tl7.from('.menu', 1, { X: 300, opacity: 0})

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#masks",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#masks")
    .setTween(tl1)
    .addTo(controller1);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#routes",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#routes")
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
    
const scene6 = new ScrollMagic.Scene({
    triggerElement: "#data",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#data")
    .setTween(tl6)
    .addTo(controller6);

const scene7 = new ScrollMagic.Scene({
    triggerElement: "#data",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setTween(tl7)
    .addTo(controller7);


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl1.progress();
    tl2.progress();
    tl3.progress();
    tl4.progress();
    tl5.progress();
    tl6.progress();
    tl7.progress();
}

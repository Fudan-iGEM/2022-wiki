const tl1 = new TimelineMax({onUpdate:updatePercentage});
const tl2 = new TimelineMax({onUpdate:updatePercentage});
const tl3 = new TimelineMax({onUpdate:updatePercentage});
const tl4 = new TimelineMax({onUpdate:updatePercentage});
const tl5 = new TimelineMax({onUpdate:updatePercentage});

const controller1 = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();
const controller4 = new ScrollMagic.Controller();
const controller5 = new ScrollMagic.Controller();

tl1.from('blockquote', 0.5, { x: 200, opacity: 0 });
tl1.from('span', 1, { width: 0 }, '=-.5');
tl1.from('#yellow', 1, { x: 300, opacity: 0 }, '=-1');
tl1.from('#orange1', 1, { x: -200, opacity: 0 });

tl2.from('#lightgreen', 1, { x: -200, opacity: 0 });
tl3.from('#darkgreen1', 1, { x: -200, opacity: 0 });

tl4.from('#orange2', 1, { x: -200, opacity: 0 });
tl5.from('#orange3', 1, { x: -200, opacity: 0 });
tl5.from('#darkgreen2', 1, { x: -200, opacity: 0 });

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#animation",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#animation")
    .setTween(tl1)
        .addTo(controller1);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#animation1",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#animation1")
    .setTween(tl2)
    .addTo(controller2);

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#animation2",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#animation2")
    .setTween(tl3)
    .addTo(controller3);

const scene4 = new ScrollMagic.Scene({
    triggerElement: "#animation3",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#animation3")
    .setTween(tl4)
    .addTo(controller4);

const scene5 = new ScrollMagic.Scene({
    triggerElement: "#animation4",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#animation4")
    .setTween(tl5)
    .addTo(controller5);

function updatePercentage () {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl1.progress();
    tl2.progress();
    tl3.progress();
    tl4.progress();
    tl5.progress();
    ////console.log(tl2.progress());
}

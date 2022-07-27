let tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('blockquote', 0.5, {x:200, opacity: 0});
tl.from('span', 1, {width: 0}, '=-.5');
tl.from('#yellow', 1, {x:300, opacity: 0}, '=-1');
tl.from('#darkgreen', 1, {x:-200, opacity: 0}, '=-0.7')


const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".animation")
    .setTween(tl)
        .addTo(controller);

function updatePercentage() {
    tl.progress();
    console.log(tl.progress());

}
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


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl1.progress();
    tl2.progress();
    tl3.progress();
    tl4.progress();
    tl5.progress();
    tl6.progress();
}
/**
 * @author trsoliu
 * @date  2019-12-05
 * @description 校正windows页面在系统进行缩放后导致页面被放大的问题，通常放大比例是125%、150%
 * **/
class DevicePixelRatio {
	constructor() {
		//this.flag = false;
	}
	//获取系统类型
	_getSystem() {
		let flag = false;
		var agent = navigator.userAgent.toLowerCase();
		//		var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
		//		if(isMac) {
		//			return false;
		//		}
		//现只针对windows处理，其它系统暂无该情况，如有，继续在此添加
		if(agent.indexOf("windows") >= 0) {
			return true;
		}
	}
	//获取页面缩放比例
	//	_getDevicePixelRatio() {
	//		let t = this;
	//	}
	//监听方法兼容写法
	_addHandler(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	}
	//校正浏览器缩放比例
	_correct() {
		let t = this;
		//页面devicePixelRatio（设备像素比例）变化后，计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。
		document.getElementsByTagName('body')[0].style.zoom = 1 / window.devicePixelRatio;
	}
	//监听页面缩放
	_watch() {
		let t = this;
		t._addHandler(window, 'resize', function() { //注意这个方法是解决全局有两个window.resize
			//重新校正
			t._correct()
		})
	}
	//初始化页面比例
	init() {
		let t = this;
		if(t._getSystem()) { //判断设备，目前只在windows系统下校正浏览器缩放比例
			//初始化页面校正浏览器缩放比例
			t._correct();
			//开启监听页面缩放
			t._watch();
		}
	}
}



$(document).ready(function () {
new DevicePixelRatio().init();
});

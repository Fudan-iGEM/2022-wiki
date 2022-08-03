let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')
let toggle1 = document.querySelector('.toggle1')
let menuitem = document.querySelector('.menuitem')
toggle.onclick = function () {
    if (menuitem.classList.contains('active')) {


        menuitem.classList.toggle('active');
        menu.classList.toggle('active')

    } else {


        menu.classList.toggle('active');


    }
}
toggle1.onclick = function () {
    menu.classList.toggle('active');
    menuitem.classList.toggle('active');
}




let offsetX = 0, offsetY = 0;

const move = (e) => {
    if (!menu.classList.contains("active")) {
        if (e.type === "touchmove") {
            console.log(e)
            menu.style.top = e.touches[0].clientY - offsetY + "px";
            menu.style.left = e.touches[0].clientX - offsetX + "px";
            e.preventDefault()
        } else {
            menu.style.top = e.clientY - offsetY + "px";
            menu.style.left = e.clientX - offsetX + "px";
            e.preventDefault()
        }
    }
};

const mouseDown = (e) => {
    console.log("mouse down ");

    if (e.type === "mousedown") {
        offsetY = e.clientY - menu.getBoundingClientRect().top;
        offsetX = e.clientX - menu.getBoundingClientRect().left;
        window.addEventListener("mousemove", move);
        e.preventDefault()
    } else {
        offsetY = e.touches[0].clientY - menu.getBoundingClientRect().top;
        offsetX = e.touches[0].clientX - menu.getBoundingClientRect().left;
        window.addEventListener("touchmove", move);
        e.preventDefault()
    }

    menu.style.transition = "none";
};

const mouseUp = (e) => {
    console.log("mouse up");
    if (e.type === "mouseup") {
        window.removeEventListener("mousemove", move);
        offsetX = 0, offsetY = 0;
        e.preventDefault()
    } else {
        window.removeEventListener("touchmove", move);
        offsetX = 0, offsetY = 0;
        e.preventDefault()
    }
    menu.style.transition = "0.3s ease-in-out left";
};

const snapToSide = (e) => {
    const wrapperElement = document.getElementById('main-wrapper');
    const windowWidth = window.innerWidth;
    let currPositionX, currPositionY;
    if (e.type === "touchend") {
        currPositionX = e.changedTouches[0].clientX;
        currPositionY = e.changedTouches[0].clientY;
    } else {
        currPositionX = e.clientX;
        currPositionY = e.clientY;
    }
    if (currPositionY < 50) {
        menu.style.top = 50 + "px";
    }
    if (currPositionY > wrapperElement.clientHeight - 50) {
        menu.style.top = (wrapperElement.clientHeight - 50) + "px";
    }
    if (currPositionX < windowWidth / 2) {
        menu.style.left = 30 + "px";
        menu.classList.remove('right');
        menu.classList.add('left');
    } else {
        menu.style.left = windowWidth - 30 + "px";
        menu.classList.remove('left');
        menu.classList.add('right');
    }
};

menu.addEventListener("mousedown", mouseDown);

menu.addEventListener("mouseup", mouseUp);

menu.addEventListener("touchstart", mouseDown);

menu.addEventListener("touchend", mouseUp);


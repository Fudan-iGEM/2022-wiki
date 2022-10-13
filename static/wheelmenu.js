$(document).ready(function () { // ONLY CALL AFTER READY

let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')
let menuitem = document.querySelector('.menuitem')
let menuitem_second = document.querySelector('.menuitem_second')
let oldpositionx ;
let oldpositiony ;
let offsetX = 0, offsetY = 0;

const move = (e) => {
    if (!menu.classList.contains("active")&&!menuitem.classList.contains("active")) {
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
        oldpositionx = menu.style.left;
        oldpositiony = menu.style.top;
        e.preventDefault()
    } else {
        offsetY = e.touches[0].clientY - menu.getBoundingClientRect().top;
        offsetX = e.touches[0].clientX - menu.getBoundingClientRect().left;
        window.addEventListener("touchmove", move);
        oldpositionx = menu.style.left;
        oldpositiony = menu.style.top;
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
    snapToSide(e)
    menu.style.transition = "0.3s ease-in-out left";
};

const snapToSide = (e) => {
    const windowWidth = window.innerWidth;
    let currPositionX, currPositionY;
    if (e.type === "touchend") {
        currPositionX = e.changedTouches[0].clientX;
        currPositionY = e.changedTouches[0].clientY;
    } else {
        currPositionX = e.clientX;
        currPositionY = e.clientY;
    }
    if (currPositionX < windowWidth / 2) {
        menu.style.left = 0 + "px";
        menuitem.classList.remove('right');
        menuitem.classList.add('left');
        menuitem_second.classList.remove('right');
        menuitem_second.classList.add('left');
        menu.classList.remove('right');
        menu.classList.add('left');
    } else {
        menu.style.left = windowWidth - 200 + "px";
        menuitem.classList.remove('left');
        menuitem.classList.add('right');
        menuitem_second.classList.remove('left');
        menuitem_second.classList.add('right');
        menu.classList.remove('left');
        menu.classList.add('right');
    }
};

if (menu !== null) {
  menu.addEventListener("mousedown", mouseDown);
  menu.addEventListener("mouseup", mouseUp);
  menu.addEventListener("touchstart", mouseDown);
  menu.addEventListener("touchend", mouseUp);
}

if (toggle !== null) {
  toggle.addEventListener("click", (e) =>{
    if (oldpositionx === menu.style.left&&
        oldpositiony === menu.style.top){
        if (menuitem.classList.contains('active')) {


            menuitem.classList.toggle('active');
            menu.classList.toggle('active')
            menuitem_second.classList.toggle('active');

        } else {
            menu.classList.toggle('active');
        }
    }
  })
  toggle.addEventListener("touchend", (e) =>{
    if (oldpositionx === menu.style.left&&
        oldpositiony === menu.style.top){
        if (menuitem.classList.contains('active')) {
            menuitem.classList.toggle('active');
            menuitem_second.classList.toggle('active');
            menu.classList.toggle('active')

        } else {
            menu.classList.toggle('active');
        }
    }
  })
}

}); // ONLY CALL AFTER READY

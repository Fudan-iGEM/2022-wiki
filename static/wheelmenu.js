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




    // getting HTML elements




    // js code to make draggable nav
    function onDrag({movementY}) { //movementY gets mouse vertical value
    const navStyle = window.getComputedStyle(menu), //getting all css style of nav
    navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
    navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
    windHeight = window.innerHeight; // getting window height

    menu.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if(navTop > windHeight - navHeight){
    menu.style.top = `${windHeight - navHeight}px`;
}
}

    //this function will call when user click mouse's button and  move mouse on nav
    menu.addEventListener("mousedown", () =>{
    menu.addEventListener("mousemove", onDrag);
});

    //these function will call when user relase mouse button and leave mouse from nav
    menu.addEventListener("mouseup", () =>{
    menu.removeEventListener("mousemove", onDrag);
});
    menu.addEventListener("mouseleave", () =>{
    menu.removeEventListener("mousemove", onDrag);
});


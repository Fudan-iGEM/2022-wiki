window.addEventListener("load", () => {
    setTimeout(function (){
        const loader = document.querySelector(".loader");

        loader.classList.add("loader--hidden");

        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        });
    },1000)

});

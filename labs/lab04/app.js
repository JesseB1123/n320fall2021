//TODO ANIMATIONS
//1: build in for all items on the screen (nothing to something)
//collect all page elements
var title = document.getElementById("title");
var header = document.getElementById("header");
var galleryItems = document.getElementsByClassName("gallery__item");

//create and run an animation that will fade all elements onto the screen
init();
function init() {
    TweenMax.from(title, {duration: 0.7, delay: 0.5, alpha: 0});
    TweenMax.from(header, {duration: 0.7, delay: 0.8, alpha: 0});
    for(let i = 0; i < galleryItems.length; i++) {
        TweenMax.from(galleryItems[i], {duration: 0.7, delay: 0.8 + (i * 0.1), alpha: 0});
    }
}

//2: a mouseOver/highlight for each of the gallery elements
//3: an exit animation for when a gallery element is clicked
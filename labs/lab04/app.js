//collect all page elements
var title = document.getElementById("title");
var header = document.getElementById("header");
var galleryItems = document.getElementsByClassName("gallery__item");

//TODO ANIMATIONS
//1: build in for all items on the screen (nothing to something)
init();
function init() {
    //load in the title first
    TweenMax.from(title, {duration: 0.7, delay: 0.4, alpha: 0});
    //then the header
    TweenMax.from(header, {duration: 0.7, delay: 0.5, alpha: 0});
    //and finally each galleryItem with a slightly different delay
    for(let i = 0; i < galleryItems.length; i++) {
        TweenMax.from(galleryItems[i], {duration: 0.7, delay: 0.5 + (i * 0.1), alpha: 0});
    }
}

//2: a mouseOver/highlight and mouseOut/un-highlight for each of the gallery elements
for(let i = 0; i < galleryItems.length; i++) {
    //adds a mouseover listener to each individual galleryItem
    galleryItems[i].addEventListener("mouseover", highlight);
    //adds a mouseout listener to each individual galleryItem
    galleryItems[i].addEventListener("mouseout", unHighlight);
}
//function that highlights an event target
function highlight(event) {
    TweenMax.to(event.target, {duration: 0.3, alpha: 0.5});
}
//function the removes the highlight from an event target
function unHighlight(event) {
    TweenMax.to(event.target, {duration: 0.3, alpha: 1});
}

//3: an exit animation for when a gallery element is clicked
//DONT FORGET TO ADD "onClick" PROPERTIES TO HTML
for(let i = 0; i < galleryItems.length; i++) {
    //add the click listener to each individual galleryItem
    galleryItems[i].addEventListener("click", function() {
        //make the galleryItem invisible to the viewer
        TweenMax.to(event.target, {duration: 0.3, alpha: 0});

        //remove the mouseover and mouseout event listeners
        event.target.removeEventListener("mouseover", highlight);
        event.target.removeEventListener("mouseout", unHighlight);
    });
}
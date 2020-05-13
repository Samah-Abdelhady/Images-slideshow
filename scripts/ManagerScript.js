
var slideIndex = 1;

var slides = document.getElementsByClassName("imageHolder");
manualShowSlides(slideIndex);

function plusDivs(imageNumber) {
  manualShowSlides(slideIndex += imageNumber);
}

function manualShowSlides(imageNumber) {
  var i=0;
  if (imageNumber > slides.length) {slideIndex = 1}
  if (imageNumber < 1) {slideIndex = slides.length}
  for (i; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


automaticSlideshow();

function automaticSlideshow() {
  var i=0;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
  setTimeout(automaticSlideshow, 2000);//move between images [slides] every 2 seconds
}
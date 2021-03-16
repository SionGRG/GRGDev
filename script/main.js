// Copyright year
var copyDate = new Date();
document.getElementById("copyYear").innerHTML = copyDate.getFullYear();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("stickyNavbar-menu")
  } else {
    navbar.classList.remove("stickyNavbar-menu");
  }
}

// Get the PDF modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myThumbnail");
var pdfModal = document.getElementById("pdfReader");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  pdfModal.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

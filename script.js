var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector(".navbar"); // select it by the class

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // makes it so scrolling up will show navbar
    navbar.style.top = "0";
  } else {
    // makes it so scrolling down will hide navbar
    navbar.style.top = "-100px"; // fully hides navbar
  }
  prevScrollpos = currentScrollPos;
};

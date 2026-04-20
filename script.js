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

function myFunction1() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const links = document.querySelectorAll('ol li');
/* pressed down effect for brand buttons (makes it more like a button) */
links.forEach(link => {
  link.addEventListener('mousedown', () => {
    link.style.transform = "scale(0.95)";
  });
  
  link.addEventListener('mouseup', () => {
    link.style.transform = "scale(1)";
  });
});

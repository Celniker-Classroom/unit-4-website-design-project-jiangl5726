const button = document.querySelector('input[type="button"]');

// Function to add and remove the pressed class
const addPressed = () => button.classList.add('pressed');
const removePressed = () => button.classList.remove('pressed');

// for desktop
button.addEventListener('mousedown', addPressed);
button.addEventListener('mouseup', removePressed);
button.addEventListener('mouseleave', removePressed);

// for mobile devices
button.addEventListener('touchstart', addPressed);
button.addEventListener('touchend', removePressed);
button.addEventListener('touchcancel', removePressed);

// click action
button.addEventListener('click', () => {
  alert("Clicking on the image to the right of the button will redirect you to Amazon!");
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


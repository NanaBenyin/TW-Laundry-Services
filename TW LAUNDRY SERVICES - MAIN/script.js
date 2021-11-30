var btt = document.getElementById("back-to-top");
var body = document.body;
var docElem = document.documentElement;
var offset = 100;
var docHeight;
var scrollPos;

docHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  body.clientHeight,
  docElem.scrollHeight,
  docElem.offsetHeight
);
if (docHeight != undefined) {
  offset = docHeight / 4;
}
window.addEventListener("scroll", function (event) {
  scrollPos = body.scrollTop || docElem.scrollTop;

  btt.className = scrollPos > offset ? "visible" : "";
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("Right-side")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
function checkForBlank() {
  if (document.getElementById("name").value == "") {
    alert("Please enter your name");
  }
  if (document.getElementById("number").value == "") {
    alert("Please enter your number");
  }
  if (document.getElementById("location").value == "") {
    alert("Please enter your location");
  } else {
    alert("Booking successful. We will call you");
  }
}

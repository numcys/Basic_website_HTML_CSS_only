function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Preloader

var loader = document.querySelector(".loader")
window.addEventListener("load", faded);

function faded(){
    loader.classList.add("disppear");
}
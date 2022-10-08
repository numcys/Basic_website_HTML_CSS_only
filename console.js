var darkmode = document.getElementById("darkmode-icon");

darkmode.onclick = function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        
        darkmode.src = "/img/moon.png";

    }
    else {
        
        darkmode.src = "/img/sun.png";
    }

}
menu = document.querySelector(".menu");
menu.onclick = function () {
    navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
}

close = document.querySelector(".close");
close.onclick = function () {
    navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
}
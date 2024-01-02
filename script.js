document.addEventListener("DOMContentLoaded", function() {
    // Cargar el menú desde menu.html
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.status == 200) {
            document.getElementById("navbar-container").innerHTML = this.responseText;

            // Interactividad del menú móvil
            const hamburger = document.querySelector('.hamburger');
            const menu = document.querySelector('.menu');

            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    menu.classList.toggle('nav-active');
                    this.classList.toggle('toggle');
                });
            }
        }
    };
    xhr.open("GET", "menu.html", true);
    xhr.send();
});
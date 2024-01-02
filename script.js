document.addEventListener("DOMContentLoaded", function() {
        // Cargar el menú desde menu.html
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (this.status == 200) {
                document.getElementById("navbar-container").innerHTML = this.responseText;

                // Una vez cargado el menú, añadir interactividad al menú hamburguesa
                const hamburger = document.querySelector('.hamburger');
                const menu = document.querySelector('.menu');

                hamburger.addEventListener('click', function() {
                    menu.classList.toggle('nav-active');

                    // Transformar el icono de hamburguesa en una X
                    this.classList.toggle('toggle');
                });
            }
        };
        xhr.open("GET", "menu.html", true);
        xhr.send();
    });
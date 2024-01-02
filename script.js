<script>
    document.addEventListener("DOMContentLoaded", function() {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (this.status == 200) {
                document.getElementById("navbar-container").innerHTML = this.responseText;
            }
        };
        xhr.open("GET", "menu.html", true);
        xhr.send();
    });
</script>
const buttons = document.querySelectorAll(".accordion-button");
let i;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const texto = this.nextElementSibling;
        if (texto.style.display === "block") {
            texto.style.display = "none";
        } else {
            texto.style.display = "block";
        }
    });
}
class Dropdown {
    constructor(button) {
        this.button = button;
    }
    show() {
        this.button.addEventListener("click", function() {
            let click = document.querySelector(".dropdown-content");
            if (click.style.display === "block") {
                click.style.display = "none";
            } else {
                click.style.display = "block";
            }
        })
    }
}

const button = document.getElementById("js_button")

let button_selected = new Dropdown(button)
button_selected.show()

console.log(button_selected)
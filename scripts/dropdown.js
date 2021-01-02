class Dropdown {
    constructor(button) {
        this.button = button;
    }
    show() {
        this.button.addEventListener("click", function() {
            let click = document.getElementById("js_content");
            if (click.style.display === "none") {
                click.style.display = "block";
            } else {
                click.style.display = "none";
            }
        })
    }
}

const button = document.getElementById("js_button")

let button_selected = new Dropdown(button)
button_selected.show()

console.log(button_selected)
const button = document.getElementById("js_button")
button.addEventListener("click", function() {
    let click = document.getElementById("js_content");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
})
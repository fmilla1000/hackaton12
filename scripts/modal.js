class Modal {
    constructor(btnA, btnC) {
        this.btnA = btnA;
        this.btnC = btnC;
    }

    mostrarModal() {
        const modal = document.getElementById("js_modal");
        this.btnA.onclick = function() {
            modal.style.display = "block";
        }
    }

    cerrarModal() {
        const modal = document.getElementById("js_modal");
        this.btnC.onclick = function() {
            modal.style.display = "none";
        }
    }

}

const btn = document.getElementById("js_button-modal");
const close = document.querySelector(".close");

let nuevoM = new Modal(btn, close)
nuevoM.mostrarModal()
nuevoM.cerrarModal()

console.log(nuevoM)


const g = document.getElementById("js_guardar");
const c = document.getElementById("js_cancelar");
const modal = document.getElementById("js_modal");

g.onclick = function() {
    modal.style.display = "none";
}

c.onclick = function() {
    modal.style.display = "none";
}
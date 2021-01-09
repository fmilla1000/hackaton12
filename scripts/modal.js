function Modal(options) {
    this.element = document.querySelector(options.element);
    this.elementClose = this.element.querySelector('.close');
    this.elementCancel = this.element.querySelector('.js_cancelar');
    this.elementSave = this.element.querySelector('.button-save')

    this.registerEvens(options)
}

Modal.prototype.open = function() {
    this.element.classList.add('is-active')
}
Modal.prototype.close = function() {
    this.element.classList.remove('is-active')
}

Modal.prototype.registerEvens = function(options) {
    this.elementClose.onclick = () => {
        this.close()
    }

    this.elementCancel.onclick = () => {
        this.close()
    }

    this.elementSave.onclick = () => {
        this.close()
    }
}
const nuevoModal = new Modal({
    element: '.js_modal',
})

const butn = document.querySelector('.button-modal');

butn.onclick = function() {
    nuevoModal.open()
    console.log(nuevoModal)
}
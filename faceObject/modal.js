function Modal(obj) {
    this.view = obj
}

Modal.prototype.init = function () {
    var modalview = document.createElement('div')
    this.modal = modalview
    modalview.style.width = document.body.clientWidth || document.documentElement.clientWidth + 'px'
    modalview.style.height = document.body.clientHeight || document.documentElement.clientHeight + 'px'
    modalview.className = 'modalview'
    document.body.appendChild(modalview)
    this.show()
    this.on()
}
Modal.prototype.show = function () {
    this.modal.style.display = 'block'
    this.view.style.display = 'block'
}

Modal.prototype.hide = function () {
    this.modal.style.display = 'none'
    this.view.style.display = 'none'
}
Modal.prototype.on = function () {
    var that = this
    this.modal.addEventListener('click', function(){
        that.hide()
    }, false)
}
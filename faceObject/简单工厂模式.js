//创建同一类对象。
function createBook(name, time, type) {
    var o = new Object()
    o.name = name
    o.time = time
    o.type = type
    o.getName = function () {
        console.log(this.name)
    }
    return o
}


function LoginItem(dom, error, errDom) {
    this.dom = dom
    this.error = error
    this.errorDom = errDom
    this.init() //绑定事件
}
password.prototype.showError = function () {
    this.errorDom.innerHTML = this.error
    this.errorDom.style.display = 'block'
}
password.prototype.init = function () {
    var that = this
    this.dom.on(blur, function () {
        //检测是否满足条件,返回布尔值
        Validator('条件名', that.dom.value) ? null : that.showError()
    } )
}


需要事件模块
需要验证模块
需要Alert模块，如果事件是绑定在最后的登录按钮。

function loginItem (dom, error, errDom) {
    var o = new Object()
    o.dom = dom
    o.error = error
    o.errorDom = errDom
    o.showError = function () {
        this.errorDom.innerHTML = this.error
        this.errorDom.style.display = 'block'
    }
    o.init = function () {
        var that = this
        this.dom.on(blur, function () {
            Validator('条件名', that.dom.value) ? null : that.showError()
        })
    }
    return o
}
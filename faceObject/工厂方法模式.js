//工厂方法模式
//将实际创建对象工作推迟到子类中。这样核心类就变成了抽象类
//
//安全的工厂模式。为了防止有的人调用不用new 的方法。
var Demo = function () {
    if (!this instanceof Demo) {
        return new Demo()
    }
}
//这里的this就是window
var d = Demo()


//这样添加方法直接写在原型中即可。
var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content)
        return s
    } else {
        return new Factory(type, content)
    }
}

Factory.prototype = {
    Java: function (content) {this.content = content},
    UI: function (content) {this.content = content}
}
Factory('Java','hahha')

//这个和策略模式比较像。
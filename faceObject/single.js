//初始化分支  命名空间就是单例
var MyApp = {}
MyApp.event = {
    addListener: null,
    removeListener: null
}

//静态变量  只能访问不能修改 放在闭包中,直接执行只有获取的方式。没有设置的方式。
var Conf = (function () {
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 1
    }
    return {
        get: function (name) {
            return conf[name] ? conf[name] : null
        }
    }
})()


//惰性单例
var LazySingle = (function () {
    var _instance = null
    //如果是new一个对象的确得写在这个单例里
    function Single () {
        return {
            publicMethod: function () {},
            publicProperty: '1.0'
        }
    }
    return function () {
        if(!_instance) {
            _instance = new Single()
        }
        return _instance
    }
})()

//这个单例的实现方式比较偏向具体js实现过程
var lazySingle = function (fn) {
    var _instance = null
    return function () {
        if(!_instance) {
            _instance = fn.apply(this,arguments)
        }
        return _instance
    }
}

var single = lazySingle(createDiv)
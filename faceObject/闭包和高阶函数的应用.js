//闭包的运用
//下面三段代码的类似性非常有意思
var extend = function () {
    var value = 0
    return {
        call: function () {
            value++
            console.log(value)
        }
    }
}

var extent = extend()
extend.call() //1


var extent = {
    value: 0,
    call: function () {
        this.value++
        console.log(value)
    }
}
extent.call() //1 


var Extend = function () {
    this.value = 0
}
Extent.prototype.call = function () {
    this.value++
    console.log(this.value)
}
var extent = new Extend()
extent.call()

//通常用面向对象实现的功能,最后是可以用闭包来实现的。
//
//高阶函数
//1、回调函数 ,函数作为参数
//2、函数作为返回值输出
var isType = (function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type +']'
    }
})
var isString = isType('String')
var isArray = isArray('Array')
console.log(isArray([1, 2, 3]))

//AOP 面向切面编程  把一些跟核心业务逻辑模块无关的功能抽离出来。 都是返回原来的函数
Function.prototype.before = function (beforefn) {
    var _self = this
    return function () {
        beforefn.apply(this, arguments)
        return _self.apply(this, arguments)
    }
}

Function.prototype.after = function (afterfn) {
    var _self = this
    return function () {
        var ret = _self.apply(this, arguments)
        afterfn.apply(this, arguments)
        return ret
    }
}

//高阶函数的柯里化应用curring
var currying = function (fn) {
    var args = []
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
            return arguments.callee //返回原来的函数
        }
    }
}
//反柯里化  调用某个对象的某个方法，让一个对象拥有其他其他对象的方法
Function.prototype.uncurring = function () {
    var self = this
    return function () {
        var obj = Array.prototype.shift.call(arguments)
        return self.apply(obj, arguments)
    }
}

var push = Array.prototype.push.uncurring() //这个方法就可以直接使用

//另外一种实现方式
Function.prototype.uncurrying = function () {
    var self = this
    return function () {
        return Function.prototype.call.apply(self, arguments)
    }
}

//函数节流
/**
 * [throttle description]
 * @param  {Function} fn       [description] 要执行的函数
 * @param  {[type]}   interval [description] 间隔
 * @return {[type]}            [description]
 */
var throttle = function (fn, interval) {
    var _self = fn
    var timer
    var firstTime = true
    return function () {
        var self = this
        var args = arguments
        if (firstTime) {
            fn.apply(self, args)
            return firstTime = false
        }
        if (timer) {
            return false
        }
        timer = setTimeout(function () {
            clearTimeout(timer)
            timer = null
            fn.apply(self, args)
        }, interval || 500)
    }
}

//分时函数 短时间内向页面中添加大量的DOM节点会让浏览器吃不消。可能会卡死。可以分成每隔一个固定阶段的事件创造相当数量的节点。
/**
 * [timeChunk description] 这个关注的重点是ary数组是会一直变的。要注意运用
 * @param  {[type]}   ary   [description] 数据
 * @param  {Function} fn    [description] 创造节点逻辑的函数
 * @param  {[type]}   count [description] 表示创建的节点数量
 * @return {[type]}         [description]
 */ 
var timeChunk = function (ary, fn, count) {
    var t
    var start = function () {
        for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
            var obj = ary.shift() //注意这里的会改变ary
            fn(obj)
        }
    }
    return function () {
        t = setInterval(function () {
            if (ary.length === 0) {//这里说明所有的节点都渲染好了
                return clearInterval(t)
            }
            start()
        }, 200)
    }
}

//惰性加载函数
var addEvent = function (elem, type, handler) {
    if(window.addEventListener) {
        addEvent = function (elem, type, handler) {
            elem.addEventListener(type, handler, false)
        }
    } else if (window.attachEvent) {
        addEvent = function (elem, type, handler) {
            elem.attachEvent('on'+type, handler)
        }
    }
    addEvent(elem, type, handler) //执行一遍返回是一个函数
}
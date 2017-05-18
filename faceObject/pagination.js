//这个可以处理ajax数据缓存
var createProxyFactory = function (type, fn) {
    var cahce = {}
    return function () {
        if (cache[type]) {
            return cache[type]
        }
        return cache[type] = fn.call(this,arguments)
    }
}


//对象池,解决创建太多的dom。根据显示的数目来创建条目
var pageFunc = (function (fn) {
    var pager = 0
    var num = 5
    var arr = []
    return function () {
        if (arr.length < num) {
            arr.push(fn.call(this, arguments))
        } else {
            var dom = arr.shift()
            arr.push(dom)
            return dom
        }
    }
})()


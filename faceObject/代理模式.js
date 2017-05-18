// 代理模式是为一个对象提供一个代用品或者占位符。以便控制对它的访问 
//保护代理  过滤作用
//虚拟代理 实现图片预加载


var myImage = (function () {
    var imageNode = document.createElement('img')
    document.body.appendChild(imageNode)
    return {
        setSrc: function (src) {
            imgNode.src = src
        }
    }
})()

var proxyImage = (function () {
    var img = new Image()
    img.onload = function () {
        myImage.setSrc(this.src)
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('file://c')
            img.src = src
        }
    }
})()

//单例模式其实就是还是需要原来程序的接口。只是对内容作了补充，然后最后控制是否是进行这一步。实际是添加了新的行为。
//代理和本地接口的一致性。这是为了可能以后因为某些原因不需要代理的时候
//如果代理最后的返回是一个对象或者是一个匿名函数都可以认为是一致的。

//虚拟代理合并http请求
var synchronousFile = function (id) {
    console.log('开始同步文件,id为:' + id)
}

var proxySychronousFile = (function () {
    var cache = []
    var timer
    return function (id) {
        cache.push(id)
        if (timer) return 
        time = setTimeout(function () {
            synchronousFile(cache.join('id'))
            clearTimeout(timer)
            timer = null
            cache.length = 0
        }, 2000)
    }
})()


//虚拟代理应用在惰性加载中
//缓存代理 对之前的结果进行缓存 这个可以用在分页缓存中
var createProxy = function (fn) {
    var cache = {}
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = fn.apply(this, arguments)
    }
}
//定义在不改变对象的前提下添加新的操作方法。
//主要是call和apply的使用  利用回调函数
//从而造成类数组对象
var Vistor = (function () {
    return {
        splice: function () {
            var args = Array.prototype.splice.call(arguments, 1)
            return Array.prototype.splice.apply(arguments[0], args)
        },
        push: function () {
            var len = arguments[0].length
            var args = this.splice(arguments, 1)
            arguments[0].length = len + args.length
            return Array.prototype.push.apply(arguments[0], args)
        },
        pop: function () {
            //这里不需要改变length.因为在push已经创建了length属性。这样不容易改变
            return Array.prototype.pop.call(arguments[0])
        }
    }
})()


// var a = new Object()
// console.log(a.length)
// Vistor.push(a, 1, 2, 3, 4)
// console.log(a.length)
// Vistor.pop(a)
// console.log(a.length)

//低版本IE的attachEvent中的this是window
function bindIEEvent (dom, type, fn, data) {
    var data = data || {}
    dom.attachEvent('on' + type, function (e) {
        fn.call(dom, e, data)
    })
}
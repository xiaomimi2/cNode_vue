var each = function (ary, callback) {
    for (var i = 0, l = ary.length; i < l; i++) {
        callback.call(ary[i], i, ary[i])
    }
}


//迭代器数组，对象迭代器
var eachArray = function (arr, fn) {
    var i = 0
    var len = arr.length
    for (; i < len; i++) {
        if (fn.call(arr[i], i, arr[i] === false)) {
            break;
        }
    }
}

var eachObject = function (obj, fn) {
    for (var i in obj) {
        if (fn.call(obj[i], i, obj[i]) === false) {
            break;
        }
    }
}
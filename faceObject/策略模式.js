//主要用于处理多条if语句
var strategies = {
    's' : function (salary) {
        return salary *4
    },
    'A': function (salary) {
        return salary *4
    }
}


//实现动画效果 运动算法
var strategies = {
    isNotEmpty: function (value, errorMsg) {
        if(value === '') {
            return errorMsg
        }
    },
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg
        }
    }
}
//缓存验证的方法 
var Validator = function () {
    this.cache = []
}
//添加验证的条目
Validator.prototype.add = function (dom, value, rule, errorMsg) {
    var ary = rule.split(':')
    this.cache(function () {
        var stategy = ary.shift()
        ary.unshift(dom.value)
        ary.push(errorMsg)
        return strategies[strategy].apply(dom, ary)
    })
}
//开始验证 验证有顺序加入的要求
Validator.prototype.start = function () {
    for (var i = 0,validatorFunc; validatorFunc = this.cache[i++]) {
        var msg = validatorFunc()
        if (msg) {
            return msg
        }
    }
}

//这个只返回结果的正确与否
var InputStrategy = function () {
    var strategies = {
        isNotEmpty: function (value, errorMsg) {
            return value === ''
        },
        minLength: function (value, length, errorMsg) {
            return value.length < length
        }
    }
    return {
        check : function (type, value) {
            value = value.replace(/^\s+|\s+$/g, '')//去除收尾空白符
            return strategy[type] ? strategy[type](value) : '没有该类型的检测方法'
        },
        addStrategy: function (type, fn) {
            strategy[type] = fn //扩展算法
        }
    }
}
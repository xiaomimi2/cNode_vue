var Event = (function () {
    var clientList = {}
    var listen
    var trigger
    var remove
    listen = function (key, fn) {
        if(!clientList[key]) {
            clientList[key] = []
        }
        clientList[key].push(fn)
    }
    trigger = function () {
        var key = Array.prototype.shift.call(arguments)
        var fns = clientList[key]
        if (!fns || fns.length === 0) return false
        for (var i = 0,fn; fn = fns[i++]) {
            fn.apply(this, arguments)
        }
    }
    remove = function (key, fn) {
        var fns = clientList[key]
        if (!fns) {
            return false 
        } 
        if(!fn) {
            fns && (fns.length = 0)
        } else {
            for (var l = fns.length - 1; l > 0; l--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    fns.splice(l, 1) //这里没有break是因为可能相同的函数还是会添加上去的。
                }
            }
        }

        return {
            listen: listen,
            remove: remove,
            trigger: trigger
        }
    }
})()

//类似于离线功能。之前没有发布的消息在订阅之后可以收到
var Event = (function () {
    var global = this
    var Event, _default = 'default'
    Event = function () {
        var _slice = Array.prototype.slice
        var _shift = Array.prototype.shift
        var _unshift = Array.prototype.unshift
        var nameSpaceCache = {}
        var each = function (ary, fn) {
            var ret
            for (var i = 0, l = ary.length; i < l; i++) {
                var n = ary[i]
                ret = fn.call(n, i, n)
            }
            return ret
        }
        var _listen = function (key, fn, cache) {
            if (!cache[key]) {
                cache[key] = []
            }
            cache[key].push(fn)
        }
        var _remove = function (key, fn, cache) {
            if (cache[key]) {
                if (fn) {
                    for (var i = cache[key].length; i >= 0; i--) {
                        if(cache[key][i] === fn) {
                            cache[key].splice(i, 1)
                        }
                    }
                } else {
                    cache[key] = []
                }
            } 
        }
        var _trigger = function () {
            var cache = _shift.call(arguments)
            var key = _shift.call(arguments)
            var args = arguments
            var _self = this
            var stack = cache[key]
            if (!stack || stack.length) {
                return
            }
            return each(stack, function () {
                return this.apply(_self, args)
            })
        }
        var _create = function (namespace) {
            var namespace = namespace || _default
            var cache = {}
            var offlineStack = []
            var ret = {
                listen: function (key, fn, last) {
                    _listen(key, fn, cache)
                    if (offlineStack === null) {
                        return
                    }
                    //只执行最后一个
                    if(last === 'last') {
                        offlineStack && offlineStack.pop()()
                    } else {
                        each(offlineStack, function() {
                            this()
                        })
                    }
                    offlineStack = null
                },
                one: function (key, fn, last) {
                    _remove(key, cache)
                    this.listen(key, fn, last)
                },
                remove: function (key, fn) {
                    _remove(key, fn, cache)
                },
                trigger: function () {
                    var _self = this
                    var fn, args
                    _unshift.call(arguments, cache)
                    args = arguments
                    fn = function () {
                        return _trigger.apply(_self, args)
                    }
                    if (offlineStack) {
                        return offlineStack.push(fn) //触发的函数。
                    }
                    return fn()
                }
            }
            return 
        }
    }
})()
//和发布订阅模式在一定程度上是类似的。
//发布订阅模式是对象之间在沟通的。中介者模式是直接是包括了所有对象。所有的业务逻辑都在里面。其他对象都是向这个中介者发送消息。而不是向某个对象发送到了。
//这个应该是适用于对象太多个的情况,解决相互之间的耦合关系太紧密的问题。
//中介者只能是消息发送的一方。只有活跃对象可以订阅消息。
var Mediator = function () {
    var _msg = {}
    return {
        register: function (type, action) {
            if(_msg[type]) {
                _msg[type].push(action)
            } else {
                _msg[type] = []
                _msg[type].push(action)
            }
        },
        send: function (type) {
            if(_msg[type]) {
                for (var i = 0, len = _msg[type].length; i < len; i++) {
                    _msg[type][i] && _msg[type][i]()
                }
            }
        }
    }
}


//有的人是直接把业务逻辑写进这个中介者。有的是另外在外面调用这个中介者。
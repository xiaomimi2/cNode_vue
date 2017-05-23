var data = {name : 'kingeng'}
observe(data)
data.name = 'dmq'

function Observer(data) {
    this.data = data
    this.walk(data)
}
Observer.prototype = {
    walk: function (data) {
        var me = this
        Object.keys(data).forEach(function (key) {
            me.convert(key, data[key])
        })
    }.
    convert: function (key, value) {
        this.defineReactive(this.data, key, val)
    }
}
function observe(data) {
    if(!data || typeof data !== 'object') {
        return
    }
    return new Observer(data)
}



function defineReactive(data, key, val) {
    var childObj = observe(val)
    var dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,//不再用define
        get: function () {
           if(Dep.target) {
             dep.depend()
           }
           return val
        },
        set: function (newval) {
            if(val == newval) return
            console.log('监听到值的变化了')
            val = newval
            childObj = observe(newval)//对新设置的值也要进行监听。
            dep.notify()
        }
    })
}
var uid = 0
function Dep () {
    this.id = uid++
    this.subs = []
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub)
    },
    depend: function () {
        Dep.target.addDep(this)//为什么这里的this是watcher
    },
    removeSub: function (sub) {
        var index = this.subs.indexOf(sub)
        if(index != -1) {
            this.subs.splice(index, 1)
        }
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update()
        })
    }
}

Dep.target = null
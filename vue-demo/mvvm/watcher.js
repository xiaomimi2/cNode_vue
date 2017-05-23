function Watcher(vm, expOrFn, cb) {
    this.cb = cb//回调函数
    this.vm = vm //实例对象
    this.expOrFn = expOrFn //表达式
    this.depIds = {}
    if (typeof expOrFn === 'function') {
        this.getter = expOrFn
    } else {
        this.getter = this.parseGetter(expOrFn)
    }
    this.value = this.get()
}

Watcher.prototype = {
    update: function () {
        this.run()
    },
    run: function () {
        var value = this.get()
        var oldVal = this.value
        if (value !== oldvalue) {
            this.value = value
            this.cb.call(this.vm, value, oldvalue)
        }
    },
    addDep: function (dep) {
        if(!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this)//这里是订阅的watcher对象。
            this.depIds[dep.id] = dep//这个是那个订阅者对象。
        }
    },
    get: function () {
        Dep.target = this
        var value = this.getter.call(this.vm, this.vm)//为什么传了两个实例vm;这里说明了vm.getter方法被调用。这里指定了this为this.vm
        Dep.target = null
        return value
    },
    parseGetter: function (exp) {
        if(/[^\w.$]/.test(exp)) return
        var exps = exp.split('.')
        return function (obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if(!obj) return
                obj = obj[exps[i]]
            }
            return obj
        } 
    }
}
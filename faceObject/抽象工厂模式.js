//抽象工厂其实是一个实现子类继承父类的方法。这个主要还是为了防止对象漏写覆盖的方法。安全

var VehicleFactory = function (subType, superType) {
    if (typeof VehicleFactory[superType] === 'function') {
        function F() {}
        F.prototype = new VehicleFactory[superType]()
        subType.constructor = subType
        subType.prototype = new F()
    } else {
        throw new Error('未创建该抽象类')
    }
}

VehicleFactory.Car = function () {
    this.type = 'car'
}

VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不可调用') //这个是重点
    },
    getSpeed: function () {
        return new Error('抽象方法不可调用')
    }
}


var BMW = function (price, speed) {
    this.price = price
    this.speed = speed
}
VehicleFactory(BMW, 'Car') //相当于只是继承了原型
BMW.prototype.getPrice = function () {
    return this.price
}
BMW.prototype.getSpeed = function () {
    return this.speed
}
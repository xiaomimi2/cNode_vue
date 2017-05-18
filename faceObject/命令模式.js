//这个我觉得一定程度上和组合模式非常像。但是这个就是更加细化的感觉
var Menubar = {
    refresh: function () {
        console.log('刷新菜单目录')
    }
}
var SubMenu = {
    add: function () {
        console.log('增加子菜单')
    },
    del: function () {
        console.log('删除子菜单')
    }
}

var RefreshMenuBarCommand = function (receiver) {
    this.receiver = receiver
}
RefreshMenuBarCommand.prototype.execute = function () {
    this.receiver.fresh()
}

var AddMenuCommand = function (receiver) {
    this.receiver = receiver
}
AddMenuCommand.prototype.execute = function () {
    this.receiver.add()
}
var DelMenuCommand = function (receiver) {
    this.receiver = receiver
}

var DelMenuCommand.prototype.execute = function () {
    this.receiver.del()
}

//一个命令干一件事。类似于策略啊
//命名空间
var MyApp = {}
MyApp.namespace = function (name) {
    var parts = name.split('.')
    var current = MyApp
    var len = parts.length
    for (var i = 0, i < len; i++) {
        if (!current[parts[i]]) {
            current[parts[i]] = {}
        }
        current = current[parts[i]]
    }
}
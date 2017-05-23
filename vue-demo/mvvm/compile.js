function Compile (el, vm) {
    this.$vm = vm
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    if (this.$el) { //有了el才开始渲染。看图
        this.$fragment = this.node2Fragment(this.$el)
        this.init()
        this.$el.appendChild(this.$fragment)
    }
}

Compile.prototype = {
    node2Fragment: function (el) {
        var fragment = document.createDocumentFragment()
        var child
        while (child = el.firstChild) {//el是外层的节点。所以vue的模板要求必须有一个div包裹。感觉这一句是无限循环啊。
            fragment.appendChild(child)
        }
        return fragment
    },
    init: function () {
        this.compileElement(this.$fragment)
    },
    compileElement: function (el) {
        var childNodes = el.childNodes
        var me = this
        [].slice.call(childNodes).forEach(function (node) {
            var text = node.textContent
            var reg = /\{\{(.*)\}\}/
            if(me.isElementNode(node)) {
                me.compile(node)
            } else if (me.isTextNode(node) && reg.test(text)) {
                me.compileText(node, RegExp.$1)//最近的一个匹配值。这个在我的chrome上竟然没有值。
            }
            if(node.childNodes && node.childNodes.length) {
                me.compileElement(node)
            }
        })
    },
    compile: function (node) {
        var nodeAttrs = node.attributes//类数组函数
        var me = this
        [].slice.call(nodeAttrs).forEach(function(attr) {
            var attrName = attr.name
            if (me.isDirective(attrName)) {
                var exp = attr.value //指令后面绑定的值。具体的值
                var dir = attrName.substring(2)//v-去除 指令类型
                if (m.isEventDirectives(dir)) {
                    compileUtil.eventHandler(node, me.$vm, exp, dir)
                } else {
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp, dir)//compileUtil感觉是一个对象啊
                }
                node.removeAttribute(attrName)
            }
        })
    },
    compileText: function (node, exp) {
        compileUtil.text(node, this.$vm, exp)
    },
    isDirective: function (attr) {
        return attr.indexOf('v-') == 0 //是不是以v-开头的
    },
    isEventDirectives: function (dir) {
        return dir.indexOf('on') === 0
    },
    isElementNode: function (node) {
        return node.nodeType === 1
    },
    isTextNode: function (node) {
        return node.nodeType === 3
    }
    var compileUtil = {
        text: function (node, vm, exp) {
            this.bind(node, vm, exp, 'text')
        },
        html: function (node, vm, exp) {
            this.bind(node, vm, exp, 'html')
        },
        model: function (node, vm, exp) {
            this.bind(node, vm, exp, 'model')
            var me = this
            var val = this.getVMVal(vm, exp)
            node.addEventListener('input', function (e) {
                var newValue = e.target.value
                if(val === newValue) return
                me._setVMVal(vm, exp, newValue)
                val = newValue
            })
        }

    }
}
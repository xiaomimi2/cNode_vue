export default function Parser (vm, node, desc, scope) {
    this.vm = vm
    this.node = node
    this.desc = desc
    this.scope = scope
    this.parse()
}

var pp = Parser.prototype

pp.bind = function () {
    this.directive = new Directive(this)
    this.directive.mount()
}
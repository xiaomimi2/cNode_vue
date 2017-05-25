import Water from './watcher'


export default function Directives(parser) {
    this.parser = parser
    this.scope = parser.scope
}

let dp = Directives.prototype

dp.mount = function () {
    let parser = this.parser
    let watcher = this.watcher = new Watcher(parser.vm, parser.desc, this.update, this)
    this.update(watcher.value)
}

dp.destroy = function () {
    this.watcher.destroy()
    this.parser = this.scope = null
}
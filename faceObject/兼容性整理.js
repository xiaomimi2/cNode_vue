var myEvent = {
    getId: function (id, parent) {
        if(parent)  return parent.getElementById(id)
        return document.getElementById(id)
    },
    getTag: function (tag, parent) {
        if(parent)  return parent.getElementsByTagName(tag)
        return document.getElementsByTagName(tag)
    },
    getEvent: function (ev) {
        return ev || window.event
    },
    addHandler: function (elem, type, handler) {
        if(window.addEventListener) {
            this.addHandler = function (elem, type, handler) {
                elem.addEventListener(type, handler, false)
            }
        } else if(window.attachEvent) {
            this.addHandler = function (elem, type, handler) {
                elem.attachEvent('on' + type, function() {
                    handler.apply(elem, arguments)
                })
            }
        } else {
            this.addHandler = function (elem, type, handler) {
                elem['on' + type] = handler
            }
        }
        this.addHandler(elem, type, handler)
    },
    getCharCode: function (event) {
        //在firefox中在onkeypress事件中，永远keyCode是0.charCode才可以取得正确的值
        if(typeof event.charCode === 'number') {
            return event.charCode
        } else {
            return event.keyCode
        }
    },
    getTarget: function (event) {
        return event.target || event.srcElement
    },
    preventDefault: function (event) {
        if(event.preventDefault){
            event.preventDefault()
        } else {
            event.returnValue = false
        }
    },
    removeHander: function (elem, type, handler) {
        if(window.removeEventListener) {
            this.removeHander = function (elem, type, handler) {
                elem.removeEventListener(type, handler, false)
            }
        } else if(window.detachEvent) {
            this.removeHander = function (elem, type, handler) {
                elem.detachEvent('on' + type, function() {
                    handler.apply(elem, arguments)
                })
            }
        } else {
            this.removeHander = function (elem, type, handler) {
                elem['on' + type] = null
            }
        }
        this.removeHander(elem, type, handler)
    },
    getRelatedTarget: function (event) {
        //这个用于发生mouseover，mouseout事件涉及的元素
        if (event.relatedTarget) {
            return event.relatedTarget //IE不支持
        } else if (event.toElement) {
            return event.toElement
        } else if (event.fromEvent){
            return event.fromEvent
        } else {
            return null
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    },
    setClipboardText: function (event, value) {
        if (event.clipboardData) {
            event.clipboardData.setData('text/plain', value)
        } else if(window.clipboardData) {
            window.clipboardData.setData('text', value)
        }
    }
}
'use strict'
import _ from 'lodash'
import moment from 'moment'

const MillisecondToDate = (time) => {
    if (time !== null && time !== '') {
        return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
}

const storageToLocal = (function () {
    var saveToLocal = (key, value) => {
        value = JSON.stringify(value)
        if (typeof key === 'string') {
            window.localStorage.setItem(key, value)
        } else {
            return false
        }
    }
    var getFromSave = (key) => {
        if (typeof key !== 'string') return
        return JSON.parse(window.localStorage.getItem(key))
    }
    var clearSaveByTime = (key, timekey, timeout) => {
        if (getFromSave(key) && getFromSave(key)[timekey]) {
            var before = getFromSave(key)[timekey]
            var now = +new Date()
            if (now - before > timeout) {
                window.localStorage.removeItem(key)
            }
        }
    }
    return {
        saveToLocal: saveToLocal,
        getFromSave: getFromSave,
        clearSaveByTime: clearSaveByTime
    }
})()

const getIndexOfArray = (key, value, array) => {
    return _.findIndex(array, key, value)
}

exports.store = storageToLocal
exports.MillisecondToDate = MillisecondToDate
exports.getIndexOfArray = getIndexOfArray
exports.throttle = (fn, wait, mustRun) => {
    let timeout
    let startTime = new Date()
    return function () {
        let context = this
        let args = arguments
        let curTime = new Date()
        clearTimeout(timeout)
        if (curTime - startTime >= mustRun) {
            fn.apply(context, args)
            startTime = curTime
        } else {
            timeout = setTimeout(fn, wait)
        }
    }
}

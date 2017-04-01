'use strict';

import _ from  'lodash';
import Timeago from 'timeago.js';



exports.getLastTimeStr = (time, friendly) => {
	if(friendly) {
		return MillisecondToDate(time)
	} else {
		return fmtData(new Date(time), 'yyyy-MM-dd hh:mm')
	}
}

// var time = Timeago()
// console.log(time.format('2016-06-12'))//九个月之前
// console.log(time.format(Date.now()-11*1000*60*60))

// var time = Timeago('2016-06-10 12:12:12')
// console.log(time.format('2016=06-12','zh_CN'))


// const fmtData = (date, fmt) => {

// }
// 
const MillisecondToDate = (time) => {
	var str = '';
	if(time !== null && time !== ''){
		let timeagoInstance = new Timeago();
		str = timeagoInstance.format(time,'zh_CN')
	}
}

exports.getTabInfo = (tab, good, top, isClass) => {
	let str = '';
	let className = '';
	if (top) {
		str = '置顶';
		className = 'top';
	} else if (good) {
		str = '精华' ;
		className = 'good'
	} else {
		switch (tab) {
			case 'share' :
				str = '分享';
				className = 'share';
				break;
			case 'ask' :
				str = "问答";
				className = 'ask';
				break;
			case 'job' :
				str = '招聘';
				className = 'job';
				break;
			case 'good' :
				str = "精华";
				className = 'good';
				break;
			default :
				break;
		}
	}
}
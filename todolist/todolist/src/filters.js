import util from './lib/util.js'

/**
 * [description] 格式化事件
 * @param  {[type]} time     [description]
 * @param  {[type]} friendly [description] 是否从现在算
 * @return {[type]}          [description]
 */
exports.getLastTimeStr = (time, friendly) => {
    if (friendly) {
        return MillisecondToDate(time);
    } else {
        return fmtDate(new Date(time), 'yyyy-MM-dd hh:mm');
    }
};


exports.getTabStr = (tab, good, top, isClass) => {
	let str = '';
	let className = '';
	if (top) {
		str = '置顶';
		className = 'top';
	} else {
		switch (tab) {
			case 'share':
				str = '分享';
				className = 'share';
				break;
			case 'ask':
				str = '问答';
				className = 'ask';
				break;
			case 'job':
				str = '招聘';
				className = 'job';
				break;
			case 'good':
				str = '精华';
				className = 'good';
				break;
			default:
				str = '暂无';
				className = 'default';
				break;
		}
	}
	return isClass? className : str;
}

exports.getTabClassName 
import { isFunc, warn } from '../../util';
import Parser, { linkParser } from '../parser';

/**
 * v-custom 指令解析模块  这是自定义指令模块
 */
export function VCustom () {
	Parser.apply(this, arguments);
}

let vcustom = linkParser(VCustom);

/**
 * 解析 v-custom 指令
 */
vcustom.parse = function () {
	let desc = this.desc;
	let update = this.vm.$customs[desc.args];//这个$custom还是非常让我困惑的。

	if (!isFunc(update)) {
		return warn('Custom directive ['+ desc.attr +'] must define with a refresh function!');
	}

	this.update = update;
	this.bind();//这一句都是为了绑定一个new Directive
}

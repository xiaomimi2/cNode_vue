import Vue from 'vue';
import $ from 'webpack-zepto';
/*开发插件 这个对象就是plugin*/
export default{
	install() {
		let timer = null;
		Vue.prototype.$alert = (msg) => {
			$('#alertWeek').remove();
			let $alert = $("<div class='week-alert' id ='alertWeek'></div>");
			$('body').append($alert);
			$alert.html(msg);
			$alert.addClass('alert-show');
			clearTimeout(timer);//防止多次触发alert
			//2s后关闭提示框
			timer = setTimeout(()=>{
				$alert.remove();
			},2000)
		}
	}
}
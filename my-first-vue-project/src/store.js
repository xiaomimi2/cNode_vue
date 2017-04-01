const STORAGE_KEY='todos_vuejs'
export default{
	fecth:function(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY || '[]'))
	},
	save:function(items){
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
}
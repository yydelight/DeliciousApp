const KEY = 'vuejs'
export default {
	fetch () {
		return JSON.parse(window.localStorage.getItem(
			KEY) || '[]' )
	},
	save (items) {
		window.localStorage.setItem(KEY,JSON.stringify(items))
	}
}
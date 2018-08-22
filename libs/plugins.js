import dayjs from 'dayjs'

const install = (Vue) => {
	// register filters
	Vue.filter('date', v => dayjs(v).format('YYYY-MM-DD HH:mm:ss'))
}

export default { install }

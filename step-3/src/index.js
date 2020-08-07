import $ from 'jquery'
import moment from 'moment'

moment.locale('zh-cn')
const r = moment().startOf('day').fromNow()
console.log(`当前时间 ${Date.now()}: debug 的数据是 r: `, r)

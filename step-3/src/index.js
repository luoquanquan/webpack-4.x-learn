import $ from 'jquery'
import moment from 'moment'
// 手动引入需要的语言包
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
const r = moment().startOf('day').fromNow()
console.log(`当前时间 ${Date.now()}: debug 的数据是 r: `, r)


export function getDate (date) {
  const pastDate = new Date (date).getTime()  // 指定的时间的毫秒值
  const currentDate = Date.now()              // 现在时间的毫秒值
  const time = (currentDate - pastDate) / 1000        // 现在时间减去指定时间的秒值

  if (time <= 0) {
    return ''
  } else if (time < 30) {
    return '刚刚'
  } else if (time < 60) {
    return parseInt(time) + '秒前'
  } else if (time < 3600) {
    return parseInt(time/60) + '分钟前'
  } else if (time < 86400) {
    return parseInt(time/3600) + '小时前'
  } else if (time < 2592000) {
    return parseInt(time/86400) + '天前'
  } else if (time < 15552000) {
    return parseInt(time/2592000) + '月前'
  } else if (time < 31104000) {
    return  '半年前'
  } else {
    return parseInt(time/31104000) + '年前'
  }


}
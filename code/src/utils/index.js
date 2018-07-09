export const formatTime = function (ts) {
  let h = Math.floor(ts / 3600)
  let m = Math.floor(ts / 60) % 60
  let s = ts % 60
  let time = h < 10 ? ('0' + h + ':') : (h + ':')
  time += m < 10 ? ('0' + m + ':') : (m + ':')
  time += s < 10 ? ('0' + s) : s
  return time
}

export const formatDate = function (ts) {
  let date = new Date(ts * 1000)
  let Y = date.getFullYear() + '-'
  let M = date.getMonth() + 1 + '-'
  let D = date.getDate()
  return Y + M + D
}

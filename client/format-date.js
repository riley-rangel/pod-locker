export default function formatDate(pubDate) {
  const date = new Date(pubDate)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const month = months[date.getMonth()]
  const day = date.getDate()
  return (day < 10)
    ? month + ' 0' + day
    : month + ' ' + day
}

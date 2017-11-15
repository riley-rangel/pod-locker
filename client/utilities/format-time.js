export default function formatTime(duration) {
  let formatted = '--'
  if (!duration) return formatted
  if (duration.includes(':')) {
    const times = duration.split(':').map(num => Number(num))
    times[0] < 1
      ? formatted = times[1] + ' min'
      : formatted = times[0] + ' hr ' + times[1] + ' min'
  }
  else {
    const hours = Math.floor(duration / 3600)
    const mins = Math.floor(((duration / 3600) - hours) * 60)
    hours < 1
      ? formatted = mins + ' min'
      : formatted = hours + ' hr ' + mins + ' min'
  }
  return formatted
}

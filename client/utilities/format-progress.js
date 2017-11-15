export default function formatProgress(seconds) {
  const hours = Math.floor((seconds - (seconds % 3600)) / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor((seconds % 60))
  return [ hours, mins, secs ]
    .map(increment => increment < 10 ? '0' + increment : increment)
    .join(':')
}

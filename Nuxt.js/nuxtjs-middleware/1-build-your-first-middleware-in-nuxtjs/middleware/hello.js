export default function () {
  if (process.server) {
    console.log('Server based middleware')
  } else {
    console.log('Client based middleware')
  }
}

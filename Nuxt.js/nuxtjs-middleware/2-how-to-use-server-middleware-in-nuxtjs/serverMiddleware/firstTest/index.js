export default function (req, res, next) {
  console.log(`This is my request url: ${req.url}`)
  next()
}

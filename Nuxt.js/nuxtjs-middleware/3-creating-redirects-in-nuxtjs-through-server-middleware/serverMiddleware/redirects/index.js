import urls from './urls'

export default function (req, res, next) {
  let path = req.url
  path = path.toLowerCase()
  path = path.replace(/\/$/, '')

  console.log(`${req.ur} => ${path}`)

  // const domain = 'my-website.com'
  // if (req.headers.host != domain) {
  //   res.writeHead(301, { Location: `https://${domain}` })
  //   res.end()
  // }

  if (urls[path]) {
    const url = urls[path]

    res.writeHead(url.code, { Location: url.dst })
    res.end()
  } else {
    next()
  }
}

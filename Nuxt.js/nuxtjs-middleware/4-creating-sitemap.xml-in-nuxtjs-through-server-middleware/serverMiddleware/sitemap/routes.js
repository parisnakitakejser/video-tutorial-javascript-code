const { Router } = require('express')
const router = Router()

const { generateSitemap } = require('./parser')

router.get('/.xml', async function (req, res, next) {
  try {
    const sitemapIndex = [{
      loc: 'a',
      lastmod: '2021-01-01'
    }, {
      loc: 'b',
      lastmod: '2021-11-01'
    }]

    if (sitemapIndex) {
      res.setHeader('Content-Type', 'application/xml')
      res.send(
        generateSitemap(sitemapIndex, `https://${req.headers.host}`)
      )
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router

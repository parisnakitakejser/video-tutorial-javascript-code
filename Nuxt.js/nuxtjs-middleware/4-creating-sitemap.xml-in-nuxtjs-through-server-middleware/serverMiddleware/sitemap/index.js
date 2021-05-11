const express = require('express')
const app = express()

const sitemap = require('./routes')

app.use(sitemap)

module.exports = {
  path: '/sitemap',
  handler: app
}

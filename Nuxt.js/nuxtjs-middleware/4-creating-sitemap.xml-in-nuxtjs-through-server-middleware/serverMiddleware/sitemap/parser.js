const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
module.exports = {
  generateSitemap(sitemap, host) {
    let xml = `${xmlHeader}<urlset>`

    sitemap.forEach((item) => {
      xml += `<url><loc>${item.loc}</loc><lastmod>${item.lastmod}</lastmod></url>`
    })

    xml += '</urlset>'
    return xml
  }
}

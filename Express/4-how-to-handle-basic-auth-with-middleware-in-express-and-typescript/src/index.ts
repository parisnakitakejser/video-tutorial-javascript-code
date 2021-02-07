import mwBasicAuth from "./middleware/basicAuth"
import mwLogging from "./middleware/logging"
import mwRequestTime from "./middleware/requestTime"
import routes from "./routes"

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(mwBasicAuth)
app.use(mwLogging)
app.use(mwRequestTime)
app.use(routes)
  
app.listen(port, () => {
    console.log(`App listening at http://localhopst:${port}`)
})
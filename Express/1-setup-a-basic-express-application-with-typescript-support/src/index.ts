const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
    console.log('Basic hello world request')
    res.send('Hello World!')
}) 
  
app.listen(port, () => {
    console.log(`App listening at http://localhopst:${port}`)
})
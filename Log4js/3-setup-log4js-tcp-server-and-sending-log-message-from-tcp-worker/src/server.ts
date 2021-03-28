const log4js = require('log4js');
const express = require('express')

log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        file: { type: 'file', filename: 'all-the-logs.log' },
        server: { type: 'tcp-server', host: '0.0.0.0', port: 6000 },
    },
    categories: {
        default: {
            appenders: ['file', 'out'],
            level: 'debug'
        }
    }
})

const app = express();
const port = 3000

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Express server running!')
})
import { configure, getLogger } from 'log4js';

configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: 'app.log' },
    },
    categories: {
        default: {
            appenders: ['app', 'out'],
            level: 'debug'
        }
    }
})

const logger = getLogger();

export default logger;
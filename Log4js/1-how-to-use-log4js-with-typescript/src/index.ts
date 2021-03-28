import { getLogger, configure } from 'log4js';

configure({
    appenders: {
        app: { type: "file", filename: "app.log" },
        out: { type: 'stdout' },
        multi: {
            type: 'multiFile', base: 'logs/', property: 'categoryName', extension: '.log',
            maxLogSize: 1024, backup: 3, compress: true
        }
    },
    categories: {
        default: {
            appenders: ["app", "out", "multi"],
            level: 'debug'
        }
    }
});

const logger = getLogger();

logger.info('Hello world! my first log4js test')
logger.debug('logging debug')
logger.warn('logging warning')
logger.error('logging error')
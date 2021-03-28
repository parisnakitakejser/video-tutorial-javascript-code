import { configure, getLogger, shutdown } from 'log4js';

configure({
    appenders: {
        out: { type: 'stdout' },
        network: {type: 'tcp', host: 'localhost', port: 6000}
    },
    categories: {
        default: {
            appenders: ['out', 'network'],
            level: 'debug'
        }
    }
})

const logger = getLogger();

logger.info('TCP process - Info')
logger.debug('TCP process - Debug')
logger.warn('TCP process - Warn')
logger.error('TCP process - Error')

shutdown();
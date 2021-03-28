import logger from './helpers/logger';
import my_test from './secound';

logger.info('Hello World! first info log msg')
logger.error('Error log msg')
logger.debug('Debug log msg')
logger.warn('Warning log msg')

logger.info(`${my_test}`)
import * as winston from 'winston';
import { combinedDailyFileConfiguration, errorDailyFileConfiguration, } from './logger.config';

import CustomTransport from './logger.transport';
import colors from './logger.colors';
import format from './logger.format';
import DailyRotateFile = require('winston-daily-rotate-file');

winston.addColors(colors);

const logger = winston.createLogger({
  format,
  level: 'debug',
  transports: [
    new CustomTransport(),
    new winston.transports.Console(),
    new DailyRotateFile(errorDailyFileConfiguration),
    new DailyRotateFile(combinedDailyFileConfiguration),
  ],
});

export default logger;
import * as express from 'express';
import logger from './utils/logger';

const requestLoggerMiddleware = (req: express.Request, resp: express.Response, next: express.NextFunction): void => {

  logger.info(`${req.method} ${req.originalUrl}`);
  const start = new Date().getTime();

  resp.on('finish', () => {

    const elapsed = new Date().getTime() - start;

    logger.info(`${req.method} ${req.originalUrl} ${resp.statusCode} ${elapsed}ms`);

  });
  next();

};

export { requestLoggerMiddleware, };
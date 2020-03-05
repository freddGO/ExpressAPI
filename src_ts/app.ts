import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import logger from './utils/logger';
import { requestLoggerMiddleware, } from './request.logger.middleware';

import routerDatabase from './entrypoint/routes/database/database';


const app = express();

app.use(bodyParser.json());
app.use(cors({ credentials: true,
  origin: true, }));
app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {

  res.send('smn');

});

app.use('/database', routerDatabase);


app.listen(9000, () => logger.info('Server running'));
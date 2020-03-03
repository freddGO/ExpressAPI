import express from 'express'
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { requestLoggerMiddleware } from './request.logger.middleware';

import routerDatabase from './entrypoint/routes/database/database'

declare function require(moduleName: string): any;
if (process.env.NODE_ENV !== 'production') {
const dotenv: any = require('dotenv');
dotenv.config();
}

const app = express();
app.use(bodyParser.json());
app.use(cors({origin:true,credentials: true}));
app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
    res.send('smn');
});

app.use('/database', routerDatabase);



app.listen(9000,  () => console.log('Server running'));
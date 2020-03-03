import * as dotenv from 'dotenv';

dotenv.config();
let path;
console.log('dirname', __dirname)
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path });

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
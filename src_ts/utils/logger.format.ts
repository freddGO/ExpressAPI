import { format, } from 'logform';
const { combine, timestamp, colorize, printf, splat, } = format;

export default combine(
  splat(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS [GMT]ZZ', }),
  colorize({
    all: false,
    level: false,
    message: true,
  }),
  printf((data): string => `${data.timestamp} ${data.message}`)
);
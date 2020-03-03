import databaseConfiguration from '../interfaces/databaseConfiguration';
import "../../lib/env"

export default class DatabaseConfiguration implements databaseConfiguration {

  public database: string;

  public hostname: string;

  public password: string;

  public port: number;

  public protocol: string;

  public uid: string;

  public poolInitialSize: number;

  public poolMaxSize: number;


  public constructor () {

    this.database = String(process.env.DATABASE_NAME);
    this.hostname = String(process.env.DATABASE_HOSTNAME);
    this.port = Number(process.env.DATABASE_PORT);
    this.protocol = String(process.env.DATABASE_PROTOCOL);
    this.uid = String(process.env.DATABASE_UID);
    this.password = String(process.env.DATABASE_PWD);
    this.poolInitialSize = Number(process.env.DATABASE_POOL_INIT_SIZE);
    this.poolMaxSize = Number(process.env.DATABASE_POOL_MAX_SIZE);

  }

  public cn (): string {

    let cn =
      `DATABASE=${this.database};` +
      `HOSTNAME=${this.hostname};` +
      `PORT=${this.port};` +
      `PROTOCOL=${this.protocol};` +
      `UID=${this.uid};` +
      `PWD=${this.password};` ;

    return cn;

  }

}
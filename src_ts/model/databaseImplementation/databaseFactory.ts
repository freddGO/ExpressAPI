import { Database, Pool, } from 'ibm_db';
import DB2Configuration from '../../services/DatabaseConectionImplementation/databaseConfiguration';
import DB2Connection from '../../services/DatabaseConectionImplementation/databaseConection';
import logger from '../../utils/logger';

const db2Configuration: DB2Configuration = new DB2Configuration(),
  pool: Pool = new Pool();

pool.init(db2Configuration.poolInitialSize, db2Configuration.cn());
pool.setMaxPoolSize(db2Configuration.poolMaxSize);

function db2Factory (): Promise<DB2Connection> {

  return new Promise<DB2Connection>((resolve: Function, reject: Function): void => {

    pool.open(db2Configuration.cn(), (error: Error, connection: Database): void => {

      if (error) {

        reject(error);

      } else {

        logger.info('IBM DB2 database connection has been successfully created.');
        resolve(new DB2Connection(connection));

      }

    });

  });

}

export { pool, db2Factory as factory, };
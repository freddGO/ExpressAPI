import DB2Connection from '../../services/databaseConectionImplementation/databaseConection';
import { factory, } from './databaseFactory';

export default function query (queryString: string, parameters?: any[]): Promise<Record<string, any>[]> {

  return new Promise<Record<string, any>[]>((resolve: Function, reject: Function): void => {

    factory()
    .then((connection: DB2Connection): Promise<[ DB2Connection, Record<string, any>[] ]> => Promise.all([
      connection,
      connection.query(queryString, parameters),
    ]))
    .then((values): Promise<[ DB2Connection, Record<string, any>[]]> => {

      const [ connection, rows, ] = values;

      return Promise.all([ connection.close(), rows, ]);

    })
    .then((values): void => {

        const [ , rows, ] = values;

      resolve(rows);

    })
    .catch((error: Error): void => reject(error));

  });

};
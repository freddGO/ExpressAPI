import { Database, ODBCResult, ODBCStatement, } from 'ibm_db';
import IDB2Connection from '../interfaces/DatabaseConection';

import logger from '../../utils/logger';

// Import logger from '../utils/logger';

export default class DB2Connection implements IDB2Connection {

  public Database: Database;

  public constructor (connection: Database) {

    this.Database = connection;

  }

  public beginTransaction (): Promise<DB2Connection> {

    return new Promise<DB2Connection>((resolve: Function, reject: Function): void => {

      this.Database.beginTransaction((error: Error): void => {

        if (error) {

          reject(error);

        } else {

          resolve(this);

        }

      });

    });

  }

  public close (): Promise<DB2Connection> {

    return new Promise<DB2Connection>((resolve: Function, reject: Function): void => {

      this.Database.close((error: Error): void => {

        if (error) {

          reject(error);

        } else {

          logger.info('IBM DB2 database connection has been successfully closed.');
          resolve(this);

        }

      });

    });

  }

  public commitTransaction (): Promise<DB2Connection> {

    return new Promise<DB2Connection>((resolve: Function, reject: Function): void => {

      this.Database.commitTransaction((error: Error): void => {

        if (error) {

          reject(error);

        } else {

          resolve(this);

        }

      });

    });

  }

  public static execute (statement: ODBCStatement, parameters: any[]): Promise<ODBCResult> {

    return new Promise<ODBCResult>((resolve: Function, reject: Function): void => {

      statement.execute(parameters, (error: Error, result: any): void => {

        if (error) {

          reject(error);

        } else {

          resolve(result);

        }

      });

    });

  }

  public static fetch (result: Record<string, any>, fetchMode = 4): Promise<any> {

    return new Promise<any>((resolve: Function, reject: Function): void => {

      result.fetch({ fetchMode, }, (error: Error, row: any[]): void => {

        if (error) {

          reject(error);

        } else {

          resolve(row);

        }

      });

    });

  }

  public prepare (query: string): Promise<ODBCStatement> {

    return new Promise<ODBCStatement>((resolve: Function, reject: Function): void => {

      this.Database.prepare(query, (error: Error, statement: ODBCStatement): void => {

        if (error) {

          reject(error);

        } else {

          resolve(statement);

        }

      });

    });

  }

  public query (query: string, parameters?: any[]): Promise<Record<string, any>[]> {

    return new Promise<Record<string, any>[]>((resolve: Function, reject: Function): void => {

      logger.info(`Executing query ${query} binding parameters ${JSON.stringify(parameters)}`);
      this.Database.query(query, parameters, (error: Error, rows: Record<string, any>[]): void => {

        if (error) {

          reject(error);

        } else {

          resolve(rows);

        }

      });

    });

  }

  public rollbackTransaction (): Promise<DB2Connection> {

    return new Promise<DB2Connection>((resolve: Function, reject: Function): void => {

      this.Database.rollbackTransaction((error: Error): void => {

        if (error) {

          reject(error);

        } else {

          resolve(this);

        }

      });

    });

  }

}
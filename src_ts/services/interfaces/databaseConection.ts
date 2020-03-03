import { Database, ODBCStatement, } from 'ibm_db';

export default interface IDB2Connection {

  readonly Database: Database;

  beginTransaction (): Promise<IDB2Connection>;

  close (): Promise<IDB2Connection>;

  commitTransaction (): Promise<IDB2Connection>;

  prepare (query: string): Promise<ODBCStatement>;

  query (query: string, parameters?: any[]): Promise<Record<string, any>>;

  rollbackTransaction (): Promise<IDB2Connection>;

}
import {IMain, IDatabase as IDb, IOptions} from 'pg-promise';
import * as pgPromise from 'pg-promise';
import { IDataConfiguration } from "./configurations";

export interface IDatabase {
    pgp: any;
}

export function init(config: IDataConfiguration): IDatabase {

    //(<any>Mongoose).Promise = Promise;
    console.log("initialize database");
    const pgp:IMain = pgPromise({});
    const cn:string = process.env.DATABASE_URL || config.connectionString;
    const db:IDb<any> = pgp({connectionString: cn, ssl: true});
    console.log("done initialize database");
    return {
      pgp: db
    };
}

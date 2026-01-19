import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Pool, ResultSetHeader, createPool } from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleDestroy 
{
    public readonly pool: Pool;

    constructor() {
        this.pool = createPool({
            host: '127.0.0.1',
            user: 'root',
            password: 'Rohith@123',
            database: 'DoctorConnectDB',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }


    async query<T = any>(sql: string, params: any[] = [],): Promise<T | ResultSetHeader> 
    {
        const [result] = await this.pool.execute(sql, params);
        return result as T | ResultSetHeader;
    }

    async onModuleDestroy() {
        await this.pool.end();
    }

}

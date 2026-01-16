import { Injectable } from '@nestjs/common';
import { ResultSetHeader } from 'mysql2';
import { DatabaseService } from '../DataBase/database.service';

@Injectable()
export class DoctorsRepository {
    constructor(private readonly mySqlService: DatabaseService) { }

    async createDoctor(name: string, specialization: string, email: string,) {
        const sql = `INSERT INTO Doctor (name, specialization, email) VALUES (?, ?, ?)`;

        const result = await this.mySqlService.query<ResultSetHeader>(sql, [name, specialization, email],);

        return {
            id: result.insertId,
            name,
            specialization,
            email,
        };
    }
}

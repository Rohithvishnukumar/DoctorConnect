import { Injectable, NotFoundException } from '@nestjs/common';
import { ResultSetHeader } from 'mysql2';
import { DatabaseService } from '../DataBase/database.service';

@Injectable()
export class DoctorsRepository 
{
    constructor(private readonly mySqlService: DatabaseService) { }

    async createDoctor(name: string, specialization: string, email: string,) 
    {
        const sql = `INSERT INTO Doctor (name, specialization, email) VALUES (?, ?, ?)`;

        const result = await this.mySqlService.query<ResultSetHeader>(sql, [name, specialization, email],);

        return {
            id: result.insertId,
            name,
            specialization,
            email,
        };
    }

    async getDoctors()
    {
        const sql = `SELECT * FROM Doctor`;
        const result = await this.mySqlService.query<ResultSetHeader>(sql);   
        return result;
    }

    async getDocWithSpec(spec: string) 
    {
        const sql = `select * from Doctor where LOWER(specialization) = LOWER(?)`;
        const result = await this.mySqlService.query<ResultSetHeader>(sql, [spec]);
        return result;   

    }

    async updateDoctorSpec(id: number ,specialization: string) 
    {
        const sql = `UPDATE Doctor SET specialization = ? WHERE id = ?`;
        const result = await this.mySqlService.query<ResultSetHeader>(sql, [specialization,id]);
        return result; 
    }

    async updateDoctorName(id: number ,name: string) 
    {
        const sql = `UPDATE Doctor SET name = ? WHERE id = ?`;
        const result = await this.mySqlService.query<ResultSetHeader>(sql, [name,id]);
        return result; 
    }

    async delDoc(id: number) 
    {
        const sql = `DELETE FROM Doctor WHERE id = ?`;
        const result = await this.mySqlService.query<ResultSetHeader>(sql,[id]);
        if (result.affectedRows === 0) 
        {
            throw new NotFoundException('Doctor not found');
        }
        return result;
    }
}
 
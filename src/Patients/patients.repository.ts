import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreatePatientDto } from "src/DTOs/create-patient-dto";
import { ResultSetHeader } from 'mysql2';


@Injectable()
export class PatientsRepository {
    constructor(private patientsrepo: DatabaseService) { }

    async registerPatients(patientsDto: CreatePatientDto) {
        const { name, phone, age } = patientsDto;

        const sql = `INSERT INTO Patient(name, phone, age) VALUES (?,?,?)`;
        const result = await this.patientsrepo.query<ResultSetHeader>(sql, [name, phone, age ?? null]);

        return {
            result,
            state: "succesfull"
        };

    }

    async getPatientById(id: number) {
        const sql = `SELECT * FROM Patient WHERE id = ?`;
        const result = await this.patientsrepo.query<ResultSetHeader>(sql, [id]);
        return result;
    }

    async getPatients() {
        const sql = `SELECT * FROM Patient`;
        const result = await this.patientsrepo.query<ResultSetHeader>(sql);
        return result;
    }

    async deletePatient(id: number) {
        const sql = `DELETE FROM Patient WHERE id = ?`;
        const result = await this.patientsrepo.query<ResultSetHeader>(sql, [id]);
        if (result.affectedRows === 0) {
            throw new NotFoundException('Patient not found');
        }
        return result;
    }
}
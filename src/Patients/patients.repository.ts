import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreatePatientDto } from "src/DTOs/create-patient-dto";
import { ResultSetHeader } from 'mysql2';


@Injectable()
export class PatientsRepository
{
    constructor(private patientsrepo : DatabaseService){}
    
    async registerPatients(patientsDto: CreatePatientDto)
    {
        const {name,phone,age} = patientsDto;

        const sql = `INSERT INTO Patient(name, phone, age) VALUES (?,?,?)`;
        const result = await this.patientsrepo.query<ResultSetHeader>(sql, [name,phone,age ?? null]);  

        return{
            result,
            state : "succesfull"
        };
        
    }
}
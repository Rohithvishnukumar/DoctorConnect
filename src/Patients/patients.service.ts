import { Injectable } from '@nestjs/common';
import { PatientsRepository } from './patients.repository';
import { CreatePatientDto } from 'src/DTOs/create-patient-dto';

@Injectable()
export class PatientsService 
{
    constructor(private patientsRepo: PatientsRepository) { }

    async registerPatients(patientsDto: CreatePatientDto) 
    {
        return await this.patientsRepo.registerPatients(patientsDto);
    }

    async getPatientById(id: number)
    {
        return await this.patientsRepo.getPatientById(id);
    }
    async getPatients()
    {
        return await this.patientsRepo.getPatients();
    }

    async deletePatient(id: number)
    {
        return await this.patientsRepo.deletePatient(id);
    }
}
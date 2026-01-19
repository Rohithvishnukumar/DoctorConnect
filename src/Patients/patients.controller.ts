import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from 'src/DTOs/create-patient-dto';

@Controller('patients')
export class PatientsController 
{
    constructor(private patientsService : PatientsService){}
    
    @Post('/register')
    async registerPatients(@Body() patientsDto : CreatePatientDto)
    {
        return await this.patientsService.registerPatients(patientsDto);
    }
}

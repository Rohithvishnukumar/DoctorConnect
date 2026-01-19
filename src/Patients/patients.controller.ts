import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from 'src/DTOs/create-patient-dto';

@Controller('patients')
export class PatientsController {
    constructor(private patientsService: PatientsService) { }

    @Post('/register')
    async registerPatients(@Body() patientsDto: CreatePatientDto) {
        return await this.patientsService.registerPatients(patientsDto);
    }

    @Get('/:id')
    async getPatientById(@Param('id') id: number) {
        return await this.patientsService.getPatientById(id);
    }

    @Delete('/:id')
    async deletePatient(@Param('id') id: number) {
        return await this.patientsService.deletePatient(id);
    }

    @Get()
    async getPatients() {
        return await this.patientsService.getPatients();
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from '../DTOs/create-doctor-dto';
import { UpdateDoctorDTO } from 'src/DTOs/update-doctor-dto';

@Controller('doctors')
export class DoctorsController 
{
    constructor(private doctorsService : DoctorsService){}

    @Post('/createEntry')
    CreateDoctor( @Body() createDoctorDto : CreateDoctorDto)
    {
        return this.doctorsService.CreateDoctor(createDoctorDto);
    }

    @Get('/getdoctors')  // Can Use DTO
    async getDoctors( @Query('specialization') spec? : string)
    {
        return await this.doctorsService.getDoctors(spec);
    }

    @Patch('/updatedoc/:id')
    async updateDoctorDet(@Param('id') id : number, @Body() updateDoctorDto : UpdateDoctorDTO)
    {
        return await this.doctorsService.updateDoctorDet(id, updateDoctorDto);
    }

    @Delete('/deletedoc/:id')
    async delDoc(@Param('id') id : number)
    {
        return await this.doctorsService.delDoc(id);
    }
}

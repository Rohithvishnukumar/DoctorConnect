import { Body, Controller, Post } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from '../DTOs/create-doctor-dto';

@Controller('doctors')
export class DoctorsController 
{
    constructor(private doctorsService : DoctorsService){}

    @Post('createEntry')
    CreateDoctor( @Body() createDoctorDto : CreateDoctorDto)
    {
        this.doctorsService.CreateDoctor(createDoctorDto);
    }
}

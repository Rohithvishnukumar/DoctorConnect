import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from '../DTOs/create-doctor-dto';
import { DoctorsRepository } from './doctors.repository';

@Injectable()
export class DoctorsService 
{
    constructor(private doctorsrepo : DoctorsRepository){}

    public CreateDoctor( createDoctorDto : CreateDoctorDto)
    {
        const {name,specialization,email} = createDoctorDto;
        
        return this.doctorsrepo.createDoctor(name,specialization,email);
    }
}

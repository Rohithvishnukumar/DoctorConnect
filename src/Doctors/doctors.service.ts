import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from '../DTOs/create-doctor-dto';
import { DoctorsRepository } from './doctors.repository';
import { UpdateDoctorDTO } from 'src/DTOs/update-doctor-dto';

@Injectable()
export class DoctorsService 
{
    constructor(private doctorsrepo : DoctorsRepository){}

    public async CreateDoctor( createDoctorDto : CreateDoctorDto)
    {
        const {name,specialization,email} = createDoctorDto;
        return this.doctorsrepo.createDoctor(name,specialization,email);
    }

    public async getDoctors(spec? : string)
    {
        if(spec)
        {
            return await this.doctorsrepo.getDocWithSpec(spec);
        }
        return await this.doctorsrepo.getDoctors();
    }

    public async updateDoctorDet(id : number, updateDoctorDto : UpdateDoctorDTO)
    {
        const{name,specialization} = updateDoctorDto;
        let updatedName ;
        let updatedSpec;

        if(name)
        {
            updatedName = await this.doctorsrepo.updateDoctorName(id,name);
        }
        if(specialization)
        {
            updatedSpec = await this.doctorsrepo.updateDoctorSpec(id,specialization);
        }

        return{
            updatedName,
            updatedSpec
        }
    }

    async delDoc(id: number) 
    {
        return await this.doctorsrepo.delDoc(id);
    }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorDto } from './create-doctor-dto';

export class UpdateDoctorDTO extends PartialType(CreateDoctorDto){}



// Here We can replicate the CreateDoctorDto with optional fields or do like above
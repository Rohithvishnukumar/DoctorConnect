import { IsString, IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateDoctorDto 
{
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(400)
    specialization: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;
}
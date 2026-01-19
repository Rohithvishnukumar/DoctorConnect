
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAppointmentDto {
    @IsNotEmpty()
    @IsNumber()
    patientId: number;

    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @IsNotEmpty()
    @IsString()
    dateTime: string;
}

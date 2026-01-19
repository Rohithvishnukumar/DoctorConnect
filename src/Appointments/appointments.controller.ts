
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from 'src/DTOs/create-appointment-dto';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) { }

    @Post('/book')
    async bookAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsService.bookAppointment(createAppointmentDto);
    }

    @Get('/doctor/:doctorId')
    async getAppointmentsByDoctor(@Param('doctorId') doctorId: number) {
        return this.appointmentsService.getAppointmentsByDoctor(doctorId);
    }

    @Get('/admin')
    async getAllAppointments() {
        return this.appointmentsService.getAllAppointments();
    }
}

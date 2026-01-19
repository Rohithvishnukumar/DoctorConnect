
import { BadRequestException, Injectable } from '@nestjs/common';
import { AppointmentsRepository } from './appointments.repository';
import { CreateAppointmentDto } from 'src/DTOs/create-appointment-dto';

@Injectable()
export class AppointmentsService {
    constructor(private readonly appointmentsRepository: AppointmentsRepository) { }

    async bookAppointment(createAppointmentDto: CreateAppointmentDto) {
        const { doctorId, dateTime } = createAppointmentDto;

        // Conflict Detection
        const hasConflict = await this.appointmentsRepository.findConflictingAppointment(
            doctorId,
            dateTime,
        );

        if (hasConflict) {
            throw new BadRequestException(
                'Doctor already has an appointment at this time.',
            );
        }

        return this.appointmentsRepository.createAppointment(createAppointmentDto);
    }

    async getAppointmentsByDoctor(doctorId: number) {
        return this.appointmentsRepository.getAppointmentsByDoctor(doctorId);
    }

    async getAllAppointments() {
        return this.appointmentsRepository.getAllAppointments();
    }
}

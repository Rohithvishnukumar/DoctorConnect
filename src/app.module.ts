import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';

import { AppointmentsModule } from './Appointments/appointments.module';

@Module({
  imports: [DatabaseModule, DoctorsModule, PatientsModule, AppointmentsModule],
})
export class AppModule { }

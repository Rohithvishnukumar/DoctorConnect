import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [DatabaseModule, DoctorsModule, PatientsModule],
})
export class AppModule {}
